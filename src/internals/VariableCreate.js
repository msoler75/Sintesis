import Variable from './Variable.js'
import Map from './Map.js'
import Vector from './Vector.js'

const VariableCreate = function (src) {
    if (src instanceof Variable)
        return src
    if (src === undefined || src === null)
        return new Variable()
    if (Array.isArray(src))
        return new Vector(src, 0)
    if (typeof src === 'object')
        return new Map(src)
    return new Variable(src)
}

export default VariableCreate