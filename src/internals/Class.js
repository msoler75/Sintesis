import Variable from "./Variable.js"

class Class {
    constructor(name, superClass, attributes, methods) {
        this.name = name
        this.superClass = superClass
        this.attributes = attributes
        this.methods = methods || {}
        if (this.methods)
            for (const i in this.methods)
                this.methods[i]._class = this
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

}


Class.isConstructorName = function (name) {
    // to-do: lang
    return ['constructor', 'construct'].includes(name)
}

export default Class