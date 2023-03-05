import { expect } from "chai";
import equalsIgnoringSpaces from "../chai-extensions.js";
import exec from "../lib/exec.js";

describe("Variables", () => {
  it("1", async () =>
    expect(
      await exec(`a=1
     imprimir a`)
    ).equalsIgnoringSpaces("1"));

  it("2", async () =>
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

  it("3", async () =>
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

  it("4 palabras reservadas", async () =>
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
});
