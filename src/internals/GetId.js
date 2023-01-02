function getId(ctx) {
    if (!ctx)
        return ''
    if (!ctx.children)
    {
        if(ctx.getText)
            return ctx.getText()
        return ctx.text
    }
    let node = ctx.children.find(x => x && x.constructor && ['TerminalNodeImpl', 'IdentifierContext', 'KeywordContext'].includes(x.constructor.name))
    if (node) {
        if (node.getText)
            return node.getText()
        else
            return node.text
    } else {
        // const that = this
        return ctx.children.map(x => getId(x)).join("")
    }
}


export default getId