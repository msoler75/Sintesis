import Variable from './Variable.js'






class Vector extends Variable {

  constructor(arr, defaultValue) {
    super()
    this._value = []
    if (arr === undefined) arr = []
    if (!Array.isArray(arr)) throw new Error('Valor inválido al inicializar un vector')
    this.defaultValue = Variable.valueOf(defaultValue)
    this._init(this, arr, defaultValue)
  }

  defineDefault() {
    if (this.defaultValue !== undefined) return
    // this.defaultValue = 0
  }

 


  size() {
    return this._value.length
  }

}



export default Vector