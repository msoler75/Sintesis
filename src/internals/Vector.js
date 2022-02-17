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

}



export default Vector