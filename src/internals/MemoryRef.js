import Variable from './Variable.js'
import Function from './Function.js'
import Instance from './Instance.js'
import Class from './Class.js'


class MemoryRef {
    constructor(variable, index) {
        this.variable = variable
        this._index = index
    }

    get variable() {
        if (this._index !== undefined)
            return this._variable.getRef(this._index)
        return this._variable
    }

    set variable(vari) {
        if (!(vari instanceof Variable) && !(vari instanceof Function) && !(vari instanceof Class) && !(vari instanceof Instance))
            throw new Error('Debe establecer un objeto Variable/Function/Class/Instance en MemoryRef')
        if (this._index !== undefined)
            this._variable.setValue(this._index, vari)
        else
            this._variable = vari
    }

}


MemoryRef.literalOf = function (obj) {
    if (obj instanceof MemoryRef)
        obj = obj.variable
    if (obj instanceof Variable)
        obj = obj.value
    return obj
}


export default MemoryRef