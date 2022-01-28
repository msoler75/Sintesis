import Variable from './Variable.js'

class Vector extends Variable {

  constructor(sizes) {
    super(sizes)
    if (!sizes) this.data = []
    else if (typeof sizes == 'string')
      this.data = sizes.split('')
    else {
      this.data = []
      if (typeof sizes == 'number')
        sizes = [sizes]
      this.data = this.createArray(sizes, 0)
    }
  }

  createArray(sizes, idx) {
    let r = []
    for (let i = 0; i < sizes[idx]; i++)
      r[i] = idx + 1 < sizes.length ? this.createArray(sizes, idx + 1) : 0
    return r
  }

  // busca la referencia atravesando el data con los indices sucesivos de indexes
  // devuelve la referencia al último array y el índice último para conseguir el acceso al dato, sea para leer o escribir o borrar
  getRef(indexes, create) {
    if (typeof indexes == 'number')
      indexes = [indexes]
    let ref = this.data
    for (let i = 0; i < indexes.length - 1; i++) {
      const index = indexes[i]
      if (!(index in ref)) {
        if (create)
          ref[index] = createArray([index + 1], 0)
        else
          return [null, 0]
      }
      let nextIndex = indexes[i+1]
      if (!Array.isArray(ref[index])) {
        if (create)
          ref[index] = this.createArray([nextIndex + 1], 0)
        else
          return [null, 0]
      }
      ref = ref[index]
    }
    let lastIndex = indexes[indexes.length - 1]
    if (!(lastIndex in ref)) {
      if (create)
        ref[lastIndex] = 0
      else
        return [null, 0]
    }
    return [ref, lastIndex]
  }


  getValueFrom(indexes) {
    let [ref, idx] = this.getRef(indexes)
    if (!ref) return null
    return ref[idx] || 0
  }

  setValueAt(indexes, value) {
    let [ref, idx] = this.getRef(indexes, true)
    ref[idx] = value
  }

  delete(indexes) {
    let [ref, idx] = this.getRef(indexes)
    if (ref && idx in ref)
      delete ref[idx]
  }

  size() {
    return this.data.length
  }

  toText(v) {
    if(Array.isArray(v)) 
      return  '[' + v.map(x=>this.toText(x)).join(', ') +']'
    return v
  }

  text() {
    return this.toText(this.data)
  }
}

export default Vector
