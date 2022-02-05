import Variable from './Variable.js'
import Map from './Map.js'
import Class from './Class.js'
import Vector from './Vector.js'

const VariableCreate = function (src) {
    return src === undefined ? new Variable() : Array.isArray(src) ? new Vector(src, 0) : typeof src === 'object' ? new Map(src) : new Variable(src)
}

Variable.create = VariableCreate

export default Variable