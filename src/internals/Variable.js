class Variable {
    constructor(value) {
        this.value = value
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

    
}

export default Variable