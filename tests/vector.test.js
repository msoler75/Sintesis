import exec from '../bin/exec.js'

test('Vector-declaration-1', () => {
    expect(exec(`
    v1 = vector[3]
    imp v1
    `)).toContainText('[, , ]')
})

test('Vector-declaration-2', () => {
    expect(exec(`
    v1 = vector[2][3](0)
    imp v1
    `)).toContainText('[[0, 0, 0], [0, 0, 0]]')
})

test('Vector-declaration-3', () => {
    expect(exec(`
    v1 = vector[2][3][4](0)
    imp v1
    `)).toContainText('[[[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]], [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]]')
})


test('Vector-literal-4', () => {
    expect(exec(`
    imp [1, 2, "hola"]
    `)).toContainText('[1, 2, hola]')
})

test('Vector-indirect-initialisation-5', () => {
    expect(exec(`
    a[1] = 1
    a[3] = 3
    imp a
    `)).toContainText('[, 1, , 3]')
})


test('Vector-declaration-6-initialisation', () => {
    expect(exec(`
    a = vector[3]("hola")
    a[0] = 77
    imp a
    `)).toContainText('[77, hola, hola]')
})


test('Vector-7-bidimensional', () => {
    expect(exec(`
    a=vector[2][2](-1)
    imprimir a
    a[0] = 1
    imprimir a
    a[1][1] = 1
    imprimir a
    `)).toContainText('[[-1, -1], [-1, -1]] [1, [-1, -1]] [1, [-1, 1]]')

})


test('Vector-8-for', () => {
    expect(exec(`
    a=vector[3] 
    para(i en 0..1) 
    a[i]=1
    imprimir a
    `)).toContainText('[1, 1, ]')
})




test('Vector-9-for-2d', () => {
    expect(exec(`
    a=vector[2][2](0) 
    para(i en 0..1) 
    a[i][1]=1 
    imprimir a
    `)).toContainText('[[0, 1], [0, 1]]')

})

test('Vector-10-ajedrez', () => {
    expect(exec(`
    a=vector[4][4]
    para(i=0..3) {
        para(j=0..3)
            a[i][j] = (i+j)%2    
    }
    imprimir a
    `)).toContainText('[[0, 1, 0, 1], [1, 0, 1, 0], [0, 1, 0, 1], [1, 0, 1, 0]]')

})


test('Vector-11-3d', () => {
    expect(exec(`
    a=vector[3][3][3]
    para(i=0..2) {
        para(j=0..2)
            para(k=0..2)
                a[i][j][k] = ((i+j+k)%3)-1    
    }
    imprimir a
    `)).toContainText('[[[-1, 0, 1], [0, 1, -1], [1, -1, 0]], [[0, 1, -1], [1, -1, 0], [-1, 0, 1]], [[1, -1, 0], [-1, 0, 1], [0, 1, -1]]]')

})


test('Vector-12-w-map', () => {
    expect(exec(`
    a = vec[2][2](-2)
    a[1] = 99
    a[2] = {z:'hola'}
    a[3] = ['a', 'b', 'c']
    imp a
    `)).toContainText('[[-2, -2], 99, {z: hola}, [a, b, c]]')
})


test('Vector-13', () => {
    expect(exec(`
    a = [1,2]
    b = [3,4]
    imp a+b
    `)).toContainText('[1, 2, 3, 4]')
})