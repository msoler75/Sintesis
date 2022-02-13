class Variable {
    constructor(value) {
        if (value === undefined)
            this.value = null
        else if (value instanceof Variable)
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
        if (value === null || value === undefined || typeof value === 'undefined')
            this._value = null
        else
            this._value = value instanceof Variable ? value.value : value
    }

    text() {
        return Variable.toText(this._value)
    }
}

Variable.literalOf = function (src) {
    return src instanceof Variable ? src.value : src
}



Variable.toText = function (v) {
    if (v === undefined) return 'nulo'
    if (v === null) return 'nulo'
    if (v === true) return 'cierto'
    if (v === false) return 'falso'
    if (v.text && typeof v.text === 'function')
        return v.text()
    if (v instanceof Variable)
        return Variable.toText(v._value)
    if (Array.isArray(v))
        return '[' + v.map(x => Variable.toText(x)).join(', ').replace(/\bnulo\b/g, '') + ']'
    if (typeof v === 'object') {
        let values = []
        let keys = Object.keys(v)
        keys.forEach(k => {
            let z = v[k]
            let str = Variable.toText(z)
            values.push(k + ': ' + str)
        })
        return '{' + values.join(', ') + '}'
    }
    return v
}

export default Variable