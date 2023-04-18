import { expect } from "chai";
import equalsIgnoringSpaces from "../chai-extensions.js";
import exec from "../lib/exec.js";

describe("Funciones", async (t) => {
  it("1", async () =>
    expect(
      await exec(`
    funcion s() retornar 3
    imprimir s()
`)
    ).equalsIgnoringSpaces(`3`));

  it("2", async () =>
    expect(
      await exec(`
    fun s() {imprimir 1 return 5}
    fun m(a,b) ret a*b
    s()
    imprimir m(2,3)
    imprimir m(s(),2)    
`)
    ).equalsIgnoringSpaces(`1 6 1 10`));

  it("3", async () =>
    expect(
      await exec(`
    // factorial
    fun f(n) if n<=1 ret 1 else ret n*f(n-1)
    imprimir f(4)
    // suma
    fun s(a,b) ret a+b
    fun m(a,b) ret a*b
    imprimir s(7, m(2, 3))
`)
    ).equalsIgnoringSpaces(`24 13`));

  it("4", async () =>
    expect(
      await exec(`
    fun depende(x) ret x-10
    {
        fun depende(x) ret x+10
        imprimir depende(5)
    }
    imprimir depende(5)
    `)
    ).equalsIgnoringSpaces(`15 -5`));

  it("5", async () =>
    expect(
      await exec(`
    fun haceralgo(a) {
        fun suma_dos(a) {
            ret a+2
        }
        ret suma_dos(a)
    }
    imprimir haceralgo(3)
    `)
    ).equalsIgnoringSpaces(`5`));

  it("6", async () =>
    expect(
      await exec(`
    fun negativo (x) {
        si(x<0) ret cierto
        y si no return falso
    }
    
    fun positivo (x) {
        return x>=0
    }
    
    imprimir negativo(3)
    imprimir negativo(-2)
    imprimir negativo(0)
    
    imprimir positivo(3)
    imprimir positivo(-2)
    imprimir positivo(0)    
`)
    ).equalsIgnoringSpaces(`falso cierto falso cierto falso cierto`));

  it("7", async () =>
    expect(
      await exec(`
    // las variables deben conservar su valor local en las llamadas recursivas
    fun f(n) {
        n++
        if(n<3) f(n)
        imprimir n
    }
    f(0)
    imprimir n
    `)
    ).equalsIgnoringSpaces(`3 2 1 nulo`));

  it("8", async () =>
    expect(
      await exec(`
    // las variables deben conservar su valor local en las llamadas recursivas
    fun f(n) {
        n++
        {
            e=1
            if(n<3) f(n)
            e++
            imprimir e
        }
    }
    f(0)
    `)
    ).equalsIgnoringSpaces(`2 2 2`));

  it("9 return new instance", async () =>
    expect(
      await exec(`
    class A {
        b
        constructor(c) {
            b=c
        }
    }

    contador = 33

    fun crear() {
        retornar nuevo A(contador++)
    }

    z = crear()
    imprimir z
    imprimir crear()
    `)
    ).equalsIgnoringSpaces(`
    A {b: 33}
    A {b: 34}
    `));

  it("10 dec", async () =>
    expect(
      await exec(`
    a = función () {
        imprimir "e"
    }
    a()
    `)
    ).equalsIgnoringSpaces(`e`));

  it("11 arrow", async () =>
    expect(
      await exec(`
    a = () => {
        imprimir "e"
    }
    a()
    `)
    ).equalsIgnoringSpaces(`e`));

  it("12", async () =>
    expect(
      await exec(`
    function inc (a){
        return a+1
    }
    function dec(b) {
        return b-1
    }
    imprimir inc(dec(3))
    `)
    ).equalsIgnoringSpaces(`3`));

  it("13", async () =>
    expect(
      await exec(`
    función a(b) {
    // se pueden declarar funciones dentro de funciones
     función c(d) {
     retornar  "e"
    }
    retornar c(b)
    }
    imprimir a("f")
    `)
    ).equalsIgnoringSpaces(`e`));

  it("14", async () =>
    expect(
      await exec(`
    función área_circulo(radio){
        función pi() {
            devolver 3
        }
        devolver pi()*radio*radio; 
    }
    imprimir área_circulo(3)
    `)
    ).equalsIgnoringSpaces(`27`));

  it("15", async () =>
    expect(
      await exec(`
      función generarContraseña(x) {
        var caracteres = ["a", "b", "c", "d", "e", 1, 2, 3 ]
        var contraseña = ""
        var n = 0
        mientras (n < x) {
           contraseña  = contraseña + caracteres[n]
           n = n + 2  
        }
        devolver contraseña
      }
      imprimir generarContraseña(6)
      `)
    ).equalsIgnoringSpaces(`ace`));

  it("16 reserved words in parameters", async () =>
    expect(
      await exec(`
      // contar es una palabra reservada
      function doble(contar) {
        regresar contar * 2
      }
      
      imprimir contar([1,2])
      imprimir doble(3)
      `)
    ).equalsIgnoringSpaces(`2 6`));

});
