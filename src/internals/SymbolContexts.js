import Variable from './Variable.js'
import Function from './Function.js'
import Class from './Class.js'


class SymbolContexts {
  constructor() {
    this.reset()
  }

  reset() {
    this.contexts = []
    this.current = -1
    this.pushLevel() // crea el primer nivel
  }

  // los contextos de símbolos son jerárquicos, tienen hijos y padres
  pushLevel(inFunction) {
    this.contexts.push({
      parent: this.current,
      variables: {},
      functions: {},
      classes: {},
      inFunction: !!inFunction, // para señalar que estamos dentro de un nuevo contexto de función
      functionEnded: false, // para contextos de función, cuando se ejecuta 'return' el bloque o contexto entero se marca como 'terminado'
      functionResult: null // para contextos de función, cuando se retorna un resultado se guarda en esta variable
    })
    this.current = this.contexts.length - 1
  }

  popLevel() {
    if (!this.current) return
    this.current = this.contexts[this.current].parent
  }

  getContext(index) {
    return this.contexts[index]
  }

  currentContext() {
    return this.getContext(this.current)
  }

  findVarIndex(varname) {
    let i = this.current
    while (i >= 0) {
      let context = this.contexts[i]
      // if(!context) return null 
      if (varname in context.variables)
        return i
      i = context.parent
    }
    return -1
  }


  findFuncIndex(funcname) {
    let i = this.current
    while (i >= 0) {
      let context = this.contexts[i]
      // if(!context) return null 
      if (funcname in context.functions)
        return i
      i = context.parent
    }
    return -1
  }

  findClassIndex(classname) {
    let i = this.current
    while (i >= 0) {
      let context = this.contexts[i]
      // if(!context) return null 
      if (classname in context.classes)
        return i
      i = context.parent
    }
    return -1
  }

  findVar(varname) {
    const idx = this.findVarIndex(varname)
    if(idx>=0) return this.contexts[idx].variables[varname]
    return null
  }

  findFunc(funcname) {
    const idx = this.findFuncIndex(funcname)
    if(idx>=0) return this.contexts[idx].functions[funcname]
    return null
  }

  findClass(classname) {
    const idx = this.findClassIndex(classname)
    if(idx>=0) return this.contexts[idx].classes[classname]
    return null
  }

  getFuncContextIndex() {
    let i = this.current
    while (i >= 0) {
      let context = this.contexts[i]
      // if(!context) return null 
      if (context.inFunction)
        return i
      i = context.parent
    }
    return -1
  }

  getFuncContext() {
    let i = this.getFuncContextIndex() 
    if(i>=0) return this.getContext(i)
    return null
  }


  // añade una variable al contexto actual
  addVar(id, value) {
    if(!(value instanceof Variable))
      throw new Error('Adding a non Variable class')
    let context = this.contexts[this.current]
    context.variables[id] = value
    return context.variables[id]
  }

  // añade una función al contexto actual
  addFunction(id, value) {
    if(!(value instanceof Function))
      throw new Error('Adding a non Function class')
    let context = this.contexts[this.current]
    context.functions[id] = value
    return context.functions[id]
  }

  // añade una clase  al contexto actual
  addClass(id, value) {
    if(!(value instanceof Class))
      throw new Error('Adding a non {Class} class')
    let context = this.contexts[this.current]
    context.classes[id] = value
    return context.classes[id]
  }

  // busca primero si existe la variable enalgun contexto actual o previo y si no, la crea en el contexto actual
  varAssign(id, value) {
    let idContext = this.findVarIndex(id)
    if (idContext < 0)
      return this.addVar(id, value)
    if(!(value instanceof Variable))
      console.warn(value, 'is not Variable Class')
    this.contexts[idContext].variables[id] = value
  }
}

export default SymbolContexts