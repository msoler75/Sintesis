import antlr4 from 'antlr4';
import SintesisParser from './SintesisParser.js';

export default class SintesisParserBase extends antlr4.Parser {

    constructor(input) {
        super(input);
    }

    p(str) {
        return this.prev(str);
    }

    prev(str) {
        return  this._input.LT(-1).text === str;
    }

    // Short form for next(String str)
    n(str)
    {
        return this.next(str);
    }

    // Whether the next token value equals to @param str
    next(str)
    {
        return  this._input.LT(1).text === str;
    }

    notLineTerminator() {
        return !this.here(SintesisParser.LineTerminator);
    }

    notOpenBraceAndNotFunction() {
        const nextTokenType = this._input.LT(1).type;
        return (
                nextTokenType !== SintesisParser.OpenBrace &&
                nextTokenType !== SintesisParser.Function_
               );
    }

    closeBrace() {
        return this._input.LT(1).type === SintesisParser.CloseBrace;
    }

    here(type) {
        const possibleIndexEosToken = this.getCurrentToken().tokenIndex - 1;
        const ahead = this._input.get(possibleIndexEosToken);
        return ahead.channel === antlr4.Lexer.HIDDEN && ahead.type === type;
    }

    lineTerminatorAhead() {
        let possibleIndexEosToken = this.getCurrentToken().tokenIndex - 1;
        let ahead = this._input.get(possibleIndexEosToken);
        if (ahead.channel !== antlr4.Lexer.HIDDEN) {
            return false;
        }
        if (ahead.type === SintesisParser.LineTerminator) {
            return true;
        }
        if (ahead.type === SintesisParser.WhiteSpaces) {
            possibleIndexEosToken = this.getCurrentToken().tokenIndex - 2;
            ahead = this._input.get(possibleIndexEosToken);
        }
        const text = ahead.text;
        const type = ahead.type;
        return (
                (type === SintesisParser.MultiLineComment &&
                 (text.includes("\r") || text.includes("\n"))) ||
                type === SintesisParser.LineTerminator
               );
    }

       
}