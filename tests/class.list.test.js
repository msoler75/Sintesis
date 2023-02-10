import List from "../src/internals/List.js"
import Dictionary from '../src/internals/Dictionary.js'
import Single from '../src/internals/Single.js'
import Factory from '../src/internals/Factory.js'

import exec from '../bin/exec.js'


test('List basic-1', () => {
    let v = new List([10, 20])
    expect(v.toString()).toContainText('[10, 20]')

    expect(v.getMemberRef(0).toString()).toContainText('10')

    expect(v.getMemberRef(1).toString()).toContainText('20')

    v.setVariable(4, new List([50, 60]))

    expect(v.toString()).toContainText('[10, 20, , , [50, 60]]')

    expect(v.getMemberRef(4).getMemberRef(1).toString()).toContainText('60')
})


test('List basic-2', () => {
    let v = new List([10, 20])
    let m = new Dictionary({'j':1, 'p': 2})
    v.setVariable(3, m)
    expect(v.toString()).toContainText('[10, 20, , {j: 1, p: 2}]')

    v.setValue(5, 55)
    expect(v.toString()).toContainText('[10, 20, , {j: 1, p: 2}, , 55]')
})


test('List delete', () => {
    
    let v = new List([10, 20, 30, 40, 50, 60, 70])
    v.delete(4)
    v.delete(2)
    expect(v.toString()).toContainText('[10, 20, 40, 60, 70]')
    v.delete(3)
    expect(v.toString()).toContainText('[10, 20, 40, 70 ]')
})

test('List insert/append', () => {
    let v = new List([10, 20, 30])
    v.insertValue(-1)
    expect(v.toString()).toContainText('[-1, 10, 20, 30]')
    v.appendValue(99)
    expect(v.toString()).toContainText('[-1, 10, 20, 30, 99]')

    v.insertValue(new Single(-2))
    expect(v.toString()).toContainText('[-2, -1, 10, 20, 30, 99]')

    v.appendVariable(new Single(101))
    expect(v.toString()).toContainText('[-2, -1, 10, 20, 30, 99, 101]')
    
    v.insertVariable(new List([5, 6]))
    expect(v.toString()).toContainText('[[5, 6], -2, -1, 10, 20, 30, 99, 101]')
    

    v.insertValue({h: 3, k: 7})
    expect(v.toString()).toContainText('[{h:3, k:7}, [5, 6], -2, -1, 10, 20, 30, 99, 101]')

    v.appendValue({z: 8, x: 2})
    expect(v.toString()).toContainText('[{h:3, k:7}, [5, 6], -2, -1, 10, 20, 30, 99, 101, {z:8, x: 2}]')

    v.insertVariable(new Dictionary({m: 8}))
    expect(v.toString()).toContainText('[{m: 8}, {h:3, k:7}, [5, 6], -2, -1, 10, 20, 30, 99, 101, {z:8, x: 2}]')

    v.appendVariable(new Dictionary({y: "a"}))
    expect(v.toString()).toContainText('[{m: 8}, {h:3, k:7}, [5, 6], -2, -1, 10, 20, 30, 99, 101, {z:8, x: 2}, {y: a}]')

})




test('List with Dictionary', () => {

    let v = new List([10, 20])
    let m = new Dictionary({
        'j': 1,
        'p': 2
    })
    v.setVariable(3, m)
    m.setValue('k', 77)
    expect(v.toString()).toContainText('[10, 20, , {j: 1, p: 2, k: 77}]')
    expect(v.getRef(3).getRef('p').toString()).toContainText('2')
    
    m.delete('j')
    expect(v.getRef(3).toString()).toContainText('{p: 2, k: 77}')
    
    let x = new Single(55)
    m.setVariable('fifty', x)
    expect(v.getRef(3).toString()).toContainText('{p: 2, k: 77, fifty: 55}')
})


