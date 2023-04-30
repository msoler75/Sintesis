import Variable from './Variable.js'
import Class from './Class.js'
import {
    printThing
} from './../utils/Print.js'
import {
    SymbolFinder
} from './Symbols.js'

// es un puntero a un miembro de una instancia

class RefClass extends Variable {
    constructor(class_or_instance, id) {
        super({
            classInstance: class_or_instance,
            id
        })
    }

    toString() {

        if (this.value.classInstance instanceof Class) {
            var r = SymbolFinder.findSymbol(this.value.classInstance.context, this.value.id)
            console.log(r.variable)
            return this.value.classInstance.name + '.' + this.value.id
        } else {
            var i = 2 / 0;
            console.error(i)
            return this.value.classInstance.class.name + '.' + this.value.id
        }

        const s = this
        return s
        //return printThing(this.getRef() variable)
    }
}

export default RefClass