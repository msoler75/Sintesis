import Class from './internals/Class.js'
import Vector from './internals/Vector.js'
import Variable from './internals/Variable.js'
import Function from './internals/Function.js'
import SymbolContexts from './internals/SymbolContexts.js'
import SintesisParserVisitor from './lib/SintesisParserVisitor.js'

export default class SintesisEval extends SintesisParserVisitor {


  // Visit a parse tree produced by SintesisParser#program.
  visitProgram(ctx) {
    // crea una uneva pila de símbolos
    this.symbols = new SymbolContexts()
    this.output = ""
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by SintesisParser#vectorDeclaration.
  /*visitVectorDeclaration(ctx) {
    let id = ctx.id.text;
    let indexes = this.visitChildren(ctx.idx)
    let [context, fid] = findContextBlock(ctx)
    if (!('vars' in context)) context.vars = {}
    context.vars[fid] = new Vector(indexes)
    return this.visitChildren(ctx)
  }*/

  // Visit a parse tree produced by SintesisParser#functionDeclaration.
  visitFunctionDeclaration(ctx) {
    let id = ctx.id.text
    const fn = new Function(ctx)
    if (id in this.symbols.currentContext().functions)
      throw new Error(`La función '${id}' ya fue definida en este contexto`)
    this.symbols.addFunction(id, fn)
    return fn
  }


  // Visit a parse tree produced by SintesisParser#classDeclaration.
  visitClassDeclaration(ctx) {
    const id = ctx.id.text;
    const extend = ctx.ext ? this.visitChildren(ctx.ext) : null
    const attributes = ctx.atrs ? ctx.atrs.children.map(x => x.getText()).filter(x => x != ',') : {}
    const methodList = ctx.methods ? ctx.methods.children.map(x => new Function(x, ctx)) : {}
    let methods = {}
    for (const i in methodList) {
      const method = methodList[i]
      const idm = method.context.id.text
      methods[idm] = method
    }
    if (id in this.symbols.currentContext().classes)
      throw new Error(`La clase '${id}' ya fue definida en este contexto`)
    const cls = new Class(id, extend, attributes, methods)
    this.symbols.addClass(id, cls)
    return this.visitChildren(ctx)
  }


  // Visit a parse tree produced by SintesisParser#expAssignment.

  visitExpAssignment(ctx) {
    let value = this.visit(ctx.exp);
    const id = ctx.dest.id.text
    switch (ctx.dest.constructor.name) {
      case 'AssignableAttributeContext': {
        /*
        let [context] = findContextVar(ctx, '#' + id)
        if (!context)
          throw new Error(`El atributo '${id}' no existe`)
        context.vars['#' + id] = value
        */
      }
      break

    case 'AssignableVectorContext': {
      let idx = this.visitChildren(ctx.dest.idx)
      let vec = this.symbols.findVar(id)
      if (vec && !(vec instanceof Vector))
        vec = null
      if (!vec) {
        vec = new Vector(idx.map(x => x + 1))
        this.symbols.addVar(id, vec)
      }
      // set value in vector
      vec.setValueAt(idx, value)
    }
    break

    default: {
      let variable = this.symbols.findVar(id)
      if (!variable) {
        variable = new Variable(value)
        this.symbols.addVar(id, variable)
      }
      variable.setValue(value)
    }
    }
    return value
  }

  // Visit a parse tree produced by SintesisParser#expVectorDeclaration.
	visitExpVectorDeclaration(ctx) {
    const id = ctx.id.text
    if (id in this.symbols.currentContext().variables)
      throw new Error(`La variable '${id}' ya fue declarada en este contexto`)
    const idx = this.visitChildren(ctx.idx)
	  let vec = new Vector(idx.map(x => x + 1))
    this.symbols.addVar(id, vec)
	}

  // Visit a parse tree produced by SintesisParser#varSingleDeclaration.
	visitVarSingleDeclaration(ctx) {
    const id = ctx.id.text
    if (id in this.symbols.currentContext().variables)
      throw new Error(`La variable '${id}' ya fue declarada en este contexto`)
    let value = this.visit(ctx.exp);
    let variable = new Variable(value)
    this.symbols.addVar(id, variable)
	}


  // Visit a parse tree produced by SintesisParser#vectorIndex.
  visitVectorIndex(ctx) {
    let items = ctx.children.filter(x => x.constructor.name !== 'TerminalNodeImpl')
    return items.length ? this.visit(items[0]) : null
  }

  // Visit a parse tree produced by SintesisParser#expVectorDeclaration.
  visitExpVectorDeclaration(ctx) {
    let indexes = this.visitChildren(ctx.idx)
    return new Vector(indexes)
  }

  // Visit a parse tree produced by SintesisParser#expVector.
  visitExpVector(ctx) {
    const id = ctx.id.text
    const idx = this.visitChildren(ctx.idx)
    let vec = this.symbols.findVar(id)
    if (!vec)
      throw new Error(`El vector ${id} no existe`)
    if (!(vec instanceof Vector))
      throw new Error(`La variable ${id} no es un vector`)
    return vec.getValueFrom(idx)
  }

  // Visit a parse tree produced by SintesisParser#expAssignmentOperator.
  visitExpAssignmentOperator(ctx) {
    let id = ctx.id.text;
    let e1 = this.visit(ctx.id)
    let e2 = this.visit(ctx.exp);
    let variable = this.symbols.findVar(id)
    /*let [context, fid] = findContextVar(ctx, id)
    if (!context && !IAmInsideClass(ctx))
      IAmInsideClass
    if (!context)
      context = findContextBlock(ctx)*/
    if (!variable)
      throw new Error(`No se ha encontrado ${id}`)
    let r = e1
    switch (ctx.op.text) {
      case '*=':
        r *= e2;
        break;
      case '/=':
        r /= e2;
        break;
      case '%=':
        r %= e2;
        break;
      case '+=':
        r += e2;
        break;
      case '-=':
        r -= e2;
        break;
      case '<<=':
        r <<= r2;
        break;
      case '>>=':
        r >>= r2;
        break;
      case '&=':
        r &= r2;
        break;
      case '^=':
        r ^= r2;
        break;
      case '|=':
        r |= r2;
        break;
      case '**=':
        r **= e2;
        break;
    }
    // context.vars[fid] = r
    variable.setValue(r)
    return r
  }



  // Visit a parse tree produced by SintesisParser#expOp.
  visitExpOp(ctx) {
    let e1 = this.visit(ctx.e1);
    let e2 = this.visit(ctx.e2);
    switch (ctx.op.text) {
      case '**':
        return e1 ** e2;
      case '*':
        return e1 * e2;
      case '/':
        return e1 / e2;
      case '%':
        return e1 % e2;
      case '+':
        return e1 + e2;
      case '-':
        return e1 - e2;
      case '<':
        return e1 < e2;
      case '>':
        return e1 > e2;
      case '<=':
        return e1 <= e2;
      case '>=':
        return e1 >= e2;
      case '==':
        return e1 == e2;
      case '!=':
        return e1 != e2;
      case '===':
        return e1 === e2;
      case '!==':
        return e1 !== e2;
      case '&&':
        return e1 && e2;
      case '||':
        return e1 || e2;
      case '&':
        return e1 & e2;
      case '|':
        return e1 | e2;
      case '^':
        return e1 ^ e2;
    }
    return 0
  }



  // Visit a parse tree produced by SintesisParser#ifStatement.
  visitIfStatement(ctx) {
    if (this.visit(ctx.exp)) {
      return this.visitChildren(ctx.stmt)
    } else if (ctx.elseifs) {
      for (const cs of ctx.elseifs.children) {
        if (this.visit(cs.exp))
          return this.visitChildren(cs.stmt)
      }
    }
    if (ctx.else_)
      return this.visit(ctx.else_)
  }


  // Visit a parse tree produced by SintesisParser#repeatStatement.
  visitRepeatStatement(ctx) {
    const n = this.visit(ctx.exp)
    if (n)
      for (var i = 0; i < n; i++)
        this.visit(ctx.stmt)
  }


  // Visit a parse tree produced by SintesisParser#repeatWhileStatement.
  visitRepeatWhileStatement(ctx) {
    do
      this.visit(ctx.stmt);
    while (this.visit(ctx.exp))
  }


  // Visit a parse tree produced by SintesisParser#whileRepeatStatement.
  visitWhileRepeatStatement(ctx) {
    while (this.visit(ctx.exp))
      this.visit(ctx.stmt)
  }


  // Visit a parse tree produced by SintesisParser#expFunctionCall.
  visitExpFunctionCall(ctx) {
    let id = ctx.id.text
    let func = this.symbols.findFunc(id)
    if (!func)
      throw new Error(`La función '${id}' no existe`)

    // obtenemos los argumentos o parámetros de la función y los valores
    let params = func.context.pl ? this.visit(func.context.pl).params : []
    let values = ctx.args ? this.visit(ctx.args).values : []

    // creamos un nuevo contexto de símbolos de un contexto de función
    this.symbols.pushLevel(true)

    // pone en el contexto los parámetros de la función como si fueran variables, con los valores asignados desde la llamada con argumentos a la función
    for (let i = 0; i < params.length; i++) {
      let _id = params[i]
      this.symbols.addVar(_id, new Variable(i in values ? values[i] : 0))
    }

    // ejecutamos el cuerpo de la función
    func.context.stmt ? this.visit(func.context.stmt) : null

    const r = this.symbols.currentContext().functionResult

    // restauramos el contexto de símbolos anterior
    this.symbols.popLevel()
    return r
  }


  // Visit a parse tree produced by SintesisParser#returnStatement.
  visitReturnStatement(ctx) {
    const r = this.visit(ctx.exp)
    let callContext = this.symbols.getFuncContext()
    if (!callContext)
      throw new Error('Se ha intentado retornar de un contexto que no es una función o método')
    callContext.functionEnded = true
    callContext.functionResult = r
    return r;
  }

  // Visit a parse tree produced by SintesisParser#statementList.
  visitStatementList(ctx) {
    let callContext = this.symbols.getFuncContext()
    let i = 0
    while ((!callContext || !callContext.functionEnded) && i < ctx.children.length)
      this.visit(ctx.children[i++])
    return callContext ? (callContext.functionResult || null) : null
  }


  // Visit a parse tree produced by SintesisParser#formalParameterList.
  visitFormalParameterList(ctx) {
    ctx.params = []
    for (let i = 0; i < ctx.children.length; i++)
      if (i % 2 == 0)
        ctx.params.push(ctx.children[i].getText())
    return ctx;
  }

  // Visit a parse tree produced by SintesisParser#arguments.
  visitArguments(ctx) {
    ctx.values = []
    for (let i = 1; i < ctx.children.length; i++)
      if (i % 2 == 1)
        ctx.values.push(this.visit(ctx.children[i]))
    return ctx;
  }


  // Visit a parse tree produced by SintesisParser#anonymousFunction.
  visitAnonymousFunction(ctx) {
    // TO-DO
    return this.visitChildren(ctx);
  }


  // Visit a parse tree produced by SintesisParser#expIdentifier.
  visitExpIdentifier(ctx) {
    const id = ctx.id.text
    let variable = this.symbols.findVar(id)
    if (!variable)
      throw new Error(`La variable ${this.id} no ha sido definida`);
    return variable.value
  }


  // Visit a parse tree produced by SintesisParser#block.
  visitBlock(ctx) {
    this.symbols.pushLevel()
    const r = ctx.stmt ? this.visit(ctx.stmt) : this.visitChildren(ctx)
    this.symbols.popLevel()
    return r
  }

  // Visit a parse tree produced by SintesisParser#functionBody.
  visitFunctionBody(ctx) {
    return ctx.children.length ? this.visit(ctx.children[0]) : this.visitChildren(ctx)
  }


  // Visit a parse tree produced by SintesisParser#printStatement.
  visitPrintStatement(ctx) {
    let r = this.visit(ctx.exp);
    if (r instanceof Vector)
      r = r.data
    this.output += r +'\n'
    console.log('PRINTING', r);
    return r
  }

  visitStepStatement(ctx) {
    let r = ctx.exp.text;
    console.log('STEP', r);
    return r
  }

  // Visit a parse tree produced by SintesisParser#expLiteral.
  visitExpLiteral(ctx) {
    return ctx.children.length ? this.visit(ctx.children[0]) : this.visitChildren(ctx)
  }

  // Visit a parse tree produced by SintesisParser#literal.
  visitLiteral(ctx) {
    return ctx.children.length ? this.visit(ctx.children[0]) : this.visitChildren(ctx)
  }

  // Visit a parse tree produced by SintesisParser#booleanLiteral.
  visitBooleanLiteral(ctx) {
    let r = ctx.children[0].getText();
    switch (r) {
      case 'true':
      case 'cierto':
      case 'vero':
      case 'vrai':
      case 'certo':
        return true;
      case 'false':
      case 'falso':
      case 'faux':
        return false;
    }
    return undefined
  }


  // Visit a parse tree produced by SintesisParser#stringLiteral.
  visitStringLiteral(ctx) {
    let str = ctx.children[0].getText();
    str = str.substr(1, str.length - 2)
    return str
  }


  // Visit a parse tree produced by SintesisParser#expNot.
  visitExpNot(ctx) {
    return !this.visit(ctx.exp);
  }

  // Visit a parse tree produced by SintesisParser#expBitNot.
  visitExpBitNot(ctx) {
    return ~this.visit(ctx.exp);
  }


  // Visit a parse tree produced by SintesisParser#expPostDecrease.
  visitExpPostDecrease(ctx) {
    return this.visit(ctx.exp);
  }


  // Visit a parse tree produced by SintesisParser#expPreIncrement.
  visitExpPreIncrement(ctx) {
    return this.visit(ctx.exp);
  }


  // Visit a parse tree produced by SintesisParser#expUnaryMinus.
  visitExpUnaryMinus(ctx) {
    return this.visit(ctx.exp);
  }


  // Visit a parse tree produced by SintesisParser#expPostIncrement.
  visitExpPostIncrement(ctx) {
    // let id = ctx.id.text;
    return this.visit(ctx.exp);
  }


  // Visit a parse tree produced by SintesisParser#expUnaryPlus.
  visitExpUnaryPlus(ctx) {
    return this.visit(ctx.exp);
  }


  // Visit a parse tree produced by SintesisParser#numericLiteral.
  visitNumericLiteral(ctx) {
    let r = ctx.children[0].getText();
    if (r.indexOf('.') >= 0)
      return parseFloat(r)
    return parseInt(r)
  }

  // Visit a parse tree produced by SintesisParser#expParenthesis.
  visitExpParenthesis(ctx) {
    return this.visit(ctx.exp);
  }

}
