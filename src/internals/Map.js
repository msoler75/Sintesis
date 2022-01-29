import Variable from './Variable.js'


class Map extends Variable {

  constructor(obj)
  {
    super(obj || {})
  }

  get(key) {
    return this._value[key]
  }

  set(key, value) {
    this._value[key] = value
  }

  delete(key) {
      delete this._value[key]
  }

  size() {
    return Object.keys(this._value).length
  }

}


export default Map