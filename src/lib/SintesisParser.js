// Generated from ./src/grammar/SintesisParser.g4 by ANTLR 4.9.3
// jshint ignore: start
import antlr4 from 'antlr4';
import SintesisParserVisitor from './SintesisParserVisitor.js';


const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0003w\u01e3\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
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
    "\b\u0003\b\u0003\b\u0003\b\u0003\b\u0007\b\u0084\n\b\f\b\u000e\b\u0087",
    "\u000b\b\u0003\t\u0003\t\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003",
    "\n\u0003\n\u0003\n\u0005\n\u0093\n\n\u0003\u000b\u0003\u000b\u0005\u000b",
    "\u0097\n\u000b\u0003\f\u0003\f\u0003\r\u0003\r\u0003\r\u0003\r\u0005",
    "\r\u009f\n\r\u0003\u000e\u0003\u000e\u0003\u000e\u0007\u000e\u00a4\n",
    "\u000e\f\u000e\u000e\u000e\u00a7\u000b\u000e\u0003\u000f\u0003\u000f",
    "\u0003\u000f\u0005\u000f\u00ac\n\u000f\u0003\u000f\u0003\u000f\u0005",
    "\u000f\u00b0\n\u000f\u0003\u000f\u0005\u000f\u00b3\n\u000f\u0003\u0010",
    "\u0006\u0010\u00b6\n\u0010\r\u0010\u000e\u0010\u00b7\u0003\u0011\u0003",
    "\u0011\u0003\u0011\u0005\u0011\u00bd\n\u0011\u0003\u0011\u0003\u0011",
    "\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0013\u0003\u0013\u0003\u0013",
    "\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013",
    "\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0005\u0013\u00d1\n",
    "\u0013\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003",
    "\u0014\u0003\u0015\u0003\u0015\u0003\u0015\u0005\u0015\u00dc\n\u0015",
    "\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015",
    "\u0003\u0015\u0003\u0015\u0005\u0015\u00e6\n\u0015\u0003\u0015\u0003",
    "\u0015\u0003\u0015\u0005\u0015\u00eb\n\u0015\u0003\u0015\u0003\u0015",
    "\u0003\u0015\u0003\u0015\u0003\u0015\u0005\u0015\u00f2\n\u0015\u0003",
    "\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003",
    "\u0015\u0005\u0015\u00fb\n\u0015\u0003\u0015\u0003\u0015\u0003\u0015",
    "\u0003\u0015\u0005\u0015\u0101\n\u0015\u0003\u0015\u0005\u0015\u0104",
    "\n\u0015\u0003\u0015\u0003\u0015\u0005\u0015\u0108\n\u0015\u0003\u0015",
    "\u0003\u0015\u0003\u0015\u0003\u0015\u0005\u0015\u010e\n\u0015\u0003",
    "\u0015\u0005\u0015\u0111\n\u0015\u0003\u0015\u0003\u0015\u0003\u0015",
    "\u0003\u0015\u0005\u0015\u0117\n\u0015\u0003\u0015\u0003\u0015\u0005",
    "\u0015\u011b\n\u0015\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0017",
    "\u0003\u0017\u0003\u0017\u0007\u0017\u0123\n\u0017\f\u0017\u000e\u0017",
    "\u0126\u000b\u0017\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0005",
    "\u0018\u012c\n\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0019",
    "\u0003\u0019\u0003\u0019\u0003\u0019\u0007\u0019\u0135\n\u0019\f\u0019",
    "\u000e\u0019\u0138\u000b\u0019\u0005\u0019\u013a\n\u0019\u0003\u0019",
    "\u0003\u0019\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0005\u001a",
    "\u0142\n\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0005\u001a\u0147",
    "\n\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a",
    "\u0005\u001a\u014e\n\u001a\u0005\u001a\u0150\n\u001a\u0003\u001a\u0003",
    "\u001a\u0005\u001a\u0154\n\u001a\u0003\u001a\u0003\u001a\u0003\u001a",
    "\u0003\u001a\u0003\u001a\u0005\u001a\u015b\n\u001a\u0005\u001a\u015d",
    "\n\u001a\u0003\u001a\u0003\u001a\u0003\u001b\u0003\u001b\u0005\u001b",
    "\u0163\n\u001b\u0006\u001b\u0165\n\u001b\r\u001b\u000e\u001b\u0166\u0003",
    "\u001c\u0005\u001c\u016a\n\u001c\u0003\u001c\u0003\u001c\u0003\u001c",
    "\u0005\u001c\u016f\n\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0003",
    "\u001d\u0006\u001d\u0175\n\u001d\r\u001d\u000e\u001d\u0176\u0003\u001e",
    "\u0003\u001e\u0003\u001e\u0003\u001e\u0003\u001f\u0003\u001f\u0005\u001f",
    "\u017f\n\u001f\u0003\u001f\u0003\u001f\u0003 \u0006 \u0184\n \r \u000e",
    " \u0185\u0003!\u0003!\u0003!\u0005!\u018b\n!\u0003\"\u0003\"\u0005\"",
    "\u018f\n\"\u0003#\u0003#\u0003$\u0003$\u0003$\u0005$\u0196\n$\u0003",
    "%\u0003%\u0003%\u0005%\u019b\n%\u0003&\u0003&\u0003&\u0003\'\u0003\'",
    "\u0003\'\u0003\'\u0007\'\u01a4\n\'\f\'\u000e\'\u01a7\u000b\'\u0005\'",
    "\u01a9\n\'\u0003\'\u0003\'\u0003(\u0003(\u0003(\u0003(\u0003(\u0003",
    "(\u0003(\u0003(\u0003(\u0007(\u01b6\n(\f(\u000e(\u01b9\u000b(\u0005",
    "(\u01bb\n(\u0003(\u0003(\u0003)\u0003)\u0003)\u0003)\u0003)\u0003)\u0003",
    ")\u0003)\u0005)\u01c7\n)\u0003*\u0003*\u0003+\u0003+\u0003,\u0003,\u0003",
    "-\u0003-\u0003.\u0003.\u0005.\u01d3\n.\u0003/\u0003/\u0003/\u0003/\u0003",
    "/\u0003/\u0003/\u0003/\u0003/\u0003/\u0003/\u0003/\u0005/\u01e1\n/\u0003",
    "/\u0002\u0003\u000e0\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014",
    "\u0016\u0018\u001a\u001c\u001e \"$&(*,.02468:<>@BDFHJLNPRTVXZ\\\u0002",
    "\n\u0004\u0002<<tt\u0003\u0002OP\u0004\u0002\r\rOO\u0004\u0002IIKK\u0003",
    "\u0002WX\u0004\u0002mmtt\u0003\u0002.9\u0003\u0002<@\u0002\u0211\u0002",
    "^\u0003\u0002\u0002\u0002\u0004b\u0003\u0002\u0002\u0002\u0006o\u0003",
    "\u0002\u0002\u0002\bq\u0003\u0002\u0002\u0002\nw\u0003\u0002\u0002\u0002",
    "\fz\u0003\u0002\u0002\u0002\u000e}\u0003\u0002\u0002\u0002\u0010\u0088",
    "\u0003\u0002\u0002\u0002\u0012\u0092\u0003\u0002\u0002\u0002\u0014\u0096",
    "\u0003\u0002\u0002\u0002\u0016\u0098\u0003\u0002\u0002\u0002\u0018\u009e",
    "\u0003\u0002\u0002\u0002\u001a\u00a0\u0003\u0002\u0002\u0002\u001c\u00a8",
    "\u0003\u0002\u0002\u0002\u001e\u00b5\u0003\u0002\u0002\u0002 \u00b9",
    "\u0003\u0002\u0002\u0002\"\u00c0\u0003\u0002\u0002\u0002$\u00d0\u0003",
    "\u0002\u0002\u0002&\u00d2\u0003\u0002\u0002\u0002(\u011a\u0003\u0002",
    "\u0002\u0002*\u011c\u0003\u0002\u0002\u0002,\u011f\u0003\u0002\u0002",
    "\u0002.\u0127\u0003\u0002\u0002\u00020\u0130\u0003\u0002\u0002\u0002",
    "2\u013d\u0003\u0002\u0002\u00024\u0164\u0003\u0002\u0002\u00026\u0169",
    "\u0003\u0002\u0002\u00028\u0174\u0003\u0002\u0002\u0002:\u0178\u0003",
    "\u0002\u0002\u0002<\u017c\u0003\u0002\u0002\u0002>\u0183\u0003\u0002",
    "\u0002\u0002@\u0187\u0003\u0002\u0002\u0002B\u018e\u0003\u0002\u0002",
    "\u0002D\u0190\u0003\u0002\u0002\u0002F\u0195\u0003\u0002\u0002\u0002",
    "H\u0197\u0003\u0002\u0002\u0002J\u019c\u0003\u0002\u0002\u0002L\u019f",
    "\u0003\u0002\u0002\u0002N\u01ac\u0003\u0002\u0002\u0002P\u01c6\u0003",
    "\u0002\u0002\u0002R\u01c8\u0003\u0002\u0002\u0002T\u01ca\u0003\u0002",
    "\u0002\u0002V\u01cc\u0003\u0002\u0002\u0002X\u01ce\u0003\u0002\u0002",
    "\u0002Z\u01d2\u0003\u0002\u0002\u0002\\\u01e0\u0003\u0002\u0002\u0002",
    "^_\u0005\u0004\u0003\u0002_`\u0007\u0002\u0002\u0003`\u0003\u0003\u0002",
    "\u0002\u0002ac\u0005\u0006\u0004\u0002ba\u0003\u0002\u0002\u0002cd\u0003",
    "\u0002\u0002\u0002db\u0003\u0002\u0002\u0002de\u0003\u0002\u0002\u0002",
    "e\u0005\u0003\u0002\u0002\u0002fp\u0005\b\u0005\u0002gp\u0005\n\u0006",
    "\u0002hp\u0005\f\u0007\u0002ip\u0005\u001c\u000f\u0002jp\u0005(\u0015",
    "\u0002kp\u0005*\u0016\u0002lp\u00052\u001a\u0002mp\u0005.\u0018\u0002",
    "np\u0005\u000e\b\u0002of\u0003\u0002\u0002\u0002og\u0003\u0002\u0002",
    "\u0002oh\u0003\u0002\u0002\u0002oi\u0003\u0002\u0002\u0002oj\u0003\u0002",
    "\u0002\u0002ok\u0003\u0002\u0002\u0002ol\u0003\u0002\u0002\u0002om\u0003",
    "\u0002\u0002\u0002on\u0003\u0002\u0002\u0002p\u0007\u0003\u0002\u0002",
    "\u0002qs\u0007\t\u0002\u0002rt\u0005\u0004\u0003\u0002sr\u0003\u0002",
    "\u0002\u0002st\u0003\u0002\u0002\u0002tu\u0003\u0002\u0002\u0002uv\u0007",
    "\n\u0002\u0002v\t\u0003\u0002\u0002\u0002wx\u0007F\u0002\u0002xy\t\u0002",
    "\u0002\u0002y\u000b\u0003\u0002\u0002\u0002z{\u0007G\u0002\u0002{|\u0005",
    "\u001a\u000e\u0002|\r\u0003\u0002\u0002\u0002}~\b\b\u0001\u0002~\u007f",
    "\u0007t\u0002\u0002\u007f\u0085\u0003\u0002\u0002\u0002\u0080\u0081",
    "\f\u0004\u0002\u0002\u0081\u0082\u0007\u0011\u0002\u0002\u0082\u0084",
    "\u0007t\u0002\u0002\u0083\u0080\u0003\u0002\u0002\u0002\u0084\u0087",
    "\u0003\u0002\u0002\u0002\u0085\u0083\u0003\u0002\u0002\u0002\u0085\u0086",
    "\u0003\u0002\u0002\u0002\u0086\u000f\u0003\u0002\u0002\u0002\u0087\u0085",
    "\u0003\u0002\u0002\u0002\u0088\u0089\u0007c\u0002\u0002\u0089\u0011",
    "\u0003\u0002\u0002\u0002\u008a\u0093\u0007[\u0002\u0002\u008b\u0093",
    "\u0007^\u0002\u0002\u008c\u0093\u0007_\u0002\u0002\u008d\u0093\u0007",
    "b\u0002\u0002\u008e\u0093\u0007a\u0002\u0002\u008f\u0093\u0007e\u0002",
    "\u0002\u0090\u0093\u0007d\u0002\u0002\u0091\u0093\u0007f\u0002\u0002",
    "\u0092\u008a\u0003\u0002\u0002\u0002\u0092\u008b\u0003\u0002\u0002\u0002",
    "\u0092\u008c\u0003\u0002\u0002\u0002\u0092\u008d\u0003\u0002\u0002\u0002",
    "\u0092\u008e\u0003\u0002\u0002\u0002\u0092\u008f\u0003\u0002\u0002\u0002",
    "\u0092\u0090\u0003\u0002\u0002\u0002\u0092\u0091\u0003\u0002\u0002\u0002",
    "\u0093\u0013\u0003\u0002\u0002\u0002\u0094\u0097\u0007\\\u0002\u0002",
    "\u0095\u0097\u0007g\u0002\u0002\u0096\u0094\u0003\u0002\u0002\u0002",
    "\u0096\u0095\u0003\u0002\u0002\u0002\u0097\u0015\u0003\u0002\u0002\u0002",
    "\u0098\u0099\u0007]\u0002\u0002\u0099\u0017\u0003\u0002\u0002\u0002",
    "\u009a\u009f\u0005\u0010\t\u0002\u009b\u009f\u0005\u0012\n\u0002\u009c",
    "\u009f\u0005\u0014\u000b\u0002\u009d\u009f\u0005\u0016\f\u0002\u009e",
    "\u009a\u0003\u0002\u0002\u0002\u009e\u009b\u0003\u0002\u0002\u0002\u009e",
    "\u009c\u0003\u0002\u0002\u0002\u009e\u009d\u0003\u0002\u0002\u0002\u009f",
    "\u0019\u0003\u0002\u0002\u0002\u00a0\u00a5\u0005\u000e\b\u0002\u00a1",
    "\u00a2\u0007\f\u0002\u0002\u00a2\u00a4\u0005\u000e\b\u0002\u00a3\u00a1",
    "\u0003\u0002\u0002\u0002\u00a4\u00a7\u0003\u0002\u0002\u0002\u00a5\u00a3",
    "\u0003\u0002\u0002\u0002\u00a5\u00a6\u0003\u0002\u0002\u0002\u00a6\u001b",
    "\u0003\u0002\u0002\u0002\u00a7\u00a5\u0003\u0002\u0002\u0002\u00a8\u00a9",
    "\u0007R\u0002\u0002\u00a9\u00ab\u0005\u000e\b\u0002\u00aa\u00ac\u0007",
    "S\u0002\u0002\u00ab\u00aa\u0003\u0002\u0002\u0002\u00ab\u00ac\u0003",
    "\u0002\u0002\u0002\u00ac\u00ad\u0003\u0002\u0002\u0002\u00ad\u00af\u0005",
    "\u0006\u0004\u0002\u00ae\u00b0\u0005\u001e\u0010\u0002\u00af\u00ae\u0003",
    "\u0002\u0002\u0002\u00af\u00b0\u0003\u0002\u0002\u0002\u00b0\u00b2\u0003",
    "\u0002\u0002\u0002\u00b1\u00b3\u0005\"\u0012\u0002\u00b2\u00b1\u0003",
    "\u0002\u0002\u0002\u00b2\u00b3\u0003\u0002\u0002\u0002\u00b3\u001d\u0003",
    "\u0002\u0002\u0002\u00b4\u00b6\u0005 \u0011\u0002\u00b5\u00b4\u0003",
    "\u0002\u0002\u0002\u00b6\u00b7\u0003\u0002\u0002\u0002\u00b7\u00b5\u0003",
    "\u0002\u0002\u0002\u00b7\u00b8\u0003\u0002\u0002\u0002\u00b8\u001f\u0003",
    "\u0002\u0002\u0002\u00b9\u00ba\u0007T\u0002\u0002\u00ba\u00bc\u0005",
    "\u000e\b\u0002\u00bb\u00bd\u0007S\u0002\u0002\u00bc\u00bb\u0003\u0002",
    "\u0002\u0002\u00bc\u00bd\u0003\u0002\u0002\u0002\u00bd\u00be\u0003\u0002",
    "\u0002\u0002\u00be\u00bf\u0005\u0006\u0004\u0002\u00bf!\u0003\u0002",
    "\u0002\u0002\u00c0\u00c1\u0007U\u0002\u0002\u00c1\u00c2\u0005\u0006",
    "\u0004\u0002\u00c2#\u0003\u0002\u0002\u0002\u00c3\u00c4\u0007t\u0002",
    "\u0002\u00c4\u00c5\t\u0003\u0002\u0002\u00c5\u00d1\u0005\u000e\b\u0002",
    "\u00c6\u00c7\u0007t\u0002\u0002\u00c7\u00c8\u0007\f\u0002\u0002\u00c8",
    "\u00c9\u0007t\u0002\u0002\u00c9\u00ca\t\u0003\u0002\u0002\u00ca\u00d1",
    "\u0005\u000e\b\u0002\u00cb\u00cc\u0007t\u0002\u0002\u00cc\u00cd\u0007",
    ":\u0002\u0002\u00cd\u00ce\u0007t\u0002\u0002\u00ce\u00cf\t\u0003\u0002",
    "\u0002\u00cf\u00d1\u0005\u000e\b\u0002\u00d0\u00c3\u0003\u0002\u0002",
    "\u0002\u00d0\u00c6\u0003\u0002\u0002\u0002\u00d0\u00cb\u0003\u0002\u0002",
    "\u0002\u00d1%\u0003\u0002\u0002\u0002\u00d2\u00d3\u0007t\u0002\u0002",
    "\u00d3\u00d4\t\u0004\u0002\u0002\u00d4\u00d5\u0005\u000e\b\u0002\u00d5",
    "\u00d6\u0007Q\u0002\u0002\u00d6\u00d7\u0005\u000e\b\u0002\u00d7\'\u0003",
    "\u0002\u0002\u0002\u00d8\u00d9\u0007I\u0002\u0002\u00d9\u00db\u0005",
    "\u000e\b\u0002\u00da\u00dc\u0007J\u0002\u0002\u00db\u00da\u0003\u0002",
    "\u0002\u0002\u00db\u00dc\u0003\u0002\u0002\u0002\u00dc\u00dd\u0003\u0002",
    "\u0002\u0002\u00dd\u00de\u0005\u0006\u0004\u0002\u00de\u011b\u0003\u0002",
    "\u0002\u0002\u00df\u00e0\t\u0005\u0002\u0002\u00e0\u00e1\u0005\u0006",
    "\u0004\u0002\u00e1\u00e2\u0007H\u0002\u0002\u00e2\u00e3\u0005\u000e",
    "\b\u0002\u00e3\u011b\u0003\u0002\u0002\u0002\u00e4\u00e6\u0007I\u0002",
    "\u0002\u00e5\u00e4\u0003\u0002\u0002\u0002\u00e5\u00e6\u0003\u0002\u0002",
    "\u0002\u00e6\u00e7\u0003\u0002\u0002\u0002\u00e7\u00e8\u0007H\u0002",
    "\u0002\u00e8\u00ea\u0005\u000e\b\u0002\u00e9\u00eb\t\u0005\u0002\u0002",
    "\u00ea\u00e9\u0003\u0002\u0002\u0002\u00ea\u00eb\u0003\u0002\u0002\u0002",
    "\u00eb\u00ec\u0003\u0002\u0002\u0002\u00ec\u00ed\u0005\u0006\u0004\u0002",
    "\u00ed\u011b\u0003\u0002\u0002\u0002\u00ee\u00ef\u0007L\u0002\u0002",
    "\u00ef\u00f1\u0005&\u0014\u0002\u00f0\u00f2\t\u0005\u0002\u0002\u00f1",
    "\u00f0\u0003\u0002\u0002\u0002\u00f1\u00f2\u0003\u0002\u0002\u0002\u00f2",
    "\u00f3\u0003\u0002\u0002\u0002\u00f3\u00f4\u0005\u0006\u0004\u0002\u00f4",
    "\u011b\u0003\u0002\u0002\u0002\u00f5\u00f6\u0007L\u0002\u0002\u00f6",
    "\u00f7\u0007\u0007\u0002\u0002\u00f7\u00f8\u0005&\u0014\u0002\u00f8",
    "\u00fa\u0007\b\u0002\u0002\u00f9\u00fb\t\u0005\u0002\u0002\u00fa\u00f9",
    "\u0003\u0002\u0002\u0002\u00fa\u00fb\u0003\u0002\u0002\u0002\u00fb\u00fc",
    "\u0003\u0002\u0002\u0002\u00fc\u00fd\u0005\u0006\u0004\u0002\u00fd\u011b",
    "\u0003\u0002\u0002\u0002\u00fe\u0100\u0007L\u0002\u0002\u00ff\u0101",
    "\u0007M\u0002\u0002\u0100\u00ff\u0003\u0002\u0002\u0002\u0100\u0101",
    "\u0003\u0002\u0002\u0002\u0101\u0104\u0003\u0002\u0002\u0002\u0102\u0104",
    "\u0007N\u0002\u0002\u0103\u00fe\u0003\u0002\u0002\u0002\u0103\u0102",
    "\u0003\u0002\u0002\u0002\u0104\u0105\u0003\u0002\u0002\u0002\u0105\u0107",
    "\u0005$\u0013\u0002\u0106\u0108\t\u0005\u0002\u0002\u0107\u0106\u0003",
    "\u0002\u0002\u0002\u0107\u0108\u0003\u0002\u0002\u0002\u0108\u0109\u0003",
    "\u0002\u0002\u0002\u0109\u010a\u0005\u0006\u0004\u0002\u010a\u011b\u0003",
    "\u0002\u0002\u0002\u010b\u010d\u0007L\u0002\u0002\u010c\u010e\u0007",
    "M\u0002\u0002\u010d\u010c\u0003\u0002\u0002\u0002\u010d\u010e\u0003",
    "\u0002\u0002\u0002\u010e\u0111\u0003\u0002\u0002\u0002\u010f\u0111\u0007",
    "N\u0002\u0002\u0110\u010b\u0003\u0002\u0002\u0002\u0110\u010f\u0003",
    "\u0002\u0002\u0002\u0111\u0112\u0003\u0002\u0002\u0002\u0112\u0113\u0007",
    "\u0007\u0002\u0002\u0113\u0114\u0005$\u0013\u0002\u0114\u0116\u0007",
    "\b\u0002\u0002\u0115\u0117\t\u0005\u0002\u0002\u0116\u0115\u0003\u0002",
    "\u0002\u0002\u0116\u0117\u0003\u0002\u0002\u0002\u0117\u0118\u0003\u0002",
    "\u0002\u0002\u0118\u0119\u0005\u0006\u0004\u0002\u0119\u011b\u0003\u0002",
    "\u0002\u0002\u011a\u00d8\u0003\u0002\u0002\u0002\u011a\u00df\u0003\u0002",
    "\u0002\u0002\u011a\u00e5\u0003\u0002\u0002\u0002\u011a\u00ee\u0003\u0002",
    "\u0002\u0002\u011a\u00f5\u0003\u0002\u0002\u0002\u011a\u0103\u0003\u0002",
    "\u0002\u0002\u011a\u0110\u0003\u0002\u0002\u0002\u011b)\u0003\u0002",
    "\u0002\u0002\u011c\u011d\u0007V\u0002\u0002\u011d\u011e\u0005\u000e",
    "\b\u0002\u011e+\u0003\u0002\u0002\u0002\u011f\u0124\u0005@!\u0002\u0120",
    "\u0121\u0007\f\u0002\u0002\u0121\u0123\u0005@!\u0002\u0122\u0120\u0003",
    "\u0002\u0002\u0002\u0123\u0126\u0003\u0002\u0002\u0002\u0124\u0122\u0003",
    "\u0002\u0002\u0002\u0124\u0125\u0003\u0002\u0002\u0002\u0125-\u0003",
    "\u0002\u0002\u0002\u0126\u0124\u0003\u0002\u0002\u0002\u0127\u0128\u0007",
    "X\u0002\u0002\u0128\u0129\u0007t\u0002\u0002\u0129\u012b\u0007\u0007",
    "\u0002\u0002\u012a\u012c\u0005,\u0017\u0002\u012b\u012a\u0003\u0002",
    "\u0002\u0002\u012b\u012c\u0003\u0002\u0002\u0002\u012c\u012d\u0003\u0002",
    "\u0002\u0002\u012d\u012e\u0007\b\u0002\u0002\u012e\u012f\u0005B\"\u0002",
    "\u012f/\u0003\u0002\u0002\u0002\u0130\u0139\u0007\u0007\u0002\u0002",
    "\u0131\u0136\u0005\u000e\b\u0002\u0132\u0133\u0007\f\u0002\u0002\u0133",
    "\u0135\u0005\u000e\b\u0002\u0134\u0132\u0003\u0002\u0002\u0002\u0135",
    "\u0138\u0003\u0002\u0002\u0002\u0136\u0134\u0003\u0002\u0002\u0002\u0136",
    "\u0137\u0003\u0002\u0002\u0002\u0137\u013a\u0003\u0002\u0002\u0002\u0138",
    "\u0136\u0003\u0002\u0002\u0002\u0139\u0131\u0003\u0002\u0002\u0002\u0139",
    "\u013a\u0003\u0002\u0002\u0002\u013a\u013b\u0003\u0002\u0002\u0002\u013b",
    "\u013c\u0007\b\u0002\u0002\u013c1\u0003\u0002\u0002\u0002\u013d\u013e",
    "\u0007i\u0002\u0002\u013e\u0141\u0007t\u0002\u0002\u013f\u0140\u0007",
    "j\u0002\u0002\u0140\u0142\u0007t\u0002\u0002\u0141\u013f\u0003\u0002",
    "\u0002\u0002\u0141\u0142\u0003\u0002\u0002\u0002\u0142\u0143\u0003\u0002",
    "\u0002\u0002\u0143\u014f\u0007\t\u0002\u0002\u0144\u0145\u0007k\u0002",
    "\u0002\u0145\u0147\u0007\u000f\u0002\u0002\u0146\u0144\u0003\u0002\u0002",
    "\u0002\u0146\u0147\u0003\u0002\u0002\u0002\u0147\u014d\u0003\u0002\u0002",
    "\u0002\u0148\u0149\u0007\t\u0002\u0002\u0149\u014a\u00054\u001b\u0002",
    "\u014a\u014b\u0007\n\u0002\u0002\u014b\u014e\u0003\u0002\u0002\u0002",
    "\u014c\u014e\u00054\u001b\u0002\u014d\u0148\u0003\u0002\u0002\u0002",
    "\u014d\u014c\u0003\u0002\u0002\u0002\u014e\u0150\u0003\u0002\u0002\u0002",
    "\u014f\u0146\u0003\u0002\u0002\u0002\u014f\u0150\u0003\u0002\u0002\u0002",
    "\u0150\u015c\u0003\u0002\u0002\u0002\u0151\u0152\u0007l\u0002\u0002",
    "\u0152\u0154\u0007\u000f\u0002\u0002\u0153\u0151\u0003\u0002\u0002\u0002",
    "\u0153\u0154\u0003\u0002\u0002\u0002\u0154\u015a\u0003\u0002\u0002\u0002",
    "\u0155\u015b\u00058\u001d\u0002\u0156\u0157\u0007\t\u0002\u0002\u0157",
    "\u0158\u00058\u001d\u0002\u0158\u0159\u0007\n\u0002\u0002\u0159\u015b",
    "\u0003\u0002\u0002\u0002\u015a\u0155\u0003\u0002\u0002\u0002\u015a\u0156",
    "\u0003\u0002\u0002\u0002\u015b\u015d\u0003\u0002\u0002\u0002\u015c\u0153",
    "\u0003\u0002\u0002\u0002\u015c\u015d\u0003\u0002\u0002\u0002\u015d\u015e",
    "\u0003\u0002\u0002\u0002\u015e\u015f\u0007\n\u0002\u0002\u015f3\u0003",
    "\u0002\u0002\u0002\u0160\u0162\u0007t\u0002\u0002\u0161\u0163\u0007",
    "\f\u0002\u0002\u0162\u0161\u0003\u0002\u0002\u0002\u0162\u0163\u0003",
    "\u0002\u0002\u0002\u0163\u0165\u0003\u0002\u0002\u0002\u0164\u0160\u0003",
    "\u0002\u0002\u0002\u0165\u0166\u0003\u0002\u0002\u0002\u0166\u0164\u0003",
    "\u0002\u0002\u0002\u0166\u0167\u0003\u0002\u0002\u0002\u01675\u0003",
    "\u0002\u0002\u0002\u0168\u016a\t\u0006\u0002\u0002\u0169\u0168\u0003",
    "\u0002\u0002\u0002\u0169\u016a\u0003\u0002\u0002\u0002\u016a\u016b\u0003",
    "\u0002\u0002\u0002\u016b\u016c\t\u0007\u0002\u0002\u016c\u016e\u0007",
    "\u0007\u0002\u0002\u016d\u016f\u0005,\u0017\u0002\u016e\u016d\u0003",
    "\u0002\u0002\u0002\u016e\u016f\u0003\u0002\u0002\u0002\u016f\u0170\u0003",
    "\u0002\u0002\u0002\u0170\u0171\u0007\b\u0002\u0002\u0171\u0172\u0005",
    "B\"\u0002\u01727\u0003\u0002\u0002\u0002\u0173\u0175\u00056\u001c\u0002",
    "\u0174\u0173\u0003\u0002\u0002\u0002\u0175\u0176\u0003\u0002\u0002\u0002",
    "\u0176\u0174\u0003\u0002\u0002\u0002\u0176\u0177\u0003\u0002\u0002\u0002",
    "\u01779\u0003\u0002\u0002\u0002\u0178\u0179\u0007h\u0002\u0002\u0179",
    "\u017a\u0007t\u0002\u0002\u017a\u017b\u00050\u0019\u0002\u017b;\u0003",
    "\u0002\u0002\u0002\u017c\u017e\u0007\u0005\u0002\u0002\u017d\u017f\u0005",
    "\u000e\b\u0002\u017e\u017d\u0003\u0002\u0002\u0002\u017e\u017f\u0003",
    "\u0002\u0002\u0002\u017f\u0180\u0003\u0002\u0002\u0002\u0180\u0181\u0007",
    "\u0006\u0002\u0002\u0181=\u0003\u0002\u0002\u0002\u0182\u0184\u0005",
    "<\u001f\u0002\u0183\u0182\u0003\u0002\u0002\u0002\u0184\u0185\u0003",
    "\u0002\u0002\u0002\u0185\u0183\u0003\u0002\u0002\u0002\u0185\u0186\u0003",
    "\u0002\u0002\u0002\u0186?\u0003\u0002\u0002\u0002\u0187\u018a\u0007",
    "t\u0002\u0002\u0188\u0189\u0007\r\u0002\u0002\u0189\u018b\u0005\u000e",
    "\b\u0002\u018a\u0188\u0003\u0002\u0002\u0002\u018a\u018b\u0003\u0002",
    "\u0002\u0002\u018bA\u0003\u0002\u0002\u0002\u018c\u018f\u0005\b\u0005",
    "\u0002\u018d\u018f\u0005\u0006\u0004\u0002\u018e\u018c\u0003\u0002\u0002",
    "\u0002\u018e\u018d\u0003\u0002\u0002\u0002\u018fC\u0003\u0002\u0002",
    "\u0002\u0190\u0191\t\b\u0002\u0002\u0191E\u0003\u0002\u0002\u0002\u0192",
    "\u0196\u0005\\/\u0002\u0193\u0196\u0007;\u0002\u0002\u0194\u0196\u0007",
    "E\u0002\u0002\u0195\u0192\u0003\u0002\u0002\u0002\u0195\u0193\u0003",
    "\u0002\u0002\u0002\u0195\u0194\u0003\u0002\u0002\u0002\u0196G\u0003",
    "\u0002\u0002\u0002\u0197\u0198\u0007Y\u0002\u0002\u0198\u019a\u0005",
    "> \u0002\u0199\u019b\u00050\u0019\u0002\u019a\u0199\u0003\u0002\u0002",
    "\u0002\u019a\u019b\u0003\u0002\u0002\u0002\u019bI\u0003\u0002\u0002",
    "\u0002\u019c\u019d\u0007p\u0002\u0002\u019d\u019e\u00050\u0019\u0002",
    "\u019eK\u0003\u0002\u0002\u0002\u019f\u01a8\u0007\u0005\u0002\u0002",
    "\u01a0\u01a5\u0005\u000e\b\u0002\u01a1\u01a2\u0007\f\u0002\u0002\u01a2",
    "\u01a4\u0005\u000e\b\u0002\u01a3\u01a1\u0003\u0002\u0002\u0002\u01a4",
    "\u01a7\u0003\u0002\u0002\u0002\u01a5\u01a3\u0003\u0002\u0002\u0002\u01a5",
    "\u01a6\u0003\u0002\u0002\u0002\u01a6\u01a9\u0003\u0002\u0002\u0002\u01a7",
    "\u01a5\u0003\u0002\u0002\u0002\u01a8\u01a0\u0003\u0002\u0002\u0002\u01a8",
    "\u01a9\u0003\u0002\u0002\u0002\u01a9\u01aa\u0003\u0002\u0002\u0002\u01aa",
    "\u01ab\u0007\u0006\u0002\u0002\u01abM\u0003\u0002\u0002\u0002\u01ac",
    "\u01ba\u0007\t\u0002\u0002\u01ad\u01ae\u0005Z.\u0002\u01ae\u01af\u0007",
    "\u000f\u0002\u0002\u01af\u01b7\u0005\u000e\b\u0002\u01b0\u01b1\u0007",
    "\f\u0002\u0002\u01b1\u01b2\u0005Z.\u0002\u01b2\u01b3\u0007\u000f\u0002",
    "\u0002\u01b3\u01b4\u0005\u000e\b\u0002\u01b4\u01b6\u0003\u0002\u0002",
    "\u0002\u01b5\u01b0\u0003\u0002\u0002\u0002\u01b6\u01b9\u0003\u0002\u0002",
    "\u0002\u01b7\u01b5\u0003\u0002\u0002\u0002\u01b7\u01b8\u0003\u0002\u0002",
    "\u0002\u01b8\u01bb\u0003\u0002\u0002\u0002\u01b9\u01b7\u0003\u0002\u0002",
    "\u0002\u01ba\u01ad\u0003\u0002\u0002\u0002\u01ba\u01bb\u0003\u0002\u0002",
    "\u0002\u01bb\u01bc\u0003\u0002\u0002\u0002\u01bc\u01bd\u0007\n\u0002",
    "\u0002\u01bdO\u0003\u0002\u0002\u0002\u01be\u01c7\u0005V,\u0002\u01bf",
    "\u01c7\u0005R*\u0002\u01c0\u01c7\u0005T+\u0002\u01c1\u01c7\u0005X-\u0002",
    "\u01c2\u01c7\u0005L\'\u0002\u01c3\u01c7\u0005N(\u0002\u01c4\u01c7\u0005",
    "H%\u0002\u01c5\u01c7\u0005J&\u0002\u01c6\u01be\u0003\u0002\u0002\u0002",
    "\u01c6\u01bf\u0003\u0002\u0002\u0002\u01c6\u01c0\u0003\u0002\u0002\u0002",
    "\u01c6\u01c1\u0003\u0002\u0002\u0002\u01c6\u01c2\u0003\u0002\u0002\u0002",
    "\u01c6\u01c3\u0003\u0002\u0002\u0002\u01c6\u01c4\u0003\u0002\u0002\u0002",
    "\u01c6\u01c5\u0003\u0002\u0002\u0002\u01c7Q\u0003\u0002\u0002\u0002",
    "\u01c8\u01c9\u0007E\u0002\u0002\u01c9S\u0003\u0002\u0002\u0002\u01ca",
    "\u01cb\u0007u\u0002\u0002\u01cbU\u0003\u0002\u0002\u0002\u01cc\u01cd",
    "\u0007;\u0002\u0002\u01cdW\u0003\u0002\u0002\u0002\u01ce\u01cf\t\t\u0002",
    "\u0002\u01cfY\u0003\u0002\u0002\u0002\u01d0\u01d3\u0007t\u0002\u0002",
    "\u01d1\u01d3\u0005F$\u0002\u01d2\u01d0\u0003\u0002\u0002\u0002\u01d2",
    "\u01d1\u0003\u0002\u0002\u0002\u01d3[\u0003\u0002\u0002\u0002\u01d4",
    "\u01e1\u0003\u0002\u0002\u0002\u01d5\u01e1\u0007U\u0002\u0002\u01d6",
    "\u01e1\u0007S\u0002\u0002\u01d7\u01e1\u0007V\u0002\u0002\u01d8\u01e1",
    "\u0007H\u0002\u0002\u01d9\u01e1\u0007X\u0002\u0002\u01da\u01e1\u0007",
    "R\u0002\u0002\u01db\u01e1\u0007Y\u0002\u0002\u01dc\u01e1\u0007p\u0002",
    "\u0002\u01dd\u01e1\u0007s\u0002\u0002\u01de\u01e1\u0007l\u0002\u0002",
    "\u01df\u01e1\u0007k\u0002\u0002\u01e0\u01d4\u0003\u0002\u0002\u0002",
    "\u01e0\u01d5\u0003\u0002\u0002\u0002\u01e0\u01d6\u0003\u0002\u0002\u0002",
    "\u01e0\u01d7\u0003\u0002\u0002\u0002\u01e0\u01d8\u0003\u0002\u0002\u0002",
    "\u01e0\u01d9\u0003\u0002\u0002\u0002\u01e0\u01da\u0003\u0002\u0002\u0002",
    "\u01e0\u01db\u0003\u0002\u0002\u0002\u01e0\u01dc\u0003\u0002\u0002\u0002",
    "\u01e0\u01dd\u0003\u0002\u0002\u0002\u01e0\u01de\u0003\u0002\u0002\u0002",
    "\u01e0\u01df\u0003\u0002\u0002\u0002\u01e1]\u0003\u0002\u0002\u0002",
    "9dos\u0085\u0092\u0096\u009e\u00a5\u00ab\u00af\u00b2\u00b7\u00bc\u00d0",
    "\u00db\u00e5\u00ea\u00f1\u00fa\u0100\u0103\u0107\u010d\u0110\u0116\u011a",
    "\u0124\u012b\u0136\u0139\u0141\u0146\u014d\u014f\u0153\u015a\u015c\u0162",
    "\u0166\u0169\u016e\u0176\u017e\u0185\u018a\u018e\u0195\u019a\u01a5\u01a8",
    "\u01b7\u01ba\u01c6\u01d2\u01e0"].join("");


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
                            null, null, null, "'sub'", null, null, null, 
                            null, null, null, "'chr'", "'ord'", null, null, 
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
                             "Repeat", "Times", "Do", "For", "Each", "ForEach", 
                             "In", "Of", "To", "If", "Then", "ElseIf", "Else", 
                             "Return", "Method", "Function_", "Vector", 
                             "Delete", "NumberOf", "IndexOf", "Sub", "Lower", 
                             "Upper", "Math", "Min", "Max", "Random", "Chr", 
                             "Ord", "Prompt", "Convert", "New_", "Class_", 
                             "Extends", "Attributes", "Methods", "Constructor", 
                             "Super", "InstanceOf", "Map", "Get", "Set", 
                             "Var_", "Identifier", "StringLiteral", "WhiteSpaces", 
                             "LineTerminator" ];
    static ruleNames = [ "program", "statementList", "statement", "block", 
                         "stepStatement", "printStatement", "expression", 
                         "basicFunction0", "basicFunction1", "basicFunction2", 
                         "basicFunction3", "basicFunction", "expressionSequence", 
                         "ifStatement", "elseIfs", "elseIf", "elseStatement", 
                         "iteratorIndexes", "iteratorRange", "iterationStatement", 
                         "returnStatement", "formalParameterList", "functionDeclaration", 
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
    			return this.precpred(this._ctx, 2);
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
	        } while(_la===SintesisParser.OpenBrace || ((((_la - 68)) & ~0x1f) == 0 && ((1 << (_la - 68)) & ((1 << (SintesisParser.Step - 68)) | (1 << (SintesisParser.Print - 68)) | (1 << (SintesisParser.While - 68)) | (1 << (SintesisParser.Repeat - 68)) | (1 << (SintesisParser.Do - 68)) | (1 << (SintesisParser.For - 68)) | (1 << (SintesisParser.ForEach - 68)) | (1 << (SintesisParser.If - 68)) | (1 << (SintesisParser.Return - 68)) | (1 << (SintesisParser.Function_ - 68)))) !== 0) || _la===SintesisParser.Class_ || _la===SintesisParser.Identifier);
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
	        switch(this._input.LA(1)) {
	        case SintesisParser.OpenBrace:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 100;
	            this.block();
	            break;
	        case SintesisParser.Step:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 101;
	            this.stepStatement();
	            break;
	        case SintesisParser.Print:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 102;
	            this.printStatement();
	            break;
	        case SintesisParser.If:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 103;
	            this.ifStatement();
	            break;
	        case SintesisParser.While:
	        case SintesisParser.Repeat:
	        case SintesisParser.Do:
	        case SintesisParser.For:
	        case SintesisParser.ForEach:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 104;
	            this.iterationStatement();
	            break;
	        case SintesisParser.Return:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 105;
	            this.returnStatement();
	            break;
	        case SintesisParser.Class_:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 106;
	            this.classDeclaration();
	            break;
	        case SintesisParser.Function_:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 107;
	            this.functionDeclaration();
	            break;
	        case SintesisParser.Identifier:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 108;
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
	        this.state = 111;
	        this.match(SintesisParser.OpenBrace);
	        this.state = 113;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===SintesisParser.OpenBrace || ((((_la - 68)) & ~0x1f) == 0 && ((1 << (_la - 68)) & ((1 << (SintesisParser.Step - 68)) | (1 << (SintesisParser.Print - 68)) | (1 << (SintesisParser.While - 68)) | (1 << (SintesisParser.Repeat - 68)) | (1 << (SintesisParser.Do - 68)) | (1 << (SintesisParser.For - 68)) | (1 << (SintesisParser.ForEach - 68)) | (1 << (SintesisParser.If - 68)) | (1 << (SintesisParser.Return - 68)) | (1 << (SintesisParser.Function_ - 68)))) !== 0) || _la===SintesisParser.Class_ || _la===SintesisParser.Identifier) {
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
	    try {
	        this.enterOuterAlt(localctx, 1);
	        localctx = new ExpIdentifierContext(this, localctx);
	        this._ctx = localctx;
	        _prevctx = localctx;

	        this.state = 124;
	        this.match(SintesisParser.Identifier);
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 131;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,3,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new ExpMembeDotContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                this.pushNewRecursionContext(localctx, _startState, SintesisParser.RULE_expression);
	                this.state = 126;
	                if (!( this.precpred(this._ctx, 2))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                }
	                this.state = 127;
	                this.match(SintesisParser.Dot);
	                this.state = 128;
	                this.match(SintesisParser.Identifier); 
	            }
	            this.state = 133;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,3,this._ctx);
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
	        this.state = 134;
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
	        this.state = 144;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case SintesisParser.NumberOf:
	            localctx = new NumberOfContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 136;
	            this.match(SintesisParser.NumberOf);
	            break;
	        case SintesisParser.Lower:
	            localctx = new LowerContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 137;
	            this.match(SintesisParser.Lower);
	            break;
	        case SintesisParser.Upper:
	            localctx = new UpperContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 138;
	            this.match(SintesisParser.Upper);
	            break;
	        case SintesisParser.Max:
	            localctx = new MaxContext(this, localctx);
	            this.enterOuterAlt(localctx, 4);
	            this.state = 139;
	            this.match(SintesisParser.Max);
	            break;
	        case SintesisParser.Min:
	            localctx = new MinContext(this, localctx);
	            this.enterOuterAlt(localctx, 5);
	            this.state = 140;
	            this.match(SintesisParser.Min);
	            break;
	        case SintesisParser.Ord:
	            localctx = new OrdContext(this, localctx);
	            this.enterOuterAlt(localctx, 6);
	            this.state = 141;
	            this.match(SintesisParser.Ord);
	            break;
	        case SintesisParser.Chr:
	            localctx = new ChrContext(this, localctx);
	            this.enterOuterAlt(localctx, 7);
	            this.state = 142;
	            this.match(SintesisParser.Chr);
	            break;
	        case SintesisParser.Prompt:
	            localctx = new PromptContext(this, localctx);
	            this.enterOuterAlt(localctx, 8);
	            this.state = 143;
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
	        this.state = 148;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case SintesisParser.IndexOf:
	            localctx = new IndexOfContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 146;
	            this.match(SintesisParser.IndexOf);
	            break;
	        case SintesisParser.Convert:
	            localctx = new ConvertContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 147;
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
	        this.state = 150;
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
	        this.state = 156;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case SintesisParser.Random:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 152;
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
	            this.state = 153;
	            this.basicFunction1();
	            break;
	        case SintesisParser.IndexOf:
	        case SintesisParser.Convert:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 154;
	            this.basicFunction2();
	            break;
	        case SintesisParser.Sub:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 155;
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
	        this.state = 158;
	        this.expression(0);
	        this.state = 163;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===SintesisParser.Comma) {
	            this.state = 159;
	            this.match(SintesisParser.Comma);
	            this.state = 160;
	            this.expression(0);
	            this.state = 165;
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
	        this.state = 166;
	        this.match(SintesisParser.If);
	        this.state = 167;
	        localctx.exp = this.expression(0);
	        this.state = 169;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===SintesisParser.Then) {
	            this.state = 168;
	            this.match(SintesisParser.Then);
	        }

	        this.state = 171;
	        localctx.stmt = this.statement();
	        this.state = 173;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
	        if(la_===1) {
	            this.state = 172;
	            localctx.elseifs = this.elseIfs();

	        }
	        this.state = 176;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
	        if(la_===1) {
	            this.state = 175;
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
	        this.state = 179; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 178;
	        		this.elseIf();
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 181; 
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
	    this.enterRule(localctx, 30, SintesisParser.RULE_elseIf);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 183;
	        this.match(SintesisParser.ElseIf);
	        this.state = 184;
	        localctx.exp = this.expression(0);
	        this.state = 186;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===SintesisParser.Then) {
	            this.state = 185;
	            this.match(SintesisParser.Then);
	        }

	        this.state = 188;
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
	        this.state = 190;
	        this.match(SintesisParser.Else);
	        this.state = 191;
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
	        this.state = 206;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,13,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 193;
	            localctx.idv = this.match(SintesisParser.Identifier);
	            this.state = 194;
	            localctx.op = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!(_la===SintesisParser.In || _la===SintesisParser.Of)) {
	                localctx.op = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 195;
	            localctx.coll = this.expression(0);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 196;
	            localctx.idv = this.match(SintesisParser.Identifier);
	            this.state = 197;
	            this.match(SintesisParser.Comma);
	            this.state = 198;
	            localctx.idk = this.match(SintesisParser.Identifier);
	            this.state = 199;
	            localctx.op = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!(_la===SintesisParser.In || _la===SintesisParser.Of)) {
	                localctx.op = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 200;
	            localctx.coll = this.expression(0);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 201;
	            localctx.idk = this.match(SintesisParser.Identifier);
	            this.state = 202;
	            this.match(SintesisParser.ARROW);
	            this.state = 203;
	            localctx.idv = this.match(SintesisParser.Identifier);
	            this.state = 204;
	            localctx.op = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!(_la===SintesisParser.In || _la===SintesisParser.Of)) {
	                localctx.op = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 205;
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
	        this.state = 208;
	        localctx.id = this.match(SintesisParser.Identifier);
	        this.state = 209;
	        _la = this._input.LA(1);
	        if(!(_la===SintesisParser.Assign || _la===SintesisParser.In)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 210;
	        localctx.start = this.expression(0);
	        this.state = 211;
	        this.match(SintesisParser.To);
	        this.state = 212;
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
	        this.state = 280;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,25,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new RepeatStatementContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 214;
	            this.match(SintesisParser.Repeat);
	            this.state = 215;
	            localctx.exp = this.expression(0);
	            this.state = 217;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===SintesisParser.Times) {
	                this.state = 216;
	                this.match(SintesisParser.Times);
	            }

	            this.state = 219;
	            localctx.stmt = this.statement();
	            break;

	        case 2:
	            localctx = new RepeatWhileStatementContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 221;
	            _la = this._input.LA(1);
	            if(!(_la===SintesisParser.Repeat || _la===SintesisParser.Do)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 222;
	            localctx.stmt = this.statement();
	            this.state = 223;
	            this.match(SintesisParser.While);
	            this.state = 224;
	            localctx.exp = this.expression(0);
	            break;

	        case 3:
	            localctx = new WhileRepeatStatementContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 227;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===SintesisParser.Repeat) {
	                this.state = 226;
	                this.match(SintesisParser.Repeat);
	            }

	            this.state = 229;
	            this.match(SintesisParser.While);
	            this.state = 230;
	            localctx.exp = this.expression(0);
	            this.state = 232;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,16,this._ctx);
	            if(la_===1) {
	                this.state = 231;
	                _la = this._input.LA(1);
	                if(!(_la===SintesisParser.Repeat || _la===SintesisParser.Do)) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }

	            }
	            this.state = 234;
	            localctx.stmt = this.statement();
	            break;

	        case 4:
	            localctx = new ForFromToStatementContext(this, localctx);
	            this.enterOuterAlt(localctx, 4);
	            this.state = 236;
	            this.match(SintesisParser.For);
	            this.state = 237;
	            localctx.iter = this.iteratorRange();
	            this.state = 239;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,17,this._ctx);
	            if(la_===1) {
	                this.state = 238;
	                _la = this._input.LA(1);
	                if(!(_la===SintesisParser.Repeat || _la===SintesisParser.Do)) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }

	            }
	            this.state = 241;
	            localctx.stmt = this.statement();
	            break;

	        case 5:
	            localctx = new ForFromToStatement2Context(this, localctx);
	            this.enterOuterAlt(localctx, 5);
	            this.state = 243;
	            this.match(SintesisParser.For);
	            this.state = 244;
	            this.match(SintesisParser.OpenParen);
	            this.state = 245;
	            localctx.iter = this.iteratorRange();
	            this.state = 246;
	            this.match(SintesisParser.CloseParen);
	            this.state = 248;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,18,this._ctx);
	            if(la_===1) {
	                this.state = 247;
	                _la = this._input.LA(1);
	                if(!(_la===SintesisParser.Repeat || _la===SintesisParser.Do)) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }

	            }
	            this.state = 250;
	            localctx.stmt = this.statement();
	            break;

	        case 6:
	            localctx = new ForEachStatementContext(this, localctx);
	            this.enterOuterAlt(localctx, 6);
	            this.state = 257;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case SintesisParser.For:
	                this.state = 252;
	                this.match(SintesisParser.For);
	                this.state = 254;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                if(_la===SintesisParser.Each) {
	                    this.state = 253;
	                    this.match(SintesisParser.Each);
	                }

	                break;
	            case SintesisParser.ForEach:
	                this.state = 256;
	                this.match(SintesisParser.ForEach);
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 259;
	            localctx.iter = this.iteratorIndexes();
	            this.state = 261;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,21,this._ctx);
	            if(la_===1) {
	                this.state = 260;
	                _la = this._input.LA(1);
	                if(!(_la===SintesisParser.Repeat || _la===SintesisParser.Do)) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }

	            }
	            this.state = 263;
	            localctx.stmt = this.statement();
	            break;

	        case 7:
	            localctx = new ForEachStatement2Context(this, localctx);
	            this.enterOuterAlt(localctx, 7);
	            this.state = 270;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case SintesisParser.For:
	                this.state = 265;
	                this.match(SintesisParser.For);
	                this.state = 267;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                if(_la===SintesisParser.Each) {
	                    this.state = 266;
	                    this.match(SintesisParser.Each);
	                }

	                break;
	            case SintesisParser.ForEach:
	                this.state = 269;
	                this.match(SintesisParser.ForEach);
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 272;
	            this.match(SintesisParser.OpenParen);
	            this.state = 273;
	            localctx.iter = this.iteratorIndexes();
	            this.state = 274;
	            this.match(SintesisParser.CloseParen);
	            this.state = 276;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,24,this._ctx);
	            if(la_===1) {
	                this.state = 275;
	                _la = this._input.LA(1);
	                if(!(_la===SintesisParser.Repeat || _la===SintesisParser.Do)) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }

	            }
	            this.state = 278;
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
	        this.state = 282;
	        this.match(SintesisParser.Return);
	        this.state = 283;
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



	formalParameterList() {
	    let localctx = new FormalParameterListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, SintesisParser.RULE_formalParameterList);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 285;
	        this.formalParameterArg();
	        this.state = 290;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===SintesisParser.Comma) {
	            this.state = 286;
	            this.match(SintesisParser.Comma);
	            this.state = 287;
	            this.formalParameterArg();
	            this.state = 292;
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



	functionDeclaration() {
	    let localctx = new FunctionDeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 44, SintesisParser.RULE_functionDeclaration);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 293;
	        this.match(SintesisParser.Function_);
	        this.state = 294;
	        localctx.id = this.match(SintesisParser.Identifier);
	        this.state = 295;
	        this.match(SintesisParser.OpenParen);
	        this.state = 297;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===SintesisParser.Identifier) {
	            this.state = 296;
	            localctx.pl = this.formalParameterList();
	        }

	        this.state = 299;
	        this.match(SintesisParser.CloseParen);
	        this.state = 300;
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



	arguments() {
	    let localctx = new ArgumentsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 46, SintesisParser.RULE_arguments);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 302;
	        this.match(SintesisParser.OpenParen);
	        this.state = 311;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===SintesisParser.Identifier) {
	            this.state = 303;
	            this.expression(0);
	            this.state = 308;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===SintesisParser.Comma) {
	                this.state = 304;
	                this.match(SintesisParser.Comma);
	                this.state = 305;
	                this.expression(0);
	                this.state = 310;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 313;
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
	        this.state = 315;
	        this.match(SintesisParser.Class_);
	        this.state = 316;
	        localctx.id = this.match(SintesisParser.Identifier);
	        this.state = 319;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===SintesisParser.Extends) {
	            this.state = 317;
	            this.match(SintesisParser.Extends);
	            this.state = 318;
	            localctx.ext = this.match(SintesisParser.Identifier);
	        }

	        this.state = 321;
	        this.match(SintesisParser.OpenBrace);
	        this.state = 333;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,33,this._ctx);
	        if(la_===1) {
	            this.state = 324;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===SintesisParser.Attributes) {
	                this.state = 322;
	                this.match(SintesisParser.Attributes);
	                this.state = 323;
	                this.match(SintesisParser.Colon);
	            }

	            this.state = 331;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case SintesisParser.OpenBrace:
	                this.state = 326;
	                this.match(SintesisParser.OpenBrace);
	                this.state = 327;
	                localctx.atrs = this.identifiers();
	                this.state = 328;
	                this.match(SintesisParser.CloseBrace);
	                break;
	            case SintesisParser.Identifier:
	                this.state = 330;
	                localctx.atrs = this.identifiers();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }

	        }
	        this.state = 346;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===SintesisParser.OpenBrace || ((((_la - 85)) & ~0x1f) == 0 && ((1 << (_la - 85)) & ((1 << (SintesisParser.Method - 85)) | (1 << (SintesisParser.Function_ - 85)) | (1 << (SintesisParser.Methods - 85)) | (1 << (SintesisParser.Constructor - 85)) | (1 << (SintesisParser.Identifier - 85)))) !== 0)) {
	            this.state = 337;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===SintesisParser.Methods) {
	                this.state = 335;
	                localctx.mdec = this.match(SintesisParser.Methods);
	                this.state = 336;
	                this.match(SintesisParser.Colon);
	            }

	            this.state = 344;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case SintesisParser.Method:
	            case SintesisParser.Function_:
	            case SintesisParser.Constructor:
	            case SintesisParser.Identifier:
	                this.state = 339;
	                localctx.methods = this.methodsList();
	                break;
	            case SintesisParser.OpenBrace:
	                this.state = 340;
	                this.match(SintesisParser.OpenBrace);
	                this.state = 341;
	                localctx.methods = this.methodsList();
	                this.state = 342;
	                this.match(SintesisParser.CloseBrace);
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	        }

	        this.state = 348;
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
	        this.state = 354; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 350;
	        		this.match(SintesisParser.Identifier);
	        		this.state = 352;
	        		this._errHandler.sync(this);
	        		_la = this._input.LA(1);
	        		if(_la===SintesisParser.Comma) {
	        		    this.state = 351;
	        		    this.match(SintesisParser.Comma);
	        		}

	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 356; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,38, this._ctx);
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



	methodDeclaration() {
	    let localctx = new MethodDeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 52, SintesisParser.RULE_methodDeclaration);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 359;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===SintesisParser.Method || _la===SintesisParser.Function_) {
	            this.state = 358;
	            _la = this._input.LA(1);
	            if(!(_la===SintesisParser.Method || _la===SintesisParser.Function_)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	        }

	        this.state = 361;
	        localctx.id = this._input.LT(1);
	        _la = this._input.LA(1);
	        if(!(_la===SintesisParser.Constructor || _la===SintesisParser.Identifier)) {
	            localctx.id = this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 362;
	        this.match(SintesisParser.OpenParen);
	        this.state = 364;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===SintesisParser.Identifier) {
	            this.state = 363;
	            localctx.pl = this.formalParameterList();
	        }

	        this.state = 366;
	        this.match(SintesisParser.CloseParen);
	        this.state = 367;
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
	        this.state = 370; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 369;
	            this.methodDeclaration();
	            this.state = 372; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(((((_la - 85)) & ~0x1f) == 0 && ((1 << (_la - 85)) & ((1 << (SintesisParser.Method - 85)) | (1 << (SintesisParser.Function_ - 85)) | (1 << (SintesisParser.Constructor - 85)) | (1 << (SintesisParser.Identifier - 85)))) !== 0));
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
	        this.state = 374;
	        this.match(SintesisParser.New_);
	        this.state = 375;
	        this.match(SintesisParser.Identifier);
	        this.state = 376;
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
	        this.state = 378;
	        this.match(SintesisParser.OpenBracket);
	        this.state = 380;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===SintesisParser.Identifier) {
	            this.state = 379;
	            this.expression(0);
	        }

	        this.state = 382;
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
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 385; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 384;
	            this.vectorIndex();
	            this.state = 387; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===SintesisParser.OpenBracket);
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
	        this.state = 389;
	        this.match(SintesisParser.Identifier);
	        this.state = 392;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===SintesisParser.Assign) {
	            this.state = 390;
	            this.match(SintesisParser.Assign);
	            this.state = 391;
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
	        this.state = 396;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,45,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 394;
	            this.block();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 395;
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
	        this.state = 398;
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
	        this.state = 403;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case SintesisParser.Colon:
	        case SintesisParser.While:
	        case SintesisParser.If:
	        case SintesisParser.Then:
	        case SintesisParser.Else:
	        case SintesisParser.Return:
	        case SintesisParser.Function_:
	        case SintesisParser.Vector:
	        case SintesisParser.Attributes:
	        case SintesisParser.Methods:
	        case SintesisParser.Map:
	        case SintesisParser.Var_:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 400;
	            this.keyword();
	            break;
	        case SintesisParser.NullLiteral:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 401;
	            this.match(SintesisParser.NullLiteral);
	            break;
	        case SintesisParser.BooleanLiteral:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 402;
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



	vectorDeclaration() {
	    let localctx = new VectorDeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 70, SintesisParser.RULE_vectorDeclaration);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 405;
	        this.match(SintesisParser.Vector);
	        this.state = 406;
	        localctx.idx = this.vectorIndexes();
	        this.state = 408;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===SintesisParser.OpenParen) {
	            this.state = 407;
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
	        this.state = 410;
	        this.match(SintesisParser.Map);
	        this.state = 411;
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
	        this.state = 413;
	        this.match(SintesisParser.OpenBracket);
	        this.state = 422;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===SintesisParser.Identifier) {
	            this.state = 414;
	            this.expression(0);
	            this.state = 419;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===SintesisParser.Comma) {
	                this.state = 415;
	                this.match(SintesisParser.Comma);
	                this.state = 416;
	                this.expression(0);
	                this.state = 421;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 424;
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
	        this.state = 426;
	        this.match(SintesisParser.OpenBrace);
	        this.state = 440;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===SintesisParser.Colon || ((((_la - 57)) & ~0x1f) == 0 && ((1 << (_la - 57)) & ((1 << (SintesisParser.NullLiteral - 57)) | (1 << (SintesisParser.BooleanLiteral - 57)) | (1 << (SintesisParser.While - 57)) | (1 << (SintesisParser.If - 57)) | (1 << (SintesisParser.Then - 57)) | (1 << (SintesisParser.Else - 57)) | (1 << (SintesisParser.Return - 57)) | (1 << (SintesisParser.Function_ - 57)) | (1 << (SintesisParser.Vector - 57)))) !== 0) || ((((_la - 105)) & ~0x1f) == 0 && ((1 << (_la - 105)) & ((1 << (SintesisParser.Attributes - 105)) | (1 << (SintesisParser.Methods - 105)) | (1 << (SintesisParser.Map - 105)) | (1 << (SintesisParser.Var_ - 105)) | (1 << (SintesisParser.Identifier - 105)))) !== 0)) {
	            this.state = 427;
	            this.identifierName();
	            this.state = 428;
	            this.match(SintesisParser.Colon);
	            this.state = 429;
	            this.expression(0);
	            this.state = 437;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===SintesisParser.Comma) {
	                this.state = 430;
	                this.match(SintesisParser.Comma);
	                this.state = 431;
	                this.identifierName();
	                this.state = 432;
	                this.match(SintesisParser.Colon);
	                this.state = 433;
	                this.expression(0);
	                this.state = 439;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
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



	literal() {
	    let localctx = new LiteralContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 78, SintesisParser.RULE_literal);
	    try {
	        this.state = 452;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case SintesisParser.NullLiteral:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 444;
	            this.nullLiteral();
	            break;
	        case SintesisParser.BooleanLiteral:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 445;
	            this.booleanLiteral();
	            break;
	        case SintesisParser.StringLiteral:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 446;
	            this.stringLiteral();
	            break;
	        case SintesisParser.DecimalLiteral:
	        case SintesisParser.HexIntegerLiteral:
	        case SintesisParser.OctalIntegerLiteral:
	        case SintesisParser.OctalIntegerLiteral2:
	        case SintesisParser.BinaryIntegerLiteral:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 447;
	            this.numericLiteral();
	            break;
	        case SintesisParser.OpenBracket:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 448;
	            this.vectorLiteral();
	            break;
	        case SintesisParser.OpenBrace:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 449;
	            this.objectLiteral();
	            break;
	        case SintesisParser.Vector:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 450;
	            this.vectorDeclaration();
	            break;
	        case SintesisParser.Map:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 451;
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
	        this.state = 454;
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
	        this.state = 456;
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
	        this.state = 458;
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
	        this.state = 460;
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
	        this.state = 464;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case SintesisParser.Identifier:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 462;
	            this.match(SintesisParser.Identifier);
	            break;
	        case SintesisParser.Colon:
	        case SintesisParser.NullLiteral:
	        case SintesisParser.BooleanLiteral:
	        case SintesisParser.While:
	        case SintesisParser.If:
	        case SintesisParser.Then:
	        case SintesisParser.Else:
	        case SintesisParser.Return:
	        case SintesisParser.Function_:
	        case SintesisParser.Vector:
	        case SintesisParser.Attributes:
	        case SintesisParser.Methods:
	        case SintesisParser.Map:
	        case SintesisParser.Var_:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 463;
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
	    this.enterRule(localctx, 90, SintesisParser.RULE_keyword);
	    try {
	        this.state = 478;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case SintesisParser.Colon:
	            this.enterOuterAlt(localctx, 1);

	            break;
	        case SintesisParser.Else:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 467;
	            this.match(SintesisParser.Else);
	            break;
	        case SintesisParser.Then:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 468;
	            this.match(SintesisParser.Then);
	            break;
	        case SintesisParser.Return:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 469;
	            this.match(SintesisParser.Return);
	            break;
	        case SintesisParser.While:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 470;
	            this.match(SintesisParser.While);
	            break;
	        case SintesisParser.Function_:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 471;
	            this.match(SintesisParser.Function_);
	            break;
	        case SintesisParser.If:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 472;
	            this.match(SintesisParser.If);
	            break;
	        case SintesisParser.Vector:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 473;
	            this.match(SintesisParser.Vector);
	            break;
	        case SintesisParser.Map:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 474;
	            this.match(SintesisParser.Map);
	            break;
	        case SintesisParser.Var_:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 475;
	            this.match(SintesisParser.Var_);
	            break;
	        case SintesisParser.Methods:
	            this.enterOuterAlt(localctx, 11);
	            this.state = 476;
	            this.match(SintesisParser.Methods);
	            break;
	        case SintesisParser.Attributes:
	            this.enterOuterAlt(localctx, 12);
	            this.state = 477;
	            this.match(SintesisParser.Attributes);
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
SintesisParser.Method = 85;
SintesisParser.Function_ = 86;
SintesisParser.Vector = 87;
SintesisParser.Delete = 88;
SintesisParser.NumberOf = 89;
SintesisParser.IndexOf = 90;
SintesisParser.Sub = 91;
SintesisParser.Lower = 92;
SintesisParser.Upper = 93;
SintesisParser.Math = 94;
SintesisParser.Min = 95;
SintesisParser.Max = 96;
SintesisParser.Random = 97;
SintesisParser.Chr = 98;
SintesisParser.Ord = 99;
SintesisParser.Prompt = 100;
SintesisParser.Convert = 101;
SintesisParser.New_ = 102;
SintesisParser.Class_ = 103;
SintesisParser.Extends = 104;
SintesisParser.Attributes = 105;
SintesisParser.Methods = 106;
SintesisParser.Constructor = 107;
SintesisParser.Super = 108;
SintesisParser.InstanceOf = 109;
SintesisParser.Map = 110;
SintesisParser.Get = 111;
SintesisParser.Set = 112;
SintesisParser.Var_ = 113;
SintesisParser.Identifier = 114;
SintesisParser.StringLiteral = 115;
SintesisParser.WhiteSpaces = 116;
SintesisParser.LineTerminator = 117;

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
SintesisParser.RULE_formalParameterList = 21;
SintesisParser.RULE_functionDeclaration = 22;
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


class ExpMembeDotContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	Dot() {
	    return this.getToken(SintesisParser.Dot, 0);
	};

	Identifier() {
	    return this.getToken(SintesisParser.Identifier, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof SintesisParserVisitor ) {
	        return visitor.visitExpMembeDot(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

SintesisParser.ExpMembeDotContext = ExpMembeDotContext;

class ExpIdentifierContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
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
        this.idv = null; // Token
        this.op = null; // Token
        this.coll = null; // ExpressionContext
        this.idk = null; // Token
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


	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	In() {
	    return this.getToken(SintesisParser.In, 0);
	};

	Of() {
	    return this.getToken(SintesisParser.Of, 0);
	};

	Comma() {
	    return this.getToken(SintesisParser.Comma, 0);
	};

	ARROW() {
	    return this.getToken(SintesisParser.ARROW, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof SintesisParserVisitor ) {
	        return visitor.visitIteratorIndexes(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



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
        this.mdec = null; // Token
        this.methods = null; // MethodsListContext
    }

	Class_() {
	    return this.getToken(SintesisParser.Class_, 0);
	};

	OpenBrace = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SintesisParser.OpenBrace);
	    } else {
	        return this.getToken(SintesisParser.OpenBrace, i);
	    }
	};


	CloseBrace = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SintesisParser.CloseBrace);
	    } else {
	        return this.getToken(SintesisParser.CloseBrace, i);
	    }
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


	identifiers() {
	    return this.getTypedRuleContext(IdentifiersContext,0);
	};

	methodsList() {
	    return this.getTypedRuleContext(MethodsListContext,0);
	};

	Methods() {
	    return this.getToken(SintesisParser.Methods, 0);
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

	functionBody() {
	    return this.getTypedRuleContext(FunctionBodyContext,0);
	};

	Identifier() {
	    return this.getToken(SintesisParser.Identifier, 0);
	};

	Constructor() {
	    return this.getToken(SintesisParser.Constructor, 0);
	};

	Method() {
	    return this.getToken(SintesisParser.Method, 0);
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

	Methods() {
	    return this.getToken(SintesisParser.Methods, 0);
	};

	Attributes() {
	    return this.getToken(SintesisParser.Attributes, 0);
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
SintesisParser.FormalParameterListContext = FormalParameterListContext; 
SintesisParser.FunctionDeclarationContext = FunctionDeclarationContext; 
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
