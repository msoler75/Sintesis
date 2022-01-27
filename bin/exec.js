import antlr4 from 'antlr4'
const {
    CommonTokenStream,
    InputStream
} = antlr4
import SintesisLexer from '../src/lib/SintesisLexer.js'
import SintesisParser from '../src/lib/SintesisParser.js'
import SintesisEval from '../src/SintesisEval.js'

export default function exec(input) {
    var chars = new InputStream(input, true)
    var lexer = new SintesisLexer(chars)
    var tokens = new CommonTokenStream(lexer)
    var parser = new SintesisParser(tokens)
    var evaly = new SintesisEval()

    parser.buildParseTrees = true
    const tree = parser.program() // 'program' is the start rule
    evaly.visitProgram(tree)
    return evaly.output
}