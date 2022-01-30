import exec from '../bin/exec.js'

test('Bucles-1 repeat', () => {
    expect(exec(`
    a=1
    repetir 3 {
        imprimir a
        a=a+1
    }    
    a=1 rep 3 imp a++
    `)).toContainText(`1 2 3 1 2 3`)
})


test('Bucles-2 repeat while', () => {
    expect(exec(`
    a=1
    repetir {
        imprimir a
        a=a+1
    } mientras a<4
    a=1 rep imp a++ mientras a<4
    `)).toContainText(`1 2 3 1 2 3`)
})


test('Bucles-3 pre and post', () => {
    expect(exec(`
    a = 1
    mientras (a < 3)  {
        imprimir a++
    }

    b = 1
    mientras (b < 3)  {
        imprimir ++b
    }
    `)).toContainText(`1 2 2 3`)
    })


test('Bucles-4 while repeat', () => {
    expect(exec(`
    a=1
    mientras a<4 repetir {
        imprimir a
        a=a+1
    }    
    a=1 mientras a<4 imp a++
    `)).toContainText(`1 2 3 1 2 3`)
})


test('Bucles-5 for to', () => {
    expect(exec(`
    para a=1 hasta 3 repetir {
        imprimir a
    }
    para a=1 hasta 3 imp a

    para a=1..3 repetir {
        imprimir a
    }
    
    para a=1..3 imp a
    `)).toContainText(`1 2 3 1 2 3 1 2 3 1 2 3`)
})


test('Bucles-6 for each of', () => {
    expect(exec(`
    para cada a de [1, 2, 3] repetir {
        imprimir a
    }
    para a de [1, 2, 3] imp a
    `)).toContainText(`1 2 3 1 2 3`)
})


test('Bucles-7 for modyfing iterator', () => {
    expect(exec(`
    para a=1 .. 3 repetir {
        imprimir a
    }
    
    para a=1 .. 6 repetir {
        imprimir a
        si a==2 a=5
    }
    `)).toContainText(`1 2 3 1 2 6`)

    expect(exec(`
    a=1
    mientras a<6 {
        imprimir a
        a = a+2
    }
    `)).toContainText(`1 3 5`)

})


test('Bucles-8 for each of', () => {
    expect(exec(`
    for each (a of [1,2,3])
        prn a
    `)).toContainText(`1 2 3`)

    expect(exec(`
    foreach (a of [1,2,3]) do
        prn a
    `)).toContainText(`1 2 3`)

    expect(exec(`
    foreach (a of [1,2,3]) do
        prn ++a
    `)).toContainText(`2 3 4`)

    expect(exec(`
    foreach (a of [1,2,3]) do
        prn a++
    `)).toContainText(`1 2 3`)
})


test('Bucles-9 for each in', () => {
    expect(exec(`
    for each (a in [7,8,9])
        prn a
    `)).toContainText(`7 8 9`)

    expect(exec(`
    foreach a in [7,8,9] do
        prn a
    `)).toContainText(`7 8 9`)

    expect(exec(`
    foreach (a in [1,2,3]) do
        prn ++a
    `)).toContainText(`2 3 4`)

    expect(exec(`
    a = map() 
    a['z'] = 1
    a[3] = 99
    for x in a prn x
    for x of a prn x
    for x,i of a prn i, x
    `)).toContainText(`99 1 99 1 3 99 z 1`)
})

test('Bucles-10 negative values', () => {
    expect(exec(`
    a = 0 while a>-4 imp a--    

    b = 0 rep 4 imp b--    
    `)).toContainText(`0 -1 -2 -3 0 -1 -2 -3`)

})

test('Bucles-11', () => {
    expect(exec(`
    para cada letra de 'jor' imp letra
    para cada (posicion =>  letra de 'jor') imp posicion, letra    
    para cada letra, posicion de 'jor' imp posicion, letra
    `)).toContainText(`j o r 0 j 1 o 2 r 0 j 1 o 2 r `)
})