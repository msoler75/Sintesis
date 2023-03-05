import List from "../src/internals/List.js";
import Dictionary from "../src/internals/Dictionary.js";
import Single from "../src/internals/Single.js";
import {} from "../src/internals/Factory.js";

import { expect } from "chai";
import equalsIgnoringSpaces from "../chai-extensions.js";
import exec from "../lib/exec.js";

describe("Lists", () => {
  let v = new List([10, 20]);
  it("basics 1", async () =>
    expect(v.toString()).equalsIgnoringSpaces("[10, 20]"));

  it("basics 2", async () =>
    expect(v.getMemberRef(0).toString()).equalsIgnoringSpaces("10"));

  it("basics 3", async () =>
    expect(v.getMemberRef(1).toString()).equalsIgnoringSpaces("20"));

  v.setVariable(4, new List([50, 60]));

  it("basics 4", async () =>
    expect(v.toString()).equalsIgnoringSpaces("[10, 20, , , [50, 60]]"));

  it("basics 5", async () =>
    expect(v.getMemberRef(4).getMemberRef(1).toString()).equalsIgnoringSpaces(
      "60"
    ));

  v = new List([10, 20]);
  let m = new Dictionary({ j: 1, p: 2 });
  v.setVariable(3, m);
  it("basics 6", async () =>
    expect(v.toString()).equalsIgnoringSpaces("[10, 20, , {j: 1, p: 2}]"));

  v.setValue(5, 55);
  it("basics 7", async () =>
    expect(v.toString()).equalsIgnoringSpaces(
      "[10, 20, , {j: 1, p: 2}, , 55]"
    ));

  v = new List([10, 20, 30, 40, 50, 60, 70]);
  v.delete(4);
  v.delete(2);
  it("delete 1", async () =>
    expect(v.toString()).equalsIgnoringSpaces("[10, 20, 40, 60, 70]"));
  v.delete(3);
  it("delete 2", async () =>
    expect(v.toString()).equalsIgnoringSpaces("[10, 20, 40, 70 ]"));

  v = new List([10, 20, 30]);
  v.insertValue(-1);
  it("insert number", async () =>
    expect(v.toString()).equalsIgnoringSpaces("[-1, 10, 20, 30]"));
  v.appendValue(99);
  it("append number", async () =>
    expect(v.toString()).equalsIgnoringSpaces("[-1, 10, 20, 30, 99]"));

  v.insertValue(new Single(-2));
  it("insert Single", async () =>
    expect(v.toString()).equalsIgnoringSpaces("[-2, -1, 10, 20, 30, 99]"));

  v.appendVariable(new Single(101));
  it("append Single", async () =>
    expect(v.toString()).equalsIgnoringSpaces("[-2, -1, 10, 20, 30, 99, 101]"));

  v.insertVariable(new List([5, 6]));
  it("insert list", async () =>
    expect(v.toString()).equalsIgnoringSpaces(
      "[[5, 6], -2, -1, 10, 20, 30, 99, 101]"
    ));

  v.insertValue({ h: 3, k: 7 });
  it("insert object", async () =>
    expect(v.toString()).equalsIgnoringSpaces(
      "[{h:3, k:7}, [5, 6], -2, -1, 10, 20, 30, 99, 101]"
    ));

  v.appendValue({ z: 8, x: 2 });
  it("append object", async () =>
    expect(v.toString()).equalsIgnoringSpaces(
      "[{h:3, k:7}, [5, 6], -2, -1, 10, 20, 30, 99, 101, {z:8, x: 2}]"
    ));

  v.insertVariable(new Dictionary({ m: 8 }));
  it("insert Dictionary", async () =>
    expect(v.toString()).equalsIgnoringSpaces(
      "[{m: 8}, {h:3, k:7}, [5, 6], -2, -1, 10, 20, 30, 99, 101, {z:8, x: 2}]"
    ));

  v.appendVariable(new Dictionary({ y: "a" }));
  it("append Dictionary", async () =>
    expect(v.toString()).equalsIgnoringSpaces(
      "[{m: 8}, {h:3, k:7}, [5, 6], -2, -1, 10, 20, 30, 99, 101, {z:8, x: 2}, {y: a}]"
    ));

  v = new List([10, 20]);
  m = new Dictionary({
    j: 1,
    p: 2,
  });
  v.setVariable(3, m);
  m.setValue("k", 77);
  it("list with dictionary 1", async () =>
    expect(v.toString()).equalsIgnoringSpaces(
      "[10, 20, , {j: 1, p: 2, k: 77}]"
    ));
  it("list with dictionary 2", async () =>
    expect(v.getRef(3).getRef("p").toString()).equalsIgnoringSpaces("2"));

  m.delete("j");
  it("after delete key", async () =>
    expect(v.getRef(3).toString()).equalsIgnoringSpaces("{p: 2, k: 77}"));

  let x = new Single(55);
  m.setVariable("fifty", x);
  it("inserted key/value", async () =>
    expect(v.getRef(3).toString()).equalsIgnoringSpaces(
      "{p: 2, k: 77, fifty: 55}"
    ));

  m = new Dictionary();
  m.setValue("j", 1);
  m.setVariable("k", new Single(2));

  let n = new Dictionary({ i: 3 });
  m.setVariable("dicc", n);
  n.setValue("z", 99);

  n.setVariable("x", new List([7, 8]));

  it("dictionary with list", async () =>
    expect(m.toString()).equalsIgnoringSpaces(
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
});
