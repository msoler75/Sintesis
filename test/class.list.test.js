import List from "../src/internals/List.js";
import Dictionary from "../src/internals/Dictionary.js";
import Single from "../src/internals/Single.js";
import {} from "../src/internals/Factory.js";

import { expect } from "chai";
import equalsIgnoringSpaces from "../chai-extensions.js";
import exec from "../lib/exec.js";

describe("Lists", () => {
  let v1 = new List([10, 20]);
  it("basics 1", async () =>
    expect(v1.toString()).equalsIgnoringSpaces("[10, 20]"));

  it("basics 2", async () =>
    expect(v1.getMemberRef(0).toString()).equalsIgnoringSpaces("10"));

  it("basics 3", async () =>
    expect(v1.getMemberRef(1).toString()).equalsIgnoringSpaces("20"));

  let v2 = new List([10, 20]);
  v2.setVariable(4, new List([50, 60]));

  it("basics 4", async () =>
    expect(v2.toString()).equalsIgnoringSpaces("[10, 20, , , [50, 60]]"));

  it("basics 5", async () =>
    expect(v2.getMemberRef(4).getMemberRef(1).toString()).equalsIgnoringSpaces(
      "60"
    ));

  let v3 = new List([10, 20]);
  let m = new Dictionary({ j: 1, p: 2 });
  v3.setVariable(3, m);
  it("basics 6", async () =>
    expect(v3.toString()).equalsIgnoringSpaces("[10, 20, , {j: 1, p: 2}]"));

  let v3b = new List([10, 20]);
  v3b.setVariable(3, m);
  v3b.setValue(5, 55);
  it("basics 7", async () =>
    expect(v3b.toString()).equalsIgnoringSpaces(
      "[10, 20, , {j: 1, p: 2}, , 55]"
    ));

  var v4 = new List([10, 20, 30, 40, 50, 60, 70]);
  v4.delete(4);
  v4.delete(2);
  it("delete 1", async () =>
    expect(v4.toString()).equalsIgnoringSpaces("[10, 20, 40, 60, 70]"));

  var v4b = new List([10, 20, 30, 40, 50, 60, 70]);
  v4b.delete(4);
  v4b.delete(2);
  v4b.delete(3);
  it("delete 2", async () =>
    expect(v4b.toString()).equalsIgnoringSpaces("[10, 20, 40, 70 ]"));

  let v5 = new List([10, 20, 30]);
  v5.insertValue(-1);
  it("insert number", async () =>
    expect(v5.toString()).equalsIgnoringSpaces("[-1, 10, 20, 30]"));

  let v5b = new List([10, 20, 30]);
  v5b.insertValue(-1);
  v5b.appendValue(99);
  it("append number", async () =>
    expect(v5b.toString()).equalsIgnoringSpaces("[-1, 10, 20, 30, 99]"));

  let v5c = new List([10, 20, 30]);
  v5c.insertValue(-1);
  v5c.appendValue(99);
  v5c.insertValue(new Single(-2));
  it("insert Single", async () =>
    expect(v5c.toString()).equalsIgnoringSpaces("[-2, -1, 10, 20, 30, 99]"));

  let v5d = new List([10, 20, 30]);
  v5d.insertValue(-1);
  v5d.appendValue(99);
  v5d.insertValue(new Single(-2));
  v5d.appendVariable(new Single(101));
  v5d.insertVariable(new List([5, 6]));
  v5d.insertValue({ h: 3, k: 7 });
  v5d.appendValue({ z: 8, x: 2 });
  v5d.insertVariable(new Dictionary({ m: 8 }));
  v5d.appendVariable(new Dictionary({ y: "a" }));
  it("append Dictionary", async () =>
    expect(v5d.toString()).equalsIgnoringSpaces(
      "[{m: 8}, {h:3, k:7}, [5, 6], -2, -1, 10, 20, 30, 99, 101, {z:8, x: 2}, {y: a}]"
    ));

  let v6 = new List([10, 20]);
  let m2 = new Dictionary({
    j: 1,
    p: 2,
  });
  v6.setVariable(3, m2);
  m2.setValue("k", 77);
  it("list with dictionary 1", async () =>
    expect(v6.toString()).equalsIgnoringSpaces(
      "[10, 20, , {j: 1, p: 2, k: 77}]"
    ));
  it("list with dictionary 2", async () =>
    expect(v6.getMemberRef(3).getMemberRef("p").toString()).equalsIgnoringSpaces("2"));

  let v7 = new List([10, 20]);
  let m3 = new Dictionary({
    j: 1,
    p: 2,
  });
  v7.setVariable(3, m3);
  m3.setValue("k", 77);
  m3.delete("j");
  it("after delete key", async () =>
    expect(v7.getMemberRef(3).toString()).equalsIgnoringSpaces("{p: 2, k: 77}"));

  let v8 = new List([10, 20]);
  let mx = new Dictionary({
    j: 1,
    p: 2,
  });
  v8.setVariable(3, mx);
  let x = new Single(55);
  mx.setVariable("fifty", x);
  it("inserted key/value", async () =>
    expect(v8.getMemberRef(3).toString()).equalsIgnoringSpaces(
      "{j: 1, p: 2, fifty: 55}"
    ));

  let m4 = new Dictionary();
  m4.setValue("j", 1);
  m4.setVariable("k", new Single(2));

  let n = new Dictionary({ i: 3 });
  m4.setVariable("dicc", n);
  n.setValue("z", 99);

  n.setVariable("x", new List([7, 8]));

  it("dictionary with list", async () =>
    expect(m4.toString()).equalsIgnoringSpaces(
      "{j: 1, k: 2, dicc: {i: 3, z: 99, x: [7, 8]}}"
    ));

  it("list declaration void", async () =>
    expect(
      await exec(`
    v1 = []
    imprimir v1
    `)
    ).equalsIgnoringSpaces("[]"));

  it("list declaration singles", async () =>
    expect(
      await exec(`
    v1 = [1, 2, 3]
    imprimir v1
    `)
    ).equalsIgnoringSpaces("[1, 2, 3]"));

  it("list declaration 2d", async () =>
    expect(
      await exec(`
    v1 = [[1, 2], [3, 4]]
    imprimir v1
    `)
    ).equalsIgnoringSpaces("[[1, 2], [3, 4]]"));

  it("list literal", async () =>
    expect(
      await exec(`
    imprimir [1, 2, "hola"]
    `)
    ).equalsIgnoringSpaces("[1, 2, hola]"));

  it("list indirect initialisation", async () =>
    expect(
      await exec(`
    a[1] = 1
    a[3] = 3
    imprimir a
    `)
    ).equalsIgnoringSpaces("[, 1, , 3]"));

  it("list deep setting", async () =>
    expect(
      await exec(`
    a=[1, 2, [3, 4]]
    imprimir a
    a[0] = 33
    imprimir a
    a[2][1] = -1
    imprimir a
    `)
    ).equalsIgnoringSpaces("[1, 2, [3, 4]] [33, 2, [3, 4]] [33, 2, [3, -1]]"));

  it("list for each setting", async () =>
    expect(
      await exec(`
    a=[5, 6, 7]
    para(i en 0..1) 
    a[i]=1
    imprimir a
    `)
    ).equalsIgnoringSpaces("[1, 1, 7]"));

  it("list for each deep", async () =>
    expect(
      await exec(`
    a=[[1, 2], [3, 4]] 
    para(i en 0..1) 
    a[i][1]=9 
    imprimir a
    `)
    ).equalsIgnoringSpaces("[[1, 9], [3, 9]]"));

  it("list ajedrez 4x4", async () =>
    expect(
      await exec(`
    a=[[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]
    para(i=0..3) {
        para(j=0..3)
            a[i][j] = (i+j)%2    
    }
    imprimir a
    `)
    ).equalsIgnoringSpaces(
      "[[0, 1, 0, 1], [1, 0, 1, 0], [0, 1, 0, 1], [1, 0, 1, 0]]"
    ));

  it("list 3d", async () =>
    expect(
      await exec(`
    a=[[[0, 0, 0], [0, 0, 0], [0, 0, 0]], [[0, 0, 0], [0, 0, 0], [0, 0, 0]], [[0, 0, 0], [0, 0, 0], [0, 0, 0]]]
    para(i=0..2) {
        para(j=0..2)
            para(k=0..2)
                a[i][j][k] = ((i+j+k)%3)-1    
    }
    imprimir a
    `)
    ).equalsIgnoringSpaces(
      "[[[-1, 0, 1], [0, 1, -1], [1, -1, 0]], [[0, 1, -1], [1, -1, 0], [-1, 0, 1]], [[1, -1, 0], [-1, 0, 1], [0, 1, -1]]]"
    ));

  it("list set dictionaries", async () =>
    expect(
      await exec(`
    a = [[6, 7], [8, 9]]
    a[1] = 99
    a[2] = {z:'hola'}
    a[3] = ['a', 'b', 'c']
    imprimir a
    `)
    ).equalsIgnoringSpaces("[[6, 7], 99, {z: hola}, [a, b, c]]"));

  it("list concat", async () =>
    expect(
      await exec(`
    a = [1,2]
    b = [3,4]
    imprimir a+b
    `)
    ).equalsIgnoringSpaces("[1, 2, 3, 4]"));

  it("list swap", async () =>
    expect(
      await exec(`
    colores = ["azul", "rojo"]
    c = colores[0]
    colores[0] = colores[1]
    colores[1] = c
    imprimir colores
    `)
    ).equalsIgnoringSpaces("[rojo, azul]"));

  it("list foreach", async () =>
    expect(
      await exec(`
    a = [1, "hola"]
    para cada x en a
    imprimir x
    `)
    ).equalsIgnoringSpaces("1 hola"));


    it("list insert", async () =>
    expect(
      await exec(`
    a = [1, 2, 3]
    imprimir a.insertar(99)
    `)
    ).equalsIgnoringSpaces("[99, 1, 2, 3]"));

    it("list insert2", async () =>
    expect(
      await exec(`
    a = [1, 2, 3]
    imprimir a.insertar(2, 99)
    `)
    ).equalsIgnoringSpaces("[1, 2, 99, 3]"));

    it("list append", async () =>
    expect(
      await exec(`
    a = [1, 2, 3]
    imprimir a.agregar(99)
    `)
    ).equalsIgnoringSpaces("[1, 2, 3, 99]"));

});
