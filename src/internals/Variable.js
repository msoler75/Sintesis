class Variable {
    constructor(value) {
        this.value = value
    }

    get value() {
        return this._value
    }

    set value(value) {
        const t = typeof value
        if (value === null || value === undefined || t === 'undefined') 
            this._value = null
        else if (Array.isArray(value)) {
            this._value = [...value]
        } else if (t === 'object') {
            this._value = {
                ...value
            }
        } else if (['number', 'string', 'boolean'].includes(t))
            this._value = value
        else
            try {
                this._value = JSON.parse(JSON.stringify(value instanceof Variable ? value.value : value))
            }
        catch (err) {
            console.error('Error JSON encoding/decoding', value)
        }
    }

    toText(v) {
        if (v === null) return 'null'
        if (Array.isArray(v))
            return '[' + v.map(x => this.toText(x)).join(', ') + ']'
        if (typeof v === 'object') {
            let values = []
            Object.keys(v).forEach(k => values.push(k + ': ' + this.toText(v[k])))
            return '{' + values.join(', ') + '}'
        }
        return v
    }

    text() {
        return this.toText(this.value)
    }
}

export default Variable