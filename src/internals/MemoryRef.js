import Variable from './Variable.js'

class MemoryRef {
    constructor(variable) {
        this.variable = variable
    }

    get variable() {
        return this._variable
    }

    set variable(vari) {
        if (!(vari instanceof Variable))
            throw new Error('Debe establecer una Variable en MemoryRef')
        this._variable = vari
    }

}


export default MemoryRef