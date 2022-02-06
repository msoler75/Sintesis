class Function {
  constructor(ctx, classContext) {
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
