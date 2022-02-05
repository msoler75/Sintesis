import exec from '../bin/exec.js'

test('Bucles-1 repeat', () => {
    expect(exec(`
    a=1
    b=2
    c=3
    imprimir a+b
    imprimir a-b
    imprimir b*c
    imprimir c/b
    imprimir a+b*c
    imprimir (a+b)*c
    imprimir a*(b+c)
    imprimir (a*(b+c))+4
    imprimir c**2
    imprimir (a+b)**3
    imprimir 11%3
    imprimir (((12%7)**2)-1)/(4+(4%4))
    `)).toContainText(`
    3
    -1
    6
    1.5
    7
    9
    5
    9
    9
    27
    2
    6`)
})
