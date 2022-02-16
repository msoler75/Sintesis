const imprimirCadaLinea = 0

import Map from './internals/Map.js'
import Class from './internals/Class.js'
import Vector from './internals/Vector.js'
import Single from './internals/Single.js'
import valueOf from './internals/ValueOf.js'
import Variable from './internals/Variable.js'
import Function from './internals/Function.js'
import Instance from './internals/Instance.js'
import Iterator from './internals/Iterator.js'
import MemoryRef from './internals/MemoryRef.js'
import printObject from './internals/Print.js'
import SintesisError from './SintesisError.js'
import {SymbolFinder} from './internals/Symbols.js'
import SintesisParserVisitor from './lib/SintesisParserVisitor.js'
import {
  variableCreate,
  createVectorWithSizes
} from './internals/Factory.js'
import promptSync from 'prompt-sync';
const prompt = promptSync();

// Convert To parameters:
const paramNumber = ['n', 'num', 'number', 'número', 'numero']
const paramInteger = ['i', 'e', 'int', 'ent', 'entero']
const paramFloat = ['f', 'd', 'dec', 'float', 'decimal']
const paramText = ['s', 't', 'string', 'str', 'text', 'texto']


class SintesisSymbolParser extends SintesisParserVisitor {

  setSymbolFinder(sf) {
    this.symbolFinder = sf;
  }

  // Visit a parse tree produced by SintesisParser#program.
  visitProgram(ctx) {
    this.declaringSymbols = false
    this.visitChildren(ctx);
  }

  // Visit a parse tree produced by SintesisParser#block.
  visitBlock(ctx) {
    this.symbolFinder.createTable(ctx)
    const r = ctx.stmt ? this.visit(ctx.stmt) : this.visitChildren(ctx)
    return r
  }

  // Visit a parse tree produced by SintesisParser#functionDeclaration.
  visitFunctionDeclaration(ctx) {
    let id = ctx.id.text
    const fn = new Function(ctx)
    if (id in this.symbolFinder.currentContext().memory)
      throw new SintesisError(ctx.id, `El símbolo '${id}' ya fue definido en este contexto`)
    this.symbolFinder.addFunction(ctx, id, fn)
    this.symbolFinder.createTable(ctx, fn)
    this.visit(ctx.pl)
    this.visit(ctx.stmt)
  }

   // Visit a parse tree produced by SintesisParser#classDeclaration.
   visitClassDeclaration(ctx) {
    const id = ctx.id.text;
    let extend = ctx.ext ? ctx.ext.text : null
    const attributes = ctx.atrs ? ctx.atrs.children.map(x => x.getText()).filter(x => !x.match(/[,{}]/)) : {}
    // const attributes = ctx.atrs? ctx.atrs.children.filter(x=>x.constructor.name!=='TerminalNodeImpl').map(x => x.getText())
    const methodList = ctx.methods ? ctx.methods.children.map(x => new Function(x, ctx)) : {}
    if (id in this.symbolFinder.currentContext().memory)
      throw new SintesisError(ctx.id, `El símbolo '${id}' ya fue definido en este contexto`)
    if (extend) {
      let memoryref = this.symbolFinder.findClass(extend)
      if (!memoryref)
        throw new SintesisError(ctx.id, 'No existe la clase ${extend}')
      if (!(memoryref.variable instanceof Class))
        throw new SintesisError(ctx.id, '${extend} no es una clase')
      extend = memoryref.variable
    }

    let extendingWithNoDefaultConstructor = extend && !extend.hasDefaultConstructor()
    let methods = {}
    for (const i in methodList) {
      const method = methodList[i]
      const idm = method.context.id.text
      if (extendingWithNoDefaultConstructor && Class.isConstructorName(idm)) {
        // comprobar que el constructor llama al constructor padre
        const body = method.context.children.find(x => x.constructor.name === 'FunctionBodyContext').children[0].children[1]
        // console.log(body.getText())
        let callingSuper = false
        const calls = this.find(body, 'ExpMemberFuncContext')
        for (const c of calls) {
          let s = this.find(c, 'ExpSuperContext')
          if (s.length > 0) {
            const a = this.find(s[0].parentCtx, 'ArgumentsContext')
            var numargs = Math.ceil((a[0].children.length - 2) / 2)
            if (!extend.getConstructor(numargs))
              throw new SintesisError(a[0], `La clase padre no tiene ningún constructor ` + (numargs > 0 ? `con ${numargs} parámetros` : `sin parámetro${numargs>1?'s':''}`))
            callingSuper = true
          }
        }
        if (!callingSuper)
          throw new SintesisError(body, 'Debe llamar al método constructor de la clase padre')
        method.callingSuperClass = true
      }
      methods[idm] = method
    }
    // let k = Object.values(methods)/
    if (attributes.length && !Object.values(methods).find(x => Class.isConstructorName(x.name)))
      throw new SintesisError(ctx.mdec || ctx, "Se requiere un constructor para inicializar los atributos")

    const cls = new Class(id, extend, attributes, methods)


    // si no tiene atributos no requiere constructor por defecto definido, pero lo necesitamos para que funcione
    if (!attributes.length && !cls.hasDefaultConstructor())
      // si no tiene un constructor por defecto definido, le creamos uno
      cls.methods['constructor'] = new Function({
        id: {
          text: 'constructor'
        }
      }, ctx)

    this.symbolFinder.addClass(ctx, id, cls)
    return this.visitChildren(ctx)
  }


