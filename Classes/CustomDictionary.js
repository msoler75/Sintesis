class CustomDictionary {

  constructor() {
    this.data = {}
  }

  get(key) {
    return this.data[key] || null
  }

  set(key, value) {
    return this.data[key] = value
  }

  delete(key) {
    delete this.data[key]
  }
}

export default CustomDictionary
