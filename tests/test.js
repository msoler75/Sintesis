import antlr4 from 'antlr4';
const {
  CommonTokenStream,
  InputStream
} = antlr4;
import SintesisLexer from '../SintesisLexer.js';
import SintesisParser from '../SintesisParser.js';
import SintesisEval from '../SintesisEval.js';


var input2 = `
clase Persona {

  atributos: nombre, apellidos

  metodos: 

    constructor (nombre, apellidos) {
      setNombre (nombre)
      setApellidos(apellidos)
    }

    setNombre(nombre) {
      atributos.nombre=nombre
    }

    setApellidos(apellidos) {
      atributos.apellidos = apellidos
    }

    toString() {
      retorna 'Persona (nombre:'+nombre+', apellidos: '+apellidos+')'
    }
  

}

clase Cliente extiende Persona {
  atributos : {
    dni
  }

  metodos: {
    
    constructor (dni, nombre, apellidos) {
      padre(nombre, apellidos)
      setDNI(dni)
    }

    setDNI(dni) {
      atributos.dni = dni
    }

    toString() {
      retorna 'Cliente (dni: '+dni+', '+'nombre:'+nombre+', apellidos: '+apellidos+')'
    }
  }

}



clase Diccionario {

  atributos: {

    palabras
  
  }

  metodos: {

    constructor() {
      palabras = vector[]
    }

    obtener(clave) {
      return palabras[palabra] || null
    }

    establecer(clave, valor) {
      return palabras[clave] = valor
    }

    eliminar(clave) {
      eliminar palabras[clave]
    }

  }

}



a=nuevo Vector[][4]
a[1][3]=1 
print num(a)
eliminar a[3]
sumar([3])
a[4] = "amor"
a["pepe"] = "javier"
b=nuevo Diccionario()
b.establecer('123','Jorge')
print b.get('123')
print a
c = nuevo Cliente(123, 'Jorge', 'García')
si(c es Persona) 
{
  print c
}

`;

let inputx = `fun f(n){ if n<=1 return 1 else return n*f(n-1) } print f(3)`
let inputz = `fun s(a,b) { return a+b } print s(7, s(2, 3))`
let input = `
a=1
{
  var a=2
  b = vector [3]
  print a
  a=3
  print a
  print b
}
print a
`
var chars = new InputStream(input, true)
var lexer = new SintesisLexer(chars);
var tokens = new CommonTokenStream(lexer);
var parser = new SintesisParser(tokens);
var evaly = new SintesisEval();



parser.buildParseTrees = true;
const tree = parser.program(); // 'program' is the start rule
evaly.visitProgram(tree)
