import Class from "./internals/Class.js";
import RefClass from "./internals/RefClass.js";
import Function from "./internals/Function.js";
import "./internals/ArrayUtilsHacked.js";

import getId from "./internals/GetId.js";
import { SintesisError } from "./SintesisError.js";
import { SymbolFinder } from "./internals/Symbols.js";
import SintesisParserVisitor from "./lib/SintesisParserVisitor.js";

class SintesisSymbolParser extends SintesisParserVisitor {
  constructor() {
    super();
  }

  // Visit a parse tree produced by SintesisParser#program.
  visitProgram(ctx) {
    this.program = ctx;
    SymbolFinder.createTable(ctx);
    this.visitChildren(ctx);
    return true;
  }

  // Visit a parse tree produced by SintesisParser#block.
  visitBlock(ctx) {
    SymbolFinder.createTable(ctx);
    const r = ctx.stmt ? this.visit(ctx.stmt) : this.visitChildren(ctx);
    return r;
  }

  myVisitIdentifier(ctx, id) {
    if (this.createIdentifierAlways) SymbolFinder.addSymbol(ctx, id);
    else {
      let memoryref = SymbolFinder.findSymbol(ctx, id);
      if (!memoryref || memoryref._variable instanceof Error)
        if (this.createIdentifierIfNotFound) SymbolFinder.addSymbol(ctx, id);

      // comprobamos accesibilidad de atributos métodos
      // if(memoryref._variable&&memoryref._variable instanceof Function)
      if (!SymbolFinder.canAccess(memoryref, ctx))
        throw new SintesisError(null, ctx, "acceso no permitido");
    }
  }

  // Visit a parse tree produced by SintesisParser#identifier.
  visitIdentifier(ctx) {
    const id = getId(ctx);
    this.myVisitIdentifier(ctx, id);
  }

  // Visit a parse tree produced by SintesisParser#expIdentifier.
  visitExpIdentifier(ctx) {
    return this.visitIdentifier(ctx);
  }

  visitExpReservedIdentifier(ctx) {
    const id = ctx.getText();
    this.myVisitIdentifier(ctx, id);
  }

  // Visit a parse tree produced by SintesisParser#variableDeclaration.
  visitVariableDeclaration(ctx) {
    this.createIdentifierAlways = true;
    const id = ctx.children[0].getText();
    this.myVisitIdentifier(ctx.children[0], id);
    this.createIdentifierAlways = false;
    return id;
  }

  // Visit a parse tree produced by SintesisParser#expVar.
  /*                                                                                               visitExpVar(ctx) {
                                                                                                       this.visitVariableDeclaration(ctx)
    } */

  // Visit a parse tree produced by SintesisParser#formalParameterArg.
  visitFormalParameterArg(ctx) {
    const id = this.visitVariableDeclaration(ctx);
    if (ctx.exp) {
      let memoryref = SymbolFinder.findSymbol(ctx, id);
      if (memoryref) {
        memoryref.variable.defaultValueContext = ctx.exp;
      }
    }
  }

  // Visit a parse tree produced by SintesisParser#functionDeclaration.
  visitFunctionDeclaration(ctx, isMethod) {
    let id = getId(ctx.id);
    if (!Class.isConstructorName(id)) {
      const st = SymbolFinder.getTable(ctx.parentCtx);
      if (st.hasSymbol(id)) {
        const fn = st.getRef(id);
        if (!(fn._variable instanceof RefClass))
          throw new SintesisError(
            null,
            ctx.id,
            "el símbolo '%s' ya fue definido",
            id
          );
      }
    }
    const fn = new Function(id, ctx);
    // si es un método, no se añade porque ya se ha añadido el símbolo en la declaración de la clase
    // si es una función anónima, no la incluimos
    if (!isMethod && id) SymbolFinder.addFunction(ctx.parentCtx, id, fn);
    if (!id) ctx.anonymousFunction = fn;

    SymbolFinder.createTable(ctx, fn);
    if (ctx.pl) {
      this.createIdentifierAlways = true;
      this.visit(ctx.pl);
      this.createIdentifierAlways = false;
    }
    if (ctx.stmt) {
      this.visit(ctx.stmt);
    }
  }

  visitAnonymousFunctionDecl(ctx) {
    return this.visitFunctionDeclaration(ctx);
  }

  visitArrowFunction(ctx) {
    return this.visitFunctionDeclaration(ctx);
  }

  // Visit a parse tree produced by SintesisParser#methodDeclaration.
  visitMethodDeclaration(ctx) {
    return this.visitFunctionDeclaration(ctx, true);
  }

  // Visit a parse tree produced by SintesisParser#arguments.
  visitArguments(ctx) {
    const values = [];
    if (ctx.children.length > 2)
      for (let i = 1; i < ctx.children.length; i++)
        if (i % 2 == 1) values.push(true); // solo coloca tantos valores true como argumentos hay
    return values;
  }

