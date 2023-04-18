import { expect } from "chai";
import equalsIgnoringSpaces from "../chai-extensions.js";
import exec from "../lib/exec.js";

describe("NumberOf", () => {
  it("1", async () =>
    expect(
      await exec(`
    a = []
    b[2] = 'x'
    c[3] = 'y'
    c[7] = 7
    d = {}
    d[1] = 1.1
    d['h'] = 5
    imprimir contar(a)
    imprimir contar(b)
    imprimir contar(c)
    imprimir contar(d)
`)
    ).equalsIgnoringSpaces(`0 3 8 2`));
});
