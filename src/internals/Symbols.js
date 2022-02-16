import MemoryRef from './MemoryRef.js'
import Variable from './Variable.js'
import Function from './Function.js'
import Class from './Class.js'

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
  createTable(ctx, function_, instance) {
    ctx.symbolTable = new SymbolTable(function_, instance)
  }

  findSymbolTableContext(ctx) {
    while (ctx) {
      if (ctx.symbolTable) return ctx
      ctx = ctx.parentCtx
    }
    return null
  }


  findSymbolContext(ctx, id) {
    ctx = this.findSymbolTableContext(ctx)
    while (ctx) {
      if (ctx.symbolTable.hasSymbol(id))
        return ctx
      ctx = this.findSymbolTableContext(ctx.parentCtx)
    }
    return null
  }

  findSymbol(ctx, id) {
    ctx = this.findSymbolContext(ctx)
    console.log("id", id)
    return ctx == null ?
      new MemoryRef(new Error(JSON.stringify({
        id,
        error: 404
      }))) :
      ctx.symbolTable.getRef(id)
  }

  getFuncContext(ctx) {
    ctx = this.findSymbolContext(ctx)
    while (ctx) {
      if (ctx.symbolTable.function)
        return ctx
      ctx = this.findSymbolTableContext(ctx.parentCtx)
    }
    return null
  }

  getInstanceContext(ctx, name) {
    ctx = this.findSymbolContext(ctx)
    while (ctx) {
      if (ctx.symbolTable.function)
      {
        if (!name)
          return ctx
        if (ctx.symbolTable.instance._class.name == name)
          return ctx
      }
      ctx = this.findSymbolTableContext(ctx.parentCtx)
    }
    return null
  }

  insideClass() {
    return !!this.getInstanceContext()
  }


  // añade una variable al contexto actual
  addVariable(ctx, id, value) {
    ctx = this.findSymbolTableContext(ctx)
    if(!ctx) return null
    return ctx.symbolTable.addVariable(id, value)
  }

  // añade una función al contexto actual
  addFunction(id, value) {
    ctx = this.findSymbolTableContext(ctx)
    if(!ctx) return null
    return ctx.symbolTable.addFunction(id, value)
  }

  // añade una clase  al contexto actual
  addClass(id, value) {
    ctx = this.findSymbolTableContext(ctx)
    if(!ctx) return null
    return ctx.symbolTable.addClass(id, value)
  }

}

export {SymbolTable, SymbolFinder}


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