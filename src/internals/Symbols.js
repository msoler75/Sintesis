import MemoryRef from './MemoryRef.js'
import Variable from './Variable.js'
import RefClass from './RefClass.js'
import Function from './Function.js'
import valueOf from './ValueOf.js'
import Class from './Class.js'

const TAB = '  '

class SymbolTable {
  constructor(function_or_class) {
    this.memory = [{}]
    if (function_or_class instanceof Function)
      this.function = function_or_class // para señalar que estamos dentro de un nuevo contexto de función
    else
      this.class = function_or_class // para señalar que estamos dentro de un nuevo contexto de instancia clase
  }


  getMemory() {
    return this.memory[this.memory.length - 1]
  }


  // puede crearse un nuevo estado de pila (stack) por dos motivos:
  // 1) llamada a una función
  // 2) creación de instancia de una clase
  pushStack(instance) {
    const m = this.memory[0]
    const m2 = {}
    if (this.memory.length == 0)
      console.error('NO MEMORY SYMBOLS!')
    Object.keys(this.memory[0]).forEach(key => {
      if (m[key]._variable instanceof RefClass) {
        if (m[key]._variable.value.classInstance.name === instance.class.name) {
          m2[key] = new MemoryRef(instance, key)
          // console.log(key, '<', instance.class.name + '.' + key)
          // break
        } else
          console.log('EEEEEEK!', m[key]._variable.value.classInstance.name, '!=', instance.class.name)
      } else
        m2[key] = new MemoryRef(
          m[key]._variable && (m[key]._variable instanceof Function || m[key]._variable instanceof Class) ? m[key]._variable : undefined
        )
    })
    if (instance) {
      m2['___instance'] = new MemoryRef(instance)
      m2['___attributes'] = new MemoryRef(instance.attributes['___attributes'])
      m2['___methods'] = new MemoryRef(instance.attributes['___methods'])
      if (instance.superClass)
        m2['___super'] = new MemoryRef(instance.superClass)
    } else {
      m2['___ended'] = false // para contextos de función, cuando se ejecuta 'return' el bloque o contexto entero se marca como 'terminado'
      m2['___result'] = null // para contextos de función, cuando se retorna un resultado se guarda en esta variable
    }
    this.memory.push(m2)
  }

  popStack() {
    if (this.memory.length <= 1)
      console.error("DEMASIADOS POP");
    this.memory.pop()
  }

  setReturnValue(value) {
    const m = this.getMemory()
    m['___result'] = value
    m['___ended'] = true
  }

  getReturnValue() {
    const m = this.getMemory()
    return m['___result']
  }

  functionHasEnded() {
    const m = this.getMemory()
    return '___ended' in m ? m['___ended'] : false
  }

  hasSymbol(id) {
    return id in this.getMemory()
  }

  getRef(id) {
    let r = this.getMemory()[id]
    if (r instanceof RefClass)
      return r.classInstance.symbolTable.getRef(id)
    return r
  }

  addSymbol(id, value) {
    const m = this.getMemory()
    m[id] = value ? new MemoryRef(value) : new MemoryRef()
    return m[id]
  }

  addVariable(id, value) {
    if (!(value instanceof Variable))
      throw new Error('addVariable exige una clase Variable')
    const m = this.getMemory()
    m[id] = new MemoryRef(value)
    return m[id]
  }

  addFunction(id, value) {
    if (!(value instanceof Function))
      throw new Error('addFunction exige una clase Function')
    const m = this.getMemory()
    m[id] = new MemoryRef(value)
    return m[id]
  }

  addClass(id, value) {
    if (!(value instanceof Class))
      throw new Error('addClass exige una clase Class')
    const m = this.getMemory()
    m[id] = new MemoryRef(value)
    return m[id]
  }

}




function printValueOf(v) {
  if (v instanceof MemoryRef) {
    if (!v._variable) return ''
    v = v.variable
  }
  if (v instanceof Class) {
    return "(clase)"
  }
  if (v instanceof RefClass) {
    if (v.value.classInstance instanceof Class) {
      return v.value.classInstance.name + '.' + v.value.id
    } else
      return v.value.classInstance.class.name + '.' + v.value.id
  }
  if (v instanceof Function)
    return "()";
  return valueOf(v)
}

class SymbolFinder {

  // los contextos de símbolos son jerárquicos, tienen hijos y padres
  static createTable(ctx, function_or_class) {
    ctx.symbolTable = new SymbolTable(function_or_class)
  }

  static findTable(ctx) {
    while (ctx) {
      if (ctx.symbolTable) return ctx
      ctx = ctx.parentCtx
    }
    return null
  }

  static getTable(ctx) {
    ctx = this.findTable(ctx)
    if (ctx) return ctx.symbolTable
    return null
  }


  // busca el símbolo en las tablas de símbolos en niveles de contexto ascendentes
  // si estamos dentro de una clase, buscaremos también en las tablas de símbolos de las superclases sucesivas
  static findSymbolContext(ctx, id) {
    ctx = this.findTable(ctx)
    while (ctx) {
      if (ctx.symbolTable.hasSymbol(id))
        return ctx
      if (ctx.symbolTable.class && ctx.symbolTable.superClass) {
        ctxClass = ctx
        while (ctxClass) {
          if (ctxClass.symbolTable.hasSymbol(id))
            return ctxClass
          ctxClass = ctx.ctx.symbolTable.superClass.context
        }
      }
      ctx = this.findTable(ctx.parentCtx)
    }
    return null
  }

  static findSymbol(ctx, id) {
    ctx = this.findSymbolContext(ctx, id)
    return ctx == null ? null : ctx.symbolTable.getRef(id)
  }


