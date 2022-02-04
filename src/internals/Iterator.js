import Vector from './Vector.js'
import MemoryRef from './MemoryRef.js'

class Iterator {
    constructor(collection) {
        this._collection = collection
        this.reset()
        this._ended = this.size === 0
    }

    reset() {
        let coll = MemoryRef.literalOf(this._collection)
        this.idx = Array.isArray(coll) ? 0 :
            typeof coll === 'object' ? Object.keys(coll)[0] :
            0
    }

    next() {
        if (this.ended()) return null
        let coll = MemoryRef.literalOf(this._collection)
        if (typeof this.idx == 'number') {
            this.idx++
            if (this.idx >= this.size) {
                this._ended = true
                this.idx = null
            }
        } else {
            const keys = Object.keys(coll)
            let curIdx = keys.indexOf(this.idx)
            if (curIdx === -1 || curIdx === keys.length - 1) {
                this._ended = true
                this.idx = null
            } else {
                this.idx = keys[curIdx + 1]
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
        let coll = MemoryRef.literalOf(this._collection)
        if (!coll) return 0
        if (typeof coll === 'string')
            return coll.length
        if (Array.isArray(coll)) {
            return coll.length
        }
        if (coll instanceof Vector) {
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
        let coll = MemoryRef.literalOf(this._collection)
        return Array.isArray(coll) ? coll[this.idx] :
            coll instanceof Vector ? coll.getValueFrom([this.idx]) :
            typeof coll === 'string' ? coll.charAt(this.idx) :
            coll[this.idx]
    }
}

Iterator.iterable = (obj) => {
    return (obj instanceof MemoryRef) || (obj instanceof Vector) || Array.isArray(obj) || (typeof obj === 'object') || (typeof obj === 'string')
}

export default Iterator