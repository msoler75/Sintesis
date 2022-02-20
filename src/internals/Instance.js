import printObject from './Print.js'
import Variable from './Variable.js'
import Class from "./Class.js"
import Map from "./Map.js"
import {
    SymbolTable
} from './Symbols.js'

class Instance extends Variable {
    constructor(clsBase, mode) {
        super()
        if (!(clsBase instanceof Class))
            throw new Error('El parámetro de Instance debe ser del tipo Class');
        this.class = clsBase
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
            for (const id in ref.attributes)
                if (!Class.isSpecialAttribute(id))
                    atr[id] = ref.attributes[id]
            for (const i in ref.methods)
                met[i] = ref.methods[i]
            ref = ref.superClass
        } while (ref)
        this.attributes['___attributes'] = new Map(atr)
        this.attributes['___methods'] = new Map(met)
    }

    isInstanceOf(name) {
        let ref = this
        do {
            if (ref.class.name === name)
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
        if (Class.isMethodsName(name)) name = '___methods'
        if (Class.isAttributesName(name)) name = '___attributes'
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
            if (ref.class.name === classname) return ref
            ref = ref.superClass
        } while (ref)
        return null
    }


    text() {
        const a = []
        // const m = []
        let ref = this
        do {
            for (const name in ref.attributes) {
                if (!Class.isSpecialAttribute(name))
                    a.push({
                        name,
                        value: printObject(this.getRef(name).value)
                    })
            }
            /* for (const name in ref.methods) {
                const v = printObject(this.getRef(name))
                if (!m.find(x => x.name === name && x.value === v))
                    m.push({
                        name,
                        value: v
                    })
            } */
            ref = ref.superClass
        } while (ref)
        return this.class.name + ' {' + a.map(x => `${x.name}: ${x.value}`).join(', ') + '}'
        // const r = []
        // if (a.length)
           // r.push('atributos: {' + a.map(x => `${x.name}: ${x.value}`).join(', ') + '}')
        // if (m.length)
           // r.push('métodos: {' + m.map(x => `${x.name}: ${x.value}`).join(', ') + '}')
        // return this.class.name + ' (' + r.join(', ') + ')'
    }

}

export default Instance