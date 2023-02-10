import Variable from './Variable.js'

class Dictionary extends Variable {

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
            const v2 = this._value[key].value
            if (((typeof v === 'object' &&  'equals' in v) && v.equals(v2)) || v === v2)
                return key
        }
        return null
    }

}



export default Dictionary