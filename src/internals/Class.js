import Variable from "./Variable.js"

class Class {
    constructor(name, extendTo, attributes, methods) {
        this.name = name
        this.extendTo = extendTo
        this.attributes = attributes
        this.methods = methods
    }

    hasAttribute(name) {
        return name in this.attributes
    }

    hasMethod(name) {
        return name in this.methods
    }

    getRef(name) {
        if ((name in this.attributes))
            return this.attributes[name]
        if ((name in this.methods))
            return this.methods[name]
        throw new Error(`No existe el atributo ${name} en la clase ${this.name}`)
    }

    setAttr(name, value) {
        if (!this.hasAttribute(name)) return false
        this.attributes[name] = Variable.create(value)
        return true
    }

    getAttr(name) {
        return this.attributes[name]
    }

    getMethod(name) {
        return this.methods[name]
    }
}


Class.newInstance = function (clsBase) {
    let attr = {}
    for (const a of clsBase.attributes)
        attr[a] = new Variable()
    return new Class(clsBase.name, clsBase.extendTo, attr, clsBase.methods)
}

export default Class