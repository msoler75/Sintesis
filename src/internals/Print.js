import MemoryRef from './MemoryRef.js'

const printObject = function (obj) {
    if (obj === undefined) return 'nulo'
    if (obj === null) return 'nulo'
    if (obj === true) return 'cierto'
    if (obj === false) return 'falso'
    while (obj instanceof MemoryRef)
        obj = obj.variable
    if (obj.text && typeof obj.text === 'function')
        return obj.text()
    if (Array.isArray(obj))
    {
        const r = []
        obj.forEach(x => r.push(printObject(x)))
        return '[' + r.join(', ').replace(/\bnulo\b/g, '') + ']'
    }
    if (typeof obj === 'object') {
        let values = []
        let keys = Object.keys(obj)
        keys.forEach(k => {
            let z = obj[k]
            let str = printObject(z)
            values.push(k + ': ' + str)
        })
        return '{' + values.join(', ') + '}'
    }
    return obj
}

export default printObject