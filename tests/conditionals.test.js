import exec from '../bin/exec.js'

test('Conditionals-1', () => {
    expect(exec(`
si ( cierto ) {
    imprimir "es cierto"
}
y   si no {
    imprimir "es falso"
}

a = 1
mientras a < 6 repetir {
    si a == 1 imprimir "1"
    o si a == 2 imprimir "2"
    o si a == 3 imprimir "3"
    o si a == 4 imprimir "4"
    o imprimir "otros"
    a++
}
`)).toContainText(`es cierto 1 2 3 4 otros`)
})
