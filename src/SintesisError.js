class SintesisError {
    constructor(context, msg) {
        this.context = context
        this.msg = msg
        //this.throw new Error(JSON.stringify({msg, start: context.start, stop: context.stop, line, column}))
        this.start = context.start.start
        this.stop = context.stop.stop
        this.line = context.start.line
        this.column = context.start.column
    }
}

export default SintesisError