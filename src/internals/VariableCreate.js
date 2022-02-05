import Variable from './Variable.js'
import Map from './Map.js'
import Vector from './Vector.js'

const VariableCreate = function (src) {
    return src === undefined || src === null ? new Variable() : Array.isArray(src) ? new Vector(src, 0) : typeof src === 'object' ? new Map(src) : new Variable(src)
}

export default VariableCreate