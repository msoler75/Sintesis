import exec from '../bin/exec.js'
test('Variables-1', () => {
    expect(exec(`a=1 imprimir a`)).toBe('1\n')
})

/* const result = exec(`a=1 imprimir a`)
console.log('RESULT:')
console.log(result)
*/