  // Visit a parse tree produced by SintesisParser#expAssignment.
  visitExpAssignment(ctx) {
    this.createIfNotFound = true
    this.visit(ctx.dest)
    this.createIfNotFound = false
  }

  // Visit a parse tree produced by SintesisParser#expIdentifier.
  visitExpIdentifier(ctx) {
    const id = ctx.getText()
    let mem_id = this.symbolFinder.findSymbol(ctx, id)
    if (!mem_id && this.createIfNotFound)
      this.symbolFinder.addSymbol(ctx, id)
  }

  // Visit a parse tree produced by SintesisParser#expVar.
  visitExpVar(ctx) {
    const id = ctx.getText()
    this.symbolFinder.addVariable(ctx, id, new Variable())
  }


  // Visit a parse tree produced by SintesisParser#forFromToStatement.
  visitForFromToStatement(ctx) {
    const iter = ctx.iter
    const id_iterator = iter.id.text
    this.symbolFinder.createTable(ctx)
    let mem_index = iter.vvar ? null : this.symbolFinder.findSymbol(ctx, id_iterator)
    if (!mem_index || !mem_index._variable || !(mem_index._variable instanceof Variable))
      mem_index = this.symbolFinder.addVariable(ctx, id_iterator, new Single())
    this.visit(ctx.stmt)
  }


  // Visit a parse tree produced by SintesisParser#forFromToStatement2.
  visitForFromToStatement2(ctx) {
    return this.visitForFromToStatement(ctx);
  }


  // Visit a parse tree produced by SintesisParser#forEachStatement.
  visitForEachStatement(ctx) {
    const iter = ctx.iter
    const value_id = iter.idv ? iter.idv.text : null
    const index_id = iter.idk ? iter.idk.text : null

    this.symbolFinder.createTable(ctx)
    if (index_id) this.symbolFinder.addVariable(ctx, index_id, new Variable())
    this.symbolFinder.addVariable(ctx, value_id, new Variable())
    this.visit(ctx.stmt)
  }


  // Visit a parse tree produced by SintesisParser#forEachStatement2.
  visitForEachStatement2(ctx) {
    return this.visitForEachStatement(ctx);
  }

}



export default class SintesisEval extends SintesisParserVisitor {

  // Visit a parse tree produced by SintesisParser#program.
  visitProgram(ctx) {
    // parsea todos los símbolos primero
    this.symbolFinder = new SymbolFinder();
    this.symbolParser = new SintesisSymbolParser()
    this.symbolParser.setSymbolFinder(this.symbolFinder)
    this.symbolParser.visitProgram(ctx)
    this.output = ""
    // procesa el programa
    return this.visitChildren(ctx);
  }

  find(ctx, className) {
    if (ctx.constructor.name === className) return [ctx]
    let r = []
    if (ctx.children && Array.isArray(ctx.children)) {
      ctx.children.map(function (child) {
        r = r.concat(this.find(child, className))
      }, this);
    }
    return r
  }

  // Visit a parse tree produced by SintesisParser#statementList.
  visitStatementList(ctx) {
    let callContext = this.symbolFinder.getFuncContext(ctx)
    let i = 0
    while ((!callContext || !callContext.functionEnded) && i < ctx.children.length) {
      if (imprimirCadaLinea) console.log(ctx.children[i].getText())
      this.visit(ctx.children[i++])
    }
    // console.log("LENGTH=", this.symbolFinder.contexts.length)
    return callContext ? (callContext.functionResult || null) : null
  }

  // Visit a parse tree produced by SintesisParser#statement.
  visitStatement(ctx) {
    // console.log('statement', ctx.getText())
    return ctx.children.length ? this.visit(ctx.children[0]) : null
    //return this.visitChildren(ctx);
  }


  // Visit a parse tree produced by SintesisParser#functionDeclaration.
  visitFunctionDeclaration(ctx) {
    return null
  }

  // Visit a parse tree produced by SintesisParser#classDeclaration.
  visitClassDeclaration(ctx) {
    return null
  }

  // Visit a parse tree produced by SintesisParser#methodDeclaration.
  visitMethodDeclaration(ctx) {
    return this.visitFunctionDeclaration(ctx)
  }

 


