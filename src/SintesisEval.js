const imprimirCadaLinea = 1;

import Dictionary from "./internals/Dictionary.js";
import List from "./internals/List.js";
import Class from "./internals/Class.js";
import valueOf from "./internals/ValueOf.js";
import Variable, {VariableList} from "./internals/Variable.js";
import Function from "./internals/Function.js";
import Instance from "./internals/Instance.js";
import Iterator from "./internals/Iterator.js";
import MemoryRef from "./internals/MemoryRef.js";
import { printObject, printThing, sprintf } from "./utils/Print.js";
import {SintesisError} from "./SintesisError.js";
import "./internals/ArrayUtils.js";
// import SintesisSymbolParser from './SintesisSymbolParser.js'
import { SymbolFinder } from "./internals/Symbols.js";
import SintesisParserVisitor from "./lib/SintesisParserVisitor.js";
import {
  variableCreate,
  executeListMethod,
  executeStringMethod,
} from "./internals/Factory.js";
import getId from "./internals/GetId.js";
///import safeEval from "safe-eval";

import promptSync from "prompt-sync";
const prompt = promptSync();

// Convert To parameters:
const paramNumber = ["n", "num", "number", "número", "numero"];
const paramInteger = ["i", "e", "int", "ent", "entero"];
const paramFloat = ["f", "d", "dec", "float", "decimal"];
const paramText = ["s", "t", "string", "str", "text", "texto"];

export default class SintesisEval extends SintesisParserVisitor {
  constructor(tokens) {
    super();
    this.tokens = tokens;
  }

  // Visit a parse tree produced by SintesisParser#program.
    async visitProgram(ctx) {
    // parsea todos los símbolos primero
    // let symbolParser = new SintesisSymbolParser()
    // symbolParser.visitProgram(ctx)

    // prepara la salida
    this.output = "";
    // procesa el programa
      await this.visitChildren(ctx);
    // console.log(SymbolFinder.print(ctx))
    return this.output;
  }

  // Visit a parse tree produced by SintesisParser#statementList.
    async visitStatementList(ctx) {
    let i = 0;
    while (i < ctx.children.length && !SymbolFinder.functionHasEnded(ctx)) {
      if (imprimirCadaLinea) console.log(ctx.children[i].getText());
        await this.visit(ctx.children[i++]);
    }
  }

  // Visit a parse tree produced by SintesisParser#statement.
    async visitStatement(ctx) {
    // console.log('statement', ctx.getText())
    return ctx.children.length ?   await this.visit(ctx.children[0]) : null;
  }

  // Visit a parse tree produced by SintesisParser#classDeclaration.
    async visitClassDeclaration(ctx) {
    return null;
  }

  // Visit a parse tree produced by SintesisParser#functionDeclaration.
    async visitFunctionDeclaration(ctx) {
    return null;
  }

    async visitAnonymousFunctionDecl(ctx) {
    return ctx.anonymousFunction;
  }

    async visitArrowFunction(ctx) {
    return ctx.anonymousFunction;
  }

  // Visit a parse tree produced by SintesisParser#expFunctionExpression.
    async visitExpFunctionExpression(ctx) {
    return   await this.visit(ctx.children[0]);
  }

  // Visit a parse tree produced by SintesisParser#methodDeclaration.
    async visitMethodDeclaration(ctx) {
    return null;
  }

  // Visit a parse tree produced by SintesisParser#expNew.
    async visitExpNew(ctx) {
    const id = ctx.id.text;
    let memoryref = SymbolFinder.findSymbol(ctx, id);
    //if (!memoryref)
      //throw new SintesisError(null, ctx.id, "no existe la clase '%s'", id);
    //if (!(memoryref.variable instanceof Class))
      //throw new SintesisError(null, ctx.id, "'%s' no es una clase", id);
    let obj = new Instance(memoryref.variable);
    let values = ctx.args ?   await this.visit(ctx.args) : [];
    if (values) ctx.args.values = values;
    let constructor = obj.getConstructor(values.length);
    /*if (!constructor)
    throw new SintesisError(null, 
      ctx.args,
      "no existe un método constructor " + !values.length?"sin argumentos": values.length==1?"con un argumento": "con %d argumentos", 
      values.length
    );*/
    this.callToFunction(new MemoryRef(obj, constructor.name), ctx.args);
    return new MemoryRef(obj);
  }

