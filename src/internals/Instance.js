import Variable from './Variable.js'
import Class from "./Class.js"
import Map from "./Map.js"
import {printObject} from '../utils/Print.js'


class Instance extends Variable {
    constructor(clsBase) {
        super()
        if (!(clsBase instanceof Class))
            throw new Error('El parámetro de Instance debe ser del tipo Class');
        this.class = clsBase
        this.attributes = {}
        this.superClass = clsBase.superClass ? new Instance(clsBase.superClass) : null
        for (const id in clsBase.attributes)
            this.attributes[id] = new Variable()
        this.methods = clsBase.methods

        const atr = {}
        const met = {}
        let ref = this
        let numconstruc = 1
        do {
            for (const id in ref.attributes)
                if (!Class.isSpecialAttribute(id))
                    atr[id] = ref.attributes[id]
            for (const name in ref.methods) {
                let lbl = name
                if (Class.isConstructorName(name)) {
                    lbl = numconstruc == 1 ? 'constructor' : 'constructor' + numconstruc
                    numconstruc++
                }
                met[lbl] = ref.methods[name]
            }
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
        return this.class.getConstructor(numArgs)
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


    toString() {
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