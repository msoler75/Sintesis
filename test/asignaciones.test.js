import { expect } from "chai";
import equalsIgnoringSpaces from "../chai-extensions.js";
import exec from "../bin/exec.js";

describe("Asignaciones", () => {
  it("tipos simples", async () =>
    expect(
      await exec(`
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
    `)
    ).equalsIgnoringSpaces(`
    2
    2
    2.2
    2.2
    hola
    hola
    `));

  it("map", async () =>
    expect(
      await exec(`
    a={r:1}
    b=a
    imprimir b
    a.r=3
    imprimir b
    `)
    ).equalsIgnoringSpaces(`
    {r: 1}
    {r: 3}
    `));

  it("vector", async () =>
    expect(
      await exec(`
    a=[1,2]
    b=a
    imprimir b
    a[0]=33
    imprimir b
    `)
    ).equalsIgnoringSpaces(`
    [1, 2]
    [33, 2]
    `));

  it("clase", async () =>
    expect(
      await exec(`
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
    `)
    ).equalsIgnoringSpaces(`
    Usuario {nombre: Jorge}
    Usuario {nombre: Jaime}
    `));
});
