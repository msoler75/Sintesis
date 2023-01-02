import Variable from './Variable.js'



class Vector extends Variable {

  constructor(arr, defaultValue) {
    super()
    this._value = []
    if (arr === undefined) arr = []
    if (!Array.isArray(arr))
      throw new Error('Valor inválido al inicializar un vector')
    if (!['number', 'string', 'boolean'].includes(typeof defaultValue))
      defaultValue = null
    this.defaultValue = defaultValue
    this._initVector(this, arr, defaultValue)
  }

  size() {
    return this._value.length
  }

  toString() {
    if (!Array.isArray(this._value) && (typeof this._value !== 'object' || !(this._value instanceof Vector)))
      throw new Error("May be an error here!")
    let arr = this._value
    if (!Array.isArray(arr))
      arr = arr._value
    if (!Array.isArray(arr))
      arr = arr._value
    if (!Array.isArray(arr))
      throw new Error("Not an Array")
    return "[" + arr.map(x => (x._value === null || x._value === undefined) ? '' : x).join(", ") + "]"
  }

}



export default Vector