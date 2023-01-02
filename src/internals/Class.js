import words from '../lang/words.es.js'
import {
    printObject
} from '../utils/Print.js'

class Class {
    constructor(ctx, name, superClass, attributes, methods) {
        this.context = ctx
        this.name = name
        this.superClass = superClass
        // this.attributes = attributes
        this.attributes = attributes
        this.methods = methods || {}
        if (this.methods)
            for (const i in this.methods)
                this.methods[i].class = this
    }

    getConstructor(numargs) {
        for (const name in this.methods) {
            const method = this.methods[name]
            if (Class.isConstructorName(method.name) && method.params.length === numargs)
                return method
        }
        return null
    }

    hasDefaultConstructor() {
        return !!this.getConstructor(0)
    }

    isDescendantOf(ancestorName) {
        let ref = this
        while (ref) {
            if (ref.name === ancestorName)
                return true
            ref = ref.superClass
        }
        return false
    }

    getVisibility(id) {
        let visibility = 'public'
        let ref = this
        while (ref) {
            if (id in ref.attributes)
                return ref.attributes[id]
            if (id in ref.methods)
                return ref.methods[id].visibility || 'public'
            ref = ref.superClass
        }
        return visibility
    }


    /*
    isInstanceOf(name) {
        let ref = this
        do {
            if (ref.name === name) return true
            ref = ref.superClass
        } while (ref)
        return false
    }
    */

    toString() {
        return `${words.CLASS} ${this.name} { ${words.ATTRIBUTES}: ${printObject(this.attributes)}, ${words.METHODS}: ${printObject(this.methods)}}`
    }

}


Class.isConstructorName = function (name) {
    // to-do: lang
    if (!name)
        return false
    return ['constructor', 'construct'].includes(name) || name.startsWith('__construct')
}

Class.isAttributesName = function (name) {
    // to-do: lang
    if (!name)
        return false
    return ['__attributes', '___attributes', 'attributes', 'atributos'].includes(name)
}

Class.isMethodsName = function (name) {
    // to-do: lang
    if (!name)
        return false
    return ['__methods', '___methods', 'methods', 'metodos', 'métodos'].includes(name)
}

Class.isSuperName = function (name) {
    // to-do: lang
    if (!name)
        return false
    return ['__super', '___super'].includes(name)
}

Class.isInstance = function (name) {
    // to-do: lang
    if (!name)
        return false
    return ['__instance', '___instance'].includes(name)
}

Class.isSpecialAttribute = function (name) {
    return Class.isAttributesName(name) ||
        Class.isMethodsName(name) ||
        Class.isSuperName(name) ||
        Class.isInstance(name)
}

Class.isPublic = function (vis) {
    // to-do: lang
    return ['public'].includes(vis) || vis.match(/^p[uú]blic[oa]$/i)
}

Class.isPrivate = function (vis) {
    // to-do: lang
    return ['private'].includes(vis) || vis.match(/^privad[oa]$/i)
}

Class.isProtected = function (vis) {
    // to-do: lang
    return ['protected'].includes(vis) || vis.match(/^protegid[oa]$/i)
}

export default Class