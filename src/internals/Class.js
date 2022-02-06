import Variable from "./Variable.js"

class Class {
    constructor(name, superClass, attributes, methods) {
        this.name = name
        this.superClass = superClass
        this.attributes = attributes
        this.methods = methods || {}
        if(this.methods)
        for(const i in this.methods)
            this.methods[i]._class = this
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


export default Class