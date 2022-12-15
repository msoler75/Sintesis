Array.prototype.filterAsync = async function (predicate) {
    const arr = this
    return arr.reduce(async (memo, e) => [...await memo, ...await predicate(e) ? [e] : []], []);
}

Array.prototype.mapAsyncParallel = async function (predicate) {
    const arr = this
    return await Promise.all(arr.map(predicate));
}


Array.prototype.mapAsyncSequence = async function (predicate) {
    const arr = this
    const result = [];
    for (var i = 0; i < arr.length; i++) {
        result.push(await predicate(arr[i]));
    }
    return result;
};