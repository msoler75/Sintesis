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


test('Bucles-5 para to', () => {
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


test('Bucles-6 para cada de', () => {
    expect(exec(`
    para cada a de [1, 2, 3] repetir {
        imprimir a
    }
    `)).toContainText(`1 2 3`)
    
    expect(exec(`
    para a de [1, 2, 3] imp a
    `)).toContainText(`1 2 3`)
    
    expect(exec(`
    para cada (a en [3, 2, 1]) imp a
    `)).toContainText(`3 2 1`)
    
    expect(exec(`
    para (a en ['r', 'f', 33]) imp a
    `)).toContainText(`r f 33`)

})


test('Bucles-7 para modyfing iterator', () => {
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


test('Bucles-8 para cada of', () => {
    expect(exec(`
    para cada (a of [1,2,3])
        imp a
    `)).toContainText(`1 2 3`)

    expect(exec(`
    paracada (a of [1,2,3]) do
        imp a
    `)).toContainText(`1 2 3`)

    expect(exec(`
    paracada (a of [1,2,3]) do
        imp ++a
    `)).toContainText(`2 3 4`)

    expect(exec(`
    paracada (a of [1,2,3]) do
        imp a++
    `)).toContainText(`1 2 3`)
})


test('Bucles-9 para cada in', () => {
    expect(exec(`
    para cada (a en [7,8,9])
        imp a
    `)).toContainText(`7 8 9`)

    expect(exec(`
    paracada a en [7,8,9] do
        imp a
    `)).toContainText(`7 8 9`)

    expect(exec(`
    para (a en [1,2,3]) do
        imp ++a
    `)).toContainText(`2 3 4`)

    expect(exec(`
    a = diccionario() 
    a['z'] = 1
    a[3] = 99
    para x in a imp x
    para x of a imp x
    para x,i of a imp i, x
    `)).toContainText(`99 1 99 1 3 99 z 1`)
})

test('Bucles-10 negative values', () => {
    expect(exec(`
    a = 0 
    mientras a>-4 
    imp a--       

    b = 0 
    rep 4 
    imp b--    
    `)).toContainText(`0 -1 -2 -3 0 -1 -2 -3`)

})

test('Bucles-11 paracada variants', () => {
    expect(exec(`
    para cada letra de 'jor' imp letra
    para cada (posicion =>  letra de 'jor') imp posicion, letra    
    para cada letra, posicion de 'jor' imp posicion, letra
    `)).toContainText(`j o r 0 j 1 o 2 r 0 j 1 o 2 r `)
})


test('Bucles-12-paracada', () => {
    expect(exec(`
    lugares['casa'] = 11
    lugares['pub'] = 22
    lugares['local'] = 33

    imprimir lugares

    imprimir 'tipos de habitaculos:'
    para cada (codigo, indice en lugares) imprimir '- '+indice

    imprimir 'codigos de habitaculos:'
    para cada (codigo de lugares) imprimir '- '+codigo
    `)).toContainText(`
    {casa: 11, pub: 22, local: 33}

    tipos de habitaculos:
    - casa
    - pub
    - local
    
    codigos de habitaculos:
    - 11
    - 22
    - 33
    `)
})