  // Visit a parse tree produced by SintesisParser#expNew.
  visitExpNew(ctx) {
    const id = ctx.id.text
    let memoryref = this.symbolFinder.findClass(id)
    if (!memoryref)
      throw new SintesisError(ctx.id, 'No existe la clase ${id}')
    if (!(memoryref.variable instanceof Class))
      throw new SintesisError(ctx.id, '${id} no es una clase')
    let obj = new Instance(memoryref.variable)
    let values = ctx.args ? this.visit(ctx.args).values : []
    if (values) ctx.args.values = values
    let constructor = obj.getConstructor(values.length)
    if (!constructor)
      throw new SintesisError(ctx.args, `No existe un método constructor ` + (values.length ? `con ${values.length} parámetro${values.length!==1?'s':''}` : `sin parámetros`))

    this.callToFunction(new MemoryRef(obj, 'constructor'), ctx.args)
    return new MemoryRef(obj)
  }



  callToFunction(memoryref, ctxArgs, justInClass) {
    const fn = memoryref.variable

    // caso de constructores vacíos
    if (!fn.context.stmt) return

    const obj = memoryref._variable
    const values = ctxArgs ? ctxArgs.values : []


    // obtenemos los argumentos o parámetros de la función y los valores
    let params = fn.context.pl ? this.visit(fn.context.pl).params : []

    if (params.length !== values.length)
      throw new SintesisError(ctxArgs, (fn.isConstructor ? `El constructor ` : `La función ${fn.name} `) + (params.length ? `requiere ${params.length} parámetros` : `no tiene parámetros`))

    /*
    let instances = []
    // si es una función (método) de clase...
    // creamos para cada superclase una tabla de símbolos de todos sus atributos de clase
    if (fn._class && obj instanceof Instance) {
      // obtenemos la referencia al objeto o instancia de clase
      let ref = obj
      do {
        instances.unshift(ref)
        ref = ref.superClass
      } while (ref)

      for (const instance of instances) {
        // creamos un nuevo contexto
        this.symbolFinder.pushLevel(false, instance)

        // añadimos los atributos y métodos en la tabla de símbolos
        for (const id in instance.attributes) {
          const vari = instance.getRef(id)
          this.symbolFinder.addVariable(id, vari)
        }

        for (const id in instance.methods) {
          this.symbolFinder.addFunction(id, instance.methods[id])
        }
      }
    }
    */

    // creamos un nuevo contexto de símbolos de un contexto de función
    // this.symbolFinder.pushLevel(true)

    // pone en el contexto los parámetros de la función como si fueran variables, con los valores asignados desde la llamada con argumentos a la función
    for (let i = 0; i < params.length; i++) {
      let id = params[i]
      //this.symbolFinder.addVariable(id, variableCreate(i in values ? valueOf(values[i]) : null))
    }


    // si es un método constructor de una clase, que además tiene una clase padre, 
    // y no tiene explícitamente una llamada a la superclase...
    if (fn._class && obj.superClass && Class.isConstructorName(fn.name) && !fn.callingSuperClass) {
      let fncon = obj.superClass._class.getConstructor(0)
      this.callToFunction(new MemoryRef(obj.superClass, fncon.name), true)
    }


    // ejecutamos el cuerpo de la función
    this.visit(fn.context.stmt)

    const r = this.symbolFinder.currentContext().functionResult


    return r
  }


  // Visit a parse tree produced by SintesisParser#returnStatement.
  visitReturnStatement(ctx) {
    let callContext = this.symbolFinder.getFuncContext(ctx)
    if (!callContext)
      throw new SintesisError(ctx, 'Se ha intentado retornar sin estar dentro de función o método')
    let r = ctx.exp ? this.visit(ctx.exp) : null
    r = valueOf(r)
    callContext.functionResult = r
    callContext.functionEnded = true
    return r;
  }



  // Visit a parse tree produced by SintesisParser#expMemberIndex.
  visitExpMemberIndex(ctx) {
    let memoryref = this.visit(ctx.exp)
    if (!memoryref || !(memoryref instanceof MemoryRef))
      throw new SintesisError(ctx.exp, "Operador izquierdo inválido")

    let index = this.visit(ctx.idx)
    index = valueOf(index)
    if (index == undefined)
      throw new SintesisError(ctx.idx, "Índice no válido")

    // si no existe el identificador, creamos la variable dinámicamente
    if (memoryref._variable instanceof Error) {
      const data = JSON.parse(memoryref._variable.message)
      if (data.error == 404) {
        if (this.allowSymbolNotFound) {
          let v = typeof index === 'number' ? new Vector() : new Map()
          memoryref = this.symbolFinder.addVariable(data.id, v)
        }
      }
    }

    // es un tipo de datos válido? Vector / Map
    if (!memoryref || !memoryref.variable || !memoryref.variable.getRef)
      throw new SintesisError(ctx.exp, "Operador izquierdo no es un tipo válido")

    let ref = memoryref.variable
    if (!ref)
      throw new SintesisError(ctx.idx, "No encontrado")
    // comprobamos si existe la referencia
    ref = ref.getRef(index, !!this.allowSymbolNotFound)

    // si no existe el índice retornaremos null
    ref = ref ? new MemoryRef(memoryref.variable, index) : null
    if (!ctx.args || !ref)
      return ref

    // es una llamada a un método 
    if (!(ref.variable instanceof Function))
      throw new SintesisError(ctx.exp, "${index} no es una función")

    // preparamos argumentos
    let values = ctx.args ? this.visit(ctx.args).values : []
    if (values) ctx.args.values = values
    return this.callToFunction(ref, ctx.args)
  }

