import antlr4 from "antlr4";
const { CommonTokenStream, InputStream } = antlr4;
import SintesisLexer from "../src/lib/SintesisLexer.js";
import SintesisParser from "../src/lib/SintesisParser.js";
import SintesisEval from "../src/SintesisEval.js";
import SintesisSymbolParser from "../src/SintesisSymbolParser.js";
import { SintesisErrorListener, handleError } from "../src/SintesisError.js";
import { _t } from "../src/lang/locale.js";
import { printTree, printSymbolsTree } from "../src/utils/Print.js";

// _t es una función de traducción opcional
function exec(input) {
    var chars = new InputStream(input, true);
    var lexer = new SintesisLexer(chars);
    var tokens = new CommonTokenStream(lexer);
    // tokens.fill();
    var parser = new SintesisParser(tokens);
    var symboly = new SintesisSymbolParser();
    var evaly = new SintesisEval();

    parser.buildParseTrees = true;
    parser.removeErrorListeners();
    parser.addErrorListener(new SintesisErrorListener());

    const programContext = parser.program(); // 'program' is the start rule
    // genera las tablas de símbolos:
    symboly.visitProgram(programContext);
    // console.log(printTree(programContext))
    // console.log(printSymbols(programContext))
    // ejecuta el programa
    evaly.visitProgram(programContext);
    // console.log(printTree(programContext))
    return evaly.output;
}

export default exec;
