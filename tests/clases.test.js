import exec from '../bin/exec.js'

test('Class-1', () => {
    expect(exec(`
    class Saludo {

        atributos: nombre

        métodos: 

        hola(nombre) {
            imprimir "Hola " + nombre + "!"
        }

        adios(nombre) {
            imprimir "Adiós " + atributos.nombre + "!"
        }
        
    }

    s=nuevo Saludo()
    s.nombre="Juan"
    s.hola("Jorge")
    s.adios("Jorge")
    `)).toContainText(`
    Hola Jorge!
    Adiós Juan!
   `)
})
