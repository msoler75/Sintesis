import { expect } from "chai";
import equalsIgnoringSpaces from "../chai-extensions.js";
import exec from "../lib/exec.js";

describe("Acentos", () => {
  it("1", async () =>
    expect(
      await exec(
        `
        á=1
        imprimir "áéíóú" + á
        `
      )
    ).equalsIgnoringSpaces(`áéíóú1`));

  it("2", async () =>
    expect(
      await exec(
        `
        códigos=[1,2,3]
        para cada(código en códigos) imprimir código
        `
      )
    ).equalsIgnoringSpaces(`1 2 3`));

  it("3", async () =>
    expect(
      await exec(
        `
        función ímpetu(único) { imprimir único+"!"}
        ímpetu("adelante")
        `
      )
    ).equalsIgnoringSpaces(`adelante!`));

  it("4", async () =>
    expect(
      await exec(
        `
        clase ámbito { 
            único 
            
            métodos: 
            constructor(ámbito){
                atributos.único=ámbito
            } 
            únicamente(índole) {
                imprimir índole,único
            }
        }
        nuevo ámbito(1).únicamente(2)
        `
      )
    ).equalsIgnoringSpaces(`2 1`));
});
