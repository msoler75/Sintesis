Object.defineProperty(Array.prototype, 'filterAsync', {
    value: async function (predicate) {
        const arr = this
        return arr.reduce(async (memo, e) => [...await memo, ...await predicate(e) ? [e] : []], [])
    }
})

Object.defineProperty(Array.prototype, 'mapAsyncParallel', {
    value: async function (predicate) {
        const arr = this
        return await Promise.all(arr.map(predicate));
    }
})

Object.defineProperty(Array.prototype, 'mapAsyncSequence', {
    value: async function (predicate) {
        const arr = this
        const result = [];
        for (var i = 0; i < arr.length; i++) {
            const r = await predicate(arr[i])
            result.push(r);
        }
        return result;
    }
})