  // Visit a parse tree produced by SintesisParser#expNew.
  visitExpNew(ctx) {
    const id = ctx.id.text;
    let memoryref = SymbolFinder.findSymbol(ctx, id);
    if (!memoryref)
      throw new SintesisError(
        "error de compilación",
        ctx.id,
        "no existe la clase '%s'",
        id
      );
    if (!(memoryref.variable instanceof Class))
      throw new SintesisError(
        "error de compilación",
        ctx.id,
        "'%s' no es una clase",
        id
      );
    let obj = new Instance(memoryref.variable);
    let values = ctx.args ? this.visit(ctx.args) : [];
    if (values) ctx.args.values = values;
    let constructor = obj.getConstructor(values.length);
    if (!constructor)
      throw new SintesisError(
        "error de compilación",
        ctx.args,
        "número de argumentos incorrecto"
      );
    //this.callToFunction(new MemoryRef(obj, constructor.name), ctx.args);
    //return new MemoryRef(obj);
  }

  // buscar todos los nodos determinados por la clase ContextClassName
  find(ctx, ContextClassName) {
    if (ctx.constructor.name === ContextClassName) return [ctx];
    let r = [];
    if (ctx.children && Array.isArray(ctx.children)) {
      ctx.children.map(function (child) {
        r = r.concat(this.find(child, ContextClassName));
      }, this);
    }
    return r;
  }

  // Visit a parse tree produced by SintesisParser#statement.
  visitStatement(ctx) {
    // console.log('statement', ctx.getText())
    return ctx.children.length ? this.visit(ctx.children[0]) : null;
    //return                                                                                                 this.visitChildren(ctx);
  }

  // Visit a parse tree produced by SintesisParser#classDeclaration.
  visitClassDeclaration(ctx) {
    const id = getId(ctx.id);
    let extend = ctx.ext ? ctx.ext.getText() : null;
    let extendedCls = null;
    //const symbols = SymbolFinder.getTable(ctx.parentCtx);
    //if (id in symbols.memory)
    if(SymbolFinder.findSymbol(ctx.parentCtx, id))
      throw new SintesisError(
        "error de compilación",
        ctx.id,
        "el símbolo '%s' ya fue definido",
        id
      );
    if (extend) {
      let memoryref = SymbolFinder.findSymbol(ctx, extend);
      if (!memoryref)
        throw new SintesisError(
          null,
          ctx.id,
          "no existe la clase '%s'",
          extend
        );
      if (!(memoryref.variable instanceof Class))
        throw new SintesisError(null, ctx.id, "'%s' no es una clase", extend);
      extendedCls = memoryref.variable;
    }

    const methodList = ctx.methods
      ? ctx.methods.children.map((x) => new Function(getId(x.id), x, ctx))
      : {};
    let extendingWithNoDefaultConstructor =
      extend && !extendedCls.hasDefaultConstructor();
    let methods = {};
    let numconstruc = 0;
    for (let i = 0; i < methodList.length; i++) {
      const method = methodList[i];
      let name = getId(method.context.id);
      const isConstructor = Class.isConstructorName(name);
      if (isConstructor) name = "__constructor." + numconstruc++;
      method.name = name;
      if (extendingWithNoDefaultConstructor && isConstructor) {
        // comprobar que el constructor llama al constructor padre
        const firstStatement = method.context.children.find(
          (x) => x.constructor.name === "FunctionBodyContext"
        ).children[0].children[1];
        // console.log(body.getText())
        let callingSuper = false;
        const calls = this.find(firstStatement, "ExpMemberFuncContext");
        for (const c of calls) {
          let s = this.find(c, "ExpSuperContext");
          if (s.length > 0) {
            const a = this.find(s[0].parentCtx, "ArgumentsContext");
            var numargs = Math.ceil((a[0].children.length - 2) / 2);
            if (!extendedCls.getConstructor(numargs))
              throw new SintesisError(
                null,
                a[0],
                "número de argumentos incorrecto"
              );
            callingSuper = true;
          }
        }
        if (!callingSuper)
          throw new SintesisError(
            null,
            firstStatement,
            "debe llamar al método constructor de la clase padre"
          );
        method.callingSuperClass = true;
      }
      methods[name] = method;
    }
    // let k = Object.values(methods)/
    const attributes = {};
    if (ctx.atrs) {
      this.find(ctx.atrs, "ClassAttributeDeclContext").forEach((x) => {
        this.find(x, "IdentifierContext").forEach((at) => {
          let id = at.getText();
          let vis = x.vis ? x.vis.getText() : "";
          vis =
            !vis || Class.isPublic(vis)
              ? "public"
              : Class.isProtected(vis)
              ? "protected"
              : "private";
          attributes[id] = vis;
        });
      });
    }
    //ctx.atrs.children.map(x => x.getText()).filter(x => !x.match(/[,{}]/)) : []
    // const attributes = ctx.atrs? ctx.atrs.children.filter(x=>x.constructor.name!=='TerminalNodeImpl').map(x => x.getText())
    var numAttributes = Object.keys(attributes).length;
    if (
      numAttributes &&
      !Object.values(methods).find((x) => Class.isConstructorName(x.name))
    )
      throw new SintesisError(
        "error de compilación",
        ctx.mdec || ctx,
        "se requiere un constructor para inicializar los atributos"
      );

    const cls = new Class(ctx, id, extendedCls, attributes, methods);

    // si hereda y la clase padre tiene constructor definido, necesitamos un constructor aquí
    // if (extend && !cls.hasDefaultConstructor())
    // throw new SintesisError(null, ctx.mdec || ctx, "Se requiere un constructor para compatibilizar con la clase padre")

    // si no tiene atributos no requiere constructor por defecto definido, pero lo necesitamos para que funcione
    if (!extend && !numAttributes && !cls.hasDefaultConstructor())
      cls.methods["__constructor.default"] = new Function(
        "__constructor.default",
        null,
        ctx
      );

    SymbolFinder.addClass(ctx.parentCtx, id, cls);
    SymbolFinder.createTable(ctx, cls);

    // añadimos para cada atributo y método la referencia al objeto o instancia de clase
    for (const id in cls.attributes)
      SymbolFinder.addVariable(ctx, id, new RefClass(cls, id));
    for (const id in cls.methods)
      SymbolFinder.addVariable(ctx, id, new RefClass(cls, id));

    // llamamos a los métodos para que generen los símbolos
    for (const id in cls.methods)
      if (cls.methods[id].context) this.visit(cls.methods[id].context);
  }

