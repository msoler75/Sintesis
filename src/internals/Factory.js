import printObject from './Print.js'
import Variable from './Variable.js'
import Vector from './Vector.js'
import Single from './Single.js'
import Map from './Map.js'


const variableCreate = function (src) {
    if (src instanceof Variable)
        return src
    if (src === undefined || src === null)
        return new Variable()
    if (Array.isArray(src))
        return new Vector(src, 0)
    if (typeof src === 'object')
        return new Map(src)
    return new Single(src)
}


// extends variable classes

Object.defineProperty(Variable.prototype, 'text', {
    value: function () {
        return printObject(this.value)
    }
})


Object.defineProperty(Map.prototype, 'getRef', {
    value: function (key, create) {
        if (!(key in this._value)) {
            if (!create)
                return null
            this._value[key] = variableCreate(null)
        }
        return this._value[key]
    }
})

Object.defineProperty(Map.prototype, 'setValue', {
    value: function (key, value) {
        if (value instanceof Variable)
            // throw new Error('setValue no permite asignar una Variable')
            return this.setVariable(key, value)
        this._value[key] = variableCreate(value)
    }
})

Object.defineProperty(Vector.prototype, '_initVector', {
    value: function (obj, arr, defaultValue) {
        for (const i in arr) {
            console.log('_init_vector')
            if (arr[i] instanceof Variable)
                obj.setVariable(i, arr[i])
            else if (Array.isArray(arr[i]))
                obj.setVariable(i, new Vector(arr[i], defaultValue))
            else if (arr[i] !== null && typeof arr[i] === 'object')
                obj.setVariable(i, new Map(arr[i]))
            else
                obj.setValue(i, arr[i])
        }
    }
})

const _createEmptyArraySizes = function (sizes, idx, initialValue) {
    let r = []
    for (let i = 0; i < sizes[idx]; i++)
        r[i] = idx + 1 < sizes.length ? _createEmptyArraySizes(sizes, idx + 1, initialValue) : new Variable(initialValue)
    return r
}


const createVectorWithSizes = function (sizes, defaultValue) {
    const vec = new Vector([], defaultValue)
    if (!sizes) return vec
    if (typeof sizes == 'string')
        vec._value = sizes.split('')
    else {
        if (typeof sizes == 'number')
            sizes = [sizes]
        vec._value = new Vector(_createEmptyArraySizes(sizes, 0, vec.defaultValue))
    }
    return vec
}


function _checkIndex(index) {
    if (typeof index === 'string' && index.match(/^\d+$/))
        index = parseInt(index)
    if (typeof index === 'string')
        throw new Error('Los vectores solo aceptan índices numéricos')
    return index
}

Object.defineProperty(Vector.prototype, 'getRef', {
    value: function (index, create) {
        index = _checkIndex(index)
        if (!(index in this._value)) {
            if (!create) return null
            for (let i = this._value.length; i <= index; i++)
                this._value[i] = variableCreate(this.defaultValue)
        }
        return this._value[index]
    }
})

Object.defineProperty(Vector.prototype, 'setVariable', {
    value: function (index, vari) {
        if (!(vari instanceof Variable))
            throw new Error('setVariable exige una Variable')
        index = _checkIndex(index)
        this.getRef(index, true) // para expandir índices si acaso no existen
        this._value[index] = vari
    }
})

Object.defineProperty(Vector.prototype, 'setValue', {
    value: function (index, value) {
        if (value instanceof Variable)
            return this.setVariable(index, value)
        //throw new Error('setValue no permite asignar una Variable')
        index = _checkIndex(index)
        let ref = this.getRef(index, true)
        if (ref) ref.value = value
    }
})



Object.defineProperty(Vector.prototype, 'delete', {
    value: function (index) {
        index = _checkIndex(index)
        let len = this._value.length
        if (len <= index)
            return
        if (len - 1 == index)
            this._value.pop()
        else {
            delete this._value[index]
            this._value[index] = variableCreate(this.defaultValue)
        }
    }
})

export {
    variableCreate,
    createVectorWithSizes
}