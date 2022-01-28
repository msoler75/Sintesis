// Generated from ./src/grammar/SintesisParser.g4 by ANTLR 4.9.3
// jshint ignore: start
import antlr4 from 'antlr4';
import SintesisParserVisitor from './SintesisParserVisitor.js';


const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0003a\u01d6\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f",
    "\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010",
    "\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014",
    "\t\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017",
    "\u0004\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a\u0004\u001b",
    "\t\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e\t\u001e",
    "\u0004\u001f\t\u001f\u0004 \t \u0004!\t!\u0004\"\t\"\u0004#\t#\u0004",
    "$\t$\u0004%\t%\u0004&\t&\u0004\'\t\'\u0003\u0002\u0003\u0002\u0003\u0003",
    "\u0006\u0003R\n\u0003\r\u0003\u000e\u0003S\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0005\u0004`\n\u0004\u0003\u0005\u0003\u0005\u0005",
    "\u0005d\n\u0005\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003",
    "\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0005\b\u00a9\n\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b",
    "\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0005\b\u00bb\n\b\u0003\b\u0003\b\u0003\b\u0003\b",
    "\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0007\b\u00fa\n\b\f\b\u000e\b\u00fd\u000b",
    "\b\u0003\t\u0003\t\u0003\t\u0007\t\u0102\n\t\f\t\u000e\t\u0105\u000b",
    "\t\u0003\n\u0003\n\u0003\n\u0005\n\u010a\n\n\u0003\n\u0003\n\u0005\n",
    "\u010e\n\n\u0003\n\u0005\n\u0111\n\n\u0003\u000b\u0006\u000b\u0114\n",
    "\u000b\r\u000b\u000e\u000b\u0115\u0003\f\u0003\f\u0003\f\u0005\f\u011b",
    "\n\f\u0003\f\u0003\f\u0003\r\u0003\r\u0003\r\u0003\u000e\u0003\u000e",
    "\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e",
    "\u0003\u000e\u0003\u000e\u0005\u000e\u012c\n\u000e\u0003\u000e\u0003",
    "\u000e\u0003\u000e\u0005\u000e\u0131\n\u000e\u0003\u000e\u0003\u000e",
    "\u0005\u000e\u0135\n\u000e\u0003\u000f\u0003\u000f\u0003\u000f\u0003",
    "\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0005\u0010\u013e\n\u0010",
    "\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0005\u0010",
    "\u0145\n\u0010\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0005",
    "\u0011\u014b\n\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0012",
    "\u0003\u0012\u0003\u0012\u0007\u0012\u0153\n\u0012\f\u0012\u000e\u0012",
    "\u0156\u000b\u0012\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0007",
    "\u0013\u015c\n\u0013\f\u0013\u000e\u0013\u015f\u000b\u0013\u0005\u0013",
    "\u0161\n\u0013\u0003\u0013\u0003\u0013\u0003\u0014\u0003\u0014\u0003",
    "\u0014\u0003\u0014\u0005\u0014\u0169\n\u0014\u0003\u0014\u0003\u0014",
    "\u0003\u0014\u0003\u0014\u0005\u0014\u016f\n\u0014\u0003\u0014\u0003",
    "\u0014\u0003\u0014\u0005\u0014\u0174\n\u0014\u0003\u0014\u0003\u0014",
    "\u0003\u0015\u0003\u0015\u0005\u0015\u017a\n\u0015\u0006\u0015\u017c",
    "\n\u0015\r\u0015\u000e\u0015\u017d\u0003\u0016\u0005\u0016\u0181\n\u0016",
    "\u0003\u0016\u0003\u0016\u0003\u0016\u0005\u0016\u0186\n\u0016\u0003",
    "\u0016\u0003\u0016\u0003\u0016\u0003\u0017\u0006\u0017\u018c\n\u0017",
    "\r\u0017\u000e\u0017\u018d\u0003\u0018\u0003\u0018\u0003\u0018\u0003",
    "\u0018\u0003\u0019\u0003\u0019\u0005\u0019\u0196\n\u0019\u0003\u0019",
    "\u0003\u0019\u0003\u001a\u0006\u001a\u019b\n\u001a\r\u001a\u000e\u001a",
    "\u019c\u0003\u001b\u0003\u001b\u0003\u001b\u0005\u001b\u01a2\n\u001b",
    "\u0003\u001c\u0003\u001c\u0005\u001c\u01a6\n\u001c\u0003\u001d\u0003",
    "\u001d\u0003\u001e\u0003\u001e\u0003\u001e\u0003\u001e\u0003\u001e\u0003",
    "\u001e\u0005\u001e\u01b0\n\u001e\u0003\u001f\u0003\u001f\u0003\u001f",
    "\u0005\u001f\u01b5\n\u001f\u0003 \u0003 \u0003 \u0003 \u0005 \u01bb",
    "\n \u0003!\u0003!\u0003\"\u0003\"\u0003#\u0003#\u0003$\u0003$\u0003",
    "%\u0003%\u0005%\u01c7\n%\u0003&\u0003&\u0003&\u0003&\u0003&\u0003&\u0003",
    "&\u0003&\u0003&\u0005&\u01d2\n&\u0003\'\u0003\'\u0003\'\u0002\u0003",
    "\u000e(\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018",
    "\u001a\u001c\u001e \"$&(*,.02468:<>@BDFHJL\u0002\u0006\u0004\u0002<",
    "<^^\u0003\u0002.9\u0003\u0002<@\u0003\u0003\u000b\u000b\u0002\u0213",
    "\u0002N\u0003\u0002\u0002\u0002\u0004Q\u0003\u0002\u0002\u0002\u0006",
    "_\u0003\u0002\u0002\u0002\ba\u0003\u0002\u0002\u0002\ng\u0003\u0002",
    "\u0002\u0002\fj\u0003\u0002\u0002\u0002\u000e\u00ba\u0003\u0002\u0002",
    "\u0002\u0010\u00fe\u0003\u0002\u0002\u0002\u0012\u0106\u0003\u0002\u0002",
    "\u0002\u0014\u0113\u0003\u0002\u0002\u0002\u0016\u0117\u0003\u0002\u0002",
    "\u0002\u0018\u011e\u0003\u0002\u0002\u0002\u001a\u0134\u0003\u0002\u0002",
    "\u0002\u001c\u0136\u0003\u0002\u0002\u0002\u001e\u0144\u0003\u0002\u0002",
    "\u0002 \u0146\u0003\u0002\u0002\u0002\"\u014f\u0003\u0002\u0002\u0002",
    "$\u0157\u0003\u0002\u0002\u0002&\u0164\u0003\u0002\u0002\u0002(\u017b",
    "\u0003\u0002\u0002\u0002*\u0180\u0003\u0002\u0002\u0002,\u018b\u0003",
    "\u0002\u0002\u0002.\u018f\u0003\u0002\u0002\u00020\u0193\u0003\u0002",
    "\u0002\u00022\u019a\u0003\u0002\u0002\u00024\u019e\u0003\u0002\u0002",
    "\u00026\u01a5\u0003\u0002\u0002\u00028\u01a7\u0003\u0002\u0002\u0002",
    ":\u01af\u0003\u0002\u0002\u0002<\u01b4\u0003\u0002\u0002\u0002>\u01ba",
    "\u0003\u0002\u0002\u0002@\u01bc\u0003\u0002\u0002\u0002B\u01be\u0003",
    "\u0002\u0002\u0002D\u01c0\u0003\u0002\u0002\u0002F\u01c2\u0003\u0002",
    "\u0002\u0002H\u01c6\u0003\u0002\u0002\u0002J\u01d1\u0003\u0002\u0002",
    "\u0002L\u01d3\u0003\u0002\u0002\u0002NO\u0005\u0004\u0003\u0002O\u0003",
    "\u0003\u0002\u0002\u0002PR\u0005\u0006\u0004\u0002QP\u0003\u0002\u0002",
    "\u0002RS\u0003\u0002\u0002\u0002SQ\u0003\u0002\u0002\u0002ST\u0003\u0002",
    "\u0002\u0002T\u0005\u0003\u0002\u0002\u0002U`\u0005\b\u0005\u0002V`",
    "\u0005\n\u0006\u0002W`\u0005\f\u0007\u0002X`\u0005\u0012\n\u0002Y`\u0005",
    "\u001a\u000e\u0002Z`\u0005\u001c\u000f\u0002[`\u0005\u001e\u0010\u0002",
    "\\`\u0005&\u0014\u0002]`\u0005 \u0011\u0002^`\u0005\u000e\b\u0002_U",
    "\u0003\u0002\u0002\u0002_V\u0003\u0002\u0002\u0002_W\u0003\u0002\u0002",
    "\u0002_X\u0003\u0002\u0002\u0002_Y\u0003\u0002\u0002\u0002_Z\u0003\u0002",
    "\u0002\u0002_[\u0003\u0002\u0002\u0002_\\\u0003\u0002\u0002\u0002_]",
    "\u0003\u0002\u0002\u0002_^\u0003\u0002\u0002\u0002`\u0007\u0003\u0002",
    "\u0002\u0002ac\u0007\t\u0002\u0002bd\u0005\u0004\u0003\u0002cb\u0003",
    "\u0002\u0002\u0002cd\u0003\u0002\u0002\u0002de\u0003\u0002\u0002\u0002",
    "ef\u0007\n\u0002\u0002f\t\u0003\u0002\u0002\u0002gh\u0007F\u0002\u0002",
    "hi\t\u0002\u0002\u0002i\u000b\u0003\u0002\u0002\u0002jk\u0007G\u0002",
    "\u0002kl\u0005\u000e\b\u0002l\r\u0003\u0002\u0002\u0002mn\b\b\u0001",
    "\u0002no\u0007^\u0002\u0002o\u00bb\u00052\u001a\u0002pq\u0007^\u0002",
    "\u0002q\u00bb\u0005$\u0013\u0002rs\u0007^\u0002\u0002st\u0007\u0011",
    "\u0002\u0002tu\u0007[\u0002\u0002uv\u0007\u0007\u0002\u0002vw\u0005",
    "\u000e\b\u0002wx\u0007\b\u0002\u0002x\u00bb\u0003\u0002\u0002\u0002",
    "yz\u0007^\u0002\u0002z{\u0007\u0011\u0002\u0002{|\u0007\\\u0002\u0002",
    "|}\u0007\u0007\u0002\u0002}~\u0007_\u0002\u0002~\u007f\u0007\f\u0002",
    "\u0002\u007f\u0080\u0005\u000e\b\u0002\u0080\u0081\u0007\b\u0002\u0002",
    "\u0081\u00bb\u0003\u0002\u0002\u0002\u0082\u0083\u0007^\u0002\u0002",
    "\u0083\u0084\u0007\u0011\u0002\u0002\u0084\u0085\u0007Q\u0002\u0002",
    "\u0085\u0086\u0007\u0007\u0002\u0002\u0086\u0087\u0007_\u0002\u0002",
    "\u0087\u00bb\u0007\b\u0002\u0002\u0088\u0089\u0007^\u0002\u0002\u0089",
    "\u008a\u0007\u0011\u0002\u0002\u008a\u008b\u0007^\u0002\u0002\u008b",
    "\u00bb\u0005$\u0013\u0002\u008c\u008d\u0007^\u0002\u0002\u008d\u008e",
    "\u0007\u0011\u0002\u0002\u008e\u00bb\u0007^\u0002\u0002\u008f\u0090",
    "\u0007^\u0002\u0002\u0090\u0091\u0007Y\u0002\u0002\u0091\u00bb\u0007",
    "^\u0002\u0002\u0092\u0093\u0007V\u0002\u0002\u0093\u0094\u0007\u0011",
    "\u0002\u0002\u0094\u00bb\u0007^\u0002\u0002\u0095\u0096\u0007W\u0002",
    "\u0002\u0096\u0097\u0007\u0011\u0002\u0002\u0097\u0098\u0007^\u0002",
    "\u0002\u0098\u00bb\u0005$\u0013\u0002\u0099\u009a\u0007X\u0002\u0002",
    "\u009a\u00bb\u0005$\u0013\u0002\u009b\u009c\u0007\u0012\u0002\u0002",
    "\u009c\u00bb\u0005\u000e\b$\u009d\u009e\u0007\u0013\u0002\u0002\u009e",
    "\u00bb\u0005\u000e\b#\u009f\u00a0\u0007\u0014\u0002\u0002\u00a0\u00bb",
    "\u0005\u000e\b\"\u00a1\u00a2\u0007\u0015\u0002\u0002\u00a2\u00bb\u0005",
    "\u000e\b!\u00a3\u00a4\u0007\u0016\u0002\u0002\u00a4\u00bb\u0005\u000e",
    "\b \u00a5\u00a6\u0007\u0017\u0002\u0002\u00a6\u00bb\u0005\u000e\b\u001f",
    "\u00a7\u00a9\u0007P\u0002\u0002\u00a8\u00a7\u0003\u0002\u0002\u0002",
    "\u00a8\u00a9\u0003\u0002\u0002\u0002\u00a9\u00aa\u0003\u0002\u0002\u0002",
    "\u00aa\u00bb\u00052\u001a\u0002\u00ab\u00ac\u0005:\u001e\u0002\u00ac",
    "\u00ad\u0007\r\u0002\u0002\u00ad\u00ae\u0005\u000e\b\b\u00ae\u00bb\u0003",
    "\u0002\u0002\u0002\u00af\u00b0\u0005:\u001e\u0002\u00b0\u00b1\u0005",
    "8\u001d\u0002\u00b1\u00b2\u0005\u000e\b\u0007\u00b2\u00bb\u0003\u0002",
    "\u0002\u0002\u00b3\u00bb\u0007^\u0002\u0002\u00b4\u00bb\u0005> \u0002",
    "\u00b5\u00b6\u0007\u0007\u0002\u0002\u00b6\u00b7\u0005\u000e\b\u0002",
    "\u00b7\u00b8\u0007\b\u0002\u0002\u00b8\u00bb\u0003\u0002\u0002\u0002",
    "\u00b9\u00bb\u0007\u0004\u0002\u0002\u00bam\u0003\u0002\u0002\u0002",
    "\u00bap\u0003\u0002\u0002\u0002\u00bar\u0003\u0002\u0002\u0002\u00ba",
    "y\u0003\u0002\u0002\u0002\u00ba\u0082\u0003\u0002\u0002\u0002\u00ba",
    "\u0088\u0003\u0002\u0002\u0002\u00ba\u008c\u0003\u0002\u0002\u0002\u00ba",
    "\u008f\u0003\u0002\u0002\u0002\u00ba\u0092\u0003\u0002\u0002\u0002\u00ba",
    "\u0095\u0003\u0002\u0002\u0002\u00ba\u0099\u0003\u0002\u0002\u0002\u00ba",
    "\u009b\u0003\u0002\u0002\u0002\u00ba\u009d\u0003\u0002\u0002\u0002\u00ba",
    "\u009f\u0003\u0002\u0002\u0002\u00ba\u00a1\u0003\u0002\u0002\u0002\u00ba",
    "\u00a3\u0003\u0002\u0002\u0002\u00ba\u00a5\u0003\u0002\u0002\u0002\u00ba",
    "\u00a8\u0003\u0002\u0002\u0002\u00ba\u00ab\u0003\u0002\u0002\u0002\u00ba",
    "\u00af\u0003\u0002\u0002\u0002\u00ba\u00b3\u0003\u0002\u0002\u0002\u00ba",
    "\u00b4\u0003\u0002\u0002\u0002\u00ba\u00b5\u0003\u0002\u0002\u0002\u00ba",
    "\u00b9\u0003\u0002\u0002\u0002\u00bb\u00fb\u0003\u0002\u0002\u0002\u00bc",
    "\u00bd\f\u001e\u0002\u0002\u00bd\u00be\u0007\u0014\u0002\u0002\u00be",
    "\u00fa\u0005\u000e\b\u001f\u00bf\u00c0\f\u001d\u0002\u0002\u00c0\u00c1",
    "\u0007\u0015\u0002\u0002\u00c1\u00fa\u0005\u000e\b\u001e\u00c2\u00c3",
    "\f\u001c\u0002\u0002\u00c3\u00c4\u0007\u0018\u0002\u0002\u00c4\u00fa",
    "\u0005\u000e\b\u001d\u00c5\u00c6\f\u001b\u0002\u0002\u00c6\u00c7\u0007",
    "\u0019\u0002\u0002\u00c7\u00fa\u0005\u000e\b\u001c\u00c8\u00c9\f\u001a",
    "\u0002\u0002\u00c9\u00ca\u0007\u001b\u0002\u0002\u00ca\u00fa\u0005\u000e",
    "\b\u001a\u00cb\u00cc\f\u0019\u0002\u0002\u00cc\u00cd\u0007\u001a\u0002",
    "\u0002\u00cd\u00fa\u0005\u000e\b\u001a\u00ce\u00cf\f\u0018\u0002\u0002",
    "\u00cf\u00d0\u0007!\u0002\u0002\u00d0\u00fa\u0005\u000e\b\u0019\u00d1",
    "\u00d2\f\u0017\u0002\u0002\u00d2\u00d3\u0007\"\u0002\u0002\u00d3\u00fa",
    "\u0005\u000e\b\u0018\u00d4\u00d5\f\u0016\u0002\u0002\u00d5\u00d6\u0007",
    "#\u0002\u0002\u00d6\u00fa\u0005\u000e\b\u0017\u00d7\u00d8\f\u0015\u0002",
    "\u0002\u00d8\u00d9\u0007$\u0002\u0002\u00d9\u00fa\u0005\u000e\b\u0016",
    "\u00da\u00db\f\u0014\u0002\u0002\u00db\u00dc\u0007)\u0002\u0002\u00dc",
    "\u00fa\u0005\u000e\b\u0015\u00dd\u00de\f\u0013\u0002\u0002\u00de\u00df",
    "\u0007+\u0002\u0002\u00df\u00fa\u0005\u000e\b\u0014\u00e0\u00e1\f\u0012",
    "\u0002\u0002\u00e1\u00e2\u0007*\u0002\u0002\u00e2\u00fa\u0005\u000e",
    "\b\u0013\u00e3\u00e4\f\u0011\u0002\u0002\u00e4\u00e5\u0007\'\u0002\u0002",
    "\u00e5\u00fa\u0005\u000e\b\u0012\u00e6\u00e7\f\u0010\u0002\u0002\u00e7",
    "\u00e8\u0007(\u0002\u0002\u00e8\u00fa\u0005\u000e\b\u0011\u00e9\u00ea",
    "\f\u000f\u0002\u0002\u00ea\u00eb\u0007%\u0002\u0002\u00eb\u00fa\u0005",
    "\u000e\b\u0010\u00ec\u00ed\f\u000e\u0002\u0002\u00ed\u00ee\u0007&\u0002",
    "\u0002\u00ee\u00fa\u0005\u000e\b\u000f\u00ef\u00f0\f\r\u0002\u0002\u00f0",
    "\u00f1\u0007,\u0002\u0002\u00f1\u00fa\u0005\u000e\b\u000e\u00f2\u00f3",
    "\f\f\u0002\u0002\u00f3\u00f4\u0007-\u0002\u0002\u00f4\u00fa\u0005\u000e",
    "\b\r\u00f5\u00f6\f\u000b\u0002\u0002\u00f6\u00fa\u0007\u0012\u0002\u0002",
    "\u00f7\u00f8\f\n\u0002\u0002\u00f8\u00fa\u0007\u0013\u0002\u0002\u00f9",
    "\u00bc\u0003\u0002\u0002\u0002\u00f9\u00bf\u0003\u0002\u0002\u0002\u00f9",
    "\u00c2\u0003\u0002\u0002\u0002\u00f9\u00c5\u0003\u0002\u0002\u0002\u00f9",
    "\u00c8\u0003\u0002\u0002\u0002\u00f9\u00cb\u0003\u0002\u0002\u0002\u00f9",
    "\u00ce\u0003\u0002\u0002\u0002\u00f9\u00d1\u0003\u0002\u0002\u0002\u00f9",
    "\u00d4\u0003\u0002\u0002\u0002\u00f9\u00d7\u0003\u0002\u0002\u0002\u00f9",
    "\u00da\u0003\u0002\u0002\u0002\u00f9\u00dd\u0003\u0002\u0002\u0002\u00f9",
    "\u00e0\u0003\u0002\u0002\u0002\u00f9\u00e3\u0003\u0002\u0002\u0002\u00f9",
    "\u00e6\u0003\u0002\u0002\u0002\u00f9\u00e9\u0003\u0002\u0002\u0002\u00f9",
    "\u00ec\u0003\u0002\u0002\u0002\u00f9\u00ef\u0003\u0002\u0002\u0002\u00f9",
    "\u00f2\u0003\u0002\u0002\u0002\u00f9\u00f5\u0003\u0002\u0002\u0002\u00f9",
    "\u00f7\u0003\u0002\u0002\u0002\u00fa\u00fd\u0003\u0002\u0002\u0002\u00fb",
    "\u00f9\u0003\u0002\u0002\u0002\u00fb\u00fc\u0003\u0002\u0002\u0002\u00fc",
    "\u000f\u0003\u0002\u0002\u0002\u00fd\u00fb\u0003\u0002\u0002\u0002\u00fe",
    "\u0103\u0005\u000e\b\u0002\u00ff\u0100\u0007\f\u0002\u0002\u0100\u0102",
    "\u0005\u000e\b\u0002\u0101\u00ff\u0003\u0002\u0002\u0002\u0102\u0105",
    "\u0003\u0002\u0002\u0002\u0103\u0101\u0003\u0002\u0002\u0002\u0103\u0104",
    "\u0003\u0002\u0002\u0002\u0104\u0011\u0003\u0002\u0002\u0002\u0105\u0103",
    "\u0003\u0002\u0002\u0002\u0106\u0107\u0007J\u0002\u0002\u0107\u0109",
    "\u0005\u000e\b\u0002\u0108\u010a\u0007K\u0002\u0002\u0109\u0108\u0003",
    "\u0002\u0002\u0002\u0109\u010a\u0003\u0002\u0002\u0002\u010a\u010b\u0003",
    "\u0002\u0002\u0002\u010b\u010d\u0005\u0006\u0004\u0002\u010c\u010e\u0005",
    "\u0014\u000b\u0002\u010d\u010c\u0003\u0002\u0002\u0002\u010d\u010e\u0003",
    "\u0002\u0002\u0002\u010e\u0110\u0003\u0002\u0002\u0002\u010f\u0111\u0005",
    "\u0018\r\u0002\u0110\u010f\u0003\u0002\u0002\u0002\u0110\u0111\u0003",
    "\u0002\u0002\u0002\u0111\u0013\u0003\u0002\u0002\u0002\u0112\u0114\u0005",
    "\u0016\f\u0002\u0113\u0112\u0003\u0002\u0002\u0002\u0114\u0115\u0003",
    "\u0002\u0002\u0002\u0115\u0113\u0003\u0002\u0002\u0002\u0115\u0116\u0003",
    "\u0002\u0002\u0002\u0116\u0015\u0003\u0002\u0002\u0002\u0117\u0118\u0007",
    "L\u0002\u0002\u0118\u011a\u0005\u000e\b\u0002\u0119\u011b\u0007K\u0002",
    "\u0002\u011a\u0119\u0003\u0002\u0002\u0002\u011a\u011b\u0003\u0002\u0002",
    "\u0002\u011b\u011c\u0003\u0002\u0002\u0002\u011c\u011d\u0005\u0006\u0004",
    "\u0002\u011d\u0017\u0003\u0002\u0002\u0002\u011e\u011f\u0007M\u0002",
    "\u0002\u011f\u0120\u0005\u0006\u0004\u0002\u0120\u0019\u0003\u0002\u0002",
    "\u0002\u0121\u0122\u0007I\u0002\u0002\u0122\u0123\u0005\u000e\b\u0002",
    "\u0123\u0124\u0005\u0006\u0004\u0002\u0124\u0135\u0003\u0002\u0002\u0002",
    "\u0125\u0126\u0007I\u0002\u0002\u0126\u0127\u0005\u0006\u0004\u0002",
    "\u0127\u0128\u0007H\u0002\u0002\u0128\u0129\u0005\u000e\b\u0002\u0129",
    "\u0135\u0003\u0002\u0002\u0002\u012a\u012c\u0007I\u0002\u0002\u012b",
    "\u012a\u0003\u0002\u0002\u0002\u012b\u012c\u0003\u0002\u0002\u0002\u012c",
    "\u012d\u0003\u0002\u0002\u0002\u012d\u012e\u0007H\u0002\u0002\u012e",
    "\u0130\u0005\u000e\b\u0002\u012f\u0131\u0007I\u0002\u0002\u0130\u012f",
    "\u0003\u0002\u0002\u0002\u0130\u0131\u0003\u0002\u0002\u0002\u0131\u0132",
    "\u0003\u0002\u0002\u0002\u0132\u0133\u0005\u0006\u0004\u0002\u0133\u0135",
    "\u0003\u0002\u0002\u0002\u0134\u0121\u0003\u0002\u0002\u0002\u0134\u0125",
    "\u0003\u0002\u0002\u0002\u0134\u012b\u0003\u0002\u0002\u0002\u0135\u001b",
    "\u0003\u0002\u0002\u0002\u0136\u0137\u0007N\u0002\u0002\u0137\u0138",
    "\u0005\u000e\b\u0002\u0138\u001d\u0003\u0002\u0002\u0002\u0139\u013a",
    "\u0007]\u0002\u0002\u013a\u013b\u0007^\u0002\u0002\u013b\u013d\u0007",
    "\r\u0002\u0002\u013c\u013e\u0007P\u0002\u0002\u013d\u013c\u0003\u0002",
    "\u0002\u0002\u013d\u013e\u0003\u0002\u0002\u0002\u013e\u013f\u0003\u0002",
    "\u0002\u0002\u013f\u0145\u00052\u001a\u0002\u0140\u0141\u0007]\u0002",
    "\u0002\u0141\u0142\u0007^\u0002\u0002\u0142\u0143\u0007\r\u0002\u0002",
    "\u0143\u0145\u0005\u000e\b\u0002\u0144\u0139\u0003\u0002\u0002\u0002",
    "\u0144\u0140\u0003\u0002\u0002\u0002\u0145\u001f\u0003\u0002\u0002\u0002",
    "\u0146\u0147\u0007O\u0002\u0002\u0147\u0148\u0007^\u0002\u0002\u0148",
    "\u014a\u0007\u0007\u0002\u0002\u0149\u014b\u0005\"\u0012\u0002\u014a",
    "\u0149\u0003\u0002\u0002\u0002\u014a\u014b\u0003\u0002\u0002\u0002\u014b",
    "\u014c\u0003\u0002\u0002\u0002\u014c\u014d\u0007\b\u0002\u0002\u014d",
    "\u014e\u00056\u001c\u0002\u014e!\u0003\u0002\u0002\u0002\u014f\u0154",
    "\u00054\u001b\u0002\u0150\u0151\u0007\f\u0002\u0002\u0151\u0153\u0005",
    "4\u001b\u0002\u0152\u0150\u0003\u0002\u0002\u0002\u0153\u0156\u0003",
    "\u0002\u0002\u0002\u0154\u0152\u0003\u0002\u0002\u0002\u0154\u0155\u0003",
    "\u0002\u0002\u0002\u0155#\u0003\u0002\u0002\u0002\u0156\u0154\u0003",
    "\u0002\u0002\u0002\u0157\u0160\u0007\u0007\u0002\u0002\u0158\u015d\u0005",
    "\u000e\b\u0002\u0159\u015a\u0007\f\u0002\u0002\u015a\u015c\u0005\u000e",
    "\b\u0002\u015b\u0159\u0003\u0002\u0002\u0002\u015c\u015f\u0003\u0002",
    "\u0002\u0002\u015d\u015b\u0003\u0002\u0002\u0002\u015d\u015e\u0003\u0002",
    "\u0002\u0002\u015e\u0161\u0003\u0002\u0002\u0002\u015f\u015d\u0003\u0002",
    "\u0002\u0002\u0160\u0158\u0003\u0002\u0002\u0002\u0160\u0161\u0003\u0002",
    "\u0002\u0002\u0161\u0162\u0003\u0002\u0002\u0002\u0162\u0163\u0007\b",
    "\u0002\u0002\u0163%\u0003\u0002\u0002\u0002\u0164\u0165\u0007T\u0002",
    "\u0002\u0165\u0168\u0007^\u0002\u0002\u0166\u0167\u0007U\u0002\u0002",
    "\u0167\u0169\u0007^\u0002\u0002\u0168\u0166\u0003\u0002\u0002\u0002",
    "\u0168\u0169\u0003\u0002\u0002\u0002\u0169\u016a\u0003\u0002\u0002\u0002",
    "\u016a\u016e\u0007\t\u0002\u0002\u016b\u016c\u0007V\u0002\u0002\u016c",
    "\u016d\u0007\u000f\u0002\u0002\u016d\u016f\u0005(\u0015\u0002\u016e",
    "\u016b\u0003\u0002\u0002\u0002\u016e\u016f\u0003\u0002\u0002\u0002\u016f",
    "\u0173\u0003\u0002\u0002\u0002\u0170\u0171\u0007W\u0002\u0002\u0171",
    "\u0172\u0007\u000f\u0002\u0002\u0172\u0174\u0005,\u0017\u0002\u0173",
    "\u0170\u0003\u0002\u0002\u0002\u0173\u0174\u0003\u0002\u0002\u0002\u0174",
    "\u0175\u0003\u0002\u0002\u0002\u0175\u0176\u0007\n\u0002\u0002\u0176",
    "\'\u0003\u0002\u0002\u0002\u0177\u0179\u0007^\u0002\u0002\u0178\u017a",
    "\u0007\f\u0002\u0002\u0179\u0178\u0003\u0002\u0002\u0002\u0179\u017a",
    "\u0003\u0002\u0002\u0002\u017a\u017c\u0003\u0002\u0002\u0002\u017b\u0177",
    "\u0003\u0002\u0002\u0002\u017c\u017d\u0003\u0002\u0002\u0002\u017d\u017b",
    "\u0003\u0002\u0002\u0002\u017d\u017e\u0003\u0002\u0002\u0002\u017e)",
    "\u0003\u0002\u0002\u0002\u017f\u0181\u0007O\u0002\u0002\u0180\u017f",
    "\u0003\u0002\u0002\u0002\u0180\u0181\u0003\u0002\u0002\u0002\u0181\u0182",
    "\u0003\u0002\u0002\u0002\u0182\u0183\u0007^\u0002\u0002\u0183\u0185",
    "\u0007\u0007\u0002\u0002\u0184\u0186\u0005\"\u0012\u0002\u0185\u0184",
    "\u0003\u0002\u0002\u0002\u0185\u0186\u0003\u0002\u0002\u0002\u0186\u0187",
    "\u0003\u0002\u0002\u0002\u0187\u0188\u0007\b\u0002\u0002\u0188\u0189",
    "\u00056\u001c\u0002\u0189+\u0003\u0002\u0002\u0002\u018a\u018c\u0005",
    "*\u0016\u0002\u018b\u018a\u0003\u0002\u0002\u0002\u018c\u018d\u0003",
    "\u0002\u0002\u0002\u018d\u018b\u0003\u0002\u0002\u0002\u018d\u018e\u0003",
    "\u0002\u0002\u0002\u018e-\u0003\u0002\u0002\u0002\u018f\u0190\u0007",
    "S\u0002\u0002\u0190\u0191\u0007^\u0002\u0002\u0191\u0192\u0005$\u0013",
    "\u0002\u0192/\u0003\u0002\u0002\u0002\u0193\u0195\u0007\u0005\u0002",
    "\u0002\u0194\u0196\u0005\u000e\b\u0002\u0195\u0194\u0003\u0002\u0002",
    "\u0002\u0195\u0196\u0003\u0002\u0002\u0002\u0196\u0197\u0003\u0002\u0002",
    "\u0002\u0197\u0198\u0007\u0006\u0002\u0002\u01981\u0003\u0002\u0002",
    "\u0002\u0199\u019b\u00050\u0019\u0002\u019a\u0199\u0003\u0002\u0002",
    "\u0002\u019b\u019c\u0003\u0002\u0002\u0002\u019c\u019a\u0003\u0002\u0002",
    "\u0002\u019c\u019d\u0003\u0002\u0002\u0002\u019d3\u0003\u0002\u0002",
    "\u0002\u019e\u01a1\u0007^\u0002\u0002\u019f\u01a0\u0007\r\u0002\u0002",
    "\u01a0\u01a2\u0005\u000e\b\u0002\u01a1\u019f\u0003\u0002\u0002\u0002",
    "\u01a1\u01a2\u0003\u0002\u0002\u0002\u01a25\u0003\u0002\u0002\u0002",
    "\u01a3\u01a6\u0005\b\u0005\u0002\u01a4\u01a6\u0005\u0006\u0004\u0002",
    "\u01a5\u01a3\u0003\u0002\u0002\u0002\u01a5\u01a4\u0003\u0002\u0002\u0002",
    "\u01a67\u0003\u0002\u0002\u0002\u01a7\u01a8\t\u0003\u0002\u0002\u01a8",
    "9\u0003\u0002\u0002\u0002\u01a9\u01aa\u0007V\u0002\u0002\u01aa\u01ab",
    "\u0007\u0011\u0002\u0002\u01ab\u01b0\u0007^\u0002\u0002\u01ac\u01ad",
    "\u0007^\u0002\u0002\u01ad\u01b0\u00052\u001a\u0002\u01ae\u01b0\u0007",
    "^\u0002\u0002\u01af\u01a9\u0003\u0002\u0002\u0002\u01af\u01ac\u0003",
    "\u0002\u0002\u0002\u01af\u01ae\u0003\u0002\u0002\u0002\u01b0;\u0003",
    "\u0002\u0002\u0002\u01b1\u01b5\u0005J&\u0002\u01b2\u01b5\u0007;\u0002",
    "\u0002\u01b3\u01b5\u0007E\u0002\u0002\u01b4\u01b1\u0003\u0002\u0002",
    "\u0002\u01b4\u01b2\u0003\u0002\u0002\u0002\u01b4\u01b3\u0003\u0002\u0002",
    "\u0002\u01b5=\u0003\u0002\u0002\u0002\u01b6\u01bb\u0005D#\u0002\u01b7",
    "\u01bb\u0005@!\u0002\u01b8\u01bb\u0005B\"\u0002\u01b9\u01bb\u0005F$",
    "\u0002\u01ba\u01b6\u0003\u0002\u0002\u0002\u01ba\u01b7\u0003\u0002\u0002",
    "\u0002\u01ba\u01b8\u0003\u0002\u0002\u0002\u01ba\u01b9\u0003\u0002\u0002",
    "\u0002\u01bb?\u0003\u0002\u0002\u0002\u01bc\u01bd\u0007E\u0002\u0002",
    "\u01bdA\u0003\u0002\u0002\u0002\u01be\u01bf\u0007_\u0002\u0002\u01bf",
    "C\u0003\u0002\u0002\u0002\u01c0\u01c1\u0007;\u0002\u0002\u01c1E\u0003",
    "\u0002\u0002\u0002\u01c2\u01c3\t\u0004\u0002\u0002\u01c3G\u0003\u0002",
    "\u0002\u0002\u01c4\u01c7\u0007^\u0002\u0002\u01c5\u01c7\u0005<\u001f",
    "\u0002\u01c6\u01c4\u0003\u0002\u0002\u0002\u01c6\u01c5\u0003\u0002\u0002",
    "\u0002\u01c7I\u0003\u0002\u0002\u0002\u01c8\u01d2\u0003\u0002\u0002",
    "\u0002\u01c9\u01d2\u0007M\u0002\u0002\u01ca\u01d2\u0007K\u0002\u0002",
    "\u01cb\u01d2\u0007N\u0002\u0002\u01cc\u01d2\u0007H\u0002\u0002\u01cd",
    "\u01d2\u0007O\u0002\u0002\u01ce\u01d2\u0007J\u0002\u0002\u01cf\u01d2",
    "\u0007P\u0002\u0002\u01d0\u01d2\u0003\u0002\u0002\u0002\u01d1\u01c8",
    "\u0003\u0002\u0002\u0002\u01d1\u01c9\u0003\u0002\u0002\u0002\u01d1\u01ca",
    "\u0003\u0002\u0002\u0002\u01d1\u01cb\u0003\u0002\u0002\u0002\u01d1\u01cc",
    "\u0003\u0002\u0002\u0002\u01d1\u01cd\u0003\u0002\u0002\u0002\u01d1\u01ce",
    "\u0003\u0002\u0002\u0002\u01d1\u01cf\u0003\u0002\u0002\u0002\u01d1\u01d0",
    "\u0003\u0002\u0002\u0002\u01d2K\u0003\u0002\u0002\u0002\u01d3\u01d4",
    "\t\u0005\u0002\u0002\u01d4M\u0003\u0002\u0002\u0002)S_c\u00a8\u00ba",
    "\u00f9\u00fb\u0103\u0109\u010d\u0110\u0115\u011a\u012b\u0130\u0134\u013d",
    "\u0144\u014a\u0154\u015d\u0160\u0168\u016e\u0173\u0179\u017d\u0180\u0185",
    "\u018d\u0195\u019c\u01a1\u01a5\u01af\u01b4\u01ba\u01c6\u01d1"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class SintesisParser extends antlr4.Parser {

    static grammarFileName = "SintesisParser.g4";
    static literalNames = [ null, null, null, "'['", "']'", "'('", "')'", 
                            "'{'", "'}'", "';'", "','", "'='", "'?'", "':'", 
                            "'...'", "'.'", "'++'", "'--'", "'+'", "'-'", 
                            "'~'", "'!'", "'*'", "'/'", "'%'", "'**'", "'??'", 
                            "'#'", "'>>'", "'<<'", "'>>>'", "'<'", "'>'", 
                            "'<='", "'>='", "'=='", "'!='", "'==='", "'!=='", 
                            "'&'", "'^'", "'|'", "'&&'", "'||'", "'*='", 
                            "'/='", "'%='", "'+='", "'-='", "'<<='", "'>>='", 
                            "'>>>='", "'&='", "'^='", "'|='", "'**='", "'=>'", 
                            "'null'", null, null, null, null, null, null, 
                            null, null, null, null, null, null, null, null, 
                            null, null, null, null, null, null, null, null, 
                            null, null, null, null, null, null, null, null, 
                            null, null, null, "'var'" ];
    static symbolicNames = [ null, "MultiLineComment", "SingleLineComment", 
                             "OpenBracket", "CloseBracket", "OpenParen", 
                             "CloseParen", "OpenBrace", "CloseBrace", "SemiColon", 
                             "Comma", "Assign", "QuestionMark", "Colon", 
                             "Ellipsis", "Dot", "PlusPlus", "MinusMinus", 
                             "Plus", "Minus", "BitNot", "Not", "Multiply", 
                             "Divide", "Modulus", "Power", "NullCoalesce", 
                             "Hashtag", "RightShiftArithmetic", "LeftShiftArithmetic", 
                             "RightShiftLogical", "LessThan", "MoreThan", 
                             "LessThanEquals", "GreaterThanEquals", "Equals_", 
                             "NotEquals", "IdentityEquals", "IdentityNotEquals", 
                             "BitAnd", "BitXOr", "BitOr", "And", "Or", "MultiplyAssign", 
                             "DivideAssign", "ModulusAssign", "PlusAssign", 
                             "MinusAssign", "LeftShiftArithmeticAssign", 
                             "RightShiftArithmeticAssign", "RightShiftLogicalAssign", 
                             "BitAndAssign", "BitXorAssign", "BitOrAssign", 
                             "PowerAssign", "ARROW", "NullLiteral", "DecimalLiteral", 
                             "HexIntegerLiteral", "OctalIntegerLiteral", 
                             "OctalIntegerLiteral2", "BinaryIntegerLiteral", 
                             "BigHexIntegerLiteral", "BigOctalIntegerLiteral", 
                             "BigBinaryIntegerLiteral", "BigDecimalIntegerLiteral", 
                             "BooleanLiteral", "Step", "Print", "While", 
                             "Repeat", "If", "Then", "ElseIf", "Else", "Return", 
                             "Function_", "Vector", "Delete", "NumberOf", 
                             "New_", "Class_", "Extends", "Attributes", 
                             "Methods", "Super", "InstanceOf", "Dictionary", 
                             "Get", "Set", "Var", "Identifier", "StringLiteral", 
                             "WhiteSpaces", "LineTerminator" ];
    static ruleNames = [ "program", "statementList", "statement", "block", 
                         "stepStatement", "printStatement", "expression", 
                         "expressionSequence", "ifStatement", "elseIfs", 
                         "elseIf", "elseStatement", "iterationStatement", 
                         "returnStatement", "varDeclaration", "functionDeclaration", 
                         "formalParameterList", "arguments", "classDeclaration", 
                         "identifiers", "methodDeclaration", "methodsList", 
                         "classExp", "vectorIndex", "vectorIndexes", "formalParameterArg", 
                         "functionBody", "assignmentOperator", "assignable", 
                         "reservedWord", "literal", "booleanLiteral", "stringLiteral", 
                         "nullLiteral", "numericLiteral", "identifierName", 
                         "keyword", "eos" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = SintesisParser.ruleNames;
        this.literalNames = SintesisParser.literalNames;
        this.symbolicNames = SintesisParser.symbolicNames;
    }

    get atn() {
        return atn;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 6:
    	    		return this.expression_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    expression_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 28);
    		case 1:
    			return this.precpred(this._ctx, 27);
    		case 2:
    			return this.precpred(this._ctx, 26);
    		case 3:
    			return this.precpred(this._ctx, 25);
    		case 4:
    			return this.precpred(this._ctx, 24);
    		case 5:
    			return this.precpred(this._ctx, 23);
    		case 6:
    			return this.precpred(this._ctx, 22);
    		case 7:
    			return this.precpred(this._ctx, 21);
    		case 8:
    			return this.precpred(this._ctx, 20);
    		case 9:
    			return this.precpred(this._ctx, 19);
    		case 10:
    			return this.precpred(this._ctx, 18);
    		case 11:
    			return this.precpred(this._ctx, 17);
    		case 12:
    			return this.precpred(this._ctx, 16);
    		case 13:
    			return this.precpred(this._ctx, 15);
    		case 14:
    			return this.precpred(this._ctx, 14);
    		case 15:
    			return this.precpred(this._ctx, 13);
    		case 16:
    			return this.precpred(this._ctx, 12);
    		case 17:
    			return this.precpred(this._ctx, 11);
    		case 18:
    			return this.precpred(this._ctx, 10);
    		case 19:
    			return this.precpred(this._ctx, 9);
    		case 20:
    			return this.precpred(this._ctx, 8);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	program() {
	    let localctx = new ProgramContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, SintesisParser.RULE_program);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 76;
	        this.statementList();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	statementList() {
	    let localctx = new StatementListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, SintesisParser.RULE_statementList);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 79; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 78;
	            this.statement();
	            this.state = 81; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << SintesisParser.SingleLineComment) | (1 << SintesisParser.OpenBracket) | (1 << SintesisParser.OpenParen) | (1 << SintesisParser.OpenBrace) | (1 << SintesisParser.PlusPlus) | (1 << SintesisParser.MinusMinus) | (1 << SintesisParser.Plus) | (1 << SintesisParser.Minus) | (1 << SintesisParser.BitNot) | (1 << SintesisParser.Not))) !== 0) || ((((_la - 57)) & ~0x1f) == 0 && ((1 << (_la - 57)) & ((1 << (SintesisParser.NullLiteral - 57)) | (1 << (SintesisParser.DecimalLiteral - 57)) | (1 << (SintesisParser.HexIntegerLiteral - 57)) | (1 << (SintesisParser.OctalIntegerLiteral - 57)) | (1 << (SintesisParser.OctalIntegerLiteral2 - 57)) | (1 << (SintesisParser.BinaryIntegerLiteral - 57)) | (1 << (SintesisParser.BooleanLiteral - 57)) | (1 << (SintesisParser.Step - 57)) | (1 << (SintesisParser.Print - 57)) | (1 << (SintesisParser.While - 57)) | (1 << (SintesisParser.Repeat - 57)) | (1 << (SintesisParser.If - 57)) | (1 << (SintesisParser.Return - 57)) | (1 << (SintesisParser.Function_ - 57)) | (1 << (SintesisParser.Vector - 57)) | (1 << (SintesisParser.Class_ - 57)) | (1 << (SintesisParser.Attributes - 57)) | (1 << (SintesisParser.Methods - 57)) | (1 << (SintesisParser.Super - 57)))) !== 0) || ((((_la - 91)) & ~0x1f) == 0 && ((1 << (_la - 91)) & ((1 << (SintesisParser.Var - 91)) | (1 << (SintesisParser.Identifier - 91)) | (1 << (SintesisParser.StringLiteral - 91)))) !== 0));
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	statement() {
	    let localctx = new StatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, SintesisParser.RULE_statement);
	    try {
	        this.state = 93;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case SintesisParser.OpenBrace:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 83;
	            this.block();
	            break;
	        case SintesisParser.Step:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 84;
	            this.stepStatement();
	            break;
	        case SintesisParser.Print:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 85;
	            this.printStatement();
	            break;
	        case SintesisParser.If:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 86;
	            this.ifStatement();
	            break;
	        case SintesisParser.While:
	        case SintesisParser.Repeat:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 87;
	            this.iterationStatement();
	            break;
	        case SintesisParser.Return:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 88;
	            this.returnStatement();
	            break;
	        case SintesisParser.Var:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 89;
	            this.varDeclaration();
	            break;
	        case SintesisParser.Class_:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 90;
	            this.classDeclaration();
	            break;
	        case SintesisParser.Function_:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 91;
	            this.functionDeclaration();
	            break;
	        case SintesisParser.SingleLineComment:
	        case SintesisParser.OpenBracket:
	        case SintesisParser.OpenParen:
	        case SintesisParser.PlusPlus:
	        case SintesisParser.MinusMinus:
	        case SintesisParser.Plus:
	        case SintesisParser.Minus:
	        case SintesisParser.BitNot:
	        case SintesisParser.Not:
	        case SintesisParser.NullLiteral:
	        case SintesisParser.DecimalLiteral:
	        case SintesisParser.HexIntegerLiteral:
	        case SintesisParser.OctalIntegerLiteral:
	        case SintesisParser.OctalIntegerLiteral2:
	        case SintesisParser.BinaryIntegerLiteral:
	        case SintesisParser.BooleanLiteral:
	        case SintesisParser.Vector:
	        case SintesisParser.Attributes:
	        case SintesisParser.Methods:
	        case SintesisParser.Super:
	        case SintesisParser.Identifier:
	        case SintesisParser.StringLiteral:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 92;
	            this.expression(0);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	block() {
	    let localctx = new BlockContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, SintesisParser.RULE_block);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 95;
	        this.match(SintesisParser.OpenBrace);
	        this.state = 97;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << SintesisParser.SingleLineComment) | (1 << SintesisParser.OpenBracket) | (1 << SintesisParser.OpenParen) | (1 << SintesisParser.OpenBrace) | (1 << SintesisParser.PlusPlus) | (1 << SintesisParser.MinusMinus) | (1 << SintesisParser.Plus) | (1 << SintesisParser.Minus) | (1 << SintesisParser.BitNot) | (1 << SintesisParser.Not))) !== 0) || ((((_la - 57)) & ~0x1f) == 0 && ((1 << (_la - 57)) & ((1 << (SintesisParser.NullLiteral - 57)) | (1 << (SintesisParser.DecimalLiteral - 57)) | (1 << (SintesisParser.HexIntegerLiteral - 57)) | (1 << (SintesisParser.OctalIntegerLiteral - 57)) | (1 << (SintesisParser.OctalIntegerLiteral2 - 57)) | (1 << (SintesisParser.BinaryIntegerLiteral - 57)) | (1 << (SintesisParser.BooleanLiteral - 57)) | (1 << (SintesisParser.Step - 57)) | (1 << (SintesisParser.Print - 57)) | (1 << (SintesisParser.While - 57)) | (1 << (SintesisParser.Repeat - 57)) | (1 << (SintesisParser.If - 57)) | (1 << (SintesisParser.Return - 57)) | (1 << (SintesisParser.Function_ - 57)) | (1 << (SintesisParser.Vector - 57)) | (1 << (SintesisParser.Class_ - 57)) | (1 << (SintesisParser.Attributes - 57)) | (1 << (SintesisParser.Methods - 57)) | (1 << (SintesisParser.Super - 57)))) !== 0) || ((((_la - 91)) & ~0x1f) == 0 && ((1 << (_la - 91)) & ((1 << (SintesisParser.Var - 91)) | (1 << (SintesisParser.Identifier - 91)) | (1 << (SintesisParser.StringLiteral - 91)))) !== 0)) {
	            this.state = 96;
	            localctx.stmt = this.statementList();
	        }

	        this.state = 99;
	        this.match(SintesisParser.CloseBrace);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	stepStatement() {
	    let localctx = new StepStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, SintesisParser.RULE_stepStatement);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 101;
	        this.match(SintesisParser.Step);
	        this.state = 102;
	        localctx.exp = this._input.LT(1);
	        _la = this._input.LA(1);
	        if(!(_la===SintesisParser.DecimalLiteral || _la===SintesisParser.Identifier)) {
	            localctx.exp = this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	printStatement() {
	    let localctx = new PrintStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, SintesisParser.RULE_printStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 104;
	        this.match(SintesisParser.Print);
	        this.state = 105;
	        localctx.exp = this.expression(0);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	expression(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ExpressionContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 12;
	    this.enterRecursionRule(localctx, 12, SintesisParser.RULE_expression, _p);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 184;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new ExpVectorContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 108;
	            localctx.id = this.match(SintesisParser.Identifier);
	            this.state = 109;
	            localctx.idx = this.vectorIndexes();
	            break;

	        case 2:
	            localctx = new ExpFunctionCallContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 110;
	            localctx.id = this.match(SintesisParser.Identifier);
	            this.state = 111;
	            localctx.args = this.arguments();
	            break;

	        case 3:
	            localctx = new ExpDictionaryGetContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 112;
	            localctx.id = this.match(SintesisParser.Identifier);
	            this.state = 113;
	            this.match(SintesisParser.Dot);
	            this.state = 114;
	            this.match(SintesisParser.Get);
	            this.state = 115;
	            this.match(SintesisParser.OpenParen);
	            this.state = 116;
	            localctx.exp = this.expression(0);
	            this.state = 117;
	            this.match(SintesisParser.CloseParen);
	            break;

	        case 4:
	            localctx = new ExpDictionarySetContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 119;
	            localctx.id = this.match(SintesisParser.Identifier);
	            this.state = 120;
	            this.match(SintesisParser.Dot);
	            this.state = 121;
	            this.match(SintesisParser.Set);
	            this.state = 122;
	            this.match(SintesisParser.OpenParen);
	            this.state = 123;
	            localctx.key = this.match(SintesisParser.StringLiteral);
	            this.state = 124;
	            this.match(SintesisParser.Comma);
	            this.state = 125;
	            this.expression(0);
	            this.state = 126;
	            this.match(SintesisParser.CloseParen);
	            break;

	        case 5:
	            localctx = new ExpDictionaryDeleteContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 128;
	            localctx.id = this.match(SintesisParser.Identifier);
	            this.state = 129;
	            this.match(SintesisParser.Dot);
	            this.state = 130;
	            this.match(SintesisParser.Delete);
	            this.state = 131;
	            this.match(SintesisParser.OpenParen);
	            this.state = 132;
	            localctx.key = this.match(SintesisParser.StringLiteral);
	            this.state = 133;
	            this.match(SintesisParser.CloseParen);
	            break;

	        case 6:
	            localctx = new ExpMemberMethodContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 134;
	            localctx.id = this.match(SintesisParser.Identifier);
	            this.state = 135;
	            this.match(SintesisParser.Dot);
	            this.state = 136;
	            localctx.method = this.match(SintesisParser.Identifier);
	            this.state = 137;
	            localctx.args = this.arguments();
	            break;

	        case 7:
	            localctx = new ExpMemberAttributeContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 138;
	            localctx.id = this.match(SintesisParser.Identifier);
	            this.state = 139;
	            this.match(SintesisParser.Dot);
	            this.state = 140;
	            localctx.attr = this.match(SintesisParser.Identifier);
	            break;

	        case 8:
	            localctx = new ExpInstanceOfContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 141;
	            localctx.id = this.match(SintesisParser.Identifier);
	            this.state = 142;
	            this.match(SintesisParser.InstanceOf);
	            this.state = 143;
	            localctx.is = this.match(SintesisParser.Identifier);
	            break;

	        case 9:
	            localctx = new ExpAttributeContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 144;
	            this.match(SintesisParser.Attributes);
	            this.state = 145;
	            this.match(SintesisParser.Dot);
	            this.state = 146;
	            localctx.id = this.match(SintesisParser.Identifier);
	            break;

	        case 10:
	            localctx = new ExpMethodCallContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 147;
	            this.match(SintesisParser.Methods);
	            this.state = 148;
	            this.match(SintesisParser.Dot);
	            this.state = 149;
	            localctx.id = this.match(SintesisParser.Identifier);
	            this.state = 150;
	            localctx.args = this.arguments();
	            break;

	        case 11:
	            localctx = new ExpSuperExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 151;
	            this.match(SintesisParser.Super);
	            this.state = 152;
	            localctx.args = this.arguments();
	            break;

	        case 12:
	            localctx = new ExpPreIncrementContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 153;
	            this.match(SintesisParser.PlusPlus);
	            this.state = 154;
	            localctx.exp = this.expression(34);
	            break;

	        case 13:
	            localctx = new ExpPreDecreaseContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 155;
	            this.match(SintesisParser.MinusMinus);
	            this.state = 156;
	            localctx.exp = this.expression(33);
	            break;

	        case 14:
	            localctx = new ExpUnaryPlusContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 157;
	            this.match(SintesisParser.Plus);
	            this.state = 158;
	            localctx.exp = this.expression(32);
	            break;

	        case 15:
	            localctx = new ExpUnaryMinusContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 159;
	            this.match(SintesisParser.Minus);
	            this.state = 160;
	            localctx.exp = this.expression(31);
	            break;

	        case 16:
	            localctx = new ExpBitNotContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 161;
	            this.match(SintesisParser.BitNot);
	            this.state = 162;
	            localctx.exp = this.expression(30);
	            break;

	        case 17:
	            localctx = new ExpNotContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 163;
	            this.match(SintesisParser.Not);
	            this.state = 164;
	            localctx.exp = this.expression(29);
	            break;

	        case 18:
	            localctx = new ExpVectorDeclarationContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 166;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===SintesisParser.Vector) {
	                this.state = 165;
	                this.match(SintesisParser.Vector);
	            }

	            this.state = 168;
	            localctx.idx = this.vectorIndexes();
	            break;

	        case 19:
	            localctx = new ExpAssignmentContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 169;
	            localctx.dest = this.assignable();
	            this.state = 170;
	            this.match(SintesisParser.Assign);
	            this.state = 171;
	            localctx.exp = this.expression(6);
	            break;

	        case 20:
	            localctx = new ExpAssignmentOperatorContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 173;
	            localctx.dest = this.assignable();
	            this.state = 174;
	            localctx.op = this.assignmentOperator();
	            this.state = 175;
	            localctx.exp = this.expression(5);
	            break;

	        case 21:
	            localctx = new ExpIdentifierContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 177;
	            localctx.id = this.match(SintesisParser.Identifier);
	            break;

	        case 22:
	            localctx = new ExpLiteralContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 178;
	            this.literal();
	            break;

	        case 23:
	            localctx = new ExpParenthesisContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 179;
	            this.match(SintesisParser.OpenParen);
	            this.state = 180;
	            localctx.exp = this.expression(0);
	            this.state = 181;
	            this.match(SintesisParser.CloseParen);
	            break;

	        case 24:
	            localctx = new ExpCommentContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 183;
	            this.match(SintesisParser.SingleLineComment);
	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 249;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,6,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 247;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new ExpOpContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    localctx.e1 = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, SintesisParser.RULE_expression);
	                    this.state = 186;
	                    if (!( this.precpred(this._ctx, 28))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 28)");
	                    }
	                    this.state = 187;
	                    localctx.op = this.match(SintesisParser.Plus);
	                    this.state = 188;
	                    localctx.e2 = this.expression(29);
	                    break;

	                case 2:
	                    localctx = new ExpOpContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    localctx.e1 = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, SintesisParser.RULE_expression);
	                    this.state = 189;
	                    if (!( this.precpred(this._ctx, 27))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 27)");
	                    }
	                    this.state = 190;
	                    localctx.op = this.match(SintesisParser.Minus);
	                    this.state = 191;
	                    localctx.e2 = this.expression(28);
	                    break;

	                case 3:
	                    localctx = new ExpOpContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    localctx.e1 = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, SintesisParser.RULE_expression);
	                    this.state = 192;
	                    if (!( this.precpred(this._ctx, 26))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 26)");
	                    }
	                    this.state = 193;
	                    localctx.op = this.match(SintesisParser.Multiply);
	                    this.state = 194;
	                    localctx.e2 = this.expression(27);
	                    break;

	                case 4:
	                    localctx = new ExpOpContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    localctx.e1 = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, SintesisParser.RULE_expression);
	                    this.state = 195;
	                    if (!( this.precpred(this._ctx, 25))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 25)");
	                    }
	                    this.state = 196;
	                    localctx.op = this.match(SintesisParser.Divide);
	                    this.state = 197;
	                    localctx.e2 = this.expression(26);
	                    break;

	                case 5:
	                    localctx = new ExpOpContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    localctx.e1 = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, SintesisParser.RULE_expression);
	                    this.state = 198;
	                    if (!( this.precpred(this._ctx, 24))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 24)");
	                    }
	                    this.state = 199;
	                    localctx.op = this.match(SintesisParser.Power);
	                    this.state = 200;
	                    localctx.e2 = this.expression(24);
	                    break;

	                case 6:
	                    localctx = new ExpOpContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    localctx.e1 = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, SintesisParser.RULE_expression);
	                    this.state = 201;
	                    if (!( this.precpred(this._ctx, 23))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 23)");
	                    }
	                    this.state = 202;
	                    localctx.op = this.match(SintesisParser.Modulus);
	                    this.state = 203;
	                    localctx.e2 = this.expression(24);
	                    break;

	                case 7:
	                    localctx = new ExpOpContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    localctx.e1 = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, SintesisParser.RULE_expression);
	                    this.state = 204;
	                    if (!( this.precpred(this._ctx, 22))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 22)");
	                    }
	                    this.state = 205;
	                    localctx.op = this.match(SintesisParser.LessThan);
	                    this.state = 206;
	                    localctx.e2 = this.expression(23);
	                    break;

	                case 8:
	                    localctx = new ExpOpContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    localctx.e1 = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, SintesisParser.RULE_expression);
	                    this.state = 207;
	                    if (!( this.precpred(this._ctx, 21))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 21)");
	                    }
	                    this.state = 208;
	                    localctx.op = this.match(SintesisParser.MoreThan);
	                    this.state = 209;
	                    localctx.e2 = this.expression(22);
	                    break;

	                case 9:
	                    localctx = new ExpOpContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    localctx.e1 = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, SintesisParser.RULE_expression);
	                    this.state = 210;
	                    if (!( this.precpred(this._ctx, 20))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 20)");
	                    }
	                    this.state = 211;
	                    localctx.op = this.match(SintesisParser.LessThanEquals);
	                    this.state = 212;
	                    localctx.e2 = this.expression(21);
	                    break;

	                case 10:
	                    localctx = new ExpOpContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    localctx.e1 = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, SintesisParser.RULE_expression);
	                    this.state = 213;
	                    if (!( this.precpred(this._ctx, 19))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 19)");
	                    }
	                    this.state = 214;
	                    localctx.op = this.match(SintesisParser.GreaterThanEquals);
	                    this.state = 215;
	                    localctx.e2 = this.expression(20);
	                    break;

	                case 11:
	                    localctx = new ExpOpContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    localctx.e1 = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, SintesisParser.RULE_expression);
	                    this.state = 216;
	                    if (!( this.precpred(this._ctx, 18))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 18)");
	                    }
	                    this.state = 217;
	                    localctx.op = this.match(SintesisParser.BitAnd);
	                    this.state = 218;
	                    localctx.e2 = this.expression(19);
	                    break;

	                case 12:
	                    localctx = new ExpOpContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    localctx.e1 = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, SintesisParser.RULE_expression);
	                    this.state = 219;
	                    if (!( this.precpred(this._ctx, 17))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 17)");
	                    }
	                    this.state = 220;
	                    localctx.op = this.match(SintesisParser.BitOr);
	                    this.state = 221;
	                    localctx.e2 = this.expression(18);
	                    break;

	                case 13:
	                    localctx = new ExpOpContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    localctx.e1 = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, SintesisParser.RULE_expression);
	                    this.state = 222;
	                    if (!( this.precpred(this._ctx, 16))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 16)");
	                    }
	                    this.state = 223;
	                    localctx.op = this.match(SintesisParser.BitXOr);
	                    this.state = 224;
	                    localctx.e2 = this.expression(17);
	                    break;

	                case 14:
	                    localctx = new ExpOpContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    localctx.e1 = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, SintesisParser.RULE_expression);
	                    this.state = 225;
	                    if (!( this.precpred(this._ctx, 15))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 15)");
	                    }
	                    this.state = 226;
	                    localctx.op = this.match(SintesisParser.IdentityEquals);
	                    this.state = 227;
	                    localctx.e2 = this.expression(16);
	                    break;

	                case 15:
	                    localctx = new ExpOpContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    localctx.e1 = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, SintesisParser.RULE_expression);
	                    this.state = 228;
	                    if (!( this.precpred(this._ctx, 14))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 14)");
	                    }
	                    this.state = 229;
	                    localctx.op = this.match(SintesisParser.IdentityNotEquals);
	                    this.state = 230;
	                    localctx.e2 = this.expression(15);
	                    break;

	                case 16:
	                    localctx = new ExpOpContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    localctx.e1 = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, SintesisParser.RULE_expression);
	                    this.state = 231;
	                    if (!( this.precpred(this._ctx, 13))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 13)");
	                    }
	                    this.state = 232;
	                    localctx.op = this.match(SintesisParser.Equals_);
	                    this.state = 233;
	                    localctx.e2 = this.expression(14);
	                    break;

	                case 17:
	                    localctx = new ExpOpContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    localctx.e1 = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, SintesisParser.RULE_expression);
	                    this.state = 234;
	                    if (!( this.precpred(this._ctx, 12))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 12)");
	                    }
	                    this.state = 235;
	                    localctx.op = this.match(SintesisParser.NotEquals);
	                    this.state = 236;
	                    localctx.e2 = this.expression(13);
	                    break;

	                case 18:
	                    localctx = new ExpOpContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    localctx.e1 = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, SintesisParser.RULE_expression);
	                    this.state = 237;
	                    if (!( this.precpred(this._ctx, 11))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 11)");
	                    }
	                    this.state = 238;
	                    localctx.op = this.match(SintesisParser.And);
	                    this.state = 239;
	                    localctx.e2 = this.expression(12);
	                    break;

	                case 19:
	                    localctx = new ExpOpContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    localctx.e1 = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, SintesisParser.RULE_expression);
	                    this.state = 240;
	                    if (!( this.precpred(this._ctx, 10))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
	                    }
	                    this.state = 241;
	                    localctx.op = this.match(SintesisParser.Or);
	                    this.state = 242;
	                    localctx.e2 = this.expression(11);
	                    break;

	                case 20:
	                    localctx = new ExpPostIncrementContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    localctx.exp = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, SintesisParser.RULE_expression);
	                    this.state = 243;
	                    if (!( this.precpred(this._ctx, 9))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
	                    }
	                    this.state = 244;
	                    this.match(SintesisParser.PlusPlus);
	                    break;

	                case 21:
	                    localctx = new ExpPostDecreaseContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    localctx.exp = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, SintesisParser.RULE_expression);
	                    this.state = 245;
	                    if (!( this.precpred(this._ctx, 8))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
	                    }
	                    this.state = 246;
	                    this.match(SintesisParser.MinusMinus);
	                    break;

	                } 
	            }
	            this.state = 251;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,6,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	expressionSequence() {
	    let localctx = new ExpressionSequenceContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, SintesisParser.RULE_expressionSequence);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 252;
	        this.expression(0);
	        this.state = 257;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===SintesisParser.Comma) {
	            this.state = 253;
	            this.match(SintesisParser.Comma);
	            this.state = 254;
	            this.expression(0);
	            this.state = 259;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	ifStatement() {
	    let localctx = new IfStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, SintesisParser.RULE_ifStatement);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 260;
	        this.match(SintesisParser.If);
	        this.state = 261;
	        localctx.exp = this.expression(0);
	        this.state = 263;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===SintesisParser.Then) {
	            this.state = 262;
	            this.match(SintesisParser.Then);
	        }

	        this.state = 265;
	        localctx.stmt = this.statement();
	        this.state = 267;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
	        if(la_===1) {
	            this.state = 266;
	            localctx.elseifs = this.elseIfs();

	        }
	        this.state = 270;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
	        if(la_===1) {
	            this.state = 269;
	            localctx.else_ = this.elseStatement();

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	elseIfs() {
	    let localctx = new ElseIfsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, SintesisParser.RULE_elseIfs);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 273; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 272;
	        		this.elseIf();
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 275; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,11, this._ctx);
	        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	elseIf() {
	    let localctx = new ElseIfContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, SintesisParser.RULE_elseIf);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 277;
	        this.match(SintesisParser.ElseIf);
	        this.state = 278;
	        localctx.exp = this.expression(0);
	        this.state = 280;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===SintesisParser.Then) {
	            this.state = 279;
	            this.match(SintesisParser.Then);
	        }

	        this.state = 282;
	        localctx.stmt = this.statement();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	elseStatement() {
	    let localctx = new ElseStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, SintesisParser.RULE_elseStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 284;
	        this.match(SintesisParser.Else);
	        this.state = 285;
	        this.statement();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	iterationStatement() {
	    let localctx = new IterationStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, SintesisParser.RULE_iterationStatement);
	    var _la = 0; // Token type
	    try {
	        this.state = 306;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,15,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new RepeatStatementContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 287;
	            this.match(SintesisParser.Repeat);
	            this.state = 288;
	            localctx.exp = this.expression(0);
	            this.state = 289;
	            localctx.stmt = this.statement();
	            break;

	        case 2:
	            localctx = new RepeatWhileStatementContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 291;
	            this.match(SintesisParser.Repeat);
	            this.state = 292;
	            localctx.stmt = this.statement();
	            this.state = 293;
	            this.match(SintesisParser.While);
	            this.state = 294;
	            localctx.exp = this.expression(0);
	            break;

	        case 3:
	            localctx = new WhileRepeatStatementContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 297;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===SintesisParser.Repeat) {
	                this.state = 296;
	                this.match(SintesisParser.Repeat);
	            }

	            this.state = 299;
	            this.match(SintesisParser.While);
	            this.state = 300;
	            localctx.exp = this.expression(0);
	            this.state = 302;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,14,this._ctx);
	            if(la_===1) {
	                this.state = 301;
	                this.match(SintesisParser.Repeat);

	            }
	            this.state = 304;
	            localctx.stmt = this.statement();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	returnStatement() {
	    let localctx = new ReturnStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, SintesisParser.RULE_returnStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 308;
	        this.match(SintesisParser.Return);
	        this.state = 309;
	        localctx.exp = this.expression(0);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	varDeclaration() {
	    let localctx = new VarDeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, SintesisParser.RULE_varDeclaration);
	    var _la = 0; // Token type
	    try {
	        this.state = 322;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,17,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new VectorDeclarationContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 311;
	            this.match(SintesisParser.Var);
	            this.state = 312;
	            localctx.id = this.match(SintesisParser.Identifier);
	            this.state = 313;
	            this.match(SintesisParser.Assign);
	            this.state = 315;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===SintesisParser.Vector) {
	                this.state = 314;
	                this.match(SintesisParser.Vector);
	            }

	            this.state = 317;
	            localctx.idx = this.vectorIndexes();
	            break;

	        case 2:
	            localctx = new VarSingleDeclarationContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 318;
	            this.match(SintesisParser.Var);
	            this.state = 319;
	            localctx.id = this.match(SintesisParser.Identifier);
	            this.state = 320;
	            this.match(SintesisParser.Assign);
	            this.state = 321;
	            localctx.exp = this.expression(0);
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	functionDeclaration() {
	    let localctx = new FunctionDeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, SintesisParser.RULE_functionDeclaration);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 324;
	        this.match(SintesisParser.Function_);
	        this.state = 325;
	        localctx.id = this.match(SintesisParser.Identifier);
	        this.state = 326;
	        this.match(SintesisParser.OpenParen);
	        this.state = 328;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===SintesisParser.Identifier) {
	            this.state = 327;
	            localctx.pl = this.formalParameterList();
	        }

	        this.state = 330;
	        this.match(SintesisParser.CloseParen);
	        this.state = 331;
	        localctx.stmt = this.functionBody();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	formalParameterList() {
	    let localctx = new FormalParameterListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, SintesisParser.RULE_formalParameterList);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 333;
	        this.formalParameterArg();
	        this.state = 338;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===SintesisParser.Comma) {
	            this.state = 334;
	            this.match(SintesisParser.Comma);
	            this.state = 335;
	            this.formalParameterArg();
	            this.state = 340;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	arguments() {
	    let localctx = new ArgumentsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, SintesisParser.RULE_arguments);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 341;
	        this.match(SintesisParser.OpenParen);
	        this.state = 350;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << SintesisParser.SingleLineComment) | (1 << SintesisParser.OpenBracket) | (1 << SintesisParser.OpenParen) | (1 << SintesisParser.PlusPlus) | (1 << SintesisParser.MinusMinus) | (1 << SintesisParser.Plus) | (1 << SintesisParser.Minus) | (1 << SintesisParser.BitNot) | (1 << SintesisParser.Not))) !== 0) || ((((_la - 57)) & ~0x1f) == 0 && ((1 << (_la - 57)) & ((1 << (SintesisParser.NullLiteral - 57)) | (1 << (SintesisParser.DecimalLiteral - 57)) | (1 << (SintesisParser.HexIntegerLiteral - 57)) | (1 << (SintesisParser.OctalIntegerLiteral - 57)) | (1 << (SintesisParser.OctalIntegerLiteral2 - 57)) | (1 << (SintesisParser.BinaryIntegerLiteral - 57)) | (1 << (SintesisParser.BooleanLiteral - 57)) | (1 << (SintesisParser.Vector - 57)) | (1 << (SintesisParser.Attributes - 57)) | (1 << (SintesisParser.Methods - 57)) | (1 << (SintesisParser.Super - 57)))) !== 0) || _la===SintesisParser.Identifier || _la===SintesisParser.StringLiteral) {
	            this.state = 342;
	            this.expression(0);
	            this.state = 347;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===SintesisParser.Comma) {
	                this.state = 343;
	                this.match(SintesisParser.Comma);
	                this.state = 344;
	                this.expression(0);
	                this.state = 349;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 352;
	        this.match(SintesisParser.CloseParen);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	classDeclaration() {
	    let localctx = new ClassDeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, SintesisParser.RULE_classDeclaration);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 354;
	        this.match(SintesisParser.Class_);
	        this.state = 355;
	        localctx.id = this.match(SintesisParser.Identifier);
	        this.state = 358;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===SintesisParser.Extends) {
	            this.state = 356;
	            this.match(SintesisParser.Extends);
	            this.state = 357;
	            localctx.ext = this.match(SintesisParser.Identifier);
	        }

	        this.state = 360;
	        this.match(SintesisParser.OpenBrace);
	        this.state = 364;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===SintesisParser.Attributes) {
	            this.state = 361;
	            this.match(SintesisParser.Attributes);
	            this.state = 362;
	            this.match(SintesisParser.Colon);
	            this.state = 363;
	            localctx.atrs = this.identifiers();
	        }

	        this.state = 369;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===SintesisParser.Methods) {
	            this.state = 366;
	            this.match(SintesisParser.Methods);
	            this.state = 367;
	            this.match(SintesisParser.Colon);
	            this.state = 368;
	            localctx.methods = this.methodsList();
	        }

	        this.state = 371;
	        this.match(SintesisParser.CloseBrace);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	identifiers() {
	    let localctx = new IdentifiersContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, SintesisParser.RULE_identifiers);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 377; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 373;
	            this.match(SintesisParser.Identifier);
	            this.state = 375;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===SintesisParser.Comma) {
	                this.state = 374;
	                this.match(SintesisParser.Comma);
	            }

	            this.state = 379; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===SintesisParser.Identifier);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	methodDeclaration() {
	    let localctx = new MethodDeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, SintesisParser.RULE_methodDeclaration);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 382;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===SintesisParser.Function_) {
	            this.state = 381;
	            this.match(SintesisParser.Function_);
	        }

	        this.state = 384;
	        localctx.id = this.match(SintesisParser.Identifier);
	        this.state = 385;
	        this.match(SintesisParser.OpenParen);
	        this.state = 387;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===SintesisParser.Identifier) {
	            this.state = 386;
	            localctx.pl = this.formalParameterList();
	        }

	        this.state = 389;
	        this.match(SintesisParser.CloseParen);
	        this.state = 390;
	        localctx.stmt = this.functionBody();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	methodsList() {
	    let localctx = new MethodsListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, SintesisParser.RULE_methodsList);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 393; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 392;
	            this.methodDeclaration();
	            this.state = 395; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===SintesisParser.Function_ || _la===SintesisParser.Identifier);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	classExp() {
	    let localctx = new ClassExpContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 44, SintesisParser.RULE_classExp);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 397;
	        this.match(SintesisParser.New_);
	        this.state = 398;
	        this.match(SintesisParser.Identifier);
	        this.state = 399;
	        localctx.args = this.arguments();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	vectorIndex() {
	    let localctx = new VectorIndexContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 46, SintesisParser.RULE_vectorIndex);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 401;
	        this.match(SintesisParser.OpenBracket);
	        this.state = 403;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << SintesisParser.SingleLineComment) | (1 << SintesisParser.OpenBracket) | (1 << SintesisParser.OpenParen) | (1 << SintesisParser.PlusPlus) | (1 << SintesisParser.MinusMinus) | (1 << SintesisParser.Plus) | (1 << SintesisParser.Minus) | (1 << SintesisParser.BitNot) | (1 << SintesisParser.Not))) !== 0) || ((((_la - 57)) & ~0x1f) == 0 && ((1 << (_la - 57)) & ((1 << (SintesisParser.NullLiteral - 57)) | (1 << (SintesisParser.DecimalLiteral - 57)) | (1 << (SintesisParser.HexIntegerLiteral - 57)) | (1 << (SintesisParser.OctalIntegerLiteral - 57)) | (1 << (SintesisParser.OctalIntegerLiteral2 - 57)) | (1 << (SintesisParser.BinaryIntegerLiteral - 57)) | (1 << (SintesisParser.BooleanLiteral - 57)) | (1 << (SintesisParser.Vector - 57)) | (1 << (SintesisParser.Attributes - 57)) | (1 << (SintesisParser.Methods - 57)) | (1 << (SintesisParser.Super - 57)))) !== 0) || _la===SintesisParser.Identifier || _la===SintesisParser.StringLiteral) {
	            this.state = 402;
	            this.expression(0);
	        }

	        this.state = 405;
	        this.match(SintesisParser.CloseBracket);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	vectorIndexes() {
	    let localctx = new VectorIndexesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 48, SintesisParser.RULE_vectorIndexes);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 408; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 407;
	        		this.vectorIndex();
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 410; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,31, this._ctx);
	        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	formalParameterArg() {
	    let localctx = new FormalParameterArgContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 50, SintesisParser.RULE_formalParameterArg);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 412;
	        this.match(SintesisParser.Identifier);
	        this.state = 415;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===SintesisParser.Assign) {
	            this.state = 413;
	            this.match(SintesisParser.Assign);
	            this.state = 414;
	            this.expression(0);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	functionBody() {
	    let localctx = new FunctionBodyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 52, SintesisParser.RULE_functionBody);
	    try {
	        this.state = 419;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,33,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 417;
	            this.block();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 418;
	            this.statement();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	assignmentOperator() {
	    let localctx = new AssignmentOperatorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 54, SintesisParser.RULE_assignmentOperator);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 421;
	        _la = this._input.LA(1);
	        if(!(((((_la - 44)) & ~0x1f) == 0 && ((1 << (_la - 44)) & ((1 << (SintesisParser.MultiplyAssign - 44)) | (1 << (SintesisParser.DivideAssign - 44)) | (1 << (SintesisParser.ModulusAssign - 44)) | (1 << (SintesisParser.PlusAssign - 44)) | (1 << (SintesisParser.MinusAssign - 44)) | (1 << (SintesisParser.LeftShiftArithmeticAssign - 44)) | (1 << (SintesisParser.RightShiftArithmeticAssign - 44)) | (1 << (SintesisParser.RightShiftLogicalAssign - 44)) | (1 << (SintesisParser.BitAndAssign - 44)) | (1 << (SintesisParser.BitXorAssign - 44)) | (1 << (SintesisParser.BitOrAssign - 44)) | (1 << (SintesisParser.PowerAssign - 44)))) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	assignable() {
	    let localctx = new AssignableContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 56, SintesisParser.RULE_assignable);
	    try {
	        this.state = 429;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,34,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new AssignableAttributeContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 423;
	            this.match(SintesisParser.Attributes);
	            this.state = 424;
	            this.match(SintesisParser.Dot);
	            this.state = 425;
	            localctx.id = this.match(SintesisParser.Identifier);
	            break;

	        case 2:
	            localctx = new AssignableVectorContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 426;
	            localctx.id = this.match(SintesisParser.Identifier);
	            this.state = 427;
	            localctx.idx = this.vectorIndexes();
	            break;

	        case 3:
	            localctx = new AssignableIdContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 428;
	            localctx.id = this.match(SintesisParser.Identifier);
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	reservedWord() {
	    let localctx = new ReservedWordContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 58, SintesisParser.RULE_reservedWord);
	    try {
	        this.state = 434;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case SintesisParser.EOF:
	        case SintesisParser.While:
	        case SintesisParser.If:
	        case SintesisParser.Then:
	        case SintesisParser.Else:
	        case SintesisParser.Return:
	        case SintesisParser.Function_:
	        case SintesisParser.Vector:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 431;
	            this.keyword();
	            break;
	        case SintesisParser.NullLiteral:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 432;
	            this.match(SintesisParser.NullLiteral);
	            break;
	        case SintesisParser.BooleanLiteral:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 433;
	            this.match(SintesisParser.BooleanLiteral);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	literal() {
	    let localctx = new LiteralContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 60, SintesisParser.RULE_literal);
	    try {
	        this.state = 440;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case SintesisParser.NullLiteral:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 436;
	            this.nullLiteral();
	            break;
	        case SintesisParser.BooleanLiteral:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 437;
	            this.booleanLiteral();
	            break;
	        case SintesisParser.StringLiteral:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 438;
	            this.stringLiteral();
	            break;
	        case SintesisParser.DecimalLiteral:
	        case SintesisParser.HexIntegerLiteral:
	        case SintesisParser.OctalIntegerLiteral:
	        case SintesisParser.OctalIntegerLiteral2:
	        case SintesisParser.BinaryIntegerLiteral:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 439;
	            this.numericLiteral();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	booleanLiteral() {
	    let localctx = new BooleanLiteralContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 62, SintesisParser.RULE_booleanLiteral);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 442;
	        this.match(SintesisParser.BooleanLiteral);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	stringLiteral() {
	    let localctx = new StringLiteralContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 64, SintesisParser.RULE_stringLiteral);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 444;
	        this.match(SintesisParser.StringLiteral);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	nullLiteral() {
	    let localctx = new NullLiteralContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 66, SintesisParser.RULE_nullLiteral);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 446;
	        this.match(SintesisParser.NullLiteral);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	numericLiteral() {
	    let localctx = new NumericLiteralContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 68, SintesisParser.RULE_numericLiteral);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 448;
	        _la = this._input.LA(1);
	        if(!(((((_la - 58)) & ~0x1f) == 0 && ((1 << (_la - 58)) & ((1 << (SintesisParser.DecimalLiteral - 58)) | (1 << (SintesisParser.HexIntegerLiteral - 58)) | (1 << (SintesisParser.OctalIntegerLiteral - 58)) | (1 << (SintesisParser.OctalIntegerLiteral2 - 58)) | (1 << (SintesisParser.BinaryIntegerLiteral - 58)))) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	identifierName() {
	    let localctx = new IdentifierNameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 70, SintesisParser.RULE_identifierName);
	    try {
	        this.state = 452;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case SintesisParser.Identifier:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 450;
	            this.match(SintesisParser.Identifier);
	            break;
	        case SintesisParser.EOF:
	        case SintesisParser.NullLiteral:
	        case SintesisParser.BooleanLiteral:
	        case SintesisParser.While:
	        case SintesisParser.If:
	        case SintesisParser.Then:
	        case SintesisParser.Else:
	        case SintesisParser.Return:
	        case SintesisParser.Function_:
	        case SintesisParser.Vector:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 451;
	            this.reservedWord();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	keyword() {
	    let localctx = new KeywordContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 72, SintesisParser.RULE_keyword);
	    try {
	        this.state = 463;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,38,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);

	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 455;
	            this.match(SintesisParser.Else);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 456;
	            this.match(SintesisParser.Then);
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 457;
	            this.match(SintesisParser.Return);
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 458;
	            this.match(SintesisParser.While);
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 459;
	            this.match(SintesisParser.Function_);
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 460;
	            this.match(SintesisParser.If);
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 461;
	            this.match(SintesisParser.Vector);
	            break;

	        case 9:
	            this.enterOuterAlt(localctx, 9);

	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	eos() {
	    let localctx = new EosContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 74, SintesisParser.RULE_eos);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 465;
	        _la = this._input.LA(1);
	        if(!(_la===SintesisParser.EOF || _la===SintesisParser.SemiColon)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

SintesisParser.EOF = antlr4.Token.EOF;
SintesisParser.MultiLineComment = 1;
SintesisParser.SingleLineComment = 2;
SintesisParser.OpenBracket = 3;
SintesisParser.CloseBracket = 4;
SintesisParser.OpenParen = 5;
SintesisParser.CloseParen = 6;
SintesisParser.OpenBrace = 7;
SintesisParser.CloseBrace = 8;
SintesisParser.SemiColon = 9;
SintesisParser.Comma = 10;
SintesisParser.Assign = 11;
SintesisParser.QuestionMark = 12;
SintesisParser.Colon = 13;
SintesisParser.Ellipsis = 14;
SintesisParser.Dot = 15;
SintesisParser.PlusPlus = 16;
SintesisParser.MinusMinus = 17;
SintesisParser.Plus = 18;
SintesisParser.Minus = 19;
SintesisParser.BitNot = 20;
SintesisParser.Not = 21;
SintesisParser.Multiply = 22;
SintesisParser.Divide = 23;
SintesisParser.Modulus = 24;
SintesisParser.Power = 25;
SintesisParser.NullCoalesce = 26;
SintesisParser.Hashtag = 27;
SintesisParser.RightShiftArithmetic = 28;
SintesisParser.LeftShiftArithmetic = 29;
SintesisParser.RightShiftLogical = 30;
SintesisParser.LessThan = 31;
SintesisParser.MoreThan = 32;
SintesisParser.LessThanEquals = 33;
SintesisParser.GreaterThanEquals = 34;
SintesisParser.Equals_ = 35;
SintesisParser.NotEquals = 36;
SintesisParser.IdentityEquals = 37;
SintesisParser.IdentityNotEquals = 38;
SintesisParser.BitAnd = 39;
SintesisParser.BitXOr = 40;
SintesisParser.BitOr = 41;
SintesisParser.And = 42;
SintesisParser.Or = 43;
SintesisParser.MultiplyAssign = 44;
SintesisParser.DivideAssign = 45;
SintesisParser.ModulusAssign = 46;
SintesisParser.PlusAssign = 47;
SintesisParser.MinusAssign = 48;
SintesisParser.LeftShiftArithmeticAssign = 49;
SintesisParser.RightShiftArithmeticAssign = 50;
SintesisParser.RightShiftLogicalAssign = 51;
SintesisParser.BitAndAssign = 52;
SintesisParser.BitXorAssign = 53;
SintesisParser.BitOrAssign = 54;
SintesisParser.PowerAssign = 55;
SintesisParser.ARROW = 56;
SintesisParser.NullLiteral = 57;
SintesisParser.DecimalLiteral = 58;
SintesisParser.HexIntegerLiteral = 59;
SintesisParser.OctalIntegerLiteral = 60;
SintesisParser.OctalIntegerLiteral2 = 61;
SintesisParser.BinaryIntegerLiteral = 62;
SintesisParser.BigHexIntegerLiteral = 63;
SintesisParser.BigOctalIntegerLiteral = 64;
SintesisParser.BigBinaryIntegerLiteral = 65;
SintesisParser.BigDecimalIntegerLiteral = 66;
SintesisParser.BooleanLiteral = 67;
SintesisParser.Step = 68;
SintesisParser.Print = 69;
SintesisParser.While = 70;
SintesisParser.Repeat = 71;
SintesisParser.If = 72;
SintesisParser.Then = 73;
SintesisParser.ElseIf = 74;
SintesisParser.Else = 75;
SintesisParser.Return = 76;
SintesisParser.Function_ = 77;
SintesisParser.Vector = 78;
SintesisParser.Delete = 79;
SintesisParser.NumberOf = 80;
SintesisParser.New_ = 81;
SintesisParser.Class_ = 82;
SintesisParser.Extends = 83;
SintesisParser.Attributes = 84;
SintesisParser.Methods = 85;
SintesisParser.Super = 86;
SintesisParser.InstanceOf = 87;
SintesisParser.Dictionary = 88;
SintesisParser.Get = 89;
SintesisParser.Set = 90;
SintesisParser.Var = 91;
SintesisParser.Identifier = 92;
SintesisParser.StringLiteral = 93;
SintesisParser.WhiteSpaces = 94;
SintesisParser.LineTerminator = 95;

SintesisParser.RULE_program = 0;
SintesisParser.RULE_statementList = 1;
SintesisParser.RULE_statement = 2;
SintesisParser.RULE_block = 3;
SintesisParser.RULE_stepStatement = 4;
SintesisParser.RULE_printStatement = 5;
SintesisParser.RULE_expression = 6;
SintesisParser.RULE_expressionSequence = 7;
SintesisParser.RULE_ifStatement = 8;
SintesisParser.RULE_elseIfs = 9;
SintesisParser.RULE_elseIf = 10;
SintesisParser.RULE_elseStatement = 11;
SintesisParser.RULE_iterationStatement = 12;
SintesisParser.RULE_returnStatement = 13;
SintesisParser.RULE_varDeclaration = 14;
SintesisParser.RULE_functionDeclaration = 15;
SintesisParser.RULE_formalParameterList = 16;
SintesisParser.RULE_arguments = 17;
SintesisParser.RULE_classDeclaration = 18;
SintesisParser.RULE_identifiers = 19;
SintesisParser.RULE_methodDeclaration = 20;
SintesisParser.RULE_methodsList = 21;
SintesisParser.RULE_classExp = 22;
SintesisParser.RULE_vectorIndex = 23;
SintesisParser.RULE_vectorIndexes = 24;
SintesisParser.RULE_formalParameterArg = 25;
SintesisParser.RULE_functionBody = 26;
SintesisParser.RULE_assignmentOperator = 27;
SintesisParser.RULE_assignable = 28;
SintesisParser.RULE_reservedWord = 29;
SintesisParser.RULE_literal = 30;
SintesisParser.RULE_booleanLiteral = 31;
SintesisParser.RULE_stringLiteral = 32;
SintesisParser.RULE_nullLiteral = 33;
SintesisParser.RULE_numericLiteral = 34;
SintesisParser.RULE_identifierName = 35;
SintesisParser.RULE_keyword = 36;
SintesisParser.RULE_eos = 37;

class ProgramContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SintesisParser.RULE_program;
    }

	statementList() {
	    return this.getTypedRuleContext(StatementListContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof SintesisParserVisitor ) {
	        return visitor.visitProgram(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class StatementListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SintesisParser.RULE_statementList;
    }

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof SintesisParserVisitor ) {
	        return visitor.visitStatementList(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class StatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SintesisParser.RULE_statement;
    }

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	stepStatement() {
	    return this.getTypedRuleContext(StepStatementContext,0);
	};

	printStatement() {
	    return this.getTypedRuleContext(PrintStatementContext,0);
	};

	ifStatement() {
	    return this.getTypedRuleContext(IfStatementContext,0);
	};

	iterationStatement() {
	    return this.getTypedRuleContext(IterationStatementContext,0);
	};

	returnStatement() {
	    return this.getTypedRuleContext(ReturnStatementContext,0);
	};

	varDeclaration() {
	    return this.getTypedRuleContext(VarDeclarationContext,0);
	};

	classDeclaration() {
	    return this.getTypedRuleContext(ClassDeclarationContext,0);
	};

	functionDeclaration() {
	    return this.getTypedRuleContext(FunctionDeclarationContext,0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof SintesisParserVisitor ) {
	        return visitor.visitStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class BlockContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SintesisParser.RULE_block;
        this.stmt = null; // StatementListContext
    }

	OpenBrace() {
	    return this.getToken(SintesisParser.OpenBrace, 0);
	};

	CloseBrace() {
	    return this.getToken(SintesisParser.CloseBrace, 0);
	};

	statementList() {
	    return this.getTypedRuleContext(StatementListContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof SintesisParserVisitor ) {
	        return visitor.visitBlock(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class StepStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SintesisParser.RULE_stepStatement;
        this.exp = null; // Token
    }

	Step() {
	    return this.getToken(SintesisParser.Step, 0);
	};

	Identifier() {
	    return this.getToken(SintesisParser.Identifier, 0);
	};

	DecimalLiteral() {
	    return this.getToken(SintesisParser.DecimalLiteral, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof SintesisParserVisitor ) {
	        return visitor.visitStepStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class PrintStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SintesisParser.RULE_printStatement;
        this.exp = null; // ExpressionContext
    }

	Print() {
	    return this.getToken(SintesisParser.Print, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof SintesisParserVisitor ) {
	        return visitor.visitPrintStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SintesisParser.RULE_expression;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class ExpVectorContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        this.id = null; // Token;
        this.idx = null; // VectorIndexesContext;
        super.copyFrom(ctx);
    }

	Identifier() {
	    return this.getToken(SintesisParser.Identifier, 0);
	};

	vectorIndexes() {
	    return this.getTypedRuleContext(VectorIndexesContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof SintesisParserVisitor ) {
	        return visitor.visitExpVector(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

SintesisParser.ExpVectorContext = ExpVectorContext;

class ExpAssignmentContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        this.dest = null; // AssignableContext;
        this.exp = null; // ExpressionContext;
        super.copyFrom(ctx);
    }

	Assign() {
	    return this.getToken(SintesisParser.Assign, 0);
	};

	assignable() {
	    return this.getTypedRuleContext(AssignableContext,0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof SintesisParserVisitor ) {
	        return visitor.visitExpAssignment(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

SintesisParser.ExpAssignmentContext = ExpAssignmentContext;

class ExpPostDecreaseContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        this.exp = null; // ExpressionContext;
        super.copyFrom(ctx);
    }

	MinusMinus() {
	    return this.getToken(SintesisParser.MinusMinus, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof SintesisParserVisitor ) {
	        return visitor.visitExpPostDecrease(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

SintesisParser.ExpPostDecreaseContext = ExpPostDecreaseContext;

class ExpPreIncrementContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        this.exp = null; // ExpressionContext;
        super.copyFrom(ctx);
    }

	PlusPlus() {
	    return this.getToken(SintesisParser.PlusPlus, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof SintesisParserVisitor ) {
	        return visitor.visitExpPreIncrement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

SintesisParser.ExpPreIncrementContext = ExpPreIncrementContext;

class ExpPostIncrementContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        this.exp = null; // ExpressionContext;
        super.copyFrom(ctx);
    }

	PlusPlus() {
	    return this.getToken(SintesisParser.PlusPlus, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof SintesisParserVisitor ) {
	        return visitor.visitExpPostIncrement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

SintesisParser.ExpPostIncrementContext = ExpPostIncrementContext;

class ExpInstanceOfContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        this.id = null; // Token;
        this.is = null; // Token;
        super.copyFrom(ctx);
    }

	InstanceOf() {
	    return this.getToken(SintesisParser.InstanceOf, 0);
	};

	Identifier = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SintesisParser.Identifier);
	    } else {
	        return this.getToken(SintesisParser.Identifier, i);
	    }
	};


	accept(visitor) {
	    if ( visitor instanceof SintesisParserVisitor ) {
	        return visitor.visitExpInstanceOf(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

SintesisParser.ExpInstanceOfContext = ExpInstanceOfContext;

class ExpFunctionCallContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        this.id = null; // Token;
        this.args = null; // ArgumentsContext;
        super.copyFrom(ctx);
    }

	Identifier() {
	    return this.getToken(SintesisParser.Identifier, 0);
	};

	arguments() {
	    return this.getTypedRuleContext(ArgumentsContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof SintesisParserVisitor ) {
	        return visitor.visitExpFunctionCall(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

SintesisParser.ExpFunctionCallContext = ExpFunctionCallContext;

class ExpAssignmentOperatorContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        this.dest = null; // AssignableContext;
        this.op = null; // AssignmentOperatorContext;
        this.exp = null; // ExpressionContext;
        super.copyFrom(ctx);
    }

	assignable() {
	    return this.getTypedRuleContext(AssignableContext,0);
	};

	assignmentOperator() {
	    return this.getTypedRuleContext(AssignmentOperatorContext,0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof SintesisParserVisitor ) {
	        return visitor.visitExpAssignmentOperator(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

SintesisParser.ExpAssignmentOperatorContext = ExpAssignmentOperatorContext;

class ExpSuperExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        this.args = null; // ArgumentsContext;
        super.copyFrom(ctx);
    }

	Super() {
	    return this.getToken(SintesisParser.Super, 0);
	};

	arguments() {
	    return this.getTypedRuleContext(ArgumentsContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof SintesisParserVisitor ) {
	        return visitor.visitExpSuperExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

SintesisParser.ExpSuperExpressionContext = ExpSuperExpressionContext;

class ExpOpContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        this.e1 = null; // ExpressionContext;
        this.op = null; // Token;
        this.e2 = null; // ExpressionContext;
        super.copyFrom(ctx);
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	Plus() {
	    return this.getToken(SintesisParser.Plus, 0);
	};

	Minus() {
	    return this.getToken(SintesisParser.Minus, 0);
	};

	Multiply() {
	    return this.getToken(SintesisParser.Multiply, 0);
	};

	Divide() {
	    return this.getToken(SintesisParser.Divide, 0);
	};

	Power() {
	    return this.getToken(SintesisParser.Power, 0);
	};

	Modulus() {
	    return this.getToken(SintesisParser.Modulus, 0);
	};

	LessThan() {
	    return this.getToken(SintesisParser.LessThan, 0);
	};

	MoreThan() {
	    return this.getToken(SintesisParser.MoreThan, 0);
	};

	LessThanEquals() {
	    return this.getToken(SintesisParser.LessThanEquals, 0);
	};

	GreaterThanEquals() {
	    return this.getToken(SintesisParser.GreaterThanEquals, 0);
	};

	BitAnd() {
	    return this.getToken(SintesisParser.BitAnd, 0);
	};

	BitOr() {
	    return this.getToken(SintesisParser.BitOr, 0);
	};

	BitXOr() {
	    return this.getToken(SintesisParser.BitXOr, 0);
	};

	IdentityEquals() {
	    return this.getToken(SintesisParser.IdentityEquals, 0);
	};

	IdentityNotEquals() {
	    return this.getToken(SintesisParser.IdentityNotEquals, 0);
	};

	Equals_() {
	    return this.getToken(SintesisParser.Equals_, 0);
	};

	NotEquals() {
	    return this.getToken(SintesisParser.NotEquals, 0);
	};

	And() {
	    return this.getToken(SintesisParser.And, 0);
	};

	Or() {
	    return this.getToken(SintesisParser.Or, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof SintesisParserVisitor ) {
	        return visitor.visitExpOp(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

SintesisParser.ExpOpContext = ExpOpContext;

class ExpAttributeContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        this.id = null; // Token;
        super.copyFrom(ctx);
    }

	Attributes() {
	    return this.getToken(SintesisParser.Attributes, 0);
	};

	Dot() {
	    return this.getToken(SintesisParser.Dot, 0);
	};

	Identifier() {
	    return this.getToken(SintesisParser.Identifier, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof SintesisParserVisitor ) {
	        return visitor.visitExpAttribute(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

SintesisParser.ExpAttributeContext = ExpAttributeContext;

class ExpMemberMethodContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        this.id = null; // Token;
        this.method = null; // Token;
        this.args = null; // ArgumentsContext;
        super.copyFrom(ctx);
    }

	Dot() {
	    return this.getToken(SintesisParser.Dot, 0);
	};

	Identifier = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SintesisParser.Identifier);
	    } else {
	        return this.getToken(SintesisParser.Identifier, i);
	    }
	};


	arguments() {
	    return this.getTypedRuleContext(ArgumentsContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof SintesisParserVisitor ) {
	        return visitor.visitExpMemberMethod(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

SintesisParser.ExpMemberMethodContext = ExpMemberMethodContext;

class ExpPreDecreaseContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        this.exp = null; // ExpressionContext;
        super.copyFrom(ctx);
    }

	MinusMinus() {
	    return this.getToken(SintesisParser.MinusMinus, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof SintesisParserVisitor ) {
	        return visitor.visitExpPreDecrease(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

SintesisParser.ExpPreDecreaseContext = ExpPreDecreaseContext;

class ExpNotContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        this.exp = null; // ExpressionContext;
        super.copyFrom(ctx);
    }

	Not() {
	    return this.getToken(SintesisParser.Not, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof SintesisParserVisitor ) {
	        return visitor.visitExpNot(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

SintesisParser.ExpNotContext = ExpNotContext;

class ExpBitNotContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        this.exp = null; // ExpressionContext;
        super.copyFrom(ctx);
    }

	BitNot() {
	    return this.getToken(SintesisParser.BitNot, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof SintesisParserVisitor ) {
	        return visitor.visitExpBitNot(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

SintesisParser.ExpBitNotContext = ExpBitNotContext;

class ExpMethodCallContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        this.id = null; // Token;
        this.args = null; // ArgumentsContext;
        super.copyFrom(ctx);
    }

	Methods() {
	    return this.getToken(SintesisParser.Methods, 0);
	};

	Dot() {
	    return this.getToken(SintesisParser.Dot, 0);
	};

	Identifier() {
	    return this.getToken(SintesisParser.Identifier, 0);
	};

	arguments() {
	    return this.getTypedRuleContext(ArgumentsContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof SintesisParserVisitor ) {
	        return visitor.visitExpMethodCall(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

SintesisParser.ExpMethodCallContext = ExpMethodCallContext;

class ExpDictionaryDeleteContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        this.id = null; // Token;
        this.key = null; // Token;
        super.copyFrom(ctx);
    }

	Dot() {
	    return this.getToken(SintesisParser.Dot, 0);
	};

	Delete() {
	    return this.getToken(SintesisParser.Delete, 0);
	};

	OpenParen() {
	    return this.getToken(SintesisParser.OpenParen, 0);
	};

	CloseParen() {
	    return this.getToken(SintesisParser.CloseParen, 0);
	};

	Identifier() {
	    return this.getToken(SintesisParser.Identifier, 0);
	};

	StringLiteral() {
	    return this.getToken(SintesisParser.StringLiteral, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof SintesisParserVisitor ) {
	        return visitor.visitExpDictionaryDelete(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

SintesisParser.ExpDictionaryDeleteContext = ExpDictionaryDeleteContext;

class ExpCommentContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	SingleLineComment() {
	    return this.getToken(SintesisParser.SingleLineComment, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof SintesisParserVisitor ) {
	        return visitor.visitExpComment(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

SintesisParser.ExpCommentContext = ExpCommentContext;

class ExpUnaryMinusContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        this.exp = null; // ExpressionContext;
        super.copyFrom(ctx);
    }

	Minus() {
	    return this.getToken(SintesisParser.Minus, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof SintesisParserVisitor ) {
	        return visitor.visitExpUnaryMinus(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

SintesisParser.ExpUnaryMinusContext = ExpUnaryMinusContext;

class ExpParenthesisContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        this.exp = null; // ExpressionContext;
        super.copyFrom(ctx);
    }

	OpenParen() {
	    return this.getToken(SintesisParser.OpenParen, 0);
	};

	CloseParen() {
	    return this.getToken(SintesisParser.CloseParen, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof SintesisParserVisitor ) {
	        return visitor.visitExpParenthesis(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

SintesisParser.ExpParenthesisContext = ExpParenthesisContext;

class ExpDictionaryGetContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        this.id = null; // Token;
        this.exp = null; // ExpressionContext;
        super.copyFrom(ctx);
    }

	Dot() {
	    return this.getToken(SintesisParser.Dot, 0);
	};

	Get() {
	    return this.getToken(SintesisParser.Get, 0);
	};

	OpenParen() {
	    return this.getToken(SintesisParser.OpenParen, 0);
	};

	CloseParen() {
	    return this.getToken(SintesisParser.CloseParen, 0);
	};

	Identifier() {
	    return this.getToken(SintesisParser.Identifier, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof SintesisParserVisitor ) {
	        return visitor.visitExpDictionaryGet(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

SintesisParser.ExpDictionaryGetContext = ExpDictionaryGetContext;

class ExpUnaryPlusContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        this.exp = null; // ExpressionContext;
        super.copyFrom(ctx);
    }

	Plus() {
	    return this.getToken(SintesisParser.Plus, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof SintesisParserVisitor ) {
	        return visitor.visitExpUnaryPlus(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

SintesisParser.ExpUnaryPlusContext = ExpUnaryPlusContext;

class ExpMemberAttributeContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        this.id = null; // Token;
        this.attr = null; // Token;
        super.copyFrom(ctx);
    }

	Dot() {
	    return this.getToken(SintesisParser.Dot, 0);
	};

	Identifier = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SintesisParser.Identifier);
	    } else {
	        return this.getToken(SintesisParser.Identifier, i);
	    }
	};


	accept(visitor) {
	    if ( visitor instanceof SintesisParserVisitor ) {
	        return visitor.visitExpMemberAttribute(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

SintesisParser.ExpMemberAttributeContext = ExpMemberAttributeContext;

class ExpVectorDeclarationContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        this.idx = null; // VectorIndexesContext;
        super.copyFrom(ctx);
    }

	vectorIndexes() {
	    return this.getTypedRuleContext(VectorIndexesContext,0);
	};

	Vector() {
	    return this.getToken(SintesisParser.Vector, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof SintesisParserVisitor ) {
	        return visitor.visitExpVectorDeclaration(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

SintesisParser.ExpVectorDeclarationContext = ExpVectorDeclarationContext;

class ExpDictionarySetContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        this.id = null; // Token;
        this.key = null; // Token;
        super.copyFrom(ctx);
    }

	Dot() {
	    return this.getToken(SintesisParser.Dot, 0);
	};

	Set() {
	    return this.getToken(SintesisParser.Set, 0);
	};

	OpenParen() {
	    return this.getToken(SintesisParser.OpenParen, 0);
	};

	Comma() {
	    return this.getToken(SintesisParser.Comma, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	CloseParen() {
	    return this.getToken(SintesisParser.CloseParen, 0);
	};

	Identifier() {
	    return this.getToken(SintesisParser.Identifier, 0);
	};

	StringLiteral() {
	    return this.getToken(SintesisParser.StringLiteral, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof SintesisParserVisitor ) {
	        return visitor.visitExpDictionarySet(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

SintesisParser.ExpDictionarySetContext = ExpDictionarySetContext;

class ExpLiteralContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	literal() {
	    return this.getTypedRuleContext(LiteralContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof SintesisParserVisitor ) {
	        return visitor.visitExpLiteral(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

SintesisParser.ExpLiteralContext = ExpLiteralContext;

class ExpIdentifierContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        this.id = null; // Token;
        super.copyFrom(ctx);
    }

	Identifier() {
	    return this.getToken(SintesisParser.Identifier, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof SintesisParserVisitor ) {
	        return visitor.visitExpIdentifier(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

SintesisParser.ExpIdentifierContext = ExpIdentifierContext;

class ExpressionSequenceContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SintesisParser.RULE_expressionSequence;
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	Comma = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SintesisParser.Comma);
	    } else {
	        return this.getToken(SintesisParser.Comma, i);
	    }
	};


	accept(visitor) {
	    if ( visitor instanceof SintesisParserVisitor ) {
	        return visitor.visitExpressionSequence(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class IfStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SintesisParser.RULE_ifStatement;
        this.exp = null; // ExpressionContext
        this.stmt = null; // StatementContext
        this.elseifs = null; // ElseIfsContext
        this.else_ = null; // ElseStatementContext
    }

	If() {
	    return this.getToken(SintesisParser.If, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	statement() {
	    return this.getTypedRuleContext(StatementContext,0);
	};

	Then() {
	    return this.getToken(SintesisParser.Then, 0);
	};

	elseIfs() {
	    return this.getTypedRuleContext(ElseIfsContext,0);
	};

	elseStatement() {
	    return this.getTypedRuleContext(ElseStatementContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof SintesisParserVisitor ) {
	        return visitor.visitIfStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ElseIfsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SintesisParser.RULE_elseIfs;
    }

	elseIf = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ElseIfContext);
	    } else {
	        return this.getTypedRuleContext(ElseIfContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof SintesisParserVisitor ) {
	        return visitor.visitElseIfs(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ElseIfContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SintesisParser.RULE_elseIf;
        this.exp = null; // ExpressionContext
        this.stmt = null; // StatementContext
    }

	ElseIf() {
	    return this.getToken(SintesisParser.ElseIf, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	statement() {
	    return this.getTypedRuleContext(StatementContext,0);
	};

	Then() {
	    return this.getToken(SintesisParser.Then, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof SintesisParserVisitor ) {
	        return visitor.visitElseIf(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ElseStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SintesisParser.RULE_elseStatement;
    }

	Else() {
	    return this.getToken(SintesisParser.Else, 0);
	};

	statement() {
	    return this.getTypedRuleContext(StatementContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof SintesisParserVisitor ) {
	        return visitor.visitElseStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class IterationStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SintesisParser.RULE_iterationStatement;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class RepeatWhileStatementContext extends IterationStatementContext {

    constructor(parser, ctx) {
        super(parser);
        this.stmt = null; // StatementContext;
        this.exp = null; // ExpressionContext;
        super.copyFrom(ctx);
    }

	Repeat() {
	    return this.getToken(SintesisParser.Repeat, 0);
	};

	While() {
	    return this.getToken(SintesisParser.While, 0);
	};

	statement() {
	    return this.getTypedRuleContext(StatementContext,0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof SintesisParserVisitor ) {
	        return visitor.visitRepeatWhileStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

SintesisParser.RepeatWhileStatementContext = RepeatWhileStatementContext;

class RepeatStatementContext extends IterationStatementContext {

    constructor(parser, ctx) {
        super(parser);
        this.exp = null; // ExpressionContext;
        this.stmt = null; // StatementContext;
        super.copyFrom(ctx);
    }

	Repeat() {
	    return this.getToken(SintesisParser.Repeat, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	statement() {
	    return this.getTypedRuleContext(StatementContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof SintesisParserVisitor ) {
	        return visitor.visitRepeatStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

SintesisParser.RepeatStatementContext = RepeatStatementContext;

class WhileRepeatStatementContext extends IterationStatementContext {

    constructor(parser, ctx) {
        super(parser);
        this.exp = null; // ExpressionContext;
        this.stmt = null; // StatementContext;
        super.copyFrom(ctx);
    }

	While() {
	    return this.getToken(SintesisParser.While, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	statement() {
	    return this.getTypedRuleContext(StatementContext,0);
	};

	Repeat = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SintesisParser.Repeat);
	    } else {
	        return this.getToken(SintesisParser.Repeat, i);
	    }
	};


	accept(visitor) {
	    if ( visitor instanceof SintesisParserVisitor ) {
	        return visitor.visitWhileRepeatStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

SintesisParser.WhileRepeatStatementContext = WhileRepeatStatementContext;

class ReturnStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SintesisParser.RULE_returnStatement;
        this.exp = null; // ExpressionContext
    }

	Return() {
	    return this.getToken(SintesisParser.Return, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof SintesisParserVisitor ) {
	        return visitor.visitReturnStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class VarDeclarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SintesisParser.RULE_varDeclaration;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class VectorDeclarationContext extends VarDeclarationContext {

    constructor(parser, ctx) {
        super(parser);
        this.id = null; // Token;
        this.idx = null; // VectorIndexesContext;
        super.copyFrom(ctx);
    }

	Var() {
	    return this.getToken(SintesisParser.Var, 0);
	};

	Assign() {
	    return this.getToken(SintesisParser.Assign, 0);
	};

	Identifier() {
	    return this.getToken(SintesisParser.Identifier, 0);
	};

	vectorIndexes() {
	    return this.getTypedRuleContext(VectorIndexesContext,0);
	};

	Vector() {
	    return this.getToken(SintesisParser.Vector, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof SintesisParserVisitor ) {
	        return visitor.visitVectorDeclaration(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

SintesisParser.VectorDeclarationContext = VectorDeclarationContext;

class VarSingleDeclarationContext extends VarDeclarationContext {

    constructor(parser, ctx) {
        super(parser);
        this.id = null; // Token;
        this.exp = null; // ExpressionContext;
        super.copyFrom(ctx);
    }

	Var() {
	    return this.getToken(SintesisParser.Var, 0);
	};

	Assign() {
	    return this.getToken(SintesisParser.Assign, 0);
	};

	Identifier() {
	    return this.getToken(SintesisParser.Identifier, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof SintesisParserVisitor ) {
	        return visitor.visitVarSingleDeclaration(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

SintesisParser.VarSingleDeclarationContext = VarSingleDeclarationContext;

class FunctionDeclarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SintesisParser.RULE_functionDeclaration;
        this.id = null; // Token
        this.pl = null; // FormalParameterListContext
        this.stmt = null; // FunctionBodyContext
    }

	Function_() {
	    return this.getToken(SintesisParser.Function_, 0);
	};

	OpenParen() {
	    return this.getToken(SintesisParser.OpenParen, 0);
	};

	CloseParen() {
	    return this.getToken(SintesisParser.CloseParen, 0);
	};

	Identifier() {
	    return this.getToken(SintesisParser.Identifier, 0);
	};

	functionBody() {
	    return this.getTypedRuleContext(FunctionBodyContext,0);
	};

	formalParameterList() {
	    return this.getTypedRuleContext(FormalParameterListContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof SintesisParserVisitor ) {
	        return visitor.visitFunctionDeclaration(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FormalParameterListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SintesisParser.RULE_formalParameterList;
    }

	formalParameterArg = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FormalParameterArgContext);
	    } else {
	        return this.getTypedRuleContext(FormalParameterArgContext,i);
	    }
	};

	Comma = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SintesisParser.Comma);
	    } else {
	        return this.getToken(SintesisParser.Comma, i);
	    }
	};


	accept(visitor) {
	    if ( visitor instanceof SintesisParserVisitor ) {
	        return visitor.visitFormalParameterList(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ArgumentsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SintesisParser.RULE_arguments;
    }

	OpenParen() {
	    return this.getToken(SintesisParser.OpenParen, 0);
	};

	CloseParen() {
	    return this.getToken(SintesisParser.CloseParen, 0);
	};

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	Comma = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SintesisParser.Comma);
	    } else {
	        return this.getToken(SintesisParser.Comma, i);
	    }
	};


	accept(visitor) {
	    if ( visitor instanceof SintesisParserVisitor ) {
	        return visitor.visitArguments(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ClassDeclarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SintesisParser.RULE_classDeclaration;
        this.id = null; // Token
        this.ext = null; // Token
        this.atrs = null; // IdentifiersContext
        this.methods = null; // MethodsListContext
    }

	Class_() {
	    return this.getToken(SintesisParser.Class_, 0);
	};

	OpenBrace() {
	    return this.getToken(SintesisParser.OpenBrace, 0);
	};

	CloseBrace() {
	    return this.getToken(SintesisParser.CloseBrace, 0);
	};

	Identifier = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SintesisParser.Identifier);
	    } else {
	        return this.getToken(SintesisParser.Identifier, i);
	    }
	};


	Extends() {
	    return this.getToken(SintesisParser.Extends, 0);
	};

	Attributes() {
	    return this.getToken(SintesisParser.Attributes, 0);
	};

	Colon = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SintesisParser.Colon);
	    } else {
	        return this.getToken(SintesisParser.Colon, i);
	    }
	};


	Methods() {
	    return this.getToken(SintesisParser.Methods, 0);
	};

	identifiers() {
	    return this.getTypedRuleContext(IdentifiersContext,0);
	};

	methodsList() {
	    return this.getTypedRuleContext(MethodsListContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof SintesisParserVisitor ) {
	        return visitor.visitClassDeclaration(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class IdentifiersContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SintesisParser.RULE_identifiers;
    }

	Identifier = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SintesisParser.Identifier);
	    } else {
	        return this.getToken(SintesisParser.Identifier, i);
	    }
	};


	Comma = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SintesisParser.Comma);
	    } else {
	        return this.getToken(SintesisParser.Comma, i);
	    }
	};


	accept(visitor) {
	    if ( visitor instanceof SintesisParserVisitor ) {
	        return visitor.visitIdentifiers(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class MethodDeclarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SintesisParser.RULE_methodDeclaration;
        this.id = null; // Token
        this.pl = null; // FormalParameterListContext
        this.stmt = null; // FunctionBodyContext
    }

	OpenParen() {
	    return this.getToken(SintesisParser.OpenParen, 0);
	};

	CloseParen() {
	    return this.getToken(SintesisParser.CloseParen, 0);
	};

	Identifier() {
	    return this.getToken(SintesisParser.Identifier, 0);
	};

	functionBody() {
	    return this.getTypedRuleContext(FunctionBodyContext,0);
	};

	Function_() {
	    return this.getToken(SintesisParser.Function_, 0);
	};

	formalParameterList() {
	    return this.getTypedRuleContext(FormalParameterListContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof SintesisParserVisitor ) {
	        return visitor.visitMethodDeclaration(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class MethodsListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SintesisParser.RULE_methodsList;
    }

	methodDeclaration = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(MethodDeclarationContext);
	    } else {
	        return this.getTypedRuleContext(MethodDeclarationContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof SintesisParserVisitor ) {
	        return visitor.visitMethodsList(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ClassExpContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SintesisParser.RULE_classExp;
        this.args = null; // ArgumentsContext
    }

	New_() {
	    return this.getToken(SintesisParser.New_, 0);
	};

	Identifier() {
	    return this.getToken(SintesisParser.Identifier, 0);
	};

	arguments() {
	    return this.getTypedRuleContext(ArgumentsContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof SintesisParserVisitor ) {
	        return visitor.visitClassExp(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class VectorIndexContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SintesisParser.RULE_vectorIndex;
    }

	OpenBracket() {
	    return this.getToken(SintesisParser.OpenBracket, 0);
	};

	CloseBracket() {
	    return this.getToken(SintesisParser.CloseBracket, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof SintesisParserVisitor ) {
	        return visitor.visitVectorIndex(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class VectorIndexesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SintesisParser.RULE_vectorIndexes;
    }

	vectorIndex = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(VectorIndexContext);
	    } else {
	        return this.getTypedRuleContext(VectorIndexContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof SintesisParserVisitor ) {
	        return visitor.visitVectorIndexes(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FormalParameterArgContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SintesisParser.RULE_formalParameterArg;
    }

	Identifier() {
	    return this.getToken(SintesisParser.Identifier, 0);
	};

	Assign() {
	    return this.getToken(SintesisParser.Assign, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof SintesisParserVisitor ) {
	        return visitor.visitFormalParameterArg(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FunctionBodyContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SintesisParser.RULE_functionBody;
    }

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	statement() {
	    return this.getTypedRuleContext(StatementContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof SintesisParserVisitor ) {
	        return visitor.visitFunctionBody(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AssignmentOperatorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SintesisParser.RULE_assignmentOperator;
    }

	MultiplyAssign() {
	    return this.getToken(SintesisParser.MultiplyAssign, 0);
	};

	DivideAssign() {
	    return this.getToken(SintesisParser.DivideAssign, 0);
	};

	ModulusAssign() {
	    return this.getToken(SintesisParser.ModulusAssign, 0);
	};

	PlusAssign() {
	    return this.getToken(SintesisParser.PlusAssign, 0);
	};

	MinusAssign() {
	    return this.getToken(SintesisParser.MinusAssign, 0);
	};

	LeftShiftArithmeticAssign() {
	    return this.getToken(SintesisParser.LeftShiftArithmeticAssign, 0);
	};

	RightShiftArithmeticAssign() {
	    return this.getToken(SintesisParser.RightShiftArithmeticAssign, 0);
	};

	RightShiftLogicalAssign() {
	    return this.getToken(SintesisParser.RightShiftLogicalAssign, 0);
	};

	BitAndAssign() {
	    return this.getToken(SintesisParser.BitAndAssign, 0);
	};

	BitXorAssign() {
	    return this.getToken(SintesisParser.BitXorAssign, 0);
	};

	BitOrAssign() {
	    return this.getToken(SintesisParser.BitOrAssign, 0);
	};

	PowerAssign() {
	    return this.getToken(SintesisParser.PowerAssign, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof SintesisParserVisitor ) {
	        return visitor.visitAssignmentOperator(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AssignableContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SintesisParser.RULE_assignable;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class AssignableVectorContext extends AssignableContext {

    constructor(parser, ctx) {
        super(parser);
        this.id = null; // Token;
        this.idx = null; // VectorIndexesContext;
        super.copyFrom(ctx);
    }

	Identifier() {
	    return this.getToken(SintesisParser.Identifier, 0);
	};

	vectorIndexes() {
	    return this.getTypedRuleContext(VectorIndexesContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof SintesisParserVisitor ) {
	        return visitor.visitAssignableVector(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

SintesisParser.AssignableVectorContext = AssignableVectorContext;

class AssignableAttributeContext extends AssignableContext {

    constructor(parser, ctx) {
        super(parser);
        this.id = null; // Token;
        super.copyFrom(ctx);
    }

	Attributes() {
	    return this.getToken(SintesisParser.Attributes, 0);
	};

	Dot() {
	    return this.getToken(SintesisParser.Dot, 0);
	};

	Identifier() {
	    return this.getToken(SintesisParser.Identifier, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof SintesisParserVisitor ) {
	        return visitor.visitAssignableAttribute(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

SintesisParser.AssignableAttributeContext = AssignableAttributeContext;

class AssignableIdContext extends AssignableContext {

    constructor(parser, ctx) {
        super(parser);
        this.id = null; // Token;
        super.copyFrom(ctx);
    }

	Identifier() {
	    return this.getToken(SintesisParser.Identifier, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof SintesisParserVisitor ) {
	        return visitor.visitAssignableId(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

SintesisParser.AssignableIdContext = AssignableIdContext;

class ReservedWordContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SintesisParser.RULE_reservedWord;
    }

	keyword() {
	    return this.getTypedRuleContext(KeywordContext,0);
	};

	NullLiteral() {
	    return this.getToken(SintesisParser.NullLiteral, 0);
	};

	BooleanLiteral() {
	    return this.getToken(SintesisParser.BooleanLiteral, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof SintesisParserVisitor ) {
	        return visitor.visitReservedWord(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class LiteralContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SintesisParser.RULE_literal;
    }

	nullLiteral() {
	    return this.getTypedRuleContext(NullLiteralContext,0);
	};

	booleanLiteral() {
	    return this.getTypedRuleContext(BooleanLiteralContext,0);
	};

	stringLiteral() {
	    return this.getTypedRuleContext(StringLiteralContext,0);
	};

	numericLiteral() {
	    return this.getTypedRuleContext(NumericLiteralContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof SintesisParserVisitor ) {
	        return visitor.visitLiteral(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class BooleanLiteralContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SintesisParser.RULE_booleanLiteral;
    }

	BooleanLiteral() {
	    return this.getToken(SintesisParser.BooleanLiteral, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof SintesisParserVisitor ) {
	        return visitor.visitBooleanLiteral(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class StringLiteralContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SintesisParser.RULE_stringLiteral;
    }

	StringLiteral() {
	    return this.getToken(SintesisParser.StringLiteral, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof SintesisParserVisitor ) {
	        return visitor.visitStringLiteral(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class NullLiteralContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SintesisParser.RULE_nullLiteral;
    }

	NullLiteral() {
	    return this.getToken(SintesisParser.NullLiteral, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof SintesisParserVisitor ) {
	        return visitor.visitNullLiteral(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class NumericLiteralContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SintesisParser.RULE_numericLiteral;
    }

	DecimalLiteral() {
	    return this.getToken(SintesisParser.DecimalLiteral, 0);
	};

	HexIntegerLiteral() {
	    return this.getToken(SintesisParser.HexIntegerLiteral, 0);
	};

	OctalIntegerLiteral() {
	    return this.getToken(SintesisParser.OctalIntegerLiteral, 0);
	};

	OctalIntegerLiteral2() {
	    return this.getToken(SintesisParser.OctalIntegerLiteral2, 0);
	};

	BinaryIntegerLiteral() {
	    return this.getToken(SintesisParser.BinaryIntegerLiteral, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof SintesisParserVisitor ) {
	        return visitor.visitNumericLiteral(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class IdentifierNameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SintesisParser.RULE_identifierName;
    }

	Identifier() {
	    return this.getToken(SintesisParser.Identifier, 0);
	};

	reservedWord() {
	    return this.getTypedRuleContext(ReservedWordContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof SintesisParserVisitor ) {
	        return visitor.visitIdentifierName(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class KeywordContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SintesisParser.RULE_keyword;
    }

	Else() {
	    return this.getToken(SintesisParser.Else, 0);
	};

	Then() {
	    return this.getToken(SintesisParser.Then, 0);
	};

	Return() {
	    return this.getToken(SintesisParser.Return, 0);
	};

	While() {
	    return this.getToken(SintesisParser.While, 0);
	};

	Function_() {
	    return this.getToken(SintesisParser.Function_, 0);
	};

	If() {
	    return this.getToken(SintesisParser.If, 0);
	};

	Vector() {
	    return this.getToken(SintesisParser.Vector, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof SintesisParserVisitor ) {
	        return visitor.visitKeyword(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class EosContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SintesisParser.RULE_eos;
    }

	SemiColon() {
	    return this.getToken(SintesisParser.SemiColon, 0);
	};

	EOF() {
	    return this.getToken(SintesisParser.EOF, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof SintesisParserVisitor ) {
	        return visitor.visitEos(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




SintesisParser.ProgramContext = ProgramContext; 
SintesisParser.StatementListContext = StatementListContext; 
SintesisParser.StatementContext = StatementContext; 
SintesisParser.BlockContext = BlockContext; 
SintesisParser.StepStatementContext = StepStatementContext; 
SintesisParser.PrintStatementContext = PrintStatementContext; 
SintesisParser.ExpressionContext = ExpressionContext; 
SintesisParser.ExpressionSequenceContext = ExpressionSequenceContext; 
SintesisParser.IfStatementContext = IfStatementContext; 
SintesisParser.ElseIfsContext = ElseIfsContext; 
SintesisParser.ElseIfContext = ElseIfContext; 
SintesisParser.ElseStatementContext = ElseStatementContext; 
SintesisParser.IterationStatementContext = IterationStatementContext; 
SintesisParser.ReturnStatementContext = ReturnStatementContext; 
SintesisParser.VarDeclarationContext = VarDeclarationContext; 
SintesisParser.FunctionDeclarationContext = FunctionDeclarationContext; 
SintesisParser.FormalParameterListContext = FormalParameterListContext; 
SintesisParser.ArgumentsContext = ArgumentsContext; 
SintesisParser.ClassDeclarationContext = ClassDeclarationContext; 
SintesisParser.IdentifiersContext = IdentifiersContext; 
SintesisParser.MethodDeclarationContext = MethodDeclarationContext; 
SintesisParser.MethodsListContext = MethodsListContext; 
SintesisParser.ClassExpContext = ClassExpContext; 
SintesisParser.VectorIndexContext = VectorIndexContext; 
SintesisParser.VectorIndexesContext = VectorIndexesContext; 
SintesisParser.FormalParameterArgContext = FormalParameterArgContext; 
SintesisParser.FunctionBodyContext = FunctionBodyContext; 
SintesisParser.AssignmentOperatorContext = AssignmentOperatorContext; 
SintesisParser.AssignableContext = AssignableContext; 
SintesisParser.ReservedWordContext = ReservedWordContext; 
SintesisParser.LiteralContext = LiteralContext; 
SintesisParser.BooleanLiteralContext = BooleanLiteralContext; 
SintesisParser.StringLiteralContext = StringLiteralContext; 
SintesisParser.NullLiteralContext = NullLiteralContext; 
SintesisParser.NumericLiteralContext = NumericLiteralContext; 
SintesisParser.IdentifierNameContext = IdentifierNameContext; 
SintesisParser.KeywordContext = KeywordContext; 
SintesisParser.EosContext = EosContext; 
