import { variableCreate}  from "../src/internals/Factory.js"
import { expect } from "chai";
import equalsIgnoringSpaces from "../chai-extensions.js";
import exec from "../lib/exec.js";

describe("Variables", () => {
  it("asignación simple", async () =>
    expect(
      await exec(`a=1
     imprimir a`)
    ).equalsIgnoringSpaces("1"));

  it("contextos", async () =>
    expect(
      await exec(`
    // asigna un valor a una variable, y como no existe, la crea
    a = 1

    // imprime el valor de a
    imprimir a

    // creamos un contexto 
    {
        a = 2
        imprimir a
    }

    imprimir a

    // nuevo contexto  
    { 
        // declaración de la variable a en este contexto
        var a = 3
        
        // lo imprimimos
        imprimir a

        // cuando termina este contexto, la variable a de este contexto desaparece
    }

    imprimir a
`)
    ).equalsIgnoringSpaces("1 2 2 3 2"));

  it("contextos 2", async () =>
    expect(
      await exec(`
    a = 3
    {
        var a = [1,2,3]
        imprimir a
    }
    imprimir a
`)
    ).equalsIgnoringSpaces("[1, 2, 3] 3"));

  it("palabras reservadas", async () =>
    expect(
      await exec(`
        var a = 1
        del = 2
        en = 3
        es = 4
        di = 5
        imprimir en, del, es, di 
        
        {
            var del = 2
            var en = 3
            var es = 4
            var di = 5  
            imprimir en, del, es, di 
        }
      `)
    ).equalsIgnoringSpaces("3 2 4 5 3 2 4 5"));

    const n1 = variableCreate(1)
    const n2 = variableCreate(1)
    const n3 = variableCreate(2)
    it("igualdad numérica", async () =>
    expect(n1.equals(n2)).equalsIgnoringSpaces("true"))

    it("desigualdad numérica", async () =>
    expect(n1.equals(n3)).equalsIgnoringSpaces("false"))


    const s1 = variableCreate("hola")
    const s2 = variableCreate("hola")
    const s3 = variableCreate("adios")

    it("igualdad strings", async () =>
    expect(s1.equals(s2)).equalsIgnoringSpaces("true"))

    it("desigualdad strings", async () =>
    expect(s1.equals(s3)).equalsIgnoringSpaces("false"))

    const l1 = variableCreate([1, 2, 3])
    const l2 = variableCreate([1, 2, 3])
    const l3 = variableCreate([4, 5, 6])

    it("deigualdad de listas con los mismos valores", async () =>
    expect(l1.equals(l2)).equalsIgnoringSpaces("false"))

    it("desigualdad listas que son diferentes objetos", async () =>
    expect(l1.equals(l3)).equalsIgnoringSpaces("false"))

    const o1 = variableCreate({a:1})
    const o2 = variableCreate({a:1})
    const o3 = variableCreate({b:1})

    it("deigualdad de diccionarios con los mismos valores", async () =>
    expect(o1.equals(o2)).equalsIgnoringSpaces("false"))

    it("desigualdad diccionarios que son diferentes objetos", async () =>
    expect(o1.equals(o3)).equalsIgnoringSpaces("false"))
});
