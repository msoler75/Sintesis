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
        if (!(vari instanceof Variable) && !(vari instanceof Class) && !(vari instanceof Error))
            throw new Error('Debe establecer un objeto Variable/Class/Error en MemoryRef')
        if (this._index !== undefined /*&& this._variable.constructor.name===vari.constructor.name*/ )
            this._variable.setValue(this._index, vari)
        else
            this._variable = vari
    }

}




export default MemoryRef