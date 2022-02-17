import Variable from './Variable.js'
import Instance from './Instance.js'
import Function from './Function.js'
import valueOf from './ValueOf.js'
import Class from './Class.js'
import {
    variableCreate,
} from './Factory.js'
// import Map from './Map.js'


class MemoryRef {
    constructor(variable, index) {
        if (variable)
            this.variable = variable
        this._index = index
    }

    get variable() {
        if (this._variable === undefined) return undefined
        if (this._index !== undefined)
            return this._variable.getRef(this._index)
        return this._variable
    }

    set variable(vari) {
        if (!(vari instanceof Variable) && !(vari instanceof Class) && !(vari instanceof Error))
            throw new Error('Debe establecer un objeto Variable/Class/Error en MemoryRef')
        if (this._variable && this._index !== undefined /*&& this._variable.constructor.name===vari.constructor.name*/ )
            this._variable.setValue(this._index, vari)
        else
            this._variable = vari
    }

    assign(value) {
        let literal = valueOf(value)
        let valueIsVarType = value instanceof Variable || value instanceof Function || value instanceof Instance
        if (!this._variable) {
            if (!valueIsVarType)
                value = variableCreate(value)
            this._variable = value
        } else if (typeof literal === 'object' && valueIsVarType) {
            this.variable = value
        } else {
            this.variable.value = literal
        }
    }

    increment(inc) {
        this.variable.value += inc
    }

    get value () {
        return this.variable.value
    }

}




export default MemoryRef