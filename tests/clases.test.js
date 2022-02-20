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
    Persona {nombre: Juan}
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
    animal {}
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
    `)).toContainText(`2 Basica {contador: 2}`)
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
    `)).toContainText(`Mi nombre es: Jorge Persona {nombre: Jorge}`)
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
    imprimir s.metodos
    `)).toContainText(`
    Creando saludo con María
    Saludo {nombre: María}
    Saludo {nombre: Juan}
    ¡Hola Jorge!
    ¡Adiós Juan!
    Saludo {nombre: Juan}
    {constructor: (nombre), hola: (nombre), adios: (nombre)}
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
          atributos.nombre=nombre
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
      Cliente {dni: 1234567, nombre: Javier}
      `)
})


test('Clases-8 creación y uso dinámico', () => {
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


test('Clases-9', () => {
  expect(exec(`
  b = 1
  e = 2
  
  clase A {  //   [0]=>{b:2} [1]=>{b:3} [2]=>{b:4} [3]=>{b:7}
      b
      constructor(d)
      {
          b=d
      }
  }
  
  clase B extiende A {   // [0]=> {b:4, e:5}  [1]=>{b:7, e:8}
      e
      constructor(d, x) {
          padre(d)
          e = x
      }
  }
  
  z = nueva A(2)
  imp z
  y = nueva A(3)
  imp y
  k = nueva B(4, 5)
  imp k
  m = nueva B(7, 8)
  imp m
  m.b=1
  m.e=2
  imp k
  imp m
  imp b, e 
  `)).toContainText(`
  A {b: 2}
  A {b: 3}
  B {e: 5, b: 4}
  B {e: 8, b: 7}
  B {e: 5, b: 4}
  B {e: 2, b: 1}
  1 2
`)
})

test('Clases-10 creación de varias instancias', () => {
  expect(exec(`
  clase A {
    b
    constructor(d)
    {
      b=d
    }
  }
  
  k = nueva A(4)
  m = nueva A(7)
  imp k
  imp m
  `)).toContainText(`
  A {b: 4}
  A {b: 7}
  `)
})


test('Clases-11 constructor & instanceof', () => {
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
          retorna 'Persona (nombre#'+nombre+', apellidos#'+apellidos+')'
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
          retorna 'Cliente (dni -> '+dni+', '+'nombre -> '+nombre+', apellidos -> '+apellidos+')'
      }
      
      // además hereda los métodos del padre (clase Persona)
      // asignaNombre(nombre) ...
      // asignaApellidos(apellidos) ...
        
    }
        
        
        
    // persona
    
    p = nueva Persona ('Andrés', 'Pérez')
    imprimir p
    imprimir p.texto()
    
    imprimir "(antes) nombre: ", p.nombre, p.atributos.nombre
    imprimir "(antes) apellidos: ", p.apellidos, p.atributos.apellidos
    
    p.asignaNombre('Laura')
    p.asignaApellidos('Gutierrez')
    
    imprimir p.texto()
    
    imprimir "(después) nombre: ", p.nombre, p.atributos.nombre
    imprimir "(después) apellidos: ", p.apellidos, p.atributos.apellidos
    
    si(p es Persona) 
    print p.nombre, "es persona"
    
    si(p es Cliente) 
    print p.nombre, "es cliente"
    
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
    
    imprimir "nombre:", c.atributos.nombre, c.nombre
    imprimir "apellidos:", c.atributos.apellidos, c.apellidos
    imprimir "dni:", c.atributos.dni, c.dni
    
    c.nombre = "Paco"
    
    imprimir "(después del cambio de nombre) nombre:", c.nombre, c.atributos.nombre
    
    si(c es Persona) 
    print c.nombre, "es persona"
    
    si(c es Cliente) 
    print c.nombre, "es cliente"
    `)).toContainText(`
    Persona {nombre: Andrés, apellidos: Pérez}
    Persona (nombre#Andrés, apellidos#Pérez)
    (antes) nombre:  Andrés Andrés
    (antes) apellidos:  Pérez Pérez
    Persona (nombre#Laura, apellidos#Gutierrez)
    (después) nombre:  Laura Laura
    (después) apellidos:  Gutierrez Gutierrez
    Laura es persona
    Laura es cliente
    no existe
    Cliente (dni -> 777, nombre -> Jorge, apellidos -> García)
    Cliente (dni -> 1234567, nombre -> María, apellidos -> López)
    Cliente (dni -> 987654321, nombre -> Marcel, apellidos -> Soler)
    nombre: Marcel Marcel
    apellidos: Soler Soler
    dni: 987654321 987654321
    (después del cambio de nombre) nombre: Paco Paco
    Paco es persona
    Paco es cliente
    `)
})




test('Clases-12 métodos heredados', () => {
  expect(exec(`
  clase Animal {
    nombre
    
    constructor(nombre) {atributos.nombre = nombre}

    accion() { }
  }

  clase Perro extiende Animal {
      constructor(nombre) {
          super(nombre)
      }

      accion() {
          imp nombre, "ladra"
      }
  }

  clase Gato extiende Animal {
      constructor(nombre) {
          super(nombre)
      }

      accion() {
          imp nombre, "maúlla"
      }
  }

  anim = nuevo Animal("Pepito")
  perro = nuevo Perro("Bobby")
  gato = nuevo Gato("Fauna")

  anim.accion()
  perro.accion()
  gato.accion()
  `)).toContainText(`
  Bobby ladra
  Fauna maúlla
  `)
})



test('Clases-13 sobrecarga de constructores', () => {
  expect(exec(`
  class Persona
  {
      nombre, apellidos

      // constructor sobrecargado
      constructor() {}
      
      constructor(nombre) {
          atributos.nombre = nombre
      }  

      constructor(nombre, apellidos) {
          atributos.nombre = nombre
          atributos.apellidos = apellidos
      }
      
  }

  a = nueva Persona()
  b = nueva Persona("Jorge")
  c = nueva Persona("Juan", "García")

  imp a
  imp b
  imp c
  imp a.metodos
  `)).toContainText(`
  Persona {nombre: nulo, apellidos: nulo}
  Persona {nombre: Jorge, apellidos: nulo}
  Persona {nombre: Juan, apellidos: García}
  {constructor: (), constructor2: (nombre), constructor3: (nombre, apellidos)}
  `)
})
