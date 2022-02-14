import Variable from './Variable.js'
import variableCreate from './Factory.js'

class Map extends Variable {

    constructor(obj) {
        super()
        this._value = {}
        for (const key in obj)
            this.setValue(key, obj[key])
    }

    setVariable(key, vari) {
        if (!(vari instanceof Variable))
            throw new Error('setVariable exige una Variable|Function|Instance')
        this._value[key] = vari
    }

    delete(key) {
        delete this._value[key]
    }

    size() {
        return Object.keys(this._value).length
    }

    indexOf(v) {
        if (v instanceof Variable)
            v = v.value
        for (const key in this._value) {
            if (v === this._value[key].value)
                return key
        }
        return null
    }

}


Map.prototype.getRef = function (key, create) {
    if (!(key in this._value)) {
        if (!create)
            return null
        this._value[key] = variableCreate(null)
    }
    return this._value[key]
}

Map.prototype.setValue = function (key, value) {
    if (value instanceof Variable)
        // throw new Error('setValue no permite asignar una Variable')
        return this.setVariable(key, value)
    this._value[key] = variableCreate(value)
}

export default Map