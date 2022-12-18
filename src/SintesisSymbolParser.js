import Class from './internals/Class.js'
import RefClass from './internals/RefClass.js'
import Function from './internals/Function.js'

import SintesisError from './SintesisError.js'
import {
    SymbolFinder
} from './internals/Symbols.js'
import SintesisParserVisitor from './lib/SintesisParserVisitor.js'



class SintesisSymbolParser extends SintesisParserVisitor {

    // Visit a parse tree produced by SintesisParser#program.
    visitProgram(ctx) {
        SymbolFinder.createTable(ctx)
        this.visitChildren(ctx);
    }

    // Visit a parse tree produced by SintesisParser#block.
    visitBlock(ctx) {
        SymbolFinder.createTable(ctx)
        const r = ctx.stmt ? this.visit(ctx.stmt) : this.visitChildren(ctx)
        return r
    }

    // Visit a parse tree produced by SintesisParser#identifier.
    visitIdentifier(ctx) {
        const id = ctx.getText()
        let memoryref = SymbolFinder.findSymbol(ctx, id)
        if (!memoryref || (memoryref._variable instanceof Error))
            if (this.createIfNotFound)
                SymbolFinder.addSymbol(ctx, id)

        // comprobamos accesibilidad de atributos métodos
        // if(memoryref._variable&&memoryref._variable instanceof Function)
        if (!SymbolFinder.canAccess(memoryref, ctx))
            throw new SintesisError(ctx, "Acceso no permitido")
    }


    // Visit a parse tree produced by SintesisParser#expIdentifier.
    visitExpIdentifier(ctx) {
        return this.visitIdentifier(ctx)
    }

    // Visit a parse tree produced by SintesisParser#variableDeclaration.
    visitVariableDeclaration(ctx) {
        const id = ctx.id.getText()
        SymbolFinder.addSymbol(ctx, id)
    }

    // Visit a parse tree produced by SintesisParser#expVar.
    visitExpVar(ctx) {
        this.visitVariableDeclaration(ctx)
    }

    // Visit a parse tree produced by SintesisParser#formalParameterArg.
    visitFormalParameterArg(ctx) {
        this.visitVariableDeclaration(ctx)
    }

    // Visit a parse tree produced by SintesisParser#functionDeclaration.
    visitFunctionDeclaration(ctx, isMethod) {
        let id = ctx.id.text
        if (!Class.isConstructorName(id)) {
            const st = SymbolFinder.getTable(ctx.parentCtx)
            if (st.hasSymbol(id)) {
                const fn = st.getRef(id)
                if (!(fn._variable instanceof RefClass))
                    throw new SintesisError(ctx.id, `El símbolo '${id}' ya fue definido`)
            }
        }
        const fn = new Function(id, ctx)
        // si es un método, no se añade porque ya se ha añadido el símbolo en la declaración de la clase
        if (!isMethod)
            SymbolFinder.addFunction(ctx.parentCtx, id, fn)

        SymbolFinder.createTable(ctx, fn)
        if (ctx.pl) {
            this.visit(ctx.pl)
        }
        if (ctx.stmt) {
            this.visit(ctx.stmt)
        }
    }

    // Visit a parse tree produced by SintesisParser#methodDeclaration.
    visitMethodDeclaration(ctx) {
        return this.visitFunctionDeclaration(ctx, true)
    }

    // buscar todos los nodos determinados por la clase ContextClassName
    find(ctx, ContextClassName) {
        if (ctx.constructor.name === ContextClassName) return [ctx]
        let r = []
        if (ctx.children && Array.isArray(ctx.children)) {
            ctx.children.map(function (child) {
                r = r.concat(this.find(child, ContextClassName))
            }, this);
        }
        return r
    }

