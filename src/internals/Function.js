class Function {
  constructor(ctx, classContext) {
    this.context = ctx
    this.classContext = classContext
    this.params = []
    for (let i = 0; i < ctx.children.length; i++)
      if (i % 2 == 0)
        this.params.push(ctx.children[i].getText())
  }
}

export default Function
