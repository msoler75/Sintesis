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
  pushLevel(inFunction, className) {
    this.contexts.push({
      parent: this.contexts.length - 1,
      memory: {},
      inFunction: !!inFunction, // para señalar que estamos dentro de un nuevo contexto de función
      className: className, // para señalar que estamos dentro de un nuevo contexto de clase
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
    return i<0?null:this.contexts[i].memory[id]
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
      if (context.inFunction)
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


  getClassContextIndex() {
    let i = this.current
    while (i >= 0) {
      let context = this.contexts[i]
      if (context.className)
        return i
      i = context.parent
    }
    return -1
  }

  getClassContext() {
    let i = this.getClassContextIndex()
    if (i >= 0) return this.getContext(i)
    return null
  }

  insideClass() {
    return !!this.getClassContext()
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