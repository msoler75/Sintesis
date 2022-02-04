// Generated from ./src/grammar/SintesisParser.g4 by ANTLR 4.9.3
// jshint ignore: start
import antlr4 from 'antlr4';
import SintesisParserVisitor from './SintesisParserVisitor.js';


const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0003u\u023f\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f",
    "\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010",
    "\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014",
    "\t\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017",
    "\u0004\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a\u0004\u001b",
    "\t\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e\t\u001e",
    "\u0004\u001f\t\u001f\u0004 \t \u0004!\t!\u0004\"\t\"\u0004#\t#\u0004",
    "$\t$\u0004%\t%\u0004&\t&\u0004\'\t\'\u0004(\t(\u0004)\t)\u0004*\t*\u0004",
    "+\t+\u0004,\t,\u0004-\t-\u0004.\t.\u0004/\t/\u0003\u0002\u0003\u0002",
    "\u0003\u0002\u0003\u0003\u0006\u0003c\n\u0003\r\u0003\u000e\u0003d\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0005\u0004p\n\u0004\u0003\u0005\u0003",
    "\u0005\u0005\u0005t\n\u0005\u0003\u0005\u0003\u0005\u0003\u0006\u0003",
    "\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0003\b\u0005\b\u0096\n\b\u0003\b\u0003\b",
    "\u0003\b\u0003\b\u0003\b\u0003\b\u0005\b\u009e\n\b\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0007\b\u00f2",
    "\n\b\f\b\u000e\b\u00f5\u000b\b\u0003\t\u0003\t\u0003\n\u0003\n\u0003",
    "\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0005\n\u0101\n\n\u0003\u000b",
    "\u0003\u000b\u0005\u000b\u0105\n\u000b\u0003\f\u0003\f\u0003\r\u0003",
    "\r\u0003\r\u0003\r\u0005\r\u010d\n\r\u0003\u000e\u0003\u000e\u0003\u000e",
    "\u0007\u000e\u0112\n\u000e\f\u000e\u000e\u000e\u0115\u000b\u000e\u0003",
    "\u000f\u0003\u000f\u0003\u000f\u0005\u000f\u011a\n\u000f\u0003\u000f",
    "\u0003\u000f\u0005\u000f\u011e\n\u000f\u0003\u000f\u0005\u000f\u0121",
    "\n\u000f\u0003\u0010\u0006\u0010\u0124\n\u0010\r\u0010\u000e\u0010\u0125",
    "\u0003\u0011\u0003\u0011\u0003\u0011\u0005\u0011\u012b\n\u0011\u0003",
    "\u0011\u0003\u0011\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0013\u0003",
    "\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003",
    "\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0005",
    "\u0013\u013f\n\u0013\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014",
    "\u0003\u0014\u0003\u0014\u0003\u0015\u0003\u0015\u0003\u0015\u0005\u0015",
    "\u014a\n\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003",
    "\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0005\u0015\u0154\n\u0015",
    "\u0003\u0015\u0003\u0015\u0003\u0015\u0005\u0015\u0159\n\u0015\u0003",
    "\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0005\u0015\u0160",
    "\n\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015",
    "\u0003\u0015\u0003\u0015\u0005\u0015\u0169\n\u0015\u0003\u0015\u0003",
    "\u0015\u0003\u0015\u0003\u0015\u0005\u0015\u016f\n\u0015\u0003\u0015",
    "\u0005\u0015\u0172\n\u0015\u0003\u0015\u0003\u0015\u0005\u0015\u0176",
    "\n\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0005\u0015",
    "\u017c\n\u0015\u0003\u0015\u0005\u0015\u017f\n\u0015\u0003\u0015\u0003",
    "\u0015\u0003\u0015\u0003\u0015\u0005\u0015\u0185\n\u0015\u0003\u0015",
    "\u0003\u0015\u0005\u0015\u0189\n\u0015\u0003\u0016\u0003\u0016\u0003",
    "\u0016\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0005\u0017\u0192",
    "\n\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0018\u0003\u0018",
    "\u0003\u0018\u0007\u0018\u019a\n\u0018\f\u0018\u000e\u0018\u019d\u000b",
    "\u0018\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0007\u0019\u01a3",
    "\n\u0019\f\u0019\u000e\u0019\u01a6\u000b\u0019\u0005\u0019\u01a8\n\u0019",
    "\u0003\u0019\u0003\u0019\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a",
    "\u0005\u001a\u01b0\n\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003",
    "\u001a\u0005\u001a\u01b6\n\u001a\u0003\u001a\u0003\u001a\u0003\u001a",
    "\u0005\u001a\u01bb\n\u001a\u0003\u001a\u0003\u001a\u0003\u001b\u0003",
    "\u001b\u0005\u001b\u01c1\n\u001b\u0006\u001b\u01c3\n\u001b\r\u001b\u000e",
    "\u001b\u01c4\u0003\u001c\u0005\u001c\u01c8\n\u001c\u0003\u001c\u0003",
    "\u001c\u0003\u001c\u0005\u001c\u01cd\n\u001c\u0003\u001c\u0003\u001c",
    "\u0003\u001c\u0003\u001d\u0006\u001d\u01d3\n\u001d\r\u001d\u000e\u001d",
    "\u01d4\u0003\u001e\u0003\u001e\u0003\u001e\u0003\u001e\u0003\u001f\u0003",
    "\u001f\u0005\u001f\u01dd\n\u001f\u0003\u001f\u0003\u001f\u0003 \u0006",
    " \u01e2\n \r \u000e \u01e3\u0003!\u0003!\u0003!\u0005!\u01e9\n!\u0003",
    "\"\u0003\"\u0005\"\u01ed\n\"\u0003#\u0003#\u0003$\u0003$\u0003$\u0005",
    "$\u01f4\n$\u0003%\u0003%\u0003%\u0005%\u01f9\n%\u0003&\u0003&\u0003",
    "&\u0003\'\u0003\'\u0003\'\u0003\'\u0007\'\u0202\n\'\f\'\u000e\'\u0205",
    "\u000b\'\u0005\'\u0207\n\'\u0003\'\u0003\'\u0003(\u0003(\u0003(\u0003",
    "(\u0003(\u0003(\u0003(\u0003(\u0003(\u0007(\u0214\n(\f(\u000e(\u0217",
    "\u000b(\u0005(\u0219\n(\u0003(\u0003(\u0003)\u0003)\u0003)\u0003)\u0003",
    ")\u0003)\u0003)\u0003)\u0005)\u0225\n)\u0003*\u0003*\u0003+\u0003+\u0003",
    ",\u0003,\u0003-\u0003-\u0003.\u0003.\u0005.\u0231\n.\u0003/\u0003/\u0003",
    "/\u0003/\u0003/\u0003/\u0003/\u0003/\u0003/\u0003/\u0005/\u023d\n/\u0003",
    "/\u0002\u0003\u000e0\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014",
    "\u0016\u0018\u001a\u001c\u001e \"$&(*,.02468:<>@BDFHJLNPRTVXZ\\\u0002",
    "\n\u0004\u0002<<rr\u0004\u0002`brr\u0003\u0002\u0012\u0013\u0003\u0002",
    "OP\u0004\u0002\r\rOO\u0004\u0002IIKK\u0003\u0002.9\u0003\u0002<@\u0002",
    "\u028d\u0002^\u0003\u0002\u0002\u0002\u0004b\u0003\u0002\u0002\u0002",
    "\u0006o\u0003\u0002\u0002\u0002\bq\u0003\u0002\u0002\u0002\nw\u0003",
    "\u0002\u0002\u0002\fz\u0003\u0002\u0002\u0002\u000e\u009d\u0003\u0002",
    "\u0002\u0002\u0010\u00f6\u0003\u0002\u0002\u0002\u0012\u0100\u0003\u0002",
    "\u0002\u0002\u0014\u0104\u0003\u0002\u0002\u0002\u0016\u0106\u0003\u0002",
    "\u0002\u0002\u0018\u010c\u0003\u0002\u0002\u0002\u001a\u010e\u0003\u0002",
    "\u0002\u0002\u001c\u0116\u0003\u0002\u0002\u0002\u001e\u0123\u0003\u0002",
    "\u0002\u0002 \u0127\u0003\u0002\u0002\u0002\"\u012e\u0003\u0002\u0002",
    "\u0002$\u013e\u0003\u0002\u0002\u0002&\u0140\u0003\u0002\u0002\u0002",
    "(\u0188\u0003\u0002\u0002\u0002*\u018a\u0003\u0002\u0002\u0002,\u018d",
    "\u0003\u0002\u0002\u0002.\u0196\u0003\u0002\u0002\u00020\u019e\u0003",
    "\u0002\u0002\u00022\u01ab\u0003\u0002\u0002\u00024\u01c2\u0003\u0002",
    "\u0002\u00026\u01c7\u0003\u0002\u0002\u00028\u01d2\u0003\u0002\u0002",
    "\u0002:\u01d6\u0003\u0002\u0002\u0002<\u01da\u0003\u0002\u0002\u0002",
    ">\u01e1\u0003\u0002\u0002\u0002@\u01e5\u0003\u0002\u0002\u0002B\u01ec",
    "\u0003\u0002\u0002\u0002D\u01ee\u0003\u0002\u0002\u0002F\u01f3\u0003",
    "\u0002\u0002\u0002H\u01f5\u0003\u0002\u0002\u0002J\u01fa\u0003\u0002",
    "\u0002\u0002L\u01fd\u0003\u0002\u0002\u0002N\u020a\u0003\u0002\u0002",
    "\u0002P\u0224\u0003\u0002\u0002\u0002R\u0226\u0003\u0002\u0002\u0002",
    "T\u0228\u0003\u0002\u0002\u0002V\u022a\u0003\u0002\u0002\u0002X\u022c",
    "\u0003\u0002\u0002\u0002Z\u0230\u0003\u0002\u0002\u0002\\\u023c\u0003",
    "\u0002\u0002\u0002^_\u0005\u0004\u0003\u0002_`\u0007\u0002\u0002\u0003",
    "`\u0003\u0003\u0002\u0002\u0002ac\u0005\u0006\u0004\u0002ba\u0003\u0002",
    "\u0002\u0002cd\u0003\u0002\u0002\u0002db\u0003\u0002\u0002\u0002de\u0003",
    "\u0002\u0002\u0002e\u0005\u0003\u0002\u0002\u0002fp\u0005\b\u0005\u0002",
    "gp\u0005\n\u0006\u0002hp\u0005\f\u0007\u0002ip\u0005\u001c\u000f\u0002",
    "jp\u0005(\u0015\u0002kp\u0005*\u0016\u0002lp\u00052\u001a\u0002mp\u0005",
    ",\u0017\u0002np\u0005\u000e\b\u0002of\u0003\u0002\u0002\u0002og\u0003",
    "\u0002\u0002\u0002oh\u0003\u0002\u0002\u0002oi\u0003\u0002\u0002\u0002",
    "oj\u0003\u0002\u0002\u0002ok\u0003\u0002\u0002\u0002ol\u0003\u0002\u0002",
    "\u0002om\u0003\u0002\u0002\u0002on\u0003\u0002\u0002\u0002p\u0007\u0003",
    "\u0002\u0002\u0002qs\u0007\t\u0002\u0002rt\u0005\u0004\u0003\u0002s",
    "r\u0003\u0002\u0002\u0002st\u0003\u0002\u0002\u0002tu\u0003\u0002\u0002",
    "\u0002uv\u0007\n\u0002\u0002v\t\u0003\u0002\u0002\u0002wx\u0007F\u0002",
    "\u0002xy\t\u0002\u0002\u0002y\u000b\u0003\u0002\u0002\u0002z{\u0007",
    "G\u0002\u0002{|\u0005\u001a\u000e\u0002|\r\u0003\u0002\u0002\u0002}",
    "~\b\b\u0001\u0002~\u007f\u0005\u0018\r\u0002\u007f\u0080\u00050\u0019",
    "\u0002\u0080\u009e\u0003\u0002\u0002\u0002\u0081\u0082\u0007_\u0002",
    "\u0002\u0082\u0083\u0007\u0011\u0002\u0002\u0083\u0084\t\u0003\u0002",
    "\u0002\u0084\u009e\u00050\u0019\u0002\u0085\u0086\t\u0004\u0002\u0002",
    "\u0086\u009e\u0005\u000e\b!\u0087\u0088\u0007\u0014\u0002\u0002\u0088",
    "\u009e\u0005\u000e\b \u0089\u008a\u0007\u0015\u0002\u0002\u008a\u009e",
    "\u0005\u000e\b\u001f\u008b\u008c\u0007\u0016\u0002\u0002\u008c\u009e",
    "\u0005\u000e\b\u001e\u008d\u008e\u0007\u0017\u0002\u0002\u008e\u009e",
    "\u0005\u000e\b\u001d\u008f\u009e\u0005P)\u0002\u0090\u0091\u0007j\u0002",
    "\u0002\u0091\u0096\u0007\u0011\u0002\u0002\u0092\u0093\u0007k\u0002",
    "\u0002\u0093\u0096\u0007\u0011\u0002\u0002\u0094\u0096\u0007q\u0002",
    "\u0002\u0095\u0090\u0003\u0002\u0002\u0002\u0095\u0092\u0003\u0002\u0002",
    "\u0002\u0095\u0094\u0003\u0002\u0002\u0002\u0095\u0096\u0003\u0002\u0002",
    "\u0002\u0096\u0097\u0003\u0002\u0002\u0002\u0097\u009e\u0007r\u0002",
    "\u0002\u0098\u0099\u0007\u0007\u0002\u0002\u0099\u009a\u0005\u000e\b",
    "\u0002\u009a\u009b\u0007\b\u0002\u0002\u009b\u009e\u0003\u0002\u0002",
    "\u0002\u009c\u009e\u0007\u0004\u0002\u0002\u009d}\u0003\u0002\u0002",
    "\u0002\u009d\u0081\u0003\u0002\u0002\u0002\u009d\u0085\u0003\u0002\u0002",
    "\u0002\u009d\u0087\u0003\u0002\u0002\u0002\u009d\u0089\u0003\u0002\u0002",
    "\u0002\u009d\u008b\u0003\u0002\u0002\u0002\u009d\u008d\u0003\u0002\u0002",
    "\u0002\u009d\u008f\u0003\u0002\u0002\u0002\u009d\u0095\u0003\u0002\u0002",
    "\u0002\u009d\u0098\u0003\u0002\u0002\u0002\u009d\u009c\u0003\u0002\u0002",
    "\u0002\u009e\u00f3\u0003\u0002\u0002\u0002\u009f\u00a0\f\u001c\u0002",
    "\u0002\u00a0\u00a1\u0007\u0014\u0002\u0002\u00a1\u00f2\u0005\u000e\b",
    "\u001d\u00a2\u00a3\f\u001b\u0002\u0002\u00a3\u00a4\u0007\u0015\u0002",
    "\u0002\u00a4\u00f2\u0005\u000e\b\u001c\u00a5\u00a6\f\u001a\u0002\u0002",
    "\u00a6\u00a7\u0007\u0018\u0002\u0002\u00a7\u00f2\u0005\u000e\b\u001b",
    "\u00a8\u00a9\f\u0019\u0002\u0002\u00a9\u00aa\u0007\u0019\u0002\u0002",
    "\u00aa\u00f2\u0005\u000e\b\u001a\u00ab\u00ac\f\u0018\u0002\u0002\u00ac",
    "\u00ad\u0007\u001b\u0002\u0002\u00ad\u00f2\u0005\u000e\b\u0018\u00ae",
    "\u00af\f\u0017\u0002\u0002\u00af\u00b0\u0007\u001a\u0002\u0002\u00b0",
    "\u00f2\u0005\u000e\b\u0018\u00b1\u00b2\f\u0016\u0002\u0002\u00b2\u00b3",
    "\u0007!\u0002\u0002\u00b3\u00f2\u0005\u000e\b\u0017\u00b4\u00b5\f\u0015",
    "\u0002\u0002\u00b5\u00b6\u0007\"\u0002\u0002\u00b6\u00f2\u0005\u000e",
    "\b\u0016\u00b7\u00b8\f\u0014\u0002\u0002\u00b8\u00b9\u0007#\u0002\u0002",
    "\u00b9\u00f2\u0005\u000e\b\u0015\u00ba\u00bb\f\u0013\u0002\u0002\u00bb",
    "\u00bc\u0007$\u0002\u0002\u00bc\u00f2\u0005\u000e\b\u0014\u00bd\u00be",
    "\f\u0012\u0002\u0002\u00be\u00bf\u0007)\u0002\u0002\u00bf\u00f2\u0005",
    "\u000e\b\u0013\u00c0\u00c1\f\u0011\u0002\u0002\u00c1\u00c2\u0007+\u0002",
    "\u0002\u00c2\u00f2\u0005\u000e\b\u0012\u00c3\u00c4\f\u0010\u0002\u0002",
    "\u00c4\u00c5\u0007*\u0002\u0002\u00c5\u00f2\u0005\u000e\b\u0011\u00c6",
    "\u00c7\f\u000f\u0002\u0002\u00c7\u00c8\u0007\'\u0002\u0002\u00c8\u00f2",
    "\u0005\u000e\b\u0010\u00c9\u00ca\f\u000e\u0002\u0002\u00ca\u00cb\u0007",
    "(\u0002\u0002\u00cb\u00f2\u0005\u000e\b\u000f\u00cc\u00cd\f\r\u0002",
    "\u0002\u00cd\u00ce\u0007%\u0002\u0002\u00ce\u00f2\u0005\u000e\b\u000e",
    "\u00cf\u00d0\f\f\u0002\u0002\u00d0\u00d1\u0007&\u0002\u0002\u00d1\u00f2",
    "\u0005\u000e\b\r\u00d2\u00d3\f\u000b\u0002\u0002\u00d3\u00d4\u0007,",
    "\u0002\u0002\u00d4\u00f2\u0005\u000e\b\f\u00d5\u00d6\f\n\u0002\u0002",
    "\u00d6\u00d7\u0007-\u0002\u0002\u00d7\u00f2\u0005\u000e\b\u000b\u00d8",
    "\u00d9\f\t\u0002\u0002\u00d9\u00da\u0007\u000e\u0002\u0002\u00da\u00db",
    "\u0005\u000e\b\u0002\u00db\u00dc\u0007\u000f\u0002\u0002\u00dc\u00dd",
    "\u0005\u000e\b\n\u00dd\u00f2\u0003\u0002\u0002\u0002\u00de\u00df\f\b",
    "\u0002\u0002\u00df\u00e0\u0007\r\u0002\u0002\u00e0\u00f2\u0005\u000e",
    "\b\b\u00e1\u00e2\f\u0007\u0002\u0002\u00e2\u00e3\u0005D#\u0002\u00e3",
    "\u00e4\u0005\u000e\b\u0007\u00e4\u00f2\u0003\u0002\u0002\u0002\u00e5",
    "\u00e6\f%\u0002\u0002\u00e6\u00e7\u0007\u0005\u0002\u0002\u00e7\u00e8",
    "\u0005\u000e\b\u0002\u00e8\u00e9\u0007\u0006\u0002\u0002\u00e9\u00f2",
    "\u0003\u0002\u0002\u0002\u00ea\u00eb\f$\u0002\u0002\u00eb\u00ec\u0007",
    "\u0011\u0002\u0002\u00ec\u00f2\u0005Z.\u0002\u00ed\u00ee\f#\u0002\u0002",
    "\u00ee\u00f2\u00050\u0019\u0002\u00ef\u00f0\f\"\u0002\u0002\u00f0\u00f2",
    "\t\u0004\u0002\u0002\u00f1\u009f\u0003\u0002\u0002\u0002\u00f1\u00a2",
    "\u0003\u0002\u0002\u0002\u00f1\u00a5\u0003\u0002\u0002\u0002\u00f1\u00a8",
    "\u0003\u0002\u0002\u0002\u00f1\u00ab\u0003\u0002\u0002\u0002\u00f1\u00ae",
    "\u0003\u0002\u0002\u0002\u00f1\u00b1\u0003\u0002\u0002\u0002\u00f1\u00b4",
    "\u0003\u0002\u0002\u0002\u00f1\u00b7\u0003\u0002\u0002\u0002\u00f1\u00ba",
    "\u0003\u0002\u0002\u0002\u00f1\u00bd\u0003\u0002\u0002\u0002\u00f1\u00c0",
    "\u0003\u0002\u0002\u0002\u00f1\u00c3\u0003\u0002\u0002\u0002\u00f1\u00c6",
    "\u0003\u0002\u0002\u0002\u00f1\u00c9\u0003\u0002\u0002\u0002\u00f1\u00cc",
    "\u0003\u0002\u0002\u0002\u00f1\u00cf\u0003\u0002\u0002\u0002\u00f1\u00d2",
    "\u0003\u0002\u0002\u0002\u00f1\u00d5\u0003\u0002\u0002\u0002\u00f1\u00d8",
    "\u0003\u0002\u0002\u0002\u00f1\u00de\u0003\u0002\u0002\u0002\u00f1\u00e1",
    "\u0003\u0002\u0002\u0002\u00f1\u00e5\u0003\u0002\u0002\u0002\u00f1\u00ea",
    "\u0003\u0002\u0002\u0002\u00f1\u00ed\u0003\u0002\u0002\u0002\u00f1\u00ef",
    "\u0003\u0002\u0002\u0002\u00f2\u00f5\u0003\u0002\u0002\u0002\u00f3\u00f1",
    "\u0003\u0002\u0002\u0002\u00f3\u00f4\u0003\u0002\u0002\u0002\u00f4\u000f",
    "\u0003\u0002\u0002\u0002\u00f5\u00f3\u0003\u0002\u0002\u0002\u00f6\u00f7",
    "\u0007b\u0002\u0002\u00f7\u0011\u0003\u0002\u0002\u0002\u00f8\u0101",
    "\u0007Z\u0002\u0002\u00f9\u0101\u0007]\u0002\u0002\u00fa\u0101\u0007",
    "^\u0002\u0002\u00fb\u0101\u0007a\u0002\u0002\u00fc\u0101\u0007`\u0002",
    "\u0002\u00fd\u0101\u0007d\u0002\u0002\u00fe\u0101\u0007c\u0002\u0002",
    "\u00ff\u0101\u0007e\u0002\u0002\u0100\u00f8\u0003\u0002\u0002\u0002",
    "\u0100\u00f9\u0003\u0002\u0002\u0002\u0100\u00fa\u0003\u0002\u0002\u0002",
    "\u0100\u00fb\u0003\u0002\u0002\u0002\u0100\u00fc\u0003\u0002\u0002\u0002",
    "\u0100\u00fd\u0003\u0002\u0002\u0002\u0100\u00fe\u0003\u0002\u0002\u0002",
    "\u0100\u00ff\u0003\u0002\u0002\u0002\u0101\u0013\u0003\u0002\u0002\u0002",
    "\u0102\u0105\u0007[\u0002\u0002\u0103\u0105\u0007f\u0002\u0002\u0104",
    "\u0102\u0003\u0002\u0002\u0002\u0104\u0103\u0003\u0002\u0002\u0002\u0105",
    "\u0015\u0003\u0002\u0002\u0002\u0106\u0107\u0007\\\u0002\u0002\u0107",
    "\u0017\u0003\u0002\u0002\u0002\u0108\u010d\u0005\u0010\t\u0002\u0109",
    "\u010d\u0005\u0012\n\u0002\u010a\u010d\u0005\u0014\u000b\u0002\u010b",
    "\u010d\u0005\u0016\f\u0002\u010c\u0108\u0003\u0002\u0002\u0002\u010c",
    "\u0109\u0003\u0002\u0002\u0002\u010c\u010a\u0003\u0002\u0002\u0002\u010c",
    "\u010b\u0003\u0002\u0002\u0002\u010d\u0019\u0003\u0002\u0002\u0002\u010e",
    "\u0113\u0005\u000e\b\u0002\u010f\u0110\u0007\f\u0002\u0002\u0110\u0112",
    "\u0005\u000e\b\u0002\u0111\u010f\u0003\u0002\u0002\u0002\u0112\u0115",
    "\u0003\u0002\u0002\u0002\u0113\u0111\u0003\u0002\u0002\u0002\u0113\u0114",
    "\u0003\u0002\u0002\u0002\u0114\u001b\u0003\u0002\u0002\u0002\u0115\u0113",
    "\u0003\u0002\u0002\u0002\u0116\u0117\u0007R\u0002\u0002\u0117\u0119",
    "\u0005\u000e\b\u0002\u0118\u011a\u0007S\u0002\u0002\u0119\u0118\u0003",
    "\u0002\u0002\u0002\u0119\u011a\u0003\u0002\u0002\u0002\u011a\u011b\u0003",
    "\u0002\u0002\u0002\u011b\u011d\u0005\u0006\u0004\u0002\u011c\u011e\u0005",
    "\u001e\u0010\u0002\u011d\u011c\u0003\u0002\u0002\u0002\u011d\u011e\u0003",
    "\u0002\u0002\u0002\u011e\u0120\u0003\u0002\u0002\u0002\u011f\u0121\u0005",
    "\"\u0012\u0002\u0120\u011f\u0003\u0002\u0002\u0002\u0120\u0121\u0003",
    "\u0002\u0002\u0002\u0121\u001d\u0003\u0002\u0002\u0002\u0122\u0124\u0005",
    " \u0011\u0002\u0123\u0122\u0003\u0002\u0002\u0002\u0124\u0125\u0003",
    "\u0002\u0002\u0002\u0125\u0123\u0003\u0002\u0002\u0002\u0125\u0126\u0003",
    "\u0002\u0002\u0002\u0126\u001f\u0003\u0002\u0002\u0002\u0127\u0128\u0007",
    "T\u0002\u0002\u0128\u012a\u0005\u000e\b\u0002\u0129\u012b\u0007S\u0002",
    "\u0002\u012a\u0129\u0003\u0002\u0002\u0002\u012a\u012b\u0003\u0002\u0002",
    "\u0002\u012b\u012c\u0003\u0002\u0002\u0002\u012c\u012d\u0005\u0006\u0004",
    "\u0002\u012d!\u0003\u0002\u0002\u0002\u012e\u012f\u0007U\u0002\u0002",
    "\u012f\u0130\u0005\u0006\u0004\u0002\u0130#\u0003\u0002\u0002\u0002",
    "\u0131\u0132\u0007r\u0002\u0002\u0132\u0133\t\u0005\u0002\u0002\u0133",
    "\u013f\u0005\u000e\b\u0002\u0134\u0135\u0007r\u0002\u0002\u0135\u0136",
    "\u0007\f\u0002\u0002\u0136\u0137\u0007r\u0002\u0002\u0137\u0138\t\u0005",
    "\u0002\u0002\u0138\u013f\u0005\u000e\b\u0002\u0139\u013a\u0007r\u0002",
    "\u0002\u013a\u013b\u0007:\u0002\u0002\u013b\u013c\u0007r\u0002\u0002",
    "\u013c\u013d\t\u0005\u0002\u0002\u013d\u013f\u0005\u000e\b\u0002\u013e",
    "\u0131\u0003\u0002\u0002\u0002\u013e\u0134\u0003\u0002\u0002\u0002\u013e",
    "\u0139\u0003\u0002\u0002\u0002\u013f%\u0003\u0002\u0002\u0002\u0140",
    "\u0141\u0007r\u0002\u0002\u0141\u0142\t\u0006\u0002\u0002\u0142\u0143",
    "\u0005\u000e\b\u0002\u0143\u0144\u0007Q\u0002\u0002\u0144\u0145\u0005",
    "\u000e\b\u0002\u0145\'\u0003\u0002\u0002\u0002\u0146\u0147\u0007I\u0002",
    "\u0002\u0147\u0149\u0005\u000e\b\u0002\u0148\u014a\u0007J\u0002\u0002",
    "\u0149\u0148\u0003\u0002\u0002\u0002\u0149\u014a\u0003\u0002\u0002\u0002",
    "\u014a\u014b\u0003\u0002\u0002\u0002\u014b\u014c\u0005\u0006\u0004\u0002",
    "\u014c\u0189\u0003\u0002\u0002\u0002\u014d\u014e\t\u0007\u0002\u0002",
    "\u014e\u014f\u0005\u0006\u0004\u0002\u014f\u0150\u0007H\u0002\u0002",
    "\u0150\u0151\u0005\u000e\b\u0002\u0151\u0189\u0003\u0002\u0002\u0002",
    "\u0152\u0154\u0007I\u0002\u0002\u0153\u0152\u0003\u0002\u0002\u0002",
    "\u0153\u0154\u0003\u0002\u0002\u0002\u0154\u0155\u0003\u0002\u0002\u0002",
    "\u0155\u0156\u0007H\u0002\u0002\u0156\u0158\u0005\u000e\b\u0002\u0157",
    "\u0159\t\u0007\u0002\u0002\u0158\u0157\u0003\u0002\u0002\u0002\u0158",
    "\u0159\u0003\u0002\u0002\u0002\u0159\u015a\u0003\u0002\u0002\u0002\u015a",
    "\u015b\u0005\u0006\u0004\u0002\u015b\u0189\u0003\u0002\u0002\u0002\u015c",
    "\u015d\u0007L\u0002\u0002\u015d\u015f\u0005&\u0014\u0002\u015e\u0160",
    "\t\u0007\u0002\u0002\u015f\u015e\u0003\u0002\u0002\u0002\u015f\u0160",
    "\u0003\u0002\u0002\u0002\u0160\u0161\u0003\u0002\u0002\u0002\u0161\u0162",
    "\u0005\u0006\u0004\u0002\u0162\u0189\u0003\u0002\u0002\u0002\u0163\u0164",
    "\u0007L\u0002\u0002\u0164\u0165\u0007\u0007\u0002\u0002\u0165\u0166",
    "\u0005&\u0014\u0002\u0166\u0168\u0007\b\u0002\u0002\u0167\u0169\t\u0007",
    "\u0002\u0002\u0168\u0167\u0003\u0002\u0002\u0002\u0168\u0169\u0003\u0002",
    "\u0002\u0002\u0169\u016a\u0003\u0002\u0002\u0002\u016a\u016b\u0005\u0006",
    "\u0004\u0002\u016b\u0189\u0003\u0002\u0002\u0002\u016c\u016e\u0007L",
    "\u0002\u0002\u016d\u016f\u0007M\u0002\u0002\u016e\u016d\u0003\u0002",
    "\u0002\u0002\u016e\u016f\u0003\u0002\u0002\u0002\u016f\u0172\u0003\u0002",
    "\u0002\u0002\u0170\u0172\u0007N\u0002\u0002\u0171\u016c\u0003\u0002",
    "\u0002\u0002\u0171\u0170\u0003\u0002\u0002\u0002\u0172\u0173\u0003\u0002",
    "\u0002\u0002\u0173\u0175\u0005$\u0013\u0002\u0174\u0176\t\u0007\u0002",
    "\u0002\u0175\u0174\u0003\u0002\u0002\u0002\u0175\u0176\u0003\u0002\u0002",
    "\u0002\u0176\u0177\u0003\u0002\u0002\u0002\u0177\u0178\u0005\u0006\u0004",
    "\u0002\u0178\u0189\u0003\u0002\u0002\u0002\u0179\u017b\u0007L\u0002",
    "\u0002\u017a\u017c\u0007M\u0002\u0002\u017b\u017a\u0003\u0002\u0002",
    "\u0002\u017b\u017c\u0003\u0002\u0002\u0002\u017c\u017f\u0003\u0002\u0002",
    "\u0002\u017d\u017f\u0007N\u0002\u0002\u017e\u0179\u0003\u0002\u0002",
    "\u0002\u017e\u017d\u0003\u0002\u0002\u0002\u017f\u0180\u0003\u0002\u0002",
    "\u0002\u0180\u0181\u0007\u0007\u0002\u0002\u0181\u0182\u0005$\u0013",
    "\u0002\u0182\u0184\u0007\b\u0002\u0002\u0183\u0185\t\u0007\u0002\u0002",
    "\u0184\u0183\u0003\u0002\u0002\u0002\u0184\u0185\u0003\u0002\u0002\u0002",
    "\u0185\u0186\u0003\u0002\u0002\u0002\u0186\u0187\u0005\u0006\u0004\u0002",
    "\u0187\u0189\u0003\u0002\u0002\u0002\u0188\u0146\u0003\u0002\u0002\u0002",
    "\u0188\u014d\u0003\u0002\u0002\u0002\u0188\u0153\u0003\u0002\u0002\u0002",
    "\u0188\u015c\u0003\u0002\u0002\u0002\u0188\u0163\u0003\u0002\u0002\u0002",
    "\u0188\u0171\u0003\u0002\u0002\u0002\u0188\u017e\u0003\u0002\u0002\u0002",
    "\u0189)\u0003\u0002\u0002\u0002\u018a\u018b\u0007V\u0002\u0002\u018b",
    "\u018c\u0005\u000e\b\u0002\u018c+\u0003\u0002\u0002\u0002\u018d\u018e",
    "\u0007W\u0002\u0002\u018e\u018f\u0007r\u0002\u0002\u018f\u0191\u0007",
    "\u0007\u0002\u0002\u0190\u0192\u0005.\u0018\u0002\u0191\u0190\u0003",
    "\u0002\u0002\u0002\u0191\u0192\u0003\u0002\u0002\u0002\u0192\u0193\u0003",
    "\u0002\u0002\u0002\u0193\u0194\u0007\b\u0002\u0002\u0194\u0195\u0005",
    "B\"\u0002\u0195-\u0003\u0002\u0002\u0002\u0196\u019b\u0005@!\u0002\u0197",
    "\u0198\u0007\f\u0002\u0002\u0198\u019a\u0005@!\u0002\u0199\u0197\u0003",
    "\u0002\u0002\u0002\u019a\u019d\u0003\u0002\u0002\u0002\u019b\u0199\u0003",
    "\u0002\u0002\u0002\u019b\u019c\u0003\u0002\u0002\u0002\u019c/\u0003",
    "\u0002\u0002\u0002\u019d\u019b\u0003\u0002\u0002\u0002\u019e\u01a7\u0007",
    "\u0007\u0002\u0002\u019f\u01a4\u0005\u000e\b\u0002\u01a0\u01a1\u0007",
    "\f\u0002\u0002\u01a1\u01a3\u0005\u000e\b\u0002\u01a2\u01a0\u0003\u0002",
    "\u0002\u0002\u01a3\u01a6\u0003\u0002\u0002\u0002\u01a4\u01a2\u0003\u0002",
    "\u0002\u0002\u01a4\u01a5\u0003\u0002\u0002\u0002\u01a5\u01a8\u0003\u0002",
    "\u0002\u0002\u01a6\u01a4\u0003\u0002\u0002\u0002\u01a7\u019f\u0003\u0002",
    "\u0002\u0002\u01a7\u01a8\u0003\u0002\u0002\u0002\u01a8\u01a9\u0003\u0002",
    "\u0002\u0002\u01a9\u01aa\u0007\b\u0002\u0002\u01aa1\u0003\u0002\u0002",
    "\u0002\u01ab\u01ac\u0007h\u0002\u0002\u01ac\u01af\u0007r\u0002\u0002",
    "\u01ad\u01ae\u0007i\u0002\u0002\u01ae\u01b0\u0007r\u0002\u0002\u01af",
    "\u01ad\u0003\u0002\u0002\u0002\u01af\u01b0\u0003\u0002\u0002\u0002\u01b0",
    "\u01b1\u0003\u0002\u0002\u0002\u01b1\u01b5\u0007\t\u0002\u0002\u01b2",
    "\u01b3\u0007j\u0002\u0002\u01b3\u01b4\u0007\u000f\u0002\u0002\u01b4",
    "\u01b6\u00054\u001b\u0002\u01b5\u01b2\u0003\u0002\u0002\u0002\u01b5",
    "\u01b6\u0003\u0002\u0002\u0002\u01b6\u01ba\u0003\u0002\u0002\u0002\u01b7",
    "\u01b8\u0007k\u0002\u0002\u01b8\u01b9\u0007\u000f\u0002\u0002\u01b9",
    "\u01bb\u00058\u001d\u0002\u01ba\u01b7\u0003\u0002\u0002\u0002\u01ba",
    "\u01bb\u0003\u0002\u0002\u0002\u01bb\u01bc\u0003\u0002\u0002\u0002\u01bc",
    "\u01bd\u0007\n\u0002\u0002\u01bd3\u0003\u0002\u0002\u0002\u01be\u01c0",
    "\u0007r\u0002\u0002\u01bf\u01c1\u0007\f\u0002\u0002\u01c0\u01bf\u0003",
    "\u0002\u0002\u0002\u01c0\u01c1\u0003\u0002\u0002\u0002\u01c1\u01c3\u0003",
    "\u0002\u0002\u0002\u01c2\u01be\u0003\u0002\u0002\u0002\u01c3\u01c4\u0003",
    "\u0002\u0002\u0002\u01c4\u01c2\u0003\u0002\u0002\u0002\u01c4\u01c5\u0003",
    "\u0002\u0002\u0002\u01c55\u0003\u0002\u0002\u0002\u01c6\u01c8\u0007",
    "W\u0002\u0002\u01c7\u01c6\u0003\u0002\u0002\u0002\u01c7\u01c8\u0003",
    "\u0002\u0002\u0002\u01c8\u01c9\u0003\u0002\u0002\u0002\u01c9\u01ca\u0007",
    "r\u0002\u0002\u01ca\u01cc\u0007\u0007\u0002\u0002\u01cb\u01cd\u0005",
    ".\u0018\u0002\u01cc\u01cb\u0003\u0002\u0002\u0002\u01cc\u01cd\u0003",
    "\u0002\u0002\u0002\u01cd\u01ce\u0003\u0002\u0002\u0002\u01ce\u01cf\u0007",
    "\b\u0002\u0002\u01cf\u01d0\u0005B\"\u0002\u01d07\u0003\u0002\u0002\u0002",
    "\u01d1\u01d3\u00056\u001c\u0002\u01d2\u01d1\u0003\u0002\u0002\u0002",
    "\u01d3\u01d4\u0003\u0002\u0002\u0002\u01d4\u01d2\u0003\u0002\u0002\u0002",
    "\u01d4\u01d5\u0003\u0002\u0002\u0002\u01d59\u0003\u0002\u0002\u0002",
    "\u01d6\u01d7\u0007g\u0002\u0002\u01d7\u01d8\u0007r\u0002\u0002\u01d8",
    "\u01d9\u00050\u0019\u0002\u01d9;\u0003\u0002\u0002\u0002\u01da\u01dc",
    "\u0007\u0005\u0002\u0002\u01db\u01dd\u0005\u000e\b\u0002\u01dc\u01db",
    "\u0003\u0002\u0002\u0002\u01dc\u01dd\u0003\u0002\u0002\u0002\u01dd\u01de",
    "\u0003\u0002\u0002\u0002\u01de\u01df\u0007\u0006\u0002\u0002\u01df=",
    "\u0003\u0002\u0002\u0002\u01e0\u01e2\u0005<\u001f\u0002\u01e1\u01e0",
    "\u0003\u0002\u0002\u0002\u01e2\u01e3\u0003\u0002\u0002\u0002\u01e3\u01e1",
    "\u0003\u0002\u0002\u0002\u01e3\u01e4\u0003\u0002\u0002\u0002\u01e4?",
    "\u0003\u0002\u0002\u0002\u01e5\u01e8\u0007r\u0002\u0002\u01e6\u01e7",
    "\u0007\r\u0002\u0002\u01e7\u01e9\u0005\u000e\b\u0002\u01e8\u01e6\u0003",
    "\u0002\u0002\u0002\u01e8\u01e9\u0003\u0002\u0002\u0002\u01e9A\u0003",
    "\u0002\u0002\u0002\u01ea\u01ed\u0005\b\u0005\u0002\u01eb\u01ed\u0005",
    "\u0006\u0004\u0002\u01ec\u01ea\u0003\u0002\u0002\u0002\u01ec\u01eb\u0003",
    "\u0002\u0002\u0002\u01edC\u0003\u0002\u0002\u0002\u01ee\u01ef\t\b\u0002",
    "\u0002\u01efE\u0003\u0002\u0002\u0002\u01f0\u01f4\u0005\\/\u0002\u01f1",
    "\u01f4\u0007;\u0002\u0002\u01f2\u01f4\u0007E\u0002\u0002\u01f3\u01f0",
    "\u0003\u0002\u0002\u0002\u01f3\u01f1\u0003\u0002\u0002\u0002\u01f3\u01f2",
    "\u0003\u0002\u0002\u0002\u01f4G\u0003\u0002\u0002\u0002\u01f5\u01f6",
    "\u0007X\u0002\u0002\u01f6\u01f8\u0005> \u0002\u01f7\u01f9\u00050\u0019",
    "\u0002\u01f8\u01f7\u0003\u0002\u0002\u0002\u01f8\u01f9\u0003\u0002\u0002",
    "\u0002\u01f9I\u0003\u0002\u0002\u0002\u01fa\u01fb\u0007n\u0002\u0002",
    "\u01fb\u01fc\u00050\u0019\u0002\u01fcK\u0003\u0002\u0002\u0002\u01fd",
    "\u0206\u0007\u0005\u0002\u0002\u01fe\u0203\u0005\u000e\b\u0002\u01ff",
    "\u0200\u0007\f\u0002\u0002\u0200\u0202\u0005\u000e\b\u0002\u0201\u01ff",
    "\u0003\u0002\u0002\u0002\u0202\u0205\u0003\u0002\u0002\u0002\u0203\u0201",
    "\u0003\u0002\u0002\u0002\u0203\u0204\u0003\u0002\u0002\u0002\u0204\u0207",
    "\u0003\u0002\u0002\u0002\u0205\u0203\u0003\u0002\u0002\u0002\u0206\u01fe",
    "\u0003\u0002\u0002\u0002\u0206\u0207\u0003\u0002\u0002\u0002\u0207\u0208",
    "\u0003\u0002\u0002\u0002\u0208\u0209\u0007\u0006\u0002\u0002\u0209M",
    "\u0003\u0002\u0002\u0002\u020a\u0218\u0007\t\u0002\u0002\u020b\u020c",
    "\u0005Z.\u0002\u020c\u020d\u0007\u000f\u0002\u0002\u020d\u0215\u0005",
    "\u000e\b\u0002\u020e\u020f\u0007\f\u0002\u0002\u020f\u0210\u0005Z.\u0002",
    "\u0210\u0211\u0007\u000f\u0002\u0002\u0211\u0212\u0005\u000e\b\u0002",
    "\u0212\u0214\u0003\u0002\u0002\u0002\u0213\u020e\u0003\u0002\u0002\u0002",
    "\u0214\u0217\u0003\u0002\u0002\u0002\u0215\u0213\u0003\u0002\u0002\u0002",
    "\u0215\u0216\u0003\u0002\u0002\u0002\u0216\u0219\u0003\u0002\u0002\u0002",
    "\u0217\u0215\u0003\u0002\u0002\u0002\u0218\u020b\u0003\u0002\u0002\u0002",
    "\u0218\u0219\u0003\u0002\u0002\u0002\u0219\u021a\u0003\u0002\u0002\u0002",
    "\u021a\u021b\u0007\n\u0002\u0002\u021bO\u0003\u0002\u0002\u0002\u021c",
    "\u0225\u0005V,\u0002\u021d\u0225\u0005R*\u0002\u021e\u0225\u0005T+\u0002",
    "\u021f\u0225\u0005X-\u0002\u0220\u0225\u0005L\'\u0002\u0221\u0225\u0005",
    "N(\u0002\u0222\u0225\u0005H%\u0002\u0223\u0225\u0005J&\u0002\u0224\u021c",
    "\u0003\u0002\u0002\u0002\u0224\u021d\u0003\u0002\u0002\u0002\u0224\u021e",
    "\u0003\u0002\u0002\u0002\u0224\u021f\u0003\u0002\u0002\u0002\u0224\u0220",
    "\u0003\u0002\u0002\u0002\u0224\u0221\u0003\u0002\u0002\u0002\u0224\u0222",
    "\u0003\u0002\u0002\u0002\u0224\u0223\u0003\u0002\u0002\u0002\u0225Q",
    "\u0003\u0002\u0002\u0002\u0226\u0227\u0007E\u0002\u0002\u0227S\u0003",
    "\u0002\u0002\u0002\u0228\u0229\u0007s\u0002\u0002\u0229U\u0003\u0002",
    "\u0002\u0002\u022a\u022b\u0007;\u0002\u0002\u022bW\u0003\u0002\u0002",
    "\u0002\u022c\u022d\t\t\u0002\u0002\u022dY\u0003\u0002\u0002\u0002\u022e",
    "\u0231\u0007r\u0002\u0002\u022f\u0231\u0005F$\u0002\u0230\u022e\u0003",
    "\u0002\u0002\u0002\u0230\u022f\u0003\u0002\u0002\u0002\u0231[\u0003",
    "\u0002\u0002\u0002\u0232\u023d\u0003\u0002\u0002\u0002\u0233\u023d\u0007",
    "U\u0002\u0002\u0234\u023d\u0007S\u0002\u0002\u0235\u023d\u0007V\u0002",
    "\u0002\u0236\u023d\u0007H\u0002\u0002\u0237\u023d\u0007W\u0002\u0002",
    "\u0238\u023d\u0007R\u0002\u0002\u0239\u023d\u0007X\u0002\u0002\u023a",
    "\u023d\u0007n\u0002\u0002\u023b\u023d\u0007q\u0002\u0002\u023c\u0232",
    "\u0003\u0002\u0002\u0002\u023c\u0233\u0003\u0002\u0002\u0002\u023c\u0234",
    "\u0003\u0002\u0002\u0002\u023c\u0235\u0003\u0002\u0002\u0002\u023c\u0236",
    "\u0003\u0002\u0002\u0002\u023c\u0237\u0003\u0002\u0002\u0002\u023c\u0238",
    "\u0003\u0002\u0002\u0002\u023c\u0239\u0003\u0002\u0002\u0002\u023c\u023a",
    "\u0003\u0002\u0002\u0002\u023c\u023b\u0003\u0002\u0002\u0002\u023d]",
    "\u0003\u0002\u0002\u00028dos\u0095\u009d\u00f1\u00f3\u0100\u0104\u010c",
    "\u0113\u0119\u011d\u0120\u0125\u012a\u013e\u0149\u0153\u0158\u015f\u0168",
    "\u016e\u0171\u0175\u017b\u017e\u0184\u0188\u0191\u019b\u01a4\u01a7\u01af",
    "\u01b5\u01ba\u01c0\u01c4\u01c7\u01cc\u01d4\u01dc\u01e3\u01e8\u01ec\u01f3",
    "\u01f8\u0203\u0206\u0215\u0218\u0224\u0230\u023c"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class SintesisParser extends antlr4.Parser {

    static grammarFileName = "SintesisParser.g4";
    static literalNames = [ null, null, null, "'['", "']'", "'('", "')'", 
                            "'{'", "'}'", "';'", "','", null, "'?'", "':'", 
                            "'-...-'", "'.'", "'++'", "'--'", "'+'", "'-'", 
                            "'~'", "'!'", "'*'", "'/'", "'%'", "'**'", "'??'", 
                            "'#'", "'>>'", "'<<'", "'>>>'", "'<'", "'>'", 
                            "'<='", "'>='", "'=='", null, "'==='", "'!=='", 
                            "'&'", "'^'", "'|'", "'&&'", "'||'", "'*='", 
                            "'/='", "'%='", "'+='", "'-='", "'<<='", "'>>='", 
                            "'>>>='", "'&='", "'^='", "'|='", "'**='", null, 
                            "'null'", null, null, null, null, null, null, 
                            null, null, null, null, null, null, null, null, 
                            null, null, null, null, null, null, null, null, 
                            null, null, null, null, null, null, null, null, 
                            null, null, "'sub'", null, null, null, null, 
                            null, null, "'chr'", "'ord'", null, null, null, 
                            null, null, null, null, null, null, null, null, 
                            null, "'var'" ];
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
                             "Repeat", "Times", "Do", "For", "Each", "ForEach", 
                             "In", "Of", "To", "If", "Then", "ElseIf", "Else", 
                             "Return", "Function_", "Vector", "Delete", 
                             "NumberOf", "IndexOf", "Sub", "Lower", "Upper", 
                             "Math", "Min", "Max", "Random", "Chr", "Ord", 
                             "Prompt", "Convert", "New_", "Class_", "Extends", 
                             "Attributes", "Methods", "Super", "InstanceOf", 
                             "Map", "Get", "Set", "Var_", "Identifier", 
                             "StringLiteral", "WhiteSpaces", "LineTerminator" ];
    static ruleNames = [ "program", "statementList", "statement", "block", 
                         "stepStatement", "printStatement", "expression", 
                         "basicFunction0", "basicFunction1", "basicFunction2", 
                         "basicFunction3", "basicFunction", "expressionSequence", 
                         "ifStatement", "elseIfs", "elseIf", "elseStatement", 
                         "iteratorIndexes", "iteratorRange", "iterationStatement", 
                         "returnStatement", "functionDeclaration", "formalParameterList", 
                         "arguments", "classDeclaration", "identifiers", 
                         "methodDeclaration", "methodsList", "classExp", 
                         "vectorIndex", "vectorIndexes", "formalParameterArg", 
                         "functionBody", "assignmentOperator", "reservedWord", 
                         "vectorDeclaration", "mapDeclaration", "vectorLiteral", 
                         "objectLiteral", "literal", "booleanLiteral", "stringLiteral", 
                         "nullLiteral", "numericLiteral", "identifierName", 
                         "keyword" ];

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
    			return this.precpred(this._ctx, 26);
    		case 1:
    			return this.precpred(this._ctx, 25);
    		case 2:
    			return this.precpred(this._ctx, 24);
    		case 3:
    			return this.precpred(this._ctx, 23);
    		case 4:
    			return this.precpred(this._ctx, 22);
    		case 5:
    			return this.precpred(this._ctx, 21);
    		case 6:
    			return this.precpred(this._ctx, 20);
    		case 7:
    			return this.precpred(this._ctx, 19);
    		case 8:
    			return this.precpred(this._ctx, 18);
    		case 9:
    			return this.precpred(this._ctx, 17);
    		case 10:
    			return this.precpred(this._ctx, 16);
    		case 11:
    			return this.precpred(this._ctx, 15);
    		case 12:
    			return this.precpred(this._ctx, 14);
    		case 13:
    			return this.precpred(this._ctx, 13);
    		case 14:
    			return this.precpred(this._ctx, 12);
    		case 15:
    			return this.precpred(this._ctx, 11);
    		case 16:
    			return this.precpred(this._ctx, 10);
    		case 17:
    			return this.precpred(this._ctx, 9);
    		case 18:
    			return this.precpred(this._ctx, 8);
    		case 19:
    			return this.precpred(this._ctx, 7);
    		case 20:
    			return this.precpred(this._ctx, 6);
    		case 21:
    			return this.precpred(this._ctx, 5);
    		case 22:
    			return this.precpred(this._ctx, 35);
    		case 23:
    			return this.precpred(this._ctx, 34);
    		case 24:
    			return this.precpred(this._ctx, 33);
    		case 25:
    			return this.precpred(this._ctx, 32);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	program() {
	    let localctx = new ProgramContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, SintesisParser.RULE_program);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 92;
	        this.statementList();
	        this.state = 93;
	        this.match(SintesisParser.EOF);
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
	        this.state = 96; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 95;
	            this.statement();
	            this.state = 98; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << SintesisParser.SingleLineComment) | (1 << SintesisParser.OpenBracket) | (1 << SintesisParser.OpenParen) | (1 << SintesisParser.OpenBrace) | (1 << SintesisParser.PlusPlus) | (1 << SintesisParser.MinusMinus) | (1 << SintesisParser.Plus) | (1 << SintesisParser.Minus) | (1 << SintesisParser.BitNot) | (1 << SintesisParser.Not))) !== 0) || ((((_la - 57)) & ~0x1f) == 0 && ((1 << (_la - 57)) & ((1 << (SintesisParser.NullLiteral - 57)) | (1 << (SintesisParser.DecimalLiteral - 57)) | (1 << (SintesisParser.HexIntegerLiteral - 57)) | (1 << (SintesisParser.OctalIntegerLiteral - 57)) | (1 << (SintesisParser.OctalIntegerLiteral2 - 57)) | (1 << (SintesisParser.BinaryIntegerLiteral - 57)) | (1 << (SintesisParser.BooleanLiteral - 57)) | (1 << (SintesisParser.Step - 57)) | (1 << (SintesisParser.Print - 57)) | (1 << (SintesisParser.While - 57)) | (1 << (SintesisParser.Repeat - 57)) | (1 << (SintesisParser.Do - 57)) | (1 << (SintesisParser.For - 57)) | (1 << (SintesisParser.ForEach - 57)) | (1 << (SintesisParser.If - 57)) | (1 << (SintesisParser.Return - 57)) | (1 << (SintesisParser.Function_ - 57)) | (1 << (SintesisParser.Vector - 57)) | (1 << (SintesisParser.NumberOf - 57)))) !== 0) || ((((_la - 89)) & ~0x1f) == 0 && ((1 << (_la - 89)) & ((1 << (SintesisParser.IndexOf - 89)) | (1 << (SintesisParser.Sub - 89)) | (1 << (SintesisParser.Lower - 89)) | (1 << (SintesisParser.Upper - 89)) | (1 << (SintesisParser.Math - 89)) | (1 << (SintesisParser.Min - 89)) | (1 << (SintesisParser.Max - 89)) | (1 << (SintesisParser.Random - 89)) | (1 << (SintesisParser.Chr - 89)) | (1 << (SintesisParser.Ord - 89)) | (1 << (SintesisParser.Prompt - 89)) | (1 << (SintesisParser.Convert - 89)) | (1 << (SintesisParser.Class_ - 89)) | (1 << (SintesisParser.Attributes - 89)) | (1 << (SintesisParser.Methods - 89)) | (1 << (SintesisParser.Map - 89)) | (1 << (SintesisParser.Var_ - 89)) | (1 << (SintesisParser.Identifier - 89)) | (1 << (SintesisParser.StringLiteral - 89)))) !== 0));
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
	        this.state = 109;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 100;
	            this.block();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 101;
	            this.stepStatement();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 102;
	            this.printStatement();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 103;
	            this.ifStatement();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 104;
	            this.iterationStatement();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 105;
	            this.returnStatement();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 106;
	            this.classDeclaration();
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 107;
	            this.functionDeclaration();
	            break;

	        case 9:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 108;
	            this.expression(0);
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



	block() {
	    let localctx = new BlockContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, SintesisParser.RULE_block);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 111;
	        this.match(SintesisParser.OpenBrace);
	        this.state = 113;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << SintesisParser.SingleLineComment) | (1 << SintesisParser.OpenBracket) | (1 << SintesisParser.OpenParen) | (1 << SintesisParser.OpenBrace) | (1 << SintesisParser.PlusPlus) | (1 << SintesisParser.MinusMinus) | (1 << SintesisParser.Plus) | (1 << SintesisParser.Minus) | (1 << SintesisParser.BitNot) | (1 << SintesisParser.Not))) !== 0) || ((((_la - 57)) & ~0x1f) == 0 && ((1 << (_la - 57)) & ((1 << (SintesisParser.NullLiteral - 57)) | (1 << (SintesisParser.DecimalLiteral - 57)) | (1 << (SintesisParser.HexIntegerLiteral - 57)) | (1 << (SintesisParser.OctalIntegerLiteral - 57)) | (1 << (SintesisParser.OctalIntegerLiteral2 - 57)) | (1 << (SintesisParser.BinaryIntegerLiteral - 57)) | (1 << (SintesisParser.BooleanLiteral - 57)) | (1 << (SintesisParser.Step - 57)) | (1 << (SintesisParser.Print - 57)) | (1 << (SintesisParser.While - 57)) | (1 << (SintesisParser.Repeat - 57)) | (1 << (SintesisParser.Do - 57)) | (1 << (SintesisParser.For - 57)) | (1 << (SintesisParser.ForEach - 57)) | (1 << (SintesisParser.If - 57)) | (1 << (SintesisParser.Return - 57)) | (1 << (SintesisParser.Function_ - 57)) | (1 << (SintesisParser.Vector - 57)) | (1 << (SintesisParser.NumberOf - 57)))) !== 0) || ((((_la - 89)) & ~0x1f) == 0 && ((1 << (_la - 89)) & ((1 << (SintesisParser.IndexOf - 89)) | (1 << (SintesisParser.Sub - 89)) | (1 << (SintesisParser.Lower - 89)) | (1 << (SintesisParser.Upper - 89)) | (1 << (SintesisParser.Math - 89)) | (1 << (SintesisParser.Min - 89)) | (1 << (SintesisParser.Max - 89)) | (1 << (SintesisParser.Random - 89)) | (1 << (SintesisParser.Chr - 89)) | (1 << (SintesisParser.Ord - 89)) | (1 << (SintesisParser.Prompt - 89)) | (1 << (SintesisParser.Convert - 89)) | (1 << (SintesisParser.Class_ - 89)) | (1 << (SintesisParser.Attributes - 89)) | (1 << (SintesisParser.Methods - 89)) | (1 << (SintesisParser.Map - 89)) | (1 << (SintesisParser.Var_ - 89)) | (1 << (SintesisParser.Identifier - 89)) | (1 << (SintesisParser.StringLiteral - 89)))) !== 0)) {
	            this.state = 112;
	            localctx.stmt = this.statementList();
	        }

	        this.state = 115;
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
	        this.state = 117;
	        this.match(SintesisParser.Step);
	        this.state = 118;
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
	        this.state = 120;
	        this.match(SintesisParser.Print);
	        this.state = 121;
	        localctx.exp = this.expressionSequence();
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
	        this.state = 155;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case SintesisParser.NumberOf:
	        case SintesisParser.IndexOf:
	        case SintesisParser.Sub:
	        case SintesisParser.Lower:
	        case SintesisParser.Upper:
	        case SintesisParser.Min:
	        case SintesisParser.Max:
	        case SintesisParser.Random:
	        case SintesisParser.Chr:
	        case SintesisParser.Ord:
	        case SintesisParser.Prompt:
	        case SintesisParser.Convert:
	            localctx = new ExpBasicFunctionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 124;
	            localctx.fn = this.basicFunction();
	            this.state = 125;
	            localctx.args = this.arguments();
	            break;
	        case SintesisParser.Math:
	            localctx = new ExpMathContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 127;
	            this.match(SintesisParser.Math);
	            this.state = 128;
	            this.match(SintesisParser.Dot);
	            this.state = 129;
	            localctx.fn = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!(((((_la - 94)) & ~0x1f) == 0 && ((1 << (_la - 94)) & ((1 << (SintesisParser.Min - 94)) | (1 << (SintesisParser.Max - 94)) | (1 << (SintesisParser.Random - 94)) | (1 << (SintesisParser.Identifier - 94)))) !== 0))) {
	                localctx.fn = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 130;
	            localctx.args = this.arguments();
	            break;
	        case SintesisParser.PlusPlus:
	        case SintesisParser.MinusMinus:
	            localctx = new ExpPreIncrementContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 131;
	            localctx.op = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!(_la===SintesisParser.PlusPlus || _la===SintesisParser.MinusMinus)) {
	                localctx.op = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 132;
	            localctx.dest = this.expression(31);
	            break;
	        case SintesisParser.Plus:
	            localctx = new ExpUnaryPlusContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 133;
	            this.match(SintesisParser.Plus);
	            this.state = 134;
	            localctx.exp = this.expression(30);
	            break;
	        case SintesisParser.Minus:
	            localctx = new ExpUnaryMinusContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 135;
	            this.match(SintesisParser.Minus);
	            this.state = 136;
	            localctx.exp = this.expression(29);
	            break;
	        case SintesisParser.BitNot:
	            localctx = new ExpBitNotContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 137;
	            this.match(SintesisParser.BitNot);
	            this.state = 138;
	            localctx.exp = this.expression(28);
	            break;
	        case SintesisParser.Not:
	            localctx = new ExpNotContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 139;
	            this.match(SintesisParser.Not);
	            this.state = 140;
	            localctx.exp = this.expression(27);
	            break;
	        case SintesisParser.OpenBracket:
	        case SintesisParser.OpenBrace:
	        case SintesisParser.NullLiteral:
	        case SintesisParser.DecimalLiteral:
	        case SintesisParser.HexIntegerLiteral:
	        case SintesisParser.OctalIntegerLiteral:
	        case SintesisParser.OctalIntegerLiteral2:
	        case SintesisParser.BinaryIntegerLiteral:
	        case SintesisParser.BooleanLiteral:
	        case SintesisParser.Vector:
	        case SintesisParser.Map:
	        case SintesisParser.StringLiteral:
	            localctx = new ExpLiteralContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 141;
	            this.literal();
	            break;
	        case SintesisParser.Attributes:
	        case SintesisParser.Methods:
	        case SintesisParser.Var_:
	        case SintesisParser.Identifier:
	            localctx = new ExpIdentifierContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 147;
	            this._errHandler.sync(this);
	            switch (this._input.LA(1)) {
	            case SintesisParser.Attributes:
	            	this.state = 142;
	            	localctx.atr = this.match(SintesisParser.Attributes);
	            	this.state = 143;
	            	this.match(SintesisParser.Dot);
	            	break;
	            case SintesisParser.Methods:
	            	this.state = 144;
	            	localctx.met = this.match(SintesisParser.Methods);
	            	this.state = 145;
	            	this.match(SintesisParser.Dot);
	            	break;
	            case SintesisParser.Var_:
	            	this.state = 146;
	            	localctx.vvar = this.match(SintesisParser.Var_);
	            	break;
	            case SintesisParser.Identifier:
	            	break;
	            default:
	            	break;
	            }
	            this.state = 149;
	            localctx.id = this.match(SintesisParser.Identifier);
	            break;
	        case SintesisParser.OpenParen:
	            localctx = new ExpParenthesisContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 150;
	            this.match(SintesisParser.OpenParen);
	            this.state = 151;
	            localctx.exp = this.expression(0);
	            this.state = 152;
	            this.match(SintesisParser.CloseParen);
	            break;
	        case SintesisParser.SingleLineComment:
	            localctx = new ExpCommentContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 154;
	            this.match(SintesisParser.SingleLineComment);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 241;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,6,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 239;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new ExpOpContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    localctx.e1 = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, SintesisParser.RULE_expression);
	                    this.state = 157;
	                    if (!( this.precpred(this._ctx, 26))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 26)");
	                    }
	                    this.state = 158;
	                    localctx.op = this.match(SintesisParser.Plus);
	                    this.state = 159;
	                    localctx.e2 = this.expression(27);
	                    break;

	                case 2:
	                    localctx = new ExpOpContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    localctx.e1 = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, SintesisParser.RULE_expression);
	                    this.state = 160;
	                    if (!( this.precpred(this._ctx, 25))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 25)");
	                    }
	                    this.state = 161;
	                    localctx.op = this.match(SintesisParser.Minus);
	                    this.state = 162;
	                    localctx.e2 = this.expression(26);
	                    break;

	                case 3:
	                    localctx = new ExpOpContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    localctx.e1 = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, SintesisParser.RULE_expression);
	                    this.state = 163;
	                    if (!( this.precpred(this._ctx, 24))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 24)");
	                    }
	                    this.state = 164;
	                    localctx.op = this.match(SintesisParser.Multiply);
	                    this.state = 165;
	                    localctx.e2 = this.expression(25);
	                    break;

	                case 4:
	                    localctx = new ExpOpContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    localctx.e1 = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, SintesisParser.RULE_expression);
	                    this.state = 166;
	                    if (!( this.precpred(this._ctx, 23))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 23)");
	                    }
	                    this.state = 167;
	                    localctx.op = this.match(SintesisParser.Divide);
	                    this.state = 168;
	                    localctx.e2 = this.expression(24);
	                    break;

	                case 5:
	                    localctx = new ExpOpContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    localctx.e1 = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, SintesisParser.RULE_expression);
	                    this.state = 169;
	                    if (!( this.precpred(this._ctx, 22))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 22)");
	                    }
	                    this.state = 170;
	                    localctx.op = this.match(SintesisParser.Power);
	                    this.state = 171;
	                    localctx.e2 = this.expression(22);
	                    break;

	                case 6:
	                    localctx = new ExpOpContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    localctx.e1 = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, SintesisParser.RULE_expression);
	                    this.state = 172;
	                    if (!( this.precpred(this._ctx, 21))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 21)");
	                    }
	                    this.state = 173;
	                    localctx.op = this.match(SintesisParser.Modulus);
	                    this.state = 174;
	                    localctx.e2 = this.expression(22);
	                    break;

	                case 7:
	                    localctx = new ExpOpContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    localctx.e1 = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, SintesisParser.RULE_expression);
	                    this.state = 175;
	                    if (!( this.precpred(this._ctx, 20))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 20)");
	                    }
	                    this.state = 176;
	                    localctx.op = this.match(SintesisParser.LessThan);
	                    this.state = 177;
	                    localctx.e2 = this.expression(21);
	                    break;

	                case 8:
	                    localctx = new ExpOpContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    localctx.e1 = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, SintesisParser.RULE_expression);
	                    this.state = 178;
	                    if (!( this.precpred(this._ctx, 19))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 19)");
	                    }
	                    this.state = 179;
	                    localctx.op = this.match(SintesisParser.MoreThan);
	                    this.state = 180;
	                    localctx.e2 = this.expression(20);
	                    break;

	                case 9:
	                    localctx = new ExpOpContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    localctx.e1 = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, SintesisParser.RULE_expression);
	                    this.state = 181;
	                    if (!( this.precpred(this._ctx, 18))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 18)");
	                    }
	                    this.state = 182;
	                    localctx.op = this.match(SintesisParser.LessThanEquals);
	                    this.state = 183;
	                    localctx.e2 = this.expression(19);
	                    break;

	                case 10:
	                    localctx = new ExpOpContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    localctx.e1 = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, SintesisParser.RULE_expression);
	                    this.state = 184;
	                    if (!( this.precpred(this._ctx, 17))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 17)");
	                    }
	                    this.state = 185;
	                    localctx.op = this.match(SintesisParser.GreaterThanEquals);
	                    this.state = 186;
	                    localctx.e2 = this.expression(18);
	                    break;

	                case 11:
	                    localctx = new ExpOpContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    localctx.e1 = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, SintesisParser.RULE_expression);
	                    this.state = 187;
	                    if (!( this.precpred(this._ctx, 16))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 16)");
	                    }
	                    this.state = 188;
	                    localctx.op = this.match(SintesisParser.BitAnd);
	                    this.state = 189;
	                    localctx.e2 = this.expression(17);
	                    break;

	                case 12:
	                    localctx = new ExpOpContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    localctx.e1 = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, SintesisParser.RULE_expression);
	                    this.state = 190;
	                    if (!( this.precpred(this._ctx, 15))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 15)");
	                    }
	                    this.state = 191;
	                    localctx.op = this.match(SintesisParser.BitOr);
	                    this.state = 192;
	                    localctx.e2 = this.expression(16);
	                    break;

	                case 13:
	                    localctx = new ExpOpContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    localctx.e1 = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, SintesisParser.RULE_expression);
	                    this.state = 193;
	                    if (!( this.precpred(this._ctx, 14))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 14)");
	                    }
	                    this.state = 194;
	                    localctx.op = this.match(SintesisParser.BitXOr);
	                    this.state = 195;
	                    localctx.e2 = this.expression(15);
	                    break;

	                case 14:
	                    localctx = new ExpOpContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    localctx.e1 = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, SintesisParser.RULE_expression);
	                    this.state = 196;
	                    if (!( this.precpred(this._ctx, 13))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 13)");
	                    }
	                    this.state = 197;
	                    localctx.op = this.match(SintesisParser.IdentityEquals);
	                    this.state = 198;
	                    localctx.e2 = this.expression(14);
	                    break;

	                case 15:
	                    localctx = new ExpOpContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    localctx.e1 = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, SintesisParser.RULE_expression);
	                    this.state = 199;
	                    if (!( this.precpred(this._ctx, 12))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 12)");
	                    }
	                    this.state = 200;
	                    localctx.op = this.match(SintesisParser.IdentityNotEquals);
	                    this.state = 201;
	                    localctx.e2 = this.expression(13);
	                    break;

	                case 16:
	                    localctx = new ExpOpContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    localctx.e1 = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, SintesisParser.RULE_expression);
	                    this.state = 202;
	                    if (!( this.precpred(this._ctx, 11))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 11)");
	                    }
	                    this.state = 203;
	                    localctx.op = this.match(SintesisParser.Equals_);
	                    this.state = 204;
	                    localctx.e2 = this.expression(12);
	                    break;

	                case 17:
	                    localctx = new ExpOpContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    localctx.e1 = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, SintesisParser.RULE_expression);
	                    this.state = 205;
	                    if (!( this.precpred(this._ctx, 10))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
	                    }
	                    this.state = 206;
	                    localctx.op = this.match(SintesisParser.NotEquals);
	                    this.state = 207;
	                    localctx.e2 = this.expression(11);
	                    break;

	                case 18:
	                    localctx = new ExpOpContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    localctx.e1 = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, SintesisParser.RULE_expression);
	                    this.state = 208;
	                    if (!( this.precpred(this._ctx, 9))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
	                    }
	                    this.state = 209;
	                    localctx.op = this.match(SintesisParser.And);
	                    this.state = 210;
	                    localctx.e2 = this.expression(10);
	                    break;

	                case 19:
	                    localctx = new ExpOpContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    localctx.e1 = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, SintesisParser.RULE_expression);
	                    this.state = 211;
	                    if (!( this.precpred(this._ctx, 8))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
	                    }
	                    this.state = 212;
	                    localctx.op = this.match(SintesisParser.Or);
	                    this.state = 213;
	                    localctx.e2 = this.expression(9);
	                    break;

	                case 20:
	                    localctx = new ExpTernaryContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    localctx.cond = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, SintesisParser.RULE_expression);
	                    this.state = 214;
	                    if (!( this.precpred(this._ctx, 7))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
	                    }
	                    this.state = 215;
	                    this.match(SintesisParser.QuestionMark);
	                    this.state = 216;
	                    localctx.ok = this.expression(0);
	                    this.state = 217;
	                    this.match(SintesisParser.Colon);
	                    this.state = 218;
	                    localctx.no = this.expression(8);
	                    break;

	                case 21:
	                    localctx = new ExpAssignmentContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    localctx.dest = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, SintesisParser.RULE_expression);
	                    this.state = 220;
	                    if (!( this.precpred(this._ctx, 6))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
	                    }
	                    this.state = 221;
	                    this.match(SintesisParser.Assign);
	                    this.state = 222;
	                    localctx.exp = this.expression(6);
	                    break;

	                case 22:
	                    localctx = new ExpAssignmentOperatorContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    localctx.dest = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, SintesisParser.RULE_expression);
	                    this.state = 223;
	                    if (!( this.precpred(this._ctx, 5))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
	                    }
	                    this.state = 224;
	                    localctx.op = this.assignmentOperator();
	                    this.state = 225;
	                    localctx.exp = this.expression(5);
	                    break;

	                case 23:
	                    localctx = new ExpMemberIndexContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    localctx.exp = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, SintesisParser.RULE_expression);
	                    this.state = 227;
	                    if (!( this.precpred(this._ctx, 35))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 35)");
	                    }
	                    this.state = 228;
	                    this.match(SintesisParser.OpenBracket);
	                    this.state = 229;
	                    localctx.idx = this.expression(0);
	                    this.state = 230;
	                    this.match(SintesisParser.CloseBracket);
	                    break;

	                case 24:
	                    localctx = new ExpMemberDotContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    localctx.exp = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, SintesisParser.RULE_expression);
	                    this.state = 232;
	                    if (!( this.precpred(this._ctx, 34))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 34)");
	                    }
	                    this.state = 233;
	                    this.match(SintesisParser.Dot);
	                    this.state = 234;
	                    localctx.idx = this.identifierName();
	                    break;

	                case 25:
	                    localctx = new ExpMemberFuncContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    localctx.exp = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, SintesisParser.RULE_expression);
	                    this.state = 235;
	                    if (!( this.precpred(this._ctx, 33))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 33)");
	                    }
	                    this.state = 236;
	                    localctx.args = this.arguments();
	                    break;

	                case 26:
	                    localctx = new ExpPostIncrementContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    localctx.dest = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, SintesisParser.RULE_expression);
	                    this.state = 237;
	                    if (!( this.precpred(this._ctx, 32))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 32)");
	                    }
	                    this.state = 238;
	                    localctx.op = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===SintesisParser.PlusPlus || _la===SintesisParser.MinusMinus)) {
	                        localctx.op = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    break;

	                } 
	            }
	            this.state = 243;
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



	basicFunction0() {
	    let localctx = new BasicFunction0Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, SintesisParser.RULE_basicFunction0);
	    try {
	        localctx = new RandomContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 244;
	        this.match(SintesisParser.Random);
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



	basicFunction1() {
	    let localctx = new BasicFunction1Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, SintesisParser.RULE_basicFunction1);
	    try {
	        this.state = 254;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case SintesisParser.NumberOf:
	            localctx = new NumberOfContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 246;
	            this.match(SintesisParser.NumberOf);
	            break;
	        case SintesisParser.Lower:
	            localctx = new LowerContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 247;
	            this.match(SintesisParser.Lower);
	            break;
	        case SintesisParser.Upper:
	            localctx = new UpperContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 248;
	            this.match(SintesisParser.Upper);
	            break;
	        case SintesisParser.Max:
	            localctx = new MaxContext(this, localctx);
	            this.enterOuterAlt(localctx, 4);
	            this.state = 249;
	            this.match(SintesisParser.Max);
	            break;
	        case SintesisParser.Min:
	            localctx = new MinContext(this, localctx);
	            this.enterOuterAlt(localctx, 5);
	            this.state = 250;
	            this.match(SintesisParser.Min);
	            break;
	        case SintesisParser.Ord:
	            localctx = new OrdContext(this, localctx);
	            this.enterOuterAlt(localctx, 6);
	            this.state = 251;
	            this.match(SintesisParser.Ord);
	            break;
	        case SintesisParser.Chr:
	            localctx = new ChrContext(this, localctx);
	            this.enterOuterAlt(localctx, 7);
	            this.state = 252;
	            this.match(SintesisParser.Chr);
	            break;
	        case SintesisParser.Prompt:
	            localctx = new PromptContext(this, localctx);
	            this.enterOuterAlt(localctx, 8);
	            this.state = 253;
	            this.match(SintesisParser.Prompt);
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



	basicFunction2() {
	    let localctx = new BasicFunction2Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, SintesisParser.RULE_basicFunction2);
	    try {
	        this.state = 258;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case SintesisParser.IndexOf:
	            localctx = new IndexOfContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 256;
	            this.match(SintesisParser.IndexOf);
	            break;
	        case SintesisParser.Convert:
	            localctx = new ConvertContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 257;
	            this.match(SintesisParser.Convert);
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



	basicFunction3() {
	    let localctx = new BasicFunction3Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, SintesisParser.RULE_basicFunction3);
	    try {
	        localctx = new SubContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 260;
	        this.match(SintesisParser.Sub);
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



	basicFunction() {
	    let localctx = new BasicFunctionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, SintesisParser.RULE_basicFunction);
	    try {
	        this.state = 266;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case SintesisParser.Random:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 262;
	            this.basicFunction0();
	            break;
	        case SintesisParser.NumberOf:
	        case SintesisParser.Lower:
	        case SintesisParser.Upper:
	        case SintesisParser.Min:
	        case SintesisParser.Max:
	        case SintesisParser.Chr:
	        case SintesisParser.Ord:
	        case SintesisParser.Prompt:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 263;
	            this.basicFunction1();
	            break;
	        case SintesisParser.IndexOf:
	        case SintesisParser.Convert:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 264;
	            this.basicFunction2();
	            break;
	        case SintesisParser.Sub:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 265;
	            this.basicFunction3();
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



	expressionSequence() {
	    let localctx = new ExpressionSequenceContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, SintesisParser.RULE_expressionSequence);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 268;
	        this.expression(0);
	        this.state = 273;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===SintesisParser.Comma) {
	            this.state = 269;
	            this.match(SintesisParser.Comma);
	            this.state = 270;
	            this.expression(0);
	            this.state = 275;
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
	    this.enterRule(localctx, 26, SintesisParser.RULE_ifStatement);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 276;
	        this.match(SintesisParser.If);
	        this.state = 277;
	        localctx.exp = this.expression(0);
	        this.state = 279;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===SintesisParser.Then) {
	            this.state = 278;
	            this.match(SintesisParser.Then);
	        }

	        this.state = 281;
	        localctx.stmt = this.statement();
	        this.state = 283;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,12,this._ctx);
	        if(la_===1) {
	            this.state = 282;
	            localctx.elseifs = this.elseIfs();

	        }
	        this.state = 286;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,13,this._ctx);
	        if(la_===1) {
	            this.state = 285;
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
	    this.enterRule(localctx, 28, SintesisParser.RULE_elseIfs);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 289; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 288;
	        		this.elseIf();
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 291; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,14, this._ctx);
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
	    this.enterRule(localctx, 30, SintesisParser.RULE_elseIf);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 293;
	        this.match(SintesisParser.ElseIf);
	        this.state = 294;
	        localctx.exp = this.expression(0);
	        this.state = 296;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===SintesisParser.Then) {
	            this.state = 295;
	            this.match(SintesisParser.Then);
	        }

	        this.state = 298;
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
	    this.enterRule(localctx, 32, SintesisParser.RULE_elseStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 300;
	        this.match(SintesisParser.Else);
	        this.state = 301;
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



	iteratorIndexes() {
	    let localctx = new IteratorIndexesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, SintesisParser.RULE_iteratorIndexes);
	    var _la = 0; // Token type
	    try {
	        this.state = 316;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,16,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new AerContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 303;
	            localctx.idv = this.match(SintesisParser.Identifier);
	            this.state = 304;
	            localctx.op = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!(_la===SintesisParser.In || _la===SintesisParser.Of)) {
	                localctx.op = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 305;
	            localctx.coll = this.expression(0);
	            break;

	        case 2:
	            localctx = new EwfewqContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 306;
	            localctx.idv = this.match(SintesisParser.Identifier);
	            this.state = 307;
	            this.match(SintesisParser.Comma);
	            this.state = 308;
	            localctx.idk = this.match(SintesisParser.Identifier);
	            this.state = 309;
	            localctx.op = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!(_la===SintesisParser.In || _la===SintesisParser.Of)) {
	                localctx.op = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 310;
	            localctx.coll = this.expression(0);
	            break;

	        case 3:
	            localctx = new QxeeqContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 311;
	            localctx.idk = this.match(SintesisParser.Identifier);
	            this.state = 312;
	            this.match(SintesisParser.ARROW);
	            this.state = 313;
	            localctx.idv = this.match(SintesisParser.Identifier);
	            this.state = 314;
	            localctx.op = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!(_la===SintesisParser.In || _la===SintesisParser.Of)) {
	                localctx.op = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 315;
	            localctx.coll = this.expression(0);
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



	iteratorRange() {
	    let localctx = new IteratorRangeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, SintesisParser.RULE_iteratorRange);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 318;
	        localctx.id = this.match(SintesisParser.Identifier);
	        this.state = 319;
	        _la = this._input.LA(1);
	        if(!(_la===SintesisParser.Assign || _la===SintesisParser.In)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 320;
	        localctx.start = this.expression(0);
	        this.state = 321;
	        this.match(SintesisParser.To);
	        this.state = 322;
	        localctx.to = this.expression(0);
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
	    this.enterRule(localctx, 38, SintesisParser.RULE_iterationStatement);
	    var _la = 0; // Token type
	    try {
	        this.state = 390;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,28,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new RepeatStatementContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 324;
	            this.match(SintesisParser.Repeat);
	            this.state = 325;
	            localctx.exp = this.expression(0);
	            this.state = 327;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===SintesisParser.Times) {
	                this.state = 326;
	                this.match(SintesisParser.Times);
	            }

	            this.state = 329;
	            localctx.stmt = this.statement();
	            break;

	        case 2:
	            localctx = new RepeatWhileStatementContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 331;
	            _la = this._input.LA(1);
	            if(!(_la===SintesisParser.Repeat || _la===SintesisParser.Do)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 332;
	            localctx.stmt = this.statement();
	            this.state = 333;
	            this.match(SintesisParser.While);
	            this.state = 334;
	            localctx.exp = this.expression(0);
	            break;

	        case 3:
	            localctx = new WhileRepeatStatementContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 337;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===SintesisParser.Repeat) {
	                this.state = 336;
	                this.match(SintesisParser.Repeat);
	            }

	            this.state = 339;
	            this.match(SintesisParser.While);
	            this.state = 340;
	            localctx.exp = this.expression(0);
	            this.state = 342;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,19,this._ctx);
	            if(la_===1) {
	                this.state = 341;
	                _la = this._input.LA(1);
	                if(!(_la===SintesisParser.Repeat || _la===SintesisParser.Do)) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }

	            }
	            this.state = 344;
	            localctx.stmt = this.statement();
	            break;

	        case 4:
	            localctx = new ForFromToStatementContext(this, localctx);
	            this.enterOuterAlt(localctx, 4);
	            this.state = 346;
	            this.match(SintesisParser.For);
	            this.state = 347;
	            localctx.iter = this.iteratorRange();
	            this.state = 349;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,20,this._ctx);
	            if(la_===1) {
	                this.state = 348;
	                _la = this._input.LA(1);
	                if(!(_la===SintesisParser.Repeat || _la===SintesisParser.Do)) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }

	            }
	            this.state = 351;
	            localctx.stmt = this.statement();
	            break;

	        case 5:
	            localctx = new ForFromToStatement2Context(this, localctx);
	            this.enterOuterAlt(localctx, 5);
	            this.state = 353;
	            this.match(SintesisParser.For);
	            this.state = 354;
	            this.match(SintesisParser.OpenParen);
	            this.state = 355;
	            localctx.iter = this.iteratorRange();
	            this.state = 356;
	            this.match(SintesisParser.CloseParen);
	            this.state = 358;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,21,this._ctx);
	            if(la_===1) {
	                this.state = 357;
	                _la = this._input.LA(1);
	                if(!(_la===SintesisParser.Repeat || _la===SintesisParser.Do)) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }

	            }
	            this.state = 360;
	            localctx.stmt = this.statement();
	            break;

	        case 6:
	            localctx = new ForEachStatementContext(this, localctx);
	            this.enterOuterAlt(localctx, 6);
	            this.state = 367;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case SintesisParser.For:
	                this.state = 362;
	                this.match(SintesisParser.For);
	                this.state = 364;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                if(_la===SintesisParser.Each) {
	                    this.state = 363;
	                    this.match(SintesisParser.Each);
	                }

	                break;
	            case SintesisParser.ForEach:
	                this.state = 366;
	                this.match(SintesisParser.ForEach);
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 369;
	            localctx.iter = this.iteratorIndexes();
	            this.state = 371;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,24,this._ctx);
	            if(la_===1) {
	                this.state = 370;
	                _la = this._input.LA(1);
	                if(!(_la===SintesisParser.Repeat || _la===SintesisParser.Do)) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }

	            }
	            this.state = 373;
	            localctx.stmt = this.statement();
	            break;

	        case 7:
	            localctx = new ForEachStatement2Context(this, localctx);
	            this.enterOuterAlt(localctx, 7);
	            this.state = 380;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case SintesisParser.For:
	                this.state = 375;
	                this.match(SintesisParser.For);
	                this.state = 377;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                if(_la===SintesisParser.Each) {
	                    this.state = 376;
	                    this.match(SintesisParser.Each);
	                }

	                break;
	            case SintesisParser.ForEach:
	                this.state = 379;
	                this.match(SintesisParser.ForEach);
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 382;
	            this.match(SintesisParser.OpenParen);
	            this.state = 383;
	            localctx.iter = this.iteratorIndexes();
	            this.state = 384;
	            this.match(SintesisParser.CloseParen);
	            this.state = 386;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,27,this._ctx);
	            if(la_===1) {
	                this.state = 385;
	                _la = this._input.LA(1);
	                if(!(_la===SintesisParser.Repeat || _la===SintesisParser.Do)) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }

	            }
	            this.state = 388;
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
	    this.enterRule(localctx, 40, SintesisParser.RULE_returnStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 392;
	        this.match(SintesisParser.Return);
	        this.state = 393;
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



	functionDeclaration() {
	    let localctx = new FunctionDeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, SintesisParser.RULE_functionDeclaration);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 395;
	        this.match(SintesisParser.Function_);
	        this.state = 396;
	        localctx.id = this.match(SintesisParser.Identifier);
	        this.state = 397;
	        this.match(SintesisParser.OpenParen);
	        this.state = 399;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===SintesisParser.Identifier) {
	            this.state = 398;
	            localctx.pl = this.formalParameterList();
	        }

	        this.state = 401;
	        this.match(SintesisParser.CloseParen);
	        this.state = 402;
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
	    this.enterRule(localctx, 44, SintesisParser.RULE_formalParameterList);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 404;
	        this.formalParameterArg();
	        this.state = 409;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===SintesisParser.Comma) {
	            this.state = 405;
	            this.match(SintesisParser.Comma);
	            this.state = 406;
	            this.formalParameterArg();
	            this.state = 411;
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
	    this.enterRule(localctx, 46, SintesisParser.RULE_arguments);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 412;
	        this.match(SintesisParser.OpenParen);
	        this.state = 421;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << SintesisParser.SingleLineComment) | (1 << SintesisParser.OpenBracket) | (1 << SintesisParser.OpenParen) | (1 << SintesisParser.OpenBrace) | (1 << SintesisParser.PlusPlus) | (1 << SintesisParser.MinusMinus) | (1 << SintesisParser.Plus) | (1 << SintesisParser.Minus) | (1 << SintesisParser.BitNot) | (1 << SintesisParser.Not))) !== 0) || ((((_la - 57)) & ~0x1f) == 0 && ((1 << (_la - 57)) & ((1 << (SintesisParser.NullLiteral - 57)) | (1 << (SintesisParser.DecimalLiteral - 57)) | (1 << (SintesisParser.HexIntegerLiteral - 57)) | (1 << (SintesisParser.OctalIntegerLiteral - 57)) | (1 << (SintesisParser.OctalIntegerLiteral2 - 57)) | (1 << (SintesisParser.BinaryIntegerLiteral - 57)) | (1 << (SintesisParser.BooleanLiteral - 57)) | (1 << (SintesisParser.Vector - 57)) | (1 << (SintesisParser.NumberOf - 57)))) !== 0) || ((((_la - 89)) & ~0x1f) == 0 && ((1 << (_la - 89)) & ((1 << (SintesisParser.IndexOf - 89)) | (1 << (SintesisParser.Sub - 89)) | (1 << (SintesisParser.Lower - 89)) | (1 << (SintesisParser.Upper - 89)) | (1 << (SintesisParser.Math - 89)) | (1 << (SintesisParser.Min - 89)) | (1 << (SintesisParser.Max - 89)) | (1 << (SintesisParser.Random - 89)) | (1 << (SintesisParser.Chr - 89)) | (1 << (SintesisParser.Ord - 89)) | (1 << (SintesisParser.Prompt - 89)) | (1 << (SintesisParser.Convert - 89)) | (1 << (SintesisParser.Attributes - 89)) | (1 << (SintesisParser.Methods - 89)) | (1 << (SintesisParser.Map - 89)) | (1 << (SintesisParser.Var_ - 89)) | (1 << (SintesisParser.Identifier - 89)) | (1 << (SintesisParser.StringLiteral - 89)))) !== 0)) {
	            this.state = 413;
	            this.expression(0);
	            this.state = 418;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===SintesisParser.Comma) {
	                this.state = 414;
	                this.match(SintesisParser.Comma);
	                this.state = 415;
	                this.expression(0);
	                this.state = 420;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 423;
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
	    this.enterRule(localctx, 48, SintesisParser.RULE_classDeclaration);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 425;
	        this.match(SintesisParser.Class_);
	        this.state = 426;
	        localctx.id = this.match(SintesisParser.Identifier);
	        this.state = 429;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===SintesisParser.Extends) {
	            this.state = 427;
	            this.match(SintesisParser.Extends);
	            this.state = 428;
	            localctx.ext = this.match(SintesisParser.Identifier);
	        }

	        this.state = 431;
	        this.match(SintesisParser.OpenBrace);
	        this.state = 435;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===SintesisParser.Attributes) {
	            this.state = 432;
	            this.match(SintesisParser.Attributes);
	            this.state = 433;
	            this.match(SintesisParser.Colon);
	            this.state = 434;
	            localctx.atrs = this.identifiers();
	        }

	        this.state = 440;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===SintesisParser.Methods) {
	            this.state = 437;
	            this.match(SintesisParser.Methods);
	            this.state = 438;
	            this.match(SintesisParser.Colon);
	            this.state = 439;
	            localctx.methods = this.methodsList();
	        }

	        this.state = 442;
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
	    this.enterRule(localctx, 50, SintesisParser.RULE_identifiers);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 448; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 444;
	            this.match(SintesisParser.Identifier);
	            this.state = 446;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===SintesisParser.Comma) {
	                this.state = 445;
	                this.match(SintesisParser.Comma);
	            }

	            this.state = 450; 
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
	    this.enterRule(localctx, 52, SintesisParser.RULE_methodDeclaration);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 453;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===SintesisParser.Function_) {
	            this.state = 452;
	            this.match(SintesisParser.Function_);
	        }

	        this.state = 455;
	        localctx.id = this.match(SintesisParser.Identifier);
	        this.state = 456;
	        this.match(SintesisParser.OpenParen);
	        this.state = 458;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===SintesisParser.Identifier) {
	            this.state = 457;
	            localctx.pl = this.formalParameterList();
	        }

	        this.state = 460;
	        this.match(SintesisParser.CloseParen);
	        this.state = 461;
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
	    this.enterRule(localctx, 54, SintesisParser.RULE_methodsList);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 464; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 463;
	            this.methodDeclaration();
	            this.state = 466; 
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
	    this.enterRule(localctx, 56, SintesisParser.RULE_classExp);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 468;
	        this.match(SintesisParser.New_);
	        this.state = 469;
	        this.match(SintesisParser.Identifier);
	        this.state = 470;
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
	    this.enterRule(localctx, 58, SintesisParser.RULE_vectorIndex);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 472;
	        this.match(SintesisParser.OpenBracket);
	        this.state = 474;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << SintesisParser.SingleLineComment) | (1 << SintesisParser.OpenBracket) | (1 << SintesisParser.OpenParen) | (1 << SintesisParser.OpenBrace) | (1 << SintesisParser.PlusPlus) | (1 << SintesisParser.MinusMinus) | (1 << SintesisParser.Plus) | (1 << SintesisParser.Minus) | (1 << SintesisParser.BitNot) | (1 << SintesisParser.Not))) !== 0) || ((((_la - 57)) & ~0x1f) == 0 && ((1 << (_la - 57)) & ((1 << (SintesisParser.NullLiteral - 57)) | (1 << (SintesisParser.DecimalLiteral - 57)) | (1 << (SintesisParser.HexIntegerLiteral - 57)) | (1 << (SintesisParser.OctalIntegerLiteral - 57)) | (1 << (SintesisParser.OctalIntegerLiteral2 - 57)) | (1 << (SintesisParser.BinaryIntegerLiteral - 57)) | (1 << (SintesisParser.BooleanLiteral - 57)) | (1 << (SintesisParser.Vector - 57)) | (1 << (SintesisParser.NumberOf - 57)))) !== 0) || ((((_la - 89)) & ~0x1f) == 0 && ((1 << (_la - 89)) & ((1 << (SintesisParser.IndexOf - 89)) | (1 << (SintesisParser.Sub - 89)) | (1 << (SintesisParser.Lower - 89)) | (1 << (SintesisParser.Upper - 89)) | (1 << (SintesisParser.Math - 89)) | (1 << (SintesisParser.Min - 89)) | (1 << (SintesisParser.Max - 89)) | (1 << (SintesisParser.Random - 89)) | (1 << (SintesisParser.Chr - 89)) | (1 << (SintesisParser.Ord - 89)) | (1 << (SintesisParser.Prompt - 89)) | (1 << (SintesisParser.Convert - 89)) | (1 << (SintesisParser.Attributes - 89)) | (1 << (SintesisParser.Methods - 89)) | (1 << (SintesisParser.Map - 89)) | (1 << (SintesisParser.Var_ - 89)) | (1 << (SintesisParser.Identifier - 89)) | (1 << (SintesisParser.StringLiteral - 89)))) !== 0)) {
	            this.state = 473;
	            this.expression(0);
	        }

	        this.state = 476;
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
	    this.enterRule(localctx, 60, SintesisParser.RULE_vectorIndexes);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 479; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 478;
	        		this.vectorIndex();
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 481; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,42, this._ctx);
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
	    this.enterRule(localctx, 62, SintesisParser.RULE_formalParameterArg);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 483;
	        this.match(SintesisParser.Identifier);
	        this.state = 486;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===SintesisParser.Assign) {
	            this.state = 484;
	            this.match(SintesisParser.Assign);
	            this.state = 485;
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
	    this.enterRule(localctx, 64, SintesisParser.RULE_functionBody);
	    try {
	        this.state = 490;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,44,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 488;
	            this.block();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 489;
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
	    this.enterRule(localctx, 66, SintesisParser.RULE_assignmentOperator);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 492;
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



	reservedWord() {
	    let localctx = new ReservedWordContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 68, SintesisParser.RULE_reservedWord);
	    try {
	        this.state = 497;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,45,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 494;
	            this.keyword();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 495;
	            this.match(SintesisParser.NullLiteral);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 496;
	            this.match(SintesisParser.BooleanLiteral);
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



	vectorDeclaration() {
	    let localctx = new VectorDeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 70, SintesisParser.RULE_vectorDeclaration);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 499;
	        this.match(SintesisParser.Vector);
	        this.state = 500;
	        localctx.idx = this.vectorIndexes();
	        this.state = 502;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,46,this._ctx);
	        if(la_===1) {
	            this.state = 501;
	            localctx.args = this.arguments();

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



	mapDeclaration() {
	    let localctx = new MapDeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 72, SintesisParser.RULE_mapDeclaration);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 504;
	        this.match(SintesisParser.Map);
	        this.state = 505;
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



	vectorLiteral() {
	    let localctx = new VectorLiteralContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 74, SintesisParser.RULE_vectorLiteral);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 507;
	        this.match(SintesisParser.OpenBracket);
	        this.state = 516;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << SintesisParser.SingleLineComment) | (1 << SintesisParser.OpenBracket) | (1 << SintesisParser.OpenParen) | (1 << SintesisParser.OpenBrace) | (1 << SintesisParser.PlusPlus) | (1 << SintesisParser.MinusMinus) | (1 << SintesisParser.Plus) | (1 << SintesisParser.Minus) | (1 << SintesisParser.BitNot) | (1 << SintesisParser.Not))) !== 0) || ((((_la - 57)) & ~0x1f) == 0 && ((1 << (_la - 57)) & ((1 << (SintesisParser.NullLiteral - 57)) | (1 << (SintesisParser.DecimalLiteral - 57)) | (1 << (SintesisParser.HexIntegerLiteral - 57)) | (1 << (SintesisParser.OctalIntegerLiteral - 57)) | (1 << (SintesisParser.OctalIntegerLiteral2 - 57)) | (1 << (SintesisParser.BinaryIntegerLiteral - 57)) | (1 << (SintesisParser.BooleanLiteral - 57)) | (1 << (SintesisParser.Vector - 57)) | (1 << (SintesisParser.NumberOf - 57)))) !== 0) || ((((_la - 89)) & ~0x1f) == 0 && ((1 << (_la - 89)) & ((1 << (SintesisParser.IndexOf - 89)) | (1 << (SintesisParser.Sub - 89)) | (1 << (SintesisParser.Lower - 89)) | (1 << (SintesisParser.Upper - 89)) | (1 << (SintesisParser.Math - 89)) | (1 << (SintesisParser.Min - 89)) | (1 << (SintesisParser.Max - 89)) | (1 << (SintesisParser.Random - 89)) | (1 << (SintesisParser.Chr - 89)) | (1 << (SintesisParser.Ord - 89)) | (1 << (SintesisParser.Prompt - 89)) | (1 << (SintesisParser.Convert - 89)) | (1 << (SintesisParser.Attributes - 89)) | (1 << (SintesisParser.Methods - 89)) | (1 << (SintesisParser.Map - 89)) | (1 << (SintesisParser.Var_ - 89)) | (1 << (SintesisParser.Identifier - 89)) | (1 << (SintesisParser.StringLiteral - 89)))) !== 0)) {
	            this.state = 508;
	            this.expression(0);
	            this.state = 513;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===SintesisParser.Comma) {
	                this.state = 509;
	                this.match(SintesisParser.Comma);
	                this.state = 510;
	                this.expression(0);
	                this.state = 515;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 518;
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



	objectLiteral() {
	    let localctx = new ObjectLiteralContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 76, SintesisParser.RULE_objectLiteral);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 520;
	        this.match(SintesisParser.OpenBrace);
	        this.state = 534;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===SintesisParser.Colon || ((((_la - 57)) & ~0x1f) == 0 && ((1 << (_la - 57)) & ((1 << (SintesisParser.NullLiteral - 57)) | (1 << (SintesisParser.BooleanLiteral - 57)) | (1 << (SintesisParser.While - 57)) | (1 << (SintesisParser.If - 57)) | (1 << (SintesisParser.Then - 57)) | (1 << (SintesisParser.Else - 57)) | (1 << (SintesisParser.Return - 57)) | (1 << (SintesisParser.Function_ - 57)) | (1 << (SintesisParser.Vector - 57)))) !== 0) || ((((_la - 108)) & ~0x1f) == 0 && ((1 << (_la - 108)) & ((1 << (SintesisParser.Map - 108)) | (1 << (SintesisParser.Var_ - 108)) | (1 << (SintesisParser.Identifier - 108)))) !== 0)) {
	            this.state = 521;
	            this.identifierName();
	            this.state = 522;
	            this.match(SintesisParser.Colon);
	            this.state = 523;
	            this.expression(0);
	            this.state = 531;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===SintesisParser.Comma) {
	                this.state = 524;
	                this.match(SintesisParser.Comma);
	                this.state = 525;
	                this.identifierName();
	                this.state = 526;
	                this.match(SintesisParser.Colon);
	                this.state = 527;
	                this.expression(0);
	                this.state = 533;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 536;
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



	literal() {
	    let localctx = new LiteralContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 78, SintesisParser.RULE_literal);
	    try {
	        this.state = 546;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case SintesisParser.NullLiteral:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 538;
	            this.nullLiteral();
	            break;
	        case SintesisParser.BooleanLiteral:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 539;
	            this.booleanLiteral();
	            break;
	        case SintesisParser.StringLiteral:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 540;
	            this.stringLiteral();
	            break;
	        case SintesisParser.DecimalLiteral:
	        case SintesisParser.HexIntegerLiteral:
	        case SintesisParser.OctalIntegerLiteral:
	        case SintesisParser.OctalIntegerLiteral2:
	        case SintesisParser.BinaryIntegerLiteral:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 541;
	            this.numericLiteral();
	            break;
	        case SintesisParser.OpenBracket:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 542;
	            this.vectorLiteral();
	            break;
	        case SintesisParser.OpenBrace:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 543;
	            this.objectLiteral();
	            break;
	        case SintesisParser.Vector:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 544;
	            this.vectorDeclaration();
	            break;
	        case SintesisParser.Map:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 545;
	            this.mapDeclaration();
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
	    this.enterRule(localctx, 80, SintesisParser.RULE_booleanLiteral);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 548;
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
	    this.enterRule(localctx, 82, SintesisParser.RULE_stringLiteral);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 550;
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
	    this.enterRule(localctx, 84, SintesisParser.RULE_nullLiteral);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 552;
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
	    this.enterRule(localctx, 86, SintesisParser.RULE_numericLiteral);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 554;
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
	    this.enterRule(localctx, 88, SintesisParser.RULE_identifierName);
	    try {
	        this.state = 558;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,52,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 556;
	            this.match(SintesisParser.Identifier);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 557;
	            this.reservedWord();
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



	keyword() {
	    let localctx = new KeywordContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 90, SintesisParser.RULE_keyword);
	    try {
	        this.state = 570;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,53,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);

	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 561;
	            this.match(SintesisParser.Else);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 562;
	            this.match(SintesisParser.Then);
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 563;
	            this.match(SintesisParser.Return);
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 564;
	            this.match(SintesisParser.While);
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 565;
	            this.match(SintesisParser.Function_);
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 566;
	            this.match(SintesisParser.If);
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 567;
	            this.match(SintesisParser.Vector);
	            break;

	        case 9:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 568;
	            this.match(SintesisParser.Map);
	            break;

	        case 10:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 569;
	            this.match(SintesisParser.Var_);
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
SintesisParser.Times = 72;
SintesisParser.Do = 73;
SintesisParser.For = 74;
SintesisParser.Each = 75;
SintesisParser.ForEach = 76;
SintesisParser.In = 77;
SintesisParser.Of = 78;
SintesisParser.To = 79;
SintesisParser.If = 80;
SintesisParser.Then = 81;
SintesisParser.ElseIf = 82;
SintesisParser.Else = 83;
SintesisParser.Return = 84;
SintesisParser.Function_ = 85;
SintesisParser.Vector = 86;
SintesisParser.Delete = 87;
SintesisParser.NumberOf = 88;
SintesisParser.IndexOf = 89;
SintesisParser.Sub = 90;
SintesisParser.Lower = 91;
SintesisParser.Upper = 92;
SintesisParser.Math = 93;
SintesisParser.Min = 94;
SintesisParser.Max = 95;
SintesisParser.Random = 96;
SintesisParser.Chr = 97;
SintesisParser.Ord = 98;
SintesisParser.Prompt = 99;
SintesisParser.Convert = 100;
SintesisParser.New_ = 101;
SintesisParser.Class_ = 102;
SintesisParser.Extends = 103;
SintesisParser.Attributes = 104;
SintesisParser.Methods = 105;
SintesisParser.Super = 106;
SintesisParser.InstanceOf = 107;
SintesisParser.Map = 108;
SintesisParser.Get = 109;
SintesisParser.Set = 110;
SintesisParser.Var_ = 111;
SintesisParser.Identifier = 112;
SintesisParser.StringLiteral = 113;
SintesisParser.WhiteSpaces = 114;
SintesisParser.LineTerminator = 115;

SintesisParser.RULE_program = 0;
SintesisParser.RULE_statementList = 1;
SintesisParser.RULE_statement = 2;
SintesisParser.RULE_block = 3;
SintesisParser.RULE_stepStatement = 4;
SintesisParser.RULE_printStatement = 5;
SintesisParser.RULE_expression = 6;
SintesisParser.RULE_basicFunction0 = 7;
SintesisParser.RULE_basicFunction1 = 8;
SintesisParser.RULE_basicFunction2 = 9;
SintesisParser.RULE_basicFunction3 = 10;
SintesisParser.RULE_basicFunction = 11;
SintesisParser.RULE_expressionSequence = 12;
SintesisParser.RULE_ifStatement = 13;
SintesisParser.RULE_elseIfs = 14;
SintesisParser.RULE_elseIf = 15;
SintesisParser.RULE_elseStatement = 16;
SintesisParser.RULE_iteratorIndexes = 17;
SintesisParser.RULE_iteratorRange = 18;
SintesisParser.RULE_iterationStatement = 19;
SintesisParser.RULE_returnStatement = 20;
SintesisParser.RULE_functionDeclaration = 21;
SintesisParser.RULE_formalParameterList = 22;
SintesisParser.RULE_arguments = 23;
SintesisParser.RULE_classDeclaration = 24;
SintesisParser.RULE_identifiers = 25;
SintesisParser.RULE_methodDeclaration = 26;
SintesisParser.RULE_methodsList = 27;
SintesisParser.RULE_classExp = 28;
SintesisParser.RULE_vectorIndex = 29;
SintesisParser.RULE_vectorIndexes = 30;
SintesisParser.RULE_formalParameterArg = 31;
SintesisParser.RULE_functionBody = 32;
SintesisParser.RULE_assignmentOperator = 33;
SintesisParser.RULE_reservedWord = 34;
SintesisParser.RULE_vectorDeclaration = 35;
SintesisParser.RULE_mapDeclaration = 36;
SintesisParser.RULE_vectorLiteral = 37;
SintesisParser.RULE_objectLiteral = 38;
SintesisParser.RULE_literal = 39;
SintesisParser.RULE_booleanLiteral = 40;
SintesisParser.RULE_stringLiteral = 41;
SintesisParser.RULE_nullLiteral = 42;
SintesisParser.RULE_numericLiteral = 43;
SintesisParser.RULE_identifierName = 44;
SintesisParser.RULE_keyword = 45;

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

	EOF() {
	    return this.getToken(SintesisParser.EOF, 0);
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
        this.exp = null; // ExpressionSequenceContext
    }

	Print() {
	    return this.getToken(SintesisParser.Print, 0);
	};

	expressionSequence() {
	    return this.getTypedRuleContext(ExpressionSequenceContext,0);
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
        this.dest = null; // ExpressionContext;
        this.exp = null; // ExpressionContext;
        super.copyFrom(ctx);
    }

	Assign() {
	    return this.getToken(SintesisParser.Assign, 0);
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

	accept(visitor) {
	    if ( visitor instanceof SintesisParserVisitor ) {
	        return visitor.visitExpAssignment(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

SintesisParser.ExpAssignmentContext = ExpAssignmentContext;

class ExpMemberIndexContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        this.exp = null; // ExpressionContext;
        this.idx = null; // ExpressionContext;
        super.copyFrom(ctx);
    }

	OpenBracket() {
	    return this.getToken(SintesisParser.OpenBracket, 0);
	};

	CloseBracket() {
	    return this.getToken(SintesisParser.CloseBracket, 0);
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

	accept(visitor) {
	    if ( visitor instanceof SintesisParserVisitor ) {
	        return visitor.visitExpMemberIndex(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

SintesisParser.ExpMemberIndexContext = ExpMemberIndexContext;

class ExpBasicFunctionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        this.fn = null; // BasicFunctionContext;
        this.args = null; // ArgumentsContext;
        super.copyFrom(ctx);
    }

	basicFunction() {
	    return this.getTypedRuleContext(BasicFunctionContext,0);
	};

	arguments() {
	    return this.getTypedRuleContext(ArgumentsContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof SintesisParserVisitor ) {
	        return visitor.visitExpBasicFunction(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

SintesisParser.ExpBasicFunctionContext = ExpBasicFunctionContext;

class ExpMathContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        this.fn = null; // Token;
        this.args = null; // ArgumentsContext;
        super.copyFrom(ctx);
    }

	Math() {
	    return this.getToken(SintesisParser.Math, 0);
	};

	Dot() {
	    return this.getToken(SintesisParser.Dot, 0);
	};

	arguments() {
	    return this.getTypedRuleContext(ArgumentsContext,0);
	};

	Identifier() {
	    return this.getToken(SintesisParser.Identifier, 0);
	};

	Min() {
	    return this.getToken(SintesisParser.Min, 0);
	};

	Max() {
	    return this.getToken(SintesisParser.Max, 0);
	};

	Random() {
	    return this.getToken(SintesisParser.Random, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof SintesisParserVisitor ) {
	        return visitor.visitExpMath(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

SintesisParser.ExpMathContext = ExpMathContext;

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

class ExpPreIncrementContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        this.op = null; // Token;
        this.dest = null; // ExpressionContext;
        super.copyFrom(ctx);
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	PlusPlus() {
	    return this.getToken(SintesisParser.PlusPlus, 0);
	};

	MinusMinus() {
	    return this.getToken(SintesisParser.MinusMinus, 0);
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

class ExpTernaryContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        this.cond = null; // ExpressionContext;
        this.ok = null; // ExpressionContext;
        this.no = null; // ExpressionContext;
        super.copyFrom(ctx);
    }

	QuestionMark() {
	    return this.getToken(SintesisParser.QuestionMark, 0);
	};

	Colon() {
	    return this.getToken(SintesisParser.Colon, 0);
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

	accept(visitor) {
	    if ( visitor instanceof SintesisParserVisitor ) {
	        return visitor.visitExpTernary(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

SintesisParser.ExpTernaryContext = ExpTernaryContext;

class ExpMemberDotContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        this.exp = null; // ExpressionContext;
        this.idx = null; // IdentifierNameContext;
        super.copyFrom(ctx);
    }

	Dot() {
	    return this.getToken(SintesisParser.Dot, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	identifierName() {
	    return this.getTypedRuleContext(IdentifierNameContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof SintesisParserVisitor ) {
	        return visitor.visitExpMemberDot(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

SintesisParser.ExpMemberDotContext = ExpMemberDotContext;

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
        this.dest = null; // ExpressionContext;
        this.op = null; // Token;
        super.copyFrom(ctx);
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	PlusPlus() {
	    return this.getToken(SintesisParser.PlusPlus, 0);
	};

	MinusMinus() {
	    return this.getToken(SintesisParser.MinusMinus, 0);
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

class ExpAssignmentOperatorContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        this.dest = null; // ExpressionContext;
        this.op = null; // AssignmentOperatorContext;
        this.exp = null; // ExpressionContext;
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

	assignmentOperator() {
	    return this.getTypedRuleContext(AssignmentOperatorContext,0);
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
        this.atr = null; // Token;
        this.met = null; // Token;
        this.vvar = null; // Token;
        this.id = null; // Token;
        super.copyFrom(ctx);
    }

	Identifier() {
	    return this.getToken(SintesisParser.Identifier, 0);
	};

	Dot() {
	    return this.getToken(SintesisParser.Dot, 0);
	};

	Attributes() {
	    return this.getToken(SintesisParser.Attributes, 0);
	};

	Methods() {
	    return this.getToken(SintesisParser.Methods, 0);
	};

	Var_() {
	    return this.getToken(SintesisParser.Var_, 0);
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

class ExpMemberFuncContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        this.exp = null; // ExpressionContext;
        this.args = null; // ArgumentsContext;
        super.copyFrom(ctx);
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	arguments() {
	    return this.getTypedRuleContext(ArgumentsContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof SintesisParserVisitor ) {
	        return visitor.visitExpMemberFunc(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

SintesisParser.ExpMemberFuncContext = ExpMemberFuncContext;

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

class BasicFunction0Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SintesisParser.RULE_basicFunction0;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class RandomContext extends BasicFunction0Context {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	Random() {
	    return this.getToken(SintesisParser.Random, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof SintesisParserVisitor ) {
	        return visitor.visitRandom(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

SintesisParser.RandomContext = RandomContext;

class BasicFunction1Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SintesisParser.RULE_basicFunction1;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class OrdContext extends BasicFunction1Context {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	Ord() {
	    return this.getToken(SintesisParser.Ord, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof SintesisParserVisitor ) {
	        return visitor.visitOrd(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

SintesisParser.OrdContext = OrdContext;

class MinContext extends BasicFunction1Context {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	Min() {
	    return this.getToken(SintesisParser.Min, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof SintesisParserVisitor ) {
	        return visitor.visitMin(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

SintesisParser.MinContext = MinContext;

class MaxContext extends BasicFunction1Context {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	Max() {
	    return this.getToken(SintesisParser.Max, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof SintesisParserVisitor ) {
	        return visitor.visitMax(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

SintesisParser.MaxContext = MaxContext;

class LowerContext extends BasicFunction1Context {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	Lower() {
	    return this.getToken(SintesisParser.Lower, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof SintesisParserVisitor ) {
	        return visitor.visitLower(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

SintesisParser.LowerContext = LowerContext;

class UpperContext extends BasicFunction1Context {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	Upper() {
	    return this.getToken(SintesisParser.Upper, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof SintesisParserVisitor ) {
	        return visitor.visitUpper(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

SintesisParser.UpperContext = UpperContext;

class ChrContext extends BasicFunction1Context {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	Chr() {
	    return this.getToken(SintesisParser.Chr, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof SintesisParserVisitor ) {
	        return visitor.visitChr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

SintesisParser.ChrContext = ChrContext;

class PromptContext extends BasicFunction1Context {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	Prompt() {
	    return this.getToken(SintesisParser.Prompt, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof SintesisParserVisitor ) {
	        return visitor.visitPrompt(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

SintesisParser.PromptContext = PromptContext;

class NumberOfContext extends BasicFunction1Context {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	NumberOf() {
	    return this.getToken(SintesisParser.NumberOf, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof SintesisParserVisitor ) {
	        return visitor.visitNumberOf(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

SintesisParser.NumberOfContext = NumberOfContext;

class BasicFunction2Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SintesisParser.RULE_basicFunction2;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class ConvertContext extends BasicFunction2Context {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	Convert() {
	    return this.getToken(SintesisParser.Convert, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof SintesisParserVisitor ) {
	        return visitor.visitConvert(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

SintesisParser.ConvertContext = ConvertContext;

class IndexOfContext extends BasicFunction2Context {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	IndexOf() {
	    return this.getToken(SintesisParser.IndexOf, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof SintesisParserVisitor ) {
	        return visitor.visitIndexOf(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

SintesisParser.IndexOfContext = IndexOfContext;

class BasicFunction3Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SintesisParser.RULE_basicFunction3;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class SubContext extends BasicFunction3Context {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	Sub() {
	    return this.getToken(SintesisParser.Sub, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof SintesisParserVisitor ) {
	        return visitor.visitSub(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

SintesisParser.SubContext = SubContext;

class BasicFunctionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SintesisParser.RULE_basicFunction;
    }

	basicFunction0() {
	    return this.getTypedRuleContext(BasicFunction0Context,0);
	};

	basicFunction1() {
	    return this.getTypedRuleContext(BasicFunction1Context,0);
	};

	basicFunction2() {
	    return this.getTypedRuleContext(BasicFunction2Context,0);
	};

	basicFunction3() {
	    return this.getTypedRuleContext(BasicFunction3Context,0);
	};

	accept(visitor) {
	    if ( visitor instanceof SintesisParserVisitor ) {
	        return visitor.visitBasicFunction(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



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



class IteratorIndexesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SintesisParser.RULE_iteratorIndexes;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class QxeeqContext extends IteratorIndexesContext {

    constructor(parser, ctx) {
        super(parser);
        this.idk = null; // Token;
        this.idv = null; // Token;
        this.op = null; // Token;
        this.coll = null; // ExpressionContext;
        super.copyFrom(ctx);
    }

	ARROW() {
	    return this.getToken(SintesisParser.ARROW, 0);
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


	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	In() {
	    return this.getToken(SintesisParser.In, 0);
	};

	Of() {
	    return this.getToken(SintesisParser.Of, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof SintesisParserVisitor ) {
	        return visitor.visitQxeeq(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

SintesisParser.QxeeqContext = QxeeqContext;

class EwfewqContext extends IteratorIndexesContext {

    constructor(parser, ctx) {
        super(parser);
        this.idv = null; // Token;
        this.idk = null; // Token;
        this.op = null; // Token;
        this.coll = null; // ExpressionContext;
        super.copyFrom(ctx);
    }

	Comma() {
	    return this.getToken(SintesisParser.Comma, 0);
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


	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	In() {
	    return this.getToken(SintesisParser.In, 0);
	};

	Of() {
	    return this.getToken(SintesisParser.Of, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof SintesisParserVisitor ) {
	        return visitor.visitEwfewq(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

SintesisParser.EwfewqContext = EwfewqContext;

class AerContext extends IteratorIndexesContext {

    constructor(parser, ctx) {
        super(parser);
        this.idv = null; // Token;
        this.op = null; // Token;
        this.coll = null; // ExpressionContext;
        super.copyFrom(ctx);
    }

	Identifier() {
	    return this.getToken(SintesisParser.Identifier, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	In() {
	    return this.getToken(SintesisParser.In, 0);
	};

	Of() {
	    return this.getToken(SintesisParser.Of, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof SintesisParserVisitor ) {
	        return visitor.visitAer(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

SintesisParser.AerContext = AerContext;

class IteratorRangeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SintesisParser.RULE_iteratorRange;
        this.id = null; // Token
        this.start = null; // ExpressionContext
        this.to = null; // ExpressionContext
    }

	To() {
	    return this.getToken(SintesisParser.To, 0);
	};

	Identifier() {
	    return this.getToken(SintesisParser.Identifier, 0);
	};

	Assign() {
	    return this.getToken(SintesisParser.Assign, 0);
	};

	In() {
	    return this.getToken(SintesisParser.In, 0);
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

	accept(visitor) {
	    if ( visitor instanceof SintesisParserVisitor ) {
	        return visitor.visitIteratorRange(this);
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

	While() {
	    return this.getToken(SintesisParser.While, 0);
	};

	Repeat() {
	    return this.getToken(SintesisParser.Repeat, 0);
	};

	Do() {
	    return this.getToken(SintesisParser.Do, 0);
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

	Times() {
	    return this.getToken(SintesisParser.Times, 0);
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

class ForEachStatementContext extends IterationStatementContext {

    constructor(parser, ctx) {
        super(parser);
        this.iter = null; // IteratorIndexesContext;
        this.stmt = null; // StatementContext;
        super.copyFrom(ctx);
    }

	iteratorIndexes() {
	    return this.getTypedRuleContext(IteratorIndexesContext,0);
	};

	statement() {
	    return this.getTypedRuleContext(StatementContext,0);
	};

	For() {
	    return this.getToken(SintesisParser.For, 0);
	};

	ForEach() {
	    return this.getToken(SintesisParser.ForEach, 0);
	};

	Repeat() {
	    return this.getToken(SintesisParser.Repeat, 0);
	};

	Do() {
	    return this.getToken(SintesisParser.Do, 0);
	};

	Each() {
	    return this.getToken(SintesisParser.Each, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof SintesisParserVisitor ) {
	        return visitor.visitForEachStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

SintesisParser.ForEachStatementContext = ForEachStatementContext;

class ForEachStatement2Context extends IterationStatementContext {

    constructor(parser, ctx) {
        super(parser);
        this.iter = null; // IteratorIndexesContext;
        this.stmt = null; // StatementContext;
        super.copyFrom(ctx);
    }

	OpenParen() {
	    return this.getToken(SintesisParser.OpenParen, 0);
	};

	CloseParen() {
	    return this.getToken(SintesisParser.CloseParen, 0);
	};

	iteratorIndexes() {
	    return this.getTypedRuleContext(IteratorIndexesContext,0);
	};

	statement() {
	    return this.getTypedRuleContext(StatementContext,0);
	};

	For() {
	    return this.getToken(SintesisParser.For, 0);
	};

	ForEach() {
	    return this.getToken(SintesisParser.ForEach, 0);
	};

	Repeat() {
	    return this.getToken(SintesisParser.Repeat, 0);
	};

	Do() {
	    return this.getToken(SintesisParser.Do, 0);
	};

	Each() {
	    return this.getToken(SintesisParser.Each, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof SintesisParserVisitor ) {
	        return visitor.visitForEachStatement2(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

SintesisParser.ForEachStatement2Context = ForEachStatement2Context;

class ForFromToStatement2Context extends IterationStatementContext {

    constructor(parser, ctx) {
        super(parser);
        this.iter = null; // IteratorRangeContext;
        this.stmt = null; // StatementContext;
        super.copyFrom(ctx);
    }

	For() {
	    return this.getToken(SintesisParser.For, 0);
	};

	OpenParen() {
	    return this.getToken(SintesisParser.OpenParen, 0);
	};

	CloseParen() {
	    return this.getToken(SintesisParser.CloseParen, 0);
	};

	iteratorRange() {
	    return this.getTypedRuleContext(IteratorRangeContext,0);
	};

	statement() {
	    return this.getTypedRuleContext(StatementContext,0);
	};

	Repeat() {
	    return this.getToken(SintesisParser.Repeat, 0);
	};

	Do() {
	    return this.getToken(SintesisParser.Do, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof SintesisParserVisitor ) {
	        return visitor.visitForFromToStatement2(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

SintesisParser.ForFromToStatement2Context = ForFromToStatement2Context;

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


	Do() {
	    return this.getToken(SintesisParser.Do, 0);
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

class ForFromToStatementContext extends IterationStatementContext {

    constructor(parser, ctx) {
        super(parser);
        this.iter = null; // IteratorRangeContext;
        this.stmt = null; // StatementContext;
        super.copyFrom(ctx);
    }

	For() {
	    return this.getToken(SintesisParser.For, 0);
	};

	iteratorRange() {
	    return this.getTypedRuleContext(IteratorRangeContext,0);
	};

	statement() {
	    return this.getTypedRuleContext(StatementContext,0);
	};

	Repeat() {
	    return this.getToken(SintesisParser.Repeat, 0);
	};

	Do() {
	    return this.getToken(SintesisParser.Do, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof SintesisParserVisitor ) {
	        return visitor.visitForFromToStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

SintesisParser.ForFromToStatementContext = ForFromToStatementContext;

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



class VectorDeclarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SintesisParser.RULE_vectorDeclaration;
        this.idx = null; // VectorIndexesContext
        this.args = null; // ArgumentsContext
    }

	Vector() {
	    return this.getToken(SintesisParser.Vector, 0);
	};

	vectorIndexes() {
	    return this.getTypedRuleContext(VectorIndexesContext,0);
	};

	arguments() {
	    return this.getTypedRuleContext(ArgumentsContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof SintesisParserVisitor ) {
	        return visitor.visitVectorDeclaration(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class MapDeclarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SintesisParser.RULE_mapDeclaration;
        this.args = null; // ArgumentsContext
    }

	Map() {
	    return this.getToken(SintesisParser.Map, 0);
	};

	arguments() {
	    return this.getTypedRuleContext(ArgumentsContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof SintesisParserVisitor ) {
	        return visitor.visitMapDeclaration(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class VectorLiteralContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SintesisParser.RULE_vectorLiteral;
    }

	OpenBracket() {
	    return this.getToken(SintesisParser.OpenBracket, 0);
	};

	CloseBracket() {
	    return this.getToken(SintesisParser.CloseBracket, 0);
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
	        return visitor.visitVectorLiteral(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ObjectLiteralContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SintesisParser.RULE_objectLiteral;
    }

	OpenBrace() {
	    return this.getToken(SintesisParser.OpenBrace, 0);
	};

	CloseBrace() {
	    return this.getToken(SintesisParser.CloseBrace, 0);
	};

	identifierName = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(IdentifierNameContext);
	    } else {
	        return this.getTypedRuleContext(IdentifierNameContext,i);
	    }
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
	        return visitor.visitObjectLiteral(this);
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

	vectorLiteral() {
	    return this.getTypedRuleContext(VectorLiteralContext,0);
	};

	objectLiteral() {
	    return this.getTypedRuleContext(ObjectLiteralContext,0);
	};

	vectorDeclaration() {
	    return this.getTypedRuleContext(VectorDeclarationContext,0);
	};

	mapDeclaration() {
	    return this.getTypedRuleContext(MapDeclarationContext,0);
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

	Map() {
	    return this.getToken(SintesisParser.Map, 0);
	};

	Var_() {
	    return this.getToken(SintesisParser.Var_, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof SintesisParserVisitor ) {
	        return visitor.visitKeyword(this);
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
SintesisParser.BasicFunction0Context = BasicFunction0Context; 
SintesisParser.BasicFunction1Context = BasicFunction1Context; 
SintesisParser.BasicFunction2Context = BasicFunction2Context; 
SintesisParser.BasicFunction3Context = BasicFunction3Context; 
SintesisParser.BasicFunctionContext = BasicFunctionContext; 
SintesisParser.ExpressionSequenceContext = ExpressionSequenceContext; 
SintesisParser.IfStatementContext = IfStatementContext; 
SintesisParser.ElseIfsContext = ElseIfsContext; 
SintesisParser.ElseIfContext = ElseIfContext; 
SintesisParser.ElseStatementContext = ElseStatementContext; 
SintesisParser.IteratorIndexesContext = IteratorIndexesContext; 
SintesisParser.IteratorRangeContext = IteratorRangeContext; 
SintesisParser.IterationStatementContext = IterationStatementContext; 
SintesisParser.ReturnStatementContext = ReturnStatementContext; 
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
SintesisParser.ReservedWordContext = ReservedWordContext; 
SintesisParser.VectorDeclarationContext = VectorDeclarationContext; 
SintesisParser.MapDeclarationContext = MapDeclarationContext; 
SintesisParser.VectorLiteralContext = VectorLiteralContext; 
SintesisParser.ObjectLiteralContext = ObjectLiteralContext; 
SintesisParser.LiteralContext = LiteralContext; 
SintesisParser.BooleanLiteralContext = BooleanLiteralContext; 
SintesisParser.StringLiteralContext = StringLiteralContext; 
SintesisParser.NullLiteralContext = NullLiteralContext; 
SintesisParser.NumericLiteralContext = NumericLiteralContext; 
SintesisParser.IdentifierNameContext = IdentifierNameContext; 
SintesisParser.KeywordContext = KeywordContext; 
