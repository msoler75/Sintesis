import Variable from './Variable.js'
import Class from './Class.js'
import Map from './Map.js'


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
        if (!(vari instanceof Variable) && !(vari instanceof Class))
            throw new Error('Debe establecer un objeto Variable/Class en MemoryRef')
        if (this._index !== undefined /*&& this._variable.constructor.name===vari.constructor.name*/)
            this._variable.setValue(this._index, vari)
        else
            this._variable = vari
    }

}


MemoryRef.literalOf = function (obj) {
    if(Array.isArray(obj)) {
        const r = []
        for(const v of obj)
        r.push(MemoryRef.literalOf(v))
        return r
    }
    if (obj instanceof MemoryRef)
        obj = obj.variable
    if(obj instanceof Map) {
        let r = {}
        for(const key in obj._value) {
            r[key] = MemoryRef.literalOf(obj._value[key])
        }
        obj = r
    }
    else if (obj instanceof Variable)
        obj = MemoryRef.literalOf(obj.value)
    return obj
}


export default MemoryRef