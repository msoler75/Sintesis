import antlr4 from 'antlr4'
const {
    CommonTokenStream,
    InputStream
} = antlr4
import SintesisLexer from '../src/lib/SintesisLexer.js'
import SintesisParser from '../src/lib/SintesisParser.js'
import SintesisEval from '../src/SintesisEval.js'
import SintesisErrorListener from '../src/SintesisErrorListener.js'

function exec(input) {
    var chars = new InputStream(input, true)
    var lexer = new SintesisLexer(chars)
    var tokens = new CommonTokenStream(lexer)
    var parser = new SintesisParser(tokens)
    var evaly = new SintesisEval()
    
    parser.buildParseTrees = true
    parser.removeErrorListeners()
    parser.addErrorListener(new SintesisErrorListener());

    const tree = parser.program() // 'program' is the start rule
    evaly.visitProgram(tree)
    return evaly.output
}

export default exec