import exec from '../bin/exec.js'

test('Bucles-1 repeat', async () => {
    expect(await exec(`
    a=1
    repetir 3 {
        imprimir a
        a=a+1
    }    
    a=1 ; repetir 3 
    imprimir a++
    `)).toContainText(`1 2 3 1 2 3`)
})


test('Bucles-2 repeat while', async () => {
    expect(await exec(`
    a=1
    repetir {
        imprimir a
        a=a+1
    } mientras a<4
    a=1 ; repetir imprimir a++ mientras a<4
    `)).toContainText(`1 2 3 1 2 3`)
})


test('Bucles-3 pre and post', async () => {
    expect(await exec(`
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


test('Bucles-4 while repeat', async () => {
    expect(await exec(`
    a=1
    mientras a<4 repetir {
        imprimir a
        a=a+1
    }    
    a=1 ; mientras a<4 imprimir a++
    `)).toContainText(`1 2 3 1 2 3`)
})


test('Bucles-5 para to', async () => {
    expect(await exec(`
    para a=1 hasta 3 repetir {
        imprimir a
    }
    para a=1 hasta 3 imprimir a

    para a=1..3 repetir {
        imprimir a
    }
    
    para a=1..3 imprimir a
    
    para a=2+3 hasta 1+2
    imprimir a

    imprimir a

    declarar var b

    para b = 1 hasta 2
        imprimir b

    imprimir b
    `)).toContainText(`1 2 3 1 2 3 1 2 3 1 2 3 5 4 3 nulo 1 2 3`)
})


test('Bucles-6 para cada de', async () => {
    expect(await exec(`
    para cada a de [1, 2, 3] repetir {
        imprimir a
    }
    `)).toContainText(`1 2 3`)
    
    expect(await exec(`
    para a de [1, 2, 3] imprimir a
    `)).toContainText(`1 2 3`)
    
    expect(await exec(`
    para cada (a en [3, 2, 1]) imprimir a
    `)).toContainText(`3 2 1`)
    
    expect(await exec(`
    para (a en ['r', 'f', 33]) imprimir a
    `)).toContainText(`r f 33`)

})


test('Bucles-7 para modyfing iterator', async () => {
    expect(await exec(`
    para a=1 .. 3 repetir {
        imprimir a
    }
    
    para a=1 .. 6 repetir {
        imprimir a
        si a==2 a=5
    }
    `)).toContainText(`1 2 3 1 2 6`)

    expect(await exec(`
    a=1
    mientras a<6 {
        imprimir a
        a = a+2
    }
    `)).toContainText(`1 3 5`)

})


test('Bucles-8 para cada of', async () => {
    expect(await exec(`
    para cada (a of [1,2,3])
        imprimir a
    `)).toContainText(`1 2 3`)

    expect(await exec(`
    paracada (a of [1,2,3]) do
        imprimir a
    `)).toContainText(`1 2 3`)

    expect(await exec(`
    paracada (a of [1,2,3]) do
        imprimir ++a
    `)).toContainText(`2 3 4`)

    expect(await exec(`
    paracada (a of [1,2,3]) do
        imprimir a++
    `)).toContainText(`1 2 3`)
})


test('Bucles-9 para cada in', async () => {
    expect(await exec(`
    para cada (a en [7,8,9])
        imprimir a
    `)).toContainText(`7 8 9`)

    expect(await exec(`
    paracada a en [7,8,9] do
        imprimir a
    `)).toContainText(`7 8 9`)

    expect(await exec(`
    para (a en [1,2,3]) do
        imprimir ++a
    `)).toContainText(`2 3 4`)

    expect(await exec(`
    a = {} 
    a['z'] = 1
    a[3] = 99
    para x in a imprimir x
    para x of a imprimir x
    para x,i of a imprimir i, x
    `)).toContainText(`99 1 99 1 3 99 z 1`)
})

test('Bucles-10 negative values', async () => {
    expect(await exec(`
    a = 0 
    mientras a>-4 
    imprimir a--       

    b = 0 
    repetir 4 
    imprimir b--    
    `)).toContainText(`0 -1 -2 -3 0 -1 -2 -3`)

})

test('Bucles-11 paracada variants', async () => {
    expect(await exec(`
    para cada letra de 'jor' imprimir letra
    para cada (posicion =>  letra de 'jor') imprimir posicion, letra    
    para cada letra, posicion de 'jor' imprimir posicion, letra
    `)).toContainText(`j o r 0 j 1 o 2 r 0 j 1 o 2 r `)
})


test('Bucles-12-paracada', async () => {
    expect(await exec(`
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


test('Bucles-13 for clásico', async () => {
    expect(await exec(`
    for(var i=0;i<3;i++)
    imprimir i
    
    for(k=3;k>0;k--)
    imprimir k
    
    for(z=0;z<3;)
    imprimir z++
    `)).toContainText(`0 1 2 3 2 1 0 1 2`)
})


test('Bucles-14 contextos/inicialización', async () => {
    expect(await exec(`
    x=2
    for(;x<5;x++) 
    imprimir x

    imprimir x

    for(j=33;j>30;j--)
    imprimir j

    imprimir j

    for(var x=100;x<102;) {imprimir x++}

    imprimir x
    `)).toContainText(`2 3 4 5 33 32 31 nulo 100 101 5`)
})



test('Bucles-15 secuencias de exp', async () => {
    expect(await exec(`
    // secuencias de expresiones
    for(a=1,b=2;a<3,b<7;a--,b++)
    {
        imprimir "b=" + b++
        imprimir "a=" + a
    }
    `)).toContainText(`b=2 a=1 b=4 a=0 b=6 a=-1`)
})
