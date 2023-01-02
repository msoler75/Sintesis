import words from '../lang/words.es.js'
import Variable from './Variable.js'
import Class from './Class.js'

class Function extends Variable {
  constructor(name, ctx, classContext) {
    super()
    this.name = name
    this.isConstructor = Class.isConstructorName(this.name)
    this.callingSuperClass = false // para indicar si dentro del cuerpo del método constructor hay una llamada al constructor padre
    this.context = ctx
    let vis = ctx && ctx.vis ? ctx.vis.getText() : ''
    this.visibility = !vis || Class.isPublic(vis) ? 'public' :
      Class.isProtected(vis) ? 'protected' :
      'private'
    this.classContext = classContext
    this.params = []
    if (ctx && ctx.pl)
      for (let i = 0; i < ctx.pl.children.length; i++)
        if (i % 2 == 0)
          this.params.push(ctx.pl.children[i].getText())
  }

  toString() {
    // return `${words.FUNCTION} (${this.params.join(', ')})`
    return `${words.FUNCTION_SHORT}(${this.params.join(', ')})`
  }
}

export default Function