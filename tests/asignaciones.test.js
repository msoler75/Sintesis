import exec from '../bin/exec.js'

test('Asignaciones-tipos-simples', () => {
    expect(exec(`
    a = 1
    b = 2
    imprimir b
    a = 3
    imprimir b
    
    a = 1.1
    b = 2.2
    imprimir b
    a = 3.3
    imprimir b
    
    a="hola"
    b=a
    imprimir b
    a="adios"
    imprimir b
    `)).toContainText(`
    2
    2
    2.2
    2.2
    hola
    hola
    `)
})



test('Asignaciones-map', () => {
    expect(exec(`
    a={r:1}
    b=a
    imprimir b
    a.r=3
    imprimir b
    `)).toContainText(`
    {r: 1}
    {r: 3}
    `)
})


test('Asignaciones-vector', () => {
    expect(exec(`
    a=[1,2]
    b=a
    imprimir b
    a[0]=33
    imprimir b
    `)).toContainText(`
    [1, 2]
    [33, 2]
    `)
})


test('Asignaciones-clase', () => {
    expect(exec(`
    clase Usuario {
        atributos: nombre

        metodos: constructor(nombre) {
            atributos.nombre = nombre
        }
    }
    a=nuevo Usuario('Jorge')
    b=a
    imprimir b
    a.nombre = 'Jaime'
    imprimir b
    `)).toContainText(`
    Usuario (nombre: Jorge)
    Usuario (nombre: Jaime)
    `)
})
