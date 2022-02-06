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
        let ref = this
        do {
            for (const name in ref.methods) {
                // to do lang
                if (name === 'constructor') {
                    // elige el método constructor en base al número de argumentos
                    if (numArgs === ref.methods[name].params.length)
                        return ref.methods[name]
                }
            }
            ref = ref.superClass
        } while (ref)
        return null
    }

    getRef(name) {
        let ref = this
        do {
            for (const id in ref.attributes)
                if (id === name)
                    return ref.attributes[name]
            for (const id in ref.methods)
                if (id === name)
                    return ref.methods[name]
            ref = ref.superClass
        } while (ref)
        return null
    }

    getByClass(classname) {
        let ref = this
        do {
            if (ref._class.name === classname) return ref
            ref = ref.superClass
        } while (ref)
        return null
    }


    text() {
        let atr = []
        let ref = this
        do {
            for (const name in ref.attributes) 
                atr.push(name)
            ref = ref.superClass
        } while (ref)
        let r = []
        for(const a of atr)
        {
            r.push(`${a}: ${this.getRef(a).value}`)
        }
        return this._class.name + ' (' + r.join(', ') + ')'
    }

}

export default Instance