    // Visit a parse tree produced by SintesisParser#classDeclaration.
    visitClassDeclaration(ctx) {
        const id = ctx.id.text;
        let extend = ctx.ext ? ctx.ext.text : null
        if (id in SymbolFinder.getTable(ctx.parentCtx).memory)
            throw new SintesisError(ctx.id, `El símbolo '${id}' ya fue definido`)
        if (extend) {
            let memoryref = SymbolFinder.findSymbol(ctx, extend)
            if (!memoryref)
                throw new SintesisError(ctx.id, `No existe la clase ${extend}`)
            if (!(memoryref.variable instanceof Class))
                throw new SintesisError(ctx.id, `${extend} no es una clase`)
            extend = memoryref.variable
        }

        const methodList = ctx.methods ? ctx.methods.children.map(x => new Function(x.id.text, x, ctx)) : {}
        let extendingWithNoDefaultConstructor = extend && !extend.hasDefaultConstructor()
        let methods = {}
        let numconstruc = 0
        for (let i = 0; i < methodList.length; i++) {
            const method = methodList[i]
            let name = method.context.id.text
            const isConstructor = Class.isConstructorName(name)
            if (isConstructor)
                name = '__constructor.' + numconstruc++
            method.name = name
            if (extendingWithNoDefaultConstructor && isConstructor) {
                // comprobar que el constructor llama al constructor padre
                const body = method.context.children.find(x => x.constructor.name === 'FunctionBodyContext').children[0].children[1]
                // console.log(body.getText())
                let callingSuper = false
                const calls = this.find(body, 'ExpMemberFuncContext')
                for (const c of calls) {
                    let s = this.find(c, 'ExpSuperContext')
                    if (s.length > 0) {
                        const a = this.find(s[0].parentCtx, 'ArgumentsContext')
                        var numargs = Math.ceil((a[0].children.length - 2) / 2)
                        if (!extend.getConstructor(numargs))
                            throw new SintesisError(a[0], `La clase padre no tiene ningún constructor ` + (numargs > 0 ? `con ${numargs} parámetros` : `sin parámetro${numargs>1?'s':''}`))
                        callingSuper = true
                    }
                }
                if (!callingSuper)
                    throw new SintesisError(body, 'Debe llamar al método constructor de la clase padre')
                method.callingSuperClass = true
            }
            methods[name] = method
        }
        // let k = Object.values(methods)/
        const attributes = {}
        if (ctx.atrs) {
            this.find(ctx.atrs, 'ClassAttributeDeclContext')
                .forEach(x => {
                    this.find(x, 'IdentifierContext').forEach(at => {
                        let id = at.getText()
                        let vis = x.vis ? x.vis.getText() : ''
                        vis = !vis || Class.isPublic(vis) ? 'public' :
                            Class.isProtected(vis) ? 'protected' :
                            'private'
                        attributes[id] = vis
                    })
                })
        }
        //ctx.atrs.children.map(x => x.getText()).filter(x => !x.match(/[,{}]/)) : []
        // const attributes = ctx.atrs? ctx.atrs.children.filter(x=>x.constructor.name!=='TerminalNodeImpl').map(x => x.getText())
        var numAttributes = Object.keys(attributes).length
        if (numAttributes && !Object.values(methods).find(x => Class.isConstructorName(x.name)))
            throw new SintesisError(ctx.mdec || ctx, "Se requiere un constructor para inicializar los atributos")

        const cls = new Class(ctx, id, extend, attributes, methods)

        // si no tiene atributos no requiere constructor por defecto definido, pero lo necesitamos para que funcione
        if (!extend && !numAttributes && !cls.hasDefaultConstructor())
            cls.methods['__constructor.default'] = new Function('__constructor.default', null, ctx)

        SymbolFinder.addClass(ctx.parentCtx, id, cls)
        SymbolFinder.createTable(ctx, cls)

        // añadimos para cada atributo y método la referencia al objeto o instancia de clase
        for (const id in cls.attributes)
            SymbolFinder.addVariable(ctx, id, new RefClass(cls, id))
        for (const id in cls.methods)
            SymbolFinder.addVariable(ctx, id, new RefClass(cls, id))

        // llamamos a los métodos para que generen los símbolos
        for (const id in cls.methods)
            if (cls.methods[id].context)
                this.visit(cls.methods[id].context)
    }

    // Visit a parse tree produced by SintesisParser#expAssignment.
    visitExpAssignment(ctx) {
        this.createIfNotFound = true
        this.visit(ctx.dest)
        this.createIfNotFound = false
    }

    // Visit a parse tree produced by SintesisParser#forFromToStatement.
    visitForFromToStatement(ctx) {
        const iter = ctx.iter
        const id_iterator = iter.id.text
        SymbolFinder.createTable(ctx)
        let mem_index = iter.vvar ? null : SymbolFinder.findSymbol(ctx, id_iterator)
        if (!mem_index)
            mem_index = SymbolFinder.addSymbol(ctx, id_iterator)
        this.visit(ctx.stmt)
    }


    // Visit a parse tree produced by SintesisParser#forFromToStatement2.
    visitForFromToStatement2(ctx) {
        return this.visitForFromToStatement(ctx);
    }


    // Visit a parse tree produced by SintesisParser#forEachStatement.
    visitForEachStatement(ctx) {
        const iter = ctx.iter
        const value_id = iter.idv ? iter.idv.text : null
        const index_id = iter.idk ? iter.idk.text : null

        SymbolFinder.createTable(ctx)
        SymbolFinder.addSymbol(ctx, value_id)
        if (index_id) SymbolFinder.addSymbol(ctx, index_id)
        this.visit(ctx.stmt)
    }


    // Visit a parse tree produced by SintesisParser#forEachStatement2.
    visitForEachStatement2(ctx) {
        return this.visitForEachStatement(ctx);
    }

}

export default SintesisSymbolParser