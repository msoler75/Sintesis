import exec from '../bin/exec.js'

test('Clases-1', () => {
    expect(exec(`
    clase Persona {

        atributos: {
          nombre
        }
      
        métodos: {
      
          constructor(nombre) {
            atributos.nombre = nombre
          }
      
        }
    }
    
    // creamos una nueva instancia
    p = nueva instancia de Persona("Jorge")
    imprimir p.nombre
    
    // modificación de atributo
    p.nombre="Juan"
    imprimir p.nombre
    
    // mostramos toda la instancia 
    imprimir p
    `)).toContainText(`
    Jorge
    Juan
    Persona (atributos: {nombre: Juan}, métodos: {constructor: (nombre)})
    `)
})


test('Clases-2', () => {
    expect(exec(`
    // clase sencilla sin atributos

    clase animal {

        método correr() { 
            imprimir "corriendo..."
        }

        método saltar() {
            retornar "saltando..."
        }                                                                                                           

    }

    a = nuevo animal()
    a.correr()
    imprimir a.saltar()

    // vemos la clase
    imprimir a
    imprimir a.atributos // no tiene atributos
    imprimir a.métodos

    `)).toContainText(`
    corriendo...
    saltando...
    animal (atributos: {}, métodos: {correr: (), saltar: (), constructor: ()})
    {}
    {correr: (), saltar: (), constructor: ()}`)
})


test('Clases-3 con atributos y constructor', () => {
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
    
    a = nueva instancia de clase Basica()
    imprimir a.contador
    imprimir a
    `)).toContainText(`2 Basica (atributos: {contador: 2}, métodos: {constructor: ()})`)
})



test('Clases-4 con constructor con parámetros', () => {
    expect(exec(`
    // un atributo y un constructor con parámetro para inicializar ese atributo

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
    imprimir p
    `)).toContainText(`Mi nombre es: Jorge Persona (atributos: {nombre: Jorge}, métodos: {constructor: (nombre), texto: ()})`)
})


test('Clases-5 con modificación de atributo y diferenciando parámetros de atributos', () => {
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
    imprimir s
    // modificamos atributo
    s.nombre="Juan"
    imprimir s
    s.hola("Jorge")
    s.adios("Jorge")
    imprimir s
    `)).toContainText(`
    Creando saludo con María
    Saludo (atributos: {nombre: María}, métodos: {constructor: (nombre), hola: (nombre), adios: (nombre)})
    Saludo (atributos: {nombre: Juan}, métodos: {constructor: (nombre), hola: (nombre), adios: (nombre)})
    ¡Hola Jorge!
    ¡Adiós Juan!
    Saludo (atributos: {nombre: Juan}, métodos: {constructor: (nombre), hola: (nombre), adios: (nombre)})
    `)
})


test('Clases-6 con herencia y constructor base que usa contador global', () => {
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


test('Clases-7 con herencia en construcción', () => {
    expect(exec(`
    clase Persona {
        nombre
        constructor (nombre) {
          nombre=atributos.nombre
        }
      }
      
      clase Cliente extiende Persona {
        dni
        constructor (nombre, dni) {
          padre(nombre)
          atributos.dni = dni
        }
      }
      p = nuevo Cliente ('Javier', 1234567)
      imp p
      `)).toContainText(`
      
      `)
})


test('Clases-8 constructor & instanceof', () => {
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



test('Clases-9 creación y uso dinámico', () => {
    expect(exec(`
    // clase sin atributos 

    clase p 
    {
        x() {
            imp 'funciona!' 
        } 
    }

    // creación de clase y llamado dinámico
    nuevo p().x()
    `)).toContainText(`funciona!`)
})
