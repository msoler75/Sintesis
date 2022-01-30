class Class {
    constructor (name, extendTo, attributes, methods) {
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

    setAttr(name, value) {
        if(!this.hasAttribute(name)) return false
        this.attributes[name] = value
        return true
    }

    getAttr(name) {
        return this.attributes[name]
    }

    getMethod(name) {
        return this.methods[name]
    }
}

export default Class
