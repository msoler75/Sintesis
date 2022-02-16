import MemoryRef from './MemoryRef.js'
import Variable from './Variable.js'
import Function from './Function.js'
import Class from './Class.js'


const TAB = '  '

class SymbolTable {
  constructor(function_, instance) {
    this.memory = {}
    this.function = function_ // para señalar que estamos dentro de un nuevo contexto de función
    this.instance = instance // para señalar que estamos dentro de un nuevo contexto de instancia clase
    this.functionEnded = false // para contextos de función, cuando se ejecuta 'return' el bloque o contexto entero se marca como 'terminado'
    this.functionResult = null // para contextos de función, cuando se retorna un resultado se guarda en esta variable
  }

  hasSymbol(id) {
    return id in this.memory
  }

  getRef(id) {
    return this.memory[id]
  }

  addVariable(id, value) {
    if (!(value instanceof Variable))
      throw new Error('addVariable exige una clase Variable')
    this.memory[id] = new MemoryRef(value)
    return this.memory[id]
  }

  addFunction(id, value) {
    if (!(value instanceof Function))
      throw new Error('addFunction exige una clase Function')
    this.memory[id] = new MemoryRef(value)
    return this.memory[id]
  }

  addClass(id, value) {
    if (!(value instanceof Class))
      throw new Error('addClass exige una clase Class')
    this.memory[id] = new MemoryRef(value)
    return this.memory[id]
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
    ctx = getSymbContext(ctx)
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
    return ctx == null ?
      new MemoryRef(new Error(JSON.stringify({
        id,
        error: 404
      }))) :
      ctx.symbolTable.getRef(id)
  }

  static getFuncContext(ctx) {
    ctx = this.findSymbolContext(ctx)
    while (ctx) {
      if (ctx.symbolTable.function)
        return ctx
      ctx = this.getSymbContext(ctx.parentCtx)
    }
    return null
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


  // añade una variable al contexto actual
  static addVariable(ctx, id, value) {
    ctx = this.getSymbContext(ctx)
    if (!ctx) return null
    return ctx.symbolTable.addVariable(id, value)
  }

  // añade una función al contexto actual
  static addFunction(id, value) {
    ctx = this.getSymbContext(ctx)
    if (!ctx) return null
    return ctx.symbolTable.addFunction(id, value)
  }

  // añade una clase  al contexto actual
  static addClass(id, value) {
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
        TAB + Object.keys(ctx.symbolTable.memory).join(', ') + '\n' +
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
  c() // no accesible
  f // no accesible
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