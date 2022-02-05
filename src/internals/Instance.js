import Variable from './Variable.js'
import Class from "./Class.js"

class Instance {
    constructor(clsBase) {
        if (!(clsBase instanceof Class))
            throw new Error('El parámetro de Instance debe ser del tipo Class');
        this._class = clsBase
        this.attributes = {}
        this.superClass = clsBase.superClass ? new Instance(clsBase.superClass) : null
        if (Symbol.iterator in Object(clsBase.attributes))
            for (const a of clsBase.attributes)
                this.attributes[a] = new Variable()
        this.methods = clsBase.methods
    }

    isInstanceOf(name) {
        let ref = this
        do {
            if (ref._class.name === name)
                return true
            ref = ref.superClass
        } while (ref)
        return false
    }

    getConstructor(numArgs) {
        for(const name in this.methods)
        {
            // to do lang
            if(name==='constructor') 
            {
                // elige el método constructor en base al número de argumentos
                if(numArgs === this.methods[name].params.length)
                    return this.methods[name]
            }
        }
        return null
    }

    getRef(name) {
        let ref = this
        do {
            if ((name in ref.attributes))
                return ref.attributes[name]
            if ((name in ref.methods))
                return ref.methods[name]
            ref = ref.superClass
        } while (ref)
        return null
    }

}

export default Instance