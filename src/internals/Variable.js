
function randomUUID() {
    return 'xxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
    });
    }

    var ID = 1

class Variable {
    constructor(value) {
        this.value = value
/*
        let id
        // crea un uuid
        if (typeof Symbol === 'function' && typeof Symbol() === 'symbol') {
            id = Symbol();
          } else {
            id = Math.random().toString(36).substring(2, 15) +
              Math.random().toString(36).substring(2, 15);
          }
        //this.symbol = Symbol();
        // const id = Object.getOwnPropertySymbols(this)[0];
        //this.uuid = id.toString().slice(10, -1).padStart(16, '0');
        this.uuid = id;
        */

        this.uuid = ID++ //randomUUID();
        VariableList[this.uuid] = this
    }

    get value() {
        return this._value
    }

    set value(value) {
        if (value === null || value === undefined || typeof value === 'undefined')
            this._value = null
        else
            this._value = value instanceof Variable ? value.value : value
    }

    toString() {
        return this._value
    }

    equals(variable2) {
        if(['number', 'string', 'boolean'].includes(typeof this.value))
            return this.value == variable2.value
        return this.value === variable2.value
    }

    compareTo(variable2) {
        switch(typeof this.value) {
            case 'number':
            return this.value - variable2.value;
        case 'boolean':
            const a = !!this.value?1:0
            const b = !!variable2.value?1:0
            return a-b
        case 'string':
            const cadena1 = this.value
            const cadena2 = variable2.value
            for (let i = 0; i < cadena1.length && i < cadena2.length; i++) {
                if (cadena1.charCodeAt(i) !== cadena2.charCodeAt(i)) {
                  return cadena1.charCodeAt(i) - cadena2.charCodeAt(i);
                }
              }
              return cadena1.length - cadena2.length;   
        case 'object':
            if('compareTo' in this.value)
                return this.value.compareTo(variable2)
        }
        return 0
    }

    
}

export default Variable

export const VariableList = {}