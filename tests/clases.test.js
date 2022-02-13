import exec from '../bin/exec.js'



test('Class constructor', () => {
    expect(exec(`
    clase animal {

        métodos:
    
        método correr() { 
            imprimir "corriendo..."
        }
    
        método saltar() {
            imprimir "saltando..."
        }
    
    }
    
    a = nuevo animal()
    a.correr()
    a.saltar()
    imprimir a
    imprimir a.atributos
    `)).toContainText('corriendo... saltando... animal (atributos: {}, métodos: {correr: (), saltar: (), constructor: ()})')
})


test('Class attributos.', () => {
    expect(exec(`
    clase Basica {
        atributos: { contador }
    
        metodos: 
        {
            método constructor() {
                contador = 2
            }
        }
    }
    
    a = nueva Basica()
    imprimir a.contador
    `)).toContainText(`2`)
})



test('Class constructor', () => {
    expect(exec(`
    clase Persona {
        atributos: nombre
    
        metodos: 
    
        función constructor(nombre) {
            atributos.nombre = nombre
        }
    
        función texto() {
            retornar "Mi nombre es: " + nombre 
        }
        
    }
    
    
    p = nueva Persona("Jorge")
    imprimir p.texto()
    `)).toContainText(`Mi nombre es: Jorge`)
})


test('Class constructor', () => {
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
    s.hola("Jorge")
    s.adios("Jorge")
    `)).toContainText(`
    ¡Hola Jorge!
    ¡Adiós Juan!`)
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

        dameId() { 
            return id
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

    imprimir "Figura ", f.dameId() , " tiene area " + f.area()
    imprimir "Figura ", c.dameId() , " tiene area " + c.area()
    `)).toContainText(`
    Figura  1  tiene area No aplicable
    Figura  2  tiene area 6`)
})


test('Class constructor', () => {
    expect(exec(`
    clase Persona {

        nombre, apellidos
      
        constructor (nombre, apellidos) {
          asignaNombre (nombre)
          asignaApellidos(apellidos)
        }
      
        asignaNombre(nombre) {
          atributos.nombre=nombre
        }
      
        asignaApellidos(apellidos) {
          atributos.apellidos = apellidos
        }
      
        texto() {
          retorna 'Persona (nombre:'+nombre+', apellidos: '+apellidos+')'
        }  
      }
      
      
      
      clase Cliente extiende Persona {
      
        dni
        // además hereda los atributos del padre
        // nombre
        // apellidos
      
      
        constructor (dni, nombre, apellidos) {
          padre(nombre, apellidos)
          asignaDNI(dni)
        }
      
        asignaDNI(dni) {
          atributos.dni = dni
        }
      
        texto() {
          retorna 'Cliente (dni: '+dni+', '+'nombre:'+nombre+', apellidos: '+apellidos+')'
        }
      
        // además hereda los métodos del padre (clase Persona)
        // asignaNombre(nombre) ...
        // asignaApellidos(apellidos) ...
        }
      }
      
      
      
      // persona
      
      p = nueva Persona ('Andrés', 'Pérez')
      imprimir p.texto()
      
      p.asignaNombre('Laura')
      p.asignaApellidos('Gutierrez')
      
      imprimir p.texto()
      
      imprimir p.atributos.nombre
      imprimir p.atributos.apellidos
      
      imprimir p.nombre
      imprimir p.apellidos
      
      si(p es Persona) 
        print "es persona"
      
      si(p es Cliente) 
        print "es cliente"
      
      si(p es NoExiste) 
        print "no existe"
      
      // cliente
      
      c = nuevo Cliente(777, 'Jorge', 'García')
      imprimir c.texto()
      
      c.asignaDNI(1234567)
      c.asignaNombre('María')
      c.asignaApellidos('López')
      
      imprimir c.texto()
      
      c.metodos.asignaNombre('Marcel')
      c.metodos.asignaApellidos('Soler')
      c.metodos.asignaDNI('987654321')
      
      imprimir c.texto()
      
      imprimir c.atributos.nombre
      imprimir c.atributos.apellidos
      imprimir c.atributos.DNI
      
      imprimir c.nombre
      imprimir c.apellidos
      imprimir c.DNI
      
      si(c es Persona) 
        print "es persona"
      
      si(c es Cliente) 
        print "es cliente"
    `)).toContainText(`xxx`)
})
