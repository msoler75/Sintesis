// Generated from ./src/grammar/SintesisParser.g4 by ANTLR 4.9.3
// jshint ignore: start
import antlr4 from 'antlr4';
import SintesisParserVisitor from './SintesisParserVisitor.js';


const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0003k\u0234\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f",
    "\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010",
    "\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014",
    "\t\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017",
    "\u0004\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a\u0004\u001b",
    "\t\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e\t\u001e",
    "\u0004\u001f\t\u001f\u0004 \t \u0004!\t!\u0004\"\t\"\u0004#\t#\u0004",
    "$\t$\u0004%\t%\u0004&\t&\u0004\'\t\'\u0004(\t(\u0004)\t)\u0004*\t*\u0003",
    "\u0002\u0003\u0002\u0003\u0002\u0003\u0003\u0006\u0003Y\n\u0003\r\u0003",
    "\u000e\u0003Z\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0005\u0004f",
    "\n\u0004\u0003\u0005\u0003\u0005\u0005\u0005j\n\u0005\u0003\u0005\u0003",
    "\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0003\b\u0003\b\u0003\b\u0003\b\u0005\bx\n\b\u0003\b\u0003\b",
    "\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0003\b\u0005\b\u00c8\n\b\u0003\b\u0003\b",
    "\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0007\b\u010c\n\b\f\b\u000e\b\u010f\u000b\b\u0003\t\u0003",
    "\t\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0003\f\u0005",
    "\f\u011a\n\f\u0003\r\u0003\r\u0003\r\u0007\r\u011f\n\r\f\r\u000e\r\u0122",
    "\u000b\r\u0003\u000e\u0003\u000e\u0003\u000e\u0005\u000e\u0127\n\u000e",
    "\u0003\u000e\u0003\u000e\u0005\u000e\u012b\n\u000e\u0003\u000e\u0005",
    "\u000e\u012e\n\u000e\u0003\u000f\u0006\u000f\u0131\n\u000f\r\u000f\u000e",
    "\u000f\u0132\u0003\u0010\u0003\u0010\u0003\u0010\u0005\u0010\u0138\n",
    "\u0010\u0003\u0010\u0003\u0010\u0003\u0011\u0003\u0011\u0003\u0011\u0003",
    "\u0012\u0003\u0012\u0003\u0012\u0005\u0012\u0142\n\u0012\u0003\u0012",
    "\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012",
    "\u0003\u0012\u0005\u0012\u014c\n\u0012\u0003\u0012\u0003\u0012\u0003",
    "\u0012\u0005\u0012\u0151\n\u0012\u0003\u0012\u0003\u0012\u0003\u0012",
    "\u0003\u0012\u0005\u0012\u0157\n\u0012\u0003\u0012\u0003\u0012\u0003",
    "\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0005\u0012\u015f\n\u0012",
    "\u0003\u0012\u0005\u0012\u0162\n\u0012\u0003\u0012\u0003\u0012\u0003",
    "\u0012\u0003\u0012\u0005\u0012\u0168\n\u0012\u0003\u0012\u0005\u0012",
    "\u016b\n\u0012\u0003\u0012\u0005\u0012\u016e\n\u0012\u0003\u0012\u0003",
    "\u0012\u0003\u0012\u0003\u0012\u0005\u0012\u0174\n\u0012\u0003\u0012",
    "\u0005\u0012\u0177\n\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003",
    "\u0012\u0005\u0012\u017d\n\u0012\u0003\u0012\u0005\u0012\u0180\n\u0012",
    "\u0003\u0012\u0005\u0012\u0183\n\u0012\u0003\u0012\u0003\u0012\u0003",
    "\u0012\u0003\u0012\u0005\u0012\u0189\n\u0012\u0003\u0012\u0005\u0012",
    "\u018c\n\u0012\u0003\u0012\u0003\u0012\u0005\u0012\u0190\n\u0012\u0003",
    "\u0013\u0003\u0013\u0003\u0013\u0003\u0014\u0003\u0014\u0003\u0014\u0003",
    "\u0014\u0005\u0014\u0199\n\u0014\u0003\u0014\u0003\u0014\u0003\u0014",
    "\u0003\u0015\u0003\u0015\u0003\u0015\u0007\u0015\u01a1\n\u0015\f\u0015",
    "\u000e\u0015\u01a4\u000b\u0015\u0003\u0016\u0003\u0016\u0003\u0016\u0003",
    "\u0016\u0007\u0016\u01aa\n\u0016\f\u0016\u000e\u0016\u01ad\u000b\u0016",
    "\u0005\u0016\u01af\n\u0016\u0003\u0016\u0003\u0016\u0003\u0017\u0003",
    "\u0017\u0003\u0017\u0003\u0017\u0005\u0017\u01b7\n\u0017\u0003\u0017",
    "\u0003\u0017\u0003\u0017\u0003\u0017\u0005\u0017\u01bd\n\u0017\u0003",
    "\u0017\u0003\u0017\u0003\u0017\u0005\u0017\u01c2\n\u0017\u0003\u0017",
    "\u0003\u0017\u0003\u0018\u0003\u0018\u0005\u0018\u01c8\n\u0018\u0006",
    "\u0018\u01ca\n\u0018\r\u0018\u000e\u0018\u01cb\u0003\u0019\u0005\u0019",
    "\u01cf\n\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0005\u0019\u01d4",
    "\n\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u001a\u0006\u001a",
    "\u01da\n\u001a\r\u001a\u000e\u001a\u01db\u0003\u001b\u0003\u001b\u0003",
    "\u001b\u0003\u001b\u0003\u001c\u0003\u001c\u0005\u001c\u01e4\n\u001c",
    "\u0003\u001c\u0003\u001c\u0003\u001d\u0006\u001d\u01e9\n\u001d\r\u001d",
    "\u000e\u001d\u01ea\u0003\u001e\u0003\u001e\u0003\u001e\u0003\u001e\u0007",
    "\u001e\u01f1\n\u001e\f\u001e\u000e\u001e\u01f4\u000b\u001e\u0005\u001e",
    "\u01f6\n\u001e\u0003\u001e\u0003\u001e\u0003\u001f\u0003\u001f\u0003",
    "\u001f\u0005\u001f\u01fd\n\u001f\u0003 \u0003 \u0005 \u0201\n \u0003",
    "!\u0003!\u0003\"\u0003\"\u0003\"\u0003\"\u0003\"\u0003\"\u0005\"\u020b",
    "\n\"\u0003\"\u0005\"\u020e\n\"\u0003#\u0003#\u0003#\u0005#\u0213\n#",
    "\u0003$\u0003$\u0003$\u0003$\u0003$\u0005$\u021a\n$\u0003%\u0003%\u0003",
    "&\u0003&\u0003\'\u0003\'\u0003(\u0003(\u0003)\u0003)\u0005)\u0226\n",
    ")\u0003*\u0003*\u0003*\u0003*\u0003*\u0003*\u0003*\u0003*\u0003*\u0003",
    "*\u0005*\u0232\n*\u0003*\u0002\u0003\u000e+\u0002\u0004\u0006\b\n\f",
    "\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u001e \"$&(*,.0246",
    "8:<>@BDFHJLNPR\u0002\b\u0004\u0002<<hh\u0003\u0002\u0012\u0013\u0004",
    "\u0002IIKK\u0004\u0002\r\rOO\u0003\u0002.9\u0003\u0002<@\u0002\u0285",
    "\u0002T\u0003\u0002\u0002\u0002\u0004X\u0003\u0002\u0002\u0002\u0006",
    "e\u0003\u0002\u0002\u0002\bg\u0003\u0002\u0002\u0002\nm\u0003\u0002",
    "\u0002\u0002\fp\u0003\u0002\u0002\u0002\u000e\u00c7\u0003\u0002\u0002",
    "\u0002\u0010\u0110\u0003\u0002\u0002\u0002\u0012\u0112\u0003\u0002\u0002",
    "\u0002\u0014\u0114\u0003\u0002\u0002\u0002\u0016\u0119\u0003\u0002\u0002",
    "\u0002\u0018\u011b\u0003\u0002\u0002\u0002\u001a\u0123\u0003\u0002\u0002",
    "\u0002\u001c\u0130\u0003\u0002\u0002\u0002\u001e\u0134\u0003\u0002\u0002",
    "\u0002 \u013b\u0003\u0002\u0002\u0002\"\u018f\u0003\u0002\u0002\u0002",
    "$\u0191\u0003\u0002\u0002\u0002&\u0194\u0003\u0002\u0002\u0002(\u019d",
    "\u0003\u0002\u0002\u0002*\u01a5\u0003\u0002\u0002\u0002,\u01b2\u0003",
    "\u0002\u0002\u0002.\u01c9\u0003\u0002\u0002\u00020\u01ce\u0003\u0002",
    "\u0002\u00022\u01d9\u0003\u0002\u0002\u00024\u01dd\u0003\u0002\u0002",
    "\u00026\u01e1\u0003\u0002\u0002\u00028\u01e8\u0003\u0002\u0002\u0002",
    ":\u01ec\u0003\u0002\u0002\u0002<\u01f9\u0003\u0002\u0002\u0002>\u0200",
    "\u0003\u0002\u0002\u0002@\u0202\u0003\u0002\u0002\u0002B\u020d\u0003",
    "\u0002\u0002\u0002D\u0212\u0003\u0002\u0002\u0002F\u0219\u0003\u0002",
    "\u0002\u0002H\u021b\u0003\u0002\u0002\u0002J\u021d\u0003\u0002\u0002",
    "\u0002L\u021f\u0003\u0002\u0002\u0002N\u0221\u0003\u0002\u0002\u0002",
    "P\u0225\u0003\u0002\u0002\u0002R\u0231\u0003\u0002\u0002\u0002TU\u0005",
    "\u0004\u0003\u0002UV\u0007\u0002\u0002\u0003V\u0003\u0003\u0002\u0002",
    "\u0002WY\u0005\u0006\u0004\u0002XW\u0003\u0002\u0002\u0002YZ\u0003\u0002",
    "\u0002\u0002ZX\u0003\u0002\u0002\u0002Z[\u0003\u0002\u0002\u0002[\u0005",
    "\u0003\u0002\u0002\u0002\\f\u0005\b\u0005\u0002]f\u0005\n\u0006\u0002",
    "^f\u0005\f\u0007\u0002_f\u0005\u001a\u000e\u0002`f\u0005\"\u0012\u0002",
    "af\u0005$\u0013\u0002bf\u0005,\u0017\u0002cf\u0005&\u0014\u0002df\u0005",
    "\u000e\b\u0002e\\\u0003\u0002\u0002\u0002e]\u0003\u0002\u0002\u0002",
    "e^\u0003\u0002\u0002\u0002e_\u0003\u0002\u0002\u0002e`\u0003\u0002\u0002",
    "\u0002ea\u0003\u0002\u0002\u0002eb\u0003\u0002\u0002\u0002ec\u0003\u0002",
    "\u0002\u0002ed\u0003\u0002\u0002\u0002f\u0007\u0003\u0002\u0002\u0002",
    "gi\u0007\t\u0002\u0002hj\u0005\u0004\u0003\u0002ih\u0003\u0002\u0002",
    "\u0002ij\u0003\u0002\u0002\u0002jk\u0003\u0002\u0002\u0002kl\u0007\n",
    "\u0002\u0002l\t\u0003\u0002\u0002\u0002mn\u0007F\u0002\u0002no\t\u0002",
    "\u0002\u0002o\u000b\u0003\u0002\u0002\u0002pq\u0007G\u0002\u0002qr\u0005",
    "\u000e\b\u0002r\r\u0003\u0002\u0002\u0002st\b\b\u0001\u0002tu\u0007",
    "X\u0002\u0002uw\u00058\u001d\u0002vx\u0005*\u0016\u0002wv\u0003\u0002",
    "\u0002\u0002wx\u0003\u0002\u0002\u0002x\u00c8\u0003\u0002\u0002\u0002",
    "yz\u0007d\u0002\u0002z\u00c8\u0005*\u0016\u0002{|\u0005\u0016\f\u0002",
    "|}\u0005*\u0016\u0002}\u00c8\u0003\u0002\u0002\u0002~\u007f\u0007h\u0002",
    "\u0002\u007f\u00c8\u00058\u001d\u0002\u0080\u0081\u0007h\u0002\u0002",
    "\u0081\u0082\u0007\u0011\u0002\u0002\u0082\u0083\u0007e\u0002\u0002",
    "\u0083\u0084\u0007\u0007\u0002\u0002\u0084\u0085\u0005\u000e\b\u0002",
    "\u0085\u0086\u0007\b\u0002\u0002\u0086\u00c8\u0003\u0002\u0002\u0002",
    "\u0087\u0088\u0007h\u0002\u0002\u0088\u0089\u0007\u0011\u0002\u0002",
    "\u0089\u008a\u0007f\u0002\u0002\u008a\u008b\u0007\u0007\u0002\u0002",
    "\u008b\u008c\u0007i\u0002\u0002\u008c\u008d\u0007\f\u0002\u0002\u008d",
    "\u008e\u0005\u000e\b\u0002\u008e\u008f\u0007\b\u0002\u0002\u008f\u00c8",
    "\u0003\u0002\u0002\u0002\u0090\u0091\u0007h\u0002\u0002\u0091\u0092",
    "\u0007\u0011\u0002\u0002\u0092\u0093\u0007Y\u0002\u0002\u0093\u0094",
    "\u0007\u0007\u0002\u0002\u0094\u0095\u0007i\u0002\u0002\u0095\u00c8",
    "\u0007\b\u0002\u0002\u0096\u0097\u0007h\u0002\u0002\u0097\u0098\u0007",
    "\u0011\u0002\u0002\u0098\u0099\u0007h\u0002\u0002\u0099\u00c8\u0005",
    "*\u0016\u0002\u009a\u009b\u0007h\u0002\u0002\u009b\u009c\u0007\u0011",
    "\u0002\u0002\u009c\u00c8\u0007h\u0002\u0002\u009d\u009e\u0007h\u0002",
    "\u0002\u009e\u009f\u0007c\u0002\u0002\u009f\u00c8\u0007h\u0002\u0002",
    "\u00a0\u00a1\u0007`\u0002\u0002\u00a1\u00a2\u0007\u0011\u0002\u0002",
    "\u00a2\u00c8\u0007h\u0002\u0002\u00a3\u00a4\u0007a\u0002\u0002\u00a4",
    "\u00a5\u0007\u0011\u0002\u0002\u00a5\u00a6\u0007h\u0002\u0002\u00a6",
    "\u00c8\u0005*\u0016\u0002\u00a7\u00a8\u0007b\u0002\u0002\u00a8\u00c8",
    "\u0005*\u0016\u0002\u00a9\u00aa\u0007h\u0002\u0002\u00aa\u00c8\u0005",
    "*\u0016\u0002\u00ab\u00ac\u0005B\"\u0002\u00ac\u00ad\t\u0003\u0002\u0002",
    "\u00ad\u00c8\u0003\u0002\u0002\u0002\u00ae\u00af\t\u0003\u0002\u0002",
    "\u00af\u00c8\u0005B\"\u0002\u00b0\u00b1\u0007\u0014\u0002\u0002\u00b1",
    "\u00c8\u0005\u000e\b \u00b2\u00b3\u0007\u0015\u0002\u0002\u00b3\u00c8",
    "\u0005\u000e\b\u001f\u00b4\u00b5\u0007\u0016\u0002\u0002\u00b5\u00c8",
    "\u0005\u000e\b\u001e\u00b6\u00b7\u0007\u0017\u0002\u0002\u00b7\u00c8",
    "\u0005\u000e\b\u001d\u00b8\u00b9\u0005B\"\u0002\u00b9\u00ba\u0007\r",
    "\u0002\u0002\u00ba\u00bb\u0005\u000e\b\b\u00bb\u00c8\u0003\u0002\u0002",
    "\u0002\u00bc\u00bd\u0005B\"\u0002\u00bd\u00be\u0005@!\u0002\u00be\u00bf",
    "\u0005\u000e\b\u0007\u00bf\u00c8\u0003\u0002\u0002\u0002\u00c0\u00c8",
    "\u0007h\u0002\u0002\u00c1\u00c8\u0005F$\u0002\u00c2\u00c3\u0007\u0007",
    "\u0002\u0002\u00c3\u00c4\u0005\u000e\b\u0002\u00c4\u00c5\u0007\b\u0002",
    "\u0002\u00c5\u00c8\u0003\u0002\u0002\u0002\u00c6\u00c8\u0007\u0004\u0002",
    "\u0002\u00c7s\u0003\u0002\u0002\u0002\u00c7y\u0003\u0002\u0002\u0002",
    "\u00c7{\u0003\u0002\u0002\u0002\u00c7~\u0003\u0002\u0002\u0002\u00c7",
    "\u0080\u0003\u0002\u0002\u0002\u00c7\u0087\u0003\u0002\u0002\u0002\u00c7",
    "\u0090\u0003\u0002\u0002\u0002\u00c7\u0096\u0003\u0002\u0002\u0002\u00c7",
    "\u009a\u0003\u0002\u0002\u0002\u00c7\u009d\u0003\u0002\u0002\u0002\u00c7",
    "\u00a0\u0003\u0002\u0002\u0002\u00c7\u00a3\u0003\u0002\u0002\u0002\u00c7",
    "\u00a7\u0003\u0002\u0002\u0002\u00c7\u00a9\u0003\u0002\u0002\u0002\u00c7",
    "\u00ab\u0003\u0002\u0002\u0002\u00c7\u00ae\u0003\u0002\u0002\u0002\u00c7",
    "\u00b0\u0003\u0002\u0002\u0002\u00c7\u00b2\u0003\u0002\u0002\u0002\u00c7",
    "\u00b4\u0003\u0002\u0002\u0002\u00c7\u00b6\u0003\u0002\u0002\u0002\u00c7",
    "\u00b8\u0003\u0002\u0002\u0002\u00c7\u00bc\u0003\u0002\u0002\u0002\u00c7",
    "\u00c0\u0003\u0002\u0002\u0002\u00c7\u00c1\u0003\u0002\u0002\u0002\u00c7",
    "\u00c2\u0003\u0002\u0002\u0002\u00c7\u00c6\u0003\u0002\u0002\u0002\u00c8",
    "\u010d\u0003\u0002\u0002\u0002\u00c9\u00ca\f\u001c\u0002\u0002\u00ca",
    "\u00cb\u0007\u0014\u0002\u0002\u00cb\u010c\u0005\u000e\b\u001d\u00cc",
    "\u00cd\f\u001b\u0002\u0002\u00cd\u00ce\u0007\u0015\u0002\u0002\u00ce",
    "\u010c\u0005\u000e\b\u001c\u00cf\u00d0\f\u001a\u0002\u0002\u00d0\u00d1",
    "\u0007\u0018\u0002\u0002\u00d1\u010c\u0005\u000e\b\u001b\u00d2\u00d3",
    "\f\u0019\u0002\u0002\u00d3\u00d4\u0007\u0019\u0002\u0002\u00d4\u010c",
    "\u0005\u000e\b\u001a\u00d5\u00d6\f\u0018\u0002\u0002\u00d6\u00d7\u0007",
    "\u001b\u0002\u0002\u00d7\u010c\u0005\u000e\b\u0018\u00d8\u00d9\f\u0017",
    "\u0002\u0002\u00d9\u00da\u0007\u001a\u0002\u0002\u00da\u010c\u0005\u000e",
    "\b\u0018\u00db\u00dc\f\u0016\u0002\u0002\u00dc\u00dd\u0007!\u0002\u0002",
    "\u00dd\u010c\u0005\u000e\b\u0017\u00de\u00df\f\u0015\u0002\u0002\u00df",
    "\u00e0\u0007\"\u0002\u0002\u00e0\u010c\u0005\u000e\b\u0016\u00e1\u00e2",
    "\f\u0014\u0002\u0002\u00e2\u00e3\u0007#\u0002\u0002\u00e3\u010c\u0005",
    "\u000e\b\u0015\u00e4\u00e5\f\u0013\u0002\u0002\u00e5\u00e6\u0007$\u0002",
    "\u0002\u00e6\u010c\u0005\u000e\b\u0014\u00e7\u00e8\f\u0012\u0002\u0002",
    "\u00e8\u00e9\u0007)\u0002\u0002\u00e9\u010c\u0005\u000e\b\u0013\u00ea",
    "\u00eb\f\u0011\u0002\u0002\u00eb\u00ec\u0007+\u0002\u0002\u00ec\u010c",
    "\u0005\u000e\b\u0012\u00ed\u00ee\f\u0010\u0002\u0002\u00ee\u00ef\u0007",
    "*\u0002\u0002\u00ef\u010c\u0005\u000e\b\u0011\u00f0\u00f1\f\u000f\u0002",
    "\u0002\u00f1\u00f2\u0007\'\u0002\u0002\u00f2\u010c\u0005\u000e\b\u0010",
    "\u00f3\u00f4\f\u000e\u0002\u0002\u00f4\u00f5\u0007(\u0002\u0002\u00f5",
    "\u010c\u0005\u000e\b\u000f\u00f6\u00f7\f\r\u0002\u0002\u00f7\u00f8\u0007",
    "%\u0002\u0002\u00f8\u010c\u0005\u000e\b\u000e\u00f9\u00fa\f\f\u0002",
    "\u0002\u00fa\u00fb\u0007&\u0002\u0002\u00fb\u010c\u0005\u000e\b\r\u00fc",
    "\u00fd\f\u000b\u0002\u0002\u00fd\u00fe\u0007,\u0002\u0002\u00fe\u010c",
    "\u0005\u000e\b\f\u00ff\u0100\f\n\u0002\u0002\u0100\u0101\u0007-\u0002",
    "\u0002\u0101\u010c\u0005\u000e\b\u000b\u0102\u0103\f\t\u0002\u0002\u0103",
    "\u0104\u0007\u000e\u0002\u0002\u0104\u0105\u0005\u000e\b\u0002\u0105",
    "\u0106\u0007\u000f\u0002\u0002\u0106\u0107\u0005\u000e\b\n\u0107\u010c",
    "\u0003\u0002\u0002\u0002\u0108\u0109\f.\u0002\u0002\u0109\u010a\u0007",
    "\u0011\u0002\u0002\u010a\u010c\u0005\u0010\t\u0002\u010b\u00c9\u0003",
    "\u0002\u0002\u0002\u010b\u00cc\u0003\u0002\u0002\u0002\u010b\u00cf\u0003",
    "\u0002\u0002\u0002\u010b\u00d2\u0003\u0002\u0002\u0002\u010b\u00d5\u0003",
    "\u0002\u0002\u0002\u010b\u00d8\u0003\u0002\u0002\u0002\u010b\u00db\u0003",
    "\u0002\u0002\u0002\u010b\u00de\u0003\u0002\u0002\u0002\u010b\u00e1\u0003",
    "\u0002\u0002\u0002\u010b\u00e4\u0003\u0002\u0002\u0002\u010b\u00e7\u0003",
    "\u0002\u0002\u0002\u010b\u00ea\u0003\u0002\u0002\u0002\u010b\u00ed\u0003",
    "\u0002\u0002\u0002\u010b\u00f0\u0003\u0002\u0002\u0002\u010b\u00f3\u0003",
    "\u0002\u0002\u0002\u010b\u00f6\u0003\u0002\u0002\u0002\u010b\u00f9\u0003",
    "\u0002\u0002\u0002\u010b\u00fc\u0003\u0002\u0002\u0002\u010b\u00ff\u0003",
    "\u0002\u0002\u0002\u010b\u0102\u0003\u0002\u0002\u0002\u010b\u0108\u0003",
    "\u0002\u0002\u0002\u010c\u010f\u0003\u0002\u0002\u0002\u010d\u010b\u0003",
    "\u0002\u0002\u0002\u010d\u010e\u0003\u0002\u0002\u0002\u010e\u000f\u0003",
    "\u0002\u0002\u0002\u010f\u010d\u0003\u0002\u0002\u0002\u0110\u0111\u0007",
    "Z\u0002\u0002\u0111\u0011\u0003\u0002\u0002\u0002\u0112\u0113\u0007",
    "[\u0002\u0002\u0113\u0013\u0003\u0002\u0002\u0002\u0114\u0115\u0007",
    "\\\u0002\u0002\u0115\u0015\u0003\u0002\u0002\u0002\u0116\u011a\u0005",
    "\u0010\t\u0002\u0117\u011a\u0005\u0012\n\u0002\u0118\u011a\u0005\u0014",
    "\u000b\u0002\u0119\u0116\u0003\u0002\u0002\u0002\u0119\u0117\u0003\u0002",
    "\u0002\u0002\u0119\u0118\u0003\u0002\u0002\u0002\u011a\u0017\u0003\u0002",
    "\u0002\u0002\u011b\u0120\u0005\u000e\b\u0002\u011c\u011d\u0007\f\u0002",
    "\u0002\u011d\u011f\u0005\u000e\b\u0002\u011e\u011c\u0003\u0002\u0002",
    "\u0002\u011f\u0122\u0003\u0002\u0002\u0002\u0120\u011e\u0003\u0002\u0002",
    "\u0002\u0120\u0121\u0003\u0002\u0002\u0002\u0121\u0019\u0003\u0002\u0002",
    "\u0002\u0122\u0120\u0003\u0002\u0002\u0002\u0123\u0124\u0007R\u0002",
    "\u0002\u0124\u0126\u0005\u000e\b\u0002\u0125\u0127\u0007S\u0002\u0002",
    "\u0126\u0125\u0003\u0002\u0002\u0002\u0126\u0127\u0003\u0002\u0002\u0002",
    "\u0127\u0128\u0003\u0002\u0002\u0002\u0128\u012a\u0005\u0006\u0004\u0002",
    "\u0129\u012b\u0005\u001c\u000f\u0002\u012a\u0129\u0003\u0002\u0002\u0002",
    "\u012a\u012b\u0003\u0002\u0002\u0002\u012b\u012d\u0003\u0002\u0002\u0002",
    "\u012c\u012e\u0005 \u0011\u0002\u012d\u012c\u0003\u0002\u0002\u0002",
    "\u012d\u012e\u0003\u0002\u0002\u0002\u012e\u001b\u0003\u0002\u0002\u0002",
    "\u012f\u0131\u0005\u001e\u0010\u0002\u0130\u012f\u0003\u0002\u0002\u0002",
    "\u0131\u0132\u0003\u0002\u0002\u0002\u0132\u0130\u0003\u0002\u0002\u0002",
    "\u0132\u0133\u0003\u0002\u0002\u0002\u0133\u001d\u0003\u0002\u0002\u0002",
    "\u0134\u0135\u0007T\u0002\u0002\u0135\u0137\u0005\u000e\b\u0002\u0136",
    "\u0138\u0007S\u0002\u0002\u0137\u0136\u0003\u0002\u0002\u0002\u0137",
    "\u0138\u0003\u0002\u0002\u0002\u0138\u0139\u0003\u0002\u0002\u0002\u0139",
    "\u013a\u0005\u0006\u0004\u0002\u013a\u001f\u0003\u0002\u0002\u0002\u013b",
    "\u013c\u0007U\u0002\u0002\u013c\u013d\u0005\u0006\u0004\u0002\u013d",
    "!\u0003\u0002\u0002\u0002\u013e\u013f\u0007I\u0002\u0002\u013f\u0141",
    "\u0005\u000e\b\u0002\u0140\u0142\u0007J\u0002\u0002\u0141\u0140\u0003",
    "\u0002\u0002\u0002\u0141\u0142\u0003\u0002\u0002\u0002\u0142\u0143\u0003",
    "\u0002\u0002\u0002\u0143\u0144\u0005\u0006\u0004\u0002\u0144\u0190\u0003",
    "\u0002\u0002\u0002\u0145\u0146\t\u0004\u0002\u0002\u0146\u0147\u0005",
    "\u0006\u0004\u0002\u0147\u0148\u0007H\u0002\u0002\u0148\u0149\u0005",
    "\u000e\b\u0002\u0149\u0190\u0003\u0002\u0002\u0002\u014a\u014c\u0007",
    "I\u0002\u0002\u014b\u014a\u0003\u0002\u0002\u0002\u014b\u014c\u0003",
    "\u0002\u0002\u0002\u014c\u014d\u0003\u0002\u0002\u0002\u014d\u014e\u0007",
    "H\u0002\u0002\u014e\u0150\u0005\u000e\b\u0002\u014f\u0151\t\u0004\u0002",
    "\u0002\u0150\u014f\u0003\u0002\u0002\u0002\u0150\u0151\u0003\u0002\u0002",
    "\u0002\u0151\u0152\u0003\u0002\u0002\u0002\u0152\u0153\u0005\u0006\u0004",
    "\u0002\u0153\u0190\u0003\u0002\u0002\u0002\u0154\u0156\u0007L\u0002",
    "\u0002\u0155\u0157\u0007\u0007\u0002\u0002\u0156\u0155\u0003\u0002\u0002",
    "\u0002\u0156\u0157\u0003\u0002\u0002\u0002\u0157\u0158\u0003\u0002\u0002",
    "\u0002\u0158\u0159\u0007h\u0002\u0002\u0159\u015a\t\u0005\u0002\u0002",
    "\u015a\u015b\u0005\u000e\b\u0002\u015b\u015c\u0007Q\u0002\u0002\u015c",
    "\u015e\u0005\u000e\b\u0002\u015d\u015f\u0007\b\u0002\u0002\u015e\u015d",
    "\u0003\u0002\u0002\u0002\u015e\u015f\u0003\u0002\u0002\u0002\u015f\u0161",
    "\u0003\u0002\u0002\u0002\u0160\u0162\u0007I\u0002\u0002\u0161\u0160",
    "\u0003\u0002\u0002\u0002\u0161\u0162\u0003\u0002\u0002\u0002\u0162\u0163",
    "\u0003\u0002\u0002\u0002\u0163\u0164\u0005\u0006\u0004\u0002\u0164\u0190",
    "\u0003\u0002\u0002\u0002\u0165\u0167\u0007L\u0002\u0002\u0166\u0168",
    "\u0007M\u0002\u0002\u0167\u0166\u0003\u0002\u0002\u0002\u0167\u0168",
    "\u0003\u0002\u0002\u0002\u0168\u016b\u0003\u0002\u0002\u0002\u0169\u016b",
    "\u0007N\u0002\u0002\u016a\u0165\u0003\u0002\u0002\u0002\u016a\u0169",
    "\u0003\u0002\u0002\u0002\u016b\u016d\u0003\u0002\u0002\u0002\u016c\u016e",
    "\u0007\u0007\u0002\u0002\u016d\u016c\u0003\u0002\u0002\u0002\u016d\u016e",
    "\u0003\u0002\u0002\u0002\u016e\u016f\u0003\u0002\u0002\u0002\u016f\u0170",
    "\u0007h\u0002\u0002\u0170\u0171\u0007O\u0002\u0002\u0171\u0173\u0005",
    "\u000e\b\u0002\u0172\u0174\u0007\b\u0002\u0002\u0173\u0172\u0003\u0002",
    "\u0002\u0002\u0173\u0174\u0003\u0002\u0002\u0002\u0174\u0176\u0003\u0002",
    "\u0002\u0002\u0175\u0177\t\u0004\u0002\u0002\u0176\u0175\u0003\u0002",
    "\u0002\u0002\u0176\u0177\u0003\u0002\u0002\u0002\u0177\u0178\u0003\u0002",
    "\u0002\u0002\u0178\u0179\u0005\u0006\u0004\u0002\u0179\u0190\u0003\u0002",
    "\u0002\u0002\u017a\u017c\u0007L\u0002\u0002\u017b\u017d\u0007M\u0002",
    "\u0002\u017c\u017b\u0003\u0002\u0002\u0002\u017c\u017d\u0003\u0002\u0002",
    "\u0002\u017d\u0180\u0003\u0002\u0002\u0002\u017e\u0180\u0007N\u0002",
    "\u0002\u017f\u017a\u0003\u0002\u0002\u0002\u017f\u017e\u0003\u0002\u0002",
    "\u0002\u0180\u0182\u0003\u0002\u0002\u0002\u0181\u0183\u0007\u0007\u0002",
    "\u0002\u0182\u0181\u0003\u0002\u0002\u0002\u0182\u0183\u0003\u0002\u0002",
    "\u0002\u0183\u0184\u0003\u0002\u0002\u0002\u0184\u0185\u0007h\u0002",
    "\u0002\u0185\u0186\u0007P\u0002\u0002\u0186\u0188\u0005\u000e\b\u0002",
    "\u0187\u0189\u0007\b\u0002\u0002\u0188\u0187\u0003\u0002\u0002\u0002",
    "\u0188\u0189\u0003\u0002\u0002\u0002\u0189\u018b\u0003\u0002\u0002\u0002",
    "\u018a\u018c\t\u0004\u0002\u0002\u018b\u018a\u0003\u0002\u0002\u0002",
    "\u018b\u018c\u0003\u0002\u0002\u0002\u018c\u018d\u0003\u0002\u0002\u0002",
    "\u018d\u018e\u0005\u0006\u0004\u0002\u018e\u0190\u0003\u0002\u0002\u0002",
    "\u018f\u013e\u0003\u0002\u0002\u0002\u018f\u0145\u0003\u0002\u0002\u0002",
    "\u018f\u014b\u0003\u0002\u0002\u0002\u018f\u0154\u0003\u0002\u0002\u0002",
    "\u018f\u016a\u0003\u0002\u0002\u0002\u018f\u017f\u0003\u0002\u0002\u0002",
    "\u0190#\u0003\u0002\u0002\u0002\u0191\u0192\u0007V\u0002\u0002\u0192",
    "\u0193\u0005\u000e\b\u0002\u0193%\u0003\u0002\u0002\u0002\u0194\u0195",
    "\u0007W\u0002\u0002\u0195\u0196\u0007h\u0002\u0002\u0196\u0198\u0007",
    "\u0007\u0002\u0002\u0197\u0199\u0005(\u0015\u0002\u0198\u0197\u0003",
    "\u0002\u0002\u0002\u0198\u0199\u0003\u0002\u0002\u0002\u0199\u019a\u0003",
    "\u0002\u0002\u0002\u019a\u019b\u0007\b\u0002\u0002\u019b\u019c\u0005",
    "> \u0002\u019c\'\u0003\u0002\u0002\u0002\u019d\u01a2\u0005<\u001f\u0002",
    "\u019e\u019f\u0007\f\u0002\u0002\u019f\u01a1\u0005<\u001f\u0002\u01a0",
    "\u019e\u0003\u0002\u0002\u0002\u01a1\u01a4\u0003\u0002\u0002\u0002\u01a2",
    "\u01a0\u0003\u0002\u0002\u0002\u01a2\u01a3\u0003\u0002\u0002\u0002\u01a3",
    ")\u0003\u0002\u0002\u0002\u01a4\u01a2\u0003\u0002\u0002\u0002\u01a5",
    "\u01ae\u0007\u0007\u0002\u0002\u01a6\u01ab\u0005\u000e\b\u0002\u01a7",
    "\u01a8\u0007\f\u0002\u0002\u01a8\u01aa\u0005\u000e\b\u0002\u01a9\u01a7",
    "\u0003\u0002\u0002\u0002\u01aa\u01ad\u0003\u0002\u0002\u0002\u01ab\u01a9",
    "\u0003\u0002\u0002\u0002\u01ab\u01ac\u0003\u0002\u0002\u0002\u01ac\u01af",
    "\u0003\u0002\u0002\u0002\u01ad\u01ab\u0003\u0002\u0002\u0002\u01ae\u01a6",
    "\u0003\u0002\u0002\u0002\u01ae\u01af\u0003\u0002\u0002\u0002\u01af\u01b0",
    "\u0003\u0002\u0002\u0002\u01b0\u01b1\u0007\b\u0002\u0002\u01b1+\u0003",
    "\u0002\u0002\u0002\u01b2\u01b3\u0007^\u0002\u0002\u01b3\u01b6\u0007",
    "h\u0002\u0002\u01b4\u01b5\u0007_\u0002\u0002\u01b5\u01b7\u0007h\u0002",
    "\u0002\u01b6\u01b4\u0003\u0002\u0002\u0002\u01b6\u01b7\u0003\u0002\u0002",
    "\u0002\u01b7\u01b8\u0003\u0002\u0002\u0002\u01b8\u01bc\u0007\t\u0002",
    "\u0002\u01b9\u01ba\u0007`\u0002\u0002\u01ba\u01bb\u0007\u000f\u0002",
    "\u0002\u01bb\u01bd\u0005.\u0018\u0002\u01bc\u01b9\u0003\u0002\u0002",
    "\u0002\u01bc\u01bd\u0003\u0002\u0002\u0002\u01bd\u01c1\u0003\u0002\u0002",
    "\u0002\u01be\u01bf\u0007a\u0002\u0002\u01bf\u01c0\u0007\u000f\u0002",
    "\u0002\u01c0\u01c2\u00052\u001a\u0002\u01c1\u01be\u0003\u0002\u0002",
    "\u0002\u01c1\u01c2\u0003\u0002\u0002\u0002\u01c2\u01c3\u0003\u0002\u0002",
    "\u0002\u01c3\u01c4\u0007\n\u0002\u0002\u01c4-\u0003\u0002\u0002\u0002",
    "\u01c5\u01c7\u0007h\u0002\u0002\u01c6\u01c8\u0007\f\u0002\u0002\u01c7",
    "\u01c6\u0003\u0002\u0002\u0002\u01c7\u01c8\u0003\u0002\u0002\u0002\u01c8",
    "\u01ca\u0003\u0002\u0002\u0002\u01c9\u01c5\u0003\u0002\u0002\u0002\u01ca",
    "\u01cb\u0003\u0002\u0002\u0002\u01cb\u01c9\u0003\u0002\u0002\u0002\u01cb",
    "\u01cc\u0003\u0002\u0002\u0002\u01cc/\u0003\u0002\u0002\u0002\u01cd",
    "\u01cf\u0007W\u0002\u0002\u01ce\u01cd\u0003\u0002\u0002\u0002\u01ce",
    "\u01cf\u0003\u0002\u0002\u0002\u01cf\u01d0\u0003\u0002\u0002\u0002\u01d0",
    "\u01d1\u0007h\u0002\u0002\u01d1\u01d3\u0007\u0007\u0002\u0002\u01d2",
    "\u01d4\u0005(\u0015\u0002\u01d3\u01d2\u0003\u0002\u0002\u0002\u01d3",
    "\u01d4\u0003\u0002\u0002\u0002\u01d4\u01d5\u0003\u0002\u0002\u0002\u01d5",
    "\u01d6\u0007\b\u0002\u0002\u01d6\u01d7\u0005> \u0002\u01d71\u0003\u0002",
    "\u0002\u0002\u01d8\u01da\u00050\u0019\u0002\u01d9\u01d8\u0003\u0002",
    "\u0002\u0002\u01da\u01db\u0003\u0002\u0002\u0002\u01db\u01d9\u0003\u0002",
    "\u0002\u0002\u01db\u01dc\u0003\u0002\u0002\u0002\u01dc3\u0003\u0002",
    "\u0002\u0002\u01dd\u01de\u0007]\u0002\u0002\u01de\u01df\u0007h\u0002",
    "\u0002\u01df\u01e0\u0005*\u0016\u0002\u01e05\u0003\u0002\u0002\u0002",
    "\u01e1\u01e3\u0007\u0005\u0002\u0002\u01e2\u01e4\u0005\u000e\b\u0002",
    "\u01e3\u01e2\u0003\u0002\u0002\u0002\u01e3\u01e4\u0003\u0002\u0002\u0002",
    "\u01e4\u01e5\u0003\u0002\u0002\u0002\u01e5\u01e6\u0007\u0006\u0002\u0002",
    "\u01e67\u0003\u0002\u0002\u0002\u01e7\u01e9\u00056\u001c\u0002\u01e8",
    "\u01e7\u0003\u0002\u0002\u0002\u01e9\u01ea\u0003\u0002\u0002\u0002\u01ea",
    "\u01e8\u0003\u0002\u0002\u0002\u01ea\u01eb\u0003\u0002\u0002\u0002\u01eb",
    "9\u0003\u0002\u0002\u0002\u01ec\u01f5\u0007\u0005\u0002\u0002\u01ed",
    "\u01f2\u0005\u000e\b\u0002\u01ee\u01ef\u0007\f\u0002\u0002\u01ef\u01f1",
    "\u0005\u000e\b\u0002\u01f0\u01ee\u0003\u0002\u0002\u0002\u01f1\u01f4",
    "\u0003\u0002\u0002\u0002\u01f2\u01f0\u0003\u0002\u0002\u0002\u01f2\u01f3",
    "\u0003\u0002\u0002\u0002\u01f3\u01f6\u0003\u0002\u0002\u0002\u01f4\u01f2",
    "\u0003\u0002\u0002\u0002\u01f5\u01ed\u0003\u0002\u0002\u0002\u01f5\u01f6",
    "\u0003\u0002\u0002\u0002\u01f6\u01f7\u0003\u0002\u0002\u0002\u01f7\u01f8",
    "\u0007\u0006\u0002\u0002\u01f8;\u0003\u0002\u0002\u0002\u01f9\u01fc",
    "\u0007h\u0002\u0002\u01fa\u01fb\u0007\r\u0002\u0002\u01fb\u01fd\u0005",
    "\u000e\b\u0002\u01fc\u01fa\u0003\u0002\u0002\u0002\u01fc\u01fd\u0003",
    "\u0002\u0002\u0002\u01fd=\u0003\u0002\u0002\u0002\u01fe\u0201\u0005",
    "\b\u0005\u0002\u01ff\u0201\u0005\u0006\u0004\u0002\u0200\u01fe\u0003",
    "\u0002\u0002\u0002\u0200\u01ff\u0003\u0002\u0002\u0002\u0201?\u0003",
    "\u0002\u0002\u0002\u0202\u0203\t\u0006\u0002\u0002\u0203A\u0003\u0002",
    "\u0002\u0002\u0204\u0205\u0007`\u0002\u0002\u0205\u0206\u0007\u0011",
    "\u0002\u0002\u0206\u020e\u0007h\u0002\u0002\u0207\u0208\u0007h\u0002",
    "\u0002\u0208\u020e\u00058\u001d\u0002\u0209\u020b\u0007g\u0002\u0002",
    "\u020a\u0209\u0003\u0002\u0002\u0002\u020a\u020b\u0003\u0002\u0002\u0002",
    "\u020b\u020c\u0003\u0002\u0002\u0002\u020c\u020e\u0007h\u0002\u0002",
    "\u020d\u0204\u0003\u0002\u0002\u0002\u020d\u0207\u0003\u0002\u0002\u0002",
    "\u020d\u020a\u0003\u0002\u0002\u0002\u020eC\u0003\u0002\u0002\u0002",
    "\u020f\u0213\u0005R*\u0002\u0210\u0213\u0007;\u0002\u0002\u0211\u0213",
    "\u0007E\u0002\u0002\u0212\u020f\u0003\u0002\u0002\u0002\u0212\u0210",
    "\u0003\u0002\u0002\u0002\u0212\u0211\u0003\u0002\u0002\u0002\u0213E",
    "\u0003\u0002\u0002\u0002\u0214\u021a\u0005L\'\u0002\u0215\u021a\u0005",
    "H%\u0002\u0216\u021a\u0005J&\u0002\u0217\u021a\u0005N(\u0002\u0218\u021a",
    "\u0005:\u001e\u0002\u0219\u0214\u0003\u0002\u0002\u0002\u0219\u0215",
    "\u0003\u0002\u0002\u0002\u0219\u0216\u0003\u0002\u0002\u0002\u0219\u0217",
    "\u0003\u0002\u0002\u0002\u0219\u0218\u0003\u0002\u0002\u0002\u021aG",
    "\u0003\u0002\u0002\u0002\u021b\u021c\u0007E\u0002\u0002\u021cI\u0003",
    "\u0002\u0002\u0002\u021d\u021e\u0007i\u0002\u0002\u021eK\u0003\u0002",
    "\u0002\u0002\u021f\u0220\u0007;\u0002\u0002\u0220M\u0003\u0002\u0002",
    "\u0002\u0221\u0222\t\u0007\u0002\u0002\u0222O\u0003\u0002\u0002\u0002",
    "\u0223\u0226\u0007h\u0002\u0002\u0224\u0226\u0005D#\u0002\u0225\u0223",
    "\u0003\u0002\u0002\u0002\u0225\u0224\u0003\u0002\u0002\u0002\u0226Q",
    "\u0003\u0002\u0002\u0002\u0227\u0232\u0003\u0002\u0002\u0002\u0228\u0232",
    "\u0007U\u0002\u0002\u0229\u0232\u0007S\u0002\u0002\u022a\u0232\u0007",
    "V\u0002\u0002\u022b\u0232\u0007H\u0002\u0002\u022c\u0232\u0007W\u0002",
    "\u0002\u022d\u0232\u0007R\u0002\u0002\u022e\u0232\u0007X\u0002\u0002",
    "\u022f\u0232\u0007d\u0002\u0002\u0230\u0232\u0007g\u0002\u0002\u0231",
    "\u0227\u0003\u0002\u0002\u0002\u0231\u0228\u0003\u0002\u0002\u0002\u0231",
    "\u0229\u0003\u0002\u0002\u0002\u0231\u022a\u0003\u0002\u0002\u0002\u0231",
    "\u022b\u0003\u0002\u0002\u0002\u0231\u022c\u0003\u0002\u0002\u0002\u0231",
    "\u022d\u0003\u0002\u0002\u0002\u0231\u022e\u0003\u0002\u0002\u0002\u0231",
    "\u022f\u0003\u0002\u0002\u0002\u0231\u0230\u0003\u0002\u0002\u0002\u0232",
    "S\u0003\u0002\u0002\u00029Zeiw\u00c7\u010b\u010d\u0119\u0120\u0126\u012a",
    "\u012d\u0132\u0137\u0141\u014b\u0150\u0156\u015e\u0161\u0167\u016a\u016d",
    "\u0173\u0176\u017c\u017f\u0182\u0188\u018b\u018f\u0198\u01a2\u01ab\u01ae",
    "\u01b6\u01bc\u01c1\u01c7\u01cb\u01ce\u01d3\u01db\u01e3\u01ea\u01f2\u01f5",
    "\u01fc\u0200\u020a\u020d\u0212\u0219\u0225\u0231"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class SintesisParser extends antlr4.Parser {

    static grammarFileName = "SintesisParser.g4";
    static literalNames = [ null, null, null, "'['", "']'", "'('", "')'", 
                            "'{'", "'}'", "';'", "','", "'='", "'?'", "':'", 
                            "'-...-'", "'.'", "'++'", "'--'", "'+'", "'-'", 
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
                            null, null, null, null, null, null, null, null, 
                            null, null, null, null, null, "'var'" ];
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
                             "NumberOf", "IndexOf", "SubString", "New_", 
                             "Class_", "Extends", "Attributes", "Methods", 
                             "Super", "InstanceOf", "Map", "Get", "Set", 
                             "Var_", "Identifier", "StringLiteral", "WhiteSpaces", 
                             "LineTerminator" ];
    static ruleNames = [ "program", "statementList", "statement", "block", 
                         "stepStatement", "printStatement", "expression", 
                         "basicFunction1", "basicFunction2", "basicFunction3", 
                         "basicFunction", "expressionSequence", "ifStatement", 
                         "elseIfs", "elseIf", "elseStatement", "iterationStatement", 
                         "returnStatement", "functionDeclaration", "formalParameterList", 
                         "arguments", "classDeclaration", "identifiers", 
                         "methodDeclaration", "methodsList", "classExp", 
                         "vectorIndex", "vectorIndexes", "vectorLiteral", 
                         "formalParameterArg", "functionBody", "assignmentOperator", 
                         "assignable", "reservedWord", "literal", "booleanLiteral", 
                         "stringLiteral", "nullLiteral", "numericLiteral", 
                         "identifierName", "keyword" ];

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
    			return this.precpred(this._ctx, 44);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	program() {
	    let localctx = new ProgramContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, SintesisParser.RULE_program);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 82;
	        this.statementList();
	        this.state = 83;
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
	        this.state = 86; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 85;
	            this.statement();
	            this.state = 88; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << SintesisParser.SingleLineComment) | (1 << SintesisParser.OpenBracket) | (1 << SintesisParser.OpenParen) | (1 << SintesisParser.OpenBrace) | (1 << SintesisParser.PlusPlus) | (1 << SintesisParser.MinusMinus) | (1 << SintesisParser.Plus) | (1 << SintesisParser.Minus) | (1 << SintesisParser.BitNot) | (1 << SintesisParser.Not))) !== 0) || ((((_la - 57)) & ~0x1f) == 0 && ((1 << (_la - 57)) & ((1 << (SintesisParser.NullLiteral - 57)) | (1 << (SintesisParser.DecimalLiteral - 57)) | (1 << (SintesisParser.HexIntegerLiteral - 57)) | (1 << (SintesisParser.OctalIntegerLiteral - 57)) | (1 << (SintesisParser.OctalIntegerLiteral2 - 57)) | (1 << (SintesisParser.BinaryIntegerLiteral - 57)) | (1 << (SintesisParser.BooleanLiteral - 57)) | (1 << (SintesisParser.Step - 57)) | (1 << (SintesisParser.Print - 57)) | (1 << (SintesisParser.While - 57)) | (1 << (SintesisParser.Repeat - 57)) | (1 << (SintesisParser.Do - 57)) | (1 << (SintesisParser.For - 57)) | (1 << (SintesisParser.ForEach - 57)) | (1 << (SintesisParser.If - 57)) | (1 << (SintesisParser.Return - 57)) | (1 << (SintesisParser.Function_ - 57)) | (1 << (SintesisParser.Vector - 57)) | (1 << (SintesisParser.NumberOf - 57)))) !== 0) || ((((_la - 89)) & ~0x1f) == 0 && ((1 << (_la - 89)) & ((1 << (SintesisParser.IndexOf - 89)) | (1 << (SintesisParser.SubString - 89)) | (1 << (SintesisParser.Class_ - 89)) | (1 << (SintesisParser.Attributes - 89)) | (1 << (SintesisParser.Methods - 89)) | (1 << (SintesisParser.Super - 89)) | (1 << (SintesisParser.Map - 89)) | (1 << (SintesisParser.Var_ - 89)) | (1 << (SintesisParser.Identifier - 89)) | (1 << (SintesisParser.StringLiteral - 89)))) !== 0));
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
	        this.state = 99;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case SintesisParser.OpenBrace:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 90;
	            this.block();
	            break;
	        case SintesisParser.Step:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 91;
	            this.stepStatement();
	            break;
	        case SintesisParser.Print:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 92;
	            this.printStatement();
	            break;
	        case SintesisParser.If:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 93;
	            this.ifStatement();
	            break;
	        case SintesisParser.While:
	        case SintesisParser.Repeat:
	        case SintesisParser.Do:
	        case SintesisParser.For:
	        case SintesisParser.ForEach:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 94;
	            this.iterationStatement();
	            break;
	        case SintesisParser.Return:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 95;
	            this.returnStatement();
	            break;
	        case SintesisParser.Class_:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 96;
	            this.classDeclaration();
	            break;
	        case SintesisParser.Function_:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 97;
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
	        case SintesisParser.NumberOf:
	        case SintesisParser.IndexOf:
	        case SintesisParser.SubString:
	        case SintesisParser.Attributes:
	        case SintesisParser.Methods:
	        case SintesisParser.Super:
	        case SintesisParser.Map:
	        case SintesisParser.Var_:
	        case SintesisParser.Identifier:
	        case SintesisParser.StringLiteral:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 98;
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
	        this.state = 101;
	        this.match(SintesisParser.OpenBrace);
	        this.state = 103;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << SintesisParser.SingleLineComment) | (1 << SintesisParser.OpenBracket) | (1 << SintesisParser.OpenParen) | (1 << SintesisParser.OpenBrace) | (1 << SintesisParser.PlusPlus) | (1 << SintesisParser.MinusMinus) | (1 << SintesisParser.Plus) | (1 << SintesisParser.Minus) | (1 << SintesisParser.BitNot) | (1 << SintesisParser.Not))) !== 0) || ((((_la - 57)) & ~0x1f) == 0 && ((1 << (_la - 57)) & ((1 << (SintesisParser.NullLiteral - 57)) | (1 << (SintesisParser.DecimalLiteral - 57)) | (1 << (SintesisParser.HexIntegerLiteral - 57)) | (1 << (SintesisParser.OctalIntegerLiteral - 57)) | (1 << (SintesisParser.OctalIntegerLiteral2 - 57)) | (1 << (SintesisParser.BinaryIntegerLiteral - 57)) | (1 << (SintesisParser.BooleanLiteral - 57)) | (1 << (SintesisParser.Step - 57)) | (1 << (SintesisParser.Print - 57)) | (1 << (SintesisParser.While - 57)) | (1 << (SintesisParser.Repeat - 57)) | (1 << (SintesisParser.Do - 57)) | (1 << (SintesisParser.For - 57)) | (1 << (SintesisParser.ForEach - 57)) | (1 << (SintesisParser.If - 57)) | (1 << (SintesisParser.Return - 57)) | (1 << (SintesisParser.Function_ - 57)) | (1 << (SintesisParser.Vector - 57)) | (1 << (SintesisParser.NumberOf - 57)))) !== 0) || ((((_la - 89)) & ~0x1f) == 0 && ((1 << (_la - 89)) & ((1 << (SintesisParser.IndexOf - 89)) | (1 << (SintesisParser.SubString - 89)) | (1 << (SintesisParser.Class_ - 89)) | (1 << (SintesisParser.Attributes - 89)) | (1 << (SintesisParser.Methods - 89)) | (1 << (SintesisParser.Super - 89)) | (1 << (SintesisParser.Map - 89)) | (1 << (SintesisParser.Var_ - 89)) | (1 << (SintesisParser.Identifier - 89)) | (1 << (SintesisParser.StringLiteral - 89)))) !== 0)) {
	            this.state = 102;
	            localctx.stmt = this.statementList();
	        }

	        this.state = 105;
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
	        this.state = 107;
	        this.match(SintesisParser.Step);
	        this.state = 108;
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
	        this.state = 110;
	        this.match(SintesisParser.Print);
	        this.state = 111;
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
	        this.state = 197;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new ExpVectorDeclarationContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 114;
	            this.match(SintesisParser.Vector);
	            this.state = 115;
	            localctx.idx = this.vectorIndexes();
	            this.state = 117;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
	            if(la_===1) {
	                this.state = 116;
	                localctx.args = this.arguments();

	            }
	            break;

	        case 2:
	            localctx = new ExpMapDeclarationContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 119;
	            this.match(SintesisParser.Map);
	            this.state = 120;
	            localctx.args = this.arguments();
	            break;

	        case 3:
	            localctx = new ExpBasicFunctionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 121;
	            localctx.fn = this.basicFunction();
	            this.state = 122;
	            localctx.args = this.arguments();
	            break;

	        case 4:
	            localctx = new ExpVectorContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 124;
	            localctx.id = this.match(SintesisParser.Identifier);
	            this.state = 125;
	            localctx.idx = this.vectorIndexes();
	            break;

	        case 5:
	            localctx = new ExpDictionaryGetContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 126;
	            localctx.id = this.match(SintesisParser.Identifier);
	            this.state = 127;
	            this.match(SintesisParser.Dot);
	            this.state = 128;
	            this.match(SintesisParser.Get);
	            this.state = 129;
	            this.match(SintesisParser.OpenParen);
	            this.state = 130;
	            localctx.exp = this.expression(0);
	            this.state = 131;
	            this.match(SintesisParser.CloseParen);
	            break;

	        case 6:
	            localctx = new ExpDictionarySetContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 133;
	            localctx.id = this.match(SintesisParser.Identifier);
	            this.state = 134;
	            this.match(SintesisParser.Dot);
	            this.state = 135;
	            this.match(SintesisParser.Set);
	            this.state = 136;
	            this.match(SintesisParser.OpenParen);
	            this.state = 137;
	            localctx.key = this.match(SintesisParser.StringLiteral);
	            this.state = 138;
	            this.match(SintesisParser.Comma);
	            this.state = 139;
	            this.expression(0);
	            this.state = 140;
	            this.match(SintesisParser.CloseParen);
	            break;

	        case 7:
	            localctx = new ExpDictionaryDeleteContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 142;
	            localctx.id = this.match(SintesisParser.Identifier);
	            this.state = 143;
	            this.match(SintesisParser.Dot);
	            this.state = 144;
	            this.match(SintesisParser.Delete);
	            this.state = 145;
	            this.match(SintesisParser.OpenParen);
	            this.state = 146;
	            localctx.key = this.match(SintesisParser.StringLiteral);
	            this.state = 147;
	            this.match(SintesisParser.CloseParen);
	            break;

	        case 8:
	            localctx = new ExpMemberMethodContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 148;
	            localctx.id = this.match(SintesisParser.Identifier);
	            this.state = 149;
	            this.match(SintesisParser.Dot);
	            this.state = 150;
	            localctx.method = this.match(SintesisParser.Identifier);
	            this.state = 151;
	            localctx.args = this.arguments();
	            break;

	        case 9:
	            localctx = new ExpMemberAttributeContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 152;
	            localctx.id = this.match(SintesisParser.Identifier);
	            this.state = 153;
	            this.match(SintesisParser.Dot);
	            this.state = 154;
	            localctx.attr = this.match(SintesisParser.Identifier);
	            break;

	        case 10:
	            localctx = new ExpInstanceOfContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 155;
	            localctx.id = this.match(SintesisParser.Identifier);
	            this.state = 156;
	            this.match(SintesisParser.InstanceOf);
	            this.state = 157;
	            localctx.is = this.match(SintesisParser.Identifier);
	            break;

	        case 11:
	            localctx = new ExpAttributeContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 158;
	            this.match(SintesisParser.Attributes);
	            this.state = 159;
	            this.match(SintesisParser.Dot);
	            this.state = 160;
	            localctx.id = this.match(SintesisParser.Identifier);
	            break;

	        case 12:
	            localctx = new ExpMethodCallContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 161;
	            this.match(SintesisParser.Methods);
	            this.state = 162;
	            this.match(SintesisParser.Dot);
	            this.state = 163;
	            localctx.id = this.match(SintesisParser.Identifier);
	            this.state = 164;
	            localctx.args = this.arguments();
	            break;

	        case 13:
	            localctx = new ExpSuperExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 165;
	            this.match(SintesisParser.Super);
	            this.state = 166;
	            localctx.args = this.arguments();
	            break;

	        case 14:
	            localctx = new ExpFunctionCallContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 167;
	            localctx.id = this.match(SintesisParser.Identifier);
	            this.state = 168;
	            localctx.args = this.arguments();
	            break;

	        case 15:
	            localctx = new ExpPostIncrementContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 169;
	            localctx.dest = this.assignable();
	            this.state = 170;
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

	        case 16:
	            localctx = new ExpPreIncrementContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 172;
	            localctx.op = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!(_la===SintesisParser.PlusPlus || _la===SintesisParser.MinusMinus)) {
	                localctx.op = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 173;
	            localctx.dest = this.assignable();
	            break;

	        case 17:
	            localctx = new ExpUnaryPlusContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 174;
	            this.match(SintesisParser.Plus);
	            this.state = 175;
	            localctx.exp = this.expression(30);
	            break;

	        case 18:
	            localctx = new ExpUnaryMinusContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 176;
	            this.match(SintesisParser.Minus);
	            this.state = 177;
	            localctx.exp = this.expression(29);
	            break;

	        case 19:
	            localctx = new ExpBitNotContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 178;
	            this.match(SintesisParser.BitNot);
	            this.state = 179;
	            localctx.exp = this.expression(28);
	            break;

	        case 20:
	            localctx = new ExpNotContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 180;
	            this.match(SintesisParser.Not);
	            this.state = 181;
	            localctx.exp = this.expression(27);
	            break;

	        case 21:
	            localctx = new ExpAssignmentContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 182;
	            localctx.dest = this.assignable();
	            this.state = 183;
	            this.match(SintesisParser.Assign);
	            this.state = 184;
	            localctx.exp = this.expression(6);
	            break;

	        case 22:
	            localctx = new ExpAssignmentOperatorContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 186;
	            localctx.dest = this.assignable();
	            this.state = 187;
	            localctx.op = this.assignmentOperator();
	            this.state = 188;
	            localctx.exp = this.expression(5);
	            break;

	        case 23:
	            localctx = new ExpIdentifierContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 190;
	            localctx.id = this.match(SintesisParser.Identifier);
	            break;

	        case 24:
	            localctx = new ExpLiteralContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 191;
	            this.literal();
	            break;

	        case 25:
	            localctx = new ExpParenthesisContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 192;
	            this.match(SintesisParser.OpenParen);
	            this.state = 193;
	            localctx.exp = this.expression(0);
	            this.state = 194;
	            this.match(SintesisParser.CloseParen);
	            break;

	        case 26:
	            localctx = new ExpCommentContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 196;
	            this.match(SintesisParser.SingleLineComment);
	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 267;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,6,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 265;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new ExpOpContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    localctx.e1 = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, SintesisParser.RULE_expression);
	                    this.state = 199;
	                    if (!( this.precpred(this._ctx, 26))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 26)");
	                    }
	                    this.state = 200;
	                    localctx.op = this.match(SintesisParser.Plus);
	                    this.state = 201;
	                    localctx.e2 = this.expression(27);
	                    break;

	                case 2:
	                    localctx = new ExpOpContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    localctx.e1 = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, SintesisParser.RULE_expression);
	                    this.state = 202;
	                    if (!( this.precpred(this._ctx, 25))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 25)");
	                    }
	                    this.state = 203;
	                    localctx.op = this.match(SintesisParser.Minus);
	                    this.state = 204;
	                    localctx.e2 = this.expression(26);
	                    break;

	                case 3:
	                    localctx = new ExpOpContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    localctx.e1 = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, SintesisParser.RULE_expression);
	                    this.state = 205;
	                    if (!( this.precpred(this._ctx, 24))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 24)");
	                    }
	                    this.state = 206;
	                    localctx.op = this.match(SintesisParser.Multiply);
	                    this.state = 207;
	                    localctx.e2 = this.expression(25);
	                    break;

	                case 4:
	                    localctx = new ExpOpContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    localctx.e1 = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, SintesisParser.RULE_expression);
	                    this.state = 208;
	                    if (!( this.precpred(this._ctx, 23))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 23)");
	                    }
	                    this.state = 209;
	                    localctx.op = this.match(SintesisParser.Divide);
	                    this.state = 210;
	                    localctx.e2 = this.expression(24);
	                    break;

	                case 5:
	                    localctx = new ExpOpContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    localctx.e1 = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, SintesisParser.RULE_expression);
	                    this.state = 211;
	                    if (!( this.precpred(this._ctx, 22))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 22)");
	                    }
	                    this.state = 212;
	                    localctx.op = this.match(SintesisParser.Power);
	                    this.state = 213;
	                    localctx.e2 = this.expression(22);
	                    break;

	                case 6:
	                    localctx = new ExpOpContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    localctx.e1 = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, SintesisParser.RULE_expression);
	                    this.state = 214;
	                    if (!( this.precpred(this._ctx, 21))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 21)");
	                    }
	                    this.state = 215;
	                    localctx.op = this.match(SintesisParser.Modulus);
	                    this.state = 216;
	                    localctx.e2 = this.expression(22);
	                    break;

	                case 7:
	                    localctx = new ExpOpContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    localctx.e1 = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, SintesisParser.RULE_expression);
	                    this.state = 217;
	                    if (!( this.precpred(this._ctx, 20))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 20)");
	                    }
	                    this.state = 218;
	                    localctx.op = this.match(SintesisParser.LessThan);
	                    this.state = 219;
	                    localctx.e2 = this.expression(21);
	                    break;

	                case 8:
	                    localctx = new ExpOpContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    localctx.e1 = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, SintesisParser.RULE_expression);
	                    this.state = 220;
	                    if (!( this.precpred(this._ctx, 19))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 19)");
	                    }
	                    this.state = 221;
	                    localctx.op = this.match(SintesisParser.MoreThan);
	                    this.state = 222;
	                    localctx.e2 = this.expression(20);
	                    break;

	                case 9:
	                    localctx = new ExpOpContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    localctx.e1 = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, SintesisParser.RULE_expression);
	                    this.state = 223;
	                    if (!( this.precpred(this._ctx, 18))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 18)");
	                    }
	                    this.state = 224;
	                    localctx.op = this.match(SintesisParser.LessThanEquals);
	                    this.state = 225;
	                    localctx.e2 = this.expression(19);
	                    break;

	                case 10:
	                    localctx = new ExpOpContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    localctx.e1 = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, SintesisParser.RULE_expression);
	                    this.state = 226;
	                    if (!( this.precpred(this._ctx, 17))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 17)");
	                    }
	                    this.state = 227;
	                    localctx.op = this.match(SintesisParser.GreaterThanEquals);
	                    this.state = 228;
	                    localctx.e2 = this.expression(18);
	                    break;

	                case 11:
	                    localctx = new ExpOpContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    localctx.e1 = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, SintesisParser.RULE_expression);
	                    this.state = 229;
	                    if (!( this.precpred(this._ctx, 16))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 16)");
	                    }
	                    this.state = 230;
	                    localctx.op = this.match(SintesisParser.BitAnd);
	                    this.state = 231;
	                    localctx.e2 = this.expression(17);
	                    break;

	                case 12:
	                    localctx = new ExpOpContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    localctx.e1 = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, SintesisParser.RULE_expression);
	                    this.state = 232;
	                    if (!( this.precpred(this._ctx, 15))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 15)");
	                    }
	                    this.state = 233;
	                    localctx.op = this.match(SintesisParser.BitOr);
	                    this.state = 234;
	                    localctx.e2 = this.expression(16);
	                    break;

	                case 13:
	                    localctx = new ExpOpContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    localctx.e1 = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, SintesisParser.RULE_expression);
	                    this.state = 235;
	                    if (!( this.precpred(this._ctx, 14))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 14)");
	                    }
	                    this.state = 236;
	                    localctx.op = this.match(SintesisParser.BitXOr);
	                    this.state = 237;
	                    localctx.e2 = this.expression(15);
	                    break;

	                case 14:
	                    localctx = new ExpOpContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    localctx.e1 = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, SintesisParser.RULE_expression);
	                    this.state = 238;
	                    if (!( this.precpred(this._ctx, 13))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 13)");
	                    }
	                    this.state = 239;
	                    localctx.op = this.match(SintesisParser.IdentityEquals);
	                    this.state = 240;
	                    localctx.e2 = this.expression(14);
	                    break;

	                case 15:
	                    localctx = new ExpOpContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    localctx.e1 = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, SintesisParser.RULE_expression);
	                    this.state = 241;
	                    if (!( this.precpred(this._ctx, 12))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 12)");
	                    }
	                    this.state = 242;
	                    localctx.op = this.match(SintesisParser.IdentityNotEquals);
	                    this.state = 243;
	                    localctx.e2 = this.expression(13);
	                    break;

	                case 16:
	                    localctx = new ExpOpContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    localctx.e1 = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, SintesisParser.RULE_expression);
	                    this.state = 244;
	                    if (!( this.precpred(this._ctx, 11))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 11)");
	                    }
	                    this.state = 245;
	                    localctx.op = this.match(SintesisParser.Equals_);
	                    this.state = 246;
	                    localctx.e2 = this.expression(12);
	                    break;

	                case 17:
	                    localctx = new ExpOpContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    localctx.e1 = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, SintesisParser.RULE_expression);
	                    this.state = 247;
	                    if (!( this.precpred(this._ctx, 10))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
	                    }
	                    this.state = 248;
	                    localctx.op = this.match(SintesisParser.NotEquals);
	                    this.state = 249;
	                    localctx.e2 = this.expression(11);
	                    break;

	                case 18:
	                    localctx = new ExpOpContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    localctx.e1 = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, SintesisParser.RULE_expression);
	                    this.state = 250;
	                    if (!( this.precpred(this._ctx, 9))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
	                    }
	                    this.state = 251;
	                    localctx.op = this.match(SintesisParser.And);
	                    this.state = 252;
	                    localctx.e2 = this.expression(10);
	                    break;

	                case 19:
	                    localctx = new ExpOpContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    localctx.e1 = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, SintesisParser.RULE_expression);
	                    this.state = 253;
	                    if (!( this.precpred(this._ctx, 8))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
	                    }
	                    this.state = 254;
	                    localctx.op = this.match(SintesisParser.Or);
	                    this.state = 255;
	                    localctx.e2 = this.expression(9);
	                    break;

	                case 20:
	                    localctx = new ExpTernaryContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    localctx.cond = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, SintesisParser.RULE_expression);
	                    this.state = 256;
	                    if (!( this.precpred(this._ctx, 7))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
	                    }
	                    this.state = 257;
	                    this.match(SintesisParser.QuestionMark);
	                    this.state = 258;
	                    localctx.ok = this.expression(0);
	                    this.state = 259;
	                    this.match(SintesisParser.Colon);
	                    this.state = 260;
	                    localctx.no = this.expression(8);
	                    break;

	                case 21:
	                    localctx = new ExpBasicFunctionMemberContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    localctx.exp = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, SintesisParser.RULE_expression);
	                    this.state = 262;
	                    if (!( this.precpred(this._ctx, 44))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 44)");
	                    }
	                    this.state = 263;
	                    this.match(SintesisParser.Dot);
	                    this.state = 264;
	                    localctx.fn = this.basicFunction1();
	                    break;

	                } 
	            }
	            this.state = 269;
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



	basicFunction1() {
	    let localctx = new BasicFunction1Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, SintesisParser.RULE_basicFunction1);
	    try {
	        localctx = new NumberOfContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 270;
	        this.match(SintesisParser.NumberOf);
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
	    this.enterRule(localctx, 16, SintesisParser.RULE_basicFunction2);
	    try {
	        localctx = new IndexOfContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 272;
	        this.match(SintesisParser.IndexOf);
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
	    this.enterRule(localctx, 18, SintesisParser.RULE_basicFunction3);
	    try {
	        localctx = new SubstringContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 274;
	        this.match(SintesisParser.SubString);
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
	    this.enterRule(localctx, 20, SintesisParser.RULE_basicFunction);
	    try {
	        this.state = 279;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case SintesisParser.NumberOf:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 276;
	            this.basicFunction1();
	            break;
	        case SintesisParser.IndexOf:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 277;
	            this.basicFunction2();
	            break;
	        case SintesisParser.SubString:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 278;
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
	    this.enterRule(localctx, 22, SintesisParser.RULE_expressionSequence);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 281;
	        this.expression(0);
	        this.state = 286;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===SintesisParser.Comma) {
	            this.state = 282;
	            this.match(SintesisParser.Comma);
	            this.state = 283;
	            this.expression(0);
	            this.state = 288;
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
	    this.enterRule(localctx, 24, SintesisParser.RULE_ifStatement);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 289;
	        this.match(SintesisParser.If);
	        this.state = 290;
	        localctx.exp = this.expression(0);
	        this.state = 292;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===SintesisParser.Then) {
	            this.state = 291;
	            this.match(SintesisParser.Then);
	        }

	        this.state = 294;
	        localctx.stmt = this.statement();
	        this.state = 296;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
	        if(la_===1) {
	            this.state = 295;
	            localctx.elseifs = this.elseIfs();

	        }
	        this.state = 299;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,11,this._ctx);
	        if(la_===1) {
	            this.state = 298;
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
	    this.enterRule(localctx, 26, SintesisParser.RULE_elseIfs);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 302; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 301;
	        		this.elseIf();
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 304; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,12, this._ctx);
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
	    this.enterRule(localctx, 28, SintesisParser.RULE_elseIf);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 306;
	        this.match(SintesisParser.ElseIf);
	        this.state = 307;
	        localctx.exp = this.expression(0);
	        this.state = 309;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===SintesisParser.Then) {
	            this.state = 308;
	            this.match(SintesisParser.Then);
	        }

	        this.state = 311;
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
	    this.enterRule(localctx, 30, SintesisParser.RULE_elseStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 313;
	        this.match(SintesisParser.Else);
	        this.state = 314;
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
	    this.enterRule(localctx, 32, SintesisParser.RULE_iterationStatement);
	    var _la = 0; // Token type
	    try {
	        this.state = 397;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,30,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new RepeatStatementContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 316;
	            this.match(SintesisParser.Repeat);
	            this.state = 317;
	            localctx.exp = this.expression(0);
	            this.state = 319;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===SintesisParser.Times) {
	                this.state = 318;
	                this.match(SintesisParser.Times);
	            }

	            this.state = 321;
	            localctx.stmt = this.statement();
	            break;

	        case 2:
	            localctx = new RepeatWhileStatementContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 323;
	            _la = this._input.LA(1);
	            if(!(_la===SintesisParser.Repeat || _la===SintesisParser.Do)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 324;
	            localctx.stmt = this.statement();
	            this.state = 325;
	            this.match(SintesisParser.While);
	            this.state = 326;
	            localctx.exp = this.expression(0);
	            break;

	        case 3:
	            localctx = new WhileRepeatStatementContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 329;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===SintesisParser.Repeat) {
	                this.state = 328;
	                this.match(SintesisParser.Repeat);
	            }

	            this.state = 331;
	            this.match(SintesisParser.While);
	            this.state = 332;
	            localctx.exp = this.expression(0);
	            this.state = 334;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,16,this._ctx);
	            if(la_===1) {
	                this.state = 333;
	                _la = this._input.LA(1);
	                if(!(_la===SintesisParser.Repeat || _la===SintesisParser.Do)) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }

	            }
	            this.state = 336;
	            localctx.stmt = this.statement();
	            break;

	        case 4:
	            localctx = new ForFromToStatementContext(this, localctx);
	            this.enterOuterAlt(localctx, 4);
	            this.state = 338;
	            this.match(SintesisParser.For);
	            this.state = 340;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===SintesisParser.OpenParen) {
	                this.state = 339;
	                this.match(SintesisParser.OpenParen);
	            }

	            this.state = 342;
	            localctx.id = this.match(SintesisParser.Identifier);
	            this.state = 343;
	            _la = this._input.LA(1);
	            if(!(_la===SintesisParser.Assign || _la===SintesisParser.In)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 344;
	            localctx.start = this.expression(0);
	            this.state = 345;
	            this.match(SintesisParser.To);
	            this.state = 346;
	            localctx.to = this.expression(0);
	            this.state = 348;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===SintesisParser.CloseParen) {
	                this.state = 347;
	                this.match(SintesisParser.CloseParen);
	            }

	            this.state = 351;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,19,this._ctx);
	            if(la_===1) {
	                this.state = 350;
	                this.match(SintesisParser.Repeat);

	            }
	            this.state = 353;
	            localctx.stmt = this.statement();
	            break;

	        case 5:
	            localctx = new ForEachInCollectionStatementContext(this, localctx);
	            this.enterOuterAlt(localctx, 5);
	            this.state = 360;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case SintesisParser.For:
	                this.state = 355;
	                this.match(SintesisParser.For);
	                this.state = 357;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                if(_la===SintesisParser.Each) {
	                    this.state = 356;
	                    this.match(SintesisParser.Each);
	                }

	                break;
	            case SintesisParser.ForEach:
	                this.state = 359;
	                this.match(SintesisParser.ForEach);
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 363;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===SintesisParser.OpenParen) {
	                this.state = 362;
	                this.match(SintesisParser.OpenParen);
	            }

	            this.state = 365;
	            localctx.id = this.match(SintesisParser.Identifier);
	            this.state = 366;
	            this.match(SintesisParser.In);
	            this.state = 367;
	            localctx.coll = this.expression(0);
	            this.state = 369;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===SintesisParser.CloseParen) {
	                this.state = 368;
	                this.match(SintesisParser.CloseParen);
	            }

	            this.state = 372;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,24,this._ctx);
	            if(la_===1) {
	                this.state = 371;
	                _la = this._input.LA(1);
	                if(!(_la===SintesisParser.Repeat || _la===SintesisParser.Do)) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }

	            }
	            this.state = 374;
	            localctx.stmt = this.statement();
	            break;

	        case 6:
	            localctx = new ForEachOfCollectionStatementContext(this, localctx);
	            this.enterOuterAlt(localctx, 6);
	            this.state = 381;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case SintesisParser.For:
	                this.state = 376;
	                this.match(SintesisParser.For);
	                this.state = 378;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                if(_la===SintesisParser.Each) {
	                    this.state = 377;
	                    this.match(SintesisParser.Each);
	                }

	                break;
	            case SintesisParser.ForEach:
	                this.state = 380;
	                this.match(SintesisParser.ForEach);
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 384;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===SintesisParser.OpenParen) {
	                this.state = 383;
	                this.match(SintesisParser.OpenParen);
	            }

	            this.state = 386;
	            localctx.id = this.match(SintesisParser.Identifier);
	            this.state = 387;
	            this.match(SintesisParser.Of);
	            this.state = 388;
	            localctx.coll = this.expression(0);
	            this.state = 390;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===SintesisParser.CloseParen) {
	                this.state = 389;
	                this.match(SintesisParser.CloseParen);
	            }

	            this.state = 393;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,29,this._ctx);
	            if(la_===1) {
	                this.state = 392;
	                _la = this._input.LA(1);
	                if(!(_la===SintesisParser.Repeat || _la===SintesisParser.Do)) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }

	            }
	            this.state = 395;
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
	    this.enterRule(localctx, 34, SintesisParser.RULE_returnStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 399;
	        this.match(SintesisParser.Return);
	        this.state = 400;
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
	    this.enterRule(localctx, 36, SintesisParser.RULE_functionDeclaration);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 402;
	        this.match(SintesisParser.Function_);
	        this.state = 403;
	        localctx.id = this.match(SintesisParser.Identifier);
	        this.state = 404;
	        this.match(SintesisParser.OpenParen);
	        this.state = 406;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===SintesisParser.Identifier) {
	            this.state = 405;
	            localctx.pl = this.formalParameterList();
	        }

	        this.state = 408;
	        this.match(SintesisParser.CloseParen);
	        this.state = 409;
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
	    this.enterRule(localctx, 38, SintesisParser.RULE_formalParameterList);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 411;
	        this.formalParameterArg();
	        this.state = 416;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===SintesisParser.Comma) {
	            this.state = 412;
	            this.match(SintesisParser.Comma);
	            this.state = 413;
	            this.formalParameterArg();
	            this.state = 418;
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
	    this.enterRule(localctx, 40, SintesisParser.RULE_arguments);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 419;
	        this.match(SintesisParser.OpenParen);
	        this.state = 428;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << SintesisParser.SingleLineComment) | (1 << SintesisParser.OpenBracket) | (1 << SintesisParser.OpenParen) | (1 << SintesisParser.PlusPlus) | (1 << SintesisParser.MinusMinus) | (1 << SintesisParser.Plus) | (1 << SintesisParser.Minus) | (1 << SintesisParser.BitNot) | (1 << SintesisParser.Not))) !== 0) || ((((_la - 57)) & ~0x1f) == 0 && ((1 << (_la - 57)) & ((1 << (SintesisParser.NullLiteral - 57)) | (1 << (SintesisParser.DecimalLiteral - 57)) | (1 << (SintesisParser.HexIntegerLiteral - 57)) | (1 << (SintesisParser.OctalIntegerLiteral - 57)) | (1 << (SintesisParser.OctalIntegerLiteral2 - 57)) | (1 << (SintesisParser.BinaryIntegerLiteral - 57)) | (1 << (SintesisParser.BooleanLiteral - 57)) | (1 << (SintesisParser.Vector - 57)) | (1 << (SintesisParser.NumberOf - 57)))) !== 0) || ((((_la - 89)) & ~0x1f) == 0 && ((1 << (_la - 89)) & ((1 << (SintesisParser.IndexOf - 89)) | (1 << (SintesisParser.SubString - 89)) | (1 << (SintesisParser.Attributes - 89)) | (1 << (SintesisParser.Methods - 89)) | (1 << (SintesisParser.Super - 89)) | (1 << (SintesisParser.Map - 89)) | (1 << (SintesisParser.Var_ - 89)) | (1 << (SintesisParser.Identifier - 89)) | (1 << (SintesisParser.StringLiteral - 89)))) !== 0)) {
	            this.state = 420;
	            this.expression(0);
	            this.state = 425;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===SintesisParser.Comma) {
	                this.state = 421;
	                this.match(SintesisParser.Comma);
	                this.state = 422;
	                this.expression(0);
	                this.state = 427;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 430;
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
	    this.enterRule(localctx, 42, SintesisParser.RULE_classDeclaration);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 432;
	        this.match(SintesisParser.Class_);
	        this.state = 433;
	        localctx.id = this.match(SintesisParser.Identifier);
	        this.state = 436;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===SintesisParser.Extends) {
	            this.state = 434;
	            this.match(SintesisParser.Extends);
	            this.state = 435;
	            localctx.ext = this.match(SintesisParser.Identifier);
	        }

	        this.state = 438;
	        this.match(SintesisParser.OpenBrace);
	        this.state = 442;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===SintesisParser.Attributes) {
	            this.state = 439;
	            this.match(SintesisParser.Attributes);
	            this.state = 440;
	            this.match(SintesisParser.Colon);
	            this.state = 441;
	            localctx.atrs = this.identifiers();
	        }

	        this.state = 447;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===SintesisParser.Methods) {
	            this.state = 444;
	            this.match(SintesisParser.Methods);
	            this.state = 445;
	            this.match(SintesisParser.Colon);
	            this.state = 446;
	            localctx.methods = this.methodsList();
	        }

	        this.state = 449;
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
	    this.enterRule(localctx, 44, SintesisParser.RULE_identifiers);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 455; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 451;
	            this.match(SintesisParser.Identifier);
	            this.state = 453;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===SintesisParser.Comma) {
	                this.state = 452;
	                this.match(SintesisParser.Comma);
	            }

	            this.state = 457; 
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
	    this.enterRule(localctx, 46, SintesisParser.RULE_methodDeclaration);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 460;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===SintesisParser.Function_) {
	            this.state = 459;
	            this.match(SintesisParser.Function_);
	        }

	        this.state = 462;
	        localctx.id = this.match(SintesisParser.Identifier);
	        this.state = 463;
	        this.match(SintesisParser.OpenParen);
	        this.state = 465;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===SintesisParser.Identifier) {
	            this.state = 464;
	            localctx.pl = this.formalParameterList();
	        }

	        this.state = 467;
	        this.match(SintesisParser.CloseParen);
	        this.state = 468;
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
	    this.enterRule(localctx, 48, SintesisParser.RULE_methodsList);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 471; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 470;
	            this.methodDeclaration();
	            this.state = 473; 
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
	    this.enterRule(localctx, 50, SintesisParser.RULE_classExp);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 475;
	        this.match(SintesisParser.New_);
	        this.state = 476;
	        this.match(SintesisParser.Identifier);
	        this.state = 477;
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
	    this.enterRule(localctx, 52, SintesisParser.RULE_vectorIndex);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 479;
	        this.match(SintesisParser.OpenBracket);
	        this.state = 481;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << SintesisParser.SingleLineComment) | (1 << SintesisParser.OpenBracket) | (1 << SintesisParser.OpenParen) | (1 << SintesisParser.PlusPlus) | (1 << SintesisParser.MinusMinus) | (1 << SintesisParser.Plus) | (1 << SintesisParser.Minus) | (1 << SintesisParser.BitNot) | (1 << SintesisParser.Not))) !== 0) || ((((_la - 57)) & ~0x1f) == 0 && ((1 << (_la - 57)) & ((1 << (SintesisParser.NullLiteral - 57)) | (1 << (SintesisParser.DecimalLiteral - 57)) | (1 << (SintesisParser.HexIntegerLiteral - 57)) | (1 << (SintesisParser.OctalIntegerLiteral - 57)) | (1 << (SintesisParser.OctalIntegerLiteral2 - 57)) | (1 << (SintesisParser.BinaryIntegerLiteral - 57)) | (1 << (SintesisParser.BooleanLiteral - 57)) | (1 << (SintesisParser.Vector - 57)) | (1 << (SintesisParser.NumberOf - 57)))) !== 0) || ((((_la - 89)) & ~0x1f) == 0 && ((1 << (_la - 89)) & ((1 << (SintesisParser.IndexOf - 89)) | (1 << (SintesisParser.SubString - 89)) | (1 << (SintesisParser.Attributes - 89)) | (1 << (SintesisParser.Methods - 89)) | (1 << (SintesisParser.Super - 89)) | (1 << (SintesisParser.Map - 89)) | (1 << (SintesisParser.Var_ - 89)) | (1 << (SintesisParser.Identifier - 89)) | (1 << (SintesisParser.StringLiteral - 89)))) !== 0)) {
	            this.state = 480;
	            this.expression(0);
	        }

	        this.state = 483;
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
	    this.enterRule(localctx, 54, SintesisParser.RULE_vectorIndexes);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 486; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 485;
	        		this.vectorIndex();
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 488; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,44, this._ctx);
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



	vectorLiteral() {
	    let localctx = new VectorLiteralContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 56, SintesisParser.RULE_vectorLiteral);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 490;
	        this.match(SintesisParser.OpenBracket);
	        this.state = 499;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << SintesisParser.SingleLineComment) | (1 << SintesisParser.OpenBracket) | (1 << SintesisParser.OpenParen) | (1 << SintesisParser.PlusPlus) | (1 << SintesisParser.MinusMinus) | (1 << SintesisParser.Plus) | (1 << SintesisParser.Minus) | (1 << SintesisParser.BitNot) | (1 << SintesisParser.Not))) !== 0) || ((((_la - 57)) & ~0x1f) == 0 && ((1 << (_la - 57)) & ((1 << (SintesisParser.NullLiteral - 57)) | (1 << (SintesisParser.DecimalLiteral - 57)) | (1 << (SintesisParser.HexIntegerLiteral - 57)) | (1 << (SintesisParser.OctalIntegerLiteral - 57)) | (1 << (SintesisParser.OctalIntegerLiteral2 - 57)) | (1 << (SintesisParser.BinaryIntegerLiteral - 57)) | (1 << (SintesisParser.BooleanLiteral - 57)) | (1 << (SintesisParser.Vector - 57)) | (1 << (SintesisParser.NumberOf - 57)))) !== 0) || ((((_la - 89)) & ~0x1f) == 0 && ((1 << (_la - 89)) & ((1 << (SintesisParser.IndexOf - 89)) | (1 << (SintesisParser.SubString - 89)) | (1 << (SintesisParser.Attributes - 89)) | (1 << (SintesisParser.Methods - 89)) | (1 << (SintesisParser.Super - 89)) | (1 << (SintesisParser.Map - 89)) | (1 << (SintesisParser.Var_ - 89)) | (1 << (SintesisParser.Identifier - 89)) | (1 << (SintesisParser.StringLiteral - 89)))) !== 0)) {
	            this.state = 491;
	            this.expression(0);
	            this.state = 496;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===SintesisParser.Comma) {
	                this.state = 492;
	                this.match(SintesisParser.Comma);
	                this.state = 493;
	                this.expression(0);
	                this.state = 498;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 501;
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



	formalParameterArg() {
	    let localctx = new FormalParameterArgContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 58, SintesisParser.RULE_formalParameterArg);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 503;
	        this.match(SintesisParser.Identifier);
	        this.state = 506;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===SintesisParser.Assign) {
	            this.state = 504;
	            this.match(SintesisParser.Assign);
	            this.state = 505;
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
	    this.enterRule(localctx, 60, SintesisParser.RULE_functionBody);
	    try {
	        this.state = 510;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,48,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 508;
	            this.block();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 509;
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
	    this.enterRule(localctx, 62, SintesisParser.RULE_assignmentOperator);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 512;
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
	    this.enterRule(localctx, 64, SintesisParser.RULE_assignable);
	    var _la = 0; // Token type
	    try {
	        this.state = 523;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,50,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new AssignableAttributeContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 514;
	            this.match(SintesisParser.Attributes);
	            this.state = 515;
	            this.match(SintesisParser.Dot);
	            this.state = 516;
	            localctx.id = this.match(SintesisParser.Identifier);
	            break;

	        case 2:
	            localctx = new AssignableMapOrVectorContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 517;
	            localctx.id = this.match(SintesisParser.Identifier);
	            this.state = 518;
	            localctx.idx = this.vectorIndexes();
	            break;

	        case 3:
	            localctx = new AssignableIdContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 520;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===SintesisParser.Var_) {
	                this.state = 519;
	                localctx.vvar = this.match(SintesisParser.Var_);
	            }

	            this.state = 522;
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
	    this.enterRule(localctx, 66, SintesisParser.RULE_reservedWord);
	    try {
	        this.state = 528;
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
	        case SintesisParser.Map:
	        case SintesisParser.Var_:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 525;
	            this.keyword();
	            break;
	        case SintesisParser.NullLiteral:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 526;
	            this.match(SintesisParser.NullLiteral);
	            break;
	        case SintesisParser.BooleanLiteral:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 527;
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
	    this.enterRule(localctx, 68, SintesisParser.RULE_literal);
	    try {
	        this.state = 535;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case SintesisParser.NullLiteral:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 530;
	            this.nullLiteral();
	            break;
	        case SintesisParser.BooleanLiteral:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 531;
	            this.booleanLiteral();
	            break;
	        case SintesisParser.StringLiteral:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 532;
	            this.stringLiteral();
	            break;
	        case SintesisParser.DecimalLiteral:
	        case SintesisParser.HexIntegerLiteral:
	        case SintesisParser.OctalIntegerLiteral:
	        case SintesisParser.OctalIntegerLiteral2:
	        case SintesisParser.BinaryIntegerLiteral:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 533;
	            this.numericLiteral();
	            break;
	        case SintesisParser.OpenBracket:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 534;
	            this.vectorLiteral();
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
	    this.enterRule(localctx, 70, SintesisParser.RULE_booleanLiteral);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 537;
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
	    this.enterRule(localctx, 72, SintesisParser.RULE_stringLiteral);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 539;
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
	    this.enterRule(localctx, 74, SintesisParser.RULE_nullLiteral);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 541;
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
	    this.enterRule(localctx, 76, SintesisParser.RULE_numericLiteral);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 543;
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
	    this.enterRule(localctx, 78, SintesisParser.RULE_identifierName);
	    try {
	        this.state = 547;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case SintesisParser.Identifier:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 545;
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
	        case SintesisParser.Map:
	        case SintesisParser.Var_:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 546;
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
	    this.enterRule(localctx, 80, SintesisParser.RULE_keyword);
	    try {
	        this.state = 559;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case SintesisParser.EOF:
	            this.enterOuterAlt(localctx, 1);

	            break;
	        case SintesisParser.Else:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 550;
	            this.match(SintesisParser.Else);
	            break;
	        case SintesisParser.Then:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 551;
	            this.match(SintesisParser.Then);
	            break;
	        case SintesisParser.Return:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 552;
	            this.match(SintesisParser.Return);
	            break;
	        case SintesisParser.While:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 553;
	            this.match(SintesisParser.While);
	            break;
	        case SintesisParser.Function_:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 554;
	            this.match(SintesisParser.Function_);
	            break;
	        case SintesisParser.If:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 555;
	            this.match(SintesisParser.If);
	            break;
	        case SintesisParser.Vector:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 556;
	            this.match(SintesisParser.Vector);
	            break;
	        case SintesisParser.Map:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 557;
	            this.match(SintesisParser.Map);
	            break;
	        case SintesisParser.Var_:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 558;
	            this.match(SintesisParser.Var_);
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
SintesisParser.Function_ = 85;
SintesisParser.Vector = 86;
SintesisParser.Delete = 87;
SintesisParser.NumberOf = 88;
SintesisParser.IndexOf = 89;
SintesisParser.SubString = 90;
SintesisParser.New_ = 91;
SintesisParser.Class_ = 92;
SintesisParser.Extends = 93;
SintesisParser.Attributes = 94;
SintesisParser.Methods = 95;
SintesisParser.Super = 96;
SintesisParser.InstanceOf = 97;
SintesisParser.Map = 98;
SintesisParser.Get = 99;
SintesisParser.Set = 100;
SintesisParser.Var_ = 101;
SintesisParser.Identifier = 102;
SintesisParser.StringLiteral = 103;
SintesisParser.WhiteSpaces = 104;
SintesisParser.LineTerminator = 105;

SintesisParser.RULE_program = 0;
SintesisParser.RULE_statementList = 1;
SintesisParser.RULE_statement = 2;
SintesisParser.RULE_block = 3;
SintesisParser.RULE_stepStatement = 4;
SintesisParser.RULE_printStatement = 5;
SintesisParser.RULE_expression = 6;
SintesisParser.RULE_basicFunction1 = 7;
SintesisParser.RULE_basicFunction2 = 8;
SintesisParser.RULE_basicFunction3 = 9;
SintesisParser.RULE_basicFunction = 10;
SintesisParser.RULE_expressionSequence = 11;
SintesisParser.RULE_ifStatement = 12;
SintesisParser.RULE_elseIfs = 13;
SintesisParser.RULE_elseIf = 14;
SintesisParser.RULE_elseStatement = 15;
SintesisParser.RULE_iterationStatement = 16;
SintesisParser.RULE_returnStatement = 17;
SintesisParser.RULE_functionDeclaration = 18;
SintesisParser.RULE_formalParameterList = 19;
SintesisParser.RULE_arguments = 20;
SintesisParser.RULE_classDeclaration = 21;
SintesisParser.RULE_identifiers = 22;
SintesisParser.RULE_methodDeclaration = 23;
SintesisParser.RULE_methodsList = 24;
SintesisParser.RULE_classExp = 25;
SintesisParser.RULE_vectorIndex = 26;
SintesisParser.RULE_vectorIndexes = 27;
SintesisParser.RULE_vectorLiteral = 28;
SintesisParser.RULE_formalParameterArg = 29;
SintesisParser.RULE_functionBody = 30;
SintesisParser.RULE_assignmentOperator = 31;
SintesisParser.RULE_assignable = 32;
SintesisParser.RULE_reservedWord = 33;
SintesisParser.RULE_literal = 34;
SintesisParser.RULE_booleanLiteral = 35;
SintesisParser.RULE_stringLiteral = 36;
SintesisParser.RULE_nullLiteral = 37;
SintesisParser.RULE_numericLiteral = 38;
SintesisParser.RULE_identifierName = 39;
SintesisParser.RULE_keyword = 40;

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

class ExpMapDeclarationContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        this.args = null; // ArgumentsContext;
        super.copyFrom(ctx);
    }

	Map() {
	    return this.getToken(SintesisParser.Map, 0);
	};

	arguments() {
	    return this.getTypedRuleContext(ArgumentsContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof SintesisParserVisitor ) {
	        return visitor.visitExpMapDeclaration(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

SintesisParser.ExpMapDeclarationContext = ExpMapDeclarationContext;

class ExpPreIncrementContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        this.op = null; // Token;
        this.dest = null; // AssignableContext;
        super.copyFrom(ctx);
    }

	assignable() {
	    return this.getTypedRuleContext(AssignableContext,0);
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

class ExpPostIncrementContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        this.dest = null; // AssignableContext;
        this.op = null; // Token;
        super.copyFrom(ctx);
    }

	assignable() {
	    return this.getTypedRuleContext(AssignableContext,0);
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

class ExpBasicFunctionMemberContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        this.exp = null; // ExpressionContext;
        this.fn = null; // BasicFunction1Context;
        super.copyFrom(ctx);
    }

	Dot() {
	    return this.getToken(SintesisParser.Dot, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	basicFunction1() {
	    return this.getTypedRuleContext(BasicFunction1Context,0);
	};

	accept(visitor) {
	    if ( visitor instanceof SintesisParserVisitor ) {
	        return visitor.visitExpBasicFunctionMember(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

SintesisParser.ExpBasicFunctionMemberContext = ExpBasicFunctionMemberContext;

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

class ExpVectorDeclarationContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        this.idx = null; // VectorIndexesContext;
        this.args = null; // ArgumentsContext;
        super.copyFrom(ctx);
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
	        return visitor.visitExpVectorDeclaration(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

SintesisParser.ExpVectorDeclarationContext = ExpVectorDeclarationContext;

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


class SubstringContext extends BasicFunction3Context {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	SubString() {
	    return this.getToken(SintesisParser.SubString, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof SintesisParserVisitor ) {
	        return visitor.visitSubstring(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

SintesisParser.SubstringContext = SubstringContext;

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

class ForEachOfCollectionStatementContext extends IterationStatementContext {

    constructor(parser, ctx) {
        super(parser);
        this.id = null; // Token;
        this.coll = null; // ExpressionContext;
        this.stmt = null; // StatementContext;
        super.copyFrom(ctx);
    }

	Of() {
	    return this.getToken(SintesisParser.Of, 0);
	};

	Identifier() {
	    return this.getToken(SintesisParser.Identifier, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
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

	OpenParen() {
	    return this.getToken(SintesisParser.OpenParen, 0);
	};

	CloseParen() {
	    return this.getToken(SintesisParser.CloseParen, 0);
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
	        return visitor.visitForEachOfCollectionStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

SintesisParser.ForEachOfCollectionStatementContext = ForEachOfCollectionStatementContext;

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

class ForEachInCollectionStatementContext extends IterationStatementContext {

    constructor(parser, ctx) {
        super(parser);
        this.id = null; // Token;
        this.coll = null; // ExpressionContext;
        this.stmt = null; // StatementContext;
        super.copyFrom(ctx);
    }

	In() {
	    return this.getToken(SintesisParser.In, 0);
	};

	Identifier() {
	    return this.getToken(SintesisParser.Identifier, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
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

	OpenParen() {
	    return this.getToken(SintesisParser.OpenParen, 0);
	};

	CloseParen() {
	    return this.getToken(SintesisParser.CloseParen, 0);
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
	        return visitor.visitForEachInCollectionStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

SintesisParser.ForEachInCollectionStatementContext = ForEachInCollectionStatementContext;

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
        this.id = null; // Token;
        this.start = null; // ExpressionContext;
        this.to = null; // ExpressionContext;
        this.stmt = null; // StatementContext;
        super.copyFrom(ctx);
    }

	For() {
	    return this.getToken(SintesisParser.For, 0);
	};

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

	statement() {
	    return this.getTypedRuleContext(StatementContext,0);
	};

	OpenParen() {
	    return this.getToken(SintesisParser.OpenParen, 0);
	};

	CloseParen() {
	    return this.getToken(SintesisParser.CloseParen, 0);
	};

	Repeat() {
	    return this.getToken(SintesisParser.Repeat, 0);
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
        this.vvar = null; // Token;
        this.id = null; // Token;
        super.copyFrom(ctx);
    }

	Identifier() {
	    return this.getToken(SintesisParser.Identifier, 0);
	};

	Var_() {
	    return this.getToken(SintesisParser.Var_, 0);
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

class AssignableMapOrVectorContext extends AssignableContext {

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
	        return visitor.visitAssignableMapOrVector(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

SintesisParser.AssignableMapOrVectorContext = AssignableMapOrVectorContext;

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

	vectorLiteral() {
	    return this.getTypedRuleContext(VectorLiteralContext,0);
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
SintesisParser.BasicFunction1Context = BasicFunction1Context; 
SintesisParser.BasicFunction2Context = BasicFunction2Context; 
SintesisParser.BasicFunction3Context = BasicFunction3Context; 
SintesisParser.BasicFunctionContext = BasicFunctionContext; 
SintesisParser.ExpressionSequenceContext = ExpressionSequenceContext; 
SintesisParser.IfStatementContext = IfStatementContext; 
SintesisParser.ElseIfsContext = ElseIfsContext; 
SintesisParser.ElseIfContext = ElseIfContext; 
SintesisParser.ElseStatementContext = ElseStatementContext; 
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
SintesisParser.VectorLiteralContext = VectorLiteralContext; 
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