  // Visit a parse tree produced by SintesisParser#expAssignment.
  visitExpAssignment(ctx) {
    this.createIdentifierIfNotFound = true;
    this.visit(ctx.dest);
    this.createIdentifierIfNotFound = false;
    this.visit(ctx.exp);
  }

  // Visit a parse tree produced by SintesisParser#forFromToStatement.
  visitForFromToStatement(ctx) {
    // const iter = ctx.iter
    // const id_iterator = getId(iter.id)
    SymbolFinder.createTable(ctx);
    this.createIdentifierIfNotFound = true;
    this.visit(ctx.iter.id);
    this.createIdentifierIfNotFound = false;
    /*let mem_index = iter.vvar ? null : SymbolFinder.findSymbol(ctx, id_iterator)
        if (!mem_index)
            mem_index = SymbolFinder.addSymbol(ctx, id_iterator)*/
    this.visit(ctx.stmt);
  }

  // Visit a parse tree produced by SintesisParser#forFromToStatement2.
  visitForFromToStatement2(ctx) {
    return this.visitForFromToStatement(ctx);
  }

  // Visit a parse tree produced by SintesisParser#forEachStatement.
  visitForEachStatement(ctx) {
    const iter = ctx.iter;
    const value_id = iter.idv ? iter.idv.text : null;
    const index_id = iter.idk ? iter.idk.text : null;

    SymbolFinder.createTable(ctx);
    SymbolFinder.addSymbol(ctx, value_id);
    if (index_id) SymbolFinder.addSymbol(ctx, index_id);
    this.visit(ctx.stmt);
  }

  // Visit a parse tree produced by SintesisParser#forEachStatement2.
  visitForEachStatement2(ctx) {
    return this.visitForEachStatement(ctx);
  }

  // Visit a parse tree produced by SintesisParser#forClassic.
  visitForClassic(ctx) {
    SymbolFinder.createTable(ctx);
    if (ctx.pre) this.visit(ctx.pre);
    if (ctx.exp) this.visit(ctx.exp);
    if (ctx.stmt) this.visit(ctx.stmt);
    if (ctx.post) this.visit(ctx.post);
  }

  /* visit(ctx) {
        if (Array.isArray(ctx)) {
           return ctx.map(function(child) {
               return child.accept(this);
           }, this);
       } else {
           return ctx.accept(this);
       }
   }

                                                                                                 visitChildren(ctx) {
		if (ctx.children) {
			return                                                                                                this.visit(ctx.children);
		} else {
			return null;
		}
	}*/

  // Visit a parse tree produced by SintesisParser#expSeq.
  visitExpSeq(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by SintesisParser#varDecList.
  visitVarDecList(ctx) {
    return this.visitChildren(ctx);
  }

  // funciones asíncronas
  visit(ctx) {
    if (Array.isArray(ctx)) {
      return ctx.mapAsyncSequence((child) => child.accept(this));
    } else {
      return ctx.accept(this);
    }
  }

  visitChildren(ctx) {
    if (ctx.children) {
      return this.visit(ctx.children);
    } else {
      return null;
    }
  }

  accept(visitor) {
    return visitor.visitTerminal(this);
  }
}

export default SintesisSymbolParser;
