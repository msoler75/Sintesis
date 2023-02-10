import MemoryRef from './MemoryRef.js'
import valueOf from './ValueOf.js'
import List from "./List.js"

class Iterator {
    constructor(collection) {
        this._collection = collection
        this.reset()
        this._ended = this.size === 0
    }

    reset() {
        let coll = valueOf(this._collection)
        this.index = Array.isArray(coll) ? 0 :
            typeof coll === 'object' ? Object.keys(coll)[0] :
            0
    }

    next() {
        if (this.ended()) return null
        let coll = valueOf(this._collection)
        if (typeof this.index == 'number') {
            this.index++
            if (this.index >= this.size) {
                this._ended = true
                this.index = null
            }
        } else {
            const keys = Object.keys(coll)
            let curIdx = keys.indexOf(this.index)
            if (curIdx === -1 || curIdx === keys.length - 1) {
                this._ended = true
                this.index = null
            } else {
                this.index = keys[curIdx + 1]
            }
        }
        return this.current
    }

    ended() {
        return this._ended
    }

    set collection(collection) {
        this._collection = collection
    }

    get collection() {
        return this._collection
    }

    get size() {
        let coll = valueOf(this._collection)
        if (!coll) return 0
        if (typeof coll === 'string')
            return coll.length
        if (Array.isArray(coll)) {
            return coll.length
        }
        if (coll instanceof List) {
            return coll.value.length
        }
        if (coll instanceof Object) {
            let n = 0
            for (let key in coll) n++
            return n
        }
        return 0
    }

    get current() {
        if (this.ended()) return null
        let coll = valueOf(this._collection)
        return Array.isArray(coll) ? coll[this.index] :
            coll instanceof List ? coll.getValueFrom([this.index]) :
            typeof coll === 'string' ? coll.charAt(this.index) :
            coll[this.index]
    }
}

Iterator.iterable = (obj) => {
    return (obj instanceof MemoryRef) || (obj instanceof List) || Array.isArray(obj) || (typeof obj === 'object') || (typeof obj === 'string')
}

export default Iterator