  // Visit a parse tree produced by SintesisParser#expMemberDot.
  visitExpMemberDot(ctx) {
    return this.visitExpMemberIndex(ctx)
  }


  // Visit a parse tree produced by SintesisParser#expMemberFunc.
  visitExpMemberFunc(ctx) {
    const memoryref = this.visit(ctx.exp)
    if (!memoryref)
      throw new SintesisError(ctx.exp, "Función no encontrada")

    let values = ctx.args ? this.visit(ctx.args).values : []
    if (values) ctx.args.values = values
    let obj = memoryref.variable
    if (obj instanceof Instance) {
      let met = obj.getConstructor(values ? values.length : 0)
      return this.callToFunction(new MemoryRef(obj, met.name), ctx.args)
    }
    if (!(obj instanceof Function))
      throw new SintesisError(ctx.exp, "No es una función")
    return this.callToFunction(memoryref, ctx.args)

  }

  // Visit a parse tree produced by SintesisParser#memberIdentifier.
  visitMemberIdentifier(ctx) {
    return ctx.children[0].getText()
  }


  // Visit a parse tree produced by SintesisParser#expAssignment.
  visitExpAssignment(ctx) {
    this.allowSymbolNotFound = true
    let memoryref = this.visit(ctx.dest)
    this.allowSymbolNotFound = false

    if (!memoryref || !(memoryref instanceof MemoryRef))
      throw new SintesisError(ctx.dest, 'El operador izquierdo de asignación es inválido')

    let result = this.visit(ctx.exp)
    let variable = result instanceof Variable ? result : result.variable
    let literal = valueOf(result)
    let t = typeof literal

    // si el id no existe, lo creamos dinámicamente
    if (memoryref._variable instanceof Error) {
      const data = JSON.parse(memoryref._variable.message)
      if (data.error == 404) {
        // el tipo de variable lo determinamos según el literal del valor a asignar
        // y retornamos
        return this.symbolFinder.addVariable(data.id,
          result._variable instanceof Instance ? result._variable : variableCreate(literal))
      }
    }

    if (!variable || ['string', 'number', 'bigint', 'symbol', 'boolean', 'null', 'undefined'].includes(t)) {
      memoryref.variable.value = t === 'object' ? variableCreate(literal) : literal
    } else
      memoryref.variable = variable
    return memoryref
  }


  // Visit a parse tree produced by SintesisParser#vectorIndex.
  visitVectorIndex(ctx) {
    let items = ctx.children.filter(x => x.constructor.name !== 'TerminalNodeImpl')
    return items.length ? this.visit(items[0]) : null
  }

  visitVectorDeclaration(ctx) {
    let indexes = this.visitChildren(ctx.idx)
    let defaultValue
    if (ctx.args) {
      let args = this.visit(ctx.args).values
      defaultValue = args[0]
    }
    return createVectorWithSizes(indexes, defaultValue).value
  }

  visitExpNumberOf(ctx) {
    var value = this.visit(ctx.exp)
    if (!value) return 0
    if (typeof value !== 'object')
      throw new SintesisError(ctx.exp, 'Tipo incorrecto')
    if (Array.isArray(value)) {
      let vec = new Vector(value)
      return vec.size()
    }
    let map = new Map(value)
    return map.size()
  }


  // Visit a parse tree produced by SintesisParser#mapDeclaration.
  visitMapDeclaration(ctx) {
    let args = []
    if (ctx.args) {
      args = this.visit(ctx.args).values
    }
    return args[0] && args[0] instanceof Map ? args[0] : new Map()
  }


  // Visit a parse tree produced by SintesisParser#vectorLiteral.
  visitVectorLiteral(ctx) {
    let values = ctx.children.filter(x => x.constructor.name !== 'TerminalNodeImpl').map(x => this.visit(x))
    return new Vector(values)
  }

  // Visit a parse tree produced by SintesisParser#objectLiteral.
  visitObjectLiteral(ctx) {
    // var m = new Map()
    var obj = {}
    var key = ''
    ctx.children.filter(x => x.constructor.name !== 'TerminalNodeImpl')
      .map(x => {
        switch (x.constructor.name) {
          case 'IdContext':
          case 'KeywContext':
            key = x.getText();
            break
          default:
            //m.setValue(key, this.visit(x));
            obj[key] = this.visit(x)
            break
        }
      })
    return new Map(obj);
  }

