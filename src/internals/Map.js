import Variable from './Variable.js'


class Map extends Variable {

    constructor(obj) {
        super(obj || {})
    }

    get(key) {
        return this._value[key]
    }

    set(key, value) {
        if (Array.isArray(key)) {
            if(key.length === 0) 
            {
                // no hace nada
                ;
            }
            else if (key.length === 1)
                this._value[key[0]] = value
            else {
                let ref = this._value
                let i = 0
                let index = key[0]
                while (i < key.length - 1) {
                    let index = key[i]
                    if (!(index in ref))
                        return false
                    ref = ref[index]
                    i++
                }
                index = key[key.length-1]
                ref[index] = value
            }
        } else if (typeof key === 'object') {
            // no hace nada
        } else
            this._value[key] = value
        return true
    }

    delete(key) {
        delete this._value[key]
    }

    size() {
        return Object.keys(this._value).length
    }

}


export default Map