 async callToFunction(memoryref, ctxArgs) {
    const fn = memoryref.variable;
    const inst = memoryref._variable;
    const ctx = fn.context;
    // console.log('#callToFunction', fn.name)

    // caso de constructores vacíos
    if (!ctx || !ctx.stmt) return;

    // obtenemos los argumentos o parámetros de la función y los valores
    const params = ctx.pl ?   await this.visit(ctx.pl) : [];
    const values = ctxArgs ? ctxArgs.values : [];

    if (params.length !== values.length)
      throw new SintesisError(null,  ctxArgs,"número de argumentos incorrecto")

    if (fn.class && inst instanceof Instance)
      SymbolFinder.pushStack(fn.class.context, inst);

    // creamos un nuevo contexto de símbolos de un contexto de función
    SymbolFinder.pushStack(ctx);

    // pone en el contexto los parámetros de la función como si fueran variables, con los valores asignados desde la llamada con argumentos a la función
    for (let i = 0; i < params.length; i++) {
      let id = params[i];
      let mem_param = SymbolFinder.findSymbol(ctx, id);
      mem_param.assign(i in values ? valueOf(values[i]) : null);
    }

    // si es un método constructor de una clase, que además tiene una clase padre,
    // y no tiene explícitamente una llamada a la superclase...
    if (
      fn.class &&
      inst.superClass &&
      Class.isConstructorName(fn.name) &&
      !fn.callingSuperClass
    ) {
      let fncon = inst.superClass.class.getConstructor(0);
      this.callToFunction(new MemoryRef(inst.superClass, fncon.name), null);
    }

    // ejecutamos el cuerpo de la función
      await this.visit(ctx.stmt);

    const r = SymbolFinder.getReturnValue(ctx);

    // restauramos nivel de pila
    SymbolFinder.popStack(ctx);

    if (fn.class && inst instanceof Instance)
      SymbolFinder.popStack(fn.class.context, inst);

    return r;
  }

  // Visit a parse tree produced by SintesisParser#returnStatement.
    async visitReturnStatement(ctx) {
    if (!SymbolFinder.insideFunction(ctx))
      throw new SintesisError(null, 
        ctx,
        "se ha intentado retornar sin estar dentro de función o método"
      );
    let r = ctx.exp ?   await this.visit(ctx.exp) : null;
    // r = valueOf(r)
    SymbolFinder.setReturnValue(ctx, r);
    return r;
  }

  // Visit a parse tree produced by SintesisParser#expMemberIndex.
    async visitExpMemberIndex(ctx) {
    const logC = ctx.getText();
    const logM = ctx.mem.getText();

    // console.log(logC)

    // obtenemos la referencia al miembro
    let memoryref =   await this.visit(ctx.mem);

    // para cuando el objeto es un string literal
    if (
      memoryref &&
      !(memoryref instanceof MemoryRef) &&
      typeof memoryref === "string"
    )
      memoryref = new MemoryRef(new Variable(memoryref));

    // para cuando el objeto es un array literal
    if (memoryref && memoryref instanceof List)
      memoryref = new MemoryRef(memoryref);

    if (memoryref && Array.isArray(memoryref))
      memoryref = new MemoryRef(new List(memoryref));

    // para cuando el objeto es un object literal
    if (memoryref && memoryref instanceof Dictionary)
      memoryref = new MemoryRef(memoryref);

    // comprobamos si es válido
    if (!memoryref || !(memoryref instanceof MemoryRef))
      throw new SintesisError(null, ctx.mem, "operador izquierdo inválido");

    // comprobamos accesibilidad de atributos métodos
    if (!SymbolFinder.canAccess(memoryref, ctx))
      throw new SintesisError(null, ctx.mem, "acceso no permitido");

    // obtenemos el índice
    let index =   await this.visit(ctx.idx);
    index = valueOf(index);
    if (index === undefined || index === null)
      throw new SintesisError(null, ctx.idx, "índice no válido");

    // si no existe la variable de referencia, creamos la variable dinámicamente
    // to-do: mover este código a memoryref.assign ??
    if (!memoryref._variable) {
      let v = typeof index === "number" ? new List() : new Dictionary();
      memoryref.assign(v);
    }

    // es un tipo de datos válido? List / Dictionary / string
    if (
      !memoryref ||
      !memoryref.variable ||
      (typeof memoryref.variable.value !== "string" &&
        !memoryref.variable.getMemberRef) ||
      (typeof memoryref.variable.value === "string" && !ctx.args)
    )
      throw new SintesisError(null, 
        ctx.mem,
        "operador izquierdo no es un tipo válido"
      );

    let ref = memoryref.variable;
    // if (!ref) throw new SintesisError(null, ctx.idx, "no encontrado");
    // comprobamos si existe la referencia
    try {
      if (memoryref.variable.getMemberRef)
        ref = ref.getMemberRef(index, !!this.createIndexIfNotExists);
    } catch (err) {
      if (typeof index !== "string") throw new SintesisError(null, ctx.idx, err);
      ref = null;
    }

    // si no existe el índice retornaremos null
    ref = ref ? new MemoryRef(memoryref.variable, index) : null;

    if (!ref && ctx.args)
      throw new SintesisError(null, 
        ctx.idx,
        "'%s' no es un método válido", index
      );

    // comprobamos accesibilidad de atributos métodos
    if (ref && !SymbolFinder.canAccess(ref, ctx))
      throw new SintesisError(null, ctx.idx, "acceso no permitido");

    // si no es una llamada a un método, devolvemos el valor
    if (!ctx.args || !ref) return ref;

    // sí es una llamada a un método

    // preparamos argumentos
    let values = ctx.args ?   await this.visit(ctx.args) : [];
    if (values) ctx.args.values = values;

    if (typeof ref._variable.value === "string") {
      try {
        const result = executeStringMethod(ctx, ref, index, values);
        return result;
      } catch (err) {
        throw new SintesisError(null, ctx.idx, err.message, index);
      }
    }

    if (ref._variable instanceof List) {
      try {
        const result = executeListMethod(ctx, ref, index, values);
        return result;
      } catch (err) {
        throw new SintesisError(null, ctx.idx, err.message, index);
      }
    }

    // comprobamos el tipo
    if (!(ref.variable instanceof Function))
      throw new SintesisError(null, 
        ctx.mem,
        "'%s' no se ha encontrado", index
      );

    return this.callToFunction(ref, ctx.args);
  }

