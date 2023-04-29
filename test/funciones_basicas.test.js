import { expect } from "chai";
import equalsIgnoringSpaces from "../chai-extensions.js";
import exec from "../lib/exec.js";
import assert from "assert";

describe("Funciones básicas", () => {
  it("contar, longitud", async () =>
    expect(
      await exec(`
      imprimir longitud("hola")
      imprimir contar([1, 2, 3])
    `)
    ).equalsIgnoringSpaces(`4 3`));

  it("convertir", async () =>
    expect(
      await exec(`
      imprimir convertir(2, "texto")       
      imprimir convertir("2.5", "entero")  
      imprimir convertir("2.5", "decimal") 
    `)
    ).equalsIgnoringSpaces(`2 2 2.5`));

  it("Math", async () =>
    expect(
      await exec(`        
        imprimir Mates.max(1, 2, 3, 4, 5)
        imprimir Mates.min(1, 2, 3, 4, 5)
        imprimir Mates.round(6.7)
        imprimir Mates.floor(6.7)
        imprimir Mates.ceil(6.7)
    `)
    ).equalsIgnoringSpaces(`5 1 7 6 7`));

  it("ord chr", async () =>
    expect(
      await exec(`
            imprimir ord("a")
            imprimir chr(97)
          `)
    ).equalsIgnoringSpaces(`97 a`));

  it("aleatorio 1", async () => {
    const result = parseFloat(
      await exec(`        
              imprimir aleatorio()
          `)
    );
    assert.ok(
      result >= 0 && result < 1,
      `Result ${result} is not within the expected range`
    );
  });

  it("aleatorio 2", async () => {
    const result = parseInt(
      await exec(`        
              imprimir aleatorio(7)
          `)
    );
    assert.ok(
      result >= 0 && result < 7,
      `Result ${result} is not within the expected range`
    );
  });

  it("aleatorio 3", async () => {
    const result = parseInt(
      await exec(`        
              imprimir aleatorio(3,7)
          `)
    );
    assert.ok(
      result >= 3 && result < 7,
      `Result ${result} is not within the expected range`
    );
  });
});
