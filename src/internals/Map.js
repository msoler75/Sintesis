import Variable from './Variable.js'
import VariableCreate from './VariableCreate.js'

class Map extends Variable {

    constructor(obj) {
        super()
        this._value = {}
        for (const key in obj)
            this.setValue(key, obj[key])
    }

    getRef(key, create) {
        if (!(key in this._value)) {
            if (!create)
                return null
            this._value[key] = VariableCreate(null)
        }
        return this._value[key]
    }

    setValue(key, value) {
        if (value instanceof Variable)
            // throw new Error('setValue no permite asignar una Variable')
            return this.setVariable(key, value)
        this._value[key] = VariableCreate(value)
    }

    setVariable(key, vari) {
        if (!(vari instanceof Variable))
            throw new Error('setVariable exige una Variable')
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


export default Map