import Variable from './Variable.js'
import Map from './Map.js'
import Vector from './Vector.js'
import Instance from './Instance.js'

const VariableCreate = function (src) {
    return src === undefined || src === null ? new Variable() : src instanceof Instance|| src instanceof Variable?src:Array.isArray(src) ? new Vector(src, 0) : typeof src === 'object' ? new Map(src) : new Variable(src)
}

export default VariableCreate