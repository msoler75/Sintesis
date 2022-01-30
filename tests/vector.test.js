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


test('Vector-declaration-4', () => {
    expect(exec(`
    print [1, 2, "hola"]
    `)).toContainText('[1, 2, hola]')
})

test('Vector-declaration-5', () => {
    expect(exec(`
    a[1] = 1
    a[3] = 3
    print a
    `)).toContainText('[0, 1, 0, 3]')
})


test('Vector-declaration-6-initialisation', () => {
    expect(exec(`
    a = vector[3]("hola")
    a[0] = 77
    print a
    `)).toContainText('[77, hola, hola]')
})


test('Vector-7-deep', () => {
    expect(exec(`
    a = vec[1][1]
    a[2]['z'] = 'hola'
    a[3][4] = 99
    a[3][2] = ['a', 'b', 'c']
    a[4][1][2] = 777
    a[5]['x'] = 1
    imp a
    `)).toContainText('[[0], 0, {z: hola}, [0, 0, [a, b, c], 0, 99], [0, [0, 0, 777]], {x: 1}]')
})



test('Vector-8-to-map', () => {
    expect(exec(`
    a = vec[]
    a['y'] = 123
    a[3] = 321
    imp a
    `)).toContainText('{3: 321, y: 123}')
})