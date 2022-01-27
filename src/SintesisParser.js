// Generated from ./sintesis/Sintesis/src/SintesisParser.g4 by ANTLR 4.9.3
// jshint ignore: start
import antlr4 from 'antlr4';
import SintesisParserVisitor from './SintesisParserVisitor.js';

import SintesisParserBase from './SintesisParserBase.js';


const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0003a\u01d4\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
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
    "\b\u0003\b\u0003\b\u0003\b\u0003\b\u0005\b\u00a3\n\b\u0003\b\u0003\b",
    "\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0003\b\u0005\b\u00b4\n\b\u0003\b\u0003\b",
    "\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0007\b\u00f5",
    "\n\b\f\b\u000e\b\u00f8\u000b\b\u0003\t\u0003\t\u0003\t\u0007\t\u00fd",
    "\n\t\f\t\u000e\t\u0100\u000b\t\u0003\n\u0003\n\u0003\n\u0005\n\u0105",
    "\n\n\u0003\n\u0003\n\u0005\n\u0109\n\n\u0003\n\u0005\n\u010c\n\n\u0003",
    "\u000b\u0006\u000b\u010f\n\u000b\r\u000b\u000e\u000b\u0110\u0003\f\u0003",
    "\f\u0003\f\u0005\f\u0116\n\f\u0003\f\u0003\f\u0003\r\u0003\r\u0003\r",
    "\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e",
    "\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0005\u000e\u0127\n",
    "\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0005\u000e\u012c\n\u000e",
    "\u0003\u000e\u0003\u000e\u0005\u000e\u0130\n\u000e\u0003\u000f\u0003",
    "\u000f\u0003\u000f\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0005",
    "\u0010\u0139\n\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010",
    "\u0003\u0010\u0005\u0010\u0140\n\u0010\u0003\u0011\u0003\u0011\u0003",
    "\u0011\u0003\u0011\u0005\u0011\u0146\n\u0011\u0003\u0011\u0003\u0011",
    "\u0003\u0011\u0003\u0012\u0003\u0012\u0003\u0012\u0007\u0012\u014e\n",
    "\u0012\f\u0012\u000e\u0012\u0151\u000b\u0012\u0003\u0013\u0003\u0013",
    "\u0003\u0013\u0003\u0013\u0007\u0013\u0157\n\u0013\f\u0013\u000e\u0013",
    "\u015a\u000b\u0013\u0005\u0013\u015c\n\u0013\u0003\u0013\u0003\u0013",
    "\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0005\u0014\u0164\n",
    "\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0005\u0014\u016a",
    "\n\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0005\u0014\u016f\n\u0014",
    "\u0003\u0014\u0003\u0014\u0003\u0015\u0003\u0015\u0005\u0015\u0175\n",
    "\u0015\u0006\u0015\u0177\n\u0015\r\u0015\u000e\u0015\u0178\u0003\u0016",
    "\u0005\u0016\u017c\n\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0005",
    "\u0016\u0181\n\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0017",
    "\u0006\u0017\u0187\n\u0017\r\u0017\u000e\u0017\u0188\u0003\u0018\u0003",
    "\u0018\u0003\u0018\u0003\u0018\u0003\u0019\u0003\u0019\u0005\u0019\u0191",
    "\n\u0019\u0003\u0019\u0003\u0019\u0003\u001a\u0006\u001a\u0196\n\u001a",
    "\r\u001a\u000e\u001a\u0197\u0003\u001b\u0003\u001b\u0003\u001b\u0005",
    "\u001b\u019d\n\u001b\u0003\u001c\u0003\u001c\u0003\u001d\u0003\u001d",
    "\u0003\u001e\u0003\u001e\u0003\u001e\u0003\u001e\u0003\u001e\u0003\u001e",
    "\u0005\u001e\u01a9\n\u001e\u0003\u001f\u0003\u001f\u0003\u001f\u0005",
    "\u001f\u01ae\n\u001f\u0003 \u0003 \u0003 \u0003 \u0005 \u01b4\n \u0003",
    "!\u0003!\u0003\"\u0003\"\u0003#\u0003#\u0003$\u0003$\u0003%\u0003%\u0005",
    "%\u01c0\n%\u0003&\u0003&\u0003&\u0003&\u0003&\u0003&\u0003&\u0003&\u0003",
    "&\u0003&\u0005&\u01cc\n&\u0003\'\u0003\'\u0003\'\u0003\'\u0005\'\u01d2",
    "\n\'\u0003\'\u0002\u0003\u000e(\u0002\u0004\u0006\b\n\f\u000e\u0010",
    "\u0012\u0014\u0016\u0018\u001a\u001c\u001e \"$&(*,.02468:<>@BDFHJL\u0002",
    "\u0005\u0004\u0002<<^^\u0003\u0002.9\u0003\u0002<@\u0002\u0211\u0002",
    "N\u0003\u0002\u0002\u0002\u0004Q\u0003\u0002\u0002\u0002\u0006_\u0003",
    "\u0002\u0002\u0002\ba\u0003\u0002\u0002\u0002\ng\u0003\u0002\u0002\u0002",
    "\fj\u0003\u0002\u0002\u0002\u000e\u00b3\u0003\u0002\u0002\u0002\u0010",
    "\u00f9\u0003\u0002\u0002\u0002\u0012\u0101\u0003\u0002\u0002\u0002\u0014",
    "\u010e\u0003\u0002\u0002\u0002\u0016\u0112\u0003\u0002\u0002\u0002\u0018",
    "\u0119\u0003\u0002\u0002\u0002\u001a\u012f\u0003\u0002\u0002\u0002\u001c",
    "\u0131\u0003\u0002\u0002\u0002\u001e\u013f\u0003\u0002\u0002\u0002 ",
    "\u0141\u0003\u0002\u0002\u0002\"\u014a\u0003\u0002\u0002\u0002$\u0152",
    "\u0003\u0002\u0002\u0002&\u015f\u0003\u0002\u0002\u0002(\u0176\u0003",
    "\u0002\u0002\u0002*\u017b\u0003\u0002\u0002\u0002,\u0186\u0003\u0002",
    "\u0002\u0002.\u018a\u0003\u0002\u0002\u00020\u018e\u0003\u0002\u0002",
    "\u00022\u0195\u0003\u0002\u0002\u00024\u0199\u0003\u0002\u0002\u0002",
    "6\u019e\u0003\u0002\u0002\u00028\u01a0\u0003\u0002\u0002\u0002:\u01a8",
    "\u0003\u0002\u0002\u0002<\u01ad\u0003\u0002\u0002\u0002>\u01b3\u0003",
    "\u0002\u0002\u0002@\u01b5\u0003\u0002\u0002\u0002B\u01b7\u0003\u0002",
    "\u0002\u0002D\u01b9\u0003\u0002\u0002\u0002F\u01bb\u0003\u0002\u0002",
    "\u0002H\u01bf\u0003\u0002\u0002\u0002J\u01cb\u0003\u0002\u0002\u0002",
    "L\u01d1\u0003\u0002\u0002\u0002NO\u0005\u0004\u0003\u0002O\u0003\u0003",
    "\u0002\u0002\u0002PR\u0005\u0006\u0004\u0002QP\u0003\u0002\u0002\u0002",
    "RS\u0003\u0002\u0002\u0002SQ\u0003\u0002\u0002\u0002ST\u0003\u0002\u0002",
    "\u0002T\u0005\u0003\u0002\u0002\u0002U`\u0005\b\u0005\u0002V`\u0005",
    "\n\u0006\u0002W`\u0005\f\u0007\u0002X`\u0005\u0012\n\u0002Y`\u0005\u001a",
    "\u000e\u0002Z`\u0005\u001c\u000f\u0002[`\u0005\u000e\b\u0002\\`\u0005",
    "\u001e\u0010\u0002]`\u0005&\u0014\u0002^`\u0005 \u0011\u0002_U\u0003",
    "\u0002\u0002\u0002_V\u0003\u0002\u0002\u0002_W\u0003\u0002\u0002\u0002",
    "_X\u0003\u0002\u0002\u0002_Y\u0003\u0002\u0002\u0002_Z\u0003\u0002\u0002",
    "\u0002_[\u0003\u0002\u0002\u0002_\\\u0003\u0002\u0002\u0002_]\u0003",
    "\u0002\u0002\u0002_^\u0003\u0002\u0002\u0002`\u0007\u0003\u0002\u0002",
    "\u0002ac\u0007\t\u0002\u0002bd\u0005\u0004\u0003\u0002cb\u0003\u0002",
    "\u0002\u0002cd\u0003\u0002\u0002\u0002de\u0003\u0002\u0002\u0002ef\u0007",
    "\n\u0002\u0002f\t\u0003\u0002\u0002\u0002gh\u0007F\u0002\u0002hi\t\u0002",
    "\u0002\u0002i\u000b\u0003\u0002\u0002\u0002jk\u0007G\u0002\u0002kl\u0005",
    "\u000e\b\u0002l\r\u0003\u0002\u0002\u0002mn\b\b\u0001\u0002no\u0007",
    "^\u0002\u0002o\u00b4\u00052\u001a\u0002pq\u0007^\u0002\u0002q\u00b4",
    "\u0005$\u0013\u0002rs\u0007^\u0002\u0002st\u0007\u0011\u0002\u0002t",
    "u\u0007[\u0002\u0002uv\u0007\u0007\u0002\u0002vw\u0005\u000e\b\u0002",
    "wx\u0007\b\u0002\u0002x\u00b4\u0003\u0002\u0002\u0002yz\u0007^\u0002",
    "\u0002z{\u0007\u0011\u0002\u0002{|\u0007\\\u0002\u0002|}\u0007\u0007",
    "\u0002\u0002}~\u0007_\u0002\u0002~\u007f\u0007\f\u0002\u0002\u007f\u0080",
    "\u0005\u000e\b\u0002\u0080\u0081\u0007\b\u0002\u0002\u0081\u00b4\u0003",
    "\u0002\u0002\u0002\u0082\u0083\u0007^\u0002\u0002\u0083\u0084\u0007",
    "\u0011\u0002\u0002\u0084\u0085\u0007Q\u0002\u0002\u0085\u0086\u0007",
    "\u0007\u0002\u0002\u0086\u0087\u0007_\u0002\u0002\u0087\u00b4\u0007",
    "\b\u0002\u0002\u0088\u0089\u0007^\u0002\u0002\u0089\u008a\u0007\u0011",
    "\u0002\u0002\u008a\u008b\u0007^\u0002\u0002\u008b\u00b4\u0005$\u0013",
    "\u0002\u008c\u008d\u0007^\u0002\u0002\u008d\u008e\u0007\u0011\u0002",
    "\u0002\u008e\u00b4\u0007^\u0002\u0002\u008f\u0090\u0007^\u0002\u0002",
    "\u0090\u0091\u0007Y\u0002\u0002\u0091\u00b4\u0007^\u0002\u0002\u0092",
    "\u0093\u0007V\u0002\u0002\u0093\u0094\u0007\u0011\u0002\u0002\u0094",
    "\u00b4\u0007^\u0002\u0002\u0095\u0096\u0007\u0017\u0002\u0002\u0096",
    "\u00b4\u0005\u000e\b\u0010\u0097\u0098\u0007\u0016\u0002\u0002\u0098",
    "\u00b4\u0005\u000e\b\u000f\u0099\u009a\u0007\u0012\u0002\u0002\u009a",
    "\u00b4\u0005\u000e\b\u000e\u009b\u009c\u0007\u0013\u0002\u0002\u009c",
    "\u00b4\u0005\u000e\b\r\u009d\u009e\u0007\u0014\u0002\u0002\u009e\u00b4",
    "\u0005\u000e\b\f\u009f\u00a0\u0007\u0015\u0002\u0002\u00a0\u00b4\u0005",
    "\u000e\b\u000b\u00a1\u00a3\u0007P\u0002\u0002\u00a2\u00a1\u0003\u0002",
    "\u0002\u0002\u00a2\u00a3\u0003\u0002\u0002\u0002\u00a3\u00a4\u0003\u0002",
    "\u0002\u0002\u00a4\u00b4\u00052\u001a\u0002\u00a5\u00a6\u0005:\u001e",
    "\u0002\u00a6\u00a7\u0007\r\u0002\u0002\u00a7\u00a8\u0005\u000e\b\u0007",
    "\u00a8\u00b4\u0003\u0002\u0002\u0002\u00a9\u00aa\u0005:\u001e\u0002",
    "\u00aa\u00ab\u00058\u001d\u0002\u00ab\u00ac\u0005\u000e\b\u0006\u00ac",
    "\u00b4\u0003\u0002\u0002\u0002\u00ad\u00b4\u0007^\u0002\u0002\u00ae",
    "\u00b4\u0005> \u0002\u00af\u00b0\u0007\u0007\u0002\u0002\u00b0\u00b1",
    "\u0005\u000e\b\u0002\u00b1\u00b2\u0007\b\u0002\u0002\u00b2\u00b4\u0003",
    "\u0002\u0002\u0002\u00b3m\u0003\u0002\u0002\u0002\u00b3p\u0003\u0002",
    "\u0002\u0002\u00b3r\u0003\u0002\u0002\u0002\u00b3y\u0003\u0002\u0002",
    "\u0002\u00b3\u0082\u0003\u0002\u0002\u0002\u00b3\u0088\u0003\u0002\u0002",
    "\u0002\u00b3\u008c\u0003\u0002\u0002\u0002\u00b3\u008f\u0003\u0002\u0002",
    "\u0002\u00b3\u0092\u0003\u0002\u0002\u0002\u00b3\u0095\u0003\u0002\u0002",
    "\u0002\u00b3\u0097\u0003\u0002\u0002\u0002\u00b3\u0099\u0003\u0002\u0002",
    "\u0002\u00b3\u009b\u0003\u0002\u0002\u0002\u00b3\u009d\u0003\u0002\u0002",
    "\u0002\u00b3\u009f\u0003\u0002\u0002\u0002\u00b3\u00a2\u0003\u0002\u0002",
    "\u0002\u00b3\u00a5\u0003\u0002\u0002\u0002\u00b3\u00a9\u0003\u0002\u0002",
    "\u0002\u00b3\u00ad\u0003\u0002\u0002\u0002\u00b3\u00ae\u0003\u0002\u0002",
    "\u0002\u00b3\u00af\u0003\u0002\u0002\u0002\u00b4\u00f6\u0003\u0002\u0002",
    "\u0002\u00b5\u00b6\f#\u0002\u0002\u00b6\u00b7\u0007\u0014\u0002\u0002",
    "\u00b7\u00f5\u0005\u000e\b$\u00b8\u00b9\f\"\u0002\u0002\u00b9\u00ba",
    "\u0007\u0015\u0002\u0002\u00ba\u00f5\u0005\u000e\b#\u00bb\u00bc\f!\u0002",
    "\u0002\u00bc\u00bd\u0007\u0018\u0002\u0002\u00bd\u00f5\u0005\u000e\b",
    "\"\u00be\u00bf\f \u0002\u0002\u00bf\u00c0\u0007\u0019\u0002\u0002\u00c0",
    "\u00f5\u0005\u000e\b!\u00c1\u00c2\f\u001f\u0002\u0002\u00c2\u00c3\u0007",
    "\u001b\u0002\u0002\u00c3\u00f5\u0005\u000e\b \u00c4\u00c5\f\u001e\u0002",
    "\u0002\u00c5\u00c6\u0007\u001a\u0002\u0002\u00c6\u00f5\u0005\u000e\b",
    "\u001f\u00c7\u00c8\f\u001d\u0002\u0002\u00c8\u00c9\u0007!\u0002\u0002",
    "\u00c9\u00f5\u0005\u000e\b\u001e\u00ca\u00cb\f\u001c\u0002\u0002\u00cb",
    "\u00cc\u0007\"\u0002\u0002\u00cc\u00f5\u0005\u000e\b\u001d\u00cd\u00ce",
    "\f\u001b\u0002\u0002\u00ce\u00cf\u0007#\u0002\u0002\u00cf\u00f5\u0005",
    "\u000e\b\u001c\u00d0\u00d1\f\u001a\u0002\u0002\u00d1\u00d2\u0007$\u0002",
    "\u0002\u00d2\u00f5\u0005\u000e\b\u001b\u00d3\u00d4\f\u0019\u0002\u0002",
    "\u00d4\u00d5\u0007)\u0002\u0002\u00d5\u00f5\u0005\u000e\b\u001a\u00d6",
    "\u00d7\f\u0018\u0002\u0002\u00d7\u00d8\u0007+\u0002\u0002\u00d8\u00f5",
    "\u0005\u000e\b\u0019\u00d9\u00da\f\u0017\u0002\u0002\u00da\u00db\u0007",
    "*\u0002\u0002\u00db\u00f5\u0005\u000e\b\u0018\u00dc\u00dd\f\u0016\u0002",
    "\u0002\u00dd\u00de\u0007\'\u0002\u0002\u00de\u00f5\u0005\u000e\b\u0017",
    "\u00df\u00e0\f\u0015\u0002\u0002\u00e0\u00e1\u0007(\u0002\u0002\u00e1",
    "\u00f5\u0005\u000e\b\u0016\u00e2\u00e3\f\u0014\u0002\u0002\u00e3\u00e4",
    "\u0007%\u0002\u0002\u00e4\u00f5\u0005\u000e\b\u0015\u00e5\u00e6\f\u0013",
    "\u0002\u0002\u00e6\u00e7\u0007&\u0002\u0002\u00e7\u00f5\u0005\u000e",
    "\b\u0014\u00e8\u00e9\f\u0012\u0002\u0002\u00e9\u00ea\u0007,\u0002\u0002",
    "\u00ea\u00f5\u0005\u000e\b\u0013\u00eb\u00ec\f\u0011\u0002\u0002\u00ec",
    "\u00ed\u0007-\u0002\u0002\u00ed\u00f5\u0005\u000e\b\u0012\u00ee\u00ef",
    "\f\n\u0002\u0002\u00ef\u00f0\u0006\b\u0016\u0002\u00f0\u00f5\u0007\u0012",
    "\u0002\u0002\u00f1\u00f2\f\t\u0002\u0002\u00f2\u00f3\u0006\b\u0018\u0002",
    "\u00f3\u00f5\u0007\u0013\u0002\u0002\u00f4\u00b5\u0003\u0002\u0002\u0002",
    "\u00f4\u00b8\u0003\u0002\u0002\u0002\u00f4\u00bb\u0003\u0002\u0002\u0002",
    "\u00f4\u00be\u0003\u0002\u0002\u0002\u00f4\u00c1\u0003\u0002\u0002\u0002",
    "\u00f4\u00c4\u0003\u0002\u0002\u0002\u00f4\u00c7\u0003\u0002\u0002\u0002",
    "\u00f4\u00ca\u0003\u0002\u0002\u0002\u00f4\u00cd\u0003\u0002\u0002\u0002",
    "\u00f4\u00d0\u0003\u0002\u0002\u0002\u00f4\u00d3\u0003\u0002\u0002\u0002",
    "\u00f4\u00d6\u0003\u0002\u0002\u0002\u00f4\u00d9\u0003\u0002\u0002\u0002",
    "\u00f4\u00dc\u0003\u0002\u0002\u0002\u00f4\u00df\u0003\u0002\u0002\u0002",
    "\u00f4\u00e2\u0003\u0002\u0002\u0002\u00f4\u00e5\u0003\u0002\u0002\u0002",
    "\u00f4\u00e8\u0003\u0002\u0002\u0002\u00f4\u00eb\u0003\u0002\u0002\u0002",
    "\u00f4\u00ee\u0003\u0002\u0002\u0002\u00f4\u00f1\u0003\u0002\u0002\u0002",
    "\u00f5\u00f8\u0003\u0002\u0002\u0002\u00f6\u00f4\u0003\u0002\u0002\u0002",
    "\u00f6\u00f7\u0003\u0002\u0002\u0002\u00f7\u000f\u0003\u0002\u0002\u0002",
    "\u00f8\u00f6\u0003\u0002\u0002\u0002\u00f9\u00fe\u0005\u000e\b\u0002",
    "\u00fa\u00fb\u0007\f\u0002\u0002\u00fb\u00fd\u0005\u000e\b\u0002\u00fc",
    "\u00fa\u0003\u0002\u0002\u0002\u00fd\u0100\u0003\u0002\u0002\u0002\u00fe",
    "\u00fc\u0003\u0002\u0002\u0002\u00fe\u00ff\u0003\u0002\u0002\u0002\u00ff",
    "\u0011\u0003\u0002\u0002\u0002\u0100\u00fe\u0003\u0002\u0002\u0002\u0101",
    "\u0102\u0007J\u0002\u0002\u0102\u0104\u0005\u000e\b\u0002\u0103\u0105",
    "\u0007K\u0002\u0002\u0104\u0103\u0003\u0002\u0002\u0002\u0104\u0105",
    "\u0003\u0002\u0002\u0002\u0105\u0106\u0003\u0002\u0002\u0002\u0106\u0108",
    "\u0005\u0006\u0004\u0002\u0107\u0109\u0005\u0014\u000b\u0002\u0108\u0107",
    "\u0003\u0002\u0002\u0002\u0108\u0109\u0003\u0002\u0002\u0002\u0109\u010b",
    "\u0003\u0002\u0002\u0002\u010a\u010c\u0005\u0018\r\u0002\u010b\u010a",
    "\u0003\u0002\u0002\u0002\u010b\u010c\u0003\u0002\u0002\u0002\u010c\u0013",
    "\u0003\u0002\u0002\u0002\u010d\u010f\u0005\u0016\f\u0002\u010e\u010d",
    "\u0003\u0002\u0002\u0002\u010f\u0110\u0003\u0002\u0002\u0002\u0110\u010e",
    "\u0003\u0002\u0002\u0002\u0110\u0111\u0003\u0002\u0002\u0002\u0111\u0015",
    "\u0003\u0002\u0002\u0002\u0112\u0113\u0007L\u0002\u0002\u0113\u0115",
    "\u0005\u000e\b\u0002\u0114\u0116\u0007K\u0002\u0002\u0115\u0114\u0003",
    "\u0002\u0002\u0002\u0115\u0116\u0003\u0002\u0002\u0002\u0116\u0117\u0003",
    "\u0002\u0002\u0002\u0117\u0118\u0005\u0006\u0004\u0002\u0118\u0017\u0003",
    "\u0002\u0002\u0002\u0119\u011a\u0007M\u0002\u0002\u011a\u011b\u0005",
    "\u0006\u0004\u0002\u011b\u0019\u0003\u0002\u0002\u0002\u011c\u011d\u0007",
    "I\u0002\u0002\u011d\u011e\u0005\u000e\b\u0002\u011e\u011f\u0005\u0006",
    "\u0004\u0002\u011f\u0130\u0003\u0002\u0002\u0002\u0120\u0121\u0007I",
    "\u0002\u0002\u0121\u0122\u0005\u0006\u0004\u0002\u0122\u0123\u0007H",
    "\u0002\u0002\u0123\u0124\u0005\u000e\b\u0002\u0124\u0130\u0003\u0002",
    "\u0002\u0002\u0125\u0127\u0007I\u0002\u0002\u0126\u0125\u0003\u0002",
    "\u0002\u0002\u0126\u0127\u0003\u0002\u0002\u0002\u0127\u0128\u0003\u0002",
    "\u0002\u0002\u0128\u0129\u0007H\u0002\u0002\u0129\u012b\u0005\u000e",
    "\b\u0002\u012a\u012c\u0007I\u0002\u0002\u012b\u012a\u0003\u0002\u0002",
    "\u0002\u012b\u012c\u0003\u0002\u0002\u0002\u012c\u012d\u0003\u0002\u0002",
    "\u0002\u012d\u012e\u0005\u0006\u0004\u0002\u012e\u0130\u0003\u0002\u0002",
    "\u0002\u012f\u011c\u0003\u0002\u0002\u0002\u012f\u0120\u0003\u0002\u0002",
    "\u0002\u012f\u0126\u0003\u0002\u0002\u0002\u0130\u001b\u0003\u0002\u0002",
    "\u0002\u0131\u0132\u0007N\u0002\u0002\u0132\u0133\u0005\u000e\b\u0002",
    "\u0133\u001d\u0003\u0002\u0002\u0002\u0134\u0135\u0007]\u0002\u0002",
    "\u0135\u0136\u0007^\u0002\u0002\u0136\u0138\u0007\r\u0002\u0002\u0137",
    "\u0139\u0007P\u0002\u0002\u0138\u0137\u0003\u0002\u0002\u0002\u0138",
    "\u0139\u0003\u0002\u0002\u0002\u0139\u013a\u0003\u0002\u0002\u0002\u013a",
    "\u0140\u00052\u001a\u0002\u013b\u013c\u0007]\u0002\u0002\u013c\u013d",
    "\u0007^\u0002\u0002\u013d\u013e\u0007\r\u0002\u0002\u013e\u0140\u0005",
    "\u000e\b\u0002\u013f\u0134\u0003\u0002\u0002\u0002\u013f\u013b\u0003",
    "\u0002\u0002\u0002\u0140\u001f\u0003\u0002\u0002\u0002\u0141\u0142\u0007",
    "O\u0002\u0002\u0142\u0143\u0007^\u0002\u0002\u0143\u0145\u0007\u0007",
    "\u0002\u0002\u0144\u0146\u0005\"\u0012\u0002\u0145\u0144\u0003\u0002",
    "\u0002\u0002\u0145\u0146\u0003\u0002\u0002\u0002\u0146\u0147\u0003\u0002",
    "\u0002\u0002\u0147\u0148\u0007\b\u0002\u0002\u0148\u0149\u00056\u001c",
    "\u0002\u0149!\u0003\u0002\u0002\u0002\u014a\u014f\u00054\u001b\u0002",
    "\u014b\u014c\u0007\f\u0002\u0002\u014c\u014e\u00054\u001b\u0002\u014d",
    "\u014b\u0003\u0002\u0002\u0002\u014e\u0151\u0003\u0002\u0002\u0002\u014f",
    "\u014d\u0003\u0002\u0002\u0002\u014f\u0150\u0003\u0002\u0002\u0002\u0150",
    "#\u0003\u0002\u0002\u0002\u0151\u014f\u0003\u0002\u0002\u0002\u0152",
    "\u015b\u0007\u0007\u0002\u0002\u0153\u0158\u0005\u000e\b\u0002\u0154",
    "\u0155\u0007\f\u0002\u0002\u0155\u0157\u0005\u000e\b\u0002\u0156\u0154",
    "\u0003\u0002\u0002\u0002\u0157\u015a\u0003\u0002\u0002\u0002\u0158\u0156",
    "\u0003\u0002\u0002\u0002\u0158\u0159\u0003\u0002\u0002\u0002\u0159\u015c",
    "\u0003\u0002\u0002\u0002\u015a\u0158\u0003\u0002\u0002\u0002\u015b\u0153",
    "\u0003\u0002\u0002\u0002\u015b\u015c\u0003\u0002\u0002\u0002\u015c\u015d",
    "\u0003\u0002\u0002\u0002\u015d\u015e\u0007\b\u0002\u0002\u015e%\u0003",
    "\u0002\u0002\u0002\u015f\u0160\u0007T\u0002\u0002\u0160\u0163\u0007",
    "^\u0002\u0002\u0161\u0162\u0007U\u0002\u0002\u0162\u0164\u0007^\u0002",
    "\u0002\u0163\u0161\u0003\u0002\u0002\u0002\u0163\u0164\u0003\u0002\u0002",
    "\u0002\u0164\u0165\u0003\u0002\u0002\u0002\u0165\u0169\u0007\t\u0002",
    "\u0002\u0166\u0167\u0007V\u0002\u0002\u0167\u0168\u0007\u000f\u0002",
    "\u0002\u0168\u016a\u0005(\u0015\u0002\u0169\u0166\u0003\u0002\u0002",
    "\u0002\u0169\u016a\u0003\u0002\u0002\u0002\u016a\u016e\u0003\u0002\u0002",
    "\u0002\u016b\u016c\u0007W\u0002\u0002\u016c\u016d\u0007\u000f\u0002",
    "\u0002\u016d\u016f\u0005,\u0017\u0002\u016e\u016b\u0003\u0002\u0002",
    "\u0002\u016e\u016f\u0003\u0002\u0002\u0002\u016f\u0170\u0003\u0002\u0002",
    "\u0002\u0170\u0171\u0007\n\u0002\u0002\u0171\'\u0003\u0002\u0002\u0002",
    "\u0172\u0174\u0007^\u0002\u0002\u0173\u0175\u0007\f\u0002\u0002\u0174",
    "\u0173\u0003\u0002\u0002\u0002\u0174\u0175\u0003\u0002\u0002\u0002\u0175",
    "\u0177\u0003\u0002\u0002\u0002\u0176\u0172\u0003\u0002\u0002\u0002\u0177",
    "\u0178\u0003\u0002\u0002\u0002\u0178\u0176\u0003\u0002\u0002\u0002\u0178",
    "\u0179\u0003\u0002\u0002\u0002\u0179)\u0003\u0002\u0002\u0002\u017a",
    "\u017c\u0007O\u0002\u0002\u017b\u017a\u0003\u0002\u0002\u0002\u017b",
    "\u017c\u0003\u0002\u0002\u0002\u017c\u017d\u0003\u0002\u0002\u0002\u017d",
    "\u017e\u0007^\u0002\u0002\u017e\u0180\u0007\u0007\u0002\u0002\u017f",
    "\u0181\u0005\"\u0012\u0002\u0180\u017f\u0003\u0002\u0002\u0002\u0180",
    "\u0181\u0003\u0002\u0002\u0002\u0181\u0182\u0003\u0002\u0002\u0002\u0182",
    "\u0183\u0007\b\u0002\u0002\u0183\u0184\u00056\u001c\u0002\u0184+\u0003",
    "\u0002\u0002\u0002\u0185\u0187\u0005*\u0016\u0002\u0186\u0185\u0003",
    "\u0002\u0002\u0002\u0187\u0188\u0003\u0002\u0002\u0002\u0188\u0186\u0003",
    "\u0002\u0002\u0002\u0188\u0189\u0003\u0002\u0002\u0002\u0189-\u0003",
    "\u0002\u0002\u0002\u018a\u018b\u0007S\u0002\u0002\u018b\u018c\u0007",
    "^\u0002\u0002\u018c\u018d\u0005$\u0013\u0002\u018d/\u0003\u0002\u0002",
    "\u0002\u018e\u0190\u0007\u0005\u0002\u0002\u018f\u0191\u0005\u000e\b",
    "\u0002\u0190\u018f\u0003\u0002\u0002\u0002\u0190\u0191\u0003\u0002\u0002",
    "\u0002\u0191\u0192\u0003\u0002\u0002\u0002\u0192\u0193\u0007\u0006\u0002",
    "\u0002\u01931\u0003\u0002\u0002\u0002\u0194\u0196\u00050\u0019\u0002",
    "\u0195\u0194\u0003\u0002\u0002\u0002\u0196\u0197\u0003\u0002\u0002\u0002",
    "\u0197\u0195\u0003\u0002\u0002\u0002\u0197\u0198\u0003\u0002\u0002\u0002",
    "\u01983\u0003\u0002\u0002\u0002\u0199\u019c\u0007^\u0002\u0002\u019a",
    "\u019b\u0007\r\u0002\u0002\u019b\u019d\u0005\u000e\b\u0002\u019c\u019a",
    "\u0003\u0002\u0002\u0002\u019c\u019d\u0003\u0002\u0002\u0002\u019d5",
    "\u0003\u0002\u0002\u0002\u019e\u019f\u0005\b\u0005\u0002\u019f7\u0003",
    "\u0002\u0002\u0002\u01a0\u01a1\t\u0003\u0002\u0002\u01a19\u0003\u0002",
    "\u0002\u0002\u01a2\u01a3\u0007V\u0002\u0002\u01a3\u01a4\u0007\u0011",
    "\u0002\u0002\u01a4\u01a9\u0007^\u0002\u0002\u01a5\u01a6\u0007^\u0002",
    "\u0002\u01a6\u01a9\u00052\u001a\u0002\u01a7\u01a9\u0007^\u0002\u0002",
    "\u01a8\u01a2\u0003\u0002\u0002\u0002\u01a8\u01a5\u0003\u0002\u0002\u0002",
    "\u01a8\u01a7\u0003\u0002\u0002\u0002\u01a9;\u0003\u0002\u0002\u0002",
    "\u01aa\u01ae\u0005J&\u0002\u01ab\u01ae\u0007;\u0002\u0002\u01ac\u01ae",
    "\u0007E\u0002\u0002\u01ad\u01aa\u0003\u0002\u0002\u0002\u01ad\u01ab",
    "\u0003\u0002\u0002\u0002\u01ad\u01ac\u0003\u0002\u0002\u0002\u01ae=",
    "\u0003\u0002\u0002\u0002\u01af\u01b4\u0005D#\u0002\u01b0\u01b4\u0005",
    "@!\u0002\u01b1\u01b4\u0005B\"\u0002\u01b2\u01b4\u0005F$\u0002\u01b3",
    "\u01af\u0003\u0002\u0002\u0002\u01b3\u01b0\u0003\u0002\u0002\u0002\u01b3",
    "\u01b1\u0003\u0002\u0002\u0002\u01b3\u01b2\u0003\u0002\u0002\u0002\u01b4",
    "?\u0003\u0002\u0002\u0002\u01b5\u01b6\u0007E\u0002\u0002\u01b6A\u0003",
    "\u0002\u0002\u0002\u01b7\u01b8\u0007_\u0002\u0002\u01b8C\u0003\u0002",
    "\u0002\u0002\u01b9\u01ba\u0007;\u0002\u0002\u01baE\u0003\u0002\u0002",
    "\u0002\u01bb\u01bc\t\u0004\u0002\u0002\u01bcG\u0003\u0002\u0002\u0002",
    "\u01bd\u01c0\u0007^\u0002\u0002\u01be\u01c0\u0005<\u001f\u0002\u01bf",
    "\u01bd\u0003\u0002\u0002\u0002\u01bf\u01be\u0003\u0002\u0002\u0002\u01c0",
    "I\u0003\u0002\u0002\u0002\u01c1\u01cc\u0003\u0002\u0002\u0002\u01c2",
    "\u01cc\u0007M\u0002\u0002\u01c3\u01cc\u0007K\u0002\u0002\u01c4\u01cc",
    "\u0007N\u0002\u0002\u01c5\u01cc\u0007H\u0002\u0002\u01c6\u01cc\u0007",
    "O\u0002\u0002\u01c7\u01cc\u0007J\u0002\u0002\u01c8\u01cc\u0007P\u0002",
    "\u0002\u01c9\u01cc\u0007Z\u0002\u0002\u01ca\u01cc\u0003\u0002\u0002",
    "\u0002\u01cb\u01c1\u0003\u0002\u0002\u0002\u01cb\u01c2\u0003\u0002\u0002",
    "\u0002\u01cb\u01c3\u0003\u0002\u0002\u0002\u01cb\u01c4\u0003\u0002\u0002",
    "\u0002\u01cb\u01c5\u0003\u0002\u0002\u0002\u01cb\u01c6\u0003\u0002\u0002",
    "\u0002\u01cb\u01c7\u0003\u0002\u0002\u0002\u01cb\u01c8\u0003\u0002\u0002",
    "\u0002\u01cb\u01c9\u0003\u0002\u0002\u0002\u01cb\u01ca\u0003\u0002\u0002",
    "\u0002\u01ccK\u0003\u0002\u0002\u0002\u01cd\u01d2\u0007\u000b\u0002",
    "\u0002\u01ce\u01d2\u0007\u0002\u0002\u0003\u01cf\u01d2\u0006\'\u0019",
    "\u0002\u01d0\u01d2\u0006\'\u001a\u0002\u01d1\u01cd\u0003\u0002\u0002",
    "\u0002\u01d1\u01ce\u0003\u0002\u0002\u0002\u01d1\u01cf\u0003\u0002\u0002",
    "\u0002\u01d1\u01d0\u0003\u0002\u0002\u0002\u01d2M\u0003\u0002\u0002",
    "\u0002)S_c\u00a2\u00b3\u00f4\u00f6\u00fe\u0104\u0108\u010b\u0110\u0115",
    "\u0126\u012b\u012f\u0138\u013f\u0145\u014f\u0158\u015b\u0163\u0169\u016e",
    "\u0174\u0178\u017b\u0180\u0188\u0190\u0197\u019c\u01a8\u01ad\u01b3\u01bf",
    "\u01cb\u01d1"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class SintesisParser extends SintesisParserBase {

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
    	case 37:
    	    		return this.eos_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    expression_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 33);
    		case 1:
    			return this.precpred(this._ctx, 32);
    		case 2:
    			return this.precpred(this._ctx, 31);
    		case 3:
    			return this.precpred(this._ctx, 30);
    		case 4:
    			return this.precpred(this._ctx, 29);
    		case 5:
    			return this.precpred(this._ctx, 28);
    		case 6:
    			return this.precpred(this._ctx, 27);
    		case 7:
    			return this.precpred(this._ctx, 26);
    		case 8:
    			return this.precpred(this._ctx, 25);
    		case 9:
    			return this.precpred(this._ctx, 24);
    		case 10:
    			return this.precpred(this._ctx, 23);
    		case 11:
    			return this.precpred(this._ctx, 22);
    		case 12:
    			return this.precpred(this._ctx, 21);
    		case 13:
    			return this.precpred(this._ctx, 20);
    		case 14:
    			return this.precpred(this._ctx, 19);
    		case 15:
    			return this.precpred(this._ctx, 18);
    		case 16:
    			return this.precpred(this._ctx, 17);
    		case 17:
    			return this.precpred(this._ctx, 16);
    		case 18:
    			return this.precpred(this._ctx, 15);
    		case 19:
    			return this.precpred(this._ctx, 8);
    		case 20:
    			return this.notLineTerminator();
    		case 21:
    			return this.precpred(this._ctx, 7);
    		case 22:
    			return this.notLineTerminator();
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    eos_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 23:
    			return this.lineTerminatorAhead();
    		case 24:
    			return this.closeBrace();
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
	        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << SintesisParser.OpenBracket) | (1 << SintesisParser.OpenParen) | (1 << SintesisParser.OpenBrace) | (1 << SintesisParser.PlusPlus) | (1 << SintesisParser.MinusMinus) | (1 << SintesisParser.Plus) | (1 << SintesisParser.Minus) | (1 << SintesisParser.BitNot) | (1 << SintesisParser.Not))) !== 0) || ((((_la - 57)) & ~0x1f) == 0 && ((1 << (_la - 57)) & ((1 << (SintesisParser.NullLiteral - 57)) | (1 << (SintesisParser.DecimalLiteral - 57)) | (1 << (SintesisParser.HexIntegerLiteral - 57)) | (1 << (SintesisParser.OctalIntegerLiteral - 57)) | (1 << (SintesisParser.OctalIntegerLiteral2 - 57)) | (1 << (SintesisParser.BinaryIntegerLiteral - 57)) | (1 << (SintesisParser.BooleanLiteral - 57)) | (1 << (SintesisParser.Step - 57)) | (1 << (SintesisParser.Print - 57)) | (1 << (SintesisParser.While - 57)) | (1 << (SintesisParser.Repeat - 57)) | (1 << (SintesisParser.If - 57)) | (1 << (SintesisParser.Return - 57)) | (1 << (SintesisParser.Function_ - 57)) | (1 << (SintesisParser.Vector - 57)) | (1 << (SintesisParser.Class_ - 57)) | (1 << (SintesisParser.Attributes - 57)))) !== 0) || ((((_la - 91)) & ~0x1f) == 0 && ((1 << (_la - 91)) & ((1 << (SintesisParser.Var - 91)) | (1 << (SintesisParser.Identifier - 91)) | (1 << (SintesisParser.StringLiteral - 91)))) !== 0));
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
	        case SintesisParser.Identifier:
	        case SintesisParser.StringLiteral:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 89;
	            this.expression(0);
	            break;
	        case SintesisParser.Var:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 90;
	            this.varDeclaration();
	            break;
	        case SintesisParser.Class_:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 91;
	            this.classDeclaration();
	            break;
	        case SintesisParser.Function_:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 92;
	            this.functionDeclaration();
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
	        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << SintesisParser.OpenBracket) | (1 << SintesisParser.OpenParen) | (1 << SintesisParser.OpenBrace) | (1 << SintesisParser.PlusPlus) | (1 << SintesisParser.MinusMinus) | (1 << SintesisParser.Plus) | (1 << SintesisParser.Minus) | (1 << SintesisParser.BitNot) | (1 << SintesisParser.Not))) !== 0) || ((((_la - 57)) & ~0x1f) == 0 && ((1 << (_la - 57)) & ((1 << (SintesisParser.NullLiteral - 57)) | (1 << (SintesisParser.DecimalLiteral - 57)) | (1 << (SintesisParser.HexIntegerLiteral - 57)) | (1 << (SintesisParser.OctalIntegerLiteral - 57)) | (1 << (SintesisParser.OctalIntegerLiteral2 - 57)) | (1 << (SintesisParser.BinaryIntegerLiteral - 57)) | (1 << (SintesisParser.BooleanLiteral - 57)) | (1 << (SintesisParser.Step - 57)) | (1 << (SintesisParser.Print - 57)) | (1 << (SintesisParser.While - 57)) | (1 << (SintesisParser.Repeat - 57)) | (1 << (SintesisParser.If - 57)) | (1 << (SintesisParser.Return - 57)) | (1 << (SintesisParser.Function_ - 57)) | (1 << (SintesisParser.Vector - 57)) | (1 << (SintesisParser.Class_ - 57)) | (1 << (SintesisParser.Attributes - 57)))) !== 0) || ((((_la - 91)) & ~0x1f) == 0 && ((1 << (_la - 91)) & ((1 << (SintesisParser.Var - 91)) | (1 << (SintesisParser.Identifier - 91)) | (1 << (SintesisParser.StringLiteral - 91)))) !== 0)) {
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
	        this.state = 177;
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
	            localctx = new ExpNotContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 147;
	            this.match(SintesisParser.Not);
	            this.state = 148;
	            localctx.exp = this.expression(14);
	            break;

	        case 11:
	            localctx = new ExpBitNotContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 149;
	            this.match(SintesisParser.BitNot);
	            this.state = 150;
	            localctx.exp = this.expression(13);
	            break;

	        case 12:
	            localctx = new ExpPreIncrementContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 151;
	            this.match(SintesisParser.PlusPlus);
	            this.state = 152;
	            localctx.exp = this.expression(12);
	            break;

	        case 13:
	            localctx = new ExpPreDecreaseContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 153;
	            this.match(SintesisParser.MinusMinus);
	            this.state = 154;
	            localctx.exp = this.expression(11);
	            break;

	        case 14:
	            localctx = new ExpUnaryPlusContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 155;
	            this.match(SintesisParser.Plus);
	            this.state = 156;
	            localctx.exp = this.expression(10);
	            break;

	        case 15:
	            localctx = new ExpUnaryMinusContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 157;
	            this.match(SintesisParser.Minus);
	            this.state = 158;
	            localctx.exp = this.expression(9);
	            break;

	        case 16:
	            localctx = new ExpVectorDeclarationContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 160;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===SintesisParser.Vector) {
	                this.state = 159;
	                this.match(SintesisParser.Vector);
	            }

	            this.state = 162;
	            localctx.idx = this.vectorIndexes();
	            break;

	        case 17:
	            localctx = new ExpAssignmentContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 163;
	            localctx.dest = this.assignable();
	            this.state = 164;
	            this.match(SintesisParser.Assign);
	            this.state = 165;
	            localctx.exp = this.expression(5);
	            break;

	        case 18:
	            localctx = new ExpAssignmentOperatorContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 167;
	            localctx.dest = this.assignable();
	            this.state = 168;
	            localctx.op = this.assignmentOperator();
	            this.state = 169;
	            localctx.exp = this.expression(4);
	            break;

	        case 19:
	            localctx = new ExpIdentifierContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 171;
	            localctx.id = this.match(SintesisParser.Identifier);
	            break;

	        case 20:
	            localctx = new ExpLiteralContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 172;
	            this.literal();
	            break;

	        case 21:
	            localctx = new ExpParenthesisContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 173;
	            this.match(SintesisParser.OpenParen);
	            this.state = 174;
	            localctx.exp = this.expression(0);
	            this.state = 175;
	            this.match(SintesisParser.CloseParen);
	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 244;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,6,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 242;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new ExpOpContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    localctx.e1 = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, SintesisParser.RULE_expression);
	                    this.state = 179;
	                    if (!( this.precpred(this._ctx, 33))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 33)");
	                    }
	                    this.state = 180;
	                    localctx.op = this.match(SintesisParser.Plus);
	                    this.state = 181;
	                    localctx.e2 = this.expression(34);
	                    break;

	                case 2:
	                    localctx = new ExpOpContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    localctx.e1 = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, SintesisParser.RULE_expression);
	                    this.state = 182;
	                    if (!( this.precpred(this._ctx, 32))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 32)");
	                    }
	                    this.state = 183;
	                    localctx.op = this.match(SintesisParser.Minus);
	                    this.state = 184;
	                    localctx.e2 = this.expression(33);
	                    break;

	                case 3:
	                    localctx = new ExpOpContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    localctx.e1 = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, SintesisParser.RULE_expression);
	                    this.state = 185;
	                    if (!( this.precpred(this._ctx, 31))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 31)");
	                    }
	                    this.state = 186;
	                    localctx.op = this.match(SintesisParser.Multiply);
	                    this.state = 187;
	                    localctx.e2 = this.expression(32);
	                    break;

	                case 4:
	                    localctx = new ExpOpContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    localctx.e1 = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, SintesisParser.RULE_expression);
	                    this.state = 188;
	                    if (!( this.precpred(this._ctx, 30))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 30)");
	                    }
	                    this.state = 189;
	                    localctx.op = this.match(SintesisParser.Divide);
	                    this.state = 190;
	                    localctx.e2 = this.expression(31);
	                    break;

	                case 5:
	                    localctx = new ExpOpContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    localctx.e1 = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, SintesisParser.RULE_expression);
	                    this.state = 191;
	                    if (!( this.precpred(this._ctx, 29))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 29)");
	                    }
	                    this.state = 192;
	                    localctx.op = this.match(SintesisParser.Power);
	                    this.state = 193;
	                    localctx.e2 = this.expression(30);
	                    break;

	                case 6:
	                    localctx = new ExpOpContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    localctx.e1 = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, SintesisParser.RULE_expression);
	                    this.state = 194;
	                    if (!( this.precpred(this._ctx, 28))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 28)");
	                    }
	                    this.state = 195;
	                    localctx.op = this.match(SintesisParser.Modulus);
	                    this.state = 196;
	                    localctx.e2 = this.expression(29);
	                    break;

	                case 7:
	                    localctx = new ExpOpContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    localctx.e1 = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, SintesisParser.RULE_expression);
	                    this.state = 197;
	                    if (!( this.precpred(this._ctx, 27))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 27)");
	                    }
	                    this.state = 198;
	                    localctx.op = this.match(SintesisParser.LessThan);
	                    this.state = 199;
	                    localctx.e2 = this.expression(28);
	                    break;

	                case 8:
	                    localctx = new ExpOpContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    localctx.e1 = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, SintesisParser.RULE_expression);
	                    this.state = 200;
	                    if (!( this.precpred(this._ctx, 26))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 26)");
	                    }
	                    this.state = 201;
	                    localctx.op = this.match(SintesisParser.MoreThan);
	                    this.state = 202;
	                    localctx.e2 = this.expression(27);
	                    break;

	                case 9:
	                    localctx = new ExpOpContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    localctx.e1 = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, SintesisParser.RULE_expression);
	                    this.state = 203;
	                    if (!( this.precpred(this._ctx, 25))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 25)");
	                    }
	                    this.state = 204;
	                    localctx.op = this.match(SintesisParser.LessThanEquals);
	                    this.state = 205;
	                    localctx.e2 = this.expression(26);
	                    break;

	                case 10:
	                    localctx = new ExpOpContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    localctx.e1 = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, SintesisParser.RULE_expression);
	                    this.state = 206;
	                    if (!( this.precpred(this._ctx, 24))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 24)");
	                    }
	                    this.state = 207;
	                    localctx.op = this.match(SintesisParser.GreaterThanEquals);
	                    this.state = 208;
	                    localctx.e2 = this.expression(25);
	                    break;

	                case 11:
	                    localctx = new ExpOpContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    localctx.e1 = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, SintesisParser.RULE_expression);
	                    this.state = 209;
	                    if (!( this.precpred(this._ctx, 23))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 23)");
	                    }
	                    this.state = 210;
	                    localctx.op = this.match(SintesisParser.BitAnd);
	                    this.state = 211;
	                    localctx.e2 = this.expression(24);
	                    break;

	                case 12:
	                    localctx = new ExpOpContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    localctx.e1 = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, SintesisParser.RULE_expression);
	                    this.state = 212;
	                    if (!( this.precpred(this._ctx, 22))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 22)");
	                    }
	                    this.state = 213;
	                    localctx.op = this.match(SintesisParser.BitOr);
	                    this.state = 214;
	                    localctx.e2 = this.expression(23);
	                    break;

	                case 13:
	                    localctx = new ExpOpContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    localctx.e1 = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, SintesisParser.RULE_expression);
	                    this.state = 215;
	                    if (!( this.precpred(this._ctx, 21))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 21)");
	                    }
	                    this.state = 216;
	                    localctx.op = this.match(SintesisParser.BitXOr);
	                    this.state = 217;
	                    localctx.e2 = this.expression(22);
	                    break;

	                case 14:
	                    localctx = new ExpOpContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    localctx.e1 = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, SintesisParser.RULE_expression);
	                    this.state = 218;
	                    if (!( this.precpred(this._ctx, 20))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 20)");
	                    }
	                    this.state = 219;
	                    localctx.op = this.match(SintesisParser.IdentityEquals);
	                    this.state = 220;
	                    localctx.e2 = this.expression(21);
	                    break;

	                case 15:
	                    localctx = new ExpOpContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    localctx.e1 = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, SintesisParser.RULE_expression);
	                    this.state = 221;
	                    if (!( this.precpred(this._ctx, 19))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 19)");
	                    }
	                    this.state = 222;
	                    localctx.op = this.match(SintesisParser.IdentityNotEquals);
	                    this.state = 223;
	                    localctx.e2 = this.expression(20);
	                    break;

	                case 16:
	                    localctx = new ExpOpContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    localctx.e1 = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, SintesisParser.RULE_expression);
	                    this.state = 224;
	                    if (!( this.precpred(this._ctx, 18))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 18)");
	                    }
	                    this.state = 225;
	                    localctx.op = this.match(SintesisParser.Equals_);
	                    this.state = 226;
	                    localctx.e2 = this.expression(19);
	                    break;

	                case 17:
	                    localctx = new ExpOpContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    localctx.e1 = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, SintesisParser.RULE_expression);
	                    this.state = 227;
	                    if (!( this.precpred(this._ctx, 17))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 17)");
	                    }
	                    this.state = 228;
	                    localctx.op = this.match(SintesisParser.NotEquals);
	                    this.state = 229;
	                    localctx.e2 = this.expression(18);
	                    break;

	                case 18:
	                    localctx = new ExpOpContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    localctx.e1 = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, SintesisParser.RULE_expression);
	                    this.state = 230;
	                    if (!( this.precpred(this._ctx, 16))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 16)");
	                    }
	                    this.state = 231;
	                    localctx.op = this.match(SintesisParser.And);
	                    this.state = 232;
	                    localctx.e2 = this.expression(17);
	                    break;

	                case 19:
	                    localctx = new ExpOpContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    localctx.e1 = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, SintesisParser.RULE_expression);
	                    this.state = 233;
	                    if (!( this.precpred(this._ctx, 15))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 15)");
	                    }
	                    this.state = 234;
	                    localctx.op = this.match(SintesisParser.Or);
	                    this.state = 235;
	                    localctx.e2 = this.expression(16);
	                    break;

	                case 20:
	                    localctx = new ExpPostIncrementContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    localctx.exp = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, SintesisParser.RULE_expression);
	                    this.state = 236;
	                    if (!( this.precpred(this._ctx, 8))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
	                    }
	                    this.state = 237;
	                    if (!( this.notLineTerminator())) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.notLineTerminator()");
	                    }
	                    this.state = 238;
	                    this.match(SintesisParser.PlusPlus);
	                    break;

	                case 21:
	                    localctx = new ExpPostDecreaseContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    localctx.exp = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, SintesisParser.RULE_expression);
	                    this.state = 239;
	                    if (!( this.precpred(this._ctx, 7))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
	                    }
	                    this.state = 240;
	                    if (!( this.notLineTerminator())) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.notLineTerminator()");
	                    }
	                    this.state = 241;
	                    this.match(SintesisParser.MinusMinus);
	                    break;

	                } 
	            }
	            this.state = 246;
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
	        this.state = 247;
	        this.expression(0);
	        this.state = 252;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===SintesisParser.Comma) {
	            this.state = 248;
	            this.match(SintesisParser.Comma);
	            this.state = 249;
	            this.expression(0);
	            this.state = 254;
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
	        this.state = 255;
	        this.match(SintesisParser.If);
	        this.state = 256;
	        localctx.exp = this.expression(0);
	        this.state = 258;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===SintesisParser.Then) {
	            this.state = 257;
	            this.match(SintesisParser.Then);
	        }

	        this.state = 260;
	        localctx.stmt = this.statement();
	        this.state = 262;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
	        if(la_===1) {
	            this.state = 261;
	            localctx.elseifs = this.elseIfs();

	        }
	        this.state = 265;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
	        if(la_===1) {
	            this.state = 264;
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
	        this.state = 268; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 267;
	        		this.elseIf();
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 270; 
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
	        this.state = 272;
	        this.match(SintesisParser.ElseIf);
	        this.state = 273;
	        localctx.exp = this.expression(0);
	        this.state = 275;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===SintesisParser.Then) {
	            this.state = 274;
	            this.match(SintesisParser.Then);
	        }

	        this.state = 277;
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
	        this.state = 279;
	        this.match(SintesisParser.Else);
	        this.state = 280;
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
	        this.state = 301;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,15,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new RepeatStatementContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 282;
	            this.match(SintesisParser.Repeat);
	            this.state = 283;
	            localctx.exp = this.expression(0);
	            this.state = 284;
	            localctx.stmt = this.statement();
	            break;

	        case 2:
	            localctx = new RepeatWhileStatementContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 286;
	            this.match(SintesisParser.Repeat);
	            this.state = 287;
	            localctx.stmt = this.statement();
	            this.state = 288;
	            this.match(SintesisParser.While);
	            this.state = 289;
	            localctx.exp = this.expression(0);
	            break;

	        case 3:
	            localctx = new WhileRepeatStatementContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 292;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===SintesisParser.Repeat) {
	                this.state = 291;
	                this.match(SintesisParser.Repeat);
	            }

	            this.state = 294;
	            this.match(SintesisParser.While);
	            this.state = 295;
	            localctx.exp = this.expression(0);
	            this.state = 297;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,14,this._ctx);
	            if(la_===1) {
	                this.state = 296;
	                this.match(SintesisParser.Repeat);

	            }
	            this.state = 299;
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
	        this.state = 303;
	        this.match(SintesisParser.Return);
	        this.state = 304;
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
	        this.state = 317;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,17,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new VectorDeclarationContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 306;
	            this.match(SintesisParser.Var);
	            this.state = 307;
	            localctx.id = this.match(SintesisParser.Identifier);
	            this.state = 308;
	            this.match(SintesisParser.Assign);
	            this.state = 310;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===SintesisParser.Vector) {
	                this.state = 309;
	                this.match(SintesisParser.Vector);
	            }

	            this.state = 312;
	            localctx.idx = this.vectorIndexes();
	            break;

	        case 2:
	            localctx = new VarSingleDeclarationContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 313;
	            this.match(SintesisParser.Var);
	            this.state = 314;
	            localctx.id = this.match(SintesisParser.Identifier);
	            this.state = 315;
	            this.match(SintesisParser.Assign);
	            this.state = 316;
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
	        this.state = 319;
	        this.match(SintesisParser.Function_);
	        this.state = 320;
	        localctx.id = this.match(SintesisParser.Identifier);
	        this.state = 321;
	        this.match(SintesisParser.OpenParen);
	        this.state = 323;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===SintesisParser.Identifier) {
	            this.state = 322;
	            localctx.pl = this.formalParameterList();
	        }

	        this.state = 325;
	        this.match(SintesisParser.CloseParen);
	        this.state = 326;
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
	        this.state = 328;
	        this.formalParameterArg();
	        this.state = 333;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===SintesisParser.Comma) {
	            this.state = 329;
	            this.match(SintesisParser.Comma);
	            this.state = 330;
	            this.formalParameterArg();
	            this.state = 335;
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
	        this.state = 336;
	        this.match(SintesisParser.OpenParen);
	        this.state = 345;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << SintesisParser.OpenBracket) | (1 << SintesisParser.OpenParen) | (1 << SintesisParser.PlusPlus) | (1 << SintesisParser.MinusMinus) | (1 << SintesisParser.Plus) | (1 << SintesisParser.Minus) | (1 << SintesisParser.BitNot) | (1 << SintesisParser.Not))) !== 0) || ((((_la - 57)) & ~0x1f) == 0 && ((1 << (_la - 57)) & ((1 << (SintesisParser.NullLiteral - 57)) | (1 << (SintesisParser.DecimalLiteral - 57)) | (1 << (SintesisParser.HexIntegerLiteral - 57)) | (1 << (SintesisParser.OctalIntegerLiteral - 57)) | (1 << (SintesisParser.OctalIntegerLiteral2 - 57)) | (1 << (SintesisParser.BinaryIntegerLiteral - 57)) | (1 << (SintesisParser.BooleanLiteral - 57)) | (1 << (SintesisParser.Vector - 57)) | (1 << (SintesisParser.Attributes - 57)))) !== 0) || _la===SintesisParser.Identifier || _la===SintesisParser.StringLiteral) {
	            this.state = 337;
	            this.expression(0);
	            this.state = 342;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===SintesisParser.Comma) {
	                this.state = 338;
	                this.match(SintesisParser.Comma);
	                this.state = 339;
	                this.expression(0);
	                this.state = 344;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 347;
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
	        this.state = 349;
	        this.match(SintesisParser.Class_);
	        this.state = 350;
	        localctx.id = this.match(SintesisParser.Identifier);
	        this.state = 353;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===SintesisParser.Extends) {
	            this.state = 351;
	            this.match(SintesisParser.Extends);
	            this.state = 352;
	            localctx.ext = this.match(SintesisParser.Identifier);
	        }

	        this.state = 355;
	        this.match(SintesisParser.OpenBrace);
	        this.state = 359;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===SintesisParser.Attributes) {
	            this.state = 356;
	            this.match(SintesisParser.Attributes);
	            this.state = 357;
	            this.match(SintesisParser.Colon);
	            this.state = 358;
	            localctx.atrs = this.identifiers();
	        }

	        this.state = 364;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===SintesisParser.Methods) {
	            this.state = 361;
	            this.match(SintesisParser.Methods);
	            this.state = 362;
	            this.match(SintesisParser.Colon);
	            this.state = 363;
	            localctx.methods = this.methodsList();
	        }

	        this.state = 366;
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
	        this.state = 372; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 368;
	            this.match(SintesisParser.Identifier);
	            this.state = 370;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===SintesisParser.Comma) {
	                this.state = 369;
	                this.match(SintesisParser.Comma);
	            }

	            this.state = 374; 
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
	        this.state = 377;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===SintesisParser.Function_) {
	            this.state = 376;
	            this.match(SintesisParser.Function_);
	        }

	        this.state = 379;
	        localctx.id = this.match(SintesisParser.Identifier);
	        this.state = 380;
	        this.match(SintesisParser.OpenParen);
	        this.state = 382;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===SintesisParser.Identifier) {
	            this.state = 381;
	            localctx.pl = this.formalParameterList();
	        }

	        this.state = 384;
	        this.match(SintesisParser.CloseParen);
	        this.state = 385;
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
	        this.state = 388; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 387;
	            this.methodDeclaration();
	            this.state = 390; 
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
	        this.state = 392;
	        this.match(SintesisParser.New_);
	        this.state = 393;
	        this.match(SintesisParser.Identifier);
	        this.state = 394;
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
	        this.state = 396;
	        this.match(SintesisParser.OpenBracket);
	        this.state = 398;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << SintesisParser.OpenBracket) | (1 << SintesisParser.OpenParen) | (1 << SintesisParser.PlusPlus) | (1 << SintesisParser.MinusMinus) | (1 << SintesisParser.Plus) | (1 << SintesisParser.Minus) | (1 << SintesisParser.BitNot) | (1 << SintesisParser.Not))) !== 0) || ((((_la - 57)) & ~0x1f) == 0 && ((1 << (_la - 57)) & ((1 << (SintesisParser.NullLiteral - 57)) | (1 << (SintesisParser.DecimalLiteral - 57)) | (1 << (SintesisParser.HexIntegerLiteral - 57)) | (1 << (SintesisParser.OctalIntegerLiteral - 57)) | (1 << (SintesisParser.OctalIntegerLiteral2 - 57)) | (1 << (SintesisParser.BinaryIntegerLiteral - 57)) | (1 << (SintesisParser.BooleanLiteral - 57)) | (1 << (SintesisParser.Vector - 57)) | (1 << (SintesisParser.Attributes - 57)))) !== 0) || _la===SintesisParser.Identifier || _la===SintesisParser.StringLiteral) {
	            this.state = 397;
	            this.expression(0);
	        }

	        this.state = 400;
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
	        this.state = 403; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 402;
	        		this.vectorIndex();
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 405; 
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
	        this.state = 407;
	        this.match(SintesisParser.Identifier);
	        this.state = 410;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===SintesisParser.Assign) {
	            this.state = 408;
	            this.match(SintesisParser.Assign);
	            this.state = 409;
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
	        this.enterOuterAlt(localctx, 1);
	        this.state = 412;
	        this.block();
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
	        this.state = 414;
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
	        this.state = 422;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,33,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new AssignableAttributeContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 416;
	            this.match(SintesisParser.Attributes);
	            this.state = 417;
	            this.match(SintesisParser.Dot);
	            this.state = 418;
	            localctx.id = this.match(SintesisParser.Identifier);
	            break;

	        case 2:
	            localctx = new AssignableVectorContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 419;
	            localctx.id = this.match(SintesisParser.Identifier);
	            this.state = 420;
	            localctx.idx = this.vectorIndexes();
	            break;

	        case 3:
	            localctx = new AssignableIdContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 421;
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
	        this.state = 427;
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
	        case SintesisParser.Dictionary:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 424;
	            this.keyword();
	            break;
	        case SintesisParser.NullLiteral:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 425;
	            this.match(SintesisParser.NullLiteral);
	            break;
	        case SintesisParser.BooleanLiteral:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 426;
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
	        this.state = 433;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case SintesisParser.NullLiteral:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 429;
	            this.nullLiteral();
	            break;
	        case SintesisParser.BooleanLiteral:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 430;
	            this.booleanLiteral();
	            break;
	        case SintesisParser.StringLiteral:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 431;
	            this.stringLiteral();
	            break;
	        case SintesisParser.DecimalLiteral:
	        case SintesisParser.HexIntegerLiteral:
	        case SintesisParser.OctalIntegerLiteral:
	        case SintesisParser.OctalIntegerLiteral2:
	        case SintesisParser.BinaryIntegerLiteral:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 432;
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
	        this.state = 435;
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
	        this.state = 437;
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
	        this.state = 439;
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
	        this.state = 441;
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
	        this.state = 445;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case SintesisParser.Identifier:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 443;
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
	        case SintesisParser.Dictionary:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 444;
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
	        this.state = 457;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,37,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);

	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 448;
	            this.match(SintesisParser.Else);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 449;
	            this.match(SintesisParser.Then);
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 450;
	            this.match(SintesisParser.Return);
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 451;
	            this.match(SintesisParser.While);
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 452;
	            this.match(SintesisParser.Function_);
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 453;
	            this.match(SintesisParser.If);
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 454;
	            this.match(SintesisParser.Vector);
	            break;

	        case 9:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 455;
	            this.match(SintesisParser.Dictionary);
	            break;

	        case 10:
	            this.enterOuterAlt(localctx, 10);

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
	    try {
	        this.state = 463;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,38,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 459;
	            this.match(SintesisParser.SemiColon);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 460;
	            this.match(SintesisParser.EOF);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 461;
	            if (!( this.lineTerminatorAhead())) {
	                throw new antlr4.error.FailedPredicateException(this, "this.lineTerminatorAhead()");
	            }
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 462;
	            if (!( this.closeBrace())) {
	                throw new antlr4.error.FailedPredicateException(this, "this.closeBrace()");
	            }
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

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
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

	Dictionary() {
	    return this.getToken(SintesisParser.Dictionary, 0);
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
