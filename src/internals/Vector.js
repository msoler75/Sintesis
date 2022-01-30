import Variable from './Variable.js'

const _createEmptyArraySizes = function (sizes, idx, initialValue) {
  let r = []
  for (let i = 0; i < sizes[idx]; i++)
    r[i] = idx + 1 < sizes.length ? _createEmptyArraySizes(sizes, idx + 1, initialValue) : initialValue
  return r
}

class Vector extends Variable {

  constructor(arr, defaultValue) {
    super(!arr ? [] : arr instanceof Variable ? arr.value : arr)
    this.defaultValue = defaultValue
  }

  // busca la referencia atravesando el data con los indices sucesivos de indexes
  // devuelve la referencia al último array y el índice último para conseguir el acceso al dato, sea para leer o escribir o borrar
  // si create es cierto, crea las posiciones del array o multi array necesarias para acceder al índice final
  getRef(indexes, create) {
    if (typeof indexes == 'number')
      indexes = [indexes]
    let ref = this.value
    for (let i = 0; i < indexes.length - 1; i++) {
      const index = indexes[i]
      if (!(index in ref)) {
        if (create)
          for (let i = ref.length; i <= index; i++)
            ref[i] = 0// _createEmptyArraySizes([index + 1], 0, this.defaultValue)
        else
          return [
            [], 0
          ]
      }
      let nextIndex = indexes[i + 1]
      if (!Array.isArray(ref[index])) {
        if (create)
          ref[index] = _createEmptyArraySizes([nextIndex + 1], 0, this.defaultValue)
        else
          return [
            [], 0
          ]
      }
      ref = ref[index]
    }
    let lastIndex = indexes[indexes.length - 1]
    if (!(lastIndex in ref)) {
      if (create)
        for (let i = ref.length; i <= lastIndex; i++)
          ref[i] = this.defaultValue
      else
        return [
          [], 0
        ]
    }
    return [ref, lastIndex]
  }


  getValueFrom(indexes) {
    let [ref, idx] = this.getRef(indexes)
    if (!ref) return null
    return ref[idx] || this.defaultValue
  }

  setValueAt(indexes, value) {
    let [ref, idx] = this.getRef(indexes, true)
    if (typeof idx === 'string' && Array.isArray(ref)) {
      let lastIndex = indexes.pop()
      let [refPrev, idxPrev] = indexes.length ? this.getRef(indexes) : [this, '_value']
      if (refPrev) {
        // convertimos a objeto
        refPrev[idxPrev] = {
          ...refPrev[idxPrev]
        }
        refPrev[idxPrev][lastIndex] = value instanceof Variable ? value.value : value
      }
    } else
      ref[idx] = value instanceof Variable ? value.value : value
  }

  delete(indexes) {
    let [ref, idx] = this.getRef(indexes)
    if (ref && idx in ref)
      delete ref[idx]
  }

  size() {
    return this.value.length
  }

}

Vector.createWithSizes = function (sizes, defaultValue) {
  const vec = new Vector([], defaultValue)
  if (!sizes) return vec
  if (typeof sizes == 'string')
    vec.value = sizes.split('')
  else {
    if (typeof sizes == 'number')
      sizes = [sizes]
    vec.value = _createEmptyArraySizes(sizes, 0, vec.defaultValue)
  }
  return vec
}


export default Vector