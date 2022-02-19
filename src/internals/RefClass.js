import Variable from './Variable.js'

// es un puntero a un miembro de una instancia

class RefClass extends Variable {
    constructor(class_or_instance, id) {
        super({classInstance: class_or_instance, id})
    }
}

export default RefClass