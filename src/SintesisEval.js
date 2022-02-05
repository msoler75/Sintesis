import Map from './internals/Map.js'
import Class from './internals/Class.js'
import Vector from './internals/Vector.js'
import Variable from './internals/Variable.js'
import Function from './internals/Function.js'
import Iterator from './internals/Iterator.js'
import MemoryRef from './internals/MemoryRef.js'
import SintesisError from './SintesisError.js'
import SymbolContexts from './internals/SymbolContexts.js'
import SintesisParserVisitor from './lib/SintesisParserVisitor.js'
import promptSync from 'prompt-sync';
const prompt = promptSync();

const paramNumber = ['n', 'num', 'number', 'número', 'numero']
const paramInteger = ['i', 'e', 'int', 'ent', 'entero']
const paramFloat = ['f', 'd', 'dec', 'float', 'decimal']
const paramText = ['s', 't', 'string', 'str', 'text', 'texto']



function getDisplayValueOf(obj) {
  while (obj instanceof MemoryRef)
    obj = obj.variable
  if (obj instanceof Variable)
    obj = obj.text()
  if (obj instanceof Function)
    return 'función()'
  else if (Array.isArray(obj))
    obj = new Vector(obj)
  else if (typeof obj === 'object')
    obj = new Map(obj)
  if (obj === null) return 'nulo'
  if (obj === true) return 'cierto'
  if (obj === false) return 'falso'
  return obj
}



export default class SintesisEval extends SintesisParserVisitor {

  // Visit a parse tree produced by SintesisParser#program.
  visitProgram(ctx) {
    // crea una uneva pila de símbolos
    this.symbols = new SymbolContexts()
    this.output = ""
    return this.visitChildren(ctx);
  }


  // Visit a parse tree produced by SintesisParser#functionDeclaration.
  visitFunctionDeclaration(ctx) {
    let id = ctx.id.text
    const fn = new Function(ctx)
    if (id in this.symbols.currentContext().memory)
      throw new SintesisError(ctx.id, `El símbolo '${id}' ya fue definido en este contexto`)
    this.symbols.addFunction(id, fn)
    return fn
  }


  // Visit a parse tree produced by SintesisParser#classDeclaration.
  visitClassDeclaration(ctx) {
    const id = ctx.id.text;
    const extend = ctx.ext ? this.visitChildren(ctx.ext) : null
    const attributes = ctx.atrs ? ctx.atrs.children.map(x => x.getText()).filter(x => x != ',') : {}
    // const attributes = ctx.atrs? ctx.atrs.children.filter(x=>x.constructor.name!=='TerminalNodeImpl').map(x => x.getText())
    const methodList = ctx.methods ? ctx.methods.children.map(x => new Function(x, ctx)) : {}
    let methods = {}
    for (const i in methodList) {
      const method = methodList[i]
      const idm = method.context.id.text
      methods[idm] = method
    }
    if (id in this.symbols.currentContext().memory)
      throw new SintesisError(ctx.id, `El símbolo '${id}' ya fue definido en este contexto`)
    const cls = new Class(id, extend, attributes, methods)
    this.symbols.addClass(id, cls)
    return this.visitChildren(ctx)
  }


  // Visit a parse tree produced by SintesisParser#expMemberIndex.
  visitExpMemberIndex(ctx) {
    const memoryref = this.visit(ctx.exp)
    if (!memoryref || !(memoryref instanceof MemoryRef))
      throw new SintesisError(ctx.exp, "Operador izquierdo inválido")
    let index = this.visit(ctx.idx)
    index = MemoryRef.literalOf(index)
    if (!memoryref.variable.getRef) {
      if (memoryref.variable.value === null) {
        if (typeof index === 'string' && index.match(/^\d+$/))
          index = parseInt(index)
        memoryref.variable = typeof index === 'number' ? new Vector() : new Map()
      } else
        throw new SintesisError(ctx.exp, "Operador izquierdo no es un tipo válido")
    }
    let ref = memoryref.variable.getRef(index, this.forCreate)
    return ref ? new MemoryRef(memoryref.variable, index) : null
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
    if (!(memoryref.variable instanceof Function))
      throw new SintesisError(ctx.exp, "No es una función")

    // obtenemos los argumentos o parámetros de la función y los valores
    let params = memoryref.variable.context.pl ? this.visit(memoryref.variable.context.pl).params : []
    let values = ctx.args ? this.visit(ctx.args).values : []

    // creamos un nuevo contexto de símbolos de un contexto de función
    this.symbols.pushLevel(true)

    // pone en el contexto los parámetros de la función como si fueran variables, con los valores asignados desde la llamada con argumentos a la función
    for (let i = 0; i < params.length; i++) {
      let _id = params[i]
      this.symbols.addVariable(_id, Variable.create(i in values ? MemoryRef.literalOf(values[i]) : 0))
    }

    // ejecutamos el cuerpo de la función
    memoryref.variable.context.stmt ? this.visit(memoryref.variable.context.stmt) : null

    const r = this.symbols.currentContext().functionResult

    // restauramos el contexto de símbolos anterior
    this.symbols.popLevel()
    return r
  }