  // Visit a parse tree produced by SintesisParser#expAssignmentOperator.
  visitExpAssignmentOperator(ctx) {
    const memoryref = this.visit(ctx.dest)
    this.allowSymbolNotFound = false
    if (!memoryref)
      throw new SintesisError(ctx.dest, `Símbolo no encontrado`)
    if (!(memoryref instanceof MemoryRef))
      throw new SintesisError(ctx.dest, `Operador izquierdo es inválido`)
    let e1 = valueOf(memoryref)
    let e2 = valueOf(this.visit(ctx.exp))
    switch (ctx.op.getText()) {
      case '*=':
        e1 *= e2;
        break;
      case '/=':
        e1 /= e2;
        break;
      case '%=':
        e1 %= e2;
        break;
      case '+=':
        e1 = this.addOp(e1, e2);
        break;
      case '-=':
        e1 -= e2;
        break;
      case '<<=':
        e1 <<= e2;
        break;
      case '>>=':
        e1 >>= e2;
        break;
      case '&=':
        e1 &= e2;
        break;
      case '^=':
        e1 ^= e2;
        break;
      case '|=':
        e1 |= e2;
        break;
      case '**=':
        e1 **= e2;
        break;
    }
    memoryref.variable.value = e1
    return e1
  }


  addOp(e1, e2) {
    if (Array.isArray(e1) && Array.isArray(e2))
      return e1.concat(e2)
    return e1 + e2
  }


  // Visit a parse tree produced by SintesisParser#expOp.
  visitExpOp(ctx) {
    let e1 = valueOf(this.visit(ctx.e1))
    let e2 = valueOf(this.visit(ctx.e2))
    switch (ctx.op.text) {
      case '**':
        e1 = e1 ** e2;
        break;
      case '*':
        e1 = e1 * e2;
        break;
      case '/':
        e1 = e1 / e2;
        break;
      case '%':
        e1 = e1 % e2;
        break;
      case '+':
        e1 = this.addOp(e1, e2);
        break;
      case '-':
        e1 = e1 - e2;
        break;
      case '<':
        e1 = e1 < e2;
        break;
      case '>':
        e1 = e1 > e2;
        break;
      case '<=':
        e1 = e1 <= e2;
        break;
      case '>=':
        e1 = e1 >= e2;
        break;
      case '==':
        e1 = e1 == e2;
        break;
      case '!=':
        e1 = e1 != e2;
        break;
      case '===':
        e1 = e1 === e2;
        break;
      case '!==':
        e1 = e1 !== e2;
        break;
      case '&&':
        e1 = e1 && e2;
        break;
      case '||':
        e1 = e1 || e2;
        break;
      case '&':
        e1 = e1 & e2;
        break;
      case '|':
        e1 = e1 | e2;
        break;
      case '^':
        e1 = e1 ^ e2;
        break;
      default:
        e1 = null
    }
    return variableCreate(e1)
  }

  // Visit a parse tree produced by SintesisParser#expConcat.
  /* visitExpConcat(ctx) {
    let e1 = this.visit(ctx.e1)
    let e2 = this.visit(ctx.e2)
    return e1 + ' ' + e2
  } */

  // Visit a parse tree produced by SintesisParser#expMath.
  visitExpMath(ctx) {
    const funcname = ctx.fn.text
    const args = this.visit(ctx.args).values
    if (!(funcname in Math))
      throw new SintesisError(ctx.fn, "No existe esta función")
    return Math[funcname].apply(this, args)
  }

  // Visit a parse tree produced by SintesisParser#ifStatement.
  visitIfStatement(ctx) {
    if (valueOf(this.visit(ctx.exp))) {
      return this.visitChildren(ctx.stmt)
    } else if (ctx.elseifs) {
      for (const cs of ctx.elseifs.children) {
        if (valueOf(this.visit(cs.exp)))
          return this.visitChildren(cs.stmt)
      }
    }
    if (ctx.else_)
      return this.visit(ctx.else_)
  }


  // Visit a parse tree produced by SintesisParser#repeatStatement.
  visitRepeatStatement(ctx) {
    const n = this.visit(ctx.exp)
    if (n)
      for (var i = 0; i < n; i++)
        this.visit(ctx.stmt)
  }


  // Visit a parse tree produced by SintesisParser#repeatWhileStatement.
  visitRepeatWhileStatement(ctx) {
    do
      this.visit(ctx.stmt);
    while (valueOf(this.visit(ctx.exp)))
  }


  // Visit a parse tree produced by SintesisParser#whileRepeatStatement.
  visitWhileRepeatStatement(ctx) {
    while (valueOf(this.visit(ctx.exp)))
      this.visit(ctx.stmt)
  }


  // Visit a parse tree produced by SintesisParser#forEachStatement.
  visitForEachStatement(ctx) {

    const iter = ctx.iter
    const value_id = iter.idv ? iter.idv.text : null
    const index_id = iter.idk ? iter.idk.text : null
    const collection = this.visit(iter.coll)
    if (!Iterator.iterable(collection))
      throw new SintesisError(ctx.dest, `El valor no es iterable`)

    let iterator = new Iterator(collection)

    if (iterator.size) {
      // this.symbolFinder.pushLevel()
      let mem_idx = index_id ? this.symbolFinder.addVariable(index_id, new Variable(iterator.idx)) : null
      let mem_item = this.symbolFinder.addVariable(value_id, new Variable(iterator.current))
      while (!iterator.ended()) {
        mem_item.variable.value = iterator.current
        if (mem_idx) mem_idx.variable.value = iterator.idx
        this.visit(ctx.stmt)
        iterator.next()
      }
    }

  }


