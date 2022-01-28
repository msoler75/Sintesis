class SintesisError {
    constructor(context, msg) {
        this.context = context
        this.msg = msg
        //this.throw new Error(JSON.stringify({msg, start: context.start, stop: context.stop, line, column}))
        this.start = context.start
        this.stop = context.stop
        this.line = context.line
        this.column = context.column
    }
}

export default SintesisError