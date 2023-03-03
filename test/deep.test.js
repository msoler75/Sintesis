import { expect } from "chai";
import equalsIgnoringSpaces from "../chai-extensions.js";
import exec from "../bin/exec.js";

describe("Deep objects", () => {
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
});
