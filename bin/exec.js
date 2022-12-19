import antlr4 from 'antlr4'
const {
    CommonTokenStream,
    InputStream
} = antlr4
import SintesisLexer from '../src/lib/SintesisLexer.js'
import SintesisParser from '../src/lib/SintesisParser.js'
import SintesisEval from '../src/SintesisEval.js'
import SintesisSymbolParser from '../src/SintesisSymbolParser.js'
import SintesisErrorListener from '../src/SintesisErrorListener.js'

async function exec(input) {
    var chars = new InputStream(input, true)
    var lexer = new SintesisLexer(chars)
    var tokens = new CommonTokenStream(lexer)
    // tokens.fill();
    var parser = new SintesisParser(tokens)
    var symboly = new SintesisSymbolParser()
    var evaly = new SintesisEval(tokens)

    parser.buildParseTrees = true
    parser.removeErrorListeners()
    parser.addErrorListener(new SintesisErrorListener());

    const programContext = await parser.program() // 'program' is the start rule
    // genera las tablas de símbolos
    await symboly.visitProgram(programContext)
    // ejecuta el programa
    await evaly.visitProgram(programContext)
    return evaly.output
}

export default exec