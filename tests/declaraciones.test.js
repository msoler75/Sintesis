import exec from '../bin/exec.js'

test('declaraciones-1 variables', async () => {
    expect(await exec(`
    a = 1
    declarar b = 2
     var c = 3
     var d = 4
     var e, f = 5, g=6
     declarar h, i = 7
     declarar var j = 8
     declarar var k = 9, l, m=10
    imprimir a, b, c, d, e, f, g, h, i, j, k, l, m
    `)).toContainText(`1 2 3 4 nulo 5 6 nulo 7 8 9 nulo 10`)
})



test('declaraciones-2 función', async () => {
    expect(await exec(`
    declarar función hola() {
        imprimir "hola"
    }
    hola()
    
    declarar función adiós() {
        imprimir "adiós"
    }
    adiós()
    `)).toContainText(`hola adiós`)
})

test('declaraciones-3 clase', async () => {
    expect(await exec(`
    declarar clase bye {
        método tellme() {
            imprimir "adios"
        }
    }
    
    nt = nuevo bye()
    nt.tellme()
    `)).toContainText(`adios`)
})