test('Dictionary with List', () => {
    let m = new Dictionary()
    m.setValue('j', 1)
    m.setVariable('k', new Single(2))

    let n = new Dictionary({ i: 3 })
    m.setVariable('dicc', n)
    n.setValue('z', 99)

    n.setVariable('x', new List([7, 8]))

    expect(m.toString()).toContainText('{j: 1, k: 2, dicc: {i: 3, z: 99, x: [7, 8]}}')
})




test('List declaration void', async () => {
    expect(await exec(`
    v1 = []
    imprimir v1
    `)).toContainText('[]')
})

test('List declaration singles', async () => {
    expect(await exec(`
    v1 = [1, 2, 3]
    imprimir v1
    `)).toContainText('[1, 2, 3]')
})

test('List declaration 2d', async () => {
    expect(await exec(`
    v1 = [[1, 2], [3, 4]]
    imprimir v1
    `)).toContainText('[[1, 2], [3, 4]]')
})


test('list literal', async () => {
    expect(await exec(`
    imprimir [1, 2, "hola"]
    `)).toContainText('[1, 2, hola]')
})

test('list indirect initialisation', async () => {
    expect(await exec(`
    a[1] = 1
    a[3] = 3
    imprimir a
    `)).toContainText('[, 1, , 3]')
})


test('list deep setting', async () => {
    expect(await exec(`
    a=[1, 2, [3, 4]]
    imprimir a
    a[0] = 33
    imprimir a
    a[2][1] = -1
    imprimir a
    `)).toContainText('[1, 2, [3, 4]] [33, 2, [3, 4]] [33, 2, [3, -1]]')

})


test('list for each setting', async () => {
    expect(await exec(`
    a=[5, 6, 7]
    para(i en 0..1) 
    a[i]=1
    imprimir a
    `)).toContainText('[1, 1, 7]')
})




test('list for each deep', async () => {
    expect(await exec(`
    a=[[1, 2], [3, 4]] 
    para(i en 0..1) 
    a[i][1]=9 
    imprimir a
    `)).toContainText('[[1, 9], [3, 9]]')

})

test('list ajedrez 4x4', async () => {
    expect(await exec(`
    a=[[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]
    para(i=0..3) {
        para(j=0..3)
            a[i][j] = (i+j)%2    
    }
    imprimir a
    `)).toContainText('[[0, 1, 0, 1], [1, 0, 1, 0], [0, 1, 0, 1], [1, 0, 1, 0]]')

})


test('list 3d', async () => {
    expect(await exec(`
    a=[[[0, 0, 0], [0, 0, 0], [0, 0, 0]], [[0, 0, 0], [0, 0, 0], [0, 0, 0]], [[0, 0, 0], [0, 0, 0], [0, 0, 0]]]
    para(i=0..2) {
        para(j=0..2)
            para(k=0..2)
                a[i][j][k] = ((i+j+k)%3)-1    
    }
    imprimir a
    `)).toContainText('[[[-1, 0, 1], [0, 1, -1], [1, -1, 0]], [[0, 1, -1], [1, -1, 0], [-1, 0, 1]], [[1, -1, 0], [-1, 0, 1], [0, 1, -1]]]')

})


test('list set dictionaries', async () => {
    expect(await exec(`
    a = [[6, 7], [8, 9]]
    a[1] = 99
    a[2] = {z:'hola'}
    a[3] = ['a', 'b', 'c']
    imprimir a
    `)).toContainText('[[6, 7], 99, {z: hola}, [a, b, c]]')
})


test('list concat', async () => {
    expect(await exec(`
    a = [1,2]
    b = [3,4]
    imprimir a+b
    `)).toContainText('[1, 2, 3, 4]')
})

test('list swap', async () => {
    expect(await exec(`
    colores = ["azul", "rojo"]
    c = colores[0]
    colores[0] = colores[1]
    colores[1] = c
    imprimir colores
    `)).toContainText('[rojo, azul]')
})

test('list foreach',  async () => {
    expect(await exec(`
    a = [1, "hola"]
    para cada x en a
    imprimir x
    `)).toContainText('1 hola')
})