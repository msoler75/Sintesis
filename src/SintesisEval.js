const imprimirCadaLinea = 0;

import Dictionary from "./internals/Dictionary.js";
import List from "./internals/List.js";
import Class from "./internals/Class.js";
import valueOf from "./internals/ValueOf.js";
import Variable from "./internals/Variable.js";
import Function from "./internals/Function.js";
import Instance from "./internals/Instance.js";
import Iterator from "./internals/Iterator.js";
import MemoryRef from "./internals/MemoryRef.js";
import { printObject, printThing, sprintf } from "./utils/Print.js";
import SintesisError from "./SintesisError.js";
import "./internals/ArrayUtilsHacked.js";
// import SintesisSymbolParser from './SintesisSymbolParser.js'
import { SymbolFinder } from "./internals/Symbols.js";
import SintesisParserVisitor from "./lib/SintesisParserVisitor.js";
import { variableCreate, executeListMethod } from "./internals/Factory.js";
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
    this.t = sprintf;
  }

  setTextFunction(tt) {
    this.t = tt;
  }

  // Visit a parse tree produced by SintesisParser#program.
   visitProgram(ctx) {
    // parsea todos los símbolos primero
    // let symbolParser = new SintesisSymbolParser()
    // symbolParser.visitProgram(ctx)

    // prepara la salida
    this.output = "";
    // procesa el programa
     this.visitChildren(ctx);
    // console.log(SymbolFinder.print(ctx))
    return this.output;
  }

  // Visit a parse tree produced by SintesisParser#statementList.
   visitStatementList(ctx) {
    let i = 0;
    while (i < ctx.children.length && !SymbolFinder.functionHasEnded(ctx)) {
      if (imprimirCadaLinea) console.log(ctx.children[i].getText());
       this.visit(ctx.children[i++]);
    }
  }

  // Visit a parse tree produced by SintesisParser#statement.
   visitStatement(ctx) {
    // console.log('statement', ctx.getText())
    return ctx.children.length ?  this.visit(ctx.children[0]) : null;
  }

  // Visit a parse tree produced by SintesisParser#classDeclaration.
   visitClassDeclaration(ctx) {
    return null;
  }

  // Visit a parse tree produced by SintesisParser#functionDeclaration.
   visitFunctionDeclaration(ctx) {
    return null;
  }

   visitAnonymousFunctionDecl(ctx) {
    return ctx.anonymousFunction;
  }

   visitArrowFunction(ctx) {
    return ctx.anonymousFunction;
  }

  // Visit a parse tree produced by SintesisParser#expFunctionExpression.
   visitExpFunctionExpression(ctx) {
    return  this.visit(ctx.children[0]);
  }

  // Visit a parse tree produced by SintesisParser#methodDeclaration.
   visitMethodDeclaration(ctx) {
    return null;
  }

  // Visit a parse tree produced by SintesisParser#expNew.
   visitExpNew(ctx) {
    const id = ctx.id.text;
    let memoryref = SymbolFinder.findSymbol(ctx, id);
    if (!memoryref)
      throw new SintesisError(ctx.id, this.t("no existe la clase '%s'", id));
    if (!(memoryref.variable instanceof Class))
      throw new SintesisError(ctx.id, this.t("'%s' no es una clase", id));
    let obj = new Instance(memoryref.variable);
    let values = ctx.args ?  this.visit(ctx.args) : [];
    if (values) ctx.args.values = values;
    let constructor = obj.getConstructor(values.length);
    if (!constructor)
      throw new SintesisError(
        ctx.args,
        this.t("no existe un método constructor") + " " + values.length
          ? values.length == 1
            ? this.t("con un argumento")
            : this.t("con %d argumentos", values.length)
          : this.t("sin argumentos")
      );
    this.callToFunction(new MemoryRef(obj, constructor.name), ctx.args);
    return new MemoryRef(obj);
  }

  callToFunction(memoryref, ctxArgs) {
    const fn = memoryref.variable;
    const inst = memoryref._variable;
    const ctx = fn.context;
    // console.log('#callToFunction', fn.name)

    // caso de constructores vacíos
    if (!ctx || !ctx.stmt) return;

    // obtenemos los argumentos o parámetros de la función y los valores
    const params = ctx.pl ?  this.visit(ctx.pl) : [];
    const values = ctxArgs ? ctxArgs.values : [];

    if (params.length !== values.length)
      throw new SintesisError(
        ctxArgs,
        (fn.isConstructor
          ? this.t("el constructor")
          : this.t("la función '%s'", fn.name)) +
          " " +
          (params.length
            ? params.length == 1
              ? this.t("requiere un argumento")
              : this.t("requiere %d argumentos", params.length)
            : this.t("no tiene argumentos"))
      );

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
     this.visit(ctx.stmt);

    const r = SymbolFinder.getReturnValue(ctx);

    // restauramos nivel de pila
    SymbolFinder.popStack(ctx);

    if (fn.class && inst instanceof Instance)
      SymbolFinder.popStack(fn.class.context, inst);

    return r;
  }

  // Visit a parse tree produced by SintesisParser#returnStatement.
   visitReturnStatement(ctx) {
    if (!SymbolFinder.insideFunction(ctx))
      throw new SintesisError(
        ctx,
        this.t("se ha intentado retornar sin estar dentro de función o método")
      );
    let r = ctx.exp ?  this.visit(ctx.exp) : null;
    // r = valueOf(r)
    SymbolFinder.setReturnValue(ctx, r);
    return r;
  }

  // Visit a parse tree produced by SintesisParser#expMemberIndex.
   visitExpMemberIndex(ctx) {
    const logC = ctx.getText();
    const logM = ctx.mem.getText();

    // console.log(logC)

    // obtenemos la referencia al miembro
    let memoryref =  this.visit(ctx.mem);
    if (!memoryref || !(memoryref instanceof MemoryRef))
      throw new SintesisError(ctx.mem, this.t("operador izquierdo inválido"));

    // comprobamos accesibilidad de atributos métodos
    if (!SymbolFinder.canAccess(memoryref, ctx))
      throw new SintesisError(ctx.mem, this.t("acceso no permitido"));

    // obtenemos el índice
    let index =  this.visit(ctx.idx);
    index = valueOf(index);
    if (index == undefined)
      throw new SintesisError(ctx.idx, this.t("índice no válido"));

    // si no existe la variable de referencia, creamos la variable dinámicamente
    // to-do: mover este código a memoryref.assign ??
    if (!memoryref._variable) {
      let v = typeof index === "number" ? new List() : new Dictionary();
      memoryref.assign(v);
    }

    // es un tipo de datos válido? List / Dictionary
    if (!memoryref || !memoryref.variable || !memoryref.variable.getMemberRef)
      throw new SintesisError(
        ctx.mem,
        this.t("operador izquierdo no es un tipo válido")
      );

    let ref = memoryref.variable;
    if (!ref) throw new SintesisError(ctx.idx, this.t("no encontrado"));
    // comprobamos si existe la referencia
    try {
      ref = ref.getMemberRef(index, !!this.createIndexIfNotExists);
    } catch (err) {
      if (typeof index !== "string") throw new SintesisError(ctx.idx, err);
      ref = null;
    }

    // si no existe el índice retornaremos null
    ref = ref ? new MemoryRef(memoryref.variable, index) : null;

    if (!ref && ctx.args)
      throw new SintesisError(
        ctx.idx,
        this.t("'%s' no es un método válido", index)
      );

    // comprobamos accesibilidad de atributos métodos
    if (ref && !SymbolFinder.canAccess(ref, ctx))
      throw new SintesisError(ctx.idx, this.t("acceso no permitido"));

    // si no es una llamada a un método, devolvemos el valor
    if (!ctx.args || !ref) return ref;

    // sí es una llamada a un método

    // preparamos argumentos
    let values = ctx.args ?  this.visit(ctx.args) : [];
    if (values) ctx.args.values = values;

    if (ref._variable instanceof List) {
      try {
        const result = executeListMethod(ctx.idx, ref, index, values);
        return result;
      } catch (err) {
        throw new SintesisError(ctx.idx, err.message);
      }
    }

    // comprobamos el tipo
    if (!(ref.variable instanceof Function))
      throw new SintesisError(
        ctx.mem,
        this.t("'%s' no se ha encontrado", index)
      );

    return this.callToFunction(ref, ctx.args);
  }

  // Visit a parse tree produced by SintesisParser#expMemberDot.
   visitExpMemberDot(ctx) {
    return  this.visitExpMemberIndex(ctx);
  }

  // Visit a parse tree produced by SintesisParser#expMemberFunc.
   visitExpMemberFunc(ctx) {
    if (!ctx) throw new Error("ctx is undefined");
    const logC = ctx.getText();
    const memoryref =  this.visit(ctx.mem);
    if (!memoryref)
      throw new SintesisError(ctx.mem, this.t("función no encontrada"));

    let values = ctx.args ?  this.visit(ctx.args) : [];
    if (values) ctx.args.values = values;
    let obj = memoryref.variable;
    if (obj instanceof Instance) {
      let met = obj.getConstructor(values ? values.length : 0);
      return this.callToFunction(new MemoryRef(obj, met.name), ctx.args);
    }
    if (!(obj instanceof Function))
      throw new SintesisError(ctx.mem, this.t("función no encontrada"));
    return this.callToFunction(memoryref, ctx.args);
  }

  // Visit a parse tree produced by SintesisParser#memberIdentifier.
   visitMemberIdentifier(ctx) {
    return ctx.children[0].getText();
  }

   visitMember(ctx) {
    console.log("member", ctx);
  }

  // Visit a parse tree produced by SintesisParser#expAssignment.
   visitExpAssignment(ctx) {
    this.createIndexIfNotExists = true;
    const logC = ctx.getText();
    const logD = ctx.dest.getText();
    const logE = ctx.exp.getText();

    // console.log(logC)
    let memoryref =  this.visit(ctx.dest);
    this.createIndexIfNotExists = false;

    if (
      !memoryref ||
      !(memoryref instanceof MemoryRef) ||
      memoryref._variable instanceof Error
    )
      throw new SintesisError(
        ctx.dest,
        this.t("el operador izquierdo de asignación es inválido")
      );

    let result =  this.visit(ctx.exp);
    // const r = valueOf(result)
    memoryref.assign(result);
    return memoryref;
  }

  // Visit a parse tree produced by SintesisParser#listIndex.
   visitListIndex(ctx) {
    let items = ctx.children.filter(
      (x) => x.constructor.name !== "TerminalNodeImpl"
    );
    return items.length ?  this.visit(items[0]) : null;
  }

   visitListDeclaration(ctx) {
    var literalList = ctx.exp ? valueOf( this.visit(ctx.exp)) : null;
    if (literalList && literalList instanceof List) return literalList;
    return new List();
  }

   visitExpNumberOf(ctx) {
    var value = valueOf( this.visit(ctx.exp));
    if (!value) return 0;
    if (typeof value !== "object")
      throw new SintesisError(ctx.exp, this.t("tipo incorrecto"));
    if (Array.isArray(value)) {
      let list = new List(value);
      return list.size();
    }
    let map = new Dictionary(value);
    return map.size();
  }

   visitExpIn(ctx) {
    const key = valueOf( this.visit(ctx.key));
    const obj = valueOf( this.visit(ctx.dest));
    if (typeof obj !== "object")
      return new SintesisError(ctx.dest, this.t("tipo incorrecto"));
    return key in obj;
  }

  // Visit a parse tree produced by SintesisParser#expAssignmentOperator.
   visitExpAssignmentOperator(ctx) {
    const memoryref =  this.visit(ctx.dest);
    this.allowSymbolNotFound = false;
    if (!memoryref)
      throw new SintesisError(ctx.dest, this.t("símbolo no encontrado"));
    if (!(memoryref instanceof MemoryRef))
      throw new SintesisError(
        ctx.dest,
        this.t("operador izquierdo no es válido")
      );
    let e1 = valueOf(memoryref);
    let e2 = valueOf( this.visit(ctx.exp));
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
    if (
      typeof e1 === "object" ||
      typeof e2 === "object" ||
      Array.isArray(e1) ||
      Array.isArray(e2)
    )
      throw new SintesisError(ctx, this.t("tipos incompatibles"));
    return e1 + e2;
  }

  // Visit a parse tree produced by SintesisParser#expOp.
   visitExpOp(ctx) {
    let e1 = valueOf( this.visit(ctx.e1));
    let e2 = valueOf( this.visit(ctx.e2));
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
   visitExpMath(ctx) {
    const funcname = ctx.fn.text;
    const args =  this.visit(ctx.args);
    if (!(funcname in Math))
      throw new SintesisError(ctx.fn, this.t("no existe este método"));
    return Math[funcname].apply(this, args);
  }

  // Visit a parse tree produced by SintesisParser#ifStatement.
   visitIfStatement(ctx) {
    if (valueOf( this.visit(ctx.exp))) {
      return  this.visitChildren(ctx.stmt);
    } else if (ctx.elseifs) {
      for (const cs of ctx.elseifs.children) {
        if (valueOf( this.visit(cs.exp))) return  this.visitChildren(cs.stmt);
      }
    }
    if (ctx.elsestmt_) return  this.visit(ctx.elsestmt_);
  }

  // Visit a parse tree produced by SintesisParser#repeatStatement.
   visitRepeatStatement(ctx) {
    const n = valueOf( this.visit(ctx.exp));
    if (n) for (var i = 0; i < n; i++)  this.visit(ctx.stmt);
  }

  // Visit a parse tree produced by SintesisParser#repeatWhileStatement.
   visitRepeatWhileStatement(ctx) {
    do  this.visit(ctx.stmt);
    while (valueOf( this.visit(ctx.exp)));
  }

  // Visit a parse tree produced by SintesisParser#whileRepeatStatement.
   visitWhileRepeatStatement(ctx) {
    while (valueOf( this.visit(ctx.exp)))  this.visit(ctx.stmt);
  }

  // Visit a parse tree produced by SintesisParser#forEachStatement.
   visitForEachStatement(ctx) {
    const iter = ctx.iter;
    const value_id = iter.idv ? iter.idv.text : null;
    const index_id = iter.idk ? iter.idk.text : null;
    const collection =  this.visit(iter.coll);

    if (!Iterator.iterable(collection))
      throw new SintesisError(ctx.coll, this.t("el valor no es iterable"));

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
         this.visit(ctx.stmt);
        iterator.next();
      }
    }
  }

  // Visit a parse tree produced by SintesisParser#forEachStatement2.
   visitForEachStatement2(ctx) {
    return  this.visitForEachStatement(ctx);
  }

  // Visit a parse tree produced by SintesisParser#forFromToStatement.
   visitForFromToStatement(ctx) {
    const iter = ctx.iter;
    const from = valueOf( this.visit(iter.start));
    const end = valueOf( this.visit(iter.to));
    const id_iterator = iter.id.getText();

    let mem_index = SymbolFinder.findSymbol(ctx, id_iterator);
    mem_index.assign(from);
    var val = valueOf(mem_index.variable);
    while ((from < end && val <= end) || (from > end && val >= end)) {
       this.visit(ctx.stmt);
      mem_index.increment(from < end ? 1 : -1);
      val = valueOf(mem_index.variable);
    }
  }

  // Visit a parse tree produced by SintesisParser#forFromToStatement2.
   visitForFromToStatement2(ctx) {
    return  this.visitForFromToStatement(ctx);
  }

  // Visit a parse tree produced by SintesisParser#forClassic.
   visitForClassic(ctx) {
    if (ctx.pre)  this.visit(ctx.pre);
    let continuar = ctx.exp ? valueOf( this.visit(ctx.exp)) : [true];
    while (continuar[continuar.length - 1]) {
      if (ctx.stmt)  this.visit(ctx.stmt);
      if (ctx.post)  this.visit(ctx.post);
      continuar = ctx.exp ? valueOf( this.visit(ctx.exp)) : [true];
    }
  }

  // Visit a parse tree produced by SintesisParser#expBasicFunction.
   visitExpBasicFunction(ctx) {
    const args =  this.visit(ctx.args);
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
          args =  this.visit(ctx.args);
        }
        return args[0] && args[0] instanceof Dictionary
          ? args[0]
          : new Dictionary();
      }
      case "NumberOfContext":
        if (args.length < 1)
          throw new SintesisError(
            ctx.args,
            this.t("debe especificar un argumento")
          );
        if ((t0 !== "string") & (t0 !== "object"))
          throw new SintesisError(
            ctx.args.children[1],
            this.t("tipo incorrecto")
          );
        const v = Array.isArray(a0)
          ? new List(a0)
          : t0 === "object"
          ? new Dictionary(a0)
          : a0;
        return v instanceof Variable ? v.size() : v.length;
      case "IndexOfContext":
        if (args.length < 2)
          throw new SintesisError(
            ctx.args,
            this.t("debe especificar dos argumentos")
          );
        if (t0 !== "string" && !Array.isArray(a0) && t0 !== "object")
          throw new SintesisError(
            ctx.args.children[1],
            this.t("tipo incorrecto")
          );
        return t0 === "object"
          ? new Dictionary(a0).indexOf(a1)
          : a0.indexOf(a1);
      case "ConvertContext":
        if (args.length < 2)
          throw new SintesisError(
            ctx.args,
            this.t("debe especificar dos argumentos")
          );
        if (t1 !== "string")
          throw new SintesisError(
            ctx.args.children[3],
            this.t("tipo incorrecto")
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
          throw new SintesisError(
            ctx.args.children[3],
            this.t("tipo incorrecto")
          );
        throw new SintesisError(
          ctx.args.children[1],
          this.t("no se pudo convertir")
        );

      case "SubContext":
        if (args.length < 2)
          throw new SintesisError(
            ctx.args,
            this.t("debe especificar al menos dos argumentos")
          );
        if (t0 !== "string" && !Array.isArray(a0))
          throw new SintesisError(
            ctx.args.children[1],
            this.t("tipo incorrecto")
          );
        let start = a1;
        let end = a2;
        if (t1 !== "number")
          throw new SintesisError(
            ctx.args.children[3],
            this.t("tipo incorrecto")
          );
        if (start < 0)
          throw new SintesisError(
            ctx.args.children[3],
            "No puede ser negativo"
          );
        if (end && typeof end !== "number")
          throw new SintesisError(
            ctx.args.children[5],
            this.t("tipo incorrecto")
          );
        if (Array.isArray(a0)) return a0.slice(start, end);
        return a0.substring(start, end);
      case "LowerContext":
      case "UpperContext":
        if (args.length < 1)
          throw new SintesisError(
            ctx.args,
            this.t("debe especificar un argumento")
          );
        if (t0 !== "string")
          throw new SintesisError(
            ctx.args.children[1],
            this.t("tipo incorrecto")
          );
        return fn == "LowerContext" ? a0.toLowerCase() : a0.toUpperCase();
      case "MinContext":
      case "MaxContext":
        if (args.length < 1)
          throw new SintesisError(
            ctx.args,
            this.t("debe especificar al menos un argumento")
          );
        for (var i in args) {
          var arg = valueOf(args[i]);
          if (typeof arg !== "number")
            throw new SintesisError(
              ctx.args.children[1 + i * 2],
              this.t("tipo incorrecto")
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
          throw new SintesisError(
            ctx.args,
            this.t("debe especificar un argumento")
          );
        if (t0 !== "string")
          throw new SintesisError(
            ctx.args.children[1],
            this.t("tipo incorrecto")
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
          throw new SintesisError(
            ctx.args,
            this.t("debe especificar un argumento")
          );
        if (t0 !== "number")
          throw new SintesisError(
            ctx.args.children[1],
            this.t("tipo incorrecto")
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
   visitExpMemberMethod(ctx) {
    return  this.visitChildren(ctx);
  }

  // Visit a parse tree produced by SintesisParser#expTernary.
   visitExpTernary(ctx) {
    let cond = valueOf( this.visit(ctx.cond));
    if (cond) return  this.visit(ctx.ok);
    return  this.visit(ctx.no);
  }

  // Visit a parse tree produced by SintesisParser#formalParameterList.
   visitFormalParameterList(ctx) {
    ctx.params = [];
    for (let i = 0; i < ctx.children.length; i++)
      if (i % 2 == 0) ctx.params.push(ctx.children[i].getText());
    return ctx.params;
  }

   visitArrowFunctionParameters(ctx) {
    if (ctx.children.length == 3)
      // formalListParameters
      return  this.visit(ctx.children[1]);
    else {
      const params =  this.visitChildren(ctx);
      if (!params || !params[0]) return [];
      return params;
    }
  }

  // Visit a parse tree produced by SintesisParser#arguments.
   visitArguments(ctx) {
    const values = [];
    if (ctx.children.length > 2)
      for (let i = 1; i < ctx.children.length; i++)
        if (i % 2 == 1) values.push( this.visit(ctx.children[i]));
    return values;
  }

  // Visit a parse tree produced by SintesisParser#expMember.
   visitExpMember(ctx) {
    return ctx.children.length
      ?  this.visit(ctx.children[0])
      :  this.visitChildren(ctx);
  }

  // Visit a parse tree produced by SintesisParser#expIdentifier.
   visitExpIdentifier(ctx) {
    const id = getId(ctx);
    // console.log('#visitExpIdentifier', id)
    // console.log('ID', id)
    const memoryref = SymbolFinder.findSymbol(ctx, id);
    // comprobamos accesibilidad de atributos métodos
    if (!SymbolFinder.canAccess(memoryref, ctx))
      throw new SintesisError(ctx, this.t("acceso no permitido"));
    // console.log('EXPIDER', memoryref)
    return memoryref;
  }

  // Visit a parse tree produced by SintesisParser#expIdentifier.
   visitExpReservedIdentifier(ctx) {
    const id = ctx.getText();
    // console.log('#visitExpIdentifier', id)
    // console.log('ID', id)
    const memoryref = SymbolFinder.findSymbol(ctx, id);
    // comprobamos accesibilidad de atributos métodos
    if (!SymbolFinder.canAccess(memoryref, ctx))
      throw new SintesisError(ctx, this.t("acceso no permitido"));
    // console.log('EXPIDER', memoryref)
    return memoryref;
  }
  // Visit a parse tree produced by SintesisParser#variableDeclaration.
   visitVariableDeclaration(ctx) {
    const id = ctx.children[0].getText();
    let mem_id = SymbolFinder.findSymbol(ctx, id);
    if (ctx.exp) {
      let result =  this.visit(ctx.exp);
      mem_id.assign(result);
    }
    return mem_id;
  }

   visitExpAttributes(ctx) {
    // console.log('#visitExpAttributes')
    if (!SymbolFinder.insideClass(ctx))
      throw new SintesisError(ctx, this.t("referencia fuera de clase"));
    const s = SymbolFinder.findSymbol(ctx, "___attributes");
    // console.log(s)
    // console.log(printObject(s))
    return s;
  }

   visitExpMethods(ctx) {
    if (!SymbolFinder.insideClass(ctx))
      throw new SintesisError(ctx, this.t("referencia fuera de clase"));
    return SymbolFinder.findSymbol(ctx, "___methods");
  }

  // Visit a parse tree produced by SintesisParser#expSuper.
   visitExpSuper(ctx) {
    const class_ctx = SymbolFinder.getClassContext(ctx);
    if (!class_ctx)
      throw new SintesisError(ctx, this.t("referencia fuera de clase"));
    if (!class_ctx.symbolTable.class.superClass)
      throw new SintesisError(
        ctx,
        this.t("no existe clase padre de esta clase")
      );
    return class_ctx.symbolTable.getRef("___super");
  }

  // Visit a parse tree produced by SintesisParser#identifierName.
   visitIdentifierName(ctx) {
    return getId(ctx);
  }

  // Visit a parse tree produced by SintesisParser#identifierName.
   visitIdentifier(ctx) {
    return getId(ctx);
  }

  // Visit a parse tree produced by SintesisParser#functionBody.
   visitFunctionBody(ctx) {
    return ctx.children.length
      ?  this.visit(ctx.children[0])
      :  this.visitChildren(ctx);
  }

  // Visit a parse tree produced by SintesisParser#printStatement.
   visitPrintStatement(ctx) {
    // console.log(ctx.getText())
    let args =  this.visit(ctx.exp);
    // console.log('PRINT ARGS', args)
    args = args.filter((x) => x !== undefined);
    let result = [];
    for (let r of args) {
      r = printThing(r);
      r = "" + r;
      result.push(r);
      // console.log('print '+r)
    }
    let str = result.join(" ").replace(/\\n/g, "\n");
    this.output += str + "\n";
    // console.log('PRINTING', r);
    return str;
  }

  /*                                                                                  visitStepStatement(ctx) {
    return                                                                                  this.visitChildren(ctx)
  } */

  // Visit a parse tree produced by SintesisParser#expLiteral.
   visitExpLiteral(ctx) {
    return ctx.children.length
      ?  this.visit(ctx.children[0])
      :  this.visitChildren(ctx);
  }

  // Visit a parse tree produced by SintesisParser#literal.
   visitLiteral(ctx) {
    return ctx.children.length
      ?  this.visit(ctx.children[0])
      :  this.visitChildren(ctx);
  }

  // Visit a parse tree produced by SintesisParser#booleanLiteral.
   visitBooleanLiteral(ctx) {
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
   visitStringLiteral(ctx) {
    let str = ctx.children[0].getText();
    str = str.substr(1, str.length - 2);
    return str;
  }

  // Visit a parse tree produced by SintesisParser#listLiteral.
   visitListLiteral(ctx) {
    var items = ctx.children.filter(
      (x) => x.constructor.name !== "TerminalNodeImpl"
    );
    var values =   items.mapAsyncSequence((x) => {
      return  this.visit(x);
    });
    return new List(values);
  }

  // Visit a parse tree produced by SintesisParser#objectLiteral.
   visitObjectLiteral(ctx) {
    // var m = new Dictionary()
    var obj = {};
    var key = undefined;
    var items = ctx.children.filter(
      (x) => x.constructor.name !== "TerminalNodeImpl"
    ); 
     items.mapAsyncSequence((x) => {
      switch (x.constructor.name) {
        case "ObjectKeyContext":
          const keyContext = x.children[0];
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
              key =  this.visit(keyContext);
              break;
          }
          break;
        default:
          //m.setValue(key,
          if (key === undefined)
            throw new SintesisError(x, this.t("tipo o formato incorrecto"));
          if (key === null)
            throw new SintesisError(x, this.t("la clave no puede ser nula"));
          obj[key] =  this.visit(x);
          break;
      }
    });
    return new Dictionary(obj);
  }

   visitNullLiteral(ctx) {
    return null;
  }

   visitExpDelete(ctx) {
    const memoryref =  this.visit(ctx.dest);
    const obj = valueOf(memoryref._variable);
    if (typeof obj !== "object")
      return new SintesisError(ctx.dest, this.t("tipo incorrecto"));
    return delete memoryref._variable.value[memoryref._index];
  }

  // Visit a parse tree produced by SintesisParser#expNot.
   visitExpNot(ctx) {
    return !valueOf( this.visit(ctx.dest));
  }

  // Visit a parse tree produced by SintesisParser#expBitNot.
   visitExpBitNot(ctx) {
    return ~valueOf( this.visit(ctx.dest));
  }

  // pre indica si es pre incremento (++i) o post incremento  (i++)
   visitExpIncrement(ctx, pre, inc) {
    // const logD = ctx.dest.getText()
    var memoryref =  this.visit(ctx.dest);
    memoryref = memoryref;
    if (!memoryref)
      throw new SintesisError(ctx.dest, this.t("símbolo no encontrado"));
    if (!(memoryref instanceof MemoryRef))
      throw new SintesisError(
        ctx.dest,
        this.t("operador izquierdo de '%s' es inválido", ctx.op.text)
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
   visitExpPreIncrement(ctx) {
    const inc = ctx.op.text == "++" ? 1 : -1;
    return  this.visitExpIncrement(ctx, true, inc);
  }

  // Visit a parse tree produced by SintesisParser#expPostIncrement.
   visitExpPostIncrement(ctx) {
    const inc = ctx.op.text == "++" ? 1 : -1;
    return  this.visitExpIncrement(ctx, false, inc);
  }

  // Visit a parse tree produced by SintesisParser#expUnaryMinus.
   visitExpUnaryMinus(ctx) {
    const value = valueOf( this.visit(ctx.dest));
    return -value;
  }

  // Visit a parse tree produced by SintesisParser#expUnaryPlus.
   visitExpUnaryPlus(ctx) {
    return valueOf( this.visit(ctx.dest));
  }

  // Visit a parse tree produced by SintesisParser#numericLiteral.
   visitNumericLiteral(ctx) {
    let r = ctx.children[0].getText();
    if (r.indexOf(".") >= 0) return parseFloat(r);
    return parseInt(r);
  }

  // Visit a parse tree produced by SintesisParser#expParenthesis.
   visitExpParenthesis(ctx) {
    return valueOf( this.visit(ctx.exp));
  }

  // Visit a parse tree produced by SintesisParser#expParenthesis.
   visitExpJavascript(ctx) {
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
  visit(ctx) {
    if (Array.isArray(ctx)) {
      return  ctx.mapAsyncSequence( (child) => child.accept(this));
    } else {
      if (!ctx) throw new Error("ctx is undefined");
      return ctx.accept(this);
    }
  }

   visitChildren(ctx) {
    if (ctx.children) {
      return  this.visit(ctx.children);
    } else {
      return null;
    }
  }

  accept(visitor) {
    return  visitor.visitTerminal(this);
  }
}