  static visitChildren(ctx, fn) {
    fn(ctx)
    if (ctx && ctx.children && ctx.children.length)
      ctx.children.forEach(item =>
        SymbolFinder.visitChildren(item, fn)
      )
  }

  // hemos de replicar la operación de push en la symbol table en todos los nodos descendientes
  static pushStack(ctx, instance) {
    ctx = this.findTable(ctx)
    if (instance)
      ctx.symbolTable.pushStack(instance)
    else
      SymbolFinder.visitChildren(ctx, function (ctx) {
        if (ctx && ctx.symbolTable) {
          ctx.symbolTable.pushStack()
        }
      })
  }

  static popStack(ctx, instance) {
    ctx = this.findTable(ctx)
    if (instance)
      ctx.symbolTable.popStack()
    else
      SymbolFinder.visitChildren(ctx, function (ctx) {
        if (ctx && ctx.symbolTable) {
          ctx.symbolTable.popStack()
        }
      })
  }

  static setReturnValue(ctx, value) {
    ctx = this.findTable(ctx)
    while (ctx) {
      if (ctx.symbolTable.function) {
        ctx.symbolTable.setReturnValue(value)
        return
      }
      ctx = this.findTable(ctx.parentCtx)
    }
  }

  static getReturnValue(ctx) {
    ctx = this.findTable(ctx)
    while (ctx) {
      if (ctx.symbolTable.function)
        return ctx.symbolTable.getReturnValue()
      ctx = this.findTable(ctx.parentCtx)
    }
  }

  static functionHasEnded(ctx) {
    ctx = this.findTable(ctx)
    while (ctx) {
      if (ctx.symbolTable.function)
        return ctx.symbolTable.functionHasEnded()
      ctx = this.findTable(ctx.parentCtx)
    }
  }

  static getFuncContext(ctx) {
    ctx = this.findTable(ctx)
    while (ctx) {
      if (ctx.symbolTable.function)
        return ctx
      ctx = this.findTable(ctx.parentCtx)
    }
    return null
  }

  static getClassContext(ctx) {
    ctx = this.findTable(ctx)
    while (ctx) {
      if (ctx.symbolTable.class)
        return ctx
      ctx = this.findTable(ctx.parentCtx)
    }
    return null
  }

  static insideClass(ctx) {
    return !!this.getClassContext(ctx)
  }

  static insideFunction(ctx) {
    return !!this.getFuncContext(ctx)
  }


  // añade un símbolo al contexto actual
  static addSymbol(ctx, id) {
    ctx = this.findTable(ctx)
    if (!ctx) return null
    return ctx.symbolTable.addSymbol(id)
  }

  // añade una variable al contexto actual
  static addVariable(ctx, id, value) {
    ctx = this.findTable(ctx)
    if (!ctx) return null
    return ctx.symbolTable.addVariable(id, value)
  }

  // añade una función al contexto actual
  static addFunction(ctx, id, value) {
    ctx = this.findTable(ctx)
    if (!ctx) return null
    return ctx.symbolTable.addFunction(id, value)
  }

  // añade una clase  al contexto actual
  static addClass(ctx, id, value) {
    ctx = this.findTable(ctx)
    if (!ctx) return null
    return ctx.symbolTable.addClass(id, value)
  }

  static print(ctx, tabs) {
    if (!tabs) tabs = 0;
    let str = ""
    if (ctx.children && Array.isArray(ctx.children))
      ctx.children.forEach(x => {
        str += SymbolFinder.print(x, tabs)
      })
    if (ctx.symbolTable) {
      const m0 = ctx.symbolTable.getMemory()
      // console.log(ctx.symbolTable)
      if (m0 === null || m0 === undefined) {
        str = ''
        // console.log('ERROR', m0)
      } else
        str =
        '{\n' +
        TAB + Object.keys(m0)
        .map(id =>
          id + ': {' +
          ctx.symbolTable.memory.map(m => printValueOf(m[id])).join(', ') +
          '}'
        )
        .join(', ') + '\n' +
        tabulate(str, 1) + '\n' +
        '}\n'
    }
    return tabulate(str, tabs)
  }

}

function tabulate(str, tabs) {
  var lines = str.split('\n')
  return lines.map(x => TAB.repeat(tabs) + x).join('\n')
}

export {
  SymbolTable,
  SymbolFinder
}


/*
clase padre

escribir()

clase hija

escribir()


nuevo Cliente ('Javier', 1234567)
instancia de Persona { 
  nombre
  constructor(nombre)
}
instancia de Cliente {
  dni
  constructor(nombre, dni)
  escribir()
}
contexto de Cliente.constructor() {
  nombre: Javier
  dni: 1234567
}
contexto de Persona.constructor() {
  nombre: Javier
} 
instancia de Cuenta {
  
}



*/







/*


fun a() {
  b() // no accesible
}

fun c() {
  fun b() {
      imp "!!" 
  }
  a()
}

a()
b() // no accesible
c()

-------------------------------------

var a

fun b()
{
  a
  f // no accesible
  c() // no accesible
  new d().c()
}

clase d {
  constructor () {
    a = b()
  }

  c() {
    e()
  }

  e() {
    c() // no accesible
  }
}

f = new d()



------------------------------------
z

class a() {
  b
  c(d) {
    b=d
  }
  e() {
    z = new a(2)
  }
}

k = new a(1)
k.e()
imprimir k.b




-------------------------------------
class A() {
  b
  c(d)
  {
    b=d
  }
}

k = new A(4)
m = new A(7)
imp k
imp m



*/