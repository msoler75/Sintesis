function findNumber(obj, key) {
    if(typeof obj[key] === 'object') 
        return findNumber(obj[key], key)
    return obj[key]
}

class SintesisError {
    constructor(context, msg) {
        this.context = context
        this.msg = msg
        //this.throw new Error(JSON.stringify({msg, start: context.start, stop: context.stop, line, column}))
        this.start = findNumber(context, 'start')
        this.stop = findNumber(context, 'stop')
        this.line = typeof context.line ==='number'?context.line:findNumber(context.start, 'line')
        this.column = typeof context.column ==='number'?context.column:findNumber(context.start, 'column')
    }
}

export default SintesisError