import Class from '../internals/Class.js'
import Instance from '../internals/Instance.js'
import RefClass from '../internals/RefClass.js'
import MemoryRef from '../internals/MemoryRef.js'
import {translate} from '../lang/SintesisLang.js'


const TAB = '  '

function genTabs(tabs) {
    if (!tabs) tabs = 0
    let tabstr = ''
    for (var i = 0; i < tabs; i++)
        tabstr += TAB
    return tabstr
}

function incTabs(tabs) {
    if (!tabs) tabs = 0
    return tabs + 1
}

/**
 * print any thing
 */
function printThing(obj) {
    while (obj instanceof MemoryRef)
        obj = obj.variable

    if (obj === undefined || obj === null || obj === true || obj === false)
        return printObject(obj)

    if (Array.isArray(obj)) {
        const r = []
        obj.forEach(x => r.push(printThing(x)))
        return '[' + r.join(', ').replace(/\bnulo\b/g, '') + ']'
    }

    if (typeof obj !== 'object')
        return obj

    if ('toString' in obj)
        return obj.toString()

    if (obj instanceof Class)
        return translate('clase')

    if (obj instanceof Instance)
        return translate('instancia')

    if (obj instanceof RefClass)
        return translate('referencia')

    if (obj instanceof Function)
        return translate('función')

    if ('children' in obj)
        console.warn('dont use context classes here')

    return printObject(obj)
}

/**
 * imprime un objeto simple (aunque puede tener atributos complejos).
 * No debe usarse para ningun otro tipo (Variable, Clase, Función...)
 */
function printObject(obj) {
    if (obj === undefined || obj === null) return translate('nulo')
    if (obj === true) return translate('cierto')
    if (obj === false) return translate('falso')
    if (!obj || typeof obj !== 'object')
        return obj
    let values = []
    let keys = Object.keys(obj)
    keys.forEach(k => {
        let z = obj[k]
        let str = printThing(z)
        values.push(k + ': ' + str)
    })
    return '{' + values.join(', ') + '}'
}

function sprintf(str, ...args) {
    let index = 0;
    return str.replace(/%[sd]/g, (match) => {
      const arg = args[index++];
      switch (match) {
        case "%s":
          return String(arg);
        case "%d":
          return Number(arg);
        default:
          return match;
      }
    });
  }

/** No sé para qué sirve */
/*
function printValueOf(v) {
    if (v instanceof MemoryRef) {
        if (!v._variable) return ''
        v = v.variable
    }
    if (v instanceof Class) {
        return "(clase)"
    }
    if (v instanceof RefClass) {
        if (v.value.classInstance instanceof Class) {
            return (_omitClass ? '' : v.value.classInstance.name) + '.' + v.value.id
        } else
            return (_omitClass ? '' : v.value.classInstance.class.name) + '.' + v.value.id
    }
    if (v instanceof Function)
        return "()";
    return valueOf(v)
}
*/

/** imprime los símbolos de un contexto (si los hay) */
function printSymbolTable(symbolTable) {
    let str = ""
    if (!symbolTable) return ""
    const m0 = symbolTable.getMemory()
    // console.log(ctx.symbolTable)
    if (m0 === null || m0 === undefined) {
        str = ''
        // console.log('ERROR', m0)
    } else
    if (m0) {
        let ids = Object.keys(m0)
        if (ids.length)
            str =
            '{ ' +
            ids.map(id =>
                id + ': {' +
                symbolTable.memory.map(m => printThing(m[id])).join(', ') +
                '}'
            )
            .join(', ') +
            '} '
    }
    return str
}

/** imprime un árbol de símbolos en sus contextos descendientes */
function printSymbolsTree(ctx, tabs) {
    let tabsstr = genTabs(tabs)
    let str = printSymbols(ctx)
    if (ctx.children && Array.isArray(ctx.children))
        ctx.children.forEach(ctxChild => {
            str += tabsstr + printSymbolsTree(ctxChild, incTabs(tabs))
        })
    return str
}

function tabulate(str, tabs) {
    if (!tabs) tabs = 0
    var lines = str.split('\n')
    return lines.map(x => TAB.repeat(tabs) + x).join('\n')
}


/** Genera para el desarrollador un árbol textual tabulado de contextos y símbolos */
function printTree(ctx, tabs) {
    if (!ctx || typeof ctx != 'object') return ''
    let str = ''
    let tabstr = genTabs(tabs)
    if (['TerminalNodeImpl', 'IdentifierContext', 'LiteralContext', 'EosContext'].includes(ctx.constructor.name))
        return ''

    str = tabstr + '#' + ctx.constructor.name.replace(/Context$/, '') + '\t // ' + (ctx.text || ctx.getText()).substr(0, 64) + '\n'

    // tabla de símbolos
    if ('symbolTable' in ctx)
        str += tabstr + printSymbolTable(ctx.symbolTable) + "\n"

    // nodos hijos
    if (ctx.children && Array.isArray(ctx.children)) {
        for (var ctxChild of ctx.children) {
            str += printTree(ctxChild, incTabs(tabs))
        }
    }
    return str
}

export {
    printThing,
    printObject,
    printSymbolTable,
    printSymbolsTree,
    printTree,
    tabulate,
    sprintf
}