  // Visit a parse tree produced by SintesisParser#expMemberDot.
    async visitExpMemberDot(ctx) {
    return   await this.visitExpMemberIndex(ctx);
  }

  // Visit a parse tree produced by SintesisParser#expMemberFunc.
    async visitExpMemberFunc(ctx) {
    if (!ctx) throw new Error("ctx is undefined");
    const logC = ctx.getText();
    const memoryref =   await this.visit(ctx.mem);
    if (!memoryref)
      throw new SintesisError(null, ctx.mem, "función no encontrada");

    let values = ctx.args ?   await this.visit(ctx.args) : [];
    if (values) ctx.args.values = values;
    let obj = memoryref.variable;
    if (obj instanceof Instance) {
      let met = obj.getConstructor(values ? values.length : 0);
      return this.callToFunction(new MemoryRef(obj, met.name), ctx.args);
    }
    if (!(obj instanceof Function))
      throw new SintesisError(null, ctx.mem, "función no encontrada");
    return this.callToFunction(memoryref, ctx.args);
  }

  // Visit a parse tree produced by SintesisParser#memberIdentifier.
    async visitMemberIdentifier(ctx) {
    return ctx.children[0].getText();
  }

    async visitMember(ctx) {
    console.log("member", ctx);
  }

  // Visit a parse tree produced by SintesisParser#expAssignment.
    async visitExpAssignment(ctx) {
    this.createIndexIfNotExists = true;
    const logC = ctx.getText();
    const logD = ctx.dest.getText();
    const logE = ctx.exp.getText();

    // console.log(logC)
    let memoryref =   await this.visit(ctx.dest);
    this.createIndexIfNotExists = false;

    if (
      !memoryref ||
      !(memoryref instanceof MemoryRef) ||
      memoryref._variable instanceof Error
    )
      throw new SintesisError(null, 
        ctx.dest,
        "el operador izquierdo de asignación es inválido"
      );

    let result =   await this.visit(ctx.exp);
    // const r = valueOf(result)
    memoryref.assign(result);
    return memoryref;
  }

  // Visit a parse tree produced by SintesisParser#listIndex.
    async visitListIndex(ctx) {
    let items = ctx.children.filter(
      (x) => x.constructor.name !== "TerminalNodeImpl"
    );
    return items.length ?   await this.visit(items[0]) : null;
  }

    async visitListDeclaration(ctx) {
    var literalList = ctx.exp ? valueOf(  await this.visit(ctx.exp)) : null;
    if (literalList && literalList instanceof List) return literalList;
    return new List();
  }

    async visitExpNumberOf(ctx) {
    var value = valueOf(  await this.visit(ctx.exp));
    if (!value) return 0;
    if (typeof value !== "object")
      throw new SintesisError(null, ctx.exp, "tipo incorrecto");
    if (Array.isArray(value)) {
      let list = new List(value);
      return list.size();
    }
    let map = new Dictionary(value);
    return map.size();
  }

    async visitExpIn(ctx) {
    const key = valueOf(  await this.visit(ctx.key));
    const obj = valueOf(  await this.visit(ctx.dest));
    if (typeof obj !== "object")
      return new SintesisError(null, ctx.dest, "tipo incorrecto");
    return key in obj;
  }

  // Visit a parse tree produced by SintesisParser#expAssignmentOperator.
    async visitExpAssignmentOperator(ctx) {
    const memoryref =   await this.visit(ctx.dest);
    this.allowSymbolNotFound = false;
    if (!memoryref)
      throw new SintesisError(null, ctx.dest, "símbolo no encontrado");
    if (!(memoryref instanceof MemoryRef))
      throw new SintesisError(null, 
        ctx.dest,
        "operador izquierdo no es válido"
      );
    let e1 = valueOf(memoryref);
    let e2 = valueOf(  await this.visit(ctx.exp));
    switch (ctx.op.getText()) {
      case "*=":
        e1 *= e2;
        break;
      case "/=":
        e1 /= e2;
        break;
      case "%=":
        e1 %= e2;
        break;
      case "+=":
        e1 = this.addOp(ctx, e1, e2);
        break;
      case "-=":
        e1 -= e2;
        break;
      case "<<=":
        e1 <<= e2;
        break;
      case ">>=":
        e1 >>= e2;
        break;
      case "&=":
        e1 &= e2;
        break;
      case "^=":
        e1 ^= e2;
        break;
      case "|=":
        e1 |= e2;
        break;
      case "**=":
        e1 **= e2;
        break;
    }
    //memoryref.variable.value = e1
    memoryref.assign(e1);
    return e1;
  }

  addOp(ctx, e1, e2) {
    if (Array.isArray(e1) && Array.isArray(e2)) return e1.concat(e2);
    if (Array.isArray(e1)) {
      e1.push(e2);
      return [...e1];
    }
    if (typeof e1 === "object" && typeof e2 === "object")
      return { ...e1, ...e2 };

    // convierte a string el segundo valor, si el primero lo es
    if (typeof e1 === "string" && typeof e2 !== "string")
      return e1 + printObject(e2);

    if (
      typeof e1 === "object" ||
      typeof e2 === "object" ||
      Array.isArray(e1) ||
      Array.isArray(e2)
    )
      throw new SintesisError(null, ctx, "tipos incompatibles");
    return e1 + e2;
  }

