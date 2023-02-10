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
import { printObject, printThing } from "./utils/Print.js";
import SintesisError from "./SintesisError.js";
import "./internals/ArrayUtils.js";
// import SintesisSymbolParser from './SintesisSymbolParser.js'
import { SymbolFinder } from "./internals/Symbols.js";
import SintesisParserVisitor from "./lib/SintesisParserVisitor.js";
import { variableCreate } from "./internals/Factory.js";
import getId from "./internals/GetId.js";

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
    //return                            await this.visitChildren(ctx);
  }

  // Visit a parse tree produced by SintesisParser#classDeclaration.
    async visitClassDeclaration(ctx) {
    return null;
  }

  // Visit a parse tree produced by SintesisParser#functionDeclaration.
    async visitFunctionDeclaration(ctx) {
    return null;
  }

  // Visit a parse tree produced by SintesisParser#methodDeclaration.
    async visitMethodDeclaration(ctx) {
    return null;
  }

  // Visit a parse tree produced by SintesisParser#expNew.
    async visitExpNew(ctx) {
    const id = ctx.id.text;
    let memoryref = SymbolFinder.findSymbol(ctx, id);
    if (!memoryref) throw new SintesisError(ctx.id, `No existe la clase ${id}`);
    if (!(memoryref.variable instanceof Class))
      throw new SintesisError(ctx.id, "${id} no es una clase");
    let obj = new Instance(memoryref.variable);
    let values = ctx.args ?   await this.visit(ctx.args).values : [];
    if (values) ctx.args.values = values;
    let constructor = obj.getConstructor(values.length);
    if (!constructor)
      throw new SintesisError(
        ctx.args,
        `No existe un método constructor ` +
          (values.length
            ? `con ${values.length} parámetro${values.length !== 1 ? "s" : ""}`
            : `sin parámetros`)
      );
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
    const params = ctx.pl ?   await this.visit(ctx.pl).params : [];
    const values = ctxArgs ? ctxArgs.values : [];

    if (params.length !== values.length)
      throw new SintesisError(
        ctxArgs,
        (fn.isConstructor ? `El constructor ` : `La función ${fn.name} `) +
          (params.length
            ? `requiere ${params.length} argumentos`
            : `no tiene parámetros`)
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
      throw new SintesisError(
        ctx,
        "Se ha intentado retornar sin estar dentro de función o método"
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
    if (!memoryref || !(memoryref instanceof MemoryRef))
      throw new SintesisError(ctx.mem, "Operador izquierdo inválido");

    // comprobamos accesibilidad de atributos métodos
    if (!SymbolFinder.canAccess(memoryref, ctx))
      throw new SintesisError(ctx.mem, "Acceso no permitido");

    // obtenemos el índice
    let index =   await this.visit(ctx.idx);
    index = valueOf(index);
    if (index == undefined)
      throw new SintesisError(ctx.idx, "Índice no válido");

    // si no existe la variable de referencia, creamos la variable dinámicamente
    // to-do: mover este código a memoryref.assign ??
    if (!memoryref._variable) {
      let v = typeof index === "number" ? new List() : new Dictionary();
      memoryref.assign(v);
    }

    // es un tipo de datos válido? List / Dictionary
    if (!memoryref || !memoryref.variable || !memoryref.variable.getRef)
      throw new SintesisError(
        ctx.mem,
        "Operador izquierdo no es un tipo válido"
      );

    let ref = memoryref.variable;
    if (!ref) throw new SintesisError(ctx.idx, "No encontrado");
    // comprobamos si existe la referencia
    ref = ref.getRef(index, !!this.createIndexIfNotExists);

    // si no existe el índice retornaremos null
    ref = ref ? new MemoryRef(memoryref.variable, index) : null;

    if (!ref && ctx.args)
      throw new SintesisError(ctx.idx, index + " no es una función válida");

    // comprobamos accesibilidad de atributos métodos
    if (ref && !SymbolFinder.canAccess(ref, ctx))
      throw new SintesisError(ctx.idx, "Acceso no permitido");

    // si no es una llamada a un método, devolvemos el valor
    if (!ctx.args || !ref) return ref;

    // sí es una llamada a un método

    // comprobamos el tipo
    if (!(ref.variable instanceof Function))
      throw new SintesisError(ctx.mem, `${index} no es una función`);

    // preparamos argumentos
    let values = ctx.args ?   await this.visit(ctx.args).values : [];
    if (values) ctx.args.values = values;
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
    if (!memoryref) throw new SintesisError(ctx.mem, "Función no encontrada");

    let values = ctx.args ?   await this.visit(ctx.args).values : [];
    if (values) ctx.args.values = values;
    let obj = memoryref.variable;
    if (obj instanceof Instance) {
      let met = obj.getConstructor(values ? values.length : 0);
      return this.callToFunction(new MemoryRef(obj, met.name), ctx.args);
    }
    if (!(obj instanceof Function))
      throw new SintesisError(ctx.mem, "Función no encontrada");
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
      throw new SintesisError(
        ctx.dest,
        "El operador izquierdo de asignación es inválido"
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
    var literalList = ctx.exp ?  await this.visit(ctx.exp) : null;
    if(literalList && literalList instanceof List) 
      return literalList
    return new List();
  }

    async visitExpNumberOf(ctx) {
    var value =   await this.visit(ctx.exp);
    if (!value) return 0;
    if (typeof value !== "object")
      throw new SintesisError(ctx.exp, "Tipo incorrecto");
    if (Array.isArray(value)) {
      let list = new List(value);
      return list.size();
    }
    let map = new Dictionary(value);
    return map.size();
  }

  // Visit a parse tree produced by SintesisParser#expAssignmentOperator.
    async visitExpAssignmentOperator(ctx) {
    const memoryref =   await this.visit(ctx.dest);
    this.allowSymbolNotFound = false;
    if (!memoryref) throw new SintesisError(ctx.dest, `Símbolo no encontrado`);
    if (!(memoryref instanceof MemoryRef))
      throw new SintesisError(ctx.dest, `Operador izquierdo es inválido`);
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
        e1 = this.addOp(e1, e2);
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

  addOp(e1, e2) {
    if (Array.isArray(e1) && Array.isArray(e2)) return e1.concat(e2);
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
        e1 = this.addOp(e1, e2);
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

  // Visit a parse tree produced by SintesisParser#expConcat.
  /*                           async visitExpConcat(ctx) {
    let e1 =                            await this.visit(ctx.e1)
    let e2 =                            await this.visit(ctx.e2)
    return e1 + ' ' + e2
  } */

  // Visit a parse tree produced by SintesisParser#expMath.
    async visitExpMath(ctx) {
    const funcname = ctx.fn.text;
    const args =   await this.visit(ctx.args).values;
    if (!(funcname in Math))
      throw new SintesisError(ctx.fn, "No existe esta función");
    return Math[funcname].apply(this, args);
  }

  // Visit a parse tree produced by SintesisParser#ifStatement.
    async visitIfStatement(ctx) {
    if (valueOf(  await this.visit(ctx.exp))) {
      return   await this.visitChildren(ctx.stmt);
    } else if (ctx.elseifs) {
      for (const cs of ctx.elseifs.children) {
        if (valueOf(  await this.visit(cs.exp)))
          return   await this.visitChildren(cs.stmt);
      }
    }
    if (ctx.elsestmt_) return   await this.visit(ctx.elsestmt_);
  }

  // Visit a parse tree produced by SintesisParser#repeatStatement.
    async visitRepeatStatement(ctx) {
    const n =   await this.visit(ctx.exp);
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
      throw new SintesisError(ctx.coll, `El valor no es iterable`);

    let iterator = new Iterator(collection);

    if (iterator.size) {
      // TO-DO aquí no debería añadir el símbolo, eso ya se hizo en el SintesisSymbolParser
      let mem_idx = index_id
        ? SymbolFinder.addVariable(ctx, index_id, new Variable(iterator.index))
        : null;
      let mem_item = SymbolFinder.addVariable(
        ctx,
        value_id,
        new Variable(iterator.current)
      );
      //
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
    const args =   await this.visit(ctx.args).values;
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
          args =   await this.visit(ctx.args).values;
        }
        return args[0] && args[0] instanceof Dictionary ? args[0] : new Dictionary();
      }
      case "NumberOfContext":
        if (args.length < 1)
          throw new SintesisError(ctx.args, "Debe especificar un argumento");
        if ((t0 !== "string") & (t0 !== "object"))
          throw new SintesisError(ctx.args.children[1], "Tipo incorrecto");
        const v = Array.isArray(a0)
          ? new List(a0)
          : t0 === "object"
          ? new Dictionary(a0)
          : a0;
        return v instanceof Variable ? v.size() : v.length;
      case "IndexOfContext":
        if (args.length < 2)
          throw new SintesisError(ctx.args, "Debe especificar dos argumentos");
        if (t0 !== "string" && !Array.isArray(a0) && t0 !== "object")
          throw new SintesisError(ctx.args.children[1], "Tipo incorrecto");
        return t0 === "object" ? new Dictionary(a0).indexOf(a1) : a0.indexOf(a1);
      case "ConvertContext":
        if (args.length < 2)
          throw new SintesisError(ctx.args, "Debe especificar dos argumentos");
        if (t1 !== "string")
          throw new SintesisError(ctx.args.children[3], "Tipo incorrecto");
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
        } else throw new SintesisError(ctx.args.children[3], "Tipo incorrecto");
        throw new SintesisError(ctx.args.children[1], "No se pudo convertir");

      case "SubContext":
        if (args.length < 2)
          throw new SintesisError(
            ctx.args,
            "Debe especificar al menos dos argumentos"
          );
        if (t0 !== "string" && !Array.isArray(a0))
          throw new SintesisError(ctx.args.children[1], "Tipo incorrecto");
        let start = a1;
        let end = a2;
        if (t1 !== "number")
          throw new SintesisError(ctx.args.children[3], "Tipo incorrecto");
        if (start < 0)
          throw new SintesisError(
            ctx.args.children[3],
            "No puede ser negativo"
          );
        if (end && typeof end !== "number")
          throw new SintesisError(ctx.args.children[5], "Tipo incorrecto");
        if (Array.isArray(a0)) return a0.slice(start, end);
        return a0.substring(start, end);
      case "LowerContext":
      case "UpperContext":
        if (args.length < 1)
          throw new SintesisError(ctx.args, "Debe especificar un argumento");
        if (t0 !== "string")
          throw new SintesisError(ctx.args.children[1], "Tipo incorrecto");
        return fn == "LowerContext" ? a0.toLowerCase() : a0.toUpperCase();
      case "MinContext":
      case "MaxContext":
        if (args.length < 1)
          throw new SintesisError(
            ctx.args,
            "Debe especificar al menos un argumento"
          );
        for (var i in args) {
          var arg = valueOf(args[i]);
          if (typeof arg !== "number")
            throw new SintesisError(
              ctx.args.children[1 + i * 2],
              "Tipo incorrecto"
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
          throw new SintesisError(ctx.args, "Debe especificar un argumento");
        if (t0 !== "string")
          throw new SintesisError(ctx.args.children[1], "Tipo incorrecto");
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
          throw new SintesisError(ctx.args, "Debe especificar un argumento");
        if (t0 !== "number")
          throw new SintesisError(ctx.args.children[1], "Tipo incorrecto");
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
    return ctx;
  }

  // Visit a parse tree produced by SintesisParser#arguments.
    async visitArguments(ctx) {
    ctx.values = [];
    if (ctx.children.length > 2)
      for (let i = 1; i < ctx.children.length; i++)
        if (i % 2 == 1) ctx.values.push(  await this.visit(ctx.children[i]));
    return ctx;
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
      throw new SintesisError(ctx, "Acceso no permitido");
    // console.log('EXPIDER', memoryref)
    return memoryref;
  }

  // Visit a parse tree produced by SintesisParser#expVar.
  /*                           async visitExpVar(ctx) {
    const id = ctx.id.getText()
    let mem_id = SymbolFinder.findSymbol(ctx, id)
    if (ctx.exp) {
      let result =                            await this.visit(ctx.exp)
      mem_id.assign(result)
    }
    return mem_id
  }*/

  // Visit a parse tree produced by SintesisParser#variableDeclaration.
    async visitVariableDeclaration(ctx) {
    // return                            await this.visitExpVar(ctx)
    const id = ctx.dest.getText();
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
      throw new SintesisError(ctx, `Referencia fuera de Clase`);
    const s = SymbolFinder.findSymbol(ctx, "___attributes");
    // console.log(s)
    // console.log(printObject(s))
    return s;
  }

    async visitExpMethods(ctx) {
    if (!SymbolFinder.insideClass(ctx))
      throw new SintesisError(ctx, `Referencia fuera de Clase`);
    return SymbolFinder.findSymbol(ctx, "___methods");
  }

  // Visit a parse tree produced by SintesisParser#expSuper.
    async visitExpSuper(ctx) {
    const class_ctx = SymbolFinder.getClassContext(ctx);
    if (!class_ctx) throw new SintesisError(ctx, "Referencia fuera de clase");
    if (!class_ctx.symbolTable.class.superClass)
      throw new SintesisError(ctx, "No existe clase padre de esta clase");
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
    let str = result.join(" ").replace(/\\n/g, "\n");
    this.output += str + "\n";
    // console.log('PRINTING', r);
    return str;
  }

  /*                            async visitStepStatement(ctx) {
    return                            await this.visitChildren(ctx)
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

  // Visit a parse tree produced by SintesisParser#listLiteral.
    async visitListLiteral(ctx) {
    var items = ctx.children.filter(
      (x) => x.constructor.name !== "TerminalNodeImpl"
    );
    var values = await     items.mapAsyncSequence(async(x) => {
      return   await this.visit(x);
    });
    return new List(values);
  }

  // Visit a parse tree produced by SintesisParser#objectLiteral.
    async visitObjectLiteral(ctx) {
    // var m = new Dictionary()
    var obj = {};
    var key = "";
    var items = ctx.children.filter(
      (x) => x.constructor.name !== "TerminalNodeImpl"
    ); 
await       items.mapAsyncSequence(async(x) => {
      switch (x.constructor.name) {
        case "IdentifierContext":
        case "IdContext":
        case "KeywContext":
          key = getId(x);
          break;
        default:
          //m.setValue(key,                            await this.visit(x));
          obj[key] =   await this.visit(x);
          break;
      }
    });
    return new Dictionary(obj);
  }

    async visitNullLiteral(ctx) {
    return null;
  }

  // Visit a parse tree produced by SintesisParser#expNot.
    async visitExpNot(ctx) {
    return !valueOf(  await this.visit(ctx.exp));
  }

  // Visit a parse tree produced by SintesisParser#expBitNot.
    async visitExpBitNot(ctx) {
    return ~valueOf(  await this.visit(ctx.exp));
  }

  // pre indica si es pre incremento (++i) o post incremento  (i++)
    async visitExpIncrement(ctx, pre, inc) {
    // const logD = ctx.dest.getText()
    var memoryref =   await this.visit(ctx.dest);
    memoryref = memoryref;
    if (!memoryref) throw new SintesisError(ctx.dest, `Símbolo no encontrado`);
    if (!(memoryref instanceof MemoryRef))
      throw new SintesisError(
        ctx.dest,
        `Operador izquierdo de ${ctx.op.text} es inválido`
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
    const value =   await this.visit(ctx.exp);
    return -value;
  }

  // Visit a parse tree produced by SintesisParser#expUnaryPlus.
    async visitExpUnaryPlus(ctx) {
    return   await this.visit(ctx.exp);
  }

  // Visit a parse tree produced by SintesisParser#numericLiteral.
    async visitNumericLiteral(ctx) {
    let r = ctx.children[0].getText();
    if (r.indexOf(".") >= 0) return parseFloat(r);
    return parseInt(r);
  }

  // Visit a parse tree produced by SintesisParser#expParenthesis.
    async visitExpParenthesis(ctx) {
    return   await this.visit(ctx.exp);
  }

  async visit(ctx) {
    return "hola";
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
