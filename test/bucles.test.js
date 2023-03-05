import { expect } from 'chai';
import equalsIgnoringSpaces from '../chai-extensions.js';
import exec from "../lib/exec.js";

describe("Bucles", () => {
  it("1. repeat", async () =>
    expect(
      await exec(`
    a=1
    repetir 3 {
        imprimir a
        a=a+1
    }    
    a=1 ; repetir 3 
    imprimir a++
    `)
    ).equalsIgnoringSpaces(`1 2 3 1 2 3`));


    it("2. repeat with var", async () =>
    expect(
      await exec(`
    s=0
    a=2
    repetir a {
      s = s + 2
    }    
    imprimir s
    `)
    ).equalsIgnoringSpaces(`4`));

  it("3. repeat while", async () =>
    expect(
      await exec(`
    a=1
    repetir {
        imprimir a
        a=a+1
    } mientras a<4
    a=1 ; repetir imprimir a++ mientras a<4
    `)
    ).equalsIgnoringSpaces(`1 2 3 1 2 3`));

it("4. pre and post", async () =>
    expect(
      await exec(`
    a = 1
    mientras (a < 3)  {
        imprimir a++
    }

    b = 1
    mientras (b < 3)  {
        imprimir ++b
    }
    `)
    ).equalsIgnoringSpaces(`1 2 2 3`));

    it("5. while repeat", async () =>
    expect(
      await exec(`
    a=1
    mientras a<4 repetir {
        imprimir a
        a=a+1
    }    
    a=1 ; mientras a<4 imprimir a++
    `)
    ).equalsIgnoringSpaces(`1 2 3 1 2 3`));

    it("6. para to", async () =>
    expect(
      await exec(`
    para a=1 hasta 3 repetir {
        imprimir a
    }
    para a=1 hasta 3 imprimir a

    para a=1..3 repetir {
        imprimir a
    }
    
    para a=1..3 imprimir a
    
    para a=2+3 hasta 1+2
    imprimir a

    imprimir a

    declarar var b

    para b = 1 hasta 2
        imprimir b

    imprimir b
    `)
    ).equalsIgnoringSpaces(`1 2 3 1 2 3 1 2 3 1 2 3 5 4 3 nulo 1 2 3`));

    it("7. para cada de", async () =>
    expect(
      await exec(`
    para cada a de [1, 2, 3] repetir {
        imprimir a
    }
    `)
    ).equalsIgnoringSpaces(`1 2 3`));

  it("8. para a de", async () =>
    expect(
      await exec(`
    para a de [1, 2, 3] imprimir a
    `)
    ).equalsIgnoringSpaces(`1 2 3`));

  it("9. para cada a en", async () =>
    expect(
      await exec(`
    para cada (a en [3, 2, 1]) imprimir a
    `)
    ).equalsIgnoringSpaces(`3 2 1`));

  it("10. para a en []", async () =>
    expect(
      await exec(`
    para (a en ['r', 'f', 33]) imprimir a
    `)
    ).equalsIgnoringSpaces(`r f 33`));


  it("11. para modificando iterator", async () =>
    expect(
      await exec(`
    para a=1 .. 3 repetir {
        imprimir a
    }
    
    para a=1 .. 6 repetir {
        imprimir a
        si a==2 a=5
    }
    `)
    ).equalsIgnoringSpaces(`1 2 3 1 2 6`));

  it("12. para modificando iterator 2", async () =>
    expect(
      await exec(`
    a=1
    mientras a<6 {
        imprimir a
        a = a+2
    }
    `)
    ).equalsIgnoringSpaces(`1 3 5`));

    it("13. para cada of", async () =>
    expect(
      await exec(`
    para cada (a of [1,2,3])
        imprimir a
    `)
    ).equalsIgnoringSpaces(`1 2 3`));

  it("14. paracada of", async () =>
    expect(
      await exec(`
    paracada (a of [1,2,3]) do
        imprimir a
    `)
    ).equalsIgnoringSpaces(`1 2 3`));

  it("15. paracada ++()", async () =>
    expect(
      await exec(`
    paracada (a of [1,2,3]) do
        imprimir ++a
    `)
    ).equalsIgnoringSpaces(`2 3 4`));

  it("16. paracada ()++", async () =>
    expect(
      await exec(`
    paracada (a of [1,2,3]) do
        imprimir a++
    `)
    ).equalsIgnoringSpaces(`1 2 3`));

    it("para cada in", async () =>
    expect(
      await exec(`
    para cada (a en [7,8,9])
        imprimir a
    `)
    ).equalsIgnoringSpaces(`7 8 9`));

  it("17. paracada in", async () =>
    expect(
      await exec(`
    paracada a en [7,8,9] do
        imprimir a
    `)
    ).equalsIgnoringSpaces(`7 8 9`));

  it("18. para a", async () =>
    expect(
      await exec(`
    para (a en [1,2,3]) do
        imprimir ++a
    `)
    ).equalsIgnoringSpaces(`2 3 4`));

  it("19. para x (varios)", async () =>
    expect(
      await exec(`
    a = {} 
    a['z'] = 1
    a[3] = 99
    para x in a imprimir x
    para x of a imprimir x
    para i,x of a imprimir i, x
    `)
    ).equalsIgnoringSpaces(`99 1 99 1 3 99 z 1`));

  it("20. valores negativos", async () =>
    expect(
      await exec(`
    a = 0 
    mientras a>-4 
    imprimir a--       

    b = 0 
    repetir 4 
    imprimir b--    
    `)
    ).equalsIgnoringSpaces(`0 -1 -2 -3 0 -1 -2 -3`));

    it("21. paracada variantes", async () =>
    expect(
      await exec(`
    para cada letra de 'jor' imprimir letra
    para cada (posicion =>  letra de 'jor') imprimir posicion, letra    
    para cada posicion, letra de 'jor' imprimir posicion, letra
    `)
    ).equalsIgnoringSpaces(`j o r 0 j 1 o 2 r 0 j 1 o 2 r `));

    it("22. paracada dictionary", async () =>
    expect(
      await exec(`
    lugares['casa'] = 11
    lugares['pub'] = 22
    lugares['local'] = 33

    imprimir lugares

    imprimir 'tipos de habitaculos:'
    para cada (indice, codigo en lugares) imprimir '- '+indice

    imprimir 'codigos de habitaculos:'
    para cada (codigo de lugares) imprimir '- '+codigo
    `)
    ).equalsIgnoringSpaces(`
    {casa: 11, pub: 22, local: 33}

    tipos de habitaculos:
    - casa
    - pub
    - local
    
    codigos de habitaculos:
    - 11
    - 22
    - 33
    `));

  it("23. classic for", async () =>
    expect(
      await exec(`
    for(var i=0;i<3;i++)
    imprimir i
    
    for(k=3;k>0;k--)
    imprimir k
    
    for(z=0;z<3;)
    imprimir z++
    `)
    ).equalsIgnoringSpaces(`0 1 2 3 2 1 0 1 2`));

  it("24. contextos/inicialización", async () =>
    expect(
      await exec(`
    x=2
    for(;x<5;x++) 
    imprimir x

    imprimir x

    for(j=33;j>30;j--)
    imprimir j

    imprimir j

    for(var x=100;x<102;) {imprimir x++}

    imprimir x
    `)
    ).equalsIgnoringSpaces(`2 3 4 5 33 32 31 nulo 100 101 5`));

  it("25. secuencias de exp", async () =>
    expect(
      await exec(`
    // secuencias de expresiones
    for(a=1,b=2;a<3,b<7;a--,b++)
    {
        imprimir "b=" + b++
        imprimir "a=" + a
    }
    `)
    ).equalsIgnoringSpaces(`b=2 a=1 b=4 a=0 b=6 a=-1`));


  })