  // Visit a parse tree produced by SintesisParser#expOp.
    async visitExpOp(ctx) {
    let e1 = valueOf(  await this.visit(ctx.e1));
    let e2 = valueOf(  await this.visit(ctx.e2));
    switch (ctx.op.text) {
      case "**":
        e1 = e1 ** e2;
        break;
      case "*":
        e1 = e1 * e2;
        break;
      case "/":
        e1 = e1 / e2;
        break;
      case "%":
        e1 = e1 % e2;
        break;
      case "+":
        e1 = this.addOp(ctx, e1, e2);
        break;
      case "-":
        e1 = e1 - e2;
        break;
      case "<":
        e1 = e1 < e2;
        break;
      case ">":
        e1 = e1 > e2;
        break;
      case "<=":
        e1 = e1 <= e2;
        break;
      case ">=":
        e1 = e1 >= e2;
        break;
      case "==":
        e1 = e1 == e2;
        break;
      case "!=":
        e1 = e1 != e2;
        break;
      case "===":
        e1 = e1 === e2;
        break;
      case "!==":
        e1 = e1 !== e2;
        break;
      case "&&":
      case "and":
        e1 = e1 && e2;
        break;
      case "||":
      case "or":
        e1 = e1 || e2;
        break;
      case "&":
        e1 = e1 & e2;
        break;
      case "|":
        e1 = e1 | e2;
        break;
      case "^":
        e1 = e1 ^ e2;
        break;
      default:
        e1 = null;
    }
    return variableCreate(e1);
  }

  // Visit a parse tree produced by SintesisParser#expMath.
    async visitExpMath(ctx) {
    var funcname = getId(ctx.mem)
    // const args = valueOf(  await this.visit(ctx.args));   
    var args = valueOf(await this.visit(ctx.args))
    if(args.length==1&&Array.isArray(args[0]))
      args = [...args[0]] 
    funcname = funcname
    .replace("redondear", "round")
    .replace("techo", "ceil")
    .replace("suelo", "floor")
    if (!(funcname in Math))
    throw new SintesisError(null, ctx.fn, "no existe este método");
    return Math[funcname].apply(this, args);
  }

  // Visit a parse tree produced by SintesisParser#ifStatement.
    async visitIfStatement(ctx) {
    if (valueOf(  await this.visit(ctx.exp))) {
      return   await this.visitChildren(ctx.stmt);
    } else if (ctx.elseifs) {
      for (const cs of ctx.elseifs.children) {
        if (valueOf(  await this.visit(cs.exp))) return   await this.visitChildren(cs.stmt);
      }
    }
    if (ctx.elsestmt_) return   await this.visit(ctx.elsestmt_);
  }

  // Visit a parse tree produced by SintesisParser#repeatStatement.
    async visitRepeatStatement(ctx) {
    const n = valueOf(  await this.visit(ctx.exp));
    if (n) for (var i = 0; i < n; i++)   await this.visit(ctx.stmt);
  }

  // Visit a parse tree produced by SintesisParser#repeatWhileStatement.
    async visitRepeatWhileStatement(ctx) {
    do   await this.visit(ctx.stmt);
    while (valueOf(  await this.visit(ctx.exp)));
  }

  // Visit a parse tree produced by SintesisParser#whileRepeatStatement.
    async visitWhileRepeatStatement(ctx) {
    while (valueOf(  await this.visit(ctx.exp)))   await this.visit(ctx.stmt);
  }

  // Visit a parse tree produced by SintesisParser#forEachStatement.
    async visitForEachStatement(ctx) {
    const iter = ctx.iter;
    const value_id = iter.idv ? iter.idv.text : null;
    const index_id = iter.idk ? iter.idk.text : null;
    const collection =   await this.visit(iter.coll);

    if (!Iterator.iterable(collection))
      throw new SintesisError(null, ctx.coll, "el valor no es iterable");

    let iterator = new Iterator(collection);

    if (iterator.size) {
      // TO-DO aquí no debería añadir el símbolo, eso ya se hizo en el SintesisSymbolParser
      /*let mem_idx = index_id
        ? SymbolFinder.addVariable(ctx, index_id, new Variable(iterator.index))
        : null;
      let mem_item = SymbolFinder.addVariable(
        ctx,
        value_id,
        new Variable(iterator.current)
      );*/
      //let mem_item
      //
      let mem_idx = index_id ? SymbolFinder.findSymbol(ctx, index_id) : null;
      let mem_item = SymbolFinder.findSymbol(ctx, value_id);
      while (!iterator.ended()) {
        mem_item.assign(iterator.current);
        if (mem_idx) mem_idx.assign(iterator.index);
          await this.visit(ctx.stmt);
        iterator.next();
      }
    }
  }

  // Visit a parse tree produced by SintesisParser#forEachStatement2.
    async visitForEachStatement2(ctx) {
    return   await this.visitForEachStatement(ctx);
  }

