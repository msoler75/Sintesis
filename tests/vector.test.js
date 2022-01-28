import exec from '../bin/exec.js'

test('Vector-declaration-1', () => {
    expect(exec(`v1 = vector[3]
    print v1`)).toContainText('[0, 0, 0]')
})

test('Vector-declaration-2', () => {
    expect(exec(`v1 = vector[2][3] 
    print v1`)).toContainText('[[0, 0, 0], [0, 0, 0]]')
})

test('Vector-declaration-3', () => {
    expect(exec(`v1 = vector[2][3][4]
    print v1`)).toContainText('[[[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]], [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]]')
})
