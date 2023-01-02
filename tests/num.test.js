import exec from '../bin/exec.js'

test('NumberOf-1', async () => {
    expect(await exec(`
    a = vector[3]
    b[2] = 'x'
    c[3] = 'y'
    c[7] = 7
    d = map()
    d[1] = 1
    d['h'] = 5
    imprimir num(a)
    imprimir num(b)
    imprimir num(c)
    imprimir num(d)
`)).toContainText(`3 3 8 2`)
})
