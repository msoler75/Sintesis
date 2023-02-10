import MemoryRef from './MemoryRef.js'
import Variable from './Variable.js'
import Dictionary from './Dictionary.js'
import List from "./List.js"

const valueOf = function (obj) {
    if (Array.isArray(obj)) {
        const r = []
        for (const v of obj)
            r.push(valueOf(v))
        return r
    }
    if (obj instanceof MemoryRef)
        obj = obj.variable
    if (obj instanceof Dictionary) {
        let r = {}
        for (const key in obj._value) {
            r[key] = valueOf(obj._value[key])
        }
        obj = r
    }
    else if(obj instanceof List) {
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