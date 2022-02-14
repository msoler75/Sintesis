import variableCreate from './Factory.js'
import Variable from './Variable.js'
import Map from './Map.js'

function _checkIndex(index) {
  if (typeof index === 'string' && index.match(/^\d+$/))
    index = parseInt(index)
  if (typeof index === 'string')
    throw new Error('Los vectores solo aceptan índices numéricos')
  return index
}

const _createEmptyArraySizes = function (sizes, idx, initialValue) {
  let r = []
  for (let i = 0; i < sizes[idx]; i++)
    r[i] = idx + 1 < sizes.length ? _createEmptyArraySizes(sizes, idx + 1, initialValue) : new Variable(initialValue)
  return r
}

class Vector extends Variable {

  constructor(arr, defaultValue) {
    super()
    this._value = []
    if (arr === undefined) arr = []
    if (!Array.isArray(arr)) throw new Error('Valor inválido al inicializar un vector')
    this.defaultValue = Variable.valueOf(defaultValue)
    for (const i in arr) {
      if (arr[i] instanceof Variable)
        this.setVariable(i, arr[i])
      else if (Array.isArray(arr[i]))
        this.setVariable(i, new Vector(arr[i], defaultValue))
      else if (typeof arr[i] === 'object')
        this.setVariable(i, new Map(arr[i]))
      else
        this.setValue(i, arr[i])
    }
  }

  defineDefault() {
    if (this.defaultValue !== undefined) return
    // this.defaultValue = 0
  }

  setVariable(index, vari) {
    if (!(vari instanceof Variable))
      throw new Error('setVariable exige una Variable')
    index = _checkIndex(index)
    this.getRef(index, true) // para expandir índices si acaso no existen
    this._value[index] = vari
  }



  /*
  deleteAt(indexes) {
    let ref = this.getRefAt(indexes, true)
    if(ref)
  }*/

  size() {
    return this._value.length
  }

}



Vector.prototype.createWithSizes = function (sizes, defaultValue) {
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

Vector.prototype.getRef = function (index, create) {
  index = _checkIndex(index)
  if (!(index in this._value)) {
    if (!create) return null
    this.defineDefault()
    for (let i = this._value.length; i <= index; i++)
      this._value[i] = variableCreate(this.defaultValue)
  }
  return this._value[index]
}

Vector.prototype.setValue = function (index, value) {
  if (value instanceof Variable)
    return this.setVariable(index, value)
  //throw new Error('setValue no permite asignar una Variable')
  index = _checkIndex(index)
  let ref = this.getRef(index, true)
  if (ref) ref.value = value
}



Vector.prototype.delete = function (index) {
  index = _checkIndex(index)
  let len = this._value.length
  if (len <= index)
    return
  if (len - 1 == index)
    this._value.pop()
  else {
    delete this._value[index]
    this.defineDefault()
    this._value[index] = variableCreate(this.defaultValue)
  }
}

export default Vector