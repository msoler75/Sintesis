import MemoryRef from './MemoryRef.js'
import Vector from './Vector.js'
import Variable from './Variable.js'
import Map from './Map.js'

const valueOf = function (obj) {
    if (Array.isArray(obj)) {
        const r = []
        for (const v of obj)
            r.push(valueOf(v))
        return r
    }
    if (obj instanceof MemoryRef)
        obj = obj.variable
    if (obj instanceof Map) {
        let r = {}
        for (const key in obj._value) {
            r[key] = valueOf(obj._value[key])
        }
        obj = r
    }
    else if(obj instanceof Vector) {
        let r = []
        for(const key in obj._value) {
            r[key] = valueOf(obj._value[key])
        }
        obj = r
    }
    else if (obj instanceof Variable)
        obj = valueOf(obj.value)
    return obj
}


export default valueOf