class Variable {
    constructor(value) {
        if (value instanceof Variable)
            this.value = Variable.literalOf(value)
        else if (Array.isArray(value))
            throw new Error('Array inválido para crear una Variable. Se debe usar Vector')
        else if (typeof value === 'object')
            throw new Error('Objeto inválido para crear una Variable. Se debe usar Map')
        else this.value = value
    }

    get value() {
        return this._value
    }

    set value(value) {
        const t = typeof value
        if (value === null || value === undefined || t === 'undefined')
            this._value = null
        else
            this._value = value instanceof Variable ? value.value : value
    }

    text() {
        return toText(this.value)
    }
}

Variable.literalOf = function (src) {
    return src instanceof Variable ? src.value : src
}


function toText(v) {
    if (v instanceof Variable) return toText(v.value)
    if (v === null) return 'null'
    let cls = ''
    if (v.constructor && v.constructor.name)
        cls = v.constructor.name
    if (Array.isArray(v))
        return '[' + v.map(x => toText(x)).join(', ') + ']'
    if (typeof v === 'object') {
        let values = []
        Object.keys(v).forEach(k => values.push(k + ': ' + toText(v[k])))
        return '{' + values.join(', ') + '}'
    }
    return v
}

export default Variable