  // Visit a parse tree produced by SintesisParser#forEachStatement2.
  visitForEachStatement2(ctx) {
    return this.visitForEachStatement(ctx);
  }


  // Visit a parse tree produced by SintesisParser#forFromToStatement.
  visitForFromToStatement(ctx) {
    const iter = ctx.iter
    const from = this.visit(iter.start)
    const end = this.visit(iter.to)
    const id_iterator = iter.id.text

    // this.symbolFinder.pushLevel()
    let mem_index = iter.vvar ? null : this.symbolFinder.findSymbol(ctx, id_iterator)
    // if (!mem_index || !mem_index._variable || !(mem_index._variable instanceof Variable))
      // mem_index = this.symbolFinder.addVariable(id_iterator, new Single())
    mem_index.variable.value = from
    while ((from < end && valueOf(mem_index.variable) <= end) ||
      (from > end) && mem_index.variable.value >= end) {
      this.visit(ctx.stmt)
      mem_index.variable.value += from < end ? 1 : -1
    }
  }


  // Visit a parse tree produced by SintesisParser#forFromToStatement2.
  visitForFromToStatement2(ctx) {
    return this.visitForFromToStatement(ctx);
  }


  // Visit a parse tree produced by SintesisParser#expBasicFunction.
  visitExpBasicFunction(ctx) {
    const args = this.visit(ctx.args).values
    const a0 = valueOf(args[0])
    const a1 = valueOf(args[1])
    const a2 = valueOf(args[2])
    const t0 = typeof a0
    const t1 = typeof a1
    const t2 = typeof a2
    const fn = ctx.fn.children[0].constructor.name
    switch (fn) {
      case 'NumberOfContext':
        if (args.length < 1) throw new SintesisError(ctx.args, "Debe especificar un argumento")
        if (t0 !== 'string' & t0 !== 'object') throw new SintesisError(ctx.args.children[1], "Tipo incorrecto")
        const v = Array.isArray(a0) ? new Vector(a0) : t0 === 'object' ? new Map(a0) : a0
        return v instanceof Variable ? v.size() : v.length
      case 'IndexOfContext':
        if (args.length < 2) throw new SintesisError(ctx.args, "Debe especificar dos argumentos")
        if (t0 !== 'string' && !Array.isArray(a0) && t0 !== 'object') throw new SintesisError(ctx.args.children[1], "Tipo incorrecto")
        return t0 === 'object' ? new Map(a0).indexOf(a1) : a0.indexOf(a1)
      case 'ConvertContext':
        if (args.length < 2) throw new SintesisError(ctx.args, "Debe especificar dos argumentos")
        if (t1 !== 'string') throw new SintesisError(ctx.args.children[3], "Tipo incorrecto")
        if (paramInteger.includes(a1.toLowerCase())) {
          if (t0 === 'number')
            return Math.floor(a0)
          if (t0 === 'string')
            return a0.indexOf('.') >= 0 ? Math.floor(parseFloat(a0)) : parseInt(a0)
        }
        if (paramFloat.includes(a1.toLowerCase())) {
          if (t0 === 'number')
            return 1.0 * a0
          if (t0 === 'string')
            return a0.indexOf('.') >= 0 ? parseFloat(a0) : 1.0 * parseInt(a0)
        }
        if (paramNumber.includes(a1.toLowerCase())) {
          if (t0 === 'number')
            return a0
          if (t0 === 'string')
            return a0.indexOf('.') >= 0 ? parseFloat(a0) : parseInt(a0)
        } else if (paramText.includes(a1.toLowerCase())) {
          if (t0 === 'string')
            return a0
          if (t0 === 'number')
            return '' + a0
        } else throw new SintesisError(ctx.args.children[3], "Tipo incorrecto")
        throw new SintesisError(ctx.args.children[1], "No se pudo convertir")

      case 'SubContext':
        if (args.length < 2) throw new SintesisError(ctx.args, "Debe especificar al menos dos argumentos")
        if (t0 !== 'string' && !Array.isArray(a0)) throw new SintesisError(ctx.args.children[1], "Tipo incorrecto")
        let start = a1
        let end = a2
        if (t1 !== 'number') throw new SintesisError(ctx.args.children[3], "Tipo incorrecto")
        if (start < 0) throw new SintesisError(ctx.args.children[3], "No puede ser negativo")
        if (end && typeof end !== 'number') throw new SintesisError(ctx.args.children[5], "Tipo incorrecto")
        if (Array.isArray(a0))
          return a0.slice(start, end)
        return a0.substring(start, end)
      case 'LowerContext':
      case 'UpperContext':
        if (args.length < 1) throw new SintesisError(ctx.args, "Debe especificar un argumento")
        if (t0 !== 'string') throw new SintesisError(ctx.args.children[1], "Tipo incorrecto")
        return fn == 'LowerContext' ? a0.toLowerCase() : a0.toUpperCase()
      case 'MinContext':
      case 'MaxContext':
        if (args.length < 1) throw new SintesisError(ctx.args, "Debe especificar al menos un argumento")
        for (var i in args) {
          var arg = valueOf(args[i])
          if (typeof arg !== 'number') throw new SintesisError(ctx.args.children[1 + i * 2], "Tipo incorrecto")
        }
        const fz = fn === 'MaxContext' ? Math.max : Math.min
        return fz.apply(this, args)
      case 'RandomContext': {
        if (args.length === 0) return Math.random()
        let min = args.length === 2 ? a0 : 0
        let max = args.length === 2 ? a1 : a0
        // https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }
      case 'OrdContext': {
        if (args.length < 1) throw new SintesisError(ctx.args, "Debe especificar un argumento")
        if (t0 !== 'string') throw new SintesisError(ctx.args.children[1], "Tipo incorrecto")
        // https://locutus.io/php/strings/ord/
        const str = a0 + ''
        const code = str.charCodeAt(0)
        if (code >= 0xD800 && code <= 0xDBFF) {
          const hi = code
          if (str.length === 1) {
            return code
          }
          const low = str.charCodeAt(1)
          return ((hi - 0xD800) * 0x400) + (low - 0xDC00) + 0x10000
        }
        if (code >= 0xDC00 && code <= 0xDFFF) {
          return code
        }
        return code
      }
      case 'ChrContext': {
        if (args.length < 1) throw new SintesisError(ctx.args, "Debe especificar un argumento")
        if (t0 !== 'number') throw new SintesisError(ctx.args.children[1], "Tipo incorrecto")
        let n = a0
        // https://stackoverflow.com/questions/37395989/javascript-equivalent-of-phps-chr-function
        if (n < 128) {
          return String.fromCharCode(n);
        } else {
          return "ÇüéâäàåçêëèïîìÄÅÉæÆôöòûùÿÖÜ¢£¥₧ƒáíóúñÑªº¿⌐¬½¼¡«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ " [n - 128];
        }
      }
      case 'PromptContext': {
        let result = ''
        if (typeof window === 'undefined')
          // this is node
          result = prompt(a0 || '');
        else
          // this is browser
          result = window.prompt(a0, a1)
        if (args.length > 1) {
          if (paramInteger.includes(a1.toLowerCase())) {
            result = parseInt(result)
          }
        }
        return result
      }
    }
    return null
  }

  // Visit a parse tree produced by SintesisParser#expMemberMethod.
  visitExpMemberMethod(ctx) {
    return this.visitChildren(ctx);
  }




  // Visit a parse tree produced by SintesisParser#expTernary.
  visitExpTernary(ctx) {
    let cond = this.visit(ctx.cond)
    if (cond) return this.visit(ctx.ok)
    return this.visit(ctx.no)
  }


  // Visit a parse tree produced by SintesisParser#formalParameterList.
  visitFormalParameterList(ctx) {
    ctx.params = []
    for (let i = 0; i < ctx.children.length; i++)
      if (i % 2 == 0)
        ctx.params.push(ctx.children[i].getText())
    return ctx;
  }

  // Visit a parse tree produced by SintesisParser#arguments.
  visitArguments(ctx) {
    ctx.values = []
    if (ctx.children.length > 2)
      for (let i = 1; i < ctx.children.length; i++)
        if (i % 2 == 1)
          ctx.values.push(this.visit(ctx.children[i]))
    return ctx;
  }


  // Visit a parse tree produced by SintesisParser#expMember.
  visitExpMember(ctx) {
    return ctx.children.length ? this.visit(ctx.children[0]) : this.visitChildren(ctx);
  }


  // Visit a parse tree produced by SintesisParser#expIdentifier.
  visitExpIdentifier(ctx) {
    const id = ctx.getText()
    return this.symbolFinder.findSymbol(ctx, id)
  }

  // Visit a parse tree produced by SintesisParser#expVar.
  visitExpVar(ctx) {
    const id = ctx.id.getText()
    let mem_id = this.symbolFinder.findSymbol(ctx, id)
    // if(!(mem_id._variable instanceof Variable))
      // throw new SintesisError(ctx.id, 'error de redaclaración de variable')
    if (ctx.exp) {
      let result = this.visit(ctx.exp)
      let literal = valueOf(result)
      // TO-DO: lo mismo que en expassignment
      if ((typeof literal === 'object' && result instanceof Variable) || result instanceof Function || result instanceof Instance) {
        mem_id.variable = result
      } else {
        mem_id.variable.value = literal
      }
    }
    return mem_id
  }

  // Visit a parse tree produced by SintesisParser#variableDeclaration.
  visitVariableDeclaration(ctx) {
    return this.visitExpVar(ctx)
  }

  visitExpAttributes(ctx) {
    if (!this.symbolFinder.insideClass())
      throw new SintesisError(ctx, `Referencia fuera de Clase`)
    return this.symbolFinder.findSymbol(ctx, '__attributes')
  }

  visitExpMethods(ctx) {
    if (!this.symbolFinder.insideClass())
      throw new SintesisError(ctx, `Referencia fuera de Clase`)
    return this.symbolFinder.findSymbol(ctx, '__methods')
  }


  // Visit a parse tree produced by SintesisParser#expSuper.
  visitExpSuper(ctx) {
    const instance_ctx = this.symbolFinder.getInstanceContext(ctx)
    if (!instance_ctx)
      throw new SintesisError(ctx, "Referencia fuera de clase")
    if (!instance_ctx.instance || !instance_ctx.instance.superClass)
      throw new SintesisError(ctx, "No existe clase padre de esta instancia")
    return new MemoryRef(instance_ctx.instance.superClass)
  }

  // Visit a parse tree produced by SintesisParser#identifierName.
  visitIdentifierName(ctx) {
    return ctx.children[0].getText()
  }

  // Visit a parse tree produced by SintesisParser#identifierName.
  visitIdentifier(ctx) {
    return ctx.children[0].getText()
  }

  // Visit a parse tree produced by SintesisParser#block.
  /*visitBlock(ctx) {
    this.symbolFinder.pushLevel()
    const r = ctx.stmt ? this.visit(ctx.stmt) : this.visitChildren(ctx)
    this.symbolFinder.popLevel()
    return r
  }*/

  // Visit a parse tree produced by SintesisParser#functionBody.
  visitFunctionBody(ctx) {
    return ctx.children.length ? this.visit(ctx.children[0]) : this.visitChildren(ctx)
  }


  // Visit a parse tree produced by SintesisParser#printStatement.
  visitPrintStatement(ctx) {
    let args = this.visit(ctx.exp).filter(x => x !== undefined)
    let result = []
    for (let r of args) {
      r = printObject(r)
      r = '' + r
      result.push(r)
      // console.log('print '+r)
    }
    this.output += result.join(" ").replace(/\\n/g, '\n') + '\n'
    // console.log('PRINTING', r);
  }

  visitStepStatement(ctx) {
    return null
  }

  // Visit a parse tree produced by SintesisParser#expLiteral.
  visitExpLiteral(ctx) {
    return ctx.children.length ? this.visit(ctx.children[0]) : this.visitChildren(ctx)
  }

  // Visit a parse tree produced by SintesisParser#literal.
  visitLiteral(ctx) {
    return ctx.children.length ? this.visit(ctx.children[0]) : this.visitChildren(ctx)
  }

  // Visit a parse tree produced by SintesisParser#booleanLiteral.
  visitBooleanLiteral(ctx) {
    let r = ctx.children[0].getText();
    switch (r) {
      case 'true':
      case 'cierto':
      case 'vero':
      case 'vrai':
      case 'certo':
        return true;
      case 'false':
      case 'falso':
      case 'faux':
        return false;
    }
    return undefined
  }


  // Visit a parse tree produced by SintesisParser#stringLiteral.
  visitStringLiteral(ctx) {
    let str = ctx.children[0].getText();
    str = str.substr(1, str.length - 2)
    return str
  }


  // Visit a parse tree produced by SintesisParser#expNot.
  visitExpNot(ctx) {
    return !valueOf(this.visit(ctx.exp))
  }

  // Visit a parse tree produced by SintesisParser#expBitNot.
  visitExpBitNot(ctx) {
    return ~valueOf(this.visit(ctx.exp))
  }



  visitExpIncrement(ctx, pre, inc) {
    var memoryref = this.visit(ctx.dest)
    if (!memoryref)
      throw new SintesisError(ctx.dest, `Símbolo no encontrado`)
    if (!(memoryref instanceof MemoryRef))
      throw new SintesisError(ctx.dest, `Operador izquierdo de ${ctx.op.text} es inválido`)
    if (pre) {
      memoryref.variable.value = memoryref.variable.value + inc
      return memoryref.variable.value
    } else {
      let value = memoryref.variable.value
      memoryref.variable.value = value + inc
      return value
    }
  }

  // Visit a parse tree produced by SintesisParser#expPreIncrement.
  visitExpPreIncrement(ctx) {
    const inc = ctx.op.text == '++' ? 1 : -1
    return this.visitExpIncrement(ctx, true, inc)
  }


  // Visit a parse tree produced by SintesisParser#expPostIncrement.
  visitExpPostIncrement(ctx) {
    const inc = ctx.op.text == '++' ? 1 : -1
    return this.visitExpIncrement(ctx, false, inc)
  }

  // Visit a parse tree produced by SintesisParser#expUnaryMinus.
  visitExpUnaryMinus(ctx) {
    const value = this.visit(ctx.exp);
    return -value
  }

  // Visit a parse tree produced by SintesisParser#expUnaryPlus.
  visitExpUnaryPlus(ctx) {
    return this.visit(ctx.exp);
  }

  // Visit a parse tree produced by SintesisParser#numericLiteral.
  visitNumericLiteral(ctx) {
    let r = ctx.children[0].getText();
    if (r.indexOf('.') >= 0)
      return parseFloat(r)
    return parseInt(r)
  }

  // Visit a parse tree produced by SintesisParser#expParenthesis.
  visitExpParenthesis(ctx) {
    return this.visit(ctx.exp);
  }


}