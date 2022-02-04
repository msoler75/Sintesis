import Variable from './Variable.js'

class MemoryRef {
    constructor(variable, index) {
        this.variable = variable
        this._index = index
    }

    get variable() {
        if (this._index)
            return this._variable.getRef(this._index)
        return this._variable
    }

    set variable(vari) {
        if (!(vari instanceof Variable))
            throw new Error('Debe establecer una Variable en MemoryRef')
        if (this._index)
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