  // Visit a parse tree produced by SintesisParser#returnStatement.
  visitReturnStatement(ctx) {
    let r = this.visit(ctx.exp)
    let callContext = this.symbols.getFuncContext()
    if (!callContext)
      throw new SintesisError(ctx, 'Se ha intentado retornar de un contexto que no es una función o método')
    callContext.functionEnded = true
    r = MemoryRef.literalOf(r)
    callContext.functionResult = r
    return r;
  }

  // Visit a parse tree produced by SintesisParser#expAssignment.
  visitExpAssignment(ctx) {
    this.forCreate = true
    // console.log('assigning to', ctx.dest.getText())
    const memoryref = this.visit(ctx.dest)
    this.forCreate = false
    if (!memoryref || !(memoryref instanceof MemoryRef)) {
      throw new SintesisError(ctx.dest, 'El operador izquierdo de asignación es inválido')
    }
    let value = this.visit(ctx.exp)
    if (value instanceof Variable)
      memoryref.variable = value
    else
      memoryref.variable.value = value
    return memoryref
  }

  // Visit a parse tree produced by SintesisParser#varSingleDeclaration.
  visitVarSingleDeclaration(ctx) {
    const id = ctx.id.text
    if (id in this.symbols.currentContext().memory)
      throw new SintesisError(ctx.id, `El símbolo '${id}' ya fue definido en este contexto`)
    let value = this.visit(ctx.exp);
    let variable = new Variable(value)
    this.symbols.addVariable(id, variable)
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
    return Vector.createWithSizes(indexes, defaultValue).value
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
    var m = new Map()
    var key = ''
    ctx.children.filter(x => x.constructor.name !== 'TerminalNodeImpl')
      .map(x => {
        switch (x.constructor.name) {
          case 'IdentifierNameContext':
            key = x.getText();
            break
          default:
            m.setValue(key, this.visit(x));
            break
        }
      })
    return m;
  }

