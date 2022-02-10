import exec from '../bin/exec.js'



test('Class constructor', () => {
    expect(exec(`
    clase Basica {
        atributos: contador

        metodos: 
        
        constructor() {
            contador = 2
        }
    }

    a = nueva Basica()
    imprimir a.contador
    `)).toContainText('2')
})


test('Class attributos.', () => {
    expect(exec(`
    class Saludo {

        atributos: nombre

        métodos: 

        constructor(nombre) {
            atributos.nombre = nombre
            imprimir "Creando saludo con", nombre
        }

        hola(nombre) {
            imprimir "¡Hola " + nombre + "!"
        }

        adios(nombre) {
            imprimir "¡Adiós " + atributos.nombre + "!"
        }
        
    }

    s=nuevo Saludo("María")
    s.nombre="Juan"
    s.adios("Jorge")
    `)).toContainText(`
    Creando saludo con María
    ¡Hola Jorge!
    ¡Adiós Juan!
   `)
})



test('Class constructor', () => {
    expect(exec(`

    contador = 1

    clase Figura {
        atributos: {id}

        metodos:

        constructor() {
            id = contador++
        }

        area () {
            ret 'No aplicable'
        }
    }

    clase Cuadrado extiende Figura {
        atributos: ancho alto

        métodos: {
            constructor(ancho, alto) {
                atributos.ancho = ancho
                atributos.alto = alto
            }

            area() {
                ret ancho*alto    
            }
        }
    }

    f = nueva Figura()
    c = nuevo Cuadrado(2, 3)

    imprimir "Figura ", f.id , " tiene area "+f.area()
    imprimir "Figura ", c.id , " tiene area "+c.area()



    `)).toContainText(`
    Figura  1  tiene area No aplicable
    Figura  2  tiene area 6
    `)
})