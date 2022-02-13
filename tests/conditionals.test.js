import exec from '../bin/exec.js'

test('Conditionals-1', () => {
    expect(exec(`
    si ( falso ) {
        imprimir "es cierto"
    }
    y si no {
        imprimir "es falso"
    }
    `)).toContainText(`es falso`)
})


test('Conditionals-2', () => {
    expect(exec(`
    a=2
    si (a==1) imp "es 2"
    si a==2 imp "es 2"
    si a==3 imp "es 3"
    `)).toContainText(`es 2`)
})

test('Conditionals-3', () => {
    expect(exec(`
    a = 1
    mientras a < 7 repetir {
        
        si a == 1 { imprimir "1" }
        osi a == 2 imprimir "2"
        o si a == 3 imprimir "3"
        osi (a == 4) imprimir "4"
        o imprimir ">4"
    
        a++
    }
    `)).toContainText(`1 2 3 4 >4 >4`)
})