  // Visit a parse tree produced by SintesisParser#expAssignmentOperator.
  visitExpAssignmentOperator(ctx) {
    const memoryref = this.visit(ctx.dest)
    this.forCreate = false
    if (!memoryref)
      throw new SintesisError(ctx.dest, `Símbolo no encontrado`)
    if (!(memoryref instanceof MemoryRef))
      throw new SintesisError(ctx.dest, `Operador izquierdo es inválido`)
    let e1 = MemoryRef.literalOf(memoryref)
    let e2 = MemoryRef.literalOf(this.visit(ctx.exp))
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
        e1 += e2;
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



  // Visit a parse tree produced by SintesisParser#expOp.
  visitExpOp(ctx) {
    let e1 = MemoryRef.literalOf(this.visit(ctx.e1))
    let e2 = MemoryRef.literalOf(this.visit(ctx.e2))
    switch (ctx.op.text) {
      case '**':
        return e1 ** e2;
      case '*':
        return e1 * e2;
      case '/':
        return e1 / e2;
      case '%':
        return e1 % e2;
      case '+':
        return e1 + e2;
      case '-':
        return e1 - e2;
      case '<':
        return e1 < e2;
      case '>':
        return e1 > e2;
      case '<=':
        return e1 <= e2;
      case '>=':
        return e1 >= e2;
      case '==':
        return e1 == e2;
      case '!=':
        return e1 != e2;
      case '===':
        return e1 === e2;
      case '!==':
        return e1 !== e2;
      case '&&':
        return e1 && e2;
      case '||':
        return e1 || e2;
      case '&':
        return e1 & e2;
      case '|':
        return e1 | e2;
      case '^':
        return e1 ^ e2;
    }
    return 0
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
    if (this.visit(ctx.exp)) {
      return this.visitChildren(ctx.stmt)
    } else if (ctx.elseifs) {
      for (const cs of ctx.elseifs.children) {
        if (this.visit(cs.exp))
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
    while (this.visit(ctx.exp))
  }


  // Visit a parse tree produced by SintesisParser#whileRepeatStatement.
  visitWhileRepeatStatement(ctx) {
    while (this.visit(ctx.exp))
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
      this.symbols.pushLevel()
      let mem_idx = index_id ? this.symbols.addVariable(index_id, new Variable(iterator.idx)) : null
      let mem_item = this.symbols.addVariable(value_id, new Variable(iterator.current))
      while (!iterator.ended()) {
        mem_item.variable.value = iterator.current
        if (mem_idx) mem_idx.variable.value = iterator.idx
        this.visit(ctx.stmt)
        iterator.next()
      }
      this.symbols.popLevel()
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

    this.symbols.pushLevel()
    let mem_index = this.symbols.addVariable(id_iterator, new Variable(from))
    while (mem_index.variable.value <= end) {
      this.visit(ctx.stmt)
      mem_index.variable.value++
    }
    this.symbols.popLevel()
  }


  // Visit a parse tree produced by SintesisParser#forFromToStatement2.
  visitForFromToStatement2(ctx) {
    return this.visitForFromToStatement(ctx);
  }



  // Visit a parse tree produced by SintesisParser#statementList.
  visitStatementList(ctx) {
    let callContext = this.symbols.getFuncContext()
    let i = 0
    while ((!callContext || !callContext.functionEnded) && i < ctx.children.length) {
      // console.log(ctx.children[i].getText())
      this.visit(ctx.children[i++])
    }
    return callContext ? (callContext.functionResult || null) : null
  }

  // Visit a parse tree produced by SintesisParser#statement.
  visitStatement(ctx) {
    // console.log('statement', ctx.getText())
    return ctx.children.length ? this.visit(ctx.children[0]) : null
    //return this.visitChildren(ctx);
  }


  // Visit a parse tree produced by SintesisParser#expBasicFunction.
  visitExpBasicFunction(ctx) {
    const args = this.visit(ctx.args).values
    const t0 = typeof args[0]
    const t1 = typeof args[1]
    const a0 = args[0]
    const a1 = args[1]
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
        let end = args[2]
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
          var arg = args[i]
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


  // Visit a parse tree produced by SintesisParser#expIdentifier.
  visitExpIdentifier(ctx) {
    const id = ctx.id.text
    let mem_id = this.symbols.findSymbol(id)
    if (mem_id === null && this.forCreate)
      mem_id = this.symbols.addVariable(id, new Variable())
    //return 0
    return mem_id
  }

  // Visit a parse tree produced by SintesisParser#identifierName.
  visitIdentifierName(ctx) {
    return ctx.children[0].getText()
  }


  // Visit a parse tree produced by SintesisParser#block.
  visitBlock(ctx) {
    this.symbols.pushLevel()
    const r = ctx.stmt ? this.visit(ctx.stmt) : this.visitChildren(ctx)
    this.symbols.popLevel()
    return r
  }

  // Visit a parse tree produced by SintesisParser#functionBody.
  visitFunctionBody(ctx) {
    return ctx.children.length ? this.visit(ctx.children[0]) : this.visitChildren(ctx)
  }


  // Visit a parse tree produced by SintesisParser#printStatement.
  visitPrintStatement(ctx) {
    let args = this.visit(ctx.exp).filter(x => x !== undefined)
    let result = []
    for (let r of args) {
      r = getDisplayValueOf(r)
      r = '' + r
      result.push(r)
    }
    this.output += result.join(" ").replace(/\\n/g, '\n') + '\n'
    // console.log('PRINTING', r);
  }

  visitStepStatement(ctx) {
    let r = ctx.exp.text;
    console.log('STEP', r);
    return r
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
    return !this.visit(ctx.exp);
  }

  // Visit a parse tree produced by SintesisParser#expBitNot.
  visitExpBitNot(ctx) {
    return ~this.visit(ctx.exp);
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