import MemoryRef from './MemoryRef.js'
import Variable from './Variable.js'
import Function from './Function.js'
import Class from './Class.js'


const TAB = '  '

class SymbolTable {
  constructor(function_, instance) {
    this.memory = [{}]
    this.function = function_ // para señalar que estamos dentro de un nuevo contexto de función
    this.instance = instance // para señalar que estamos dentro de un nuevo contexto de instancia clase
  }


  getMemory() {
    return this.memory[this.memory.length - 1]
  }

  pushLevel() {
    this.returnContext = true
    const m = this.getMemory()
    const m2 = {}
    Object.keys(this.memory[0]).forEach(key => {
      m2[key] = new MemoryRef(
        m[key]._variable && (m[key]._variable instanceof Function || m[key]._variable instanceof Class) ?
        m[key]._variable : undefined
      )
    })
    m2['___ended'] = false // para contextos de función, cuando se ejecuta 'return' el bloque o contexto entero se marca como 'terminado'
    m2['___result'] = null // para contextos de función, cuando se retorna un resultado se guarda en esta variable
    this.memory.push(m2)
  }

  popLevel() {
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
    return this.getMemory()[id]
  }

  addSymbol(id) {
    const m = this.getMemory()
    m[id] = new MemoryRef()
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

class SymbolFinder {

  // los contextos de símbolos son jerárquicos, tienen hijos y padres
  static createTable(ctx, function_, instance) {
    ctx.symbolTable = new SymbolTable(function_, instance)
  }

  static getSymbContext(ctx) {
    while (ctx) {
      if (ctx.symbolTable) return ctx
      ctx = ctx.parentCtx
    }
    return null
  }

  static getTable(ctx) {
    ctx = this.getSymbContext(ctx)
    if (ctx) return ctx.symbolTable
    return null
  }


  static findSymbolContext(ctx, id) {
    ctx = this.getSymbContext(ctx)
    while (ctx) {
      if (ctx.symbolTable.hasSymbol(id))
        return ctx
      ctx = this.getSymbContext(ctx.parentCtx)
    }
    return null
  }

  static findSymbol(ctx, id) {
    ctx = this.findSymbolContext(ctx, id)
    return ctx == null ? null : ctx.symbolTable.getRef(id)
  }

  static getFuncContext(ctx) {
    ctx = this.getSymbContext(ctx)
    while (ctx) {
      if (ctx.symbolTable.function)
        return ctx
      ctx = this.getSymbContext(ctx.parentCtx)
    }
    return null
  }

  static pushLevel(ctx) {
    ctx = this.getSymbContext(ctx)
    if (ctx) {
      ctx.symbolTable.pushLevel()
    }
  }

  static popLevel(ctx) {
    ctx = this.getSymbContext(ctx)
    if (ctx) {
      ctx.symbolTable.popLevel()
    }
  }

  static setReturnValue(ctx, value) {
    ctx = this.getSymbContext(ctx)
    while (ctx) {
      if (ctx.symbolTable.returnContext) {
        ctx.symbolTable.setReturnValue(value)
        return
      }
      ctx = this.getSymbContext(ctx.parentCtx)
    }
  }

  static getReturnValue(ctx) {
    ctx = this.getSymbContext(ctx)
    while (ctx) {
      if (ctx.symbolTable.returnContext)
        return ctx.symbolTable.getReturnValue()
      ctx = this.getSymbContext(ctx.parentCtx)
    }
  }

  static functionHasEnded(ctx) {
    ctx = this.getSymbContext(ctx)
    while (ctx) {
      if (ctx.symbolTable.returnContext)
        return ctx.symbolTable.functionHasEnded()
      ctx = this.getSymbContext(ctx.parentCtx)
    }
  }

  static getInstanceContext(ctx, name) {
    ctx = this.findSymbolContext(ctx)
    while (ctx) {
      if (ctx.symbolTable.function) {
        if (!name)
          return ctx
        if (ctx.symbolTable.instance._class.name == name)
          return ctx
      }
      ctx = this.getSymbContext(ctx.parentCtx)
    }
    return null
  }

  static insideClass(ctx) {
    return !!this.getInstanceContext(ctx)
  }

  static insideFunction(ctx) {
    return !!this.getFuncContext(ctx)
  }


  // añade un símbolo al contexto actual
  static addSymbol(ctx, id) {
    ctx = this.getSymbContext(ctx)
    if (!ctx) return null
    return ctx.symbolTable.addSymbol(id)
  }

  // añade una variable al contexto actual
  static addVariable(ctx, id, value) {
    ctx = this.getSymbContext(ctx)
    if (!ctx) return null
    return ctx.symbolTable.addVariable(id, value)
  }

  // añade una función al contexto actual
  static addFunction(ctx, id, value) {
    ctx = this.getSymbContext(ctx)
    if (!ctx) return null
    return ctx.symbolTable.addFunction(id, value)
  }

  // añade una clase  al contexto actual
  static addClass(ctx, id, value) {
    ctx = this.getSymbContext(ctx)
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
      str =
        '{\n' +
        TAB + Object.keys(ctx.symbolTable.getMemory()).join(', ') + '\n' +
        tabulate(str, 1) +
        '}\n'
    }
    return tabulate(str, tabs)
  }

}

function tabulate(str, tabs) {
  var lines = str.split('\n')
  return lines.map(x => (TAB.repeat(tabs) + x)).join('\n')
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
*/