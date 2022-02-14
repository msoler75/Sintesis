import Variable from './Variable.js'
import Class from "./Class.js"
import Map from "./Map.js"

class Instance extends Variable {
    constructor(clsBase, mode) {
        super()
        if (!(clsBase instanceof Class))
            throw new Error('El parámetro de Instance debe ser del tipo Class');
        this._class = clsBase
        this.attributes = {}
        this.superClass = clsBase.superClass ? new Instance(clsBase.superClass) : null
        if (mode != 'methods')
            if (Symbol.iterator in Object(clsBase.attributes))
                for (const a of clsBase.attributes)
                    this.attributes[a] = new Variable()
        if (mode != 'attributes')
            this.methods = clsBase.methods

        const atr = {}
        const met = {}
        let ref = this
        do {
            for (const i in ref.attributes)
                atr[i] = ref.attributes[i]
            for (const i in ref.methods)
                met[i] = ref.methods[i]
            ref = ref.superClass
        } while (ref)
        this.attributes['__attributes'] = new Map(atr)
        this.attributes['__methods'] = new Map(met)
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
        if (Class.isMethodsName(name)) name = '__methods'
        if (Class.isAttributesName(name)) name = '__attributes'
        // si es un atributo o método lo busca entre la instancia actual y las padres
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
        for (const a of atr) {
            let lbl = a
            if (Class.isMethodsName(a))
                lbl = 'métodos'
            if (Class.isAttributesName(a))
                lbl = 'atributos'
            if(!['métodos','atributos'].includes(lbl)) continue
            r.push(`${lbl}: ${Variable.toText(this.getRef(a).value)}`)
        }
        return this._class.name + ' (' + r.join(', ') + ')'
    }

}

export default Instance