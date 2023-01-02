/*Object.defineProperty(Array.prototype, 'filter', {
    value:  function (predicate) {
        const arr = this
        return arr.reduce( (memo, e) => [... memo, ... predicate(e) ? [e] : []], [])
    }
})*/

/*Object.defineProperty(Array.prototype, 'mapParallel', {
    value:  function (predicate) {
        const arr = this
        return  Promise.all(arr.map(predicate));
    }
})*/

Object.defineProperty(Array.prototype, 'mapSequence', {
    value:  function (predicate) {
        return this.map(predicate)
        const arr = this
        const result = [];
        for (var i = 0; i < arr.length; i++) {
            const r =  predicate(arr[i])
            result.push(r);
        }
        return result;
    }
})