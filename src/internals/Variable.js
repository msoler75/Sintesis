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
        return Variable.toText(this.value)
    }
}

Variable.literalOf = function (src) {
    return src instanceof Variable ? src.value : src
}


Variable.toText = function (v) {
    if (v === null) return 'nulo'
    if (v === true) return 'cierto'
    if (v === false) return 'falso'
    if (v.text && typeof v.text === 'function') return v.text()
    if (v instanceof Variable) return Variable.toText(v.value)
    if (Array.isArray(v))
        return '[' + v.map(x => Variable.toText(x)).join(', ').replace(/\bnulo\b/g, '') + ']'
    if (typeof v === 'object') {
        let values = []
        Object.keys(v).forEach(k => values.push(k + ': ' + Variable.toText(v[k])))
        return '{' + values.join(', ') + '}'
    }
    return v
}

export default Variable