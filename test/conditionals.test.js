import { expect } from "chai";
import equalsIgnoringSpaces from "../chai-extensions.js";
import exec from "../bin/exec.js";

describe("Condicionales", () => {
  it("1", async () =>
    expect(
      await exec(`
    si ( falso ) {
        imprimir "es cierto"
    }
    y si no {
        imprimir "es falso"
    }
    `)
    ).equalsIgnoringSpaces(`es falso`));

  it("2", async () =>
    expect(
      await exec(`
    a=2
    si (a==1) imprimir "es 1"
    si a==2 imprimir "es 2"
    si a==3 imprimir "es 3"
    `)
    ).equalsIgnoringSpaces(`es 2`));

  it("3", async () =>
    expect(
      await exec(`
    a = 1
    mientras a < 7 repetir {
        
        si a == 1 { imprimir "1" }
        osi a == 2 imprimir "2"
        o si a == 3 imprimir "3"
        osi (a == 4) imprimir "4"
        y si no imprimir ">4"
    
        a++
    }
    `)
    ).equalsIgnoringSpaces(`1 2 3 4 >4 >4`));
});