  // Visit a parse tree produced by SintesisParser#forFromToStatement.
    async visitForFromToStatement(ctx) {
    const iter = ctx.iter;
    const from = valueOf(  await this.visit(iter.start));
    const end = valueOf(  await this.visit(iter.to));
    const id_iterator = iter.id.getText();

    let mem_index = SymbolFinder.findSymbol(ctx, id_iterator);
    mem_index.assign(from);
    var val = valueOf(mem_index.variable);
    while ((from < end && val <= end) || (from > end && val >= end)) {
        await this.visit(ctx.stmt);
      mem_index.increment(from < end ? 1 : -1);
      val = valueOf(mem_index.variable);
    }
  }

  // Visit a parse tree produced by SintesisParser#forFromToStatement2.
    async visitForFromToStatement2(ctx) {
    return   await this.visitForFromToStatement(ctx);
  }

  // Visit a parse tree produced by SintesisParser#forClassic.
    async visitForClassic(ctx) {
    if (ctx.pre)   await this.visit(ctx.pre);
    let continuar = ctx.exp ? valueOf(  await this.visit(ctx.exp)) : [true];
    while (continuar[continuar.length - 1]) {
      if (ctx.stmt)   await this.visit(ctx.stmt);
      if (ctx.post)   await this.visit(ctx.post);
      continuar = ctx.exp ? valueOf(  await this.visit(ctx.exp)) : [true];
    }
  }

