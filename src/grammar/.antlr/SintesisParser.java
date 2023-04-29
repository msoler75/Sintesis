// Generated from d:\projects\CodeBounce\Sintesis\src\grammar\SintesisParser.g4 by ANTLR 4.9.2
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class SintesisParser extends SintesisParserBase {
	static { RuntimeMetaData.checkVersion("4.9.2", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		INDENT=1, DEDENT=2, MultiLineCommentJS=3, MultiLineCommentPy=4, MultiLineCommentPy2=5, 
		SingleLineCommentJs=6, SingleLineCommentPy=7, RegularExpressionLiteral=8, 
		JavascriptCode=9, OpenBracket=10, CloseBracket=11, OpenParen=12, CloseParen=13, 
		OpenBrace=14, CloseBrace=15, SemiColon=16, Comma=17, Assign=18, QuestionMark=19, 
		Colon=20, Ellipsis=21, Dot=22, PlusPlus=23, MinusMinus=24, Plus=25, Minus=26, 
		BitNot=27, Not=28, Multiply=29, Divide=30, Modulus=31, Power=32, NullCoalesce=33, 
		Hashtag=34, RightShiftArithmetic=35, LeftShiftArithmetic=36, RightShiftLogical=37, 
		LessThan=38, MoreThan=39, LessThanEquals=40, GreaterThanEquals=41, Equals_=42, 
		NotEquals=43, IdentityEquals=44, IdentityNotEquals=45, BitAnd=46, BitXOr=47, 
		BitOr=48, And=49, Or=50, MultiplyAssign=51, DivideAssign=52, ModulusAssign=53, 
		PlusAssign=54, MinusAssign=55, LeftShiftArithmeticAssign=56, RightShiftArithmeticAssign=57, 
		RightShiftLogicalAssign=58, BitAndAssign=59, BitXorAssign=60, BitOrAssign=61, 
		PowerAssign=62, ARROW=63, PieceOfCode=64, NullLiteral=65, DecimalLiteral=66, 
		HexIntegerLiteral=67, OctalIntegerLiteral=68, OctalIntegerLiteral2=69, 
		BinaryIntegerLiteral=70, BigHexIntegerLiteral=71, BigOctalIntegerLiteral=72, 
		BigBinaryIntegerLiteral=73, BigDecimalIntegerLiteral=74, BooleanLiteral=75, 
		Step=76, Print=77, While=78, Repeat=79, Times=80, Do=81, Continue=82, 
		Break=83, Switch=84, Case=85, Default=86, Each=87, ForEach=88, For=89, 
		In=90, Of=91, To=92, If=93, Then=94, ElseIf=95, Else=96, Return=97, Declare=98, 
		Function_=99, Delete=100, NumberOf=101, IndexOf=102, Sub=103, Math=104, 
		Random=105, Chr=106, Ord=107, Prompt=108, Convert=109, Class_=110, Instance=111, 
		New_=112, Extends=113, Attributes=114, Methods=115, Method=116, Constructor=117, 
		Super=118, InstanceOf=119, List=120, Dictionary=121, Get=122, Set=123, 
		Var_=124, Const_=125, Private=126, Public=127, Protected=128, Identifier=129, 
		StringLiteral=130, WhiteSpaces=131, LineTerminator=132;
	public static final int
		RULE_program = 0, RULE_statementList = 1, RULE_statement = 2, RULE_simpleStatement = 3, 
		RULE_compoundStatement = 4, RULE_blockJS = 5, RULE_block = 6, RULE_stepStatement = 7, 
		RULE_emptyStatement_ = 8, RULE_printStatement = 9, RULE_expressionStatement = 10, 
		RULE_methodCall = 11, RULE_superSuffix = 12, RULE_member = 13, RULE_memberIdentifier = 14, 
		RULE_singleExpression = 15, RULE_basicFunction0 = 16, RULE_basicFunction1 = 17, 
		RULE_basicFunction2 = 18, RULE_basicFunction = 19, RULE_expressionSequence = 20, 
		RULE_ifStatement = 21, RULE_elseIfs = 22, RULE_elseIf = 23, RULE_iteratorIndexes = 24, 
		RULE_iteratorRange = 25, RULE_iterationStatement = 26, RULE_forPre = 27, 
		RULE_continueStatement = 28, RULE_breakStatement = 29, RULE_returnStatement = 30, 
		RULE_switchStatement = 31, RULE_caseBlock = 32, RULE_caseClauses = 33, 
		RULE_caseClause = 34, RULE_defaultClause = 35, RULE_formalParameterList = 36, 
		RULE_functionDeclaration = 37, RULE_functionDeclarationExpr = 38, RULE_arguments = 39, 
		RULE_visibility = 40, RULE_classDeclaration = 41, RULE_attributesList = 42, 
		RULE_classAttributeDecl = 43, RULE_methodDeclaration = 44, RULE_methodName = 45, 
		RULE_methodsList = 46, RULE_classExp = 47, RULE_listIndex = 48, RULE_listIndexes = 49, 
		RULE_formalParameterArg = 50, RULE_variableStatement = 51, RULE_reservedIdentifier = 52, 
		RULE_variableDeclaration = 53, RULE_variableDeclarationList = 54, RULE_varModifier = 55, 
		RULE_functionBody = 56, RULE_anonymousFunction = 57, RULE_arrowFunctionParameters = 58, 
		RULE_arrowFunctionBody = 59, RULE_assignmentOperator = 60, RULE_reservedWord = 61, 
		RULE_listDeclaration = 62, RULE_listLiteral = 63, RULE_objectKey = 64, 
		RULE_objectLiteral = 65, RULE_literal = 66, RULE_regularExpressionLiteral = 67, 
		RULE_booleanLiteral = 68, RULE_stringLiteral = 69, RULE_nullLiteral = 70, 
		RULE_numericLiteral = 71, RULE_identifier = 72, RULE_identifierExt = 73, 
		RULE_safeKeyword = 74, RULE_eos = 75;
	private static String[] makeRuleNames() {
		return new String[] {
			"program", "statementList", "statement", "simpleStatement", "compoundStatement", 
			"blockJS", "block", "stepStatement", "emptyStatement_", "printStatement", 
			"expressionStatement", "methodCall", "superSuffix", "member", "memberIdentifier", 
			"singleExpression", "basicFunction0", "basicFunction1", "basicFunction2", 
			"basicFunction", "expressionSequence", "ifStatement", "elseIfs", "elseIf", 
			"iteratorIndexes", "iteratorRange", "iterationStatement", "forPre", "continueStatement", 
			"breakStatement", "returnStatement", "switchStatement", "caseBlock", 
			"caseClauses", "caseClause", "defaultClause", "formalParameterList", 
			"functionDeclaration", "functionDeclarationExpr", "arguments", "visibility", 
			"classDeclaration", "attributesList", "classAttributeDecl", "methodDeclaration", 
			"methodName", "methodsList", "classExp", "listIndex", "listIndexes", 
			"formalParameterArg", "variableStatement", "reservedIdentifier", "variableDeclaration", 
			"variableDeclarationList", "varModifier", "functionBody", "anonymousFunction", 
			"arrowFunctionParameters", "arrowFunctionBody", "assignmentOperator", 
			"reservedWord", "listDeclaration", "listLiteral", "objectKey", "objectLiteral", 
			"literal", "regularExpressionLiteral", "booleanLiteral", "stringLiteral", 
			"nullLiteral", "numericLiteral", "identifier", "identifierExt", "safeKeyword", 
			"eos"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, null, null, null, null, null, null, null, null, null, "'['", "']'", 
			"'('", "')'", "'{'", "'}'", "';'", "','", null, "'?'", "':'", "'...'", 
			"'.'", "'++'", "'--'", "'+'", "'-'", "'~'", null, "'*'", "'/'", "'%'", 
			"'**'", "'??'", "'#'", "'>>'", "'<<'", "'>>>'", "'<'", "'>'", "'<='", 
			"'>='", "'=='", null, "'==='", "'!=='", "'&'", "'^'", "'|'", null, null, 
			"'*='", "'/='", "'%='", "'+='", "'-='", "'<<='", "'>>='", "'>>>='", "'&='", 
			"'^='", "'|='", "'**='", null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, "'sub'", null, null, 
			"'chr'", "'ord'", null, null, null, null, null, null, null, null, null, 
			null, "'super'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "INDENT", "DEDENT", "MultiLineCommentJS", "MultiLineCommentPy", 
			"MultiLineCommentPy2", "SingleLineCommentJs", "SingleLineCommentPy", 
			"RegularExpressionLiteral", "JavascriptCode", "OpenBracket", "CloseBracket", 
			"OpenParen", "CloseParen", "OpenBrace", "CloseBrace", "SemiColon", "Comma", 
			"Assign", "QuestionMark", "Colon", "Ellipsis", "Dot", "PlusPlus", "MinusMinus", 
			"Plus", "Minus", "BitNot", "Not", "Multiply", "Divide", "Modulus", "Power", 
			"NullCoalesce", "Hashtag", "RightShiftArithmetic", "LeftShiftArithmetic", 
			"RightShiftLogical", "LessThan", "MoreThan", "LessThanEquals", "GreaterThanEquals", 
			"Equals_", "NotEquals", "IdentityEquals", "IdentityNotEquals", "BitAnd", 
			"BitXOr", "BitOr", "And", "Or", "MultiplyAssign", "DivideAssign", "ModulusAssign", 
			"PlusAssign", "MinusAssign", "LeftShiftArithmeticAssign", "RightShiftArithmeticAssign", 
			"RightShiftLogicalAssign", "BitAndAssign", "BitXorAssign", "BitOrAssign", 
			"PowerAssign", "ARROW", "PieceOfCode", "NullLiteral", "DecimalLiteral", 
			"HexIntegerLiteral", "OctalIntegerLiteral", "OctalIntegerLiteral2", "BinaryIntegerLiteral", 
			"BigHexIntegerLiteral", "BigOctalIntegerLiteral", "BigBinaryIntegerLiteral", 
			"BigDecimalIntegerLiteral", "BooleanLiteral", "Step", "Print", "While", 
			"Repeat", "Times", "Do", "Continue", "Break", "Switch", "Case", "Default", 
			"Each", "ForEach", "For", "In", "Of", "To", "If", "Then", "ElseIf", "Else", 
			"Return", "Declare", "Function_", "Delete", "NumberOf", "IndexOf", "Sub", 
			"Math", "Random", "Chr", "Ord", "Prompt", "Convert", "Class_", "Instance", 
			"New_", "Extends", "Attributes", "Methods", "Method", "Constructor", 
			"Super", "InstanceOf", "List", "Dictionary", "Get", "Set", "Var_", "Const_", 
			"Private", "Public", "Protected", "Identifier", "StringLiteral", "WhiteSpaces", 
			"LineTerminator"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "SintesisParser.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public SintesisParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	public static class ProgramContext extends ParserRuleContext {
		public TerminalNode EOF() { return getToken(SintesisParser.EOF, 0); }
		public StatementListContext statementList() {
			return getRuleContext(StatementListContext.class,0);
		}
		public ProgramContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_program; }
	}

	public final ProgramContext program() throws RecognitionException {
		ProgramContext _localctx = new ProgramContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_program);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(153);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,0,_ctx) ) {
			case 1:
				{
				setState(152);
				statementList();
				}
				break;
			}
			setState(155);
			match(EOF);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class StatementListContext extends ParserRuleContext {
		public List<StatementContext> statement() {
			return getRuleContexts(StatementContext.class);
		}
		public StatementContext statement(int i) {
			return getRuleContext(StatementContext.class,i);
		}
		public StatementListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_statementList; }
	}

	public final StatementListContext statementList() throws RecognitionException {
		StatementListContext _localctx = new StatementListContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_statementList);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(158); 
			_errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					setState(157);
					statement();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(160); 
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,1,_ctx);
			} while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class StatementContext extends ParserRuleContext {
		public SimpleStatementContext simpleStatement() {
			return getRuleContext(SimpleStatementContext.class,0);
		}
		public CompoundStatementContext compoundStatement() {
			return getRuleContext(CompoundStatementContext.class,0);
		}
		public StatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_statement; }
	}

	public final StatementContext statement() throws RecognitionException {
		StatementContext _localctx = new StatementContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_statement);
		try {
			setState(164);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,2,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(162);
				simpleStatement();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(163);
				compoundStatement();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SimpleStatementContext extends ParserRuleContext {
		public VariableStatementContext variableStatement() {
			return getRuleContext(VariableStatementContext.class,0);
		}
		public EmptyStatement_Context emptyStatement_() {
			return getRuleContext(EmptyStatement_Context.class,0);
		}
		public StepStatementContext stepStatement() {
			return getRuleContext(StepStatementContext.class,0);
		}
		public PrintStatementContext printStatement() {
			return getRuleContext(PrintStatementContext.class,0);
		}
		public ContinueStatementContext continueStatement() {
			return getRuleContext(ContinueStatementContext.class,0);
		}
		public BreakStatementContext breakStatement() {
			return getRuleContext(BreakStatementContext.class,0);
		}
		public ReturnStatementContext returnStatement() {
			return getRuleContext(ReturnStatementContext.class,0);
		}
		public ExpressionStatementContext expressionStatement() {
			return getRuleContext(ExpressionStatementContext.class,0);
		}
		public SimpleStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_simpleStatement; }
	}

	public final SimpleStatementContext simpleStatement() throws RecognitionException {
		SimpleStatementContext _localctx = new SimpleStatementContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_simpleStatement);
		try {
			setState(174);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,3,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(166);
				variableStatement();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(167);
				emptyStatement_();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(168);
				stepStatement();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(169);
				printStatement();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(170);
				continueStatement();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(171);
				breakStatement();
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(172);
				returnStatement();
				}
				break;
			case 8:
				enterOuterAlt(_localctx, 8);
				{
				setState(173);
				expressionStatement();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class CompoundStatementContext extends ParserRuleContext {
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public ClassDeclarationContext classDeclaration() {
			return getRuleContext(ClassDeclarationContext.class,0);
		}
		public IfStatementContext ifStatement() {
			return getRuleContext(IfStatementContext.class,0);
		}
		public IterationStatementContext iterationStatement() {
			return getRuleContext(IterationStatementContext.class,0);
		}
		public FunctionDeclarationContext functionDeclaration() {
			return getRuleContext(FunctionDeclarationContext.class,0);
		}
		public SwitchStatementContext switchStatement() {
			return getRuleContext(SwitchStatementContext.class,0);
		}
		public CompoundStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_compoundStatement; }
	}

	public final CompoundStatementContext compoundStatement() throws RecognitionException {
		CompoundStatementContext _localctx = new CompoundStatementContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_compoundStatement);
		try {
			setState(182);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,4,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(176);
				block();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(177);
				classDeclaration();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(178);
				ifStatement();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(179);
				iterationStatement();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(180);
				functionDeclaration();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(181);
				switchStatement();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class BlockJSContext extends ParserRuleContext {
		public StatementListContext stmt;
		public TerminalNode OpenBrace() { return getToken(SintesisParser.OpenBrace, 0); }
		public TerminalNode CloseBrace() { return getToken(SintesisParser.CloseBrace, 0); }
		public StatementListContext statementList() {
			return getRuleContext(StatementListContext.class,0);
		}
		public BlockJSContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_blockJS; }
	}

	public final BlockJSContext blockJS() throws RecognitionException {
		BlockJSContext _localctx = new BlockJSContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_blockJS);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(184);
			match(OpenBrace);
			setState(186);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,5,_ctx) ) {
			case 1:
				{
				setState(185);
				((BlockJSContext)_localctx).stmt = statementList();
				}
				break;
			}
			setState(188);
			match(CloseBrace);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class BlockContext extends ParserRuleContext {
		public BlockJSContext blockJS() {
			return getRuleContext(BlockJSContext.class,0);
		}
		public BlockContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_block; }
	}

	public final BlockContext block() throws RecognitionException {
		BlockContext _localctx = new BlockContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_block);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(190);
			blockJS();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class StepStatementContext extends ParserRuleContext {
		public IdentifierExtContext exp;
		public TerminalNode Step() { return getToken(SintesisParser.Step, 0); }
		public IdentifierExtContext identifierExt() {
			return getRuleContext(IdentifierExtContext.class,0);
		}
		public StepStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_stepStatement; }
	}

	public final StepStatementContext stepStatement() throws RecognitionException {
		StepStatementContext _localctx = new StepStatementContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_stepStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(192);
			match(Step);
			setState(193);
			((StepStatementContext)_localctx).exp = identifierExt();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class EmptyStatement_Context extends ParserRuleContext {
		public TerminalNode SemiColon() { return getToken(SintesisParser.SemiColon, 0); }
		public EmptyStatement_Context(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_emptyStatement_; }
	}

	public final EmptyStatement_Context emptyStatement_() throws RecognitionException {
		EmptyStatement_Context _localctx = new EmptyStatement_Context(_ctx, getState());
		enterRule(_localctx, 16, RULE_emptyStatement_);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(195);
			match(SemiColon);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class PrintStatementContext extends ParserRuleContext {
		public ExpressionSequenceContext exp;
		public TerminalNode Print() { return getToken(SintesisParser.Print, 0); }
		public ExpressionSequenceContext expressionSequence() {
			return getRuleContext(ExpressionSequenceContext.class,0);
		}
		public PrintStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_printStatement; }
	}

	public final PrintStatementContext printStatement() throws RecognitionException {
		PrintStatementContext _localctx = new PrintStatementContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_printStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(197);
			match(Print);
			setState(198);
			((PrintStatementContext)_localctx).exp = expressionSequence();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ExpressionStatementContext extends ParserRuleContext {
		public ExpressionSequenceContext expressionSequence() {
			return getRuleContext(ExpressionSequenceContext.class,0);
		}
		public EosContext eos() {
			return getRuleContext(EosContext.class,0);
		}
		public ExpressionStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expressionStatement; }
	}

	public final ExpressionStatementContext expressionStatement() throws RecognitionException {
		ExpressionStatementContext _localctx = new ExpressionStatementContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_expressionStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(200);
			if (!(this.notOpenBraceAndNotFunction())) throw new FailedPredicateException(this, "this.notOpenBraceAndNotFunction()");
			setState(201);
			expressionSequence();
			setState(202);
			eos();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class MethodCallContext extends ParserRuleContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public ArgumentsContext arguments() {
			return getRuleContext(ArgumentsContext.class,0);
		}
		public TerminalNode Super() { return getToken(SintesisParser.Super, 0); }
		public MethodCallContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_methodCall; }
	}

	public final MethodCallContext methodCall() throws RecognitionException {
		MethodCallContext _localctx = new MethodCallContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_methodCall);
		try {
			setState(209);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case Identifier:
				enterOuterAlt(_localctx, 1);
				{
				setState(204);
				identifier();
				setState(205);
				arguments();
				}
				break;
			case Super:
				enterOuterAlt(_localctx, 2);
				{
				setState(207);
				match(Super);
				setState(208);
				arguments();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SuperSuffixContext extends ParserRuleContext {
		public ArgumentsContext arguments() {
			return getRuleContext(ArgumentsContext.class,0);
		}
		public TerminalNode Dot() { return getToken(SintesisParser.Dot, 0); }
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public SuperSuffixContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_superSuffix; }
	}

	public final SuperSuffixContext superSuffix() throws RecognitionException {
		SuperSuffixContext _localctx = new SuperSuffixContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_superSuffix);
		int _la;
		try {
			setState(217);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case OpenParen:
				enterOuterAlt(_localctx, 1);
				{
				setState(211);
				arguments();
				}
				break;
			case Dot:
				enterOuterAlt(_localctx, 2);
				{
				setState(212);
				match(Dot);
				setState(213);
				identifier();
				setState(215);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==OpenParen) {
					{
					setState(214);
					arguments();
					}
				}

				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class MemberContext extends ParserRuleContext {
		public MemberContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_member; }
	 
		public MemberContext() { }
		public void copyFrom(MemberContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class ExpAttributesContext extends MemberContext {
		public TerminalNode Attributes() { return getToken(SintesisParser.Attributes, 0); }
		public ExpAttributesContext(MemberContext ctx) { copyFrom(ctx); }
	}
	public static class ExpSuperContext extends MemberContext {
		public TerminalNode Super() { return getToken(SintesisParser.Super, 0); }
		public ExpSuperContext(MemberContext ctx) { copyFrom(ctx); }
	}
	public static class ExpMemberListContext extends MemberContext {
		public ListLiteralContext listLiteral() {
			return getRuleContext(ListLiteralContext.class,0);
		}
		public ExpMemberListContext(MemberContext ctx) { copyFrom(ctx); }
	}
	public static class ExpReservedIdentifierContext extends MemberContext {
		public ReservedIdentifierContext reservedIdentifier() {
			return getRuleContext(ReservedIdentifierContext.class,0);
		}
		public ExpReservedIdentifierContext(MemberContext ctx) { copyFrom(ctx); }
	}
	public static class ExpMemberIndexContext extends MemberContext {
		public MemberContext mem;
		public SingleExpressionContext idx;
		public ArgumentsContext args;
		public TerminalNode OpenBracket() { return getToken(SintesisParser.OpenBracket, 0); }
		public TerminalNode CloseBracket() { return getToken(SintesisParser.CloseBracket, 0); }
		public MemberContext member() {
			return getRuleContext(MemberContext.class,0);
		}
		public SingleExpressionContext singleExpression() {
			return getRuleContext(SingleExpressionContext.class,0);
		}
		public ArgumentsContext arguments() {
			return getRuleContext(ArgumentsContext.class,0);
		}
		public ExpMemberIndexContext(MemberContext ctx) { copyFrom(ctx); }
	}
	public static class ExpIdentifierContext extends MemberContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public ExpIdentifierContext(MemberContext ctx) { copyFrom(ctx); }
	}
	public static class ExpMemberStringContext extends MemberContext {
		public StringLiteralContext stringLiteral() {
			return getRuleContext(StringLiteralContext.class,0);
		}
		public ExpMemberStringContext(MemberContext ctx) { copyFrom(ctx); }
	}
	public static class ExpMethodsContext extends MemberContext {
		public TerminalNode Methods() { return getToken(SintesisParser.Methods, 0); }
		public ExpMethodsContext(MemberContext ctx) { copyFrom(ctx); }
	}
	public static class ExpNewContext extends MemberContext {
		public Token id;
		public ArgumentsContext args;
		public TerminalNode New_() { return getToken(SintesisParser.New_, 0); }
		public TerminalNode Identifier() { return getToken(SintesisParser.Identifier, 0); }
		public ArgumentsContext arguments() {
			return getRuleContext(ArgumentsContext.class,0);
		}
		public TerminalNode Instance() { return getToken(SintesisParser.Instance, 0); }
		public TerminalNode Of() { return getToken(SintesisParser.Of, 0); }
		public TerminalNode Class_() { return getToken(SintesisParser.Class_, 0); }
		public ExpNewContext(MemberContext ctx) { copyFrom(ctx); }
	}
	public static class ExpMemberObjectContext extends MemberContext {
		public ObjectLiteralContext objectLiteral() {
			return getRuleContext(ObjectLiteralContext.class,0);
		}
		public ExpMemberObjectContext(MemberContext ctx) { copyFrom(ctx); }
	}
	public static class ExpMemberFuncContext extends MemberContext {
		public MemberContext mem;
		public ArgumentsContext args;
		public MemberContext member() {
			return getRuleContext(MemberContext.class,0);
		}
		public ArgumentsContext arguments() {
			return getRuleContext(ArgumentsContext.class,0);
		}
		public ExpMemberFuncContext(MemberContext ctx) { copyFrom(ctx); }
	}
	public static class ExpMemberDotContext extends MemberContext {
		public MemberContext mem;
		public MemberIdentifierContext idx;
		public ArgumentsContext args;
		public TerminalNode Dot() { return getToken(SintesisParser.Dot, 0); }
		public MemberContext member() {
			return getRuleContext(MemberContext.class,0);
		}
		public MemberIdentifierContext memberIdentifier() {
			return getRuleContext(MemberIdentifierContext.class,0);
		}
		public ArgumentsContext arguments() {
			return getRuleContext(ArgumentsContext.class,0);
		}
		public ExpMemberDotContext(MemberContext ctx) { copyFrom(ctx); }
	}

	public final MemberContext member() throws RecognitionException {
		return member(0);
	}

	private MemberContext member(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		MemberContext _localctx = new MemberContext(_ctx, _parentState);
		MemberContext _prevctx = _localctx;
		int _startState = 26;
		enterRecursionRule(_localctx, 26, RULE_member, _p);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(240);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case Attributes:
				{
				_localctx = new ExpAttributesContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;

				setState(220);
				match(Attributes);
				}
				break;
			case Methods:
				{
				_localctx = new ExpMethodsContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(221);
				match(Methods);
				}
				break;
			case Super:
				{
				_localctx = new ExpSuperContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(222);
				match(Super);
				}
				break;
			case New_:
				{
				_localctx = new ExpNewContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(223);
				match(New_);
				setState(225);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==Instance) {
					{
					setState(224);
					match(Instance);
					}
				}

				setState(231);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==Of) {
					{
					setState(227);
					match(Of);
					setState(229);
					_errHandler.sync(this);
					_la = _input.LA(1);
					if (_la==Class_) {
						{
						setState(228);
						match(Class_);
						}
					}

					}
				}

				setState(233);
				((ExpNewContext)_localctx).id = match(Identifier);
				setState(234);
				((ExpNewContext)_localctx).args = arguments();
				}
				break;
			case Identifier:
				{
				_localctx = new ExpIdentifierContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(235);
				identifier();
				}
				break;
			case In:
			case Of:
			case ElseIf:
			case Function_:
			case Delete:
			case NumberOf:
			case IndexOf:
			case Sub:
			case InstanceOf:
				{
				_localctx = new ExpReservedIdentifierContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(236);
				reservedIdentifier();
				}
				break;
			case StringLiteral:
				{
				_localctx = new ExpMemberStringContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(237);
				stringLiteral();
				}
				break;
			case OpenBracket:
				{
				_localctx = new ExpMemberListContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(238);
				listLiteral();
				}
				break;
			case OpenBrace:
				{
				_localctx = new ExpMemberObjectContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(239);
				objectLiteral();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			_ctx.stop = _input.LT(-1);
			setState(265);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,14,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(263);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,13,_ctx) ) {
					case 1:
						{
						_localctx = new ExpMemberDotContext(new MemberContext(_parentctx, _parentState));
						((ExpMemberDotContext)_localctx).mem = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_member);
						setState(242);
						if (!(precpred(_ctx, 10))) throw new FailedPredicateException(this, "precpred(_ctx, 10)");
						setState(243);
						match(Dot);
						setState(244);
						((ExpMemberDotContext)_localctx).idx = memberIdentifier();
						setState(245);
						((ExpMemberDotContext)_localctx).args = arguments();
						}
						break;
					case 2:
						{
						_localctx = new ExpMemberDotContext(new MemberContext(_parentctx, _parentState));
						((ExpMemberDotContext)_localctx).mem = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_member);
						setState(247);
						if (!(precpred(_ctx, 9))) throw new FailedPredicateException(this, "precpred(_ctx, 9)");
						setState(248);
						match(Dot);
						setState(249);
						((ExpMemberDotContext)_localctx).idx = memberIdentifier();
						}
						break;
					case 3:
						{
						_localctx = new ExpMemberIndexContext(new MemberContext(_parentctx, _parentState));
						((ExpMemberIndexContext)_localctx).mem = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_member);
						setState(250);
						if (!(precpred(_ctx, 8))) throw new FailedPredicateException(this, "precpred(_ctx, 8)");
						setState(251);
						match(OpenBracket);
						setState(252);
						((ExpMemberIndexContext)_localctx).idx = singleExpression(0);
						setState(253);
						match(CloseBracket);
						setState(254);
						((ExpMemberIndexContext)_localctx).args = arguments();
						}
						break;
					case 4:
						{
						_localctx = new ExpMemberIndexContext(new MemberContext(_parentctx, _parentState));
						((ExpMemberIndexContext)_localctx).mem = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_member);
						setState(256);
						if (!(precpred(_ctx, 7))) throw new FailedPredicateException(this, "precpred(_ctx, 7)");
						setState(257);
						match(OpenBracket);
						setState(258);
						((ExpMemberIndexContext)_localctx).idx = singleExpression(0);
						setState(259);
						match(CloseBracket);
						}
						break;
					case 5:
						{
						_localctx = new ExpMemberFuncContext(new MemberContext(_parentctx, _parentState));
						((ExpMemberFuncContext)_localctx).mem = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_member);
						setState(261);
						if (!(precpred(_ctx, 6))) throw new FailedPredicateException(this, "precpred(_ctx, 6)");
						setState(262);
						((ExpMemberFuncContext)_localctx).args = arguments();
						}
						break;
					}
					} 
				}
				setState(267);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,14,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public static class MemberIdentifierContext extends ParserRuleContext {
		public TerminalNode Attributes() { return getToken(SintesisParser.Attributes, 0); }
		public TerminalNode Methods() { return getToken(SintesisParser.Methods, 0); }
		public TerminalNode Super() { return getToken(SintesisParser.Super, 0); }
		public TerminalNode Constructor() { return getToken(SintesisParser.Constructor, 0); }
		public IdentifierExtContext identifierExt() {
			return getRuleContext(IdentifierExtContext.class,0);
		}
		public MemberIdentifierContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_memberIdentifier; }
	}

	public final MemberIdentifierContext memberIdentifier() throws RecognitionException {
		MemberIdentifierContext _localctx = new MemberIdentifierContext(_ctx, getState());
		enterRule(_localctx, 28, RULE_memberIdentifier);
		try {
			setState(273);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case Attributes:
				enterOuterAlt(_localctx, 1);
				{
				setState(268);
				match(Attributes);
				}
				break;
			case Methods:
				enterOuterAlt(_localctx, 2);
				{
				setState(269);
				match(Methods);
				}
				break;
			case Super:
				enterOuterAlt(_localctx, 3);
				{
				setState(270);
				match(Super);
				}
				break;
			case Constructor:
				enterOuterAlt(_localctx, 4);
				{
				setState(271);
				match(Constructor);
				}
				break;
			case In:
			case Of:
			case ElseIf:
			case Function_:
			case Delete:
			case NumberOf:
			case IndexOf:
			case Sub:
			case InstanceOf:
			case Identifier:
				enterOuterAlt(_localctx, 5);
				{
				setState(272);
				identifierExt();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SingleExpressionContext extends ParserRuleContext {
		public SingleExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_singleExpression; }
	 
		public SingleExpressionContext() { }
		public void copyFrom(SingleExpressionContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class ExpVarContext extends SingleExpressionContext {
		public VariableDeclarationListContext variableDeclarationList() {
			return getRuleContext(VariableDeclarationListContext.class,0);
		}
		public ExpVarContext(SingleExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class ExpPieceOfCodeContext extends SingleExpressionContext {
		public TerminalNode PieceOfCode() { return getToken(SintesisParser.PieceOfCode, 0); }
		public ExpPieceOfCodeContext(SingleExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class ExpInContext extends SingleExpressionContext {
		public SingleExpressionContext key;
		public Token op;
		public SingleExpressionContext dest;
		public List<SingleExpressionContext> singleExpression() {
			return getRuleContexts(SingleExpressionContext.class);
		}
		public SingleExpressionContext singleExpression(int i) {
			return getRuleContext(SingleExpressionContext.class,i);
		}
		public TerminalNode In() { return getToken(SintesisParser.In, 0); }
		public ExpInContext(SingleExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class ExpBitNotContext extends SingleExpressionContext {
		public Token op;
		public SingleExpressionContext dest;
		public TerminalNode BitNot() { return getToken(SintesisParser.BitNot, 0); }
		public SingleExpressionContext singleExpression() {
			return getRuleContext(SingleExpressionContext.class,0);
		}
		public ExpBitNotContext(SingleExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class ExpAssignmentContext extends SingleExpressionContext {
		public MemberContext dest;
		public SingleExpressionContext exp;
		public TerminalNode Assign() { return getToken(SintesisParser.Assign, 0); }
		public MemberContext member() {
			return getRuleContext(MemberContext.class,0);
		}
		public SingleExpressionContext singleExpression() {
			return getRuleContext(SingleExpressionContext.class,0);
		}
		public ExpAssignmentContext(SingleExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class ExpBasicFunctionContext extends SingleExpressionContext {
		public BasicFunctionContext fn;
		public ArgumentsContext args;
		public BasicFunctionContext basicFunction() {
			return getRuleContext(BasicFunctionContext.class,0);
		}
		public ArgumentsContext arguments() {
			return getRuleContext(ArgumentsContext.class,0);
		}
		public ExpBasicFunctionContext(SingleExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class ExpMathContext extends SingleExpressionContext {
		public IdentifierContext mem;
		public ArgumentsContext args;
		public TerminalNode Math() { return getToken(SintesisParser.Math, 0); }
		public TerminalNode Dot() { return getToken(SintesisParser.Dot, 0); }
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public ArgumentsContext arguments() {
			return getRuleContext(ArgumentsContext.class,0);
		}
		public ExpMathContext(SingleExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class ExpFunctionExpressionContext extends SingleExpressionContext {
		public AnonymousFunctionContext anonymousFunction() {
			return getRuleContext(AnonymousFunctionContext.class,0);
		}
		public ExpFunctionExpressionContext(SingleExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class ExpPreIncrementContext extends SingleExpressionContext {
		public Token op;
		public SingleExpressionContext dest;
		public SingleExpressionContext singleExpression() {
			return getRuleContext(SingleExpressionContext.class,0);
		}
		public TerminalNode PlusPlus() { return getToken(SintesisParser.PlusPlus, 0); }
		public TerminalNode MinusMinus() { return getToken(SintesisParser.MinusMinus, 0); }
		public ExpPreIncrementContext(SingleExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class ExpUnaryMinusContext extends SingleExpressionContext {
		public Token op;
		public SingleExpressionContext dest;
		public TerminalNode Minus() { return getToken(SintesisParser.Minus, 0); }
		public SingleExpressionContext singleExpression() {
			return getRuleContext(SingleExpressionContext.class,0);
		}
		public ExpUnaryMinusContext(SingleExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class ExpTernaryContext extends SingleExpressionContext {
		public SingleExpressionContext cond;
		public SingleExpressionContext ok;
		public SingleExpressionContext no;
		public TerminalNode QuestionMark() { return getToken(SintesisParser.QuestionMark, 0); }
		public TerminalNode Colon() { return getToken(SintesisParser.Colon, 0); }
		public List<SingleExpressionContext> singleExpression() {
			return getRuleContexts(SingleExpressionContext.class);
		}
		public SingleExpressionContext singleExpression(int i) {
			return getRuleContext(SingleExpressionContext.class,i);
		}
		public ExpTernaryContext(SingleExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class ExpJavascriptContext extends SingleExpressionContext {
		public TerminalNode JavascriptCode() { return getToken(SintesisParser.JavascriptCode, 0); }
		public ExpJavascriptContext(SingleExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class ExpParenthesisContext extends SingleExpressionContext {
		public SingleExpressionContext exp;
		public TerminalNode OpenParen() { return getToken(SintesisParser.OpenParen, 0); }
		public TerminalNode CloseParen() { return getToken(SintesisParser.CloseParen, 0); }
		public SingleExpressionContext singleExpression() {
			return getRuleContext(SingleExpressionContext.class,0);
		}
		public ExpParenthesisContext(SingleExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class ExpPostIncrementContext extends SingleExpressionContext {
		public SingleExpressionContext dest;
		public Token op;
		public SingleExpressionContext singleExpression() {
			return getRuleContext(SingleExpressionContext.class,0);
		}
		public TerminalNode PlusPlus() { return getToken(SintesisParser.PlusPlus, 0); }
		public TerminalNode MinusMinus() { return getToken(SintesisParser.MinusMinus, 0); }
		public ExpPostIncrementContext(SingleExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class ExpInstanceOfContext extends SingleExpressionContext {
		public SingleExpressionContext e1;
		public IdentifierContext e2;
		public TerminalNode InstanceOf() { return getToken(SintesisParser.InstanceOf, 0); }
		public SingleExpressionContext singleExpression() {
			return getRuleContext(SingleExpressionContext.class,0);
		}
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public ExpInstanceOfContext(SingleExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class ExpAssignmentOperatorContext extends SingleExpressionContext {
		public MemberContext dest;
		public AssignmentOperatorContext op;
		public SingleExpressionContext exp;
		public MemberContext member() {
			return getRuleContext(MemberContext.class,0);
		}
		public AssignmentOperatorContext assignmentOperator() {
			return getRuleContext(AssignmentOperatorContext.class,0);
		}
		public SingleExpressionContext singleExpression() {
			return getRuleContext(SingleExpressionContext.class,0);
		}
		public ExpAssignmentOperatorContext(SingleExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class ExpUnaryPlusContext extends SingleExpressionContext {
		public Token op;
		public SingleExpressionContext dest;
		public TerminalNode Plus() { return getToken(SintesisParser.Plus, 0); }
		public SingleExpressionContext singleExpression() {
			return getRuleContext(SingleExpressionContext.class,0);
		}
		public ExpUnaryPlusContext(SingleExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class ExpLiteralContext extends SingleExpressionContext {
		public LiteralContext literal() {
			return getRuleContext(LiteralContext.class,0);
		}
		public ExpLiteralContext(SingleExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class ExpMemberContext extends SingleExpressionContext {
		public MemberContext member() {
			return getRuleContext(MemberContext.class,0);
		}
		public ExpMemberContext(SingleExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class ExpOpContext extends SingleExpressionContext {
		public SingleExpressionContext e1;
		public Token op;
		public SingleExpressionContext e2;
		public List<SingleExpressionContext> singleExpression() {
			return getRuleContexts(SingleExpressionContext.class);
		}
		public SingleExpressionContext singleExpression(int i) {
			return getRuleContext(SingleExpressionContext.class,i);
		}
		public TerminalNode Modulus() { return getToken(SintesisParser.Modulus, 0); }
		public TerminalNode Multiply() { return getToken(SintesisParser.Multiply, 0); }
		public TerminalNode Divide() { return getToken(SintesisParser.Divide, 0); }
		public TerminalNode Plus() { return getToken(SintesisParser.Plus, 0); }
		public TerminalNode Minus() { return getToken(SintesisParser.Minus, 0); }
		public TerminalNode RightShiftArithmetic() { return getToken(SintesisParser.RightShiftArithmetic, 0); }
		public TerminalNode LeftShiftArithmetic() { return getToken(SintesisParser.LeftShiftArithmetic, 0); }
		public TerminalNode RightShiftLogical() { return getToken(SintesisParser.RightShiftLogical, 0); }
		public TerminalNode Power() { return getToken(SintesisParser.Power, 0); }
		public TerminalNode LessThan() { return getToken(SintesisParser.LessThan, 0); }
		public TerminalNode MoreThan() { return getToken(SintesisParser.MoreThan, 0); }
		public TerminalNode LessThanEquals() { return getToken(SintesisParser.LessThanEquals, 0); }
		public TerminalNode GreaterThanEquals() { return getToken(SintesisParser.GreaterThanEquals, 0); }
		public TerminalNode IdentityEquals() { return getToken(SintesisParser.IdentityEquals, 0); }
		public TerminalNode IdentityNotEquals() { return getToken(SintesisParser.IdentityNotEquals, 0); }
		public TerminalNode Equals_() { return getToken(SintesisParser.Equals_, 0); }
		public TerminalNode NotEquals() { return getToken(SintesisParser.NotEquals, 0); }
		public TerminalNode BitAnd() { return getToken(SintesisParser.BitAnd, 0); }
		public TerminalNode BitOr() { return getToken(SintesisParser.BitOr, 0); }
		public TerminalNode BitXOr() { return getToken(SintesisParser.BitXOr, 0); }
		public TerminalNode And() { return getToken(SintesisParser.And, 0); }
		public TerminalNode Or() { return getToken(SintesisParser.Or, 0); }
		public ExpOpContext(SingleExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class ExpDeleteContext extends SingleExpressionContext {
		public Token op;
		public SingleExpressionContext dest;
		public TerminalNode Delete() { return getToken(SintesisParser.Delete, 0); }
		public SingleExpressionContext singleExpression() {
			return getRuleContext(SingleExpressionContext.class,0);
		}
		public ExpDeleteContext(SingleExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class ExpNotContext extends SingleExpressionContext {
		public Token op;
		public SingleExpressionContext dest;
		public TerminalNode Not() { return getToken(SintesisParser.Not, 0); }
		public SingleExpressionContext singleExpression() {
			return getRuleContext(SingleExpressionContext.class,0);
		}
		public ExpNotContext(SingleExpressionContext ctx) { copyFrom(ctx); }
	}

	public final SingleExpressionContext singleExpression() throws RecognitionException {
		return singleExpression(0);
	}

	private SingleExpressionContext singleExpression(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		SingleExpressionContext _localctx = new SingleExpressionContext(_ctx, _parentState);
		SingleExpressionContext _prevctx = _localctx;
		int _startState = 30;
		enterRecursionRule(_localctx, 30, RULE_singleExpression, _p);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(314);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,16,_ctx) ) {
			case 1:
				{
				_localctx = new ExpFunctionExpressionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;

				setState(276);
				anonymousFunction();
				}
				break;
			case 2:
				{
				_localctx = new ExpBasicFunctionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(277);
				((ExpBasicFunctionContext)_localctx).fn = basicFunction();
				setState(278);
				((ExpBasicFunctionContext)_localctx).args = arguments();
				}
				break;
			case 3:
				{
				_localctx = new ExpJavascriptContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(280);
				match(JavascriptCode);
				}
				break;
			case 4:
				{
				_localctx = new ExpMathContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(281);
				match(Math);
				setState(282);
				match(Dot);
				setState(283);
				((ExpMathContext)_localctx).mem = identifier();
				setState(284);
				((ExpMathContext)_localctx).args = arguments();
				}
				break;
			case 5:
				{
				_localctx = new ExpDeleteContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(286);
				((ExpDeleteContext)_localctx).op = match(Delete);
				setState(287);
				((ExpDeleteContext)_localctx).dest = singleExpression(28);
				}
				break;
			case 6:
				{
				_localctx = new ExpPreIncrementContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(288);
				((ExpPreIncrementContext)_localctx).op = _input.LT(1);
				_la = _input.LA(1);
				if ( !(_la==PlusPlus || _la==MinusMinus) ) {
					((ExpPreIncrementContext)_localctx).op = (Token)_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(289);
				((ExpPreIncrementContext)_localctx).dest = singleExpression(26);
				}
				break;
			case 7:
				{
				_localctx = new ExpUnaryPlusContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(290);
				((ExpUnaryPlusContext)_localctx).op = match(Plus);
				setState(291);
				((ExpUnaryPlusContext)_localctx).dest = singleExpression(25);
				}
				break;
			case 8:
				{
				_localctx = new ExpUnaryMinusContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(292);
				((ExpUnaryMinusContext)_localctx).op = match(Minus);
				setState(293);
				((ExpUnaryMinusContext)_localctx).dest = singleExpression(24);
				}
				break;
			case 9:
				{
				_localctx = new ExpBitNotContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(294);
				((ExpBitNotContext)_localctx).op = match(BitNot);
				setState(295);
				((ExpBitNotContext)_localctx).dest = singleExpression(23);
				}
				break;
			case 10:
				{
				_localctx = new ExpNotContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(296);
				((ExpNotContext)_localctx).op = match(Not);
				setState(297);
				((ExpNotContext)_localctx).dest = singleExpression(22);
				}
				break;
			case 11:
				{
				_localctx = new ExpAssignmentContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(298);
				((ExpAssignmentContext)_localctx).dest = member(0);
				setState(299);
				match(Assign);
				setState(300);
				((ExpAssignmentContext)_localctx).exp = singleExpression(7);
				}
				break;
			case 12:
				{
				_localctx = new ExpAssignmentOperatorContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(302);
				((ExpAssignmentOperatorContext)_localctx).dest = member(0);
				setState(303);
				((ExpAssignmentOperatorContext)_localctx).op = assignmentOperator();
				setState(304);
				((ExpAssignmentOperatorContext)_localctx).exp = singleExpression(6);
				}
				break;
			case 13:
				{
				_localctx = new ExpVarContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(306);
				variableDeclarationList();
				}
				break;
			case 14:
				{
				_localctx = new ExpParenthesisContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(307);
				match(OpenParen);
				setState(308);
				((ExpParenthesisContext)_localctx).exp = singleExpression(0);
				setState(309);
				match(CloseParen);
				}
				break;
			case 15:
				{
				_localctx = new ExpMemberContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(311);
				member(0);
				}
				break;
			case 16:
				{
				_localctx = new ExpLiteralContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(312);
				literal();
				}
				break;
			case 17:
				{
				_localctx = new ExpPieceOfCodeContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(313);
				match(PieceOfCode);
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(365);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,18,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(363);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,17,_ctx) ) {
					case 1:
						{
						_localctx = new ExpInContext(new SingleExpressionContext(_parentctx, _parentState));
						((ExpInContext)_localctx).key = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_singleExpression);
						setState(316);
						if (!(precpred(_ctx, 21))) throw new FailedPredicateException(this, "precpred(_ctx, 21)");
						setState(317);
						((ExpInContext)_localctx).op = match(In);
						setState(318);
						((ExpInContext)_localctx).dest = singleExpression(22);
						}
						break;
					case 2:
						{
						_localctx = new ExpOpContext(new SingleExpressionContext(_parentctx, _parentState));
						((ExpOpContext)_localctx).e1 = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_singleExpression);
						setState(319);
						if (!(precpred(_ctx, 20))) throw new FailedPredicateException(this, "precpred(_ctx, 20)");
						setState(320);
						((ExpOpContext)_localctx).op = _input.LT(1);
						_la = _input.LA(1);
						if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << Multiply) | (1L << Divide) | (1L << Modulus))) != 0)) ) {
							((ExpOpContext)_localctx).op = (Token)_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(321);
						((ExpOpContext)_localctx).e2 = singleExpression(21);
						}
						break;
					case 3:
						{
						_localctx = new ExpOpContext(new SingleExpressionContext(_parentctx, _parentState));
						((ExpOpContext)_localctx).e1 = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_singleExpression);
						setState(322);
						if (!(precpred(_ctx, 19))) throw new FailedPredicateException(this, "precpred(_ctx, 19)");
						setState(323);
						((ExpOpContext)_localctx).op = _input.LT(1);
						_la = _input.LA(1);
						if ( !(_la==Plus || _la==Minus) ) {
							((ExpOpContext)_localctx).op = (Token)_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(324);
						((ExpOpContext)_localctx).e2 = singleExpression(20);
						}
						break;
					case 4:
						{
						_localctx = new ExpOpContext(new SingleExpressionContext(_parentctx, _parentState));
						((ExpOpContext)_localctx).e1 = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_singleExpression);
						setState(325);
						if (!(precpred(_ctx, 18))) throw new FailedPredicateException(this, "precpred(_ctx, 18)");
						setState(326);
						((ExpOpContext)_localctx).op = _input.LT(1);
						_la = _input.LA(1);
						if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << RightShiftArithmetic) | (1L << LeftShiftArithmetic) | (1L << RightShiftLogical))) != 0)) ) {
							((ExpOpContext)_localctx).op = (Token)_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(327);
						((ExpOpContext)_localctx).e2 = singleExpression(19);
						}
						break;
					case 5:
						{
						_localctx = new ExpOpContext(new SingleExpressionContext(_parentctx, _parentState));
						((ExpOpContext)_localctx).e1 = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_singleExpression);
						setState(328);
						if (!(precpred(_ctx, 17))) throw new FailedPredicateException(this, "precpred(_ctx, 17)");
						setState(329);
						((ExpOpContext)_localctx).op = match(Power);
						setState(330);
						((ExpOpContext)_localctx).e2 = singleExpression(17);
						}
						break;
					case 6:
						{
						_localctx = new ExpOpContext(new SingleExpressionContext(_parentctx, _parentState));
						((ExpOpContext)_localctx).e1 = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_singleExpression);
						setState(331);
						if (!(precpred(_ctx, 16))) throw new FailedPredicateException(this, "precpred(_ctx, 16)");
						setState(332);
						((ExpOpContext)_localctx).op = _input.LT(1);
						_la = _input.LA(1);
						if ( !(_la==LessThan || _la==MoreThan) ) {
							((ExpOpContext)_localctx).op = (Token)_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(333);
						((ExpOpContext)_localctx).e2 = singleExpression(17);
						}
						break;
					case 7:
						{
						_localctx = new ExpOpContext(new SingleExpressionContext(_parentctx, _parentState));
						((ExpOpContext)_localctx).e1 = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_singleExpression);
						setState(334);
						if (!(precpred(_ctx, 15))) throw new FailedPredicateException(this, "precpred(_ctx, 15)");
						setState(335);
						((ExpOpContext)_localctx).op = match(LessThanEquals);
						setState(336);
						((ExpOpContext)_localctx).e2 = singleExpression(16);
						}
						break;
					case 8:
						{
						_localctx = new ExpOpContext(new SingleExpressionContext(_parentctx, _parentState));
						((ExpOpContext)_localctx).e1 = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_singleExpression);
						setState(337);
						if (!(precpred(_ctx, 14))) throw new FailedPredicateException(this, "precpred(_ctx, 14)");
						setState(338);
						((ExpOpContext)_localctx).op = match(GreaterThanEquals);
						setState(339);
						((ExpOpContext)_localctx).e2 = singleExpression(15);
						}
						break;
					case 9:
						{
						_localctx = new ExpOpContext(new SingleExpressionContext(_parentctx, _parentState));
						((ExpOpContext)_localctx).e1 = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_singleExpression);
						setState(340);
						if (!(precpred(_ctx, 12))) throw new FailedPredicateException(this, "precpred(_ctx, 12)");
						setState(341);
						((ExpOpContext)_localctx).op = _input.LT(1);
						_la = _input.LA(1);
						if ( !(_la==IdentityEquals || _la==IdentityNotEquals) ) {
							((ExpOpContext)_localctx).op = (Token)_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(342);
						((ExpOpContext)_localctx).e2 = singleExpression(13);
						}
						break;
					case 10:
						{
						_localctx = new ExpOpContext(new SingleExpressionContext(_parentctx, _parentState));
						((ExpOpContext)_localctx).e1 = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_singleExpression);
						setState(343);
						if (!(precpred(_ctx, 11))) throw new FailedPredicateException(this, "precpred(_ctx, 11)");
						setState(344);
						((ExpOpContext)_localctx).op = _input.LT(1);
						_la = _input.LA(1);
						if ( !(_la==Equals_ || _la==NotEquals) ) {
							((ExpOpContext)_localctx).op = (Token)_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(345);
						((ExpOpContext)_localctx).e2 = singleExpression(12);
						}
						break;
					case 11:
						{
						_localctx = new ExpOpContext(new SingleExpressionContext(_parentctx, _parentState));
						((ExpOpContext)_localctx).e1 = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_singleExpression);
						setState(346);
						if (!(precpred(_ctx, 10))) throw new FailedPredicateException(this, "precpred(_ctx, 10)");
						setState(347);
						((ExpOpContext)_localctx).op = _input.LT(1);
						_la = _input.LA(1);
						if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << BitAnd) | (1L << BitXOr) | (1L << BitOr))) != 0)) ) {
							((ExpOpContext)_localctx).op = (Token)_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(348);
						((ExpOpContext)_localctx).e2 = singleExpression(11);
						}
						break;
					case 12:
						{
						_localctx = new ExpOpContext(new SingleExpressionContext(_parentctx, _parentState));
						((ExpOpContext)_localctx).e1 = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_singleExpression);
						setState(349);
						if (!(precpred(_ctx, 9))) throw new FailedPredicateException(this, "precpred(_ctx, 9)");
						setState(350);
						((ExpOpContext)_localctx).op = _input.LT(1);
						_la = _input.LA(1);
						if ( !(_la==And || _la==Or) ) {
							((ExpOpContext)_localctx).op = (Token)_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(351);
						((ExpOpContext)_localctx).e2 = singleExpression(10);
						}
						break;
					case 13:
						{
						_localctx = new ExpTernaryContext(new SingleExpressionContext(_parentctx, _parentState));
						((ExpTernaryContext)_localctx).cond = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_singleExpression);
						setState(352);
						if (!(precpred(_ctx, 8))) throw new FailedPredicateException(this, "precpred(_ctx, 8)");
						setState(353);
						match(QuestionMark);
						setState(354);
						((ExpTernaryContext)_localctx).ok = singleExpression(0);
						setState(355);
						match(Colon);
						setState(356);
						((ExpTernaryContext)_localctx).no = singleExpression(9);
						}
						break;
					case 14:
						{
						_localctx = new ExpPostIncrementContext(new SingleExpressionContext(_parentctx, _parentState));
						((ExpPostIncrementContext)_localctx).dest = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_singleExpression);
						setState(358);
						if (!(precpred(_ctx, 27))) throw new FailedPredicateException(this, "precpred(_ctx, 27)");
						setState(359);
						((ExpPostIncrementContext)_localctx).op = _input.LT(1);
						_la = _input.LA(1);
						if ( !(_la==PlusPlus || _la==MinusMinus) ) {
							((ExpPostIncrementContext)_localctx).op = (Token)_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						}
						break;
					case 15:
						{
						_localctx = new ExpInstanceOfContext(new SingleExpressionContext(_parentctx, _parentState));
						((ExpInstanceOfContext)_localctx).e1 = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_singleExpression);
						setState(360);
						if (!(precpred(_ctx, 13))) throw new FailedPredicateException(this, "precpred(_ctx, 13)");
						setState(361);
						match(InstanceOf);
						setState(362);
						((ExpInstanceOfContext)_localctx).e2 = identifier();
						}
						break;
					}
					} 
				}
				setState(367);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,18,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public static class BasicFunction0Context extends ParserRuleContext {
		public BasicFunction0Context(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_basicFunction0; }
	 
		public BasicFunction0Context() { }
		public void copyFrom(BasicFunction0Context ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class RandomContext extends BasicFunction0Context {
		public TerminalNode Random() { return getToken(SintesisParser.Random, 0); }
		public RandomContext(BasicFunction0Context ctx) { copyFrom(ctx); }
	}

	public final BasicFunction0Context basicFunction0() throws RecognitionException {
		BasicFunction0Context _localctx = new BasicFunction0Context(_ctx, getState());
		enterRule(_localctx, 32, RULE_basicFunction0);
		try {
			_localctx = new RandomContext(_localctx);
			enterOuterAlt(_localctx, 1);
			{
			setState(368);
			match(Random);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class BasicFunction1Context extends ParserRuleContext {
		public BasicFunction1Context(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_basicFunction1; }
	 
		public BasicFunction1Context() { }
		public void copyFrom(BasicFunction1Context ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class OrdContext extends BasicFunction1Context {
		public TerminalNode Ord() { return getToken(SintesisParser.Ord, 0); }
		public OrdContext(BasicFunction1Context ctx) { copyFrom(ctx); }
	}
	public static class DictionaryContext extends BasicFunction1Context {
		public TerminalNode Dictionary() { return getToken(SintesisParser.Dictionary, 0); }
		public DictionaryContext(BasicFunction1Context ctx) { copyFrom(ctx); }
	}
	public static class ChrContext extends BasicFunction1Context {
		public TerminalNode Chr() { return getToken(SintesisParser.Chr, 0); }
		public ChrContext(BasicFunction1Context ctx) { copyFrom(ctx); }
	}
	public static class PromptContext extends BasicFunction1Context {
		public TerminalNode Prompt() { return getToken(SintesisParser.Prompt, 0); }
		public PromptContext(BasicFunction1Context ctx) { copyFrom(ctx); }
	}
	public static class NumberOfContext extends BasicFunction1Context {
		public TerminalNode NumberOf() { return getToken(SintesisParser.NumberOf, 0); }
		public NumberOfContext(BasicFunction1Context ctx) { copyFrom(ctx); }
	}

	public final BasicFunction1Context basicFunction1() throws RecognitionException {
		BasicFunction1Context _localctx = new BasicFunction1Context(_ctx, getState());
		enterRule(_localctx, 34, RULE_basicFunction1);
		try {
			setState(375);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case NumberOf:
				_localctx = new NumberOfContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(370);
				match(NumberOf);
				}
				break;
			case Ord:
				_localctx = new OrdContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(371);
				match(Ord);
				}
				break;
			case Chr:
				_localctx = new ChrContext(_localctx);
				enterOuterAlt(_localctx, 3);
				{
				setState(372);
				match(Chr);
				}
				break;
			case Prompt:
				_localctx = new PromptContext(_localctx);
				enterOuterAlt(_localctx, 4);
				{
				setState(373);
				match(Prompt);
				}
				break;
			case Dictionary:
				_localctx = new DictionaryContext(_localctx);
				enterOuterAlt(_localctx, 5);
				{
				setState(374);
				match(Dictionary);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class BasicFunction2Context extends ParserRuleContext {
		public BasicFunction2Context(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_basicFunction2; }
	 
		public BasicFunction2Context() { }
		public void copyFrom(BasicFunction2Context ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class ConvertContext extends BasicFunction2Context {
		public TerminalNode Convert() { return getToken(SintesisParser.Convert, 0); }
		public ConvertContext(BasicFunction2Context ctx) { copyFrom(ctx); }
	}

	public final BasicFunction2Context basicFunction2() throws RecognitionException {
		BasicFunction2Context _localctx = new BasicFunction2Context(_ctx, getState());
		enterRule(_localctx, 36, RULE_basicFunction2);
		try {
			_localctx = new ConvertContext(_localctx);
			enterOuterAlt(_localctx, 1);
			{
			setState(377);
			match(Convert);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class BasicFunctionContext extends ParserRuleContext {
		public BasicFunction0Context basicFunction0() {
			return getRuleContext(BasicFunction0Context.class,0);
		}
		public BasicFunction1Context basicFunction1() {
			return getRuleContext(BasicFunction1Context.class,0);
		}
		public BasicFunction2Context basicFunction2() {
			return getRuleContext(BasicFunction2Context.class,0);
		}
		public BasicFunctionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_basicFunction; }
	}

	public final BasicFunctionContext basicFunction() throws RecognitionException {
		BasicFunctionContext _localctx = new BasicFunctionContext(_ctx, getState());
		enterRule(_localctx, 38, RULE_basicFunction);
		try {
			setState(382);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case Random:
				enterOuterAlt(_localctx, 1);
				{
				setState(379);
				basicFunction0();
				}
				break;
			case NumberOf:
			case Chr:
			case Ord:
			case Prompt:
			case Dictionary:
				enterOuterAlt(_localctx, 2);
				{
				setState(380);
				basicFunction1();
				}
				break;
			case Convert:
				enterOuterAlt(_localctx, 3);
				{
				setState(381);
				basicFunction2();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ExpressionSequenceContext extends ParserRuleContext {
		public List<SingleExpressionContext> singleExpression() {
			return getRuleContexts(SingleExpressionContext.class);
		}
		public SingleExpressionContext singleExpression(int i) {
			return getRuleContext(SingleExpressionContext.class,i);
		}
		public List<TerminalNode> Comma() { return getTokens(SintesisParser.Comma); }
		public TerminalNode Comma(int i) {
			return getToken(SintesisParser.Comma, i);
		}
		public ExpressionSequenceContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expressionSequence; }
	}

	public final ExpressionSequenceContext expressionSequence() throws RecognitionException {
		ExpressionSequenceContext _localctx = new ExpressionSequenceContext(_ctx, getState());
		enterRule(_localctx, 40, RULE_expressionSequence);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(384);
			singleExpression(0);
			setState(389);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,21,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(385);
					match(Comma);
					setState(386);
					singleExpression(0);
					}
					} 
				}
				setState(391);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,21,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class IfStatementContext extends ParserRuleContext {
		public SingleExpressionContext exp;
		public StatementContext stmt;
		public ElseIfsContext elseifs;
		public StatementContext elsestmt_;
		public TerminalNode If() { return getToken(SintesisParser.If, 0); }
		public SingleExpressionContext singleExpression() {
			return getRuleContext(SingleExpressionContext.class,0);
		}
		public List<StatementContext> statement() {
			return getRuleContexts(StatementContext.class);
		}
		public StatementContext statement(int i) {
			return getRuleContext(StatementContext.class,i);
		}
		public List<TerminalNode> Then() { return getTokens(SintesisParser.Then); }
		public TerminalNode Then(int i) {
			return getToken(SintesisParser.Then, i);
		}
		public TerminalNode Else() { return getToken(SintesisParser.Else, 0); }
		public ElseIfsContext elseIfs() {
			return getRuleContext(ElseIfsContext.class,0);
		}
		public IfStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ifStatement; }
	}

	public final IfStatementContext ifStatement() throws RecognitionException {
		IfStatementContext _localctx = new IfStatementContext(_ctx, getState());
		enterRule(_localctx, 42, RULE_ifStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(392);
			match(If);
			setState(393);
			((IfStatementContext)_localctx).exp = singleExpression(0);
			setState(395);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,22,_ctx) ) {
			case 1:
				{
				setState(394);
				match(Then);
				}
				break;
			}
			setState(397);
			((IfStatementContext)_localctx).stmt = statement();
			setState(399);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,23,_ctx) ) {
			case 1:
				{
				setState(398);
				((IfStatementContext)_localctx).elseifs = elseIfs();
				}
				break;
			}
			setState(406);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,25,_ctx) ) {
			case 1:
				{
				setState(401);
				match(Else);
				setState(403);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,24,_ctx) ) {
				case 1:
					{
					setState(402);
					match(Then);
					}
					break;
				}
				setState(405);
				((IfStatementContext)_localctx).elsestmt_ = statement();
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ElseIfsContext extends ParserRuleContext {
		public List<ElseIfContext> elseIf() {
			return getRuleContexts(ElseIfContext.class);
		}
		public ElseIfContext elseIf(int i) {
			return getRuleContext(ElseIfContext.class,i);
		}
		public ElseIfsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_elseIfs; }
	}

	public final ElseIfsContext elseIfs() throws RecognitionException {
		ElseIfsContext _localctx = new ElseIfsContext(_ctx, getState());
		enterRule(_localctx, 44, RULE_elseIfs);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(409); 
			_errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					setState(408);
					elseIf();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(411); 
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,26,_ctx);
			} while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ElseIfContext extends ParserRuleContext {
		public SingleExpressionContext exp;
		public StatementContext stmt;
		public TerminalNode ElseIf() { return getToken(SintesisParser.ElseIf, 0); }
		public SingleExpressionContext singleExpression() {
			return getRuleContext(SingleExpressionContext.class,0);
		}
		public StatementContext statement() {
			return getRuleContext(StatementContext.class,0);
		}
		public TerminalNode Then() { return getToken(SintesisParser.Then, 0); }
		public ElseIfContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_elseIf; }
	}

	public final ElseIfContext elseIf() throws RecognitionException {
		ElseIfContext _localctx = new ElseIfContext(_ctx, getState());
		enterRule(_localctx, 46, RULE_elseIf);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(413);
			match(ElseIf);
			setState(414);
			((ElseIfContext)_localctx).exp = singleExpression(0);
			setState(416);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,27,_ctx) ) {
			case 1:
				{
				setState(415);
				match(Then);
				}
				break;
			}
			setState(418);
			((ElseIfContext)_localctx).stmt = statement();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class IteratorIndexesContext extends ParserRuleContext {
		public Token idv;
		public Token op;
		public SingleExpressionContext coll;
		public Token idk;
		public List<TerminalNode> Identifier() { return getTokens(SintesisParser.Identifier); }
		public TerminalNode Identifier(int i) {
			return getToken(SintesisParser.Identifier, i);
		}
		public SingleExpressionContext singleExpression() {
			return getRuleContext(SingleExpressionContext.class,0);
		}
		public TerminalNode In() { return getToken(SintesisParser.In, 0); }
		public TerminalNode Of() { return getToken(SintesisParser.Of, 0); }
		public TerminalNode Comma() { return getToken(SintesisParser.Comma, 0); }
		public TerminalNode ARROW() { return getToken(SintesisParser.ARROW, 0); }
		public IteratorIndexesContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_iteratorIndexes; }
	}

	public final IteratorIndexesContext iteratorIndexes() throws RecognitionException {
		IteratorIndexesContext _localctx = new IteratorIndexesContext(_ctx, getState());
		enterRule(_localctx, 48, RULE_iteratorIndexes);
		int _la;
		try {
			setState(433);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,28,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(420);
				((IteratorIndexesContext)_localctx).idv = match(Identifier);
				setState(421);
				((IteratorIndexesContext)_localctx).op = _input.LT(1);
				_la = _input.LA(1);
				if ( !(_la==In || _la==Of) ) {
					((IteratorIndexesContext)_localctx).op = (Token)_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(422);
				((IteratorIndexesContext)_localctx).coll = singleExpression(0);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(423);
				((IteratorIndexesContext)_localctx).idk = match(Identifier);
				setState(424);
				match(Comma);
				setState(425);
				((IteratorIndexesContext)_localctx).idv = match(Identifier);
				setState(426);
				((IteratorIndexesContext)_localctx).op = _input.LT(1);
				_la = _input.LA(1);
				if ( !(_la==In || _la==Of) ) {
					((IteratorIndexesContext)_localctx).op = (Token)_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(427);
				((IteratorIndexesContext)_localctx).coll = singleExpression(0);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(428);
				((IteratorIndexesContext)_localctx).idk = match(Identifier);
				setState(429);
				match(ARROW);
				setState(430);
				((IteratorIndexesContext)_localctx).idv = match(Identifier);
				setState(431);
				((IteratorIndexesContext)_localctx).op = _input.LT(1);
				_la = _input.LA(1);
				if ( !(_la==In || _la==Of) ) {
					((IteratorIndexesContext)_localctx).op = (Token)_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(432);
				((IteratorIndexesContext)_localctx).coll = singleExpression(0);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class IteratorRangeContext extends ParserRuleContext {
		public Token vvar;
		public IdentifierContext id;
		public SingleExpressionContext start;
		public SingleExpressionContext to;
		public TerminalNode To() { return getToken(SintesisParser.To, 0); }
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public TerminalNode Assign() { return getToken(SintesisParser.Assign, 0); }
		public TerminalNode In() { return getToken(SintesisParser.In, 0); }
		public List<SingleExpressionContext> singleExpression() {
			return getRuleContexts(SingleExpressionContext.class);
		}
		public SingleExpressionContext singleExpression(int i) {
			return getRuleContext(SingleExpressionContext.class,i);
		}
		public TerminalNode Var_() { return getToken(SintesisParser.Var_, 0); }
		public IteratorRangeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_iteratorRange; }
	}

	public final IteratorRangeContext iteratorRange() throws RecognitionException {
		IteratorRangeContext _localctx = new IteratorRangeContext(_ctx, getState());
		enterRule(_localctx, 50, RULE_iteratorRange);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(436);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Var_) {
				{
				setState(435);
				((IteratorRangeContext)_localctx).vvar = match(Var_);
				}
			}

			setState(438);
			((IteratorRangeContext)_localctx).id = identifier();
			setState(439);
			_la = _input.LA(1);
			if ( !(_la==Assign || _la==In) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(440);
			((IteratorRangeContext)_localctx).start = singleExpression(0);
			setState(441);
			match(To);
			setState(442);
			((IteratorRangeContext)_localctx).to = singleExpression(0);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class IterationStatementContext extends ParserRuleContext {
		public IterationStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_iterationStatement; }
	 
		public IterationStatementContext() { }
		public void copyFrom(IterationStatementContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class RepeatWhileStatementContext extends IterationStatementContext {
		public StatementContext stmt;
		public SingleExpressionContext exp;
		public TerminalNode While() { return getToken(SintesisParser.While, 0); }
		public TerminalNode Repeat() { return getToken(SintesisParser.Repeat, 0); }
		public TerminalNode Do() { return getToken(SintesisParser.Do, 0); }
		public StatementContext statement() {
			return getRuleContext(StatementContext.class,0);
		}
		public SingleExpressionContext singleExpression() {
			return getRuleContext(SingleExpressionContext.class,0);
		}
		public RepeatWhileStatementContext(IterationStatementContext ctx) { copyFrom(ctx); }
	}
	public static class RepeatStatementContext extends IterationStatementContext {
		public SingleExpressionContext exp;
		public StatementContext stmt;
		public TerminalNode Repeat() { return getToken(SintesisParser.Repeat, 0); }
		public SingleExpressionContext singleExpression() {
			return getRuleContext(SingleExpressionContext.class,0);
		}
		public StatementContext statement() {
			return getRuleContext(StatementContext.class,0);
		}
		public TerminalNode Times() { return getToken(SintesisParser.Times, 0); }
		public RepeatStatementContext(IterationStatementContext ctx) { copyFrom(ctx); }
	}
	public static class ForEachStatementContext extends IterationStatementContext {
		public IteratorIndexesContext iter;
		public StatementContext stmt;
		public IteratorIndexesContext iteratorIndexes() {
			return getRuleContext(IteratorIndexesContext.class,0);
		}
		public StatementContext statement() {
			return getRuleContext(StatementContext.class,0);
		}
		public TerminalNode For() { return getToken(SintesisParser.For, 0); }
		public TerminalNode ForEach() { return getToken(SintesisParser.ForEach, 0); }
		public TerminalNode Repeat() { return getToken(SintesisParser.Repeat, 0); }
		public TerminalNode Do() { return getToken(SintesisParser.Do, 0); }
		public TerminalNode Each() { return getToken(SintesisParser.Each, 0); }
		public ForEachStatementContext(IterationStatementContext ctx) { copyFrom(ctx); }
	}
	public static class ForEachStatement2Context extends IterationStatementContext {
		public IteratorIndexesContext iter;
		public StatementContext stmt;
		public TerminalNode OpenParen() { return getToken(SintesisParser.OpenParen, 0); }
		public TerminalNode CloseParen() { return getToken(SintesisParser.CloseParen, 0); }
		public IteratorIndexesContext iteratorIndexes() {
			return getRuleContext(IteratorIndexesContext.class,0);
		}
		public StatementContext statement() {
			return getRuleContext(StatementContext.class,0);
		}
		public TerminalNode For() { return getToken(SintesisParser.For, 0); }
		public TerminalNode ForEach() { return getToken(SintesisParser.ForEach, 0); }
		public TerminalNode Repeat() { return getToken(SintesisParser.Repeat, 0); }
		public TerminalNode Do() { return getToken(SintesisParser.Do, 0); }
		public TerminalNode Each() { return getToken(SintesisParser.Each, 0); }
		public ForEachStatement2Context(IterationStatementContext ctx) { copyFrom(ctx); }
	}
	public static class ForClassicContext extends IterationStatementContext {
		public ForPreContext pre;
		public ExpressionSequenceContext exp;
		public ExpressionSequenceContext post;
		public StatementContext stmt;
		public TerminalNode For() { return getToken(SintesisParser.For, 0); }
		public TerminalNode OpenParen() { return getToken(SintesisParser.OpenParen, 0); }
		public List<TerminalNode> SemiColon() { return getTokens(SintesisParser.SemiColon); }
		public TerminalNode SemiColon(int i) {
			return getToken(SintesisParser.SemiColon, i);
		}
		public TerminalNode CloseParen() { return getToken(SintesisParser.CloseParen, 0); }
		public StatementContext statement() {
			return getRuleContext(StatementContext.class,0);
		}
		public ForPreContext forPre() {
			return getRuleContext(ForPreContext.class,0);
		}
		public List<ExpressionSequenceContext> expressionSequence() {
			return getRuleContexts(ExpressionSequenceContext.class);
		}
		public ExpressionSequenceContext expressionSequence(int i) {
			return getRuleContext(ExpressionSequenceContext.class,i);
		}
		public ForClassicContext(IterationStatementContext ctx) { copyFrom(ctx); }
	}
	public static class ForFromToStatement2Context extends IterationStatementContext {
		public IteratorRangeContext iter;
		public StatementContext stmt;
		public TerminalNode For() { return getToken(SintesisParser.For, 0); }
		public TerminalNode OpenParen() { return getToken(SintesisParser.OpenParen, 0); }
		public TerminalNode CloseParen() { return getToken(SintesisParser.CloseParen, 0); }
		public IteratorRangeContext iteratorRange() {
			return getRuleContext(IteratorRangeContext.class,0);
		}
		public StatementContext statement() {
			return getRuleContext(StatementContext.class,0);
		}
		public TerminalNode Repeat() { return getToken(SintesisParser.Repeat, 0); }
		public TerminalNode Do() { return getToken(SintesisParser.Do, 0); }
		public ForFromToStatement2Context(IterationStatementContext ctx) { copyFrom(ctx); }
	}
	public static class WhileRepeatStatementContext extends IterationStatementContext {
		public SingleExpressionContext exp;
		public StatementContext stmt;
		public TerminalNode While() { return getToken(SintesisParser.While, 0); }
		public SingleExpressionContext singleExpression() {
			return getRuleContext(SingleExpressionContext.class,0);
		}
		public StatementContext statement() {
			return getRuleContext(StatementContext.class,0);
		}
		public List<TerminalNode> Repeat() { return getTokens(SintesisParser.Repeat); }
		public TerminalNode Repeat(int i) {
			return getToken(SintesisParser.Repeat, i);
		}
		public TerminalNode Do() { return getToken(SintesisParser.Do, 0); }
		public WhileRepeatStatementContext(IterationStatementContext ctx) { copyFrom(ctx); }
	}
	public static class ForFromToStatementContext extends IterationStatementContext {
		public IteratorRangeContext iter;
		public StatementContext stmt;
		public TerminalNode For() { return getToken(SintesisParser.For, 0); }
		public IteratorRangeContext iteratorRange() {
			return getRuleContext(IteratorRangeContext.class,0);
		}
		public StatementContext statement() {
			return getRuleContext(StatementContext.class,0);
		}
		public TerminalNode Repeat() { return getToken(SintesisParser.Repeat, 0); }
		public TerminalNode Do() { return getToken(SintesisParser.Do, 0); }
		public ForFromToStatementContext(IterationStatementContext ctx) { copyFrom(ctx); }
	}

	public final IterationStatementContext iterationStatement() throws RecognitionException {
		IterationStatementContext _localctx = new IterationStatementContext(_ctx, getState());
		enterRule(_localctx, 52, RULE_iterationStatement);
		int _la;
		try {
			setState(525);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,44,_ctx) ) {
			case 1:
				_localctx = new RepeatStatementContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(444);
				match(Repeat);
				setState(445);
				((RepeatStatementContext)_localctx).exp = singleExpression(0);
				setState(447);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,30,_ctx) ) {
				case 1:
					{
					setState(446);
					match(Times);
					}
					break;
				}
				setState(449);
				((RepeatStatementContext)_localctx).stmt = statement();
				}
				break;
			case 2:
				_localctx = new RepeatWhileStatementContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(451);
				_la = _input.LA(1);
				if ( !(_la==Repeat || _la==Do) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(452);
				((RepeatWhileStatementContext)_localctx).stmt = statement();
				setState(453);
				match(While);
				setState(454);
				((RepeatWhileStatementContext)_localctx).exp = singleExpression(0);
				}
				break;
			case 3:
				_localctx = new WhileRepeatStatementContext(_localctx);
				enterOuterAlt(_localctx, 3);
				{
				setState(457);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==Repeat) {
					{
					setState(456);
					match(Repeat);
					}
				}

				setState(459);
				match(While);
				setState(460);
				((WhileRepeatStatementContext)_localctx).exp = singleExpression(0);
				setState(462);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,32,_ctx) ) {
				case 1:
					{
					setState(461);
					_la = _input.LA(1);
					if ( !(_la==Repeat || _la==Do) ) {
					_errHandler.recoverInline(this);
					}
					else {
						if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
						_errHandler.reportMatch(this);
						consume();
					}
					}
					break;
				}
				setState(464);
				((WhileRepeatStatementContext)_localctx).stmt = statement();
				}
				break;
			case 4:
				_localctx = new ForClassicContext(_localctx);
				enterOuterAlt(_localctx, 4);
				{
				setState(466);
				match(For);
				setState(467);
				match(OpenParen);
				setState(469);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (((((_la - 8)) & ~0x3f) == 0 && ((1L << (_la - 8)) & ((1L << (RegularExpressionLiteral - 8)) | (1L << (JavascriptCode - 8)) | (1L << (OpenBracket - 8)) | (1L << (OpenParen - 8)) | (1L << (OpenBrace - 8)) | (1L << (PlusPlus - 8)) | (1L << (MinusMinus - 8)) | (1L << (Plus - 8)) | (1L << (Minus - 8)) | (1L << (BitNot - 8)) | (1L << (Not - 8)) | (1L << (PieceOfCode - 8)) | (1L << (NullLiteral - 8)) | (1L << (DecimalLiteral - 8)) | (1L << (HexIntegerLiteral - 8)) | (1L << (OctalIntegerLiteral - 8)) | (1L << (OctalIntegerLiteral2 - 8)) | (1L << (BinaryIntegerLiteral - 8)))) != 0) || ((((_la - 75)) & ~0x3f) == 0 && ((1L << (_la - 75)) & ((1L << (BooleanLiteral - 75)) | (1L << (In - 75)) | (1L << (Of - 75)) | (1L << (ElseIf - 75)) | (1L << (Declare - 75)) | (1L << (Function_ - 75)) | (1L << (Delete - 75)) | (1L << (NumberOf - 75)) | (1L << (IndexOf - 75)) | (1L << (Sub - 75)) | (1L << (Math - 75)) | (1L << (Random - 75)) | (1L << (Chr - 75)) | (1L << (Ord - 75)) | (1L << (Prompt - 75)) | (1L << (Convert - 75)) | (1L << (New_ - 75)) | (1L << (Attributes - 75)) | (1L << (Methods - 75)) | (1L << (Super - 75)) | (1L << (InstanceOf - 75)) | (1L << (Dictionary - 75)) | (1L << (Var_ - 75)) | (1L << (Const_ - 75)) | (1L << (Identifier - 75)) | (1L << (StringLiteral - 75)))) != 0)) {
					{
					setState(468);
					((ForClassicContext)_localctx).pre = forPre();
					}
				}

				setState(471);
				match(SemiColon);
				setState(473);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (((((_la - 8)) & ~0x3f) == 0 && ((1L << (_la - 8)) & ((1L << (RegularExpressionLiteral - 8)) | (1L << (JavascriptCode - 8)) | (1L << (OpenBracket - 8)) | (1L << (OpenParen - 8)) | (1L << (OpenBrace - 8)) | (1L << (PlusPlus - 8)) | (1L << (MinusMinus - 8)) | (1L << (Plus - 8)) | (1L << (Minus - 8)) | (1L << (BitNot - 8)) | (1L << (Not - 8)) | (1L << (PieceOfCode - 8)) | (1L << (NullLiteral - 8)) | (1L << (DecimalLiteral - 8)) | (1L << (HexIntegerLiteral - 8)) | (1L << (OctalIntegerLiteral - 8)) | (1L << (OctalIntegerLiteral2 - 8)) | (1L << (BinaryIntegerLiteral - 8)))) != 0) || ((((_la - 75)) & ~0x3f) == 0 && ((1L << (_la - 75)) & ((1L << (BooleanLiteral - 75)) | (1L << (In - 75)) | (1L << (Of - 75)) | (1L << (ElseIf - 75)) | (1L << (Declare - 75)) | (1L << (Function_ - 75)) | (1L << (Delete - 75)) | (1L << (NumberOf - 75)) | (1L << (IndexOf - 75)) | (1L << (Sub - 75)) | (1L << (Math - 75)) | (1L << (Random - 75)) | (1L << (Chr - 75)) | (1L << (Ord - 75)) | (1L << (Prompt - 75)) | (1L << (Convert - 75)) | (1L << (New_ - 75)) | (1L << (Attributes - 75)) | (1L << (Methods - 75)) | (1L << (Super - 75)) | (1L << (InstanceOf - 75)) | (1L << (Dictionary - 75)) | (1L << (Var_ - 75)) | (1L << (Const_ - 75)) | (1L << (Identifier - 75)) | (1L << (StringLiteral - 75)))) != 0)) {
					{
					setState(472);
					((ForClassicContext)_localctx).exp = expressionSequence();
					}
				}

				setState(475);
				match(SemiColon);
				setState(477);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (((((_la - 8)) & ~0x3f) == 0 && ((1L << (_la - 8)) & ((1L << (RegularExpressionLiteral - 8)) | (1L << (JavascriptCode - 8)) | (1L << (OpenBracket - 8)) | (1L << (OpenParen - 8)) | (1L << (OpenBrace - 8)) | (1L << (PlusPlus - 8)) | (1L << (MinusMinus - 8)) | (1L << (Plus - 8)) | (1L << (Minus - 8)) | (1L << (BitNot - 8)) | (1L << (Not - 8)) | (1L << (PieceOfCode - 8)) | (1L << (NullLiteral - 8)) | (1L << (DecimalLiteral - 8)) | (1L << (HexIntegerLiteral - 8)) | (1L << (OctalIntegerLiteral - 8)) | (1L << (OctalIntegerLiteral2 - 8)) | (1L << (BinaryIntegerLiteral - 8)))) != 0) || ((((_la - 75)) & ~0x3f) == 0 && ((1L << (_la - 75)) & ((1L << (BooleanLiteral - 75)) | (1L << (In - 75)) | (1L << (Of - 75)) | (1L << (ElseIf - 75)) | (1L << (Declare - 75)) | (1L << (Function_ - 75)) | (1L << (Delete - 75)) | (1L << (NumberOf - 75)) | (1L << (IndexOf - 75)) | (1L << (Sub - 75)) | (1L << (Math - 75)) | (1L << (Random - 75)) | (1L << (Chr - 75)) | (1L << (Ord - 75)) | (1L << (Prompt - 75)) | (1L << (Convert - 75)) | (1L << (New_ - 75)) | (1L << (Attributes - 75)) | (1L << (Methods - 75)) | (1L << (Super - 75)) | (1L << (InstanceOf - 75)) | (1L << (Dictionary - 75)) | (1L << (Var_ - 75)) | (1L << (Const_ - 75)) | (1L << (Identifier - 75)) | (1L << (StringLiteral - 75)))) != 0)) {
					{
					setState(476);
					((ForClassicContext)_localctx).post = expressionSequence();
					}
				}

				setState(479);
				match(CloseParen);
				setState(480);
				((ForClassicContext)_localctx).stmt = statement();
				}
				break;
			case 5:
				_localctx = new ForFromToStatementContext(_localctx);
				enterOuterAlt(_localctx, 5);
				{
				setState(481);
				match(For);
				setState(482);
				((ForFromToStatementContext)_localctx).iter = iteratorRange();
				setState(484);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,36,_ctx) ) {
				case 1:
					{
					setState(483);
					_la = _input.LA(1);
					if ( !(_la==Repeat || _la==Do) ) {
					_errHandler.recoverInline(this);
					}
					else {
						if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
						_errHandler.reportMatch(this);
						consume();
					}
					}
					break;
				}
				setState(486);
				((ForFromToStatementContext)_localctx).stmt = statement();
				}
				break;
			case 6:
				_localctx = new ForFromToStatement2Context(_localctx);
				enterOuterAlt(_localctx, 6);
				{
				setState(488);
				match(For);
				setState(489);
				match(OpenParen);
				setState(490);
				((ForFromToStatement2Context)_localctx).iter = iteratorRange();
				setState(491);
				match(CloseParen);
				setState(493);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,37,_ctx) ) {
				case 1:
					{
					setState(492);
					_la = _input.LA(1);
					if ( !(_la==Repeat || _la==Do) ) {
					_errHandler.recoverInline(this);
					}
					else {
						if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
						_errHandler.reportMatch(this);
						consume();
					}
					}
					break;
				}
				setState(495);
				((ForFromToStatement2Context)_localctx).stmt = statement();
				}
				break;
			case 7:
				_localctx = new ForEachStatementContext(_localctx);
				enterOuterAlt(_localctx, 7);
				{
				setState(502);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case For:
					{
					setState(497);
					match(For);
					setState(499);
					_errHandler.sync(this);
					_la = _input.LA(1);
					if (_la==Each) {
						{
						setState(498);
						match(Each);
						}
					}

					}
					break;
				case ForEach:
					{
					setState(501);
					match(ForEach);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(504);
				((ForEachStatementContext)_localctx).iter = iteratorIndexes();
				setState(506);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,40,_ctx) ) {
				case 1:
					{
					setState(505);
					_la = _input.LA(1);
					if ( !(_la==Repeat || _la==Do) ) {
					_errHandler.recoverInline(this);
					}
					else {
						if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
						_errHandler.reportMatch(this);
						consume();
					}
					}
					break;
				}
				setState(508);
				((ForEachStatementContext)_localctx).stmt = statement();
				}
				break;
			case 8:
				_localctx = new ForEachStatement2Context(_localctx);
				enterOuterAlt(_localctx, 8);
				{
				setState(515);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case For:
					{
					setState(510);
					match(For);
					setState(512);
					_errHandler.sync(this);
					_la = _input.LA(1);
					if (_la==Each) {
						{
						setState(511);
						match(Each);
						}
					}

					}
					break;
				case ForEach:
					{
					setState(514);
					match(ForEach);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(517);
				match(OpenParen);
				setState(518);
				((ForEachStatement2Context)_localctx).iter = iteratorIndexes();
				setState(519);
				match(CloseParen);
				setState(521);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,43,_ctx) ) {
				case 1:
					{
					setState(520);
					_la = _input.LA(1);
					if ( !(_la==Repeat || _la==Do) ) {
					_errHandler.recoverInline(this);
					}
					else {
						if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
						_errHandler.reportMatch(this);
						consume();
					}
					}
					break;
				}
				setState(523);
				((ForEachStatement2Context)_localctx).stmt = statement();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ForPreContext extends ParserRuleContext {
		public ExpressionSequenceContext expressionSequence() {
			return getRuleContext(ExpressionSequenceContext.class,0);
		}
		public VariableDeclarationListContext variableDeclarationList() {
			return getRuleContext(VariableDeclarationListContext.class,0);
		}
		public ForPreContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_forPre; }
	}

	public final ForPreContext forPre() throws RecognitionException {
		ForPreContext _localctx = new ForPreContext(_ctx, getState());
		enterRule(_localctx, 54, RULE_forPre);
		try {
			setState(529);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,45,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(527);
				expressionSequence();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(528);
				variableDeclarationList();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ContinueStatementContext extends ParserRuleContext {
		public TerminalNode Continue() { return getToken(SintesisParser.Continue, 0); }
		public EosContext eos() {
			return getRuleContext(EosContext.class,0);
		}
		public ContinueStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_continueStatement; }
	}

	public final ContinueStatementContext continueStatement() throws RecognitionException {
		ContinueStatementContext _localctx = new ContinueStatementContext(_ctx, getState());
		enterRule(_localctx, 56, RULE_continueStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(531);
			match(Continue);
			setState(532);
			eos();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class BreakStatementContext extends ParserRuleContext {
		public TerminalNode Break() { return getToken(SintesisParser.Break, 0); }
		public EosContext eos() {
			return getRuleContext(EosContext.class,0);
		}
		public BreakStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_breakStatement; }
	}

	public final BreakStatementContext breakStatement() throws RecognitionException {
		BreakStatementContext _localctx = new BreakStatementContext(_ctx, getState());
		enterRule(_localctx, 58, RULE_breakStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(534);
			match(Break);
			setState(535);
			eos();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ReturnStatementContext extends ParserRuleContext {
		public SingleExpressionContext exp;
		public TerminalNode Return() { return getToken(SintesisParser.Return, 0); }
		public EosContext eos() {
			return getRuleContext(EosContext.class,0);
		}
		public SingleExpressionContext singleExpression() {
			return getRuleContext(SingleExpressionContext.class,0);
		}
		public ReturnStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_returnStatement; }
	}

	public final ReturnStatementContext returnStatement() throws RecognitionException {
		ReturnStatementContext _localctx = new ReturnStatementContext(_ctx, getState());
		enterRule(_localctx, 60, RULE_returnStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(537);
			match(Return);
			setState(540);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,46,_ctx) ) {
			case 1:
				{
				setState(538);
				((ReturnStatementContext)_localctx).exp = singleExpression(0);
				}
				break;
			case 2:
				{
				setState(539);
				eos();
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SwitchStatementContext extends ParserRuleContext {
		public TerminalNode Switch() { return getToken(SintesisParser.Switch, 0); }
		public TerminalNode OpenParen() { return getToken(SintesisParser.OpenParen, 0); }
		public ExpressionSequenceContext expressionSequence() {
			return getRuleContext(ExpressionSequenceContext.class,0);
		}
		public TerminalNode CloseParen() { return getToken(SintesisParser.CloseParen, 0); }
		public CaseBlockContext caseBlock() {
			return getRuleContext(CaseBlockContext.class,0);
		}
		public SwitchStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_switchStatement; }
	}

	public final SwitchStatementContext switchStatement() throws RecognitionException {
		SwitchStatementContext _localctx = new SwitchStatementContext(_ctx, getState());
		enterRule(_localctx, 62, RULE_switchStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(542);
			match(Switch);
			setState(543);
			match(OpenParen);
			setState(544);
			expressionSequence();
			setState(545);
			match(CloseParen);
			setState(546);
			caseBlock();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class CaseBlockContext extends ParserRuleContext {
		public TerminalNode OpenBrace() { return getToken(SintesisParser.OpenBrace, 0); }
		public TerminalNode CloseBrace() { return getToken(SintesisParser.CloseBrace, 0); }
		public List<CaseClausesContext> caseClauses() {
			return getRuleContexts(CaseClausesContext.class);
		}
		public CaseClausesContext caseClauses(int i) {
			return getRuleContext(CaseClausesContext.class,i);
		}
		public DefaultClauseContext defaultClause() {
			return getRuleContext(DefaultClauseContext.class,0);
		}
		public CaseBlockContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_caseBlock; }
	}

	public final CaseBlockContext caseBlock() throws RecognitionException {
		CaseBlockContext _localctx = new CaseBlockContext(_ctx, getState());
		enterRule(_localctx, 64, RULE_caseBlock);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(548);
			match(OpenBrace);
			setState(550);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Case) {
				{
				setState(549);
				caseClauses();
				}
			}

			setState(556);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Default) {
				{
				setState(552);
				defaultClause();
				setState(554);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==Case) {
					{
					setState(553);
					caseClauses();
					}
				}

				}
			}

			setState(558);
			match(CloseBrace);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class CaseClausesContext extends ParserRuleContext {
		public List<CaseClauseContext> caseClause() {
			return getRuleContexts(CaseClauseContext.class);
		}
		public CaseClauseContext caseClause(int i) {
			return getRuleContext(CaseClauseContext.class,i);
		}
		public CaseClausesContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_caseClauses; }
	}

	public final CaseClausesContext caseClauses() throws RecognitionException {
		CaseClausesContext _localctx = new CaseClausesContext(_ctx, getState());
		enterRule(_localctx, 66, RULE_caseClauses);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(561); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(560);
				caseClause();
				}
				}
				setState(563); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( _la==Case );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class CaseClauseContext extends ParserRuleContext {
		public TerminalNode Case() { return getToken(SintesisParser.Case, 0); }
		public ExpressionSequenceContext expressionSequence() {
			return getRuleContext(ExpressionSequenceContext.class,0);
		}
		public TerminalNode Colon() { return getToken(SintesisParser.Colon, 0); }
		public StatementListContext statementList() {
			return getRuleContext(StatementListContext.class,0);
		}
		public CaseClauseContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_caseClause; }
	}

	public final CaseClauseContext caseClause() throws RecognitionException {
		CaseClauseContext _localctx = new CaseClauseContext(_ctx, getState());
		enterRule(_localctx, 68, RULE_caseClause);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(565);
			match(Case);
			setState(566);
			expressionSequence();
			setState(567);
			match(Colon);
			setState(569);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,51,_ctx) ) {
			case 1:
				{
				setState(568);
				statementList();
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DefaultClauseContext extends ParserRuleContext {
		public TerminalNode Default() { return getToken(SintesisParser.Default, 0); }
		public TerminalNode Colon() { return getToken(SintesisParser.Colon, 0); }
		public StatementListContext statementList() {
			return getRuleContext(StatementListContext.class,0);
		}
		public DefaultClauseContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_defaultClause; }
	}

	public final DefaultClauseContext defaultClause() throws RecognitionException {
		DefaultClauseContext _localctx = new DefaultClauseContext(_ctx, getState());
		enterRule(_localctx, 70, RULE_defaultClause);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(571);
			match(Default);
			setState(572);
			match(Colon);
			setState(574);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,52,_ctx) ) {
			case 1:
				{
				setState(573);
				statementList();
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FormalParameterListContext extends ParserRuleContext {
		public List<FormalParameterArgContext> formalParameterArg() {
			return getRuleContexts(FormalParameterArgContext.class);
		}
		public FormalParameterArgContext formalParameterArg(int i) {
			return getRuleContext(FormalParameterArgContext.class,i);
		}
		public List<TerminalNode> Comma() { return getTokens(SintesisParser.Comma); }
		public TerminalNode Comma(int i) {
			return getToken(SintesisParser.Comma, i);
		}
		public FormalParameterListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_formalParameterList; }
	}

	public final FormalParameterListContext formalParameterList() throws RecognitionException {
		FormalParameterListContext _localctx = new FormalParameterListContext(_ctx, getState());
		enterRule(_localctx, 72, RULE_formalParameterList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(576);
			formalParameterArg();
			setState(581);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==Comma) {
				{
				{
				setState(577);
				match(Comma);
				setState(578);
				formalParameterArg();
				}
				}
				setState(583);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FunctionDeclarationContext extends ParserRuleContext {
		public Token dec;
		public Token fun;
		public IdentifierContext id;
		public FormalParameterListContext pl;
		public FunctionBodyContext stmt;
		public TerminalNode OpenParen() { return getToken(SintesisParser.OpenParen, 0); }
		public TerminalNode CloseParen() { return getToken(SintesisParser.CloseParen, 0); }
		public TerminalNode Function_() { return getToken(SintesisParser.Function_, 0); }
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public FunctionBodyContext functionBody() {
			return getRuleContext(FunctionBodyContext.class,0);
		}
		public TerminalNode Declare() { return getToken(SintesisParser.Declare, 0); }
		public FormalParameterListContext formalParameterList() {
			return getRuleContext(FormalParameterListContext.class,0);
		}
		public FunctionDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_functionDeclaration; }
	}

	public final FunctionDeclarationContext functionDeclaration() throws RecognitionException {
		FunctionDeclarationContext _localctx = new FunctionDeclarationContext(_ctx, getState());
		enterRule(_localctx, 74, RULE_functionDeclaration);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(585);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Declare) {
				{
				setState(584);
				((FunctionDeclarationContext)_localctx).dec = match(Declare);
				}
			}

			setState(587);
			((FunctionDeclarationContext)_localctx).fun = match(Function_);
			setState(588);
			((FunctionDeclarationContext)_localctx).id = identifier();
			setState(589);
			match(OpenParen);
			setState(591);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (((((_la - 90)) & ~0x3f) == 0 && ((1L << (_la - 90)) & ((1L << (In - 90)) | (1L << (Of - 90)) | (1L << (ElseIf - 90)) | (1L << (Function_ - 90)) | (1L << (Delete - 90)) | (1L << (NumberOf - 90)) | (1L << (IndexOf - 90)) | (1L << (Sub - 90)) | (1L << (InstanceOf - 90)) | (1L << (Identifier - 90)))) != 0)) {
				{
				setState(590);
				((FunctionDeclarationContext)_localctx).pl = formalParameterList();
				}
			}

			setState(593);
			match(CloseParen);
			setState(594);
			((FunctionDeclarationContext)_localctx).stmt = functionBody();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FunctionDeclarationExprContext extends ParserRuleContext {
		public Token fun;
		public IdentifierContext id;
		public FormalParameterListContext pl;
		public FunctionBodyContext stmt;
		public TerminalNode OpenParen() { return getToken(SintesisParser.OpenParen, 0); }
		public TerminalNode CloseParen() { return getToken(SintesisParser.CloseParen, 0); }
		public TerminalNode Function_() { return getToken(SintesisParser.Function_, 0); }
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public FunctionBodyContext functionBody() {
			return getRuleContext(FunctionBodyContext.class,0);
		}
		public FormalParameterListContext formalParameterList() {
			return getRuleContext(FormalParameterListContext.class,0);
		}
		public FunctionDeclarationExprContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_functionDeclarationExpr; }
	}

	public final FunctionDeclarationExprContext functionDeclarationExpr() throws RecognitionException {
		FunctionDeclarationExprContext _localctx = new FunctionDeclarationExprContext(_ctx, getState());
		enterRule(_localctx, 76, RULE_functionDeclarationExpr);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(596);
			((FunctionDeclarationExprContext)_localctx).fun = match(Function_);
			setState(597);
			((FunctionDeclarationExprContext)_localctx).id = identifier();
			setState(598);
			match(OpenParen);
			setState(600);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (((((_la - 90)) & ~0x3f) == 0 && ((1L << (_la - 90)) & ((1L << (In - 90)) | (1L << (Of - 90)) | (1L << (ElseIf - 90)) | (1L << (Function_ - 90)) | (1L << (Delete - 90)) | (1L << (NumberOf - 90)) | (1L << (IndexOf - 90)) | (1L << (Sub - 90)) | (1L << (InstanceOf - 90)) | (1L << (Identifier - 90)))) != 0)) {
				{
				setState(599);
				((FunctionDeclarationExprContext)_localctx).pl = formalParameterList();
				}
			}

			setState(602);
			match(CloseParen);
			setState(603);
			((FunctionDeclarationExprContext)_localctx).stmt = functionBody();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ArgumentsContext extends ParserRuleContext {
		public TerminalNode OpenParen() { return getToken(SintesisParser.OpenParen, 0); }
		public TerminalNode CloseParen() { return getToken(SintesisParser.CloseParen, 0); }
		public List<SingleExpressionContext> singleExpression() {
			return getRuleContexts(SingleExpressionContext.class);
		}
		public SingleExpressionContext singleExpression(int i) {
			return getRuleContext(SingleExpressionContext.class,i);
		}
		public List<TerminalNode> Comma() { return getTokens(SintesisParser.Comma); }
		public TerminalNode Comma(int i) {
			return getToken(SintesisParser.Comma, i);
		}
		public ArgumentsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_arguments; }
	}

	public final ArgumentsContext arguments() throws RecognitionException {
		ArgumentsContext _localctx = new ArgumentsContext(_ctx, getState());
		enterRule(_localctx, 78, RULE_arguments);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(605);
			match(OpenParen);
			setState(614);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (((((_la - 8)) & ~0x3f) == 0 && ((1L << (_la - 8)) & ((1L << (RegularExpressionLiteral - 8)) | (1L << (JavascriptCode - 8)) | (1L << (OpenBracket - 8)) | (1L << (OpenParen - 8)) | (1L << (OpenBrace - 8)) | (1L << (PlusPlus - 8)) | (1L << (MinusMinus - 8)) | (1L << (Plus - 8)) | (1L << (Minus - 8)) | (1L << (BitNot - 8)) | (1L << (Not - 8)) | (1L << (PieceOfCode - 8)) | (1L << (NullLiteral - 8)) | (1L << (DecimalLiteral - 8)) | (1L << (HexIntegerLiteral - 8)) | (1L << (OctalIntegerLiteral - 8)) | (1L << (OctalIntegerLiteral2 - 8)) | (1L << (BinaryIntegerLiteral - 8)))) != 0) || ((((_la - 75)) & ~0x3f) == 0 && ((1L << (_la - 75)) & ((1L << (BooleanLiteral - 75)) | (1L << (In - 75)) | (1L << (Of - 75)) | (1L << (ElseIf - 75)) | (1L << (Declare - 75)) | (1L << (Function_ - 75)) | (1L << (Delete - 75)) | (1L << (NumberOf - 75)) | (1L << (IndexOf - 75)) | (1L << (Sub - 75)) | (1L << (Math - 75)) | (1L << (Random - 75)) | (1L << (Chr - 75)) | (1L << (Ord - 75)) | (1L << (Prompt - 75)) | (1L << (Convert - 75)) | (1L << (New_ - 75)) | (1L << (Attributes - 75)) | (1L << (Methods - 75)) | (1L << (Super - 75)) | (1L << (InstanceOf - 75)) | (1L << (Dictionary - 75)) | (1L << (Var_ - 75)) | (1L << (Const_ - 75)) | (1L << (Identifier - 75)) | (1L << (StringLiteral - 75)))) != 0)) {
				{
				setState(606);
				singleExpression(0);
				setState(611);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==Comma) {
					{
					{
					setState(607);
					match(Comma);
					setState(608);
					singleExpression(0);
					}
					}
					setState(613);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
			}

			setState(616);
			match(CloseParen);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class VisibilityContext extends ParserRuleContext {
		public TerminalNode Public() { return getToken(SintesisParser.Public, 0); }
		public TerminalNode Private() { return getToken(SintesisParser.Private, 0); }
		public TerminalNode Protected() { return getToken(SintesisParser.Protected, 0); }
		public VisibilityContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_visibility; }
	}

	public final VisibilityContext visibility() throws RecognitionException {
		VisibilityContext _localctx = new VisibilityContext(_ctx, getState());
		enterRule(_localctx, 80, RULE_visibility);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(618);
			_la = _input.LA(1);
			if ( !(((((_la - 126)) & ~0x3f) == 0 && ((1L << (_la - 126)) & ((1L << (Private - 126)) | (1L << (Public - 126)) | (1L << (Protected - 126)))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ClassDeclarationContext extends ParserRuleContext {
		public Token dec;
		public Token clas;
		public IdentifierContext id;
		public IdentifierContext ext;
		public AttributesListContext atrs;
		public Token mdec;
		public MethodsListContext methods;
		public List<TerminalNode> OpenBrace() { return getTokens(SintesisParser.OpenBrace); }
		public TerminalNode OpenBrace(int i) {
			return getToken(SintesisParser.OpenBrace, i);
		}
		public EosContext eos() {
			return getRuleContext(EosContext.class,0);
		}
		public List<TerminalNode> CloseBrace() { return getTokens(SintesisParser.CloseBrace); }
		public TerminalNode CloseBrace(int i) {
			return getToken(SintesisParser.CloseBrace, i);
		}
		public TerminalNode Class_() { return getToken(SintesisParser.Class_, 0); }
		public List<IdentifierContext> identifier() {
			return getRuleContexts(IdentifierContext.class);
		}
		public IdentifierContext identifier(int i) {
			return getRuleContext(IdentifierContext.class,i);
		}
		public TerminalNode Extends() { return getToken(SintesisParser.Extends, 0); }
		public TerminalNode Declare() { return getToken(SintesisParser.Declare, 0); }
		public TerminalNode Attributes() { return getToken(SintesisParser.Attributes, 0); }
		public List<TerminalNode> Colon() { return getTokens(SintesisParser.Colon); }
		public TerminalNode Colon(int i) {
			return getToken(SintesisParser.Colon, i);
		}
		public AttributesListContext attributesList() {
			return getRuleContext(AttributesListContext.class,0);
		}
		public MethodsListContext methodsList() {
			return getRuleContext(MethodsListContext.class,0);
		}
		public TerminalNode Methods() { return getToken(SintesisParser.Methods, 0); }
		public ClassDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_classDeclaration; }
	}

	public final ClassDeclarationContext classDeclaration() throws RecognitionException {
		ClassDeclarationContext _localctx = new ClassDeclarationContext(_ctx, getState());
		enterRule(_localctx, 82, RULE_classDeclaration);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(621);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Declare) {
				{
				setState(620);
				((ClassDeclarationContext)_localctx).dec = match(Declare);
				}
			}

			setState(623);
			((ClassDeclarationContext)_localctx).clas = match(Class_);
			setState(624);
			((ClassDeclarationContext)_localctx).id = identifier();
			setState(627);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Extends) {
				{
				setState(625);
				match(Extends);
				setState(626);
				((ClassDeclarationContext)_localctx).ext = identifier();
				}
			}

			setState(629);
			match(OpenBrace);
			setState(641);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,63,_ctx) ) {
			case 1:
				{
				setState(632);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==Attributes) {
					{
					setState(630);
					match(Attributes);
					setState(631);
					match(Colon);
					}
				}

				setState(639);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case OpenBrace:
					{
					setState(634);
					match(OpenBrace);
					setState(635);
					((ClassDeclarationContext)_localctx).atrs = attributesList();
					setState(636);
					match(CloseBrace);
					}
					break;
				case In:
				case Of:
				case ElseIf:
				case Function_:
				case Delete:
				case NumberOf:
				case IndexOf:
				case Sub:
				case InstanceOf:
				case Private:
				case Public:
				case Protected:
				case Identifier:
					{
					setState(638);
					((ClassDeclarationContext)_localctx).atrs = attributesList();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
			}
			setState(643);
			eos();
			setState(655);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==OpenBrace || ((((_la - 99)) & ~0x3f) == 0 && ((1L << (_la - 99)) & ((1L << (Function_ - 99)) | (1L << (Methods - 99)) | (1L << (Method - 99)) | (1L << (Constructor - 99)) | (1L << (Private - 99)) | (1L << (Public - 99)) | (1L << (Protected - 99)) | (1L << (Identifier - 99)))) != 0)) {
				{
				setState(646);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==Methods) {
					{
					setState(644);
					((ClassDeclarationContext)_localctx).mdec = match(Methods);
					setState(645);
					match(Colon);
					}
				}

				setState(653);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case Function_:
				case Method:
				case Constructor:
				case Private:
				case Public:
				case Protected:
				case Identifier:
					{
					setState(648);
					((ClassDeclarationContext)_localctx).methods = methodsList();
					}
					break;
				case OpenBrace:
					{
					setState(649);
					match(OpenBrace);
					setState(650);
					((ClassDeclarationContext)_localctx).methods = methodsList();
					setState(651);
					match(CloseBrace);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
			}

			setState(657);
			match(CloseBrace);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class AttributesListContext extends ParserRuleContext {
		public List<ClassAttributeDeclContext> classAttributeDecl() {
			return getRuleContexts(ClassAttributeDeclContext.class);
		}
		public ClassAttributeDeclContext classAttributeDecl(int i) {
			return getRuleContext(ClassAttributeDeclContext.class,i);
		}
		public AttributesListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_attributesList; }
	}

	public final AttributesListContext attributesList() throws RecognitionException {
		AttributesListContext _localctx = new AttributesListContext(_ctx, getState());
		enterRule(_localctx, 84, RULE_attributesList);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(660); 
			_errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					setState(659);
					classAttributeDecl();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(662); 
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,67,_ctx);
			} while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ClassAttributeDeclContext extends ParserRuleContext {
		public VisibilityContext vis;
		public List<VariableDeclarationContext> variableDeclaration() {
			return getRuleContexts(VariableDeclarationContext.class);
		}
		public VariableDeclarationContext variableDeclaration(int i) {
			return getRuleContext(VariableDeclarationContext.class,i);
		}
		public List<TerminalNode> Comma() { return getTokens(SintesisParser.Comma); }
		public TerminalNode Comma(int i) {
			return getToken(SintesisParser.Comma, i);
		}
		public VisibilityContext visibility() {
			return getRuleContext(VisibilityContext.class,0);
		}
		public ClassAttributeDeclContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_classAttributeDecl; }
	}

	public final ClassAttributeDeclContext classAttributeDecl() throws RecognitionException {
		ClassAttributeDeclContext _localctx = new ClassAttributeDeclContext(_ctx, getState());
		enterRule(_localctx, 86, RULE_classAttributeDecl);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(665);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (((((_la - 126)) & ~0x3f) == 0 && ((1L << (_la - 126)) & ((1L << (Private - 126)) | (1L << (Public - 126)) | (1L << (Protected - 126)))) != 0)) {
				{
				setState(664);
				((ClassAttributeDeclContext)_localctx).vis = visibility();
				}
			}

			setState(667);
			variableDeclaration();
			setState(672);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,69,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(668);
					match(Comma);
					setState(669);
					variableDeclaration();
					}
					} 
				}
				setState(674);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,69,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class MethodDeclarationContext extends ParserRuleContext {
		public VisibilityContext vis;
		public Token mname;
		public MethodNameContext id;
		public FormalParameterListContext pl;
		public FunctionBodyContext stmt;
		public TerminalNode OpenParen() { return getToken(SintesisParser.OpenParen, 0); }
		public TerminalNode CloseParen() { return getToken(SintesisParser.CloseParen, 0); }
		public MethodNameContext methodName() {
			return getRuleContext(MethodNameContext.class,0);
		}
		public FunctionBodyContext functionBody() {
			return getRuleContext(FunctionBodyContext.class,0);
		}
		public VisibilityContext visibility() {
			return getRuleContext(VisibilityContext.class,0);
		}
		public FormalParameterListContext formalParameterList() {
			return getRuleContext(FormalParameterListContext.class,0);
		}
		public TerminalNode Method() { return getToken(SintesisParser.Method, 0); }
		public TerminalNode Function_() { return getToken(SintesisParser.Function_, 0); }
		public MethodDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_methodDeclaration; }
	}

	public final MethodDeclarationContext methodDeclaration() throws RecognitionException {
		MethodDeclarationContext _localctx = new MethodDeclarationContext(_ctx, getState());
		enterRule(_localctx, 88, RULE_methodDeclaration);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(676);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (((((_la - 126)) & ~0x3f) == 0 && ((1L << (_la - 126)) & ((1L << (Private - 126)) | (1L << (Public - 126)) | (1L << (Protected - 126)))) != 0)) {
				{
				setState(675);
				((MethodDeclarationContext)_localctx).vis = visibility();
				}
			}

			setState(679);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Function_ || _la==Method) {
				{
				setState(678);
				((MethodDeclarationContext)_localctx).mname = _input.LT(1);
				_la = _input.LA(1);
				if ( !(_la==Function_ || _la==Method) ) {
					((MethodDeclarationContext)_localctx).mname = (Token)_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
			}

			setState(681);
			((MethodDeclarationContext)_localctx).id = methodName();
			setState(682);
			match(OpenParen);
			setState(684);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (((((_la - 90)) & ~0x3f) == 0 && ((1L << (_la - 90)) & ((1L << (In - 90)) | (1L << (Of - 90)) | (1L << (ElseIf - 90)) | (1L << (Function_ - 90)) | (1L << (Delete - 90)) | (1L << (NumberOf - 90)) | (1L << (IndexOf - 90)) | (1L << (Sub - 90)) | (1L << (InstanceOf - 90)) | (1L << (Identifier - 90)))) != 0)) {
				{
				setState(683);
				((MethodDeclarationContext)_localctx).pl = formalParameterList();
				}
			}

			setState(686);
			match(CloseParen);
			setState(687);
			((MethodDeclarationContext)_localctx).stmt = functionBody();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class MethodNameContext extends ParserRuleContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public TerminalNode Constructor() { return getToken(SintesisParser.Constructor, 0); }
		public MethodNameContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_methodName; }
	}

	public final MethodNameContext methodName() throws RecognitionException {
		MethodNameContext _localctx = new MethodNameContext(_ctx, getState());
		enterRule(_localctx, 90, RULE_methodName);
		try {
			setState(691);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case Identifier:
				enterOuterAlt(_localctx, 1);
				{
				setState(689);
				identifier();
				}
				break;
			case Constructor:
				enterOuterAlt(_localctx, 2);
				{
				setState(690);
				match(Constructor);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class MethodsListContext extends ParserRuleContext {
		public List<MethodDeclarationContext> methodDeclaration() {
			return getRuleContexts(MethodDeclarationContext.class);
		}
		public MethodDeclarationContext methodDeclaration(int i) {
			return getRuleContext(MethodDeclarationContext.class,i);
		}
		public MethodsListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_methodsList; }
	}

	public final MethodsListContext methodsList() throws RecognitionException {
		MethodsListContext _localctx = new MethodsListContext(_ctx, getState());
		enterRule(_localctx, 92, RULE_methodsList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(694); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(693);
				methodDeclaration();
				}
				}
				setState(696); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( ((((_la - 99)) & ~0x3f) == 0 && ((1L << (_la - 99)) & ((1L << (Function_ - 99)) | (1L << (Method - 99)) | (1L << (Constructor - 99)) | (1L << (Private - 99)) | (1L << (Public - 99)) | (1L << (Protected - 99)) | (1L << (Identifier - 99)))) != 0) );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ClassExpContext extends ParserRuleContext {
		public ArgumentsContext args;
		public TerminalNode New_() { return getToken(SintesisParser.New_, 0); }
		public TerminalNode Identifier() { return getToken(SintesisParser.Identifier, 0); }
		public ArgumentsContext arguments() {
			return getRuleContext(ArgumentsContext.class,0);
		}
		public TerminalNode Instance() { return getToken(SintesisParser.Instance, 0); }
		public TerminalNode Of() { return getToken(SintesisParser.Of, 0); }
		public TerminalNode Class_() { return getToken(SintesisParser.Class_, 0); }
		public ClassExpContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_classExp; }
	}

	public final ClassExpContext classExp() throws RecognitionException {
		ClassExpContext _localctx = new ClassExpContext(_ctx, getState());
		enterRule(_localctx, 94, RULE_classExp);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(698);
			match(New_);
			setState(700);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Instance) {
				{
				setState(699);
				match(Instance);
				}
			}

			setState(706);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Of) {
				{
				setState(702);
				match(Of);
				setState(704);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==Class_) {
					{
					setState(703);
					match(Class_);
					}
				}

				}
			}

			setState(708);
			match(Identifier);
			setState(709);
			((ClassExpContext)_localctx).args = arguments();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ListIndexContext extends ParserRuleContext {
		public TerminalNode OpenBracket() { return getToken(SintesisParser.OpenBracket, 0); }
		public TerminalNode CloseBracket() { return getToken(SintesisParser.CloseBracket, 0); }
		public SingleExpressionContext singleExpression() {
			return getRuleContext(SingleExpressionContext.class,0);
		}
		public ListIndexContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_listIndex; }
	}

	public final ListIndexContext listIndex() throws RecognitionException {
		ListIndexContext _localctx = new ListIndexContext(_ctx, getState());
		enterRule(_localctx, 96, RULE_listIndex);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(711);
			match(OpenBracket);
			setState(713);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (((((_la - 8)) & ~0x3f) == 0 && ((1L << (_la - 8)) & ((1L << (RegularExpressionLiteral - 8)) | (1L << (JavascriptCode - 8)) | (1L << (OpenBracket - 8)) | (1L << (OpenParen - 8)) | (1L << (OpenBrace - 8)) | (1L << (PlusPlus - 8)) | (1L << (MinusMinus - 8)) | (1L << (Plus - 8)) | (1L << (Minus - 8)) | (1L << (BitNot - 8)) | (1L << (Not - 8)) | (1L << (PieceOfCode - 8)) | (1L << (NullLiteral - 8)) | (1L << (DecimalLiteral - 8)) | (1L << (HexIntegerLiteral - 8)) | (1L << (OctalIntegerLiteral - 8)) | (1L << (OctalIntegerLiteral2 - 8)) | (1L << (BinaryIntegerLiteral - 8)))) != 0) || ((((_la - 75)) & ~0x3f) == 0 && ((1L << (_la - 75)) & ((1L << (BooleanLiteral - 75)) | (1L << (In - 75)) | (1L << (Of - 75)) | (1L << (ElseIf - 75)) | (1L << (Declare - 75)) | (1L << (Function_ - 75)) | (1L << (Delete - 75)) | (1L << (NumberOf - 75)) | (1L << (IndexOf - 75)) | (1L << (Sub - 75)) | (1L << (Math - 75)) | (1L << (Random - 75)) | (1L << (Chr - 75)) | (1L << (Ord - 75)) | (1L << (Prompt - 75)) | (1L << (Convert - 75)) | (1L << (New_ - 75)) | (1L << (Attributes - 75)) | (1L << (Methods - 75)) | (1L << (Super - 75)) | (1L << (InstanceOf - 75)) | (1L << (Dictionary - 75)) | (1L << (Var_ - 75)) | (1L << (Const_ - 75)) | (1L << (Identifier - 75)) | (1L << (StringLiteral - 75)))) != 0)) {
				{
				setState(712);
				singleExpression(0);
				}
			}

			setState(715);
			match(CloseBracket);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ListIndexesContext extends ParserRuleContext {
		public List<ListIndexContext> listIndex() {
			return getRuleContexts(ListIndexContext.class);
		}
		public ListIndexContext listIndex(int i) {
			return getRuleContext(ListIndexContext.class,i);
		}
		public ListIndexesContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_listIndexes; }
	}

	public final ListIndexesContext listIndexes() throws RecognitionException {
		ListIndexesContext _localctx = new ListIndexesContext(_ctx, getState());
		enterRule(_localctx, 98, RULE_listIndexes);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(718); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(717);
				listIndex();
				}
				}
				setState(720); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( _la==OpenBracket );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FormalParameterArgContext extends ParserRuleContext {
		public SingleExpressionContext exp;
		public IdentifierExtContext identifierExt() {
			return getRuleContext(IdentifierExtContext.class,0);
		}
		public TerminalNode Assign() { return getToken(SintesisParser.Assign, 0); }
		public SingleExpressionContext singleExpression() {
			return getRuleContext(SingleExpressionContext.class,0);
		}
		public FormalParameterArgContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_formalParameterArg; }
	}

	public final FormalParameterArgContext formalParameterArg() throws RecognitionException {
		FormalParameterArgContext _localctx = new FormalParameterArgContext(_ctx, getState());
		enterRule(_localctx, 100, RULE_formalParameterArg);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(722);
			identifierExt();
			setState(725);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Assign) {
				{
				setState(723);
				match(Assign);
				setState(724);
				((FormalParameterArgContext)_localctx).exp = singleExpression(0);
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class VariableStatementContext extends ParserRuleContext {
		public VariableDeclarationListContext variableDeclarationList() {
			return getRuleContext(VariableDeclarationListContext.class,0);
		}
		public EosContext eos() {
			return getRuleContext(EosContext.class,0);
		}
		public VariableStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_variableStatement; }
	}

	public final VariableStatementContext variableStatement() throws RecognitionException {
		VariableStatementContext _localctx = new VariableStatementContext(_ctx, getState());
		enterRule(_localctx, 102, RULE_variableStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(727);
			variableDeclarationList();
			setState(728);
			eos();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ReservedIdentifierContext extends ParserRuleContext {
		public TerminalNode Delete() { return getToken(SintesisParser.Delete, 0); }
		public TerminalNode In() { return getToken(SintesisParser.In, 0); }
		public TerminalNode InstanceOf() { return getToken(SintesisParser.InstanceOf, 0); }
		public TerminalNode NumberOf() { return getToken(SintesisParser.NumberOf, 0); }
		public TerminalNode IndexOf() { return getToken(SintesisParser.IndexOf, 0); }
		public TerminalNode Sub() { return getToken(SintesisParser.Sub, 0); }
		public TerminalNode ElseIf() { return getToken(SintesisParser.ElseIf, 0); }
		public TerminalNode Of() { return getToken(SintesisParser.Of, 0); }
		public TerminalNode Function_() { return getToken(SintesisParser.Function_, 0); }
		public ReservedIdentifierContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_reservedIdentifier; }
	}

	public final ReservedIdentifierContext reservedIdentifier() throws RecognitionException {
		ReservedIdentifierContext _localctx = new ReservedIdentifierContext(_ctx, getState());
		enterRule(_localctx, 104, RULE_reservedIdentifier);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(730);
			_la = _input.LA(1);
			if ( !(((((_la - 90)) & ~0x3f) == 0 && ((1L << (_la - 90)) & ((1L << (In - 90)) | (1L << (Of - 90)) | (1L << (ElseIf - 90)) | (1L << (Function_ - 90)) | (1L << (Delete - 90)) | (1L << (NumberOf - 90)) | (1L << (IndexOf - 90)) | (1L << (Sub - 90)) | (1L << (InstanceOf - 90)))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class VariableDeclarationContext extends ParserRuleContext {
		public SingleExpressionContext exp;
		public IdentifierExtContext identifierExt() {
			return getRuleContext(IdentifierExtContext.class,0);
		}
		public TerminalNode Assign() { return getToken(SintesisParser.Assign, 0); }
		public SingleExpressionContext singleExpression() {
			return getRuleContext(SingleExpressionContext.class,0);
		}
		public VariableDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_variableDeclaration; }
	}

	public final VariableDeclarationContext variableDeclaration() throws RecognitionException {
		VariableDeclarationContext _localctx = new VariableDeclarationContext(_ctx, getState());
		enterRule(_localctx, 106, RULE_variableDeclaration);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(732);
			identifierExt();
			setState(735);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,81,_ctx) ) {
			case 1:
				{
				setState(733);
				match(Assign);
				setState(734);
				((VariableDeclarationContext)_localctx).exp = singleExpression(0);
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class VariableDeclarationListContext extends ParserRuleContext {
		public VarModifierContext varModifier() {
			return getRuleContext(VarModifierContext.class,0);
		}
		public List<VariableDeclarationContext> variableDeclaration() {
			return getRuleContexts(VariableDeclarationContext.class);
		}
		public VariableDeclarationContext variableDeclaration(int i) {
			return getRuleContext(VariableDeclarationContext.class,i);
		}
		public List<TerminalNode> Comma() { return getTokens(SintesisParser.Comma); }
		public TerminalNode Comma(int i) {
			return getToken(SintesisParser.Comma, i);
		}
		public VariableDeclarationListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_variableDeclarationList; }
	}

	public final VariableDeclarationListContext variableDeclarationList() throws RecognitionException {
		VariableDeclarationListContext _localctx = new VariableDeclarationListContext(_ctx, getState());
		enterRule(_localctx, 108, RULE_variableDeclarationList);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(737);
			varModifier();
			setState(738);
			variableDeclaration();
			setState(743);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,82,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(739);
					match(Comma);
					setState(740);
					variableDeclaration();
					}
					} 
				}
				setState(745);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,82,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class VarModifierContext extends ParserRuleContext {
		public TerminalNode Declare() { return getToken(SintesisParser.Declare, 0); }
		public TerminalNode Var_() { return getToken(SintesisParser.Var_, 0); }
		public TerminalNode Const_() { return getToken(SintesisParser.Const_, 0); }
		public VarModifierContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_varModifier; }
	}

	public final VarModifierContext varModifier() throws RecognitionException {
		VarModifierContext _localctx = new VarModifierContext(_ctx, getState());
		enterRule(_localctx, 110, RULE_varModifier);
		try {
			setState(753);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,83,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(746);
				match(Declare);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(747);
				match(Declare);
				setState(748);
				match(Var_);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(749);
				match(Declare);
				setState(750);
				match(Const_);
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(751);
				match(Var_);
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(752);
				match(Const_);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FunctionBodyContext extends ParserRuleContext {
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public StatementContext statement() {
			return getRuleContext(StatementContext.class,0);
		}
		public FunctionBodyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_functionBody; }
	}

	public final FunctionBodyContext functionBody() throws RecognitionException {
		FunctionBodyContext _localctx = new FunctionBodyContext(_ctx, getState());
		enterRule(_localctx, 112, RULE_functionBody);
		try {
			setState(757);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,84,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(755);
				block();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(756);
				statement();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class AnonymousFunctionContext extends ParserRuleContext {
		public AnonymousFunctionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_anonymousFunction; }
	 
		public AnonymousFunctionContext() { }
		public void copyFrom(AnonymousFunctionContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class AnonymousFunctionDeclContext extends AnonymousFunctionContext {
		public Token fun;
		public FormalParameterListContext pl;
		public FunctionBodyContext stmt;
		public TerminalNode OpenParen() { return getToken(SintesisParser.OpenParen, 0); }
		public TerminalNode CloseParen() { return getToken(SintesisParser.CloseParen, 0); }
		public TerminalNode Function_() { return getToken(SintesisParser.Function_, 0); }
		public FunctionBodyContext functionBody() {
			return getRuleContext(FunctionBodyContext.class,0);
		}
		public FormalParameterListContext formalParameterList() {
			return getRuleContext(FormalParameterListContext.class,0);
		}
		public AnonymousFunctionDeclContext(AnonymousFunctionContext ctx) { copyFrom(ctx); }
	}
	public static class ArrowFunctionContext extends AnonymousFunctionContext {
		public ArrowFunctionParametersContext pl;
		public ArrowFunctionBodyContext stmt;
		public TerminalNode ARROW() { return getToken(SintesisParser.ARROW, 0); }
		public ArrowFunctionParametersContext arrowFunctionParameters() {
			return getRuleContext(ArrowFunctionParametersContext.class,0);
		}
		public ArrowFunctionBodyContext arrowFunctionBody() {
			return getRuleContext(ArrowFunctionBodyContext.class,0);
		}
		public ArrowFunctionContext(AnonymousFunctionContext ctx) { copyFrom(ctx); }
	}

	public final AnonymousFunctionContext anonymousFunction() throws RecognitionException {
		AnonymousFunctionContext _localctx = new AnonymousFunctionContext(_ctx, getState());
		enterRule(_localctx, 114, RULE_anonymousFunction);
		int _la;
		try {
			setState(770);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,86,_ctx) ) {
			case 1:
				_localctx = new AnonymousFunctionDeclContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(759);
				((AnonymousFunctionDeclContext)_localctx).fun = match(Function_);
				setState(760);
				match(OpenParen);
				setState(762);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (((((_la - 90)) & ~0x3f) == 0 && ((1L << (_la - 90)) & ((1L << (In - 90)) | (1L << (Of - 90)) | (1L << (ElseIf - 90)) | (1L << (Function_ - 90)) | (1L << (Delete - 90)) | (1L << (NumberOf - 90)) | (1L << (IndexOf - 90)) | (1L << (Sub - 90)) | (1L << (InstanceOf - 90)) | (1L << (Identifier - 90)))) != 0)) {
					{
					setState(761);
					((AnonymousFunctionDeclContext)_localctx).pl = formalParameterList();
					}
				}

				setState(764);
				match(CloseParen);
				setState(765);
				((AnonymousFunctionDeclContext)_localctx).stmt = functionBody();
				}
				break;
			case 2:
				_localctx = new ArrowFunctionContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(766);
				((ArrowFunctionContext)_localctx).pl = arrowFunctionParameters();
				setState(767);
				match(ARROW);
				setState(768);
				((ArrowFunctionContext)_localctx).stmt = arrowFunctionBody();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ArrowFunctionParametersContext extends ParserRuleContext {
		public IdentifierExtContext identifierExt() {
			return getRuleContext(IdentifierExtContext.class,0);
		}
		public TerminalNode OpenParen() { return getToken(SintesisParser.OpenParen, 0); }
		public TerminalNode CloseParen() { return getToken(SintesisParser.CloseParen, 0); }
		public FormalParameterListContext formalParameterList() {
			return getRuleContext(FormalParameterListContext.class,0);
		}
		public ArrowFunctionParametersContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_arrowFunctionParameters; }
	}

	public final ArrowFunctionParametersContext arrowFunctionParameters() throws RecognitionException {
		ArrowFunctionParametersContext _localctx = new ArrowFunctionParametersContext(_ctx, getState());
		enterRule(_localctx, 116, RULE_arrowFunctionParameters);
		int _la;
		try {
			setState(778);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case In:
			case Of:
			case ElseIf:
			case Function_:
			case Delete:
			case NumberOf:
			case IndexOf:
			case Sub:
			case InstanceOf:
			case Identifier:
				enterOuterAlt(_localctx, 1);
				{
				setState(772);
				identifierExt();
				}
				break;
			case OpenParen:
				enterOuterAlt(_localctx, 2);
				{
				setState(773);
				match(OpenParen);
				setState(775);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (((((_la - 90)) & ~0x3f) == 0 && ((1L << (_la - 90)) & ((1L << (In - 90)) | (1L << (Of - 90)) | (1L << (ElseIf - 90)) | (1L << (Function_ - 90)) | (1L << (Delete - 90)) | (1L << (NumberOf - 90)) | (1L << (IndexOf - 90)) | (1L << (Sub - 90)) | (1L << (InstanceOf - 90)) | (1L << (Identifier - 90)))) != 0)) {
					{
					setState(774);
					formalParameterList();
					}
				}

				setState(777);
				match(CloseParen);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ArrowFunctionBodyContext extends ParserRuleContext {
		public SingleExpressionContext singleExpression() {
			return getRuleContext(SingleExpressionContext.class,0);
		}
		public FunctionBodyContext functionBody() {
			return getRuleContext(FunctionBodyContext.class,0);
		}
		public ArrowFunctionBodyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_arrowFunctionBody; }
	}

	public final ArrowFunctionBodyContext arrowFunctionBody() throws RecognitionException {
		ArrowFunctionBodyContext _localctx = new ArrowFunctionBodyContext(_ctx, getState());
		enterRule(_localctx, 118, RULE_arrowFunctionBody);
		try {
			setState(782);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,89,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(780);
				singleExpression(0);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(781);
				functionBody();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class AssignmentOperatorContext extends ParserRuleContext {
		public TerminalNode MultiplyAssign() { return getToken(SintesisParser.MultiplyAssign, 0); }
		public TerminalNode DivideAssign() { return getToken(SintesisParser.DivideAssign, 0); }
		public TerminalNode ModulusAssign() { return getToken(SintesisParser.ModulusAssign, 0); }
		public TerminalNode PlusAssign() { return getToken(SintesisParser.PlusAssign, 0); }
		public TerminalNode MinusAssign() { return getToken(SintesisParser.MinusAssign, 0); }
		public TerminalNode LeftShiftArithmeticAssign() { return getToken(SintesisParser.LeftShiftArithmeticAssign, 0); }
		public TerminalNode RightShiftArithmeticAssign() { return getToken(SintesisParser.RightShiftArithmeticAssign, 0); }
		public TerminalNode RightShiftLogicalAssign() { return getToken(SintesisParser.RightShiftLogicalAssign, 0); }
		public TerminalNode BitAndAssign() { return getToken(SintesisParser.BitAndAssign, 0); }
		public TerminalNode BitXorAssign() { return getToken(SintesisParser.BitXorAssign, 0); }
		public TerminalNode BitOrAssign() { return getToken(SintesisParser.BitOrAssign, 0); }
		public TerminalNode PowerAssign() { return getToken(SintesisParser.PowerAssign, 0); }
		public AssignmentOperatorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_assignmentOperator; }
	}

	public final AssignmentOperatorContext assignmentOperator() throws RecognitionException {
		AssignmentOperatorContext _localctx = new AssignmentOperatorContext(_ctx, getState());
		enterRule(_localctx, 120, RULE_assignmentOperator);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(784);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << MultiplyAssign) | (1L << DivideAssign) | (1L << ModulusAssign) | (1L << PlusAssign) | (1L << MinusAssign) | (1L << LeftShiftArithmeticAssign) | (1L << RightShiftArithmeticAssign) | (1L << RightShiftLogicalAssign) | (1L << BitAndAssign) | (1L << BitXorAssign) | (1L << BitOrAssign) | (1L << PowerAssign))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ReservedWordContext extends ParserRuleContext {
		public SafeKeywordContext safeKeyword() {
			return getRuleContext(SafeKeywordContext.class,0);
		}
		public TerminalNode NullLiteral() { return getToken(SintesisParser.NullLiteral, 0); }
		public TerminalNode BooleanLiteral() { return getToken(SintesisParser.BooleanLiteral, 0); }
		public ReservedWordContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_reservedWord; }
	}

	public final ReservedWordContext reservedWord() throws RecognitionException {
		ReservedWordContext _localctx = new ReservedWordContext(_ctx, getState());
		enterRule(_localctx, 122, RULE_reservedWord);
		try {
			setState(789);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case Print:
			case While:
			case Repeat:
			case Times:
			case Do:
			case Continue:
			case Break:
			case Switch:
			case Case:
			case Default:
			case Each:
			case For:
			case In:
			case Of:
			case If:
			case ElseIf:
			case Else:
			case Return:
			case InstanceOf:
				enterOuterAlt(_localctx, 1);
				{
				setState(786);
				safeKeyword();
				}
				break;
			case NullLiteral:
				enterOuterAlt(_localctx, 2);
				{
				setState(787);
				match(NullLiteral);
				}
				break;
			case BooleanLiteral:
				enterOuterAlt(_localctx, 3);
				{
				setState(788);
				match(BooleanLiteral);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ListDeclarationContext extends ParserRuleContext {
		public ListLiteralContext exp;
		public TerminalNode New_() { return getToken(SintesisParser.New_, 0); }
		public TerminalNode List() { return getToken(SintesisParser.List, 0); }
		public TerminalNode OpenParen() { return getToken(SintesisParser.OpenParen, 0); }
		public TerminalNode CloseParen() { return getToken(SintesisParser.CloseParen, 0); }
		public ListLiteralContext listLiteral() {
			return getRuleContext(ListLiteralContext.class,0);
		}
		public ListDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_listDeclaration; }
	}

	public final ListDeclarationContext listDeclaration() throws RecognitionException {
		ListDeclarationContext _localctx = new ListDeclarationContext(_ctx, getState());
		enterRule(_localctx, 124, RULE_listDeclaration);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(791);
			match(New_);
			setState(792);
			match(List);
			setState(793);
			match(OpenParen);
			setState(795);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==OpenBracket) {
				{
				setState(794);
				((ListDeclarationContext)_localctx).exp = listLiteral();
				}
			}

			setState(797);
			match(CloseParen);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ListLiteralContext extends ParserRuleContext {
		public TerminalNode OpenBracket() { return getToken(SintesisParser.OpenBracket, 0); }
		public TerminalNode CloseBracket() { return getToken(SintesisParser.CloseBracket, 0); }
		public List<SingleExpressionContext> singleExpression() {
			return getRuleContexts(SingleExpressionContext.class);
		}
		public SingleExpressionContext singleExpression(int i) {
			return getRuleContext(SingleExpressionContext.class,i);
		}
		public List<TerminalNode> Comma() { return getTokens(SintesisParser.Comma); }
		public TerminalNode Comma(int i) {
			return getToken(SintesisParser.Comma, i);
		}
		public ListLiteralContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_listLiteral; }
	}

	public final ListLiteralContext listLiteral() throws RecognitionException {
		ListLiteralContext _localctx = new ListLiteralContext(_ctx, getState());
		enterRule(_localctx, 126, RULE_listLiteral);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(799);
			match(OpenBracket);
			setState(808);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (((((_la - 8)) & ~0x3f) == 0 && ((1L << (_la - 8)) & ((1L << (RegularExpressionLiteral - 8)) | (1L << (JavascriptCode - 8)) | (1L << (OpenBracket - 8)) | (1L << (OpenParen - 8)) | (1L << (OpenBrace - 8)) | (1L << (PlusPlus - 8)) | (1L << (MinusMinus - 8)) | (1L << (Plus - 8)) | (1L << (Minus - 8)) | (1L << (BitNot - 8)) | (1L << (Not - 8)) | (1L << (PieceOfCode - 8)) | (1L << (NullLiteral - 8)) | (1L << (DecimalLiteral - 8)) | (1L << (HexIntegerLiteral - 8)) | (1L << (OctalIntegerLiteral - 8)) | (1L << (OctalIntegerLiteral2 - 8)) | (1L << (BinaryIntegerLiteral - 8)))) != 0) || ((((_la - 75)) & ~0x3f) == 0 && ((1L << (_la - 75)) & ((1L << (BooleanLiteral - 75)) | (1L << (In - 75)) | (1L << (Of - 75)) | (1L << (ElseIf - 75)) | (1L << (Declare - 75)) | (1L << (Function_ - 75)) | (1L << (Delete - 75)) | (1L << (NumberOf - 75)) | (1L << (IndexOf - 75)) | (1L << (Sub - 75)) | (1L << (Math - 75)) | (1L << (Random - 75)) | (1L << (Chr - 75)) | (1L << (Ord - 75)) | (1L << (Prompt - 75)) | (1L << (Convert - 75)) | (1L << (New_ - 75)) | (1L << (Attributes - 75)) | (1L << (Methods - 75)) | (1L << (Super - 75)) | (1L << (InstanceOf - 75)) | (1L << (Dictionary - 75)) | (1L << (Var_ - 75)) | (1L << (Const_ - 75)) | (1L << (Identifier - 75)) | (1L << (StringLiteral - 75)))) != 0)) {
				{
				setState(800);
				singleExpression(0);
				setState(805);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==Comma) {
					{
					{
					setState(801);
					match(Comma);
					setState(802);
					singleExpression(0);
					}
					}
					setState(807);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
			}

			setState(810);
			match(CloseBracket);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ObjectKeyContext extends ParserRuleContext {
		public IdentifierExtContext identifierExt() {
			return getRuleContext(IdentifierExtContext.class,0);
		}
		public ReservedIdentifierContext reservedIdentifier() {
			return getRuleContext(ReservedIdentifierContext.class,0);
		}
		public StringLiteralContext stringLiteral() {
			return getRuleContext(StringLiteralContext.class,0);
		}
		public NumericLiteralContext numericLiteral() {
			return getRuleContext(NumericLiteralContext.class,0);
		}
		public BooleanLiteralContext booleanLiteral() {
			return getRuleContext(BooleanLiteralContext.class,0);
		}
		public ObjectKeyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_objectKey; }
	}

	public final ObjectKeyContext objectKey() throws RecognitionException {
		ObjectKeyContext _localctx = new ObjectKeyContext(_ctx, getState());
		enterRule(_localctx, 128, RULE_objectKey);
		try {
			setState(817);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,94,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(812);
				identifierExt();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(813);
				reservedIdentifier();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(814);
				stringLiteral();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(815);
				numericLiteral();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(816);
				booleanLiteral();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ObjectLiteralContext extends ParserRuleContext {
		public TerminalNode OpenBrace() { return getToken(SintesisParser.OpenBrace, 0); }
		public TerminalNode CloseBrace() { return getToken(SintesisParser.CloseBrace, 0); }
		public List<ObjectKeyContext> objectKey() {
			return getRuleContexts(ObjectKeyContext.class);
		}
		public ObjectKeyContext objectKey(int i) {
			return getRuleContext(ObjectKeyContext.class,i);
		}
		public List<TerminalNode> Colon() { return getTokens(SintesisParser.Colon); }
		public TerminalNode Colon(int i) {
			return getToken(SintesisParser.Colon, i);
		}
		public List<SingleExpressionContext> singleExpression() {
			return getRuleContexts(SingleExpressionContext.class);
		}
		public SingleExpressionContext singleExpression(int i) {
			return getRuleContext(SingleExpressionContext.class,i);
		}
		public List<TerminalNode> Comma() { return getTokens(SintesisParser.Comma); }
		public TerminalNode Comma(int i) {
			return getToken(SintesisParser.Comma, i);
		}
		public ObjectLiteralContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_objectLiteral; }
	}

	public final ObjectLiteralContext objectLiteral() throws RecognitionException {
		ObjectLiteralContext _localctx = new ObjectLiteralContext(_ctx, getState());
		enterRule(_localctx, 130, RULE_objectLiteral);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(819);
			match(OpenBrace);
			setState(833);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (((((_la - 66)) & ~0x3f) == 0 && ((1L << (_la - 66)) & ((1L << (DecimalLiteral - 66)) | (1L << (HexIntegerLiteral - 66)) | (1L << (OctalIntegerLiteral - 66)) | (1L << (OctalIntegerLiteral2 - 66)) | (1L << (BinaryIntegerLiteral - 66)) | (1L << (BooleanLiteral - 66)) | (1L << (In - 66)) | (1L << (Of - 66)) | (1L << (ElseIf - 66)) | (1L << (Function_ - 66)) | (1L << (Delete - 66)) | (1L << (NumberOf - 66)) | (1L << (IndexOf - 66)) | (1L << (Sub - 66)) | (1L << (InstanceOf - 66)) | (1L << (Identifier - 66)))) != 0) || _la==StringLiteral) {
				{
				setState(820);
				objectKey();
				setState(821);
				match(Colon);
				setState(822);
				singleExpression(0);
				setState(830);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==Comma) {
					{
					{
					setState(823);
					match(Comma);
					setState(824);
					objectKey();
					setState(825);
					match(Colon);
					setState(826);
					singleExpression(0);
					}
					}
					setState(832);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
			}

			setState(835);
			match(CloseBrace);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class LiteralContext extends ParserRuleContext {
		public NullLiteralContext nullLiteral() {
			return getRuleContext(NullLiteralContext.class,0);
		}
		public BooleanLiteralContext booleanLiteral() {
			return getRuleContext(BooleanLiteralContext.class,0);
		}
		public StringLiteralContext stringLiteral() {
			return getRuleContext(StringLiteralContext.class,0);
		}
		public NumericLiteralContext numericLiteral() {
			return getRuleContext(NumericLiteralContext.class,0);
		}
		public ListLiteralContext listLiteral() {
			return getRuleContext(ListLiteralContext.class,0);
		}
		public ObjectLiteralContext objectLiteral() {
			return getRuleContext(ObjectLiteralContext.class,0);
		}
		public ListDeclarationContext listDeclaration() {
			return getRuleContext(ListDeclarationContext.class,0);
		}
		public RegularExpressionLiteralContext regularExpressionLiteral() {
			return getRuleContext(RegularExpressionLiteralContext.class,0);
		}
		public LiteralContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_literal; }
	}

	public final LiteralContext literal() throws RecognitionException {
		LiteralContext _localctx = new LiteralContext(_ctx, getState());
		enterRule(_localctx, 132, RULE_literal);
		try {
			setState(845);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case NullLiteral:
				enterOuterAlt(_localctx, 1);
				{
				setState(837);
				nullLiteral();
				}
				break;
			case BooleanLiteral:
				enterOuterAlt(_localctx, 2);
				{
				setState(838);
				booleanLiteral();
				}
				break;
			case StringLiteral:
				enterOuterAlt(_localctx, 3);
				{
				setState(839);
				stringLiteral();
				}
				break;
			case DecimalLiteral:
			case HexIntegerLiteral:
			case OctalIntegerLiteral:
			case OctalIntegerLiteral2:
			case BinaryIntegerLiteral:
				enterOuterAlt(_localctx, 4);
				{
				setState(840);
				numericLiteral();
				}
				break;
			case OpenBracket:
				enterOuterAlt(_localctx, 5);
				{
				setState(841);
				listLiteral();
				}
				break;
			case OpenBrace:
				enterOuterAlt(_localctx, 6);
				{
				setState(842);
				objectLiteral();
				}
				break;
			case New_:
				enterOuterAlt(_localctx, 7);
				{
				setState(843);
				listDeclaration();
				}
				break;
			case RegularExpressionLiteral:
				enterOuterAlt(_localctx, 8);
				{
				setState(844);
				regularExpressionLiteral();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class RegularExpressionLiteralContext extends ParserRuleContext {
		public TerminalNode RegularExpressionLiteral() { return getToken(SintesisParser.RegularExpressionLiteral, 0); }
		public RegularExpressionLiteralContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_regularExpressionLiteral; }
	}

	public final RegularExpressionLiteralContext regularExpressionLiteral() throws RecognitionException {
		RegularExpressionLiteralContext _localctx = new RegularExpressionLiteralContext(_ctx, getState());
		enterRule(_localctx, 134, RULE_regularExpressionLiteral);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(847);
			match(RegularExpressionLiteral);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class BooleanLiteralContext extends ParserRuleContext {
		public TerminalNode BooleanLiteral() { return getToken(SintesisParser.BooleanLiteral, 0); }
		public BooleanLiteralContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_booleanLiteral; }
	}

	public final BooleanLiteralContext booleanLiteral() throws RecognitionException {
		BooleanLiteralContext _localctx = new BooleanLiteralContext(_ctx, getState());
		enterRule(_localctx, 136, RULE_booleanLiteral);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(849);
			match(BooleanLiteral);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class StringLiteralContext extends ParserRuleContext {
		public TerminalNode StringLiteral() { return getToken(SintesisParser.StringLiteral, 0); }
		public StringLiteralContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_stringLiteral; }
	}

	public final StringLiteralContext stringLiteral() throws RecognitionException {
		StringLiteralContext _localctx = new StringLiteralContext(_ctx, getState());
		enterRule(_localctx, 138, RULE_stringLiteral);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(851);
			match(StringLiteral);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class NullLiteralContext extends ParserRuleContext {
		public TerminalNode NullLiteral() { return getToken(SintesisParser.NullLiteral, 0); }
		public NullLiteralContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_nullLiteral; }
	}

	public final NullLiteralContext nullLiteral() throws RecognitionException {
		NullLiteralContext _localctx = new NullLiteralContext(_ctx, getState());
		enterRule(_localctx, 140, RULE_nullLiteral);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(853);
			match(NullLiteral);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class NumericLiteralContext extends ParserRuleContext {
		public TerminalNode DecimalLiteral() { return getToken(SintesisParser.DecimalLiteral, 0); }
		public TerminalNode HexIntegerLiteral() { return getToken(SintesisParser.HexIntegerLiteral, 0); }
		public TerminalNode OctalIntegerLiteral() { return getToken(SintesisParser.OctalIntegerLiteral, 0); }
		public TerminalNode OctalIntegerLiteral2() { return getToken(SintesisParser.OctalIntegerLiteral2, 0); }
		public TerminalNode BinaryIntegerLiteral() { return getToken(SintesisParser.BinaryIntegerLiteral, 0); }
		public NumericLiteralContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_numericLiteral; }
	}

	public final NumericLiteralContext numericLiteral() throws RecognitionException {
		NumericLiteralContext _localctx = new NumericLiteralContext(_ctx, getState());
		enterRule(_localctx, 142, RULE_numericLiteral);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(855);
			_la = _input.LA(1);
			if ( !(((((_la - 66)) & ~0x3f) == 0 && ((1L << (_la - 66)) & ((1L << (DecimalLiteral - 66)) | (1L << (HexIntegerLiteral - 66)) | (1L << (OctalIntegerLiteral - 66)) | (1L << (OctalIntegerLiteral2 - 66)) | (1L << (BinaryIntegerLiteral - 66)))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class IdentifierContext extends ParserRuleContext {
		public TerminalNode Identifier() { return getToken(SintesisParser.Identifier, 0); }
		public IdentifierContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_identifier; }
	}

	public final IdentifierContext identifier() throws RecognitionException {
		IdentifierContext _localctx = new IdentifierContext(_ctx, getState());
		enterRule(_localctx, 144, RULE_identifier);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(857);
			match(Identifier);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class IdentifierExtContext extends ParserRuleContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public ReservedIdentifierContext reservedIdentifier() {
			return getRuleContext(ReservedIdentifierContext.class,0);
		}
		public IdentifierExtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_identifierExt; }
	}

	public final IdentifierExtContext identifierExt() throws RecognitionException {
		IdentifierExtContext _localctx = new IdentifierExtContext(_ctx, getState());
		enterRule(_localctx, 146, RULE_identifierExt);
		try {
			setState(861);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case Identifier:
				enterOuterAlt(_localctx, 1);
				{
				setState(859);
				identifier();
				}
				break;
			case In:
			case Of:
			case ElseIf:
			case Function_:
			case Delete:
			case NumberOf:
			case IndexOf:
			case Sub:
			case InstanceOf:
				enterOuterAlt(_localctx, 2);
				{
				setState(860);
				reservedIdentifier();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SafeKeywordContext extends ParserRuleContext {
		public TerminalNode Return() { return getToken(SintesisParser.Return, 0); }
		public TerminalNode While() { return getToken(SintesisParser.While, 0); }
		public TerminalNode Continue() { return getToken(SintesisParser.Continue, 0); }
		public TerminalNode Break() { return getToken(SintesisParser.Break, 0); }
		public TerminalNode Each() { return getToken(SintesisParser.Each, 0); }
		public TerminalNode For() { return getToken(SintesisParser.For, 0); }
		public TerminalNode Of() { return getToken(SintesisParser.Of, 0); }
		public TerminalNode In() { return getToken(SintesisParser.In, 0); }
		public TerminalNode Do() { return getToken(SintesisParser.Do, 0); }
		public TerminalNode InstanceOf() { return getToken(SintesisParser.InstanceOf, 0); }
		public TerminalNode Default() { return getToken(SintesisParser.Default, 0); }
		public TerminalNode Case() { return getToken(SintesisParser.Case, 0); }
		public TerminalNode Times() { return getToken(SintesisParser.Times, 0); }
		public TerminalNode Switch() { return getToken(SintesisParser.Switch, 0); }
		public TerminalNode Print() { return getToken(SintesisParser.Print, 0); }
		public TerminalNode If() { return getToken(SintesisParser.If, 0); }
		public TerminalNode ElseIf() { return getToken(SintesisParser.ElseIf, 0); }
		public TerminalNode Else() { return getToken(SintesisParser.Else, 0); }
		public TerminalNode Repeat() { return getToken(SintesisParser.Repeat, 0); }
		public SafeKeywordContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_safeKeyword; }
	}

	public final SafeKeywordContext safeKeyword() throws RecognitionException {
		SafeKeywordContext _localctx = new SafeKeywordContext(_ctx, getState());
		enterRule(_localctx, 148, RULE_safeKeyword);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(863);
			_la = _input.LA(1);
			if ( !(((((_la - 77)) & ~0x3f) == 0 && ((1L << (_la - 77)) & ((1L << (Print - 77)) | (1L << (While - 77)) | (1L << (Repeat - 77)) | (1L << (Times - 77)) | (1L << (Do - 77)) | (1L << (Continue - 77)) | (1L << (Break - 77)) | (1L << (Switch - 77)) | (1L << (Case - 77)) | (1L << (Default - 77)) | (1L << (Each - 77)) | (1L << (For - 77)) | (1L << (In - 77)) | (1L << (Of - 77)) | (1L << (If - 77)) | (1L << (ElseIf - 77)) | (1L << (Else - 77)) | (1L << (Return - 77)) | (1L << (InstanceOf - 77)))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class EosContext extends ParserRuleContext {
		public TerminalNode SemiColon() { return getToken(SintesisParser.SemiColon, 0); }
		public TerminalNode EOF() { return getToken(SintesisParser.EOF, 0); }
		public EosContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_eos; }
	}

	public final EosContext eos() throws RecognitionException {
		EosContext _localctx = new EosContext(_ctx, getState());
		enterRule(_localctx, 150, RULE_eos);
		try {
			setState(869);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,99,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(865);
				match(SemiColon);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(866);
				match(EOF);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(867);
				if (!(this.lineTerminatorAhead())) throw new FailedPredicateException(this, "this.lineTerminatorAhead()");
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(868);
				if (!(this.closeBrace())) throw new FailedPredicateException(this, "this.closeBrace()");
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public boolean sempred(RuleContext _localctx, int ruleIndex, int predIndex) {
		switch (ruleIndex) {
		case 10:
			return expressionStatement_sempred((ExpressionStatementContext)_localctx, predIndex);
		case 13:
			return member_sempred((MemberContext)_localctx, predIndex);
		case 15:
			return singleExpression_sempred((SingleExpressionContext)_localctx, predIndex);
		case 75:
			return eos_sempred((EosContext)_localctx, predIndex);
		}
		return true;
	}
	private boolean expressionStatement_sempred(ExpressionStatementContext _localctx, int predIndex) {
		switch (predIndex) {
		case 0:
			return this.notOpenBraceAndNotFunction();
		}
		return true;
	}
	private boolean member_sempred(MemberContext _localctx, int predIndex) {
		switch (predIndex) {
		case 1:
			return precpred(_ctx, 10);
		case 2:
			return precpred(_ctx, 9);
		case 3:
			return precpred(_ctx, 8);
		case 4:
			return precpred(_ctx, 7);
		case 5:
			return precpred(_ctx, 6);
		}
		return true;
	}
	private boolean singleExpression_sempred(SingleExpressionContext _localctx, int predIndex) {
		switch (predIndex) {
		case 6:
			return precpred(_ctx, 21);
		case 7:
			return precpred(_ctx, 20);
		case 8:
			return precpred(_ctx, 19);
		case 9:
			return precpred(_ctx, 18);
		case 10:
			return precpred(_ctx, 17);
		case 11:
			return precpred(_ctx, 16);
		case 12:
			return precpred(_ctx, 15);
		case 13:
			return precpred(_ctx, 14);
		case 14:
			return precpred(_ctx, 12);
		case 15:
			return precpred(_ctx, 11);
		case 16:
			return precpred(_ctx, 10);
		case 17:
			return precpred(_ctx, 9);
		case 18:
			return precpred(_ctx, 8);
		case 19:
			return precpred(_ctx, 27);
		case 20:
			return precpred(_ctx, 13);
		}
		return true;
	}
	private boolean eos_sempred(EosContext _localctx, int predIndex) {
		switch (predIndex) {
		case 21:
			return this.lineTerminatorAhead();
		case 22:
			return this.closeBrace();
		}
		return true;
	}

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3\u0086\u036a\4\2\t"+
		"\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13"+
		"\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\4\31\t\31"+
		"\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4\36\t\36\4\37\t\37\4 \t \4!"+
		"\t!\4\"\t\"\4#\t#\4$\t$\4%\t%\4&\t&\4\'\t\'\4(\t(\4)\t)\4*\t*\4+\t+\4"+
		",\t,\4-\t-\4.\t.\4/\t/\4\60\t\60\4\61\t\61\4\62\t\62\4\63\t\63\4\64\t"+
		"\64\4\65\t\65\4\66\t\66\4\67\t\67\48\t8\49\t9\4:\t:\4;\t;\4<\t<\4=\t="+
		"\4>\t>\4?\t?\4@\t@\4A\tA\4B\tB\4C\tC\4D\tD\4E\tE\4F\tF\4G\tG\4H\tH\4I"+
		"\tI\4J\tJ\4K\tK\4L\tL\4M\tM\3\2\5\2\u009c\n\2\3\2\3\2\3\3\6\3\u00a1\n"+
		"\3\r\3\16\3\u00a2\3\4\3\4\5\4\u00a7\n\4\3\5\3\5\3\5\3\5\3\5\3\5\3\5\3"+
		"\5\5\5\u00b1\n\5\3\6\3\6\3\6\3\6\3\6\3\6\5\6\u00b9\n\6\3\7\3\7\5\7\u00bd"+
		"\n\7\3\7\3\7\3\b\3\b\3\t\3\t\3\t\3\n\3\n\3\13\3\13\3\13\3\f\3\f\3\f\3"+
		"\f\3\r\3\r\3\r\3\r\3\r\5\r\u00d4\n\r\3\16\3\16\3\16\3\16\5\16\u00da\n"+
		"\16\5\16\u00dc\n\16\3\17\3\17\3\17\3\17\3\17\3\17\5\17\u00e4\n\17\3\17"+
		"\3\17\5\17\u00e8\n\17\5\17\u00ea\n\17\3\17\3\17\3\17\3\17\3\17\3\17\3"+
		"\17\5\17\u00f3\n\17\3\17\3\17\3\17\3\17\3\17\3\17\3\17\3\17\3\17\3\17"+
		"\3\17\3\17\3\17\3\17\3\17\3\17\3\17\3\17\3\17\3\17\3\17\7\17\u010a\n\17"+
		"\f\17\16\17\u010d\13\17\3\20\3\20\3\20\3\20\3\20\5\20\u0114\n\20\3\21"+
		"\3\21\3\21\3\21\3\21\3\21\3\21\3\21\3\21\3\21\3\21\3\21\3\21\3\21\3\21"+
		"\3\21\3\21\3\21\3\21\3\21\3\21\3\21\3\21\3\21\3\21\3\21\3\21\3\21\3\21"+
		"\3\21\3\21\3\21\3\21\3\21\3\21\3\21\3\21\3\21\3\21\5\21\u013d\n\21\3\21"+
		"\3\21\3\21\3\21\3\21\3\21\3\21\3\21\3\21\3\21\3\21\3\21\3\21\3\21\3\21"+
		"\3\21\3\21\3\21\3\21\3\21\3\21\3\21\3\21\3\21\3\21\3\21\3\21\3\21\3\21"+
		"\3\21\3\21\3\21\3\21\3\21\3\21\3\21\3\21\3\21\3\21\3\21\3\21\3\21\3\21"+
		"\3\21\3\21\3\21\3\21\7\21\u016e\n\21\f\21\16\21\u0171\13\21\3\22\3\22"+
		"\3\23\3\23\3\23\3\23\3\23\5\23\u017a\n\23\3\24\3\24\3\25\3\25\3\25\5\25"+
		"\u0181\n\25\3\26\3\26\3\26\7\26\u0186\n\26\f\26\16\26\u0189\13\26\3\27"+
		"\3\27\3\27\5\27\u018e\n\27\3\27\3\27\5\27\u0192\n\27\3\27\3\27\5\27\u0196"+
		"\n\27\3\27\5\27\u0199\n\27\3\30\6\30\u019c\n\30\r\30\16\30\u019d\3\31"+
		"\3\31\3\31\5\31\u01a3\n\31\3\31\3\31\3\32\3\32\3\32\3\32\3\32\3\32\3\32"+
		"\3\32\3\32\3\32\3\32\3\32\3\32\5\32\u01b4\n\32\3\33\5\33\u01b7\n\33\3"+
		"\33\3\33\3\33\3\33\3\33\3\33\3\34\3\34\3\34\5\34\u01c2\n\34\3\34\3\34"+
		"\3\34\3\34\3\34\3\34\3\34\3\34\5\34\u01cc\n\34\3\34\3\34\3\34\5\34\u01d1"+
		"\n\34\3\34\3\34\3\34\3\34\3\34\5\34\u01d8\n\34\3\34\3\34\5\34\u01dc\n"+
		"\34\3\34\3\34\5\34\u01e0\n\34\3\34\3\34\3\34\3\34\3\34\5\34\u01e7\n\34"+
		"\3\34\3\34\3\34\3\34\3\34\3\34\3\34\5\34\u01f0\n\34\3\34\3\34\3\34\3\34"+
		"\5\34\u01f6\n\34\3\34\5\34\u01f9\n\34\3\34\3\34\5\34\u01fd\n\34\3\34\3"+
		"\34\3\34\3\34\5\34\u0203\n\34\3\34\5\34\u0206\n\34\3\34\3\34\3\34\3\34"+
		"\5\34\u020c\n\34\3\34\3\34\5\34\u0210\n\34\3\35\3\35\5\35\u0214\n\35\3"+
		"\36\3\36\3\36\3\37\3\37\3\37\3 \3 \3 \5 \u021f\n \3!\3!\3!\3!\3!\3!\3"+
		"\"\3\"\5\"\u0229\n\"\3\"\3\"\5\"\u022d\n\"\5\"\u022f\n\"\3\"\3\"\3#\6"+
		"#\u0234\n#\r#\16#\u0235\3$\3$\3$\3$\5$\u023c\n$\3%\3%\3%\5%\u0241\n%\3"+
		"&\3&\3&\7&\u0246\n&\f&\16&\u0249\13&\3\'\5\'\u024c\n\'\3\'\3\'\3\'\3\'"+
		"\5\'\u0252\n\'\3\'\3\'\3\'\3(\3(\3(\3(\5(\u025b\n(\3(\3(\3(\3)\3)\3)\3"+
		")\7)\u0264\n)\f)\16)\u0267\13)\5)\u0269\n)\3)\3)\3*\3*\3+\5+\u0270\n+"+
		"\3+\3+\3+\3+\5+\u0276\n+\3+\3+\3+\5+\u027b\n+\3+\3+\3+\3+\3+\5+\u0282"+
		"\n+\5+\u0284\n+\3+\3+\3+\5+\u0289\n+\3+\3+\3+\3+\3+\5+\u0290\n+\5+\u0292"+
		"\n+\3+\3+\3,\6,\u0297\n,\r,\16,\u0298\3-\5-\u029c\n-\3-\3-\3-\7-\u02a1"+
		"\n-\f-\16-\u02a4\13-\3.\5.\u02a7\n.\3.\5.\u02aa\n.\3.\3.\3.\5.\u02af\n"+
		".\3.\3.\3.\3/\3/\5/\u02b6\n/\3\60\6\60\u02b9\n\60\r\60\16\60\u02ba\3\61"+
		"\3\61\5\61\u02bf\n\61\3\61\3\61\5\61\u02c3\n\61\5\61\u02c5\n\61\3\61\3"+
		"\61\3\61\3\62\3\62\5\62\u02cc\n\62\3\62\3\62\3\63\6\63\u02d1\n\63\r\63"+
		"\16\63\u02d2\3\64\3\64\3\64\5\64\u02d8\n\64\3\65\3\65\3\65\3\66\3\66\3"+
		"\67\3\67\3\67\5\67\u02e2\n\67\38\38\38\38\78\u02e8\n8\f8\168\u02eb\13"+
		"8\39\39\39\39\39\39\39\59\u02f4\n9\3:\3:\5:\u02f8\n:\3;\3;\3;\5;\u02fd"+
		"\n;\3;\3;\3;\3;\3;\3;\5;\u0305\n;\3<\3<\3<\5<\u030a\n<\3<\5<\u030d\n<"+
		"\3=\3=\5=\u0311\n=\3>\3>\3?\3?\3?\5?\u0318\n?\3@\3@\3@\3@\5@\u031e\n@"+
		"\3@\3@\3A\3A\3A\3A\7A\u0326\nA\fA\16A\u0329\13A\5A\u032b\nA\3A\3A\3B\3"+
		"B\3B\3B\3B\5B\u0334\nB\3C\3C\3C\3C\3C\3C\3C\3C\3C\7C\u033f\nC\fC\16C\u0342"+
		"\13C\5C\u0344\nC\3C\3C\3D\3D\3D\3D\3D\3D\3D\3D\5D\u0350\nD\3E\3E\3F\3"+
		"F\3G\3G\3H\3H\3I\3I\3J\3J\3K\3K\5K\u0360\nK\3L\3L\3M\3M\3M\3M\5M\u0368"+
		"\nM\3M\2\4\34 N\2\4\6\b\n\f\16\20\22\24\26\30\32\34\36 \"$&(*,.\60\62"+
		"\64\668:<>@BDFHJLNPRTVXZ\\^`bdfhjlnprtvxz|~\u0080\u0082\u0084\u0086\u0088"+
		"\u008a\u008c\u008e\u0090\u0092\u0094\u0096\u0098\2\24\3\2\31\32\3\2\37"+
		"!\3\2\33\34\3\2%\'\3\2()\3\2./\3\2,-\3\2\60\62\3\2\63\64\3\2\\]\4\2\24"+
		"\24\\\\\4\2QQSS\3\2\u0080\u0082\4\2eevv\6\2\\]aaeiyy\3\2\65@\3\2DH\7\2"+
		"OY[]__acyy\2\u03ce\2\u009b\3\2\2\2\4\u00a0\3\2\2\2\6\u00a6\3\2\2\2\b\u00b0"+
		"\3\2\2\2\n\u00b8\3\2\2\2\f\u00ba\3\2\2\2\16\u00c0\3\2\2\2\20\u00c2\3\2"+
		"\2\2\22\u00c5\3\2\2\2\24\u00c7\3\2\2\2\26\u00ca\3\2\2\2\30\u00d3\3\2\2"+
		"\2\32\u00db\3\2\2\2\34\u00f2\3\2\2\2\36\u0113\3\2\2\2 \u013c\3\2\2\2\""+
		"\u0172\3\2\2\2$\u0179\3\2\2\2&\u017b\3\2\2\2(\u0180\3\2\2\2*\u0182\3\2"+
		"\2\2,\u018a\3\2\2\2.\u019b\3\2\2\2\60\u019f\3\2\2\2\62\u01b3\3\2\2\2\64"+
		"\u01b6\3\2\2\2\66\u020f\3\2\2\28\u0213\3\2\2\2:\u0215\3\2\2\2<\u0218\3"+
		"\2\2\2>\u021b\3\2\2\2@\u0220\3\2\2\2B\u0226\3\2\2\2D\u0233\3\2\2\2F\u0237"+
		"\3\2\2\2H\u023d\3\2\2\2J\u0242\3\2\2\2L\u024b\3\2\2\2N\u0256\3\2\2\2P"+
		"\u025f\3\2\2\2R\u026c\3\2\2\2T\u026f\3\2\2\2V\u0296\3\2\2\2X\u029b\3\2"+
		"\2\2Z\u02a6\3\2\2\2\\\u02b5\3\2\2\2^\u02b8\3\2\2\2`\u02bc\3\2\2\2b\u02c9"+
		"\3\2\2\2d\u02d0\3\2\2\2f\u02d4\3\2\2\2h\u02d9\3\2\2\2j\u02dc\3\2\2\2l"+
		"\u02de\3\2\2\2n\u02e3\3\2\2\2p\u02f3\3\2\2\2r\u02f7\3\2\2\2t\u0304\3\2"+
		"\2\2v\u030c\3\2\2\2x\u0310\3\2\2\2z\u0312\3\2\2\2|\u0317\3\2\2\2~\u0319"+
		"\3\2\2\2\u0080\u0321\3\2\2\2\u0082\u0333\3\2\2\2\u0084\u0335\3\2\2\2\u0086"+
		"\u034f\3\2\2\2\u0088\u0351\3\2\2\2\u008a\u0353\3\2\2\2\u008c\u0355\3\2"+
		"\2\2\u008e\u0357\3\2\2\2\u0090\u0359\3\2\2\2\u0092\u035b\3\2\2\2\u0094"+
		"\u035f\3\2\2\2\u0096\u0361\3\2\2\2\u0098\u0367\3\2\2\2\u009a\u009c\5\4"+
		"\3\2\u009b\u009a\3\2\2\2\u009b\u009c\3\2\2\2\u009c\u009d\3\2\2\2\u009d"+
		"\u009e\7\2\2\3\u009e\3\3\2\2\2\u009f\u00a1\5\6\4\2\u00a0\u009f\3\2\2\2"+
		"\u00a1\u00a2\3\2\2\2\u00a2\u00a0\3\2\2\2\u00a2\u00a3\3\2\2\2\u00a3\5\3"+
		"\2\2\2\u00a4\u00a7\5\b\5\2\u00a5\u00a7\5\n\6\2\u00a6\u00a4\3\2\2\2\u00a6"+
		"\u00a5\3\2\2\2\u00a7\7\3\2\2\2\u00a8\u00b1\5h\65\2\u00a9\u00b1\5\22\n"+
		"\2\u00aa\u00b1\5\20\t\2\u00ab\u00b1\5\24\13\2\u00ac\u00b1\5:\36\2\u00ad"+
		"\u00b1\5<\37\2\u00ae\u00b1\5> \2\u00af\u00b1\5\26\f\2\u00b0\u00a8\3\2"+
		"\2\2\u00b0\u00a9\3\2\2\2\u00b0\u00aa\3\2\2\2\u00b0\u00ab\3\2\2\2\u00b0"+
		"\u00ac\3\2\2\2\u00b0\u00ad\3\2\2\2\u00b0\u00ae\3\2\2\2\u00b0\u00af\3\2"+
		"\2\2\u00b1\t\3\2\2\2\u00b2\u00b9\5\16\b\2\u00b3\u00b9\5T+\2\u00b4\u00b9"+
		"\5,\27\2\u00b5\u00b9\5\66\34\2\u00b6\u00b9\5L\'\2\u00b7\u00b9\5@!\2\u00b8"+
		"\u00b2\3\2\2\2\u00b8\u00b3\3\2\2\2\u00b8\u00b4\3\2\2\2\u00b8\u00b5\3\2"+
		"\2\2\u00b8\u00b6\3\2\2\2\u00b8\u00b7\3\2\2\2\u00b9\13\3\2\2\2\u00ba\u00bc"+
		"\7\20\2\2\u00bb\u00bd\5\4\3\2\u00bc\u00bb\3\2\2\2\u00bc\u00bd\3\2\2\2"+
		"\u00bd\u00be\3\2\2\2\u00be\u00bf\7\21\2\2\u00bf\r\3\2\2\2\u00c0\u00c1"+
		"\5\f\7\2\u00c1\17\3\2\2\2\u00c2\u00c3\7N\2\2\u00c3\u00c4\5\u0094K\2\u00c4"+
		"\21\3\2\2\2\u00c5\u00c6\7\22\2\2\u00c6\23\3\2\2\2\u00c7\u00c8\7O\2\2\u00c8"+
		"\u00c9\5*\26\2\u00c9\25\3\2\2\2\u00ca\u00cb\6\f\2\2\u00cb\u00cc\5*\26"+
		"\2\u00cc\u00cd\5\u0098M\2\u00cd\27\3\2\2\2\u00ce\u00cf\5\u0092J\2\u00cf"+
		"\u00d0\5P)\2\u00d0\u00d4\3\2\2\2\u00d1\u00d2\7x\2\2\u00d2\u00d4\5P)\2"+
		"\u00d3\u00ce\3\2\2\2\u00d3\u00d1\3\2\2\2\u00d4\31\3\2\2\2\u00d5\u00dc"+
		"\5P)\2\u00d6\u00d7\7\30\2\2\u00d7\u00d9\5\u0092J\2\u00d8\u00da\5P)\2\u00d9"+
		"\u00d8\3\2\2\2\u00d9\u00da\3\2\2\2\u00da\u00dc\3\2\2\2\u00db\u00d5\3\2"+
		"\2\2\u00db\u00d6\3\2\2\2\u00dc\33\3\2\2\2\u00dd\u00de\b\17\1\2\u00de\u00f3"+
		"\7t\2\2\u00df\u00f3\7u\2\2\u00e0\u00f3\7x\2\2\u00e1\u00e3\7r\2\2\u00e2"+
		"\u00e4\7q\2\2\u00e3\u00e2\3\2\2\2\u00e3\u00e4\3\2\2\2\u00e4\u00e9\3\2"+
		"\2\2\u00e5\u00e7\7]\2\2\u00e6\u00e8\7p\2\2\u00e7\u00e6\3\2\2\2\u00e7\u00e8"+
		"\3\2\2\2\u00e8\u00ea\3\2\2\2\u00e9\u00e5\3\2\2\2\u00e9\u00ea\3\2\2\2\u00ea"+
		"\u00eb\3\2\2\2\u00eb\u00ec\7\u0083\2\2\u00ec\u00f3\5P)\2\u00ed\u00f3\5"+
		"\u0092J\2\u00ee\u00f3\5j\66\2\u00ef\u00f3\5\u008cG\2\u00f0\u00f3\5\u0080"+
		"A\2\u00f1\u00f3\5\u0084C\2\u00f2\u00dd\3\2\2\2\u00f2\u00df\3\2\2\2\u00f2"+
		"\u00e0\3\2\2\2\u00f2\u00e1\3\2\2\2\u00f2\u00ed\3\2\2\2\u00f2\u00ee\3\2"+
		"\2\2\u00f2\u00ef\3\2\2\2\u00f2\u00f0\3\2\2\2\u00f2\u00f1\3\2\2\2\u00f3"+
		"\u010b\3\2\2\2\u00f4\u00f5\f\f\2\2\u00f5\u00f6\7\30\2\2\u00f6\u00f7\5"+
		"\36\20\2\u00f7\u00f8\5P)\2\u00f8\u010a\3\2\2\2\u00f9\u00fa\f\13\2\2\u00fa"+
		"\u00fb\7\30\2\2\u00fb\u010a\5\36\20\2\u00fc\u00fd\f\n\2\2\u00fd\u00fe"+
		"\7\f\2\2\u00fe\u00ff\5 \21\2\u00ff\u0100\7\r\2\2\u0100\u0101\5P)\2\u0101"+
		"\u010a\3\2\2\2\u0102\u0103\f\t\2\2\u0103\u0104\7\f\2\2\u0104\u0105\5 "+
		"\21\2\u0105\u0106\7\r\2\2\u0106\u010a\3\2\2\2\u0107\u0108\f\b\2\2\u0108"+
		"\u010a\5P)\2\u0109\u00f4\3\2\2\2\u0109\u00f9\3\2\2\2\u0109\u00fc\3\2\2"+
		"\2\u0109\u0102\3\2\2\2\u0109\u0107\3\2\2\2\u010a\u010d\3\2\2\2\u010b\u0109"+
		"\3\2\2\2\u010b\u010c\3\2\2\2\u010c\35\3\2\2\2\u010d\u010b\3\2\2\2\u010e"+
		"\u0114\7t\2\2\u010f\u0114\7u\2\2\u0110\u0114\7x\2\2\u0111\u0114\7w\2\2"+
		"\u0112\u0114\5\u0094K\2\u0113\u010e\3\2\2\2\u0113\u010f\3\2\2\2\u0113"+
		"\u0110\3\2\2\2\u0113\u0111\3\2\2\2\u0113\u0112\3\2\2\2\u0114\37\3\2\2"+
		"\2\u0115\u0116\b\21\1\2\u0116\u013d\5t;\2\u0117\u0118\5(\25\2\u0118\u0119"+
		"\5P)\2\u0119\u013d\3\2\2\2\u011a\u013d\7\13\2\2\u011b\u011c\7j\2\2\u011c"+
		"\u011d\7\30\2\2\u011d\u011e\5\u0092J\2\u011e\u011f\5P)\2\u011f\u013d\3"+
		"\2\2\2\u0120\u0121\7f\2\2\u0121\u013d\5 \21\36\u0122\u0123\t\2\2\2\u0123"+
		"\u013d\5 \21\34\u0124\u0125\7\33\2\2\u0125\u013d\5 \21\33\u0126\u0127"+
		"\7\34\2\2\u0127\u013d\5 \21\32\u0128\u0129\7\35\2\2\u0129\u013d\5 \21"+
		"\31\u012a\u012b\7\36\2\2\u012b\u013d\5 \21\30\u012c\u012d\5\34\17\2\u012d"+
		"\u012e\7\24\2\2\u012e\u012f\5 \21\t\u012f\u013d\3\2\2\2\u0130\u0131\5"+
		"\34\17\2\u0131\u0132\5z>\2\u0132\u0133\5 \21\b\u0133\u013d\3\2\2\2\u0134"+
		"\u013d\5n8\2\u0135\u0136\7\16\2\2\u0136\u0137\5 \21\2\u0137\u0138\7\17"+
		"\2\2\u0138\u013d\3\2\2\2\u0139\u013d\5\34\17\2\u013a\u013d\5\u0086D\2"+
		"\u013b\u013d\7B\2\2\u013c\u0115\3\2\2\2\u013c\u0117\3\2\2\2\u013c\u011a"+
		"\3\2\2\2\u013c\u011b\3\2\2\2\u013c\u0120\3\2\2\2\u013c\u0122\3\2\2\2\u013c"+
		"\u0124\3\2\2\2\u013c\u0126\3\2\2\2\u013c\u0128\3\2\2\2\u013c\u012a\3\2"+
		"\2\2\u013c\u012c\3\2\2\2\u013c\u0130\3\2\2\2\u013c\u0134\3\2\2\2\u013c"+
		"\u0135\3\2\2\2\u013c\u0139\3\2\2\2\u013c\u013a\3\2\2\2\u013c\u013b\3\2"+
		"\2\2\u013d\u016f\3\2\2\2\u013e\u013f\f\27\2\2\u013f\u0140\7\\\2\2\u0140"+
		"\u016e\5 \21\30\u0141\u0142\f\26\2\2\u0142\u0143\t\3\2\2\u0143\u016e\5"+
		" \21\27\u0144\u0145\f\25\2\2\u0145\u0146\t\4\2\2\u0146\u016e\5 \21\26"+
		"\u0147\u0148\f\24\2\2\u0148\u0149\t\5\2\2\u0149\u016e\5 \21\25\u014a\u014b"+
		"\f\23\2\2\u014b\u014c\7\"\2\2\u014c\u016e\5 \21\23\u014d\u014e\f\22\2"+
		"\2\u014e\u014f\t\6\2\2\u014f\u016e\5 \21\23\u0150\u0151\f\21\2\2\u0151"+
		"\u0152\7*\2\2\u0152\u016e\5 \21\22\u0153\u0154\f\20\2\2\u0154\u0155\7"+
		"+\2\2\u0155\u016e\5 \21\21\u0156\u0157\f\16\2\2\u0157\u0158\t\7\2\2\u0158"+
		"\u016e\5 \21\17\u0159\u015a\f\r\2\2\u015a\u015b\t\b\2\2\u015b\u016e\5"+
		" \21\16\u015c\u015d\f\f\2\2\u015d\u015e\t\t\2\2\u015e\u016e\5 \21\r\u015f"+
		"\u0160\f\13\2\2\u0160\u0161\t\n\2\2\u0161\u016e\5 \21\f\u0162\u0163\f"+
		"\n\2\2\u0163\u0164\7\25\2\2\u0164\u0165\5 \21\2\u0165\u0166\7\26\2\2\u0166"+
		"\u0167\5 \21\13\u0167\u016e\3\2\2\2\u0168\u0169\f\35\2\2\u0169\u016e\t"+
		"\2\2\2\u016a\u016b\f\17\2\2\u016b\u016c\7y\2\2\u016c\u016e\5\u0092J\2"+
		"\u016d\u013e\3\2\2\2\u016d\u0141\3\2\2\2\u016d\u0144\3\2\2\2\u016d\u0147"+
		"\3\2\2\2\u016d\u014a\3\2\2\2\u016d\u014d\3\2\2\2\u016d\u0150\3\2\2\2\u016d"+
		"\u0153\3\2\2\2\u016d\u0156\3\2\2\2\u016d\u0159\3\2\2\2\u016d\u015c\3\2"+
		"\2\2\u016d\u015f\3\2\2\2\u016d\u0162\3\2\2\2\u016d\u0168\3\2\2\2\u016d"+
		"\u016a\3\2\2\2\u016e\u0171\3\2\2\2\u016f\u016d\3\2\2\2\u016f\u0170\3\2"+
		"\2\2\u0170!\3\2\2\2\u0171\u016f\3\2\2\2\u0172\u0173\7k\2\2\u0173#\3\2"+
		"\2\2\u0174\u017a\7g\2\2\u0175\u017a\7m\2\2\u0176\u017a\7l\2\2\u0177\u017a"+
		"\7n\2\2\u0178\u017a\7{\2\2\u0179\u0174\3\2\2\2\u0179\u0175\3\2\2\2\u0179"+
		"\u0176\3\2\2\2\u0179\u0177\3\2\2\2\u0179\u0178\3\2\2\2\u017a%\3\2\2\2"+
		"\u017b\u017c\7o\2\2\u017c\'\3\2\2\2\u017d\u0181\5\"\22\2\u017e\u0181\5"+
		"$\23\2\u017f\u0181\5&\24\2\u0180\u017d\3\2\2\2\u0180\u017e\3\2\2\2\u0180"+
		"\u017f\3\2\2\2\u0181)\3\2\2\2\u0182\u0187\5 \21\2\u0183\u0184\7\23\2\2"+
		"\u0184\u0186\5 \21\2\u0185\u0183\3\2\2\2\u0186\u0189\3\2\2\2\u0187\u0185"+
		"\3\2\2\2\u0187\u0188\3\2\2\2\u0188+\3\2\2\2\u0189\u0187\3\2\2\2\u018a"+
		"\u018b\7_\2\2\u018b\u018d\5 \21\2\u018c\u018e\7`\2\2\u018d\u018c\3\2\2"+
		"\2\u018d\u018e\3\2\2\2\u018e\u018f\3\2\2\2\u018f\u0191\5\6\4\2\u0190\u0192"+
		"\5.\30\2\u0191\u0190\3\2\2\2\u0191\u0192\3\2\2\2\u0192\u0198\3\2\2\2\u0193"+
		"\u0195\7b\2\2\u0194\u0196\7`\2\2\u0195\u0194\3\2\2\2\u0195\u0196\3\2\2"+
		"\2\u0196\u0197\3\2\2\2\u0197\u0199\5\6\4\2\u0198\u0193\3\2\2\2\u0198\u0199"+
		"\3\2\2\2\u0199-\3\2\2\2\u019a\u019c\5\60\31\2\u019b\u019a\3\2\2\2\u019c"+
		"\u019d\3\2\2\2\u019d\u019b\3\2\2\2\u019d\u019e\3\2\2\2\u019e/\3\2\2\2"+
		"\u019f\u01a0\7a\2\2\u01a0\u01a2\5 \21\2\u01a1\u01a3\7`\2\2\u01a2\u01a1"+
		"\3\2\2\2\u01a2\u01a3\3\2\2\2\u01a3\u01a4\3\2\2\2\u01a4\u01a5\5\6\4\2\u01a5"+
		"\61\3\2\2\2\u01a6\u01a7\7\u0083\2\2\u01a7\u01a8\t\13\2\2\u01a8\u01b4\5"+
		" \21\2\u01a9\u01aa\7\u0083\2\2\u01aa\u01ab\7\23\2\2\u01ab\u01ac\7\u0083"+
		"\2\2\u01ac\u01ad\t\13\2\2\u01ad\u01b4\5 \21\2\u01ae\u01af\7\u0083\2\2"+
		"\u01af\u01b0\7A\2\2\u01b0\u01b1\7\u0083\2\2\u01b1\u01b2\t\13\2\2\u01b2"+
		"\u01b4\5 \21\2\u01b3\u01a6\3\2\2\2\u01b3\u01a9\3\2\2\2\u01b3\u01ae\3\2"+
		"\2\2\u01b4\63\3\2\2\2\u01b5\u01b7\7~\2\2\u01b6\u01b5\3\2\2\2\u01b6\u01b7"+
		"\3\2\2\2\u01b7\u01b8\3\2\2\2\u01b8\u01b9\5\u0092J\2\u01b9\u01ba\t\f\2"+
		"\2\u01ba\u01bb\5 \21\2\u01bb\u01bc\7^\2\2\u01bc\u01bd\5 \21\2\u01bd\65"+
		"\3\2\2\2\u01be\u01bf\7Q\2\2\u01bf\u01c1\5 \21\2\u01c0\u01c2\7R\2\2\u01c1"+
		"\u01c0\3\2\2\2\u01c1\u01c2\3\2\2\2\u01c2\u01c3\3\2\2\2\u01c3\u01c4\5\6"+
		"\4\2\u01c4\u0210\3\2\2\2\u01c5\u01c6\t\r\2\2\u01c6\u01c7\5\6\4\2\u01c7"+
		"\u01c8\7P\2\2\u01c8\u01c9\5 \21\2\u01c9\u0210\3\2\2\2\u01ca\u01cc\7Q\2"+
		"\2\u01cb\u01ca\3\2\2\2\u01cb\u01cc\3\2\2\2\u01cc\u01cd\3\2\2\2\u01cd\u01ce"+
		"\7P\2\2\u01ce\u01d0\5 \21\2\u01cf\u01d1\t\r\2\2\u01d0\u01cf\3\2\2\2\u01d0"+
		"\u01d1\3\2\2\2\u01d1\u01d2\3\2\2\2\u01d2\u01d3\5\6\4\2\u01d3\u0210\3\2"+
		"\2\2\u01d4\u01d5\7[\2\2\u01d5\u01d7\7\16\2\2\u01d6\u01d8\58\35\2\u01d7"+
		"\u01d6\3\2\2\2\u01d7\u01d8\3\2\2\2\u01d8\u01d9\3\2\2\2\u01d9\u01db\7\22"+
		"\2\2\u01da\u01dc\5*\26\2\u01db\u01da\3\2\2\2\u01db\u01dc\3\2\2\2\u01dc"+
		"\u01dd\3\2\2\2\u01dd\u01df\7\22\2\2\u01de\u01e0\5*\26\2\u01df\u01de\3"+
		"\2\2\2\u01df\u01e0\3\2\2\2\u01e0\u01e1\3\2\2\2\u01e1\u01e2\7\17\2\2\u01e2"+
		"\u0210\5\6\4\2\u01e3\u01e4\7[\2\2\u01e4\u01e6\5\64\33\2\u01e5\u01e7\t"+
		"\r\2\2\u01e6\u01e5\3\2\2\2\u01e6\u01e7\3\2\2\2\u01e7\u01e8\3\2\2\2\u01e8"+
		"\u01e9\5\6\4\2\u01e9\u0210\3\2\2\2\u01ea\u01eb\7[\2\2\u01eb\u01ec\7\16"+
		"\2\2\u01ec\u01ed\5\64\33\2\u01ed\u01ef\7\17\2\2\u01ee\u01f0\t\r\2\2\u01ef"+
		"\u01ee\3\2\2\2\u01ef\u01f0\3\2\2\2\u01f0\u01f1\3\2\2\2\u01f1\u01f2\5\6"+
		"\4\2\u01f2\u0210\3\2\2\2\u01f3\u01f5\7[\2\2\u01f4\u01f6\7Y\2\2\u01f5\u01f4"+
		"\3\2\2\2\u01f5\u01f6\3\2\2\2\u01f6\u01f9\3\2\2\2\u01f7\u01f9\7Z\2\2\u01f8"+
		"\u01f3\3\2\2\2\u01f8\u01f7\3\2\2\2\u01f9\u01fa\3\2\2\2\u01fa\u01fc\5\62"+
		"\32\2\u01fb\u01fd\t\r\2\2\u01fc\u01fb\3\2\2\2\u01fc\u01fd\3\2\2\2\u01fd"+
		"\u01fe\3\2\2\2\u01fe\u01ff\5\6\4\2\u01ff\u0210\3\2\2\2\u0200\u0202\7["+
		"\2\2\u0201\u0203\7Y\2\2\u0202\u0201\3\2\2\2\u0202\u0203\3\2\2\2\u0203"+
		"\u0206\3\2\2\2\u0204\u0206\7Z\2\2\u0205\u0200\3\2\2\2\u0205\u0204\3\2"+
		"\2\2\u0206\u0207\3\2\2\2\u0207\u0208\7\16\2\2\u0208\u0209\5\62\32\2\u0209"+
		"\u020b\7\17\2\2\u020a\u020c\t\r\2\2\u020b\u020a\3\2\2\2\u020b\u020c\3"+
		"\2\2\2\u020c\u020d\3\2\2\2\u020d\u020e\5\6\4\2\u020e\u0210\3\2\2\2\u020f"+
		"\u01be\3\2\2\2\u020f\u01c5\3\2\2\2\u020f\u01cb\3\2\2\2\u020f\u01d4\3\2"+
		"\2\2\u020f\u01e3\3\2\2\2\u020f\u01ea\3\2\2\2\u020f\u01f8\3\2\2\2\u020f"+
		"\u0205\3\2\2\2\u0210\67\3\2\2\2\u0211\u0214\5*\26\2\u0212\u0214\5n8\2"+
		"\u0213\u0211\3\2\2\2\u0213\u0212\3\2\2\2\u02149\3\2\2\2\u0215\u0216\7"+
		"T\2\2\u0216\u0217\5\u0098M\2\u0217;\3\2\2\2\u0218\u0219\7U\2\2\u0219\u021a"+
		"\5\u0098M\2\u021a=\3\2\2\2\u021b\u021e\7c\2\2\u021c\u021f\5 \21\2\u021d"+
		"\u021f\5\u0098M\2\u021e\u021c\3\2\2\2\u021e\u021d\3\2\2\2\u021f?\3\2\2"+
		"\2\u0220\u0221\7V\2\2\u0221\u0222\7\16\2\2\u0222\u0223\5*\26\2\u0223\u0224"+
		"\7\17\2\2\u0224\u0225\5B\"\2\u0225A\3\2\2\2\u0226\u0228\7\20\2\2\u0227"+
		"\u0229\5D#\2\u0228\u0227\3\2\2\2\u0228\u0229\3\2\2\2\u0229\u022e\3\2\2"+
		"\2\u022a\u022c\5H%\2\u022b\u022d\5D#\2\u022c\u022b\3\2\2\2\u022c\u022d"+
		"\3\2\2\2\u022d\u022f\3\2\2\2\u022e\u022a\3\2\2\2\u022e\u022f\3\2\2\2\u022f"+
		"\u0230\3\2\2\2\u0230\u0231\7\21\2\2\u0231C\3\2\2\2\u0232\u0234\5F$\2\u0233"+
		"\u0232\3\2\2\2\u0234\u0235\3\2\2\2\u0235\u0233\3\2\2\2\u0235\u0236\3\2"+
		"\2\2\u0236E\3\2\2\2\u0237\u0238\7W\2\2\u0238\u0239\5*\26\2\u0239\u023b"+
		"\7\26\2\2\u023a\u023c\5\4\3\2\u023b\u023a\3\2\2\2\u023b\u023c\3\2\2\2"+
		"\u023cG\3\2\2\2\u023d\u023e\7X\2\2\u023e\u0240\7\26\2\2\u023f\u0241\5"+
		"\4\3\2\u0240\u023f\3\2\2\2\u0240\u0241\3\2\2\2\u0241I\3\2\2\2\u0242\u0247"+
		"\5f\64\2\u0243\u0244\7\23\2\2\u0244\u0246\5f\64\2\u0245\u0243\3\2\2\2"+
		"\u0246\u0249\3\2\2\2\u0247\u0245\3\2\2\2\u0247\u0248\3\2\2\2\u0248K\3"+
		"\2\2\2\u0249\u0247\3\2\2\2\u024a\u024c\7d\2\2\u024b\u024a\3\2\2\2\u024b"+
		"\u024c\3\2\2\2\u024c\u024d\3\2\2\2\u024d\u024e\7e\2\2\u024e\u024f\5\u0092"+
		"J\2\u024f\u0251\7\16\2\2\u0250\u0252\5J&\2\u0251\u0250\3\2\2\2\u0251\u0252"+
		"\3\2\2\2\u0252\u0253\3\2\2\2\u0253\u0254\7\17\2\2\u0254\u0255\5r:\2\u0255"+
		"M\3\2\2\2\u0256\u0257\7e\2\2\u0257\u0258\5\u0092J\2\u0258\u025a\7\16\2"+
		"\2\u0259\u025b\5J&\2\u025a\u0259\3\2\2\2\u025a\u025b\3\2\2\2\u025b\u025c"+
		"\3\2\2\2\u025c\u025d\7\17\2\2\u025d\u025e\5r:\2\u025eO\3\2\2\2\u025f\u0268"+
		"\7\16\2\2\u0260\u0265\5 \21\2\u0261\u0262\7\23\2\2\u0262\u0264\5 \21\2"+
		"\u0263\u0261\3\2\2\2\u0264\u0267\3\2\2\2\u0265\u0263\3\2\2\2\u0265\u0266"+
		"\3\2\2\2\u0266\u0269\3\2\2\2\u0267\u0265\3\2\2\2\u0268\u0260\3\2\2\2\u0268"+
		"\u0269\3\2\2\2\u0269\u026a\3\2\2\2\u026a\u026b\7\17\2\2\u026bQ\3\2\2\2"+
		"\u026c\u026d\t\16\2\2\u026dS\3\2\2\2\u026e\u0270\7d\2\2\u026f\u026e\3"+
		"\2\2\2\u026f\u0270\3\2\2\2\u0270\u0271\3\2\2\2\u0271\u0272\7p\2\2\u0272"+
		"\u0275\5\u0092J\2\u0273\u0274\7s\2\2\u0274\u0276\5\u0092J\2\u0275\u0273"+
		"\3\2\2\2\u0275\u0276\3\2\2\2\u0276\u0277\3\2\2\2\u0277\u0283\7\20\2\2"+
		"\u0278\u0279\7t\2\2\u0279\u027b\7\26\2\2\u027a\u0278\3\2\2\2\u027a\u027b"+
		"\3\2\2\2\u027b\u0281\3\2\2\2\u027c\u027d\7\20\2\2\u027d\u027e\5V,\2\u027e"+
		"\u027f\7\21\2\2\u027f\u0282\3\2\2\2\u0280\u0282\5V,\2\u0281\u027c\3\2"+
		"\2\2\u0281\u0280\3\2\2\2\u0282\u0284\3\2\2\2\u0283\u027a\3\2\2\2\u0283"+
		"\u0284\3\2\2\2\u0284\u0285\3\2\2\2\u0285\u0291\5\u0098M\2\u0286\u0287"+
		"\7u\2\2\u0287\u0289\7\26\2\2\u0288\u0286\3\2\2\2\u0288\u0289\3\2\2\2\u0289"+
		"\u028f\3\2\2\2\u028a\u0290\5^\60\2\u028b\u028c\7\20\2\2\u028c\u028d\5"+
		"^\60\2\u028d\u028e\7\21\2\2\u028e\u0290\3\2\2\2\u028f\u028a\3\2\2\2\u028f"+
		"\u028b\3\2\2\2\u0290\u0292\3\2\2\2\u0291\u0288\3\2\2\2\u0291\u0292\3\2"+
		"\2\2\u0292\u0293\3\2\2\2\u0293\u0294\7\21\2\2\u0294U\3\2\2\2\u0295\u0297"+
		"\5X-\2\u0296\u0295\3\2\2\2\u0297\u0298\3\2\2\2\u0298\u0296\3\2\2\2\u0298"+
		"\u0299\3\2\2\2\u0299W\3\2\2\2\u029a\u029c\5R*\2\u029b\u029a\3\2\2\2\u029b"+
		"\u029c\3\2\2\2\u029c\u029d\3\2\2\2\u029d\u02a2\5l\67\2\u029e\u029f\7\23"+
		"\2\2\u029f\u02a1\5l\67\2\u02a0\u029e\3\2\2\2\u02a1\u02a4\3\2\2\2\u02a2"+
		"\u02a0\3\2\2\2\u02a2\u02a3\3\2\2\2\u02a3Y\3\2\2\2\u02a4\u02a2\3\2\2\2"+
		"\u02a5\u02a7\5R*\2\u02a6\u02a5\3\2\2\2\u02a6\u02a7\3\2\2\2\u02a7\u02a9"+
		"\3\2\2\2\u02a8\u02aa\t\17\2\2\u02a9\u02a8\3\2\2\2\u02a9\u02aa\3\2\2\2"+
		"\u02aa\u02ab\3\2\2\2\u02ab\u02ac\5\\/\2\u02ac\u02ae\7\16\2\2\u02ad\u02af"+
		"\5J&\2\u02ae\u02ad\3\2\2\2\u02ae\u02af\3\2\2\2\u02af\u02b0\3\2\2\2\u02b0"+
		"\u02b1\7\17\2\2\u02b1\u02b2\5r:\2\u02b2[\3\2\2\2\u02b3\u02b6\5\u0092J"+
		"\2\u02b4\u02b6\7w\2\2\u02b5\u02b3\3\2\2\2\u02b5\u02b4\3\2\2\2\u02b6]\3"+
		"\2\2\2\u02b7\u02b9\5Z.\2\u02b8\u02b7\3\2\2\2\u02b9\u02ba\3\2\2\2\u02ba"+
		"\u02b8\3\2\2\2\u02ba\u02bb\3\2\2\2\u02bb_\3\2\2\2\u02bc\u02be\7r\2\2\u02bd"+
		"\u02bf\7q\2\2\u02be\u02bd\3\2\2\2\u02be\u02bf\3\2\2\2\u02bf\u02c4\3\2"+
		"\2\2\u02c0\u02c2\7]\2\2\u02c1\u02c3\7p\2\2\u02c2\u02c1\3\2\2\2\u02c2\u02c3"+
		"\3\2\2\2\u02c3\u02c5\3\2\2\2\u02c4\u02c0\3\2\2\2\u02c4\u02c5\3\2\2\2\u02c5"+
		"\u02c6\3\2\2\2\u02c6\u02c7\7\u0083\2\2\u02c7\u02c8\5P)\2\u02c8a\3\2\2"+
		"\2\u02c9\u02cb\7\f\2\2\u02ca\u02cc\5 \21\2\u02cb\u02ca\3\2\2\2\u02cb\u02cc"+
		"\3\2\2\2\u02cc\u02cd\3\2\2\2\u02cd\u02ce\7\r\2\2\u02cec\3\2\2\2\u02cf"+
		"\u02d1\5b\62\2\u02d0\u02cf\3\2\2\2\u02d1\u02d2\3\2\2\2\u02d2\u02d0\3\2"+
		"\2\2\u02d2\u02d3\3\2\2\2\u02d3e\3\2\2\2\u02d4\u02d7\5\u0094K\2\u02d5\u02d6"+
		"\7\24\2\2\u02d6\u02d8\5 \21\2\u02d7\u02d5\3\2\2\2\u02d7\u02d8\3\2\2\2"+
		"\u02d8g\3\2\2\2\u02d9\u02da\5n8\2\u02da\u02db\5\u0098M\2\u02dbi\3\2\2"+
		"\2\u02dc\u02dd\t\20\2\2\u02ddk\3\2\2\2\u02de\u02e1\5\u0094K\2\u02df\u02e0"+
		"\7\24\2\2\u02e0\u02e2\5 \21\2\u02e1\u02df\3\2\2\2\u02e1\u02e2\3\2\2\2"+
		"\u02e2m\3\2\2\2\u02e3\u02e4\5p9\2\u02e4\u02e9\5l\67\2\u02e5\u02e6\7\23"+
		"\2\2\u02e6\u02e8\5l\67\2\u02e7\u02e5\3\2\2\2\u02e8\u02eb\3\2\2\2\u02e9"+
		"\u02e7\3\2\2\2\u02e9\u02ea\3\2\2\2\u02eao\3\2\2\2\u02eb\u02e9\3\2\2\2"+
		"\u02ec\u02f4\7d\2\2\u02ed\u02ee\7d\2\2\u02ee\u02f4\7~\2\2\u02ef\u02f0"+
		"\7d\2\2\u02f0\u02f4\7\177\2\2\u02f1\u02f4\7~\2\2\u02f2\u02f4\7\177\2\2"+
		"\u02f3\u02ec\3\2\2\2\u02f3\u02ed\3\2\2\2\u02f3\u02ef\3\2\2\2\u02f3\u02f1"+
		"\3\2\2\2\u02f3\u02f2\3\2\2\2\u02f4q\3\2\2\2\u02f5\u02f8\5\16\b\2\u02f6"+
		"\u02f8\5\6\4\2\u02f7\u02f5\3\2\2\2\u02f7\u02f6\3\2\2\2\u02f8s\3\2\2\2"+
		"\u02f9\u02fa\7e\2\2\u02fa\u02fc\7\16\2\2\u02fb\u02fd\5J&\2\u02fc\u02fb"+
		"\3\2\2\2\u02fc\u02fd\3\2\2\2\u02fd\u02fe\3\2\2\2\u02fe\u02ff\7\17\2\2"+
		"\u02ff\u0305\5r:\2\u0300\u0301\5v<\2\u0301\u0302\7A\2\2\u0302\u0303\5"+
		"x=\2\u0303\u0305\3\2\2\2\u0304\u02f9\3\2\2\2\u0304\u0300\3\2\2\2\u0305"+
		"u\3\2\2\2\u0306\u030d\5\u0094K\2\u0307\u0309\7\16\2\2\u0308\u030a\5J&"+
		"\2\u0309\u0308\3\2\2\2\u0309\u030a\3\2\2\2\u030a\u030b\3\2\2\2\u030b\u030d"+
		"\7\17\2\2\u030c\u0306\3\2\2\2\u030c\u0307\3\2\2\2\u030dw\3\2\2\2\u030e"+
		"\u0311\5 \21\2\u030f\u0311\5r:\2\u0310\u030e\3\2\2\2\u0310\u030f\3\2\2"+
		"\2\u0311y\3\2\2\2\u0312\u0313\t\21\2\2\u0313{\3\2\2\2\u0314\u0318\5\u0096"+
		"L\2\u0315\u0318\7C\2\2\u0316\u0318\7M\2\2\u0317\u0314\3\2\2\2\u0317\u0315"+
		"\3\2\2\2\u0317\u0316\3\2\2\2\u0318}\3\2\2\2\u0319\u031a\7r\2\2\u031a\u031b"+
		"\7z\2\2\u031b\u031d\7\16\2\2\u031c\u031e\5\u0080A\2\u031d\u031c\3\2\2"+
		"\2\u031d\u031e\3\2\2\2\u031e\u031f\3\2\2\2\u031f\u0320\7\17\2\2\u0320"+
		"\177\3\2\2\2\u0321\u032a\7\f\2\2\u0322\u0327\5 \21\2\u0323\u0324\7\23"+
		"\2\2\u0324\u0326\5 \21\2\u0325\u0323\3\2\2\2\u0326\u0329\3\2\2\2\u0327"+
		"\u0325\3\2\2\2\u0327\u0328\3\2\2\2\u0328\u032b\3\2\2\2\u0329\u0327\3\2"+
		"\2\2\u032a\u0322\3\2\2\2\u032a\u032b\3\2\2\2\u032b\u032c\3\2\2\2\u032c"+
		"\u032d\7\r\2\2\u032d\u0081\3\2\2\2\u032e\u0334\5\u0094K\2\u032f\u0334"+
		"\5j\66\2\u0330\u0334\5\u008cG\2\u0331\u0334\5\u0090I\2\u0332\u0334\5\u008a"+
		"F\2\u0333\u032e\3\2\2\2\u0333\u032f\3\2\2\2\u0333\u0330\3\2\2\2\u0333"+
		"\u0331\3\2\2\2\u0333\u0332\3\2\2\2\u0334\u0083\3\2\2\2\u0335\u0343\7\20"+
		"\2\2\u0336\u0337\5\u0082B\2\u0337\u0338\7\26\2\2\u0338\u0340\5 \21\2\u0339"+
		"\u033a\7\23\2\2\u033a\u033b\5\u0082B\2\u033b\u033c\7\26\2\2\u033c\u033d"+
		"\5 \21\2\u033d\u033f\3\2\2\2\u033e\u0339\3\2\2\2\u033f\u0342\3\2\2\2\u0340"+
		"\u033e\3\2\2\2\u0340\u0341\3\2\2\2\u0341\u0344\3\2\2\2\u0342\u0340\3\2"+
		"\2\2\u0343\u0336\3\2\2\2\u0343\u0344\3\2\2\2\u0344\u0345\3\2\2\2\u0345"+
		"\u0346\7\21\2\2\u0346\u0085\3\2\2\2\u0347\u0350\5\u008eH\2\u0348\u0350"+
		"\5\u008aF\2\u0349\u0350\5\u008cG\2\u034a\u0350\5\u0090I\2\u034b\u0350"+
		"\5\u0080A\2\u034c\u0350\5\u0084C\2\u034d\u0350\5~@\2\u034e\u0350\5\u0088"+
		"E\2\u034f\u0347\3\2\2\2\u034f\u0348\3\2\2\2\u034f\u0349\3\2\2\2\u034f"+
		"\u034a\3\2\2\2\u034f\u034b\3\2\2\2\u034f\u034c\3\2\2\2\u034f\u034d\3\2"+
		"\2\2\u034f\u034e\3\2\2\2\u0350\u0087\3\2\2\2\u0351\u0352\7\n\2\2\u0352"+
		"\u0089\3\2\2\2\u0353\u0354\7M\2\2\u0354\u008b\3\2\2\2\u0355\u0356\7\u0084"+
		"\2\2\u0356\u008d\3\2\2\2\u0357\u0358\7C\2\2\u0358\u008f\3\2\2\2\u0359"+
		"\u035a\t\22\2\2\u035a\u0091\3\2\2\2\u035b\u035c\7\u0083\2\2\u035c\u0093"+
		"\3\2\2\2\u035d\u0360\5\u0092J\2\u035e\u0360\5j\66\2\u035f\u035d\3\2\2"+
		"\2\u035f\u035e\3\2\2\2\u0360\u0095\3\2\2\2\u0361\u0362\t\23\2\2\u0362"+
		"\u0097\3\2\2\2\u0363\u0368\7\22\2\2\u0364\u0368\7\2\2\3\u0365\u0368\6"+
		"M\27\2\u0366\u0368\6M\30\2\u0367\u0363\3\2\2\2\u0367\u0364\3\2\2\2\u0367"+
		"\u0365\3\2\2\2\u0367\u0366\3\2\2\2\u0368\u0099\3\2\2\2f\u009b\u00a2\u00a6"+
		"\u00b0\u00b8\u00bc\u00d3\u00d9\u00db\u00e3\u00e7\u00e9\u00f2\u0109\u010b"+
		"\u0113\u013c\u016d\u016f\u0179\u0180\u0187\u018d\u0191\u0195\u0198\u019d"+
		"\u01a2\u01b3\u01b6\u01c1\u01cb\u01d0\u01d7\u01db\u01df\u01e6\u01ef\u01f5"+
		"\u01f8\u01fc\u0202\u0205\u020b\u020f\u0213\u021e\u0228\u022c\u022e\u0235"+
		"\u023b\u0240\u0247\u024b\u0251\u025a\u0265\u0268\u026f\u0275\u027a\u0281"+
		"\u0283\u0288\u028f\u0291\u0298\u029b\u02a2\u02a6\u02a9\u02ae\u02b5\u02ba"+
		"\u02be\u02c2\u02c4\u02cb\u02d2\u02d7\u02e1\u02e9\u02f3\u02f7\u02fc\u0304"+
		"\u0309\u030c\u0310\u0317\u031d\u0327\u032a\u0333\u0340\u0343\u034f\u035f"+
		"\u0367";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}