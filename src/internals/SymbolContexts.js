import MemoryRef from './MemoryRef.js'
import Variable from './Variable.js'
import Function from './Function.js'
import Class from './Class.js'

class MemoryRefContexts {

  constructor() {
    this.reset()
  }

  reset() {
    this.contexts = []
    this.current = -1
    this.pushLevel() // crea el primer nivel
  }

  // los contextos de símbolos son jerárquicos, tienen hijos y padres
  pushLevel(function_, instance) {
    this.contexts.push({
      parent: this.contexts.length - 1,
      memory: {},
      function: function_, // para señalar que estamos dentro de un nuevo contexto de función
      instance: instance, // para señalar que estamos dentro de un nuevo contexto de instancia clase
      functionEnded: false, // para contextos de función, cuando se ejecuta 'return' el bloque o contexto entero se marca como 'terminado'
      functionResult: null // para contextos de función, cuando se retorna un resultado se guarda en esta variable
    })
    this.current = this.contexts.length - 1
  }

  popLevel() {
    this.contexts.pop()
    this.current = this.contexts.length - 1
    // if(this.current==-1)
    // this.reset()
  }

  getContext(index) {
    return this.contexts[index]
  }

  currentContext() {
    return this.getContext(this.current)
  }

  findSymbolIndex(id) {
    let i = this.current
    while (i >= 0) {
      let context = this.contexts[i]
      if (id in context.memory)
        return i
      i = context.parent
    }
    return -1
  }

  findSymbol(id) {
    let i = this.findSymbolIndex(id)
    return i < 0 ?
      new MemoryRef(new Error(JSON.stringify({
        id,
        error: 404
      }))) :
      this.contexts[i].memory[id]
  }

  findVarIndex(id) {
    let i = this.findSymbolIndex(id)
    if (i < 0) return -1
    return this.contexts[i].memory[id].variable instanceof Variable?i:-1
  }


  findFuncIndex(id) {
    let i = this.findSymbolIndex(id)
    if (i < 0) return -1
    return this.contexts[i].memory[id].variable instanceof Function?i:-1
  }

  findClassIndex(id) {
    let i = this.findSymbolIndex(id)
    if (i < 0) return -1
    return this.contexts[i].memory[id].variable instanceof Class?i:-1
  }

  findVar(id) {
    const idx = this.findVarIndex(id)
    if (idx >= 0)
      return this.contexts[idx].memory[id]
    return null
  }

  findFunc(id) {
    const idx = this.findFuncIndex(id)
    if (idx >= 0)
      return this.contexts[idx].memory[id]
    return null
  }

  findClass(id) {
    const idx = this.findClassIndex(id)
    if (idx >= 0)
      return this.contexts[idx].memory[id]
    return null
  }

  getFuncContextIndex() {
    let i = this.current
    while (i >= 0) {
      let context = this.contexts[i]
      if (context.function)
        return i
      i = context.parent
    }
    return -1
  }

  getFuncContext() {
    let i = this.getFuncContextIndex()
    if (i >= 0) return this.getContext(i)
    return null
  }


  getInstanceContextIndex(name) {
    let i = this.current
    while (i >= 0) {
      let context = this.contexts[i]
      if (context.instance) {
        if(!name)
          return i
        if(context.instance._class.name==name)
          return i
      }
      i = context.parent
    }
    return -1
  }

  getInstanceContext(name) {
    let i = this.getInstanceContextIndex(name)
    if (i >= 0)
      return this.getContext(i)
    return null
  }

  insideClass() {
    return !!this.getInstanceContext()
  }


  // añade una variable al contexto actual
  addVariable(id, value) {
    if (!(value instanceof Variable))
      throw new Error('addVariable exige una clase Variable')
    let context = this.contexts[this.current]
    context.memory[id] = new MemoryRef(value)
    return context.memory[id]
  }

  // añade una función al contexto actual
  addFunction(id, value) {
    if (!(value instanceof Function))
      throw new Error('addFunction exige una clase Function')
    let context = this.contexts[this.current]
    context.memory[id] = new MemoryRef(value)
    return context.memory[id]
  }

  // añade una clase  al contexto actual
  addClass(id, value) {
    if (!(value instanceof Class))
      throw new Error('addClass exige una clase Class')
    let context = this.contexts[this.current]
    context.memory[id] = new MemoryRef(value)
    return context.memory[id]
  }

  // busca primero si existe la variable en algun contexto actual o previo y si no, la crea en el contexto actual
  varAssign(id, value) {
    let idContext = this.findVarIndex(id)
    if (idContext < 0)
      return this.addVariable(id, value)
    if (!(value instanceof Variable))
      console.warn(value, 'is not Variable Class')
    this.contexts[idContext].variables[id] = new MemoryRef(value)
  }
}

export default MemoryRefContexts


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