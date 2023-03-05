import { expect } from "chai";
import equalsIgnoringSpaces from "../chai-extensions.js";
import exec from "../lib/exec.js";

describe("Diccionarios", () => {
  it("1", async () =>
    expect(
      await exec(`
    a={e:1}
    a['k'] = {x:2}
    imprimir a
    `)
    ).equalsIgnoringSpaces(`{e: 1, k: {x: 2}}`));

  it("2", async () =>
    expect(
      await exec(`
    b={i:1,j:[2,{m:[3,4]}]} 
    b['k']={n:6}
    b.x='Hola'
    imprimir b
    `)
    ).equalsIgnoringSpaces(`{i: 1, j: [2, {m: [3, 4]}], k: {n: 6}, x: Hola}`));

  it("3", async () =>
    expect(
      await exec(`
      // podemos acceder de varias formas al diccionario
      dic = { id: 1 }
      // con corchetes [ ]
      dic['id'] = 2
      imprimir dic ['id']
      // con punto
      dic.id = 3
      imprimir dic.id
      `)
    ).equalsIgnoringSpaces(`2 3`));

  it("4", async () =>
    expect(
      await exec(`
      dic = {}
      dic[1] = 2
      dic[6] = "hola"
      dic["6"] = "no más"
      imprimir dic
      `)
    ).equalsIgnoringSpaces(`{1: 2, 6: no más}`));

  it("5", async () =>
    expect(
      await exec(`
      desordenado = {f: 1}
      desordenado['a'] = 2
      desordenado['z'] = 3
      imprimir desordenado
      `)
    ).equalsIgnoringSpaces(`{f: 1, a: 2, z: 3}`));

    it("6", async () =>
    expect(
      await exec(`
      j = {a:1, b: 2, c: 3}
      para cada letra=>valor de j
      imprimir letra, valor
      
      para cada letra, valor de j
      imprimir letra, valor
      
      para cada valor de j imprimir valor
      
      `)
    ).equalsIgnoringSpaces(`a 1 b 2 c 3 a 1 b 2 c 3 1 2 3`));

    it("7", async () =>
    expect(
      await exec(`
      x = {a:[1,2,3], b: {c:[1,2,3], d: "hola"}}

      para cada clave, valor de x
      imprimir clave, valor
      `)
    ).equalsIgnoringSpaces(`a [1, 2, 3] b {c: [1, 2, 3], d: hola}`));


    it("8", async () =>
    expect(
      await exec(`
      dic = {}
      dic["hola qué tal"] = "muy bien, gracias"
      imprimir dic
      `)
    ).equalsIgnoringSpaces(`{hola qué tal: muy bien, gracias}`));


    it("9", async () =>
    expect(
      await exec(`
      dic1 = {a: 1, b: 2}
      dic2 = {c: 3, d: "hola"}
      dic3 = {b: 99}
      x = dic1 + dic2
      y = x + dic3
      imprimir x
      imprimir y
      `)
    ).equalsIgnoringSpaces(`{a: 1, b: 2, c: 3, d: hola} {a: 1, b: 99, c: 3, d: hola}`));


    it("10", async () =>
    expect(
      await exec(`
    dic = {a: 1, b: 2}
    imprimir "a" en dic
    imprimir "d" en dic
      `)
    ).equalsIgnoringSpaces(`cierto falso`));


    it("11", async () =>
    expect(
      await exec(`
      dic = {"clave con espacios": "valor"}
      imprimir dic
      `)
    ).equalsIgnoringSpaces(`{clave con espacios: valor}`));




    it("12 delete", async () =>
    expect(
      await exec(`
      dic = {a: 1, b: 2}
      del dic["a"]
      imprimir dic
      
      arr = [1, 2, 3]
      del arr[1]
      imprimir arr      
      `)
    ).equalsIgnoringSpaces(`{b: 2} [1, , 3]`));



  });
