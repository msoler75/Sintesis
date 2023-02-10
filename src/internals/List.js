import Variable from './Variable.js'



class List extends Variable {

  constructor(arr) {
    super()
    this._value = []
    if (arr === undefined) arr = []
    if (!Array.isArray(arr))
      throw new Error('Valor inválido al inicializar una lista')
    this._initList(this, arr)
  }

  size() {
    return this._value.length
  }

  toString() {
    if (!Array.isArray(this._value) && (typeof this._value !== 'object' || !(this._value instanceof List)))
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



export default List