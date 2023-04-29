import { expect } from "chai";
import equalsIgnoringSpaces from "../chai-extensions.js";
import exec from "../lib/exec.js";

describe("Métodos en Literales", async (t) => {
  it("array longitud", async () =>
    expect(
      await exec(`
   imprimir [1,2,4].longitud()
`)
    ).equalsIgnoringSpaces(`3`));

  it("array indiceDe", async () =>
    expect(
      await exec(`
   imprimir [1,2,3,4].indiceDe(3)
   imprimir [1,2,3,4].indiceDe(5)
   a=[7, 8, 9]
   imprimir a.indiceDe(8), a.indiceDe(10)
`)
    ).equalsIgnoringSpaces(`2 -1 1 -1`));

  it("array push", async () =>
    expect(
      await exec(`
   imprimir [1,2].push(3)
`)
    ).equalsIgnoringSpaces(`[1, 2, 3]`));

  it("array vaciar", async () =>
    expect(
      await exec(`
   imprimir [1,2].vaciar()
`)
    ).equalsIgnoringSpaces(`[]`));

  it("array deep", async () =>
    expect(
      await exec(`
   imprimir [1,[101,102,103].indiceDe(103)]
`)
    ).equalsIgnoringSpaces(`[1, 2]`));

  it("object index", async () =>
    expect(
      await exec(`
   imprimir {a:1, b:2}.a
   imprimir {c:3, d:4}.d
`)
    ).equalsIgnoringSpaces(`1 4`));

  it("object + array", async () =>
    expect(
      await exec(`
   imprimir {a:[1, 2, 3], b:4}.a
   imprimir {c:5, d:[6, 7], e:'hola'}.d[1]
   imprimir [1, {a:2, b:3}, 4][1].b
`)
    ).equalsIgnoringSpaces(`[1, 2, 3] 7 3`));

  it("string indiceDe", async () =>
    expect(
      await exec(`
   imprimir 'hola'.indiceDe('la')
`)
    ).equalsIgnoringSpaces(`2`));

  it("string split", async () =>
    expect(
      await exec(`
   imprimir 'hola mundo'.split(' ')
`)
    ).equalsIgnoringSpaces(`[hola, mundo]`));

  it("string case", async () =>
    expect(
      await exec(`
   imprimir 'hoLa MundO'.minusculas()
   imprimir 'hoLa MundO'.mayusculas()
`)
    ).equalsIgnoringSpaces(`hola mundo HOLA MUNDO`));
});
