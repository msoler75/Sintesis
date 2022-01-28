import antlr4 from 'antlr4';


class SintesisErrorListener extends antlr4.error.ErrorListener {
      syntaxError(recognizer, offendingSymbol, line, column, msg, err) {
        // console.error(`${offendingSymbol} line ${line}, col ${column}: ${msg}`);
        throw new SyntaxError(JSON.stringify({msg, start: offendingSymbol.start, stop: offendingSymbol.stop, line, column}))
      }
      Error(msg) {
        console.error(`${msg}`);
      }
  }

  export default SintesisErrorListener