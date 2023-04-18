import { expect } from "chai";
import equalsIgnoringSpaces from "../chai-extensions.js";
import exec from "../lib/exec.js";

describe("Map", () => {
  it("1", async () =>
    expect(
      await exec(`
    usuarios = {}
    usuarios[12] = 'jorge'
    usuarios[24] = 'jaime'

    imprimir usuarios
    imprimir count(usuarios)
    `)
    ).equalsIgnoringSpaces(`{12: jorge, 24: jaime} 2`));

  it("2", async () =>
    expect(
      await exec(`
    a = {}
    a['jorge'] = {}
    a['jorge']['manuel'] = 123
    imprimir a
    `)
    ).equalsIgnoringSpaces(`{jorge: {manuel: 123}}`));

  it("3", async () =>
    expect(
      await exec(`
    a = {}
    a['jorge'] = 33
    a['jaime'] = 77
    imprimir indiceDe(a, 77), indiceDe(a, 99)
    `)
    ).equalsIgnoringSpaces(`jaime nulo`));
});