  // Visit a parse tree produced by SintesisParser#expBasicFunction.
    async visitExpBasicFunction(ctx) {
    const args =   await this.visit(ctx.args);
    const a0 = valueOf(args[0]);
    const a1 = valueOf(args[1]);
    const a2 = valueOf(args[2]);
    const t0 = typeof a0;
    const t1 = typeof a1;
    const t2 = typeof a2;
    const fn = ctx.fn.children[0].constructor.name;
    switch (fn) {
      case "MapContext": {
        let args = [];
        if (ctx.args) {
          args =   await this.visit(ctx.args);
        }
        return args[0] && args[0] instanceof Dictionary
          ? args[0]
          : new Dictionary();
      }
      case "NumberOfContext":
        if (args.length < 1)
          throw new SintesisError(null, 
            ctx.args,
            "debe especificar un argumento"
          );
        if ((t0 !== "string") & (t0 !== "object"))
          throw new SintesisError(null, 
            ctx.args.children[1],
            "tipo incorrecto"
          );
        const v = Array.isArray(a0)
          ? new List(a0)
          : t0 === "object"
          ? new Dictionary(a0)
          : a0;
        return v instanceof Variable ? v.size() : v.length;
      case "IndexOfContext":
        if (args.length < 2)
          throw new SintesisError(null, 
            ctx.args,
            "debe especificar dos argumentos"
          );
        if (t0 !== "string" && !Array.isArray(a0) && t0 !== "object")
          throw new SintesisError(null, 
            ctx.args.children[1],
            "tipo incorrecto"
          );
        return t0 === "object"
          ? new Dictionary(a0).indexOf(a1)
          : a0.indexOf(a1);
      case "ConvertContext":
        if (args.length < 2)
          throw new SintesisError(null, 
            ctx.args,
            "debe especificar dos argumentos"
          );
        if (t1 !== "string")
          throw new SintesisError(null, 
            ctx.args.children[3],
            "tipo incorrecto"
          );
        if (paramInteger.includes(a1.toLowerCase())) {
          if (t0 === "number") return Math.floor(a0);
          if (t0 === "string")
            return a0.indexOf(".") >= 0
              ? Math.floor(parseFloat(a0))
              : parseInt(a0);
        }
        if (paramFloat.includes(a1.toLowerCase())) {
          if (t0 === "number") return 1.0 * a0;
          if (t0 === "string")
            return a0.indexOf(".") >= 0 ? parseFloat(a0) : 1.0 * parseInt(a0);
        }
        if (paramNumber.includes(a1.toLowerCase())) {
          if (t0 === "number") return a0;
          if (t0 === "string")
            return a0.indexOf(".") >= 0 ? parseFloat(a0) : parseInt(a0);
        } else if (paramText.includes(a1.toLowerCase())) {
          if (t0 === "string") return a0;
          if (t0 === "number") return "" + a0;
        } else
          throw new SintesisError(null, 
            ctx.args.children[3],
            "tipo incorrecto"
          );
        throw new SintesisError(null, 
          ctx.args.children[1],
          "no se pudo convertir"
        );

      case "SubContext":
        if (args.length < 2)
          throw new SintesisError(null, 
            ctx.args,
            "debe especificar al menos dos argumentos"
          );
        if (t0 !== "string" && !Array.isArray(a0))
          throw new SintesisError(null, 
            ctx.args.children[1],
            "tipo incorrecto"
          );
        let start = a1;
        let end = a2;
        if (t1 !== "number")
          throw new SintesisError(null, 
            ctx.args.children[3],
            "tipo incorrecto"
          );
        if (start < 0)
          throw new SintesisError(null, 
            ctx.args.children[3],
            "No puede ser negativo"
          );
        if (end && typeof end !== "number")
          throw new SintesisError(null, 
            ctx.args.children[5],
            "tipo incorrecto"
          );
        if (Array.isArray(a0)) return a0.slice(start, end);
        return a0.substring(start, end);
      case "LowerContext":
      case "UpperContext":
        if (args.length < 1)
          throw new SintesisError(null, 
            ctx.args,
            "debe especificar un argumento"
          );
        if (t0 !== "string")
          throw new SintesisError(null, 
            ctx.args.children[1],
            "tipo incorrecto"
          );
        return fn == "LowerContext" ? a0.toLowerCase() : a0.toUpperCase();
      case "MinContext":
      case "MaxContext":
        if (args.length < 1)
          throw new SintesisError(null, 
            ctx.args,
            "debe especificar al menos un argumento"
          );
        for (var i in args) {
          var arg = valueOf(args[i]);
          if (typeof arg !== "number")
            throw new SintesisError(null, 
              ctx.args.children[1 + i * 2],
              "tipo incorrecto"
            );
        }
        const fz = fn === "MaxContext" ? Math.max : Math.min;
        return fz.apply(this, args);
      case "RandomContext": {
        if (args.length === 0) return Math.random();
        let min = args.length === 2 ? a0 : 0;
        let max = args.length === 2 ? a1 : a0;
        // https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }
      case "OrdContext": {
        if (args.length < 1)
          throw new SintesisError(null, 
            ctx.args,
            "debe especificar un argumento"
          );
        if (t0 !== "string")
          throw new SintesisError(null, 
            ctx.args.children[1],
            "tipo incorrecto"
          );
        // https://locutus.io/php/strings/ord/
        const str = a0 + "";
        const code = str.charCodeAt(0);
        if (code >= 0xd800 && code <= 0xdbff) {
          const hi = code;
          if (str.length === 1) {
            return code;
          }
          const low = str.charCodeAt(1);
          return (hi - 0xd800) * 0x400 + (low - 0xdc00) + 0x10000;
        }
        if (code >= 0xdc00 && code <= 0xdfff) {
          return code;
        }
        return code;
      }
      case "ChrContext": {
        if (args.length < 1)
          throw new SintesisError(null, 
            ctx.args,
            "debe especificar un argumento"
          );
        if (t0 !== "number")
          throw new SintesisError(null, 
            ctx.args.children[1],
            "tipo incorrecto"
          );
        let n = a0;
        // https://stackoverflow.com/questions/37395989/javascript-equivalent-of-phps-chr-function
        if (n < 128) {
          return String.fromCharCode(n);
        } else {
          return "ÇüéâäàåçêëèïîìÄÅÉæÆôöòûùÿÖÜ¢£¥₧ƒáíóúñÑªº¿⌐¬½¼¡«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ "[
            n - 128
          ];
        }
      }
      case "PromptContext": {
        let result = "";
        if (typeof window === "undefined")
          // this is node
          result = prompt(a0 || "");
        // this is browser
        else result = window.prompt(a0, a1);
        if (args.length > 1) {
          if (paramInteger.includes(a1.toLowerCase())) {
            result = parseInt(result);
          }
        }
        return result;
      }
    }
    return null;
  }

  // Visit a parse tree produced by SintesisParser#expMemberMethod.
    async visitExpMemberMethod(ctx) {
    return   await this.visitChildren(ctx);
  }

  // Visit a parse tree produced by SintesisParser#expTernary.
    async visitExpTernary(ctx) {
    let cond = valueOf(  await this.visit(ctx.cond));
    if (cond) return   await this.visit(ctx.ok);
    return   await this.visit(ctx.no);
  }

  // Visit a parse tree produced by SintesisParser#formalParameterList.
    async visitFormalParameterList(ctx) {
    ctx.params = [];
    for (let i = 0; i < ctx.children.length; i++)
      if (i % 2 == 0) ctx.params.push(ctx.children[i].getText());
    return ctx.params;
  }

    async visitArrowFunctionParameters(ctx) {
    if (ctx.children.length == 3)
      // formalListParameters
      return   await this.visit(ctx.children[1]);
    else {
      const params =   await this.visitChildren(ctx);
      if (!params || !params[0]) return [];
      return params;
    }
  }

  // Visit a parse tree produced by SintesisParser#arguments.
    async visitArguments(ctx) {
    const values = [];
    if (ctx.children.length > 2)
      for (let i = 1; i < ctx.children.length; i++)
        if (i % 2 == 1) values.push(  await this.visit(ctx.children[i]));
    return values;
  }

  // Visit a parse tree produced by SintesisParser#expMember.
    async visitExpMember(ctx) {
    return ctx.children.length
      ?   await this.visit(ctx.children[0])
      :   await this.visitChildren(ctx);
  }

  // Visit a parse tree produced by SintesisParser#expIdentifier.
    async visitExpIdentifier(ctx) {
    const id = getId(ctx);
    // console.log('#visitExpIdentifier', id)
    // console.log('ID', id)
    const memoryref = SymbolFinder.findSymbol(ctx, id);
    // comprobamos accesibilidad de atributos métodos
    if (!SymbolFinder.canAccess(memoryref, ctx))
      throw new SintesisError(null, ctx, "acceso no permitido");
    // console.log('EXPIDER', memoryref)
    return memoryref;
  }

  // Visit a parse tree produced by SintesisParser#expIdentifier.
    async visitExpReservedIdentifier(ctx) {
    const id = ctx.getText();
    // console.log('#visitExpIdentifier', id)
    // console.log('ID', id)
    const memoryref = SymbolFinder.findSymbol(ctx, id);
    // comprobamos accesibilidad de atributos métodos
    if (!SymbolFinder.canAccess(memoryref, ctx))
      throw new SintesisError(null, ctx, "acceso no permitido");
    // console.log('EXPIDER', memoryref)
    return memoryref;
  }
  // Visit a parse tree produced by SintesisParser#variableDeclaration.
    async visitVariableDeclaration(ctx) {
    const id = ctx.children[0].getText();
    let mem_id = SymbolFinder.findSymbol(ctx, id);
    if (ctx.exp) {
      let result =   await this.visit(ctx.exp);
      mem_id.assign(result);
    }
    return mem_id;
  }

    async visitExpAttributes(ctx) {
    // console.log('#visitExpAttributes')
    if (!SymbolFinder.insideClass(ctx))
      throw new SintesisError(null, ctx, "referencia fuera de clase");
    const s = SymbolFinder.findSymbol(ctx, "___attributes");
    // console.log(s)
    // console.log(printObject(s))
    return s;
  }

    async visitExpMethods(ctx) {
    if (!SymbolFinder.insideClass(ctx))
      throw new SintesisError(null, ctx, "referencia fuera de clase");
    return SymbolFinder.findSymbol(ctx, "___methods");
  }

  // Visit a parse tree produced by SintesisParser#expSuper.
    async visitExpSuper(ctx) {
    const class_ctx = SymbolFinder.getClassContext(ctx);
    if (!class_ctx)
      throw new SintesisError(null, ctx, "referencia fuera de clase");
    if (!class_ctx.symbolTable.class.superClass)
      throw new SintesisError(null, 
        ctx,
        "no existe clase padre de esta clase"
      );
    return class_ctx.symbolTable.getRef("___super");
  }

  // Visit a parse tree produced by SintesisParser#identifierName.
    async visitIdentifierName(ctx) {
    return getId(ctx);
  }

  // Visit a parse tree produced by SintesisParser#identifierName.
    async visitIdentifier(ctx) {
    return getId(ctx);
  }

  // Visit a parse tree produced by SintesisParser#functionBody.
    async visitFunctionBody(ctx) {
    return ctx.children.length
      ?   await this.visit(ctx.children[0])
      :   await this.visitChildren(ctx);
  }

  // Visit a parse tree produced by SintesisParser#printStatement.
    async visitPrintStatement(ctx) {
    // console.log(ctx.getText())
    let args =   await this.visit(ctx.exp);
    // console.log('PRINT ARGS', args)
    args = args.filter((x) => x !== undefined);
    let result = [];
    for (let r of args) {
      r = printThing(r);
      r = "" + r;
      result.push(r);
      // console.log('print '+r)
    }
    //console.log(VariableList)
    let str = result.join(" ").replace(/\\n/g, "\n");
    this.output += str + "\n";
    // console.log('PRINTING', r);
    return str;
  }

  /*                                                                                       async visitStepStatement(ctx) {
    return                                                                                       await this.visitChildren(ctx)
  } */

  // Visit a parse tree produced by SintesisParser#expLiteral.
    async visitExpLiteral(ctx) {
    return ctx.children.length
      ?   await this.visit(ctx.children[0])
      :   await this.visitChildren(ctx);
  }

  // Visit a parse tree produced by SintesisParser#literal.
    async visitLiteral(ctx) {
    return ctx.children.length
      ?   await this.visit(ctx.children[0])
      :   await this.visitChildren(ctx);
  }

  // Visit a parse tree produced by SintesisParser#booleanLiteral.
    async visitBooleanLiteral(ctx) {
    let r = ctx.children[0].getText();
    switch (r) {
      case "true":
      case "cierto":
      case "vero":
      case "verdadeiro":
      case "vrai":
      case "certo":
        return true;
      case "false":
      case "falso":
      case "faux":
        return false;
    }
    return undefined;
  }

  // Visit a parse tree produced by SintesisParser#stringLiteral.
    async visitStringLiteral(ctx) {
    let str = ctx.children[0].getText();
    str = str.substr(1, str.length - 2);
    return str;
  }

    async visitExpMemberString(ctx) {
    return   await this.visitStringLiteral(ctx.children[0]);
  }

    async visitExpMemberList(ctx) {
    return   await this.visitListLiteral(ctx.children[0]);
  }

    async visitExpMemberObject(ctx) {
    return   await this.visitObjectLiteral(ctx.children[0]);
  }

  // Visit a parse tree produced by SintesisParser#listLiteral.
    async visitListLiteral(ctx) {
    var items = ctx.children.filter(
      (x) => x.constructor.name !== "TerminalNodeImpl"
    );
    var values = await      items.mapAsyncSequence(async(x) => {
      return   await this.visit(x);
    });
    return new List(values);
  }

  // Visit a parse tree produced by SintesisParser#objectLiteral.
    async visitRegularExpressionLiteral(ctx) {
    const exp = ctx.getText();
    const pos = exp.lastIndexOf("/");
    const e1 = exp.substr(1, pos - 1);
    const e2 = exp.substr(pos + 1);
    return new RegExp(e1, e2);
  }

  // Visit a parse tree produced by SintesisParser#objectLiteral.
    async visitObjectLiteral(ctx) {
    // var m = new Dictionary()
    var obj = {};
    var key = undefined;
    var items = ctx.children.filter(
      (x) => x.constructor.name !== "TerminalNodeImpl"
    ); 
await       items.mapAsyncSequence(async(x) => {
      switch (x.constructor.name) {
        case "ObjectKeyContext":
          let keyContext = x.children[0];
          while (key === undefined && keyContext) {
            switch (keyContext.constructor.name) {
              case "ReservedIdentifierContext":
              case "IdentifierContext":
                // case "IdContext":
                // case "KeywContext":
                key = getId(keyContext);
                break;
              case "BooleanLiteralContext":
              case "NumericLiteralContext":
              case "StringLiteralContext":
                key =   await this.visit(keyContext);
                break;
              case "ExpLiteralContext":
              case "IdentifierExtContext":
              case "ObjectKeyContext":
                keyContext = keyContext.children[0];
                break;
              default:
                throw new SintesisError(null, x, "tipo o formato incorrecto");
            }
          }
          break;
        default:
          //m.setValue(key,
          if (key === undefined)
            throw new SintesisError(null, x, "tipo o formato incorrecto");
          if (key === null)
            throw new SintesisError(null, x, "la clave no puede ser nula");
          obj[key] = valueOf(  await this.visit(x));
          key = undefined;
      }
    });
    return new Dictionary(obj);
  }

    async visitNullLiteral(ctx) {
    return null;
  }

    async visitExpDelete(ctx) {
    const memoryref =   await this.visit(ctx.dest);
    const obj = valueOf(memoryref._variable);
    if (typeof obj !== "object")
      return new SintesisError(null, ctx.dest, "tipo incorrecto");
    return delete memoryref._variable.value[memoryref._index];
  }

  // Visit a parse tree produced by SintesisParser#expNot.
    async visitExpNot(ctx) {
    return !valueOf(  await this.visit(ctx.dest));
  }

  // Visit a parse tree produced by SintesisParser#expBitNot.
    async visitExpBitNot(ctx) {
    return ~valueOf(  await this.visit(ctx.dest));
  }

  // pre indica si es pre incremento (++i) o post incremento  (i++)
    async visitExpIncrement(ctx, pre, inc) {
    // const logD = ctx.dest.getText()
    var memoryref =   await this.visit(ctx.dest);
    memoryref = memoryref;
    if (!memoryref)
      throw new SintesisError(null, ctx.dest, "símbolo no encontrado");
    if (!(memoryref instanceof MemoryRef))
      throw new SintesisError(null, 
        ctx.dest,
        "operador izquierdo de '%s' es inválido", ctx.op.text
      );
    if (pre) {
      memoryref.increment(inc);
      return memoryref.value;
    } else {
      let value = memoryref.value;
      memoryref.increment(inc);
      return value;
    }
  }

  // Visit a parse tree produced by SintesisParser#expPreIncrement.
    async visitExpPreIncrement(ctx) {
    const inc = ctx.op.text == "++" ? 1 : -1;
    return   await this.visitExpIncrement(ctx, true, inc);
  }

  // Visit a parse tree produced by SintesisParser#expPostIncrement.
    async visitExpPostIncrement(ctx) {
    const inc = ctx.op.text == "++" ? 1 : -1;
    return   await this.visitExpIncrement(ctx, false, inc);
  }

  // Visit a parse tree produced by SintesisParser#expUnaryMinus.
    async visitExpUnaryMinus(ctx) {
    const value = valueOf(  await this.visit(ctx.dest));
    return -value;
  }

  // Visit a parse tree produced by SintesisParser#expUnaryPlus.
    async visitExpUnaryPlus(ctx) {
    return valueOf(  await this.visit(ctx.dest));
  }

  // Visit a parse tree produced by SintesisParser#numericLiteral.
    async visitNumericLiteral(ctx) {
    let r = ctx.children[0].getText();
    if (r.indexOf(".") >= 0) return parseFloat(r);
    return parseInt(r);
  }

  // Visit a parse tree produced by SintesisParser#expParenthesis.
    async visitExpParenthesis(ctx) {
    return valueOf(  await this.visit(ctx.exp));
  }

  // Visit a parse tree produced by SintesisParser#expParenthesis.
    async visitExpJavascript(ctx) {
    const code = ctx.getText().replace(/^{{|}}$/g, "");
    console.log("code", code);
    //var func = new Function('custom', 'ctx', code);
    //return func( {pepito: 1} )

    // TO-DO
    // https://github.com/hacksparrow/safe-eval
    var context = {
      ctx,
      getId,
      visitor: this,
    };
    var evaluated = true;
    // safeEval(code, context);

    return evaluated;
  }

  // funciones asíncronas
 async visit(ctx) {
    if (Array.isArray(ctx)) {
      return await ctx.mapAsyncSequence(async   (child) => child.accept(this));
    } else {
      if (!ctx) throw new Error("ctx is undefined");
      return ctx.accept(this);
    }
  }

    async visitChildren(ctx) {
    if (ctx.children) {
      return   await this.visit(ctx.children);
    } else {
      return null;
    }
  }

 async accept(visitor) {
    return await visitor.visitTerminal(this);
  }
}
