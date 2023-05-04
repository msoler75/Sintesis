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



    it("invertir", async () =>
    expect(
      await exec(`
      a = "hola"
      b = [1,2,3]
      imprimir a.invertir()
      imprimir b.invertir()
    `)
    ).equalsIgnoringSpaces(`aloh [3, 2, 1]`));




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
        imprimir Mates.redondear(6.7)
        imprimir Mates.suelo(6.7)
        imprimir Mates.techo(6.7)
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
              imprimir aleatorio(3)
          `)
    );
    assert.ok(
      result >= 1 && result <= 3,
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
      result >= 3 && result <= 7,
      `Result ${result} is not within the expected range`
    );
  });


  it("encandenadas invertir", async () => 
  expect(
    await exec(`   
    palabras = ["hola", "mundo"]
    imprimir palabras.invertir().join(" ")
    imprimir palabras.join(" ")
  `)
  ).equalsIgnoringSpaces(`mundo hola hola mundo`));



  it("encandenadas invertir2", async () => 
    expect(
      await exec(`   
      función encriptar2(mensaje){
      palabras = mensaje.dividir(“ ”)
      para cada indice,palabra de palabras {
      si indice % 2 == 0 
      palabras[ indice] = palabra.mayusculas()
      o si no
      palabras[indice] =  palabra.minusculas()}
      retornar  palabras.invertir().unir(' ')}
      imprimir encriptar2("el pájaro está en la jaula")
          `)
    ).equalsIgnoringSpaces(`5 1 7 6 7`));
 
});
