import Class from './Class.js'

class Function {
  constructor(ctx, classContext) {
    this.name = ctx.id.text
    this.isConstructor = Class.isConstructorName(this.name)
    this.callingSuperClass = false // para indicar si dentro del cuerpo del método constructor hay una llamada al constructor padre
    this.context = ctx
    this.classContext = classContext
    this.params = []
    if(ctx.pl)
    for (let i = 0; i < ctx.pl.children.length; i++)
      if (i % 2 == 0)
        this.params.push(ctx.pl.children[i].getText())
  }
}

export default Function
