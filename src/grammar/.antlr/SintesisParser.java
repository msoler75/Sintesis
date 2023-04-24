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
		SingleLineCommentJs=6, SingleLineCommentPy=7, JavascriptCode=8, OpenBracket=9, 
		CloseBracket=10, OpenParen=11, CloseParen=12, OpenBrace=13, CloseBrace=14, 
		SemiColon=15, Comma=16, Assign=17, QuestionMark=18, Colon=19, Ellipsis=20, 
		Dot=21, PlusPlus=22, MinusMinus=23, Plus=24, Minus=25, BitNot=26, Not=27, 
		Multiply=28, Divide=29, Modulus=30, Power=31, NullCoalesce=32, Hashtag=33, 
		RightShiftArithmetic=34, LeftShiftArithmetic=35, RightShiftLogical=36, 
		LessThan=37, MoreThan=38, LessThanEquals=39, GreaterThanEquals=40, Equals_=41, 
		NotEquals=42, IdentityEquals=43, IdentityNotEquals=44, BitAnd=45, BitXOr=46, 
		BitOr=47, And=48, Or=49, MultiplyAssign=50, DivideAssign=51, ModulusAssign=52, 
		PlusAssign=53, MinusAssign=54, LeftShiftArithmeticAssign=55, RightShiftArithmeticAssign=56, 
		RightShiftLogicalAssign=57, BitAndAssign=58, BitXorAssign=59, BitOrAssign=60, 
		PowerAssign=61, ARROW=62, PieceOfCode=63, NullLiteral=64, DecimalLiteral=65, 
		HexIntegerLiteral=66, OctalIntegerLiteral=67, OctalIntegerLiteral2=68, 
		BinaryIntegerLiteral=69, BigHexIntegerLiteral=70, BigOctalIntegerLiteral=71, 
		BigBinaryIntegerLiteral=72, BigDecimalIntegerLiteral=73, BooleanLiteral=74, 
		Step=75, Print=76, While=77, Repeat=78, Times=79, Do=80, Continue=81, 
		Break=82, Switch=83, Case=84, Default=85, Each=86, ForEach=87, For=88, 
		In=89, Of=90, To=91, If=92, Then=93, ElseIf=94, Else=95, Return=96, Declare=97, 
		Function_=98, Delete=99, NumberOf=100, IndexOf=101, Sub=102, Lower=103, 
		Upper=104, Math=105, Min=106, Max=107, Random=108, Chr=109, Ord=110, Prompt=111, 
		Convert=112, Class_=113, Instance=114, New_=115, Extends=116, Attributes=117, 
		Methods=118, Method=119, Constructor=120, Super=121, InstanceOf=122, List=123, 
		Dictionary=124, Get=125, Set=126, Var_=127, Const_=128, Private=129, Public=130, 
		Protected=131, Identifier=132, StringLiteral=133, WhiteSpaces=134, LineTerminator=135;
	public static final int
		RULE_program = 0, RULE_statementList = 1, RULE_statement = 2, RULE_simpleStatement = 3, 
		RULE_compoundStatement = 4, RULE_blockJS = 5, RULE_block = 6, RULE_stepStatement = 7, 
		RULE_emptyStatement_ = 8, RULE_printStatement = 9, RULE_expressionStatement = 10, 
		RULE_methodCall = 11, RULE_superSuffix = 12, RULE_member = 13, RULE_memberIdentifier = 14, 
		RULE_singleExpression = 15, RULE_basicFunction0 = 16, RULE_basicFunction1 = 17, 
		RULE_basicFunction2 = 18, RULE_basicFunction3 = 19, RULE_basicFunction = 20, 
		RULE_expressionSequence = 21, RULE_ifStatement = 22, RULE_elseIfs = 23, 
		RULE_elseIf = 24, RULE_iteratorIndexes = 25, RULE_iteratorRange = 26, 
		RULE_iterationStatement = 27, RULE_forPre = 28, RULE_continueStatement = 29, 
		RULE_breakStatement = 30, RULE_returnStatement = 31, RULE_switchStatement = 32, 
		RULE_caseBlock = 33, RULE_caseClauses = 34, RULE_caseClause = 35, RULE_defaultClause = 36, 
		RULE_formalParameterList = 37, RULE_functionDeclaration = 38, RULE_functionDeclarationExpr = 39, 
		RULE_arguments = 40, RULE_visibility = 41, RULE_classDeclaration = 42, 
		RULE_attributesList = 43, RULE_classAttributeDecl = 44, RULE_methodDeclaration = 45, 
		RULE_methodName = 46, RULE_methodsList = 47, RULE_classExp = 48, RULE_listIndex = 49, 
		RULE_listIndexes = 50, RULE_formalParameterArg = 51, RULE_variableStatement = 52, 
		RULE_reservedIdentifier = 53, RULE_variableDeclaration = 54, RULE_variableDeclarationList = 55, 
		RULE_varModifier = 56, RULE_functionBody = 57, RULE_anonymousFunction = 58, 
		RULE_arrowFunctionParameters = 59, RULE_arrowFunctionBody = 60, RULE_assignmentOperator = 61, 
		RULE_reservedWord = 62, RULE_listDeclaration = 63, RULE_listLiteral = 64, 
		RULE_objectKey = 65, RULE_objectLiteral = 66, RULE_literal = 67, RULE_booleanLiteral = 68, 
		RULE_stringLiteral = 69, RULE_nullLiteral = 70, RULE_numericLiteral = 71, 
		RULE_identifier = 72, RULE_safeKeyword = 73, RULE_eos = 74;
	private static String[] makeRuleNames() {
		return new String[] {
			"program", "statementList", "statement", "simpleStatement", "compoundStatement", 
			"blockJS", "block", "stepStatement", "emptyStatement_", "printStatement", 
			"expressionStatement", "methodCall", "superSuffix", "member", "memberIdentifier", 
			"singleExpression", "basicFunction0", "basicFunction1", "basicFunction2", 
			"basicFunction3", "basicFunction", "expressionSequence", "ifStatement", 
			"elseIfs", "elseIf", "iteratorIndexes", "iteratorRange", "iterationStatement", 
			"forPre", "continueStatement", "breakStatement", "returnStatement", "switchStatement", 
			"caseBlock", "caseClauses", "caseClause", "defaultClause", "formalParameterList", 
			"functionDeclaration", "functionDeclarationExpr", "arguments", "visibility", 
			"classDeclaration", "attributesList", "classAttributeDecl", "methodDeclaration", 
			"methodName", "methodsList", "classExp", "listIndex", "listIndexes", 
			"formalParameterArg", "variableStatement", "reservedIdentifier", "variableDeclaration", 
			"variableDeclarationList", "varModifier", "functionBody", "anonymousFunction", 
			"arrowFunctionParameters", "arrowFunctionBody", "assignmentOperator", 
			"reservedWord", "listDeclaration", "listLiteral", "objectKey", "objectLiteral", 
			"literal", "booleanLiteral", "stringLiteral", "nullLiteral", "numericLiteral", 
			"identifier", "safeKeyword", "eos"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, null, null, null, null, null, null, null, null, "'['", "']'", "'('", 
			"')'", "'{'", "'}'", "';'", "','", null, "'?'", "':'", "'...'", "'.'", 
			"'++'", "'--'", "'+'", "'-'", "'~'", null, "'*'", "'/'", "'%'", "'**'", 
			"'??'", "'#'", "'>>'", "'<<'", "'>>>'", "'<'", "'>'", "'<='", "'>='", 
			"'=='", null, "'==='", "'!=='", "'&'", "'^'", "'|'", null, null, "'*='", 
			"'/='", "'%='", "'+='", "'-='", "'<<='", "'>>='", "'>>>='", "'&='", "'^='", 
			"'|='", "'**='", null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, "'sub'", null, null, null, 
			null, null, null, "'chr'", "'ord'", null, null, null, null, null, null, 
			null, null, null, null, "'super'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "INDENT", "DEDENT", "MultiLineCommentJS", "MultiLineCommentPy", 
			"MultiLineCommentPy2", "SingleLineCommentJs", "SingleLineCommentPy", 
			"JavascriptCode", "OpenBracket", "CloseBracket", "OpenParen", "CloseParen", 
			"OpenBrace", "CloseBrace", "SemiColon", "Comma", "Assign", "QuestionMark", 
			"Colon", "Ellipsis", "Dot", "PlusPlus", "MinusMinus", "Plus", "Minus", 
			"BitNot", "Not", "Multiply", "Divide", "Modulus", "Power", "NullCoalesce", 
			"Hashtag", "RightShiftArithmetic", "LeftShiftArithmetic", "RightShiftLogical", 
			"LessThan", "MoreThan", "LessThanEquals", "GreaterThanEquals", "Equals_", 
			"NotEquals", "IdentityEquals", "IdentityNotEquals", "BitAnd", "BitXOr", 
			"BitOr", "And", "Or", "MultiplyAssign", "DivideAssign", "ModulusAssign", 
			"PlusAssign", "MinusAssign", "LeftShiftArithmeticAssign", "RightShiftArithmeticAssign", 
			"RightShiftLogicalAssign", "BitAndAssign", "BitXorAssign", "BitOrAssign", 
			"PowerAssign", "ARROW", "PieceOfCode", "NullLiteral", "DecimalLiteral", 
			"HexIntegerLiteral", "OctalIntegerLiteral", "OctalIntegerLiteral2", "BinaryIntegerLiteral", 
			"BigHexIntegerLiteral", "BigOctalIntegerLiteral", "BigBinaryIntegerLiteral", 
			"BigDecimalIntegerLiteral", "BooleanLiteral", "Step", "Print", "While", 
			"Repeat", "Times", "Do", "Continue", "Break", "Switch", "Case", "Default", 
			"Each", "ForEach", "For", "In", "Of", "To", "If", "Then", "ElseIf", "Else", 
			"Return", "Declare", "Function_", "Delete", "NumberOf", "IndexOf", "Sub", 
			"Lower", "Upper", "Math", "Min", "Max", "Random", "Chr", "Ord", "Prompt", 
			"Convert", "Class_", "Instance", "New_", "Extends", "Attributes", "Methods", 
			"Method", "Constructor", "Super", "InstanceOf", "List", "Dictionary", 
			"Get", "Set", "Var_", "Const_", "Private", "Public", "Protected", "Identifier", 
			"StringLiteral", "WhiteSpaces", "LineTerminator"
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
			setState(151);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,0,_ctx) ) {
			case 1:
				{
				setState(150);
				statementList();
				}
				break;
			}
			setState(153);
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
			setState(156); 
			_errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					setState(155);
					statement();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(158); 
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
			setState(162);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,2,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(160);
				simpleStatement();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(161);
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
			setState(172);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,3,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(164);
				variableStatement();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(165);
				emptyStatement_();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(166);
				stepStatement();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(167);
				printStatement();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(168);
				continueStatement();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(169);
				breakStatement();
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(170);
				returnStatement();
				}
				break;
			case 8:
				enterOuterAlt(_localctx, 8);
				{
				setState(171);
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
			setState(180);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,4,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(174);
				block();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(175);
				classDeclaration();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(176);
				ifStatement();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(177);
				iterationStatement();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(178);
				functionDeclaration();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(179);
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
			setState(182);
			match(OpenBrace);
			setState(184);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,5,_ctx) ) {
			case 1:
				{
				setState(183);
				((BlockJSContext)_localctx).stmt = statementList();
				}
				break;
			}
			setState(186);
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
			setState(188);
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
		public Token exp;
		public TerminalNode Step() { return getToken(SintesisParser.Step, 0); }
		public TerminalNode Identifier() { return getToken(SintesisParser.Identifier, 0); }
		public TerminalNode DecimalLiteral() { return getToken(SintesisParser.DecimalLiteral, 0); }
		public StepStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_stepStatement; }
	}

	public final StepStatementContext stepStatement() throws RecognitionException {
		StepStatementContext _localctx = new StepStatementContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_stepStatement);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(190);
			match(Step);
			setState(191);
			((StepStatementContext)_localctx).exp = _input.LT(1);
			_la = _input.LA(1);
			if ( !(_la==DecimalLiteral || _la==Identifier) ) {
				((StepStatementContext)_localctx).exp = (Token)_errHandler.recoverInline(this);
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
			setState(193);
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
			setState(195);
			match(Print);
			setState(196);
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
			setState(198);
			if (!(this.notOpenBraceAndNotFunction())) throw new FailedPredicateException(this, "this.notOpenBraceAndNotFunction()");
			setState(199);
			expressionSequence();
			setState(200);
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
			setState(207);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case Identifier:
				enterOuterAlt(_localctx, 1);
				{
				setState(202);
				identifier();
				setState(203);
				arguments();
				}
				break;
			case Super:
				enterOuterAlt(_localctx, 2);
				{
				setState(205);
				match(Super);
				setState(206);
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
			setState(215);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case OpenParen:
				enterOuterAlt(_localctx, 1);
				{
				setState(209);
				arguments();
				}
				break;
			case Dot:
				enterOuterAlt(_localctx, 2);
				{
				setState(210);
				match(Dot);
				setState(211);
				identifier();
				setState(213);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==OpenParen) {
					{
					setState(212);
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
			setState(235);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case Attributes:
				{
				_localctx = new ExpAttributesContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;

				setState(218);
				match(Attributes);
				}
				break;
			case Methods:
				{
				_localctx = new ExpMethodsContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(219);
				match(Methods);
				}
				break;
			case Super:
				{
				_localctx = new ExpSuperContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(220);
				match(Super);
				}
				break;
			case New_:
				{
				_localctx = new ExpNewContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(221);
				match(New_);
				setState(223);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==Instance) {
					{
					setState(222);
					match(Instance);
					}
				}

				setState(229);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==Of) {
					{
					setState(225);
					match(Of);
					setState(227);
					_errHandler.sync(this);
					_la = _input.LA(1);
					if (_la==Class_) {
						{
						setState(226);
						match(Class_);
						}
					}

					}
				}

				setState(231);
				((ExpNewContext)_localctx).id = match(Identifier);
				setState(232);
				((ExpNewContext)_localctx).args = arguments();
				}
				break;
			case Identifier:
				{
				_localctx = new ExpIdentifierContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(233);
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
			case InstanceOf:
				{
				_localctx = new ExpReservedIdentifierContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(234);
				reservedIdentifier();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			_ctx.stop = _input.LT(-1);
			setState(260);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,14,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(258);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,13,_ctx) ) {
					case 1:
						{
						_localctx = new ExpMemberDotContext(new MemberContext(_parentctx, _parentState));
						((ExpMemberDotContext)_localctx).mem = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_member);
						setState(237);
						if (!(precpred(_ctx, 7))) throw new FailedPredicateException(this, "precpred(_ctx, 7)");
						setState(238);
						match(Dot);
						setState(239);
						((ExpMemberDotContext)_localctx).idx = memberIdentifier();
						setState(240);
						((ExpMemberDotContext)_localctx).args = arguments();
						}
						break;
					case 2:
						{
						_localctx = new ExpMemberDotContext(new MemberContext(_parentctx, _parentState));
						((ExpMemberDotContext)_localctx).mem = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_member);
						setState(242);
						if (!(precpred(_ctx, 6))) throw new FailedPredicateException(this, "precpred(_ctx, 6)");
						setState(243);
						match(Dot);
						setState(244);
						((ExpMemberDotContext)_localctx).idx = memberIdentifier();
						}
						break;
					case 3:
						{
						_localctx = new ExpMemberIndexContext(new MemberContext(_parentctx, _parentState));
						((ExpMemberIndexContext)_localctx).mem = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_member);
						setState(245);
						if (!(precpred(_ctx, 5))) throw new FailedPredicateException(this, "precpred(_ctx, 5)");
						setState(246);
						match(OpenBracket);
						setState(247);
						((ExpMemberIndexContext)_localctx).idx = singleExpression(0);
						setState(248);
						match(CloseBracket);
						setState(249);
						((ExpMemberIndexContext)_localctx).args = arguments();
						}
						break;
					case 4:
						{
						_localctx = new ExpMemberIndexContext(new MemberContext(_parentctx, _parentState));
						((ExpMemberIndexContext)_localctx).mem = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_member);
						setState(251);
						if (!(precpred(_ctx, 4))) throw new FailedPredicateException(this, "precpred(_ctx, 4)");
						setState(252);
						match(OpenBracket);
						setState(253);
						((ExpMemberIndexContext)_localctx).idx = singleExpression(0);
						setState(254);
						match(CloseBracket);
						}
						break;
					case 5:
						{
						_localctx = new ExpMemberFuncContext(new MemberContext(_parentctx, _parentState));
						((ExpMemberFuncContext)_localctx).mem = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_member);
						setState(256);
						if (!(precpred(_ctx, 3))) throw new FailedPredicateException(this, "precpred(_ctx, 3)");
						setState(257);
						((ExpMemberFuncContext)_localctx).args = arguments();
						}
						break;
					}
					} 
				}
				setState(262);
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
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public ReservedIdentifierContext reservedIdentifier() {
			return getRuleContext(ReservedIdentifierContext.class,0);
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
			setState(269);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case Attributes:
				enterOuterAlt(_localctx, 1);
				{
				setState(263);
				match(Attributes);
				}
				break;
			case Methods:
				enterOuterAlt(_localctx, 2);
				{
				setState(264);
				match(Methods);
				}
				break;
			case Super:
				enterOuterAlt(_localctx, 3);
				{
				setState(265);
				match(Super);
				}
				break;
			case Constructor:
				enterOuterAlt(_localctx, 4);
				{
				setState(266);
				match(Constructor);
				}
				break;
			case Identifier:
				enterOuterAlt(_localctx, 5);
				{
				setState(267);
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
			case InstanceOf:
				enterOuterAlt(_localctx, 6);
				{
				setState(268);
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
		public StringLiteralContext key;
		public Token op;
		public SingleExpressionContext dest;
		public StringLiteralContext stringLiteral() {
			return getRuleContext(StringLiteralContext.class,0);
		}
		public TerminalNode In() { return getToken(SintesisParser.In, 0); }
		public SingleExpressionContext singleExpression() {
			return getRuleContext(SingleExpressionContext.class,0);
		}
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
		public Token mem;
		public ArgumentsContext args;
		public TerminalNode Math() { return getToken(SintesisParser.Math, 0); }
		public TerminalNode Dot() { return getToken(SintesisParser.Dot, 0); }
		public ArgumentsContext arguments() {
			return getRuleContext(ArgumentsContext.class,0);
		}
		public TerminalNode Identifier() { return getToken(SintesisParser.Identifier, 0); }
		public TerminalNode Min() { return getToken(SintesisParser.Min, 0); }
		public TerminalNode Max() { return getToken(SintesisParser.Max, 0); }
		public TerminalNode Random() { return getToken(SintesisParser.Random, 0); }
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
			setState(313);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,16,_ctx) ) {
			case 1:
				{
				_localctx = new ExpFunctionExpressionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;

				setState(272);
				anonymousFunction();
				}
				break;
			case 2:
				{
				_localctx = new ExpBasicFunctionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(273);
				((ExpBasicFunctionContext)_localctx).fn = basicFunction();
				setState(274);
				((ExpBasicFunctionContext)_localctx).args = arguments();
				}
				break;
			case 3:
				{
				_localctx = new ExpJavascriptContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(276);
				match(JavascriptCode);
				}
				break;
			case 4:
				{
				_localctx = new ExpMathContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(277);
				match(Math);
				setState(278);
				match(Dot);
				setState(279);
				((ExpMathContext)_localctx).mem = _input.LT(1);
				_la = _input.LA(1);
				if ( !(((((_la - 106)) & ~0x3f) == 0 && ((1L << (_la - 106)) & ((1L << (Min - 106)) | (1L << (Max - 106)) | (1L << (Random - 106)) | (1L << (Identifier - 106)))) != 0)) ) {
					((ExpMathContext)_localctx).mem = (Token)_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(280);
				((ExpMathContext)_localctx).args = arguments();
				}
				break;
			case 5:
				{
				_localctx = new ExpDeleteContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(281);
				((ExpDeleteContext)_localctx).op = match(Delete);
				setState(282);
				((ExpDeleteContext)_localctx).dest = singleExpression(28);
				}
				break;
			case 6:
				{
				_localctx = new ExpPreIncrementContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(283);
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
				setState(284);
				((ExpPreIncrementContext)_localctx).dest = singleExpression(26);
				}
				break;
			case 7:
				{
				_localctx = new ExpUnaryPlusContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(285);
				((ExpUnaryPlusContext)_localctx).op = match(Plus);
				setState(286);
				((ExpUnaryPlusContext)_localctx).dest = singleExpression(25);
				}
				break;
			case 8:
				{
				_localctx = new ExpUnaryMinusContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(287);
				((ExpUnaryMinusContext)_localctx).op = match(Minus);
				setState(288);
				((ExpUnaryMinusContext)_localctx).dest = singleExpression(24);
				}
				break;
			case 9:
				{
				_localctx = new ExpBitNotContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(289);
				((ExpBitNotContext)_localctx).op = match(BitNot);
				setState(290);
				((ExpBitNotContext)_localctx).dest = singleExpression(23);
				}
				break;
			case 10:
				{
				_localctx = new ExpNotContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(291);
				((ExpNotContext)_localctx).op = match(Not);
				setState(292);
				((ExpNotContext)_localctx).dest = singleExpression(22);
				}
				break;
			case 11:
				{
				_localctx = new ExpInContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(293);
				((ExpInContext)_localctx).key = stringLiteral();
				setState(294);
				((ExpInContext)_localctx).op = match(In);
				setState(295);
				((ExpInContext)_localctx).dest = singleExpression(21);
				}
				break;
			case 12:
				{
				_localctx = new ExpAssignmentContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(297);
				((ExpAssignmentContext)_localctx).dest = member(0);
				setState(298);
				match(Assign);
				setState(299);
				((ExpAssignmentContext)_localctx).exp = singleExpression(7);
				}
				break;
			case 13:
				{
				_localctx = new ExpAssignmentOperatorContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(301);
				((ExpAssignmentOperatorContext)_localctx).dest = member(0);
				setState(302);
				((ExpAssignmentOperatorContext)_localctx).op = assignmentOperator();
				setState(303);
				((ExpAssignmentOperatorContext)_localctx).exp = singleExpression(6);
				}
				break;
			case 14:
				{
				_localctx = new ExpVarContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(305);
				variableDeclarationList();
				}
				break;
			case 15:
				{
				_localctx = new ExpParenthesisContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(306);
				match(OpenParen);
				setState(307);
				((ExpParenthesisContext)_localctx).exp = singleExpression(0);
				setState(308);
				match(CloseParen);
				}
				break;
			case 16:
				{
				_localctx = new ExpMemberContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(310);
				member(0);
				}
				break;
			case 17:
				{
				_localctx = new ExpLiteralContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(311);
				literal();
				}
				break;
			case 18:
				{
				_localctx = new ExpPieceOfCodeContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(312);
				match(PieceOfCode);
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(361);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,18,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(359);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,17,_ctx) ) {
					case 1:
						{
						_localctx = new ExpOpContext(new SingleExpressionContext(_parentctx, _parentState));
						((ExpOpContext)_localctx).e1 = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_singleExpression);
						setState(315);
						if (!(precpred(_ctx, 20))) throw new FailedPredicateException(this, "precpred(_ctx, 20)");
						setState(316);
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
						setState(317);
						((ExpOpContext)_localctx).e2 = singleExpression(21);
						}
						break;
					case 2:
						{
						_localctx = new ExpOpContext(new SingleExpressionContext(_parentctx, _parentState));
						((ExpOpContext)_localctx).e1 = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_singleExpression);
						setState(318);
						if (!(precpred(_ctx, 19))) throw new FailedPredicateException(this, "precpred(_ctx, 19)");
						setState(319);
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
						setState(320);
						((ExpOpContext)_localctx).e2 = singleExpression(20);
						}
						break;
					case 3:
						{
						_localctx = new ExpOpContext(new SingleExpressionContext(_parentctx, _parentState));
						((ExpOpContext)_localctx).e1 = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_singleExpression);
						setState(321);
						if (!(precpred(_ctx, 18))) throw new FailedPredicateException(this, "precpred(_ctx, 18)");
						setState(322);
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
						setState(323);
						((ExpOpContext)_localctx).e2 = singleExpression(19);
						}
						break;
					case 4:
						{
						_localctx = new ExpOpContext(new SingleExpressionContext(_parentctx, _parentState));
						((ExpOpContext)_localctx).e1 = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_singleExpression);
						setState(324);
						if (!(precpred(_ctx, 17))) throw new FailedPredicateException(this, "precpred(_ctx, 17)");
						setState(325);
						((ExpOpContext)_localctx).op = match(Power);
						setState(326);
						((ExpOpContext)_localctx).e2 = singleExpression(17);
						}
						break;
					case 5:
						{
						_localctx = new ExpOpContext(new SingleExpressionContext(_parentctx, _parentState));
						((ExpOpContext)_localctx).e1 = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_singleExpression);
						setState(327);
						if (!(precpred(_ctx, 16))) throw new FailedPredicateException(this, "precpred(_ctx, 16)");
						setState(328);
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
						setState(329);
						((ExpOpContext)_localctx).e2 = singleExpression(17);
						}
						break;
					case 6:
						{
						_localctx = new ExpOpContext(new SingleExpressionContext(_parentctx, _parentState));
						((ExpOpContext)_localctx).e1 = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_singleExpression);
						setState(330);
						if (!(precpred(_ctx, 15))) throw new FailedPredicateException(this, "precpred(_ctx, 15)");
						setState(331);
						((ExpOpContext)_localctx).op = match(LessThanEquals);
						setState(332);
						((ExpOpContext)_localctx).e2 = singleExpression(16);
						}
						break;
					case 7:
						{
						_localctx = new ExpOpContext(new SingleExpressionContext(_parentctx, _parentState));
						((ExpOpContext)_localctx).e1 = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_singleExpression);
						setState(333);
						if (!(precpred(_ctx, 14))) throw new FailedPredicateException(this, "precpred(_ctx, 14)");
						setState(334);
						((ExpOpContext)_localctx).op = match(GreaterThanEquals);
						setState(335);
						((ExpOpContext)_localctx).e2 = singleExpression(15);
						}
						break;
					case 8:
						{
						_localctx = new ExpOpContext(new SingleExpressionContext(_parentctx, _parentState));
						((ExpOpContext)_localctx).e1 = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_singleExpression);
						setState(336);
						if (!(precpred(_ctx, 12))) throw new FailedPredicateException(this, "precpred(_ctx, 12)");
						setState(337);
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
						setState(338);
						((ExpOpContext)_localctx).e2 = singleExpression(13);
						}
						break;
					case 9:
						{
						_localctx = new ExpOpContext(new SingleExpressionContext(_parentctx, _parentState));
						((ExpOpContext)_localctx).e1 = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_singleExpression);
						setState(339);
						if (!(precpred(_ctx, 11))) throw new FailedPredicateException(this, "precpred(_ctx, 11)");
						setState(340);
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
						setState(341);
						((ExpOpContext)_localctx).e2 = singleExpression(12);
						}
						break;
					case 10:
						{
						_localctx = new ExpOpContext(new SingleExpressionContext(_parentctx, _parentState));
						((ExpOpContext)_localctx).e1 = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_singleExpression);
						setState(342);
						if (!(precpred(_ctx, 10))) throw new FailedPredicateException(this, "precpred(_ctx, 10)");
						setState(343);
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
						setState(344);
						((ExpOpContext)_localctx).e2 = singleExpression(11);
						}
						break;
					case 11:
						{
						_localctx = new ExpOpContext(new SingleExpressionContext(_parentctx, _parentState));
						((ExpOpContext)_localctx).e1 = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_singleExpression);
						setState(345);
						if (!(precpred(_ctx, 9))) throw new FailedPredicateException(this, "precpred(_ctx, 9)");
						setState(346);
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
						setState(347);
						((ExpOpContext)_localctx).e2 = singleExpression(10);
						}
						break;
					case 12:
						{
						_localctx = new ExpTernaryContext(new SingleExpressionContext(_parentctx, _parentState));
						((ExpTernaryContext)_localctx).cond = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_singleExpression);
						setState(348);
						if (!(precpred(_ctx, 8))) throw new FailedPredicateException(this, "precpred(_ctx, 8)");
						setState(349);
						match(QuestionMark);
						setState(350);
						((ExpTernaryContext)_localctx).ok = singleExpression(0);
						setState(351);
						match(Colon);
						setState(352);
						((ExpTernaryContext)_localctx).no = singleExpression(9);
						}
						break;
					case 13:
						{
						_localctx = new ExpPostIncrementContext(new SingleExpressionContext(_parentctx, _parentState));
						((ExpPostIncrementContext)_localctx).dest = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_singleExpression);
						setState(354);
						if (!(precpred(_ctx, 27))) throw new FailedPredicateException(this, "precpred(_ctx, 27)");
						setState(355);
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
					case 14:
						{
						_localctx = new ExpInstanceOfContext(new SingleExpressionContext(_parentctx, _parentState));
						((ExpInstanceOfContext)_localctx).e1 = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_singleExpression);
						setState(356);
						if (!(precpred(_ctx, 13))) throw new FailedPredicateException(this, "precpred(_ctx, 13)");
						setState(357);
						match(InstanceOf);
						setState(358);
						((ExpInstanceOfContext)_localctx).e2 = identifier();
						}
						break;
					}
					} 
				}
				setState(363);
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
			setState(364);
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
	public static class MinContext extends BasicFunction1Context {
		public TerminalNode Min() { return getToken(SintesisParser.Min, 0); }
		public MinContext(BasicFunction1Context ctx) { copyFrom(ctx); }
	}
	public static class MaxContext extends BasicFunction1Context {
		public TerminalNode Max() { return getToken(SintesisParser.Max, 0); }
		public MaxContext(BasicFunction1Context ctx) { copyFrom(ctx); }
	}
	public static class LowerContext extends BasicFunction1Context {
		public TerminalNode Lower() { return getToken(SintesisParser.Lower, 0); }
		public LowerContext(BasicFunction1Context ctx) { copyFrom(ctx); }
	}
	public static class UpperContext extends BasicFunction1Context {
		public TerminalNode Upper() { return getToken(SintesisParser.Upper, 0); }
		public UpperContext(BasicFunction1Context ctx) { copyFrom(ctx); }
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
				setState(366);
				match(NumberOf);
				}
				break;
			case Lower:
				_localctx = new LowerContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(367);
				match(Lower);
				}
				break;
			case Upper:
				_localctx = new UpperContext(_localctx);
				enterOuterAlt(_localctx, 3);
				{
				setState(368);
				match(Upper);
				}
				break;
			case Max:
				_localctx = new MaxContext(_localctx);
				enterOuterAlt(_localctx, 4);
				{
				setState(369);
				match(Max);
				}
				break;
			case Min:
				_localctx = new MinContext(_localctx);
				enterOuterAlt(_localctx, 5);
				{
				setState(370);
				match(Min);
				}
				break;
			case Ord:
				_localctx = new OrdContext(_localctx);
				enterOuterAlt(_localctx, 6);
				{
				setState(371);
				match(Ord);
				}
				break;
			case Chr:
				_localctx = new ChrContext(_localctx);
				enterOuterAlt(_localctx, 7);
				{
				setState(372);
				match(Chr);
				}
				break;
			case Prompt:
				_localctx = new PromptContext(_localctx);
				enterOuterAlt(_localctx, 8);
				{
				setState(373);
				match(Prompt);
				}
				break;
			case Dictionary:
				_localctx = new DictionaryContext(_localctx);
				enterOuterAlt(_localctx, 9);
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
	public static class IndexOfContext extends BasicFunction2Context {
		public TerminalNode IndexOf() { return getToken(SintesisParser.IndexOf, 0); }
		public IndexOfContext(BasicFunction2Context ctx) { copyFrom(ctx); }
	}

	public final BasicFunction2Context basicFunction2() throws RecognitionException {
		BasicFunction2Context _localctx = new BasicFunction2Context(_ctx, getState());
		enterRule(_localctx, 36, RULE_basicFunction2);
		try {
			setState(379);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case IndexOf:
				_localctx = new IndexOfContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(377);
				match(IndexOf);
				}
				break;
			case Convert:
				_localctx = new ConvertContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(378);
				match(Convert);
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

	public static class BasicFunction3Context extends ParserRuleContext {
		public BasicFunction3Context(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_basicFunction3; }
	 
		public BasicFunction3Context() { }
		public void copyFrom(BasicFunction3Context ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class SubContext extends BasicFunction3Context {
		public TerminalNode Sub() { return getToken(SintesisParser.Sub, 0); }
		public SubContext(BasicFunction3Context ctx) { copyFrom(ctx); }
	}

	public final BasicFunction3Context basicFunction3() throws RecognitionException {
		BasicFunction3Context _localctx = new BasicFunction3Context(_ctx, getState());
		enterRule(_localctx, 38, RULE_basicFunction3);
		try {
			_localctx = new SubContext(_localctx);
			enterOuterAlt(_localctx, 1);
			{
			setState(381);
			match(Sub);
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
		public BasicFunction3Context basicFunction3() {
			return getRuleContext(BasicFunction3Context.class,0);
		}
		public BasicFunctionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_basicFunction; }
	}

	public final BasicFunctionContext basicFunction() throws RecognitionException {
		BasicFunctionContext _localctx = new BasicFunctionContext(_ctx, getState());
		enterRule(_localctx, 40, RULE_basicFunction);
		try {
			setState(387);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case Random:
				enterOuterAlt(_localctx, 1);
				{
				setState(383);
				basicFunction0();
				}
				break;
			case NumberOf:
			case Lower:
			case Upper:
			case Min:
			case Max:
			case Chr:
			case Ord:
			case Prompt:
			case Dictionary:
				enterOuterAlt(_localctx, 2);
				{
				setState(384);
				basicFunction1();
				}
				break;
			case IndexOf:
			case Convert:
				enterOuterAlt(_localctx, 3);
				{
				setState(385);
				basicFunction2();
				}
				break;
			case Sub:
				enterOuterAlt(_localctx, 4);
				{
				setState(386);
				basicFunction3();
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
		enterRule(_localctx, 42, RULE_expressionSequence);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(389);
			singleExpression(0);
			setState(394);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,22,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(390);
					match(Comma);
					setState(391);
					singleExpression(0);
					}
					} 
				}
				setState(396);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,22,_ctx);
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
		enterRule(_localctx, 44, RULE_ifStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(397);
			match(If);
			setState(398);
			((IfStatementContext)_localctx).exp = singleExpression(0);
			setState(400);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,23,_ctx) ) {
			case 1:
				{
				setState(399);
				match(Then);
				}
				break;
			}
			setState(402);
			((IfStatementContext)_localctx).stmt = statement();
			setState(404);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,24,_ctx) ) {
			case 1:
				{
				setState(403);
				((IfStatementContext)_localctx).elseifs = elseIfs();
				}
				break;
			}
			setState(411);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,26,_ctx) ) {
			case 1:
				{
				setState(406);
				match(Else);
				setState(408);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,25,_ctx) ) {
				case 1:
					{
					setState(407);
					match(Then);
					}
					break;
				}
				setState(410);
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
		enterRule(_localctx, 46, RULE_elseIfs);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(414); 
			_errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					setState(413);
					elseIf();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(416); 
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,27,_ctx);
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
		enterRule(_localctx, 48, RULE_elseIf);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(418);
			match(ElseIf);
			setState(419);
			((ElseIfContext)_localctx).exp = singleExpression(0);
			setState(421);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,28,_ctx) ) {
			case 1:
				{
				setState(420);
				match(Then);
				}
				break;
			}
			setState(423);
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
		enterRule(_localctx, 50, RULE_iteratorIndexes);
		int _la;
		try {
			setState(438);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,29,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
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
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(428);
				((IteratorIndexesContext)_localctx).idk = match(Identifier);
				setState(429);
				match(Comma);
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
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(433);
				((IteratorIndexesContext)_localctx).idk = match(Identifier);
				setState(434);
				match(ARROW);
				setState(435);
				((IteratorIndexesContext)_localctx).idv = match(Identifier);
				setState(436);
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
				setState(437);
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
		enterRule(_localctx, 52, RULE_iteratorRange);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(441);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Var_) {
				{
				setState(440);
				((IteratorRangeContext)_localctx).vvar = match(Var_);
				}
			}

			setState(443);
			((IteratorRangeContext)_localctx).id = identifier();
			setState(444);
			_la = _input.LA(1);
			if ( !(_la==Assign || _la==In) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(445);
			((IteratorRangeContext)_localctx).start = singleExpression(0);
			setState(446);
			match(To);
			setState(447);
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
		enterRule(_localctx, 54, RULE_iterationStatement);
		int _la;
		try {
			setState(530);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,45,_ctx) ) {
			case 1:
				_localctx = new RepeatStatementContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(449);
				match(Repeat);
				setState(450);
				((RepeatStatementContext)_localctx).exp = singleExpression(0);
				setState(452);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,31,_ctx) ) {
				case 1:
					{
					setState(451);
					match(Times);
					}
					break;
				}
				setState(454);
				((RepeatStatementContext)_localctx).stmt = statement();
				}
				break;
			case 2:
				_localctx = new RepeatWhileStatementContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(456);
				_la = _input.LA(1);
				if ( !(_la==Repeat || _la==Do) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(457);
				((RepeatWhileStatementContext)_localctx).stmt = statement();
				setState(458);
				match(While);
				setState(459);
				((RepeatWhileStatementContext)_localctx).exp = singleExpression(0);
				}
				break;
			case 3:
				_localctx = new WhileRepeatStatementContext(_localctx);
				enterOuterAlt(_localctx, 3);
				{
				setState(462);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==Repeat) {
					{
					setState(461);
					match(Repeat);
					}
				}

				setState(464);
				match(While);
				setState(465);
				((WhileRepeatStatementContext)_localctx).exp = singleExpression(0);
				setState(467);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,33,_ctx) ) {
				case 1:
					{
					setState(466);
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
				setState(469);
				((WhileRepeatStatementContext)_localctx).stmt = statement();
				}
				break;
			case 4:
				_localctx = new ForClassicContext(_localctx);
				enterOuterAlt(_localctx, 4);
				{
				setState(471);
				match(For);
				setState(472);
				match(OpenParen);
				setState(474);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (((((_la - 8)) & ~0x3f) == 0 && ((1L << (_la - 8)) & ((1L << (JavascriptCode - 8)) | (1L << (OpenBracket - 8)) | (1L << (OpenParen - 8)) | (1L << (OpenBrace - 8)) | (1L << (PlusPlus - 8)) | (1L << (MinusMinus - 8)) | (1L << (Plus - 8)) | (1L << (Minus - 8)) | (1L << (BitNot - 8)) | (1L << (Not - 8)) | (1L << (PieceOfCode - 8)) | (1L << (NullLiteral - 8)) | (1L << (DecimalLiteral - 8)) | (1L << (HexIntegerLiteral - 8)) | (1L << (OctalIntegerLiteral - 8)) | (1L << (OctalIntegerLiteral2 - 8)) | (1L << (BinaryIntegerLiteral - 8)))) != 0) || ((((_la - 74)) & ~0x3f) == 0 && ((1L << (_la - 74)) & ((1L << (BooleanLiteral - 74)) | (1L << (In - 74)) | (1L << (Of - 74)) | (1L << (ElseIf - 74)) | (1L << (Declare - 74)) | (1L << (Function_ - 74)) | (1L << (Delete - 74)) | (1L << (NumberOf - 74)) | (1L << (IndexOf - 74)) | (1L << (Sub - 74)) | (1L << (Lower - 74)) | (1L << (Upper - 74)) | (1L << (Math - 74)) | (1L << (Min - 74)) | (1L << (Max - 74)) | (1L << (Random - 74)) | (1L << (Chr - 74)) | (1L << (Ord - 74)) | (1L << (Prompt - 74)) | (1L << (Convert - 74)) | (1L << (New_ - 74)) | (1L << (Attributes - 74)) | (1L << (Methods - 74)) | (1L << (Super - 74)) | (1L << (InstanceOf - 74)) | (1L << (Dictionary - 74)) | (1L << (Var_ - 74)) | (1L << (Const_ - 74)) | (1L << (Identifier - 74)) | (1L << (StringLiteral - 74)))) != 0)) {
					{
					setState(473);
					((ForClassicContext)_localctx).pre = forPre();
					}
				}

				setState(476);
				match(SemiColon);
				setState(478);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (((((_la - 8)) & ~0x3f) == 0 && ((1L << (_la - 8)) & ((1L << (JavascriptCode - 8)) | (1L << (OpenBracket - 8)) | (1L << (OpenParen - 8)) | (1L << (OpenBrace - 8)) | (1L << (PlusPlus - 8)) | (1L << (MinusMinus - 8)) | (1L << (Plus - 8)) | (1L << (Minus - 8)) | (1L << (BitNot - 8)) | (1L << (Not - 8)) | (1L << (PieceOfCode - 8)) | (1L << (NullLiteral - 8)) | (1L << (DecimalLiteral - 8)) | (1L << (HexIntegerLiteral - 8)) | (1L << (OctalIntegerLiteral - 8)) | (1L << (OctalIntegerLiteral2 - 8)) | (1L << (BinaryIntegerLiteral - 8)))) != 0) || ((((_la - 74)) & ~0x3f) == 0 && ((1L << (_la - 74)) & ((1L << (BooleanLiteral - 74)) | (1L << (In - 74)) | (1L << (Of - 74)) | (1L << (ElseIf - 74)) | (1L << (Declare - 74)) | (1L << (Function_ - 74)) | (1L << (Delete - 74)) | (1L << (NumberOf - 74)) | (1L << (IndexOf - 74)) | (1L << (Sub - 74)) | (1L << (Lower - 74)) | (1L << (Upper - 74)) | (1L << (Math - 74)) | (1L << (Min - 74)) | (1L << (Max - 74)) | (1L << (Random - 74)) | (1L << (Chr - 74)) | (1L << (Ord - 74)) | (1L << (Prompt - 74)) | (1L << (Convert - 74)) | (1L << (New_ - 74)) | (1L << (Attributes - 74)) | (1L << (Methods - 74)) | (1L << (Super - 74)) | (1L << (InstanceOf - 74)) | (1L << (Dictionary - 74)) | (1L << (Var_ - 74)) | (1L << (Const_ - 74)) | (1L << (Identifier - 74)) | (1L << (StringLiteral - 74)))) != 0)) {
					{
					setState(477);
					((ForClassicContext)_localctx).exp = expressionSequence();
					}
				}

				setState(480);
				match(SemiColon);
				setState(482);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (((((_la - 8)) & ~0x3f) == 0 && ((1L << (_la - 8)) & ((1L << (JavascriptCode - 8)) | (1L << (OpenBracket - 8)) | (1L << (OpenParen - 8)) | (1L << (OpenBrace - 8)) | (1L << (PlusPlus - 8)) | (1L << (MinusMinus - 8)) | (1L << (Plus - 8)) | (1L << (Minus - 8)) | (1L << (BitNot - 8)) | (1L << (Not - 8)) | (1L << (PieceOfCode - 8)) | (1L << (NullLiteral - 8)) | (1L << (DecimalLiteral - 8)) | (1L << (HexIntegerLiteral - 8)) | (1L << (OctalIntegerLiteral - 8)) | (1L << (OctalIntegerLiteral2 - 8)) | (1L << (BinaryIntegerLiteral - 8)))) != 0) || ((((_la - 74)) & ~0x3f) == 0 && ((1L << (_la - 74)) & ((1L << (BooleanLiteral - 74)) | (1L << (In - 74)) | (1L << (Of - 74)) | (1L << (ElseIf - 74)) | (1L << (Declare - 74)) | (1L << (Function_ - 74)) | (1L << (Delete - 74)) | (1L << (NumberOf - 74)) | (1L << (IndexOf - 74)) | (1L << (Sub - 74)) | (1L << (Lower - 74)) | (1L << (Upper - 74)) | (1L << (Math - 74)) | (1L << (Min - 74)) | (1L << (Max - 74)) | (1L << (Random - 74)) | (1L << (Chr - 74)) | (1L << (Ord - 74)) | (1L << (Prompt - 74)) | (1L << (Convert - 74)) | (1L << (New_ - 74)) | (1L << (Attributes - 74)) | (1L << (Methods - 74)) | (1L << (Super - 74)) | (1L << (InstanceOf - 74)) | (1L << (Dictionary - 74)) | (1L << (Var_ - 74)) | (1L << (Const_ - 74)) | (1L << (Identifier - 74)) | (1L << (StringLiteral - 74)))) != 0)) {
					{
					setState(481);
					((ForClassicContext)_localctx).post = expressionSequence();
					}
				}

				setState(484);
				match(CloseParen);
				setState(485);
				((ForClassicContext)_localctx).stmt = statement();
				}
				break;
			case 5:
				_localctx = new ForFromToStatementContext(_localctx);
				enterOuterAlt(_localctx, 5);
				{
				setState(486);
				match(For);
				setState(487);
				((ForFromToStatementContext)_localctx).iter = iteratorRange();
				setState(489);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,37,_ctx) ) {
				case 1:
					{
					setState(488);
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
				setState(491);
				((ForFromToStatementContext)_localctx).stmt = statement();
				}
				break;
			case 6:
				_localctx = new ForFromToStatement2Context(_localctx);
				enterOuterAlt(_localctx, 6);
				{
				setState(493);
				match(For);
				setState(494);
				match(OpenParen);
				setState(495);
				((ForFromToStatement2Context)_localctx).iter = iteratorRange();
				setState(496);
				match(CloseParen);
				setState(498);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,38,_ctx) ) {
				case 1:
					{
					setState(497);
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
				setState(500);
				((ForFromToStatement2Context)_localctx).stmt = statement();
				}
				break;
			case 7:
				_localctx = new ForEachStatementContext(_localctx);
				enterOuterAlt(_localctx, 7);
				{
				setState(507);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case For:
					{
					setState(502);
					match(For);
					setState(504);
					_errHandler.sync(this);
					_la = _input.LA(1);
					if (_la==Each) {
						{
						setState(503);
						match(Each);
						}
					}

					}
					break;
				case ForEach:
					{
					setState(506);
					match(ForEach);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(509);
				((ForEachStatementContext)_localctx).iter = iteratorIndexes();
				setState(511);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,41,_ctx) ) {
				case 1:
					{
					setState(510);
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
				setState(513);
				((ForEachStatementContext)_localctx).stmt = statement();
				}
				break;
			case 8:
				_localctx = new ForEachStatement2Context(_localctx);
				enterOuterAlt(_localctx, 8);
				{
				setState(520);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case For:
					{
					setState(515);
					match(For);
					setState(517);
					_errHandler.sync(this);
					_la = _input.LA(1);
					if (_la==Each) {
						{
						setState(516);
						match(Each);
						}
					}

					}
					break;
				case ForEach:
					{
					setState(519);
					match(ForEach);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(522);
				match(OpenParen);
				setState(523);
				((ForEachStatement2Context)_localctx).iter = iteratorIndexes();
				setState(524);
				match(CloseParen);
				setState(526);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,44,_ctx) ) {
				case 1:
					{
					setState(525);
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
				setState(528);
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
		enterRule(_localctx, 56, RULE_forPre);
		try {
			setState(534);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,46,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(532);
				expressionSequence();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(533);
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
		enterRule(_localctx, 58, RULE_continueStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(536);
			match(Continue);
			setState(537);
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
		enterRule(_localctx, 60, RULE_breakStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(539);
			match(Break);
			setState(540);
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
		enterRule(_localctx, 62, RULE_returnStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(542);
			match(Return);
			setState(545);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,47,_ctx) ) {
			case 1:
				{
				setState(543);
				((ReturnStatementContext)_localctx).exp = singleExpression(0);
				}
				break;
			case 2:
				{
				setState(544);
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
		enterRule(_localctx, 64, RULE_switchStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(547);
			match(Switch);
			setState(548);
			match(OpenParen);
			setState(549);
			expressionSequence();
			setState(550);
			match(CloseParen);
			setState(551);
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
		enterRule(_localctx, 66, RULE_caseBlock);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(553);
			match(OpenBrace);
			setState(555);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Case) {
				{
				setState(554);
				caseClauses();
				}
			}

			setState(561);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Default) {
				{
				setState(557);
				defaultClause();
				setState(559);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==Case) {
					{
					setState(558);
					caseClauses();
					}
				}

				}
			}

			setState(563);
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
		enterRule(_localctx, 68, RULE_caseClauses);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(566); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(565);
				caseClause();
				}
				}
				setState(568); 
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
		enterRule(_localctx, 70, RULE_caseClause);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(570);
			match(Case);
			setState(571);
			expressionSequence();
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
		enterRule(_localctx, 72, RULE_defaultClause);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(576);
			match(Default);
			setState(577);
			match(Colon);
			setState(579);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,53,_ctx) ) {
			case 1:
				{
				setState(578);
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
		enterRule(_localctx, 74, RULE_formalParameterList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(581);
			formalParameterArg();
			setState(586);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==Comma) {
				{
				{
				setState(582);
				match(Comma);
				setState(583);
				formalParameterArg();
				}
				}
				setState(588);
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
		enterRule(_localctx, 76, RULE_functionDeclaration);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(590);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Declare) {
				{
				setState(589);
				((FunctionDeclarationContext)_localctx).dec = match(Declare);
				}
			}

			setState(592);
			((FunctionDeclarationContext)_localctx).fun = match(Function_);
			setState(593);
			((FunctionDeclarationContext)_localctx).id = identifier();
			setState(594);
			match(OpenParen);
			setState(596);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (((((_la - 89)) & ~0x3f) == 0 && ((1L << (_la - 89)) & ((1L << (In - 89)) | (1L << (Of - 89)) | (1L << (ElseIf - 89)) | (1L << (Function_ - 89)) | (1L << (Delete - 89)) | (1L << (NumberOf - 89)) | (1L << (IndexOf - 89)) | (1L << (InstanceOf - 89)) | (1L << (Identifier - 89)))) != 0)) {
				{
				setState(595);
				((FunctionDeclarationContext)_localctx).pl = formalParameterList();
				}
			}

			setState(598);
			match(CloseParen);
			setState(599);
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
		enterRule(_localctx, 78, RULE_functionDeclarationExpr);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(601);
			((FunctionDeclarationExprContext)_localctx).fun = match(Function_);
			setState(602);
			((FunctionDeclarationExprContext)_localctx).id = identifier();
			setState(603);
			match(OpenParen);
			setState(605);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (((((_la - 89)) & ~0x3f) == 0 && ((1L << (_la - 89)) & ((1L << (In - 89)) | (1L << (Of - 89)) | (1L << (ElseIf - 89)) | (1L << (Function_ - 89)) | (1L << (Delete - 89)) | (1L << (NumberOf - 89)) | (1L << (IndexOf - 89)) | (1L << (InstanceOf - 89)) | (1L << (Identifier - 89)))) != 0)) {
				{
				setState(604);
				((FunctionDeclarationExprContext)_localctx).pl = formalParameterList();
				}
			}

			setState(607);
			match(CloseParen);
			setState(608);
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
		enterRule(_localctx, 80, RULE_arguments);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(610);
			match(OpenParen);
			setState(619);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (((((_la - 8)) & ~0x3f) == 0 && ((1L << (_la - 8)) & ((1L << (JavascriptCode - 8)) | (1L << (OpenBracket - 8)) | (1L << (OpenParen - 8)) | (1L << (OpenBrace - 8)) | (1L << (PlusPlus - 8)) | (1L << (MinusMinus - 8)) | (1L << (Plus - 8)) | (1L << (Minus - 8)) | (1L << (BitNot - 8)) | (1L << (Not - 8)) | (1L << (PieceOfCode - 8)) | (1L << (NullLiteral - 8)) | (1L << (DecimalLiteral - 8)) | (1L << (HexIntegerLiteral - 8)) | (1L << (OctalIntegerLiteral - 8)) | (1L << (OctalIntegerLiteral2 - 8)) | (1L << (BinaryIntegerLiteral - 8)))) != 0) || ((((_la - 74)) & ~0x3f) == 0 && ((1L << (_la - 74)) & ((1L << (BooleanLiteral - 74)) | (1L << (In - 74)) | (1L << (Of - 74)) | (1L << (ElseIf - 74)) | (1L << (Declare - 74)) | (1L << (Function_ - 74)) | (1L << (Delete - 74)) | (1L << (NumberOf - 74)) | (1L << (IndexOf - 74)) | (1L << (Sub - 74)) | (1L << (Lower - 74)) | (1L << (Upper - 74)) | (1L << (Math - 74)) | (1L << (Min - 74)) | (1L << (Max - 74)) | (1L << (Random - 74)) | (1L << (Chr - 74)) | (1L << (Ord - 74)) | (1L << (Prompt - 74)) | (1L << (Convert - 74)) | (1L << (New_ - 74)) | (1L << (Attributes - 74)) | (1L << (Methods - 74)) | (1L << (Super - 74)) | (1L << (InstanceOf - 74)) | (1L << (Dictionary - 74)) | (1L << (Var_ - 74)) | (1L << (Const_ - 74)) | (1L << (Identifier - 74)) | (1L << (StringLiteral - 74)))) != 0)) {
				{
				setState(611);
				singleExpression(0);
				setState(616);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==Comma) {
					{
					{
					setState(612);
					match(Comma);
					setState(613);
					singleExpression(0);
					}
					}
					setState(618);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
			}

			setState(621);
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
		enterRule(_localctx, 82, RULE_visibility);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(623);
			_la = _input.LA(1);
			if ( !(((((_la - 129)) & ~0x3f) == 0 && ((1L << (_la - 129)) & ((1L << (Private - 129)) | (1L << (Public - 129)) | (1L << (Protected - 129)))) != 0)) ) {
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
		enterRule(_localctx, 84, RULE_classDeclaration);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(626);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Declare) {
				{
				setState(625);
				((ClassDeclarationContext)_localctx).dec = match(Declare);
				}
			}

			setState(628);
			((ClassDeclarationContext)_localctx).clas = match(Class_);
			setState(629);
			((ClassDeclarationContext)_localctx).id = identifier();
			setState(632);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Extends) {
				{
				setState(630);
				match(Extends);
				setState(631);
				((ClassDeclarationContext)_localctx).ext = identifier();
				}
			}

			setState(634);
			match(OpenBrace);
			setState(646);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,64,_ctx) ) {
			case 1:
				{
				setState(637);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==Attributes) {
					{
					setState(635);
					match(Attributes);
					setState(636);
					match(Colon);
					}
				}

				setState(644);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case OpenBrace:
					{
					setState(639);
					match(OpenBrace);
					setState(640);
					((ClassDeclarationContext)_localctx).atrs = attributesList();
					setState(641);
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
				case InstanceOf:
				case Private:
				case Public:
				case Protected:
				case Identifier:
					{
					setState(643);
					((ClassDeclarationContext)_localctx).atrs = attributesList();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
			}
			setState(648);
			eos();
			setState(660);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==OpenBrace || ((((_la - 98)) & ~0x3f) == 0 && ((1L << (_la - 98)) & ((1L << (Function_ - 98)) | (1L << (Methods - 98)) | (1L << (Method - 98)) | (1L << (Constructor - 98)) | (1L << (Private - 98)) | (1L << (Public - 98)) | (1L << (Protected - 98)) | (1L << (Identifier - 98)))) != 0)) {
				{
				setState(651);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==Methods) {
					{
					setState(649);
					((ClassDeclarationContext)_localctx).mdec = match(Methods);
					setState(650);
					match(Colon);
					}
				}

				setState(658);
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
					setState(653);
					((ClassDeclarationContext)_localctx).methods = methodsList();
					}
					break;
				case OpenBrace:
					{
					setState(654);
					match(OpenBrace);
					setState(655);
					((ClassDeclarationContext)_localctx).methods = methodsList();
					setState(656);
					match(CloseBrace);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
			}

			setState(662);
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
		enterRule(_localctx, 86, RULE_attributesList);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(665); 
			_errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					setState(664);
					classAttributeDecl();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(667); 
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,68,_ctx);
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
		enterRule(_localctx, 88, RULE_classAttributeDecl);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(670);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (((((_la - 129)) & ~0x3f) == 0 && ((1L << (_la - 129)) & ((1L << (Private - 129)) | (1L << (Public - 129)) | (1L << (Protected - 129)))) != 0)) {
				{
				setState(669);
				((ClassAttributeDeclContext)_localctx).vis = visibility();
				}
			}

			setState(672);
			variableDeclaration();
			setState(677);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,70,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(673);
					match(Comma);
					setState(674);
					variableDeclaration();
					}
					} 
				}
				setState(679);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,70,_ctx);
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
		enterRule(_localctx, 90, RULE_methodDeclaration);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(681);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (((((_la - 129)) & ~0x3f) == 0 && ((1L << (_la - 129)) & ((1L << (Private - 129)) | (1L << (Public - 129)) | (1L << (Protected - 129)))) != 0)) {
				{
				setState(680);
				((MethodDeclarationContext)_localctx).vis = visibility();
				}
			}

			setState(684);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Function_ || _la==Method) {
				{
				setState(683);
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

			setState(686);
			((MethodDeclarationContext)_localctx).id = methodName();
			setState(687);
			match(OpenParen);
			setState(689);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (((((_la - 89)) & ~0x3f) == 0 && ((1L << (_la - 89)) & ((1L << (In - 89)) | (1L << (Of - 89)) | (1L << (ElseIf - 89)) | (1L << (Function_ - 89)) | (1L << (Delete - 89)) | (1L << (NumberOf - 89)) | (1L << (IndexOf - 89)) | (1L << (InstanceOf - 89)) | (1L << (Identifier - 89)))) != 0)) {
				{
				setState(688);
				((MethodDeclarationContext)_localctx).pl = formalParameterList();
				}
			}

			setState(691);
			match(CloseParen);
			setState(692);
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
		enterRule(_localctx, 92, RULE_methodName);
		try {
			setState(696);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case Identifier:
				enterOuterAlt(_localctx, 1);
				{
				setState(694);
				identifier();
				}
				break;
			case Constructor:
				enterOuterAlt(_localctx, 2);
				{
				setState(695);
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
		enterRule(_localctx, 94, RULE_methodsList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(699); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(698);
				methodDeclaration();
				}
				}
				setState(701); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( ((((_la - 98)) & ~0x3f) == 0 && ((1L << (_la - 98)) & ((1L << (Function_ - 98)) | (1L << (Method - 98)) | (1L << (Constructor - 98)) | (1L << (Private - 98)) | (1L << (Public - 98)) | (1L << (Protected - 98)) | (1L << (Identifier - 98)))) != 0) );
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
		enterRule(_localctx, 96, RULE_classExp);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(703);
			match(New_);
			setState(705);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Instance) {
				{
				setState(704);
				match(Instance);
				}
			}

			setState(711);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Of) {
				{
				setState(707);
				match(Of);
				setState(709);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==Class_) {
					{
					setState(708);
					match(Class_);
					}
				}

				}
			}

			setState(713);
			match(Identifier);
			setState(714);
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
		enterRule(_localctx, 98, RULE_listIndex);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(716);
			match(OpenBracket);
			setState(718);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (((((_la - 8)) & ~0x3f) == 0 && ((1L << (_la - 8)) & ((1L << (JavascriptCode - 8)) | (1L << (OpenBracket - 8)) | (1L << (OpenParen - 8)) | (1L << (OpenBrace - 8)) | (1L << (PlusPlus - 8)) | (1L << (MinusMinus - 8)) | (1L << (Plus - 8)) | (1L << (Minus - 8)) | (1L << (BitNot - 8)) | (1L << (Not - 8)) | (1L << (PieceOfCode - 8)) | (1L << (NullLiteral - 8)) | (1L << (DecimalLiteral - 8)) | (1L << (HexIntegerLiteral - 8)) | (1L << (OctalIntegerLiteral - 8)) | (1L << (OctalIntegerLiteral2 - 8)) | (1L << (BinaryIntegerLiteral - 8)))) != 0) || ((((_la - 74)) & ~0x3f) == 0 && ((1L << (_la - 74)) & ((1L << (BooleanLiteral - 74)) | (1L << (In - 74)) | (1L << (Of - 74)) | (1L << (ElseIf - 74)) | (1L << (Declare - 74)) | (1L << (Function_ - 74)) | (1L << (Delete - 74)) | (1L << (NumberOf - 74)) | (1L << (IndexOf - 74)) | (1L << (Sub - 74)) | (1L << (Lower - 74)) | (1L << (Upper - 74)) | (1L << (Math - 74)) | (1L << (Min - 74)) | (1L << (Max - 74)) | (1L << (Random - 74)) | (1L << (Chr - 74)) | (1L << (Ord - 74)) | (1L << (Prompt - 74)) | (1L << (Convert - 74)) | (1L << (New_ - 74)) | (1L << (Attributes - 74)) | (1L << (Methods - 74)) | (1L << (Super - 74)) | (1L << (InstanceOf - 74)) | (1L << (Dictionary - 74)) | (1L << (Var_ - 74)) | (1L << (Const_ - 74)) | (1L << (Identifier - 74)) | (1L << (StringLiteral - 74)))) != 0)) {
				{
				setState(717);
				singleExpression(0);
				}
			}

			setState(720);
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
		enterRule(_localctx, 100, RULE_listIndexes);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(723); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(722);
				listIndex();
				}
				}
				setState(725); 
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
		public ReservedIdentifierContext reservedIdentifier() {
			return getRuleContext(ReservedIdentifierContext.class,0);
		}
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
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
		enterRule(_localctx, 102, RULE_formalParameterArg);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(729);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case In:
			case Of:
			case ElseIf:
			case Function_:
			case Delete:
			case NumberOf:
			case IndexOf:
			case InstanceOf:
				{
				setState(727);
				reservedIdentifier();
				}
				break;
			case Identifier:
				{
				setState(728);
				identifier();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			setState(733);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Assign) {
				{
				setState(731);
				match(Assign);
				setState(732);
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
		enterRule(_localctx, 104, RULE_variableStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(735);
			variableDeclarationList();
			setState(736);
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
		enterRule(_localctx, 106, RULE_reservedIdentifier);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(738);
			_la = _input.LA(1);
			if ( !(((((_la - 89)) & ~0x3f) == 0 && ((1L << (_la - 89)) & ((1L << (In - 89)) | (1L << (Of - 89)) | (1L << (ElseIf - 89)) | (1L << (Function_ - 89)) | (1L << (Delete - 89)) | (1L << (NumberOf - 89)) | (1L << (IndexOf - 89)) | (1L << (InstanceOf - 89)))) != 0)) ) {
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
		public ReservedIdentifierContext reservedIdentifier() {
			return getRuleContext(ReservedIdentifierContext.class,0);
		}
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
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
		enterRule(_localctx, 108, RULE_variableDeclaration);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(742);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case In:
			case Of:
			case ElseIf:
			case Function_:
			case Delete:
			case NumberOf:
			case IndexOf:
			case InstanceOf:
				{
				setState(740);
				reservedIdentifier();
				}
				break;
			case Identifier:
				{
				setState(741);
				identifier();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			setState(746);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,84,_ctx) ) {
			case 1:
				{
				setState(744);
				match(Assign);
				setState(745);
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
		enterRule(_localctx, 110, RULE_variableDeclarationList);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(748);
			varModifier();
			setState(749);
			variableDeclaration();
			setState(754);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,85,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(750);
					match(Comma);
					setState(751);
					variableDeclaration();
					}
					} 
				}
				setState(756);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,85,_ctx);
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
		enterRule(_localctx, 112, RULE_varModifier);
		try {
			setState(764);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,86,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(757);
				match(Declare);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(758);
				match(Declare);
				setState(759);
				match(Var_);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(760);
				match(Declare);
				setState(761);
				match(Const_);
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(762);
				match(Var_);
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(763);
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
		enterRule(_localctx, 114, RULE_functionBody);
		try {
			setState(768);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,87,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(766);
				block();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(767);
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
		enterRule(_localctx, 116, RULE_anonymousFunction);
		int _la;
		try {
			setState(781);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case Function_:
				_localctx = new AnonymousFunctionDeclContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(770);
				((AnonymousFunctionDeclContext)_localctx).fun = match(Function_);
				setState(771);
				match(OpenParen);
				setState(773);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (((((_la - 89)) & ~0x3f) == 0 && ((1L << (_la - 89)) & ((1L << (In - 89)) | (1L << (Of - 89)) | (1L << (ElseIf - 89)) | (1L << (Function_ - 89)) | (1L << (Delete - 89)) | (1L << (NumberOf - 89)) | (1L << (IndexOf - 89)) | (1L << (InstanceOf - 89)) | (1L << (Identifier - 89)))) != 0)) {
					{
					setState(772);
					((AnonymousFunctionDeclContext)_localctx).pl = formalParameterList();
					}
				}

				setState(775);
				match(CloseParen);
				setState(776);
				((AnonymousFunctionDeclContext)_localctx).stmt = functionBody();
				}
				break;
			case OpenParen:
			case Identifier:
				_localctx = new ArrowFunctionContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(777);
				((ArrowFunctionContext)_localctx).pl = arrowFunctionParameters();
				setState(778);
				match(ARROW);
				setState(779);
				((ArrowFunctionContext)_localctx).stmt = arrowFunctionBody();
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

	public static class ArrowFunctionParametersContext extends ParserRuleContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
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
		enterRule(_localctx, 118, RULE_arrowFunctionParameters);
		int _la;
		try {
			setState(789);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case Identifier:
				enterOuterAlt(_localctx, 1);
				{
				setState(783);
				identifier();
				}
				break;
			case OpenParen:
				enterOuterAlt(_localctx, 2);
				{
				setState(784);
				match(OpenParen);
				setState(786);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (((((_la - 89)) & ~0x3f) == 0 && ((1L << (_la - 89)) & ((1L << (In - 89)) | (1L << (Of - 89)) | (1L << (ElseIf - 89)) | (1L << (Function_ - 89)) | (1L << (Delete - 89)) | (1L << (NumberOf - 89)) | (1L << (IndexOf - 89)) | (1L << (InstanceOf - 89)) | (1L << (Identifier - 89)))) != 0)) {
					{
					setState(785);
					formalParameterList();
					}
				}

				setState(788);
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
		enterRule(_localctx, 120, RULE_arrowFunctionBody);
		try {
			setState(793);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,92,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(791);
				singleExpression(0);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(792);
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
		enterRule(_localctx, 122, RULE_assignmentOperator);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(795);
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
		enterRule(_localctx, 124, RULE_reservedWord);
		try {
			setState(800);
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
				setState(797);
				safeKeyword();
				}
				break;
			case NullLiteral:
				enterOuterAlt(_localctx, 2);
				{
				setState(798);
				match(NullLiteral);
				}
				break;
			case BooleanLiteral:
				enterOuterAlt(_localctx, 3);
				{
				setState(799);
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
		enterRule(_localctx, 126, RULE_listDeclaration);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(802);
			match(New_);
			setState(803);
			match(List);
			setState(804);
			match(OpenParen);
			setState(806);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==OpenBracket) {
				{
				setState(805);
				((ListDeclarationContext)_localctx).exp = listLiteral();
				}
			}

			setState(808);
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
		enterRule(_localctx, 128, RULE_listLiteral);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(810);
			match(OpenBracket);
			setState(819);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (((((_la - 8)) & ~0x3f) == 0 && ((1L << (_la - 8)) & ((1L << (JavascriptCode - 8)) | (1L << (OpenBracket - 8)) | (1L << (OpenParen - 8)) | (1L << (OpenBrace - 8)) | (1L << (PlusPlus - 8)) | (1L << (MinusMinus - 8)) | (1L << (Plus - 8)) | (1L << (Minus - 8)) | (1L << (BitNot - 8)) | (1L << (Not - 8)) | (1L << (PieceOfCode - 8)) | (1L << (NullLiteral - 8)) | (1L << (DecimalLiteral - 8)) | (1L << (HexIntegerLiteral - 8)) | (1L << (OctalIntegerLiteral - 8)) | (1L << (OctalIntegerLiteral2 - 8)) | (1L << (BinaryIntegerLiteral - 8)))) != 0) || ((((_la - 74)) & ~0x3f) == 0 && ((1L << (_la - 74)) & ((1L << (BooleanLiteral - 74)) | (1L << (In - 74)) | (1L << (Of - 74)) | (1L << (ElseIf - 74)) | (1L << (Declare - 74)) | (1L << (Function_ - 74)) | (1L << (Delete - 74)) | (1L << (NumberOf - 74)) | (1L << (IndexOf - 74)) | (1L << (Sub - 74)) | (1L << (Lower - 74)) | (1L << (Upper - 74)) | (1L << (Math - 74)) | (1L << (Min - 74)) | (1L << (Max - 74)) | (1L << (Random - 74)) | (1L << (Chr - 74)) | (1L << (Ord - 74)) | (1L << (Prompt - 74)) | (1L << (Convert - 74)) | (1L << (New_ - 74)) | (1L << (Attributes - 74)) | (1L << (Methods - 74)) | (1L << (Super - 74)) | (1L << (InstanceOf - 74)) | (1L << (Dictionary - 74)) | (1L << (Var_ - 74)) | (1L << (Const_ - 74)) | (1L << (Identifier - 74)) | (1L << (StringLiteral - 74)))) != 0)) {
				{
				setState(811);
				singleExpression(0);
				setState(816);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==Comma) {
					{
					{
					setState(812);
					match(Comma);
					setState(813);
					singleExpression(0);
					}
					}
					setState(818);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
			}

			setState(821);
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
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
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
		enterRule(_localctx, 130, RULE_objectKey);
		try {
			setState(828);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case Identifier:
				enterOuterAlt(_localctx, 1);
				{
				setState(823);
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
			case InstanceOf:
				enterOuterAlt(_localctx, 2);
				{
				setState(824);
				reservedIdentifier();
				}
				break;
			case StringLiteral:
				enterOuterAlt(_localctx, 3);
				{
				setState(825);
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
				setState(826);
				numericLiteral();
				}
				break;
			case BooleanLiteral:
				enterOuterAlt(_localctx, 5);
				{
				setState(827);
				booleanLiteral();
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
		enterRule(_localctx, 132, RULE_objectLiteral);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(830);
			match(OpenBrace);
			setState(844);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (((((_la - 65)) & ~0x3f) == 0 && ((1L << (_la - 65)) & ((1L << (DecimalLiteral - 65)) | (1L << (HexIntegerLiteral - 65)) | (1L << (OctalIntegerLiteral - 65)) | (1L << (OctalIntegerLiteral2 - 65)) | (1L << (BinaryIntegerLiteral - 65)) | (1L << (BooleanLiteral - 65)) | (1L << (In - 65)) | (1L << (Of - 65)) | (1L << (ElseIf - 65)) | (1L << (Function_ - 65)) | (1L << (Delete - 65)) | (1L << (NumberOf - 65)) | (1L << (IndexOf - 65)) | (1L << (InstanceOf - 65)))) != 0) || _la==Identifier || _la==StringLiteral) {
				{
				setState(831);
				objectKey();
				setState(832);
				match(Colon);
				setState(833);
				singleExpression(0);
				setState(841);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==Comma) {
					{
					{
					setState(834);
					match(Comma);
					setState(835);
					objectKey();
					setState(836);
					match(Colon);
					setState(837);
					singleExpression(0);
					}
					}
					setState(843);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
			}

			setState(846);
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
		public LiteralContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_literal; }
	}

	public final LiteralContext literal() throws RecognitionException {
		LiteralContext _localctx = new LiteralContext(_ctx, getState());
		enterRule(_localctx, 134, RULE_literal);
		try {
			setState(855);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case NullLiteral:
				enterOuterAlt(_localctx, 1);
				{
				setState(848);
				nullLiteral();
				}
				break;
			case BooleanLiteral:
				enterOuterAlt(_localctx, 2);
				{
				setState(849);
				booleanLiteral();
				}
				break;
			case StringLiteral:
				enterOuterAlt(_localctx, 3);
				{
				setState(850);
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
				setState(851);
				numericLiteral();
				}
				break;
			case OpenBracket:
				enterOuterAlt(_localctx, 5);
				{
				setState(852);
				listLiteral();
				}
				break;
			case OpenBrace:
				enterOuterAlt(_localctx, 6);
				{
				setState(853);
				objectLiteral();
				}
				break;
			case New_:
				enterOuterAlt(_localctx, 7);
				{
				setState(854);
				listDeclaration();
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
			setState(857);
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
			setState(859);
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
			setState(861);
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
			setState(863);
			_la = _input.LA(1);
			if ( !(((((_la - 65)) & ~0x3f) == 0 && ((1L << (_la - 65)) & ((1L << (DecimalLiteral - 65)) | (1L << (HexIntegerLiteral - 65)) | (1L << (OctalIntegerLiteral - 65)) | (1L << (OctalIntegerLiteral2 - 65)) | (1L << (BinaryIntegerLiteral - 65)))) != 0)) ) {
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
			setState(865);
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
		enterRule(_localctx, 146, RULE_safeKeyword);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(867);
			_la = _input.LA(1);
			if ( !(((((_la - 76)) & ~0x3f) == 0 && ((1L << (_la - 76)) & ((1L << (Print - 76)) | (1L << (While - 76)) | (1L << (Repeat - 76)) | (1L << (Times - 76)) | (1L << (Do - 76)) | (1L << (Continue - 76)) | (1L << (Break - 76)) | (1L << (Switch - 76)) | (1L << (Case - 76)) | (1L << (Default - 76)) | (1L << (Each - 76)) | (1L << (For - 76)) | (1L << (In - 76)) | (1L << (Of - 76)) | (1L << (If - 76)) | (1L << (ElseIf - 76)) | (1L << (Else - 76)) | (1L << (Return - 76)) | (1L << (InstanceOf - 76)))) != 0)) ) {
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
		enterRule(_localctx, 148, RULE_eos);
		try {
			setState(873);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,101,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(869);
				match(SemiColon);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(870);
				match(EOF);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(871);
				if (!(this.lineTerminatorAhead())) throw new FailedPredicateException(this, "this.lineTerminatorAhead()");
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(872);
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
		case 74:
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
			return precpred(_ctx, 7);
		case 2:
			return precpred(_ctx, 6);
		case 3:
			return precpred(_ctx, 5);
		case 4:
			return precpred(_ctx, 4);
		case 5:
			return precpred(_ctx, 3);
		}
		return true;
	}
	private boolean singleExpression_sempred(SingleExpressionContext _localctx, int predIndex) {
		switch (predIndex) {
		case 6:
			return precpred(_ctx, 20);
		case 7:
			return precpred(_ctx, 19);
		case 8:
			return precpred(_ctx, 18);
		case 9:
			return precpred(_ctx, 17);
		case 10:
			return precpred(_ctx, 16);
		case 11:
			return precpred(_ctx, 15);
		case 12:
			return precpred(_ctx, 14);
		case 13:
			return precpred(_ctx, 12);
		case 14:
			return precpred(_ctx, 11);
		case 15:
			return precpred(_ctx, 10);
		case 16:
			return precpred(_ctx, 9);
		case 17:
			return precpred(_ctx, 8);
		case 18:
			return precpred(_ctx, 27);
		case 19:
			return precpred(_ctx, 13);
		}
		return true;
	}
	private boolean eos_sempred(EosContext _localctx, int predIndex) {
		switch (predIndex) {
		case 20:
			return this.lineTerminatorAhead();
		case 21:
			return this.closeBrace();
		}
		return true;
	}

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3\u0089\u036e\4\2\t"+
		"\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13"+
		"\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\4\31\t\31"+
		"\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4\36\t\36\4\37\t\37\4 \t \4!"+
		"\t!\4\"\t\"\4#\t#\4$\t$\4%\t%\4&\t&\4\'\t\'\4(\t(\4)\t)\4*\t*\4+\t+\4"+
		",\t,\4-\t-\4.\t.\4/\t/\4\60\t\60\4\61\t\61\4\62\t\62\4\63\t\63\4\64\t"+
		"\64\4\65\t\65\4\66\t\66\4\67\t\67\48\t8\49\t9\4:\t:\4;\t;\4<\t<\4=\t="+
		"\4>\t>\4?\t?\4@\t@\4A\tA\4B\tB\4C\tC\4D\tD\4E\tE\4F\tF\4G\tG\4H\tH\4I"+
		"\tI\4J\tJ\4K\tK\4L\tL\3\2\5\2\u009a\n\2\3\2\3\2\3\3\6\3\u009f\n\3\r\3"+
		"\16\3\u00a0\3\4\3\4\5\4\u00a5\n\4\3\5\3\5\3\5\3\5\3\5\3\5\3\5\3\5\5\5"+
		"\u00af\n\5\3\6\3\6\3\6\3\6\3\6\3\6\5\6\u00b7\n\6\3\7\3\7\5\7\u00bb\n\7"+
		"\3\7\3\7\3\b\3\b\3\t\3\t\3\t\3\n\3\n\3\13\3\13\3\13\3\f\3\f\3\f\3\f\3"+
		"\r\3\r\3\r\3\r\3\r\5\r\u00d2\n\r\3\16\3\16\3\16\3\16\5\16\u00d8\n\16\5"+
		"\16\u00da\n\16\3\17\3\17\3\17\3\17\3\17\3\17\5\17\u00e2\n\17\3\17\3\17"+
		"\5\17\u00e6\n\17\5\17\u00e8\n\17\3\17\3\17\3\17\3\17\5\17\u00ee\n\17\3"+
		"\17\3\17\3\17\3\17\3\17\3\17\3\17\3\17\3\17\3\17\3\17\3\17\3\17\3\17\3"+
		"\17\3\17\3\17\3\17\3\17\3\17\3\17\7\17\u0105\n\17\f\17\16\17\u0108\13"+
		"\17\3\20\3\20\3\20\3\20\3\20\3\20\5\20\u0110\n\20\3\21\3\21\3\21\3\21"+
		"\3\21\3\21\3\21\3\21\3\21\3\21\3\21\3\21\3\21\3\21\3\21\3\21\3\21\3\21"+
		"\3\21\3\21\3\21\3\21\3\21\3\21\3\21\3\21\3\21\3\21\3\21\3\21\3\21\3\21"+
		"\3\21\3\21\3\21\3\21\3\21\3\21\3\21\3\21\3\21\3\21\5\21\u013c\n\21\3\21"+
		"\3\21\3\21\3\21\3\21\3\21\3\21\3\21\3\21\3\21\3\21\3\21\3\21\3\21\3\21"+
		"\3\21\3\21\3\21\3\21\3\21\3\21\3\21\3\21\3\21\3\21\3\21\3\21\3\21\3\21"+
		"\3\21\3\21\3\21\3\21\3\21\3\21\3\21\3\21\3\21\3\21\3\21\3\21\3\21\3\21"+
		"\3\21\7\21\u016a\n\21\f\21\16\21\u016d\13\21\3\22\3\22\3\23\3\23\3\23"+
		"\3\23\3\23\3\23\3\23\3\23\3\23\5\23\u017a\n\23\3\24\3\24\5\24\u017e\n"+
		"\24\3\25\3\25\3\26\3\26\3\26\3\26\5\26\u0186\n\26\3\27\3\27\3\27\7\27"+
		"\u018b\n\27\f\27\16\27\u018e\13\27\3\30\3\30\3\30\5\30\u0193\n\30\3\30"+
		"\3\30\5\30\u0197\n\30\3\30\3\30\5\30\u019b\n\30\3\30\5\30\u019e\n\30\3"+
		"\31\6\31\u01a1\n\31\r\31\16\31\u01a2\3\32\3\32\3\32\5\32\u01a8\n\32\3"+
		"\32\3\32\3\33\3\33\3\33\3\33\3\33\3\33\3\33\3\33\3\33\3\33\3\33\3\33\3"+
		"\33\5\33\u01b9\n\33\3\34\5\34\u01bc\n\34\3\34\3\34\3\34\3\34\3\34\3\34"+
		"\3\35\3\35\3\35\5\35\u01c7\n\35\3\35\3\35\3\35\3\35\3\35\3\35\3\35\3\35"+
		"\5\35\u01d1\n\35\3\35\3\35\3\35\5\35\u01d6\n\35\3\35\3\35\3\35\3\35\3"+
		"\35\5\35\u01dd\n\35\3\35\3\35\5\35\u01e1\n\35\3\35\3\35\5\35\u01e5\n\35"+
		"\3\35\3\35\3\35\3\35\3\35\5\35\u01ec\n\35\3\35\3\35\3\35\3\35\3\35\3\35"+
		"\3\35\5\35\u01f5\n\35\3\35\3\35\3\35\3\35\5\35\u01fb\n\35\3\35\5\35\u01fe"+
		"\n\35\3\35\3\35\5\35\u0202\n\35\3\35\3\35\3\35\3\35\5\35\u0208\n\35\3"+
		"\35\5\35\u020b\n\35\3\35\3\35\3\35\3\35\5\35\u0211\n\35\3\35\3\35\5\35"+
		"\u0215\n\35\3\36\3\36\5\36\u0219\n\36\3\37\3\37\3\37\3 \3 \3 \3!\3!\3"+
		"!\5!\u0224\n!\3\"\3\"\3\"\3\"\3\"\3\"\3#\3#\5#\u022e\n#\3#\3#\5#\u0232"+
		"\n#\5#\u0234\n#\3#\3#\3$\6$\u0239\n$\r$\16$\u023a\3%\3%\3%\3%\5%\u0241"+
		"\n%\3&\3&\3&\5&\u0246\n&\3\'\3\'\3\'\7\'\u024b\n\'\f\'\16\'\u024e\13\'"+
		"\3(\5(\u0251\n(\3(\3(\3(\3(\5(\u0257\n(\3(\3(\3(\3)\3)\3)\3)\5)\u0260"+
		"\n)\3)\3)\3)\3*\3*\3*\3*\7*\u0269\n*\f*\16*\u026c\13*\5*\u026e\n*\3*\3"+
		"*\3+\3+\3,\5,\u0275\n,\3,\3,\3,\3,\5,\u027b\n,\3,\3,\3,\5,\u0280\n,\3"+
		",\3,\3,\3,\3,\5,\u0287\n,\5,\u0289\n,\3,\3,\3,\5,\u028e\n,\3,\3,\3,\3"+
		",\3,\5,\u0295\n,\5,\u0297\n,\3,\3,\3-\6-\u029c\n-\r-\16-\u029d\3.\5.\u02a1"+
		"\n.\3.\3.\3.\7.\u02a6\n.\f.\16.\u02a9\13.\3/\5/\u02ac\n/\3/\5/\u02af\n"+
		"/\3/\3/\3/\5/\u02b4\n/\3/\3/\3/\3\60\3\60\5\60\u02bb\n\60\3\61\6\61\u02be"+
		"\n\61\r\61\16\61\u02bf\3\62\3\62\5\62\u02c4\n\62\3\62\3\62\5\62\u02c8"+
		"\n\62\5\62\u02ca\n\62\3\62\3\62\3\62\3\63\3\63\5\63\u02d1\n\63\3\63\3"+
		"\63\3\64\6\64\u02d6\n\64\r\64\16\64\u02d7\3\65\3\65\5\65\u02dc\n\65\3"+
		"\65\3\65\5\65\u02e0\n\65\3\66\3\66\3\66\3\67\3\67\38\38\58\u02e9\n8\3"+
		"8\38\58\u02ed\n8\39\39\39\39\79\u02f3\n9\f9\169\u02f6\139\3:\3:\3:\3:"+
		"\3:\3:\3:\5:\u02ff\n:\3;\3;\5;\u0303\n;\3<\3<\3<\5<\u0308\n<\3<\3<\3<"+
		"\3<\3<\3<\5<\u0310\n<\3=\3=\3=\5=\u0315\n=\3=\5=\u0318\n=\3>\3>\5>\u031c"+
		"\n>\3?\3?\3@\3@\3@\5@\u0323\n@\3A\3A\3A\3A\5A\u0329\nA\3A\3A\3B\3B\3B"+
		"\3B\7B\u0331\nB\fB\16B\u0334\13B\5B\u0336\nB\3B\3B\3C\3C\3C\3C\3C\5C\u033f"+
		"\nC\3D\3D\3D\3D\3D\3D\3D\3D\3D\7D\u034a\nD\fD\16D\u034d\13D\5D\u034f\n"+
		"D\3D\3D\3E\3E\3E\3E\3E\3E\3E\5E\u035a\nE\3F\3F\3G\3G\3H\3H\3I\3I\3J\3"+
		"J\3K\3K\3L\3L\3L\3L\5L\u036c\nL\3L\2\4\34 M\2\4\6\b\n\f\16\20\22\24\26"+
		"\30\32\34\36 \"$&(*,.\60\62\64\668:<>@BDFHJLNPRTVXZ\\^`bdfhjlnprtvxz|"+
		"~\u0080\u0082\u0084\u0086\u0088\u008a\u008c\u008e\u0090\u0092\u0094\u0096"+
		"\2\26\4\2CC\u0086\u0086\4\2ln\u0086\u0086\3\2\30\31\3\2\36 \3\2\32\33"+
		"\3\2$&\3\2\'(\3\2-.\3\2+,\3\2/\61\3\2\62\63\3\2[\\\4\2\23\23[[\4\2PPR"+
		"R\3\2\u0083\u0085\4\2ddyy\6\2[\\``dg||\3\2\64?\3\2CG\7\2NXZ\\^^`b||\2"+
		"\u03d7\2\u0099\3\2\2\2\4\u009e\3\2\2\2\6\u00a4\3\2\2\2\b\u00ae\3\2\2\2"+
		"\n\u00b6\3\2\2\2\f\u00b8\3\2\2\2\16\u00be\3\2\2\2\20\u00c0\3\2\2\2\22"+
		"\u00c3\3\2\2\2\24\u00c5\3\2\2\2\26\u00c8\3\2\2\2\30\u00d1\3\2\2\2\32\u00d9"+
		"\3\2\2\2\34\u00ed\3\2\2\2\36\u010f\3\2\2\2 \u013b\3\2\2\2\"\u016e\3\2"+
		"\2\2$\u0179\3\2\2\2&\u017d\3\2\2\2(\u017f\3\2\2\2*\u0185\3\2\2\2,\u0187"+
		"\3\2\2\2.\u018f\3\2\2\2\60\u01a0\3\2\2\2\62\u01a4\3\2\2\2\64\u01b8\3\2"+
		"\2\2\66\u01bb\3\2\2\28\u0214\3\2\2\2:\u0218\3\2\2\2<\u021a\3\2\2\2>\u021d"+
		"\3\2\2\2@\u0220\3\2\2\2B\u0225\3\2\2\2D\u022b\3\2\2\2F\u0238\3\2\2\2H"+
		"\u023c\3\2\2\2J\u0242\3\2\2\2L\u0247\3\2\2\2N\u0250\3\2\2\2P\u025b\3\2"+
		"\2\2R\u0264\3\2\2\2T\u0271\3\2\2\2V\u0274\3\2\2\2X\u029b\3\2\2\2Z\u02a0"+
		"\3\2\2\2\\\u02ab\3\2\2\2^\u02ba\3\2\2\2`\u02bd\3\2\2\2b\u02c1\3\2\2\2"+
		"d\u02ce\3\2\2\2f\u02d5\3\2\2\2h\u02db\3\2\2\2j\u02e1\3\2\2\2l\u02e4\3"+
		"\2\2\2n\u02e8\3\2\2\2p\u02ee\3\2\2\2r\u02fe\3\2\2\2t\u0302\3\2\2\2v\u030f"+
		"\3\2\2\2x\u0317\3\2\2\2z\u031b\3\2\2\2|\u031d\3\2\2\2~\u0322\3\2\2\2\u0080"+
		"\u0324\3\2\2\2\u0082\u032c\3\2\2\2\u0084\u033e\3\2\2\2\u0086\u0340\3\2"+
		"\2\2\u0088\u0359\3\2\2\2\u008a\u035b\3\2\2\2\u008c\u035d\3\2\2\2\u008e"+
		"\u035f\3\2\2\2\u0090\u0361\3\2\2\2\u0092\u0363\3\2\2\2\u0094\u0365\3\2"+
		"\2\2\u0096\u036b\3\2\2\2\u0098\u009a\5\4\3\2\u0099\u0098\3\2\2\2\u0099"+
		"\u009a\3\2\2\2\u009a\u009b\3\2\2\2\u009b\u009c\7\2\2\3\u009c\3\3\2\2\2"+
		"\u009d\u009f\5\6\4\2\u009e\u009d\3\2\2\2\u009f\u00a0\3\2\2\2\u00a0\u009e"+
		"\3\2\2\2\u00a0\u00a1\3\2\2\2\u00a1\5\3\2\2\2\u00a2\u00a5\5\b\5\2\u00a3"+
		"\u00a5\5\n\6\2\u00a4\u00a2\3\2\2\2\u00a4\u00a3\3\2\2\2\u00a5\7\3\2\2\2"+
		"\u00a6\u00af\5j\66\2\u00a7\u00af\5\22\n\2\u00a8\u00af\5\20\t\2\u00a9\u00af"+
		"\5\24\13\2\u00aa\u00af\5<\37\2\u00ab\u00af\5> \2\u00ac\u00af\5@!\2\u00ad"+
		"\u00af\5\26\f\2\u00ae\u00a6\3\2\2\2\u00ae\u00a7\3\2\2\2\u00ae\u00a8\3"+
		"\2\2\2\u00ae\u00a9\3\2\2\2\u00ae\u00aa\3\2\2\2\u00ae\u00ab\3\2\2\2\u00ae"+
		"\u00ac\3\2\2\2\u00ae\u00ad\3\2\2\2\u00af\t\3\2\2\2\u00b0\u00b7\5\16\b"+
		"\2\u00b1\u00b7\5V,\2\u00b2\u00b7\5.\30\2\u00b3\u00b7\58\35\2\u00b4\u00b7"+
		"\5N(\2\u00b5\u00b7\5B\"\2\u00b6\u00b0\3\2\2\2\u00b6\u00b1\3\2\2\2\u00b6"+
		"\u00b2\3\2\2\2\u00b6\u00b3\3\2\2\2\u00b6\u00b4\3\2\2\2\u00b6\u00b5\3\2"+
		"\2\2\u00b7\13\3\2\2\2\u00b8\u00ba\7\17\2\2\u00b9\u00bb\5\4\3\2\u00ba\u00b9"+
		"\3\2\2\2\u00ba\u00bb\3\2\2\2\u00bb\u00bc\3\2\2\2\u00bc\u00bd\7\20\2\2"+
		"\u00bd\r\3\2\2\2\u00be\u00bf\5\f\7\2\u00bf\17\3\2\2\2\u00c0\u00c1\7M\2"+
		"\2\u00c1\u00c2\t\2\2\2\u00c2\21\3\2\2\2\u00c3\u00c4\7\21\2\2\u00c4\23"+
		"\3\2\2\2\u00c5\u00c6\7N\2\2\u00c6\u00c7\5,\27\2\u00c7\25\3\2\2\2\u00c8"+
		"\u00c9\6\f\2\2\u00c9\u00ca\5,\27\2\u00ca\u00cb\5\u0096L\2\u00cb\27\3\2"+
		"\2\2\u00cc\u00cd\5\u0092J\2\u00cd\u00ce\5R*\2\u00ce\u00d2\3\2\2\2\u00cf"+
		"\u00d0\7{\2\2\u00d0\u00d2\5R*\2\u00d1\u00cc\3\2\2\2\u00d1\u00cf\3\2\2"+
		"\2\u00d2\31\3\2\2\2\u00d3\u00da\5R*\2\u00d4\u00d5\7\27\2\2\u00d5\u00d7"+
		"\5\u0092J\2\u00d6\u00d8\5R*\2\u00d7\u00d6\3\2\2\2\u00d7\u00d8\3\2\2\2"+
		"\u00d8\u00da\3\2\2\2\u00d9\u00d3\3\2\2\2\u00d9\u00d4\3\2\2\2\u00da\33"+
		"\3\2\2\2\u00db\u00dc\b\17\1\2\u00dc\u00ee\7w\2\2\u00dd\u00ee\7x\2\2\u00de"+
		"\u00ee\7{\2\2\u00df\u00e1\7u\2\2\u00e0\u00e2\7t\2\2\u00e1\u00e0\3\2\2"+
		"\2\u00e1\u00e2\3\2\2\2\u00e2\u00e7\3\2\2\2\u00e3\u00e5\7\\\2\2\u00e4\u00e6"+
		"\7s\2\2\u00e5\u00e4\3\2\2\2\u00e5\u00e6\3\2\2\2\u00e6\u00e8\3\2\2\2\u00e7"+
		"\u00e3\3\2\2\2\u00e7\u00e8\3\2\2\2\u00e8\u00e9\3\2\2\2\u00e9\u00ea\7\u0086"+
		"\2\2\u00ea\u00ee\5R*\2\u00eb\u00ee\5\u0092J\2\u00ec\u00ee\5l\67\2\u00ed"+
		"\u00db\3\2\2\2\u00ed\u00dd\3\2\2\2\u00ed\u00de\3\2\2\2\u00ed\u00df\3\2"+
		"\2\2\u00ed\u00eb\3\2\2\2\u00ed\u00ec\3\2\2\2\u00ee\u0106\3\2\2\2\u00ef"+
		"\u00f0\f\t\2\2\u00f0\u00f1\7\27\2\2\u00f1\u00f2\5\36\20\2\u00f2\u00f3"+
		"\5R*\2\u00f3\u0105\3\2\2\2\u00f4\u00f5\f\b\2\2\u00f5\u00f6\7\27\2\2\u00f6"+
		"\u0105\5\36\20\2\u00f7\u00f8\f\7\2\2\u00f8\u00f9\7\13\2\2\u00f9\u00fa"+
		"\5 \21\2\u00fa\u00fb\7\f\2\2\u00fb\u00fc\5R*\2\u00fc\u0105\3\2\2\2\u00fd"+
		"\u00fe\f\6\2\2\u00fe\u00ff\7\13\2\2\u00ff\u0100\5 \21\2\u0100\u0101\7"+
		"\f\2\2\u0101\u0105\3\2\2\2\u0102\u0103\f\5\2\2\u0103\u0105\5R*\2\u0104"+
		"\u00ef\3\2\2\2\u0104\u00f4\3\2\2\2\u0104\u00f7\3\2\2\2\u0104\u00fd\3\2"+
		"\2\2\u0104\u0102\3\2\2\2\u0105\u0108\3\2\2\2\u0106\u0104\3\2\2\2\u0106"+
		"\u0107\3\2\2\2\u0107\35\3\2\2\2\u0108\u0106\3\2\2\2\u0109\u0110\7w\2\2"+
		"\u010a\u0110\7x\2\2\u010b\u0110\7{\2\2\u010c\u0110\7z\2\2\u010d\u0110"+
		"\5\u0092J\2\u010e\u0110\5l\67\2\u010f\u0109\3\2\2\2\u010f\u010a\3\2\2"+
		"\2\u010f\u010b\3\2\2\2\u010f\u010c\3\2\2\2\u010f\u010d\3\2\2\2\u010f\u010e"+
		"\3\2\2\2\u0110\37\3\2\2\2\u0111\u0112\b\21\1\2\u0112\u013c\5v<\2\u0113"+
		"\u0114\5*\26\2\u0114\u0115\5R*\2\u0115\u013c\3\2\2\2\u0116\u013c\7\n\2"+
		"\2\u0117\u0118\7k\2\2\u0118\u0119\7\27\2\2\u0119\u011a\t\3\2\2\u011a\u013c"+
		"\5R*\2\u011b\u011c\7e\2\2\u011c\u013c\5 \21\36\u011d\u011e\t\4\2\2\u011e"+
		"\u013c\5 \21\34\u011f\u0120\7\32\2\2\u0120\u013c\5 \21\33\u0121\u0122"+
		"\7\33\2\2\u0122\u013c\5 \21\32\u0123\u0124\7\34\2\2\u0124\u013c\5 \21"+
		"\31\u0125\u0126\7\35\2\2\u0126\u013c\5 \21\30\u0127\u0128\5\u008cG\2\u0128"+
		"\u0129\7[\2\2\u0129\u012a\5 \21\27\u012a\u013c\3\2\2\2\u012b\u012c\5\34"+
		"\17\2\u012c\u012d\7\23\2\2\u012d\u012e\5 \21\t\u012e\u013c\3\2\2\2\u012f"+
		"\u0130\5\34\17\2\u0130\u0131\5|?\2\u0131\u0132\5 \21\b\u0132\u013c\3\2"+
		"\2\2\u0133\u013c\5p9\2\u0134\u0135\7\r\2\2\u0135\u0136\5 \21\2\u0136\u0137"+
		"\7\16\2\2\u0137\u013c\3\2\2\2\u0138\u013c\5\34\17\2\u0139\u013c\5\u0088"+
		"E\2\u013a\u013c\7A\2\2\u013b\u0111\3\2\2\2\u013b\u0113\3\2\2\2\u013b\u0116"+
		"\3\2\2\2\u013b\u0117\3\2\2\2\u013b\u011b\3\2\2\2\u013b\u011d\3\2\2\2\u013b"+
		"\u011f\3\2\2\2\u013b\u0121\3\2\2\2\u013b\u0123\3\2\2\2\u013b\u0125\3\2"+
		"\2\2\u013b\u0127\3\2\2\2\u013b\u012b\3\2\2\2\u013b\u012f\3\2\2\2\u013b"+
		"\u0133\3\2\2\2\u013b\u0134\3\2\2\2\u013b\u0138\3\2\2\2\u013b\u0139\3\2"+
		"\2\2\u013b\u013a\3\2\2\2\u013c\u016b\3\2\2\2\u013d\u013e\f\26\2\2\u013e"+
		"\u013f\t\5\2\2\u013f\u016a\5 \21\27\u0140\u0141\f\25\2\2\u0141\u0142\t"+
		"\6\2\2\u0142\u016a\5 \21\26\u0143\u0144\f\24\2\2\u0144\u0145\t\7\2\2\u0145"+
		"\u016a\5 \21\25\u0146\u0147\f\23\2\2\u0147\u0148\7!\2\2\u0148\u016a\5"+
		" \21\23\u0149\u014a\f\22\2\2\u014a\u014b\t\b\2\2\u014b\u016a\5 \21\23"+
		"\u014c\u014d\f\21\2\2\u014d\u014e\7)\2\2\u014e\u016a\5 \21\22\u014f\u0150"+
		"\f\20\2\2\u0150\u0151\7*\2\2\u0151\u016a\5 \21\21\u0152\u0153\f\16\2\2"+
		"\u0153\u0154\t\t\2\2\u0154\u016a\5 \21\17\u0155\u0156\f\r\2\2\u0156\u0157"+
		"\t\n\2\2\u0157\u016a\5 \21\16\u0158\u0159\f\f\2\2\u0159\u015a\t\13\2\2"+
		"\u015a\u016a\5 \21\r\u015b\u015c\f\13\2\2\u015c\u015d\t\f\2\2\u015d\u016a"+
		"\5 \21\f\u015e\u015f\f\n\2\2\u015f\u0160\7\24\2\2\u0160\u0161\5 \21\2"+
		"\u0161\u0162\7\25\2\2\u0162\u0163\5 \21\13\u0163\u016a\3\2\2\2\u0164\u0165"+
		"\f\35\2\2\u0165\u016a\t\4\2\2\u0166\u0167\f\17\2\2\u0167\u0168\7|\2\2"+
		"\u0168\u016a\5\u0092J\2\u0169\u013d\3\2\2\2\u0169\u0140\3\2\2\2\u0169"+
		"\u0143\3\2\2\2\u0169\u0146\3\2\2\2\u0169\u0149\3\2\2\2\u0169\u014c\3\2"+
		"\2\2\u0169\u014f\3\2\2\2\u0169\u0152\3\2\2\2\u0169\u0155\3\2\2\2\u0169"+
		"\u0158\3\2\2\2\u0169\u015b\3\2\2\2\u0169\u015e\3\2\2\2\u0169\u0164\3\2"+
		"\2\2\u0169\u0166\3\2\2\2\u016a\u016d\3\2\2\2\u016b\u0169\3\2\2\2\u016b"+
		"\u016c\3\2\2\2\u016c!\3\2\2\2\u016d\u016b\3\2\2\2\u016e\u016f\7n\2\2\u016f"+
		"#\3\2\2\2\u0170\u017a\7f\2\2\u0171\u017a\7i\2\2\u0172\u017a\7j\2\2\u0173"+
		"\u017a\7m\2\2\u0174\u017a\7l\2\2\u0175\u017a\7p\2\2\u0176\u017a\7o\2\2"+
		"\u0177\u017a\7q\2\2\u0178\u017a\7~\2\2\u0179\u0170\3\2\2\2\u0179\u0171"+
		"\3\2\2\2\u0179\u0172\3\2\2\2\u0179\u0173\3\2\2\2\u0179\u0174\3\2\2\2\u0179"+
		"\u0175\3\2\2\2\u0179\u0176\3\2\2\2\u0179\u0177\3\2\2\2\u0179\u0178\3\2"+
		"\2\2\u017a%\3\2\2\2\u017b\u017e\7g\2\2\u017c\u017e\7r\2\2\u017d\u017b"+
		"\3\2\2\2\u017d\u017c\3\2\2\2\u017e\'\3\2\2\2\u017f\u0180\7h\2\2\u0180"+
		")\3\2\2\2\u0181\u0186\5\"\22\2\u0182\u0186\5$\23\2\u0183\u0186\5&\24\2"+
		"\u0184\u0186\5(\25\2\u0185\u0181\3\2\2\2\u0185\u0182\3\2\2\2\u0185\u0183"+
		"\3\2\2\2\u0185\u0184\3\2\2\2\u0186+\3\2\2\2\u0187\u018c\5 \21\2\u0188"+
		"\u0189\7\22\2\2\u0189\u018b\5 \21\2\u018a\u0188\3\2\2\2\u018b\u018e\3"+
		"\2\2\2\u018c\u018a\3\2\2\2\u018c\u018d\3\2\2\2\u018d-\3\2\2\2\u018e\u018c"+
		"\3\2\2\2\u018f\u0190\7^\2\2\u0190\u0192\5 \21\2\u0191\u0193\7_\2\2\u0192"+
		"\u0191\3\2\2\2\u0192\u0193\3\2\2\2\u0193\u0194\3\2\2\2\u0194\u0196\5\6"+
		"\4\2\u0195\u0197\5\60\31\2\u0196\u0195\3\2\2\2\u0196\u0197\3\2\2\2\u0197"+
		"\u019d\3\2\2\2\u0198\u019a\7a\2\2\u0199\u019b\7_\2\2\u019a\u0199\3\2\2"+
		"\2\u019a\u019b\3\2\2\2\u019b\u019c\3\2\2\2\u019c\u019e\5\6\4\2\u019d\u0198"+
		"\3\2\2\2\u019d\u019e\3\2\2\2\u019e/\3\2\2\2\u019f\u01a1\5\62\32\2\u01a0"+
		"\u019f\3\2\2\2\u01a1\u01a2\3\2\2\2\u01a2\u01a0\3\2\2\2\u01a2\u01a3\3\2"+
		"\2\2\u01a3\61\3\2\2\2\u01a4\u01a5\7`\2\2\u01a5\u01a7\5 \21\2\u01a6\u01a8"+
		"\7_\2\2\u01a7\u01a6\3\2\2\2\u01a7\u01a8\3\2\2\2\u01a8\u01a9\3\2\2\2\u01a9"+
		"\u01aa\5\6\4\2\u01aa\63\3\2\2\2\u01ab\u01ac\7\u0086\2\2\u01ac\u01ad\t"+
		"\r\2\2\u01ad\u01b9\5 \21\2\u01ae\u01af\7\u0086\2\2\u01af\u01b0\7\22\2"+
		"\2\u01b0\u01b1\7\u0086\2\2\u01b1\u01b2\t\r\2\2\u01b2\u01b9\5 \21\2\u01b3"+
		"\u01b4\7\u0086\2\2\u01b4\u01b5\7@\2\2\u01b5\u01b6\7\u0086\2\2\u01b6\u01b7"+
		"\t\r\2\2\u01b7\u01b9\5 \21\2\u01b8\u01ab\3\2\2\2\u01b8\u01ae\3\2\2\2\u01b8"+
		"\u01b3\3\2\2\2\u01b9\65\3\2\2\2\u01ba\u01bc\7\u0081\2\2\u01bb\u01ba\3"+
		"\2\2\2\u01bb\u01bc\3\2\2\2\u01bc\u01bd\3\2\2\2\u01bd\u01be\5\u0092J\2"+
		"\u01be\u01bf\t\16\2\2\u01bf\u01c0\5 \21\2\u01c0\u01c1\7]\2\2\u01c1\u01c2"+
		"\5 \21\2\u01c2\67\3\2\2\2\u01c3\u01c4\7P\2\2\u01c4\u01c6\5 \21\2\u01c5"+
		"\u01c7\7Q\2\2\u01c6\u01c5\3\2\2\2\u01c6\u01c7\3\2\2\2\u01c7\u01c8\3\2"+
		"\2\2\u01c8\u01c9\5\6\4\2\u01c9\u0215\3\2\2\2\u01ca\u01cb\t\17\2\2\u01cb"+
		"\u01cc\5\6\4\2\u01cc\u01cd\7O\2\2\u01cd\u01ce\5 \21\2\u01ce\u0215\3\2"+
		"\2\2\u01cf\u01d1\7P\2\2\u01d0\u01cf\3\2\2\2\u01d0\u01d1\3\2\2\2\u01d1"+
		"\u01d2\3\2\2\2\u01d2\u01d3\7O\2\2\u01d3\u01d5\5 \21\2\u01d4\u01d6\t\17"+
		"\2\2\u01d5\u01d4\3\2\2\2\u01d5\u01d6\3\2\2\2\u01d6\u01d7\3\2\2\2\u01d7"+
		"\u01d8\5\6\4\2\u01d8\u0215\3\2\2\2\u01d9\u01da\7Z\2\2\u01da\u01dc\7\r"+
		"\2\2\u01db\u01dd\5:\36\2\u01dc\u01db\3\2\2\2\u01dc\u01dd\3\2\2\2\u01dd"+
		"\u01de\3\2\2\2\u01de\u01e0\7\21\2\2\u01df\u01e1\5,\27\2\u01e0\u01df\3"+
		"\2\2\2\u01e0\u01e1\3\2\2\2\u01e1\u01e2\3\2\2\2\u01e2\u01e4\7\21\2\2\u01e3"+
		"\u01e5\5,\27\2\u01e4\u01e3\3\2\2\2\u01e4\u01e5\3\2\2\2\u01e5\u01e6\3\2"+
		"\2\2\u01e6\u01e7\7\16\2\2\u01e7\u0215\5\6\4\2\u01e8\u01e9\7Z\2\2\u01e9"+
		"\u01eb\5\66\34\2\u01ea\u01ec\t\17\2\2\u01eb\u01ea\3\2\2\2\u01eb\u01ec"+
		"\3\2\2\2\u01ec\u01ed\3\2\2\2\u01ed\u01ee\5\6\4\2\u01ee\u0215\3\2\2\2\u01ef"+
		"\u01f0\7Z\2\2\u01f0\u01f1\7\r\2\2\u01f1\u01f2\5\66\34\2\u01f2\u01f4\7"+
		"\16\2\2\u01f3\u01f5\t\17\2\2\u01f4\u01f3\3\2\2\2\u01f4\u01f5\3\2\2\2\u01f5"+
		"\u01f6\3\2\2\2\u01f6\u01f7\5\6\4\2\u01f7\u0215\3\2\2\2\u01f8\u01fa\7Z"+
		"\2\2\u01f9\u01fb\7X\2\2\u01fa\u01f9\3\2\2\2\u01fa\u01fb\3\2\2\2\u01fb"+
		"\u01fe\3\2\2\2\u01fc\u01fe\7Y\2\2\u01fd\u01f8\3\2\2\2\u01fd\u01fc\3\2"+
		"\2\2\u01fe\u01ff\3\2\2\2\u01ff\u0201\5\64\33\2\u0200\u0202\t\17\2\2\u0201"+
		"\u0200\3\2\2\2\u0201\u0202\3\2\2\2\u0202\u0203\3\2\2\2\u0203\u0204\5\6"+
		"\4\2\u0204\u0215\3\2\2\2\u0205\u0207\7Z\2\2\u0206\u0208\7X\2\2\u0207\u0206"+
		"\3\2\2\2\u0207\u0208\3\2\2\2\u0208\u020b\3\2\2\2\u0209\u020b\7Y\2\2\u020a"+
		"\u0205\3\2\2\2\u020a\u0209\3\2\2\2\u020b\u020c\3\2\2\2\u020c\u020d\7\r"+
		"\2\2\u020d\u020e\5\64\33\2\u020e\u0210\7\16\2\2\u020f\u0211\t\17\2\2\u0210"+
		"\u020f\3\2\2\2\u0210\u0211\3\2\2\2\u0211\u0212\3\2\2\2\u0212\u0213\5\6"+
		"\4\2\u0213\u0215\3\2\2\2\u0214\u01c3\3\2\2\2\u0214\u01ca\3\2\2\2\u0214"+
		"\u01d0\3\2\2\2\u0214\u01d9\3\2\2\2\u0214\u01e8\3\2\2\2\u0214\u01ef\3\2"+
		"\2\2\u0214\u01fd\3\2\2\2\u0214\u020a\3\2\2\2\u02159\3\2\2\2\u0216\u0219"+
		"\5,\27\2\u0217\u0219\5p9\2\u0218\u0216\3\2\2\2\u0218\u0217\3\2\2\2\u0219"+
		";\3\2\2\2\u021a\u021b\7S\2\2\u021b\u021c\5\u0096L\2\u021c=\3\2\2\2\u021d"+
		"\u021e\7T\2\2\u021e\u021f\5\u0096L\2\u021f?\3\2\2\2\u0220\u0223\7b\2\2"+
		"\u0221\u0224\5 \21\2\u0222\u0224\5\u0096L\2\u0223\u0221\3\2\2\2\u0223"+
		"\u0222\3\2\2\2\u0224A\3\2\2\2\u0225\u0226\7U\2\2\u0226\u0227\7\r\2\2\u0227"+
		"\u0228\5,\27\2\u0228\u0229\7\16\2\2\u0229\u022a\5D#\2\u022aC\3\2\2\2\u022b"+
		"\u022d\7\17\2\2\u022c\u022e\5F$\2\u022d\u022c\3\2\2\2\u022d\u022e\3\2"+
		"\2\2\u022e\u0233\3\2\2\2\u022f\u0231\5J&\2\u0230\u0232\5F$\2\u0231\u0230"+
		"\3\2\2\2\u0231\u0232\3\2\2\2\u0232\u0234\3\2\2\2\u0233\u022f\3\2\2\2\u0233"+
		"\u0234\3\2\2\2\u0234\u0235\3\2\2\2\u0235\u0236\7\20\2\2\u0236E\3\2\2\2"+
		"\u0237\u0239\5H%\2\u0238\u0237\3\2\2\2\u0239\u023a\3\2\2\2\u023a\u0238"+
		"\3\2\2\2\u023a\u023b\3\2\2\2\u023bG\3\2\2\2\u023c\u023d\7V\2\2\u023d\u023e"+
		"\5,\27\2\u023e\u0240\7\25\2\2\u023f\u0241\5\4\3\2\u0240\u023f\3\2\2\2"+
		"\u0240\u0241\3\2\2\2\u0241I\3\2\2\2\u0242\u0243\7W\2\2\u0243\u0245\7\25"+
		"\2\2\u0244\u0246\5\4\3\2\u0245\u0244\3\2\2\2\u0245\u0246\3\2\2\2\u0246"+
		"K\3\2\2\2\u0247\u024c\5h\65\2\u0248\u0249\7\22\2\2\u0249\u024b\5h\65\2"+
		"\u024a\u0248\3\2\2\2\u024b\u024e\3\2\2\2\u024c\u024a\3\2\2\2\u024c\u024d"+
		"\3\2\2\2\u024dM\3\2\2\2\u024e\u024c\3\2\2\2\u024f\u0251\7c\2\2\u0250\u024f"+
		"\3\2\2\2\u0250\u0251\3\2\2\2\u0251\u0252\3\2\2\2\u0252\u0253\7d\2\2\u0253"+
		"\u0254\5\u0092J\2\u0254\u0256\7\r\2\2\u0255\u0257\5L\'\2\u0256\u0255\3"+
		"\2\2\2\u0256\u0257\3\2\2\2\u0257\u0258\3\2\2\2\u0258\u0259\7\16\2\2\u0259"+
		"\u025a\5t;\2\u025aO\3\2\2\2\u025b\u025c\7d\2\2\u025c\u025d\5\u0092J\2"+
		"\u025d\u025f\7\r\2\2\u025e\u0260\5L\'\2\u025f\u025e\3\2\2\2\u025f\u0260"+
		"\3\2\2\2\u0260\u0261\3\2\2\2\u0261\u0262\7\16\2\2\u0262\u0263\5t;\2\u0263"+
		"Q\3\2\2\2\u0264\u026d\7\r\2\2\u0265\u026a\5 \21\2\u0266\u0267\7\22\2\2"+
		"\u0267\u0269\5 \21\2\u0268\u0266\3\2\2\2\u0269\u026c\3\2\2\2\u026a\u0268"+
		"\3\2\2\2\u026a\u026b\3\2\2\2\u026b\u026e\3\2\2\2\u026c\u026a\3\2\2\2\u026d"+
		"\u0265\3\2\2\2\u026d\u026e\3\2\2\2\u026e\u026f\3\2\2\2\u026f\u0270\7\16"+
		"\2\2\u0270S\3\2\2\2\u0271\u0272\t\20\2\2\u0272U\3\2\2\2\u0273\u0275\7"+
		"c\2\2\u0274\u0273\3\2\2\2\u0274\u0275\3\2\2\2\u0275\u0276\3\2\2\2\u0276"+
		"\u0277\7s\2\2\u0277\u027a\5\u0092J\2\u0278\u0279\7v\2\2\u0279\u027b\5"+
		"\u0092J\2\u027a\u0278\3\2\2\2\u027a\u027b\3\2\2\2\u027b\u027c\3\2\2\2"+
		"\u027c\u0288\7\17\2\2\u027d\u027e\7w\2\2\u027e\u0280\7\25\2\2\u027f\u027d"+
		"\3\2\2\2\u027f\u0280\3\2\2\2\u0280\u0286\3\2\2\2\u0281\u0282\7\17\2\2"+
		"\u0282\u0283\5X-\2\u0283\u0284\7\20\2\2\u0284\u0287\3\2\2\2\u0285\u0287"+
		"\5X-\2\u0286\u0281\3\2\2\2\u0286\u0285\3\2\2\2\u0287\u0289\3\2\2\2\u0288"+
		"\u027f\3\2\2\2\u0288\u0289\3\2\2\2\u0289\u028a\3\2\2\2\u028a\u0296\5\u0096"+
		"L\2\u028b\u028c\7x\2\2\u028c\u028e\7\25\2\2\u028d\u028b\3\2\2\2\u028d"+
		"\u028e\3\2\2\2\u028e\u0294\3\2\2\2\u028f\u0295\5`\61\2\u0290\u0291\7\17"+
		"\2\2\u0291\u0292\5`\61\2\u0292\u0293\7\20\2\2\u0293\u0295\3\2\2\2\u0294"+
		"\u028f\3\2\2\2\u0294\u0290\3\2\2\2\u0295\u0297\3\2\2\2\u0296\u028d\3\2"+
		"\2\2\u0296\u0297\3\2\2\2\u0297\u0298\3\2\2\2\u0298\u0299\7\20\2\2\u0299"+
		"W\3\2\2\2\u029a\u029c\5Z.\2\u029b\u029a\3\2\2\2\u029c\u029d\3\2\2\2\u029d"+
		"\u029b\3\2\2\2\u029d\u029e\3\2\2\2\u029eY\3\2\2\2\u029f\u02a1\5T+\2\u02a0"+
		"\u029f\3\2\2\2\u02a0\u02a1\3\2\2\2\u02a1\u02a2\3\2\2\2\u02a2\u02a7\5n"+
		"8\2\u02a3\u02a4\7\22\2\2\u02a4\u02a6\5n8\2\u02a5\u02a3\3\2\2\2\u02a6\u02a9"+
		"\3\2\2\2\u02a7\u02a5\3\2\2\2\u02a7\u02a8\3\2\2\2\u02a8[\3\2\2\2\u02a9"+
		"\u02a7\3\2\2\2\u02aa\u02ac\5T+\2\u02ab\u02aa\3\2\2\2\u02ab\u02ac\3\2\2"+
		"\2\u02ac\u02ae\3\2\2\2\u02ad\u02af\t\21\2\2\u02ae\u02ad\3\2\2\2\u02ae"+
		"\u02af\3\2\2\2\u02af\u02b0\3\2\2\2\u02b0\u02b1\5^\60\2\u02b1\u02b3\7\r"+
		"\2\2\u02b2\u02b4\5L\'\2\u02b3\u02b2\3\2\2\2\u02b3\u02b4\3\2\2\2\u02b4"+
		"\u02b5\3\2\2\2\u02b5\u02b6\7\16\2\2\u02b6\u02b7\5t;\2\u02b7]\3\2\2\2\u02b8"+
		"\u02bb\5\u0092J\2\u02b9\u02bb\7z\2\2\u02ba\u02b8\3\2\2\2\u02ba\u02b9\3"+
		"\2\2\2\u02bb_\3\2\2\2\u02bc\u02be\5\\/\2\u02bd\u02bc\3\2\2\2\u02be\u02bf"+
		"\3\2\2\2\u02bf\u02bd\3\2\2\2\u02bf\u02c0\3\2\2\2\u02c0a\3\2\2\2\u02c1"+
		"\u02c3\7u\2\2\u02c2\u02c4\7t\2\2\u02c3\u02c2\3\2\2\2\u02c3\u02c4\3\2\2"+
		"\2\u02c4\u02c9\3\2\2\2\u02c5\u02c7\7\\\2\2\u02c6\u02c8\7s\2\2\u02c7\u02c6"+
		"\3\2\2\2\u02c7\u02c8\3\2\2\2\u02c8\u02ca\3\2\2\2\u02c9\u02c5\3\2\2\2\u02c9"+
		"\u02ca\3\2\2\2\u02ca\u02cb\3\2\2\2\u02cb\u02cc\7\u0086\2\2\u02cc\u02cd"+
		"\5R*\2\u02cdc\3\2\2\2\u02ce\u02d0\7\13\2\2\u02cf\u02d1\5 \21\2\u02d0\u02cf"+
		"\3\2\2\2\u02d0\u02d1\3\2\2\2\u02d1\u02d2\3\2\2\2\u02d2\u02d3\7\f\2\2\u02d3"+
		"e\3\2\2\2\u02d4\u02d6\5d\63\2\u02d5\u02d4\3\2\2\2\u02d6\u02d7\3\2\2\2"+
		"\u02d7\u02d5\3\2\2\2\u02d7\u02d8\3\2\2\2\u02d8g\3\2\2\2\u02d9\u02dc\5"+
		"l\67\2\u02da\u02dc\5\u0092J\2\u02db\u02d9\3\2\2\2\u02db\u02da\3\2\2\2"+
		"\u02dc\u02df\3\2\2\2\u02dd\u02de\7\23\2\2\u02de\u02e0\5 \21\2\u02df\u02dd"+
		"\3\2\2\2\u02df\u02e0\3\2\2\2\u02e0i\3\2\2\2\u02e1\u02e2\5p9\2\u02e2\u02e3"+
		"\5\u0096L\2\u02e3k\3\2\2\2\u02e4\u02e5\t\22\2\2\u02e5m\3\2\2\2\u02e6\u02e9"+
		"\5l\67\2\u02e7\u02e9\5\u0092J\2\u02e8\u02e6\3\2\2\2\u02e8\u02e7\3\2\2"+
		"\2\u02e9\u02ec\3\2\2\2\u02ea\u02eb\7\23\2\2\u02eb\u02ed\5 \21\2\u02ec"+
		"\u02ea\3\2\2\2\u02ec\u02ed\3\2\2\2\u02edo\3\2\2\2\u02ee\u02ef\5r:\2\u02ef"+
		"\u02f4\5n8\2\u02f0\u02f1\7\22\2\2\u02f1\u02f3\5n8\2\u02f2\u02f0\3\2\2"+
		"\2\u02f3\u02f6\3\2\2\2\u02f4\u02f2\3\2\2\2\u02f4\u02f5\3\2\2\2\u02f5q"+
		"\3\2\2\2\u02f6\u02f4\3\2\2\2\u02f7\u02ff\7c\2\2\u02f8\u02f9\7c\2\2\u02f9"+
		"\u02ff\7\u0081\2\2\u02fa\u02fb\7c\2\2\u02fb\u02ff\7\u0082\2\2\u02fc\u02ff"+
		"\7\u0081\2\2\u02fd\u02ff\7\u0082\2\2\u02fe\u02f7\3\2\2\2\u02fe\u02f8\3"+
		"\2\2\2\u02fe\u02fa\3\2\2\2\u02fe\u02fc\3\2\2\2\u02fe\u02fd\3\2\2\2\u02ff"+
		"s\3\2\2\2\u0300\u0303\5\16\b\2\u0301\u0303\5\6\4\2\u0302\u0300\3\2\2\2"+
		"\u0302\u0301\3\2\2\2\u0303u\3\2\2\2\u0304\u0305\7d\2\2\u0305\u0307\7\r"+
		"\2\2\u0306\u0308\5L\'\2\u0307\u0306\3\2\2\2\u0307\u0308\3\2\2\2\u0308"+
		"\u0309\3\2\2\2\u0309\u030a\7\16\2\2\u030a\u0310\5t;\2\u030b\u030c\5x="+
		"\2\u030c\u030d\7@\2\2\u030d\u030e\5z>\2\u030e\u0310\3\2\2\2\u030f\u0304"+
		"\3\2\2\2\u030f\u030b\3\2\2\2\u0310w\3\2\2\2\u0311\u0318\5\u0092J\2\u0312"+
		"\u0314\7\r\2\2\u0313\u0315\5L\'\2\u0314\u0313\3\2\2\2\u0314\u0315\3\2"+
		"\2\2\u0315\u0316\3\2\2\2\u0316\u0318\7\16\2\2\u0317\u0311\3\2\2\2\u0317"+
		"\u0312\3\2\2\2\u0318y\3\2\2\2\u0319\u031c\5 \21\2\u031a\u031c\5t;\2\u031b"+
		"\u0319\3\2\2\2\u031b\u031a\3\2\2\2\u031c{\3\2\2\2\u031d\u031e\t\23\2\2"+
		"\u031e}\3\2\2\2\u031f\u0323\5\u0094K\2\u0320\u0323\7B\2\2\u0321\u0323"+
		"\7L\2\2\u0322\u031f\3\2\2\2\u0322\u0320\3\2\2\2\u0322\u0321\3\2\2\2\u0323"+
		"\177\3\2\2\2\u0324\u0325\7u\2\2\u0325\u0326\7}\2\2\u0326\u0328\7\r\2\2"+
		"\u0327\u0329\5\u0082B\2\u0328\u0327\3\2\2\2\u0328\u0329\3\2\2\2\u0329"+
		"\u032a\3\2\2\2\u032a\u032b\7\16\2\2\u032b\u0081\3\2\2\2\u032c\u0335\7"+
		"\13\2\2\u032d\u0332\5 \21\2\u032e\u032f\7\22\2\2\u032f\u0331\5 \21\2\u0330"+
		"\u032e\3\2\2\2\u0331\u0334\3\2\2\2\u0332\u0330\3\2\2\2\u0332\u0333\3\2"+
		"\2\2\u0333\u0336\3\2\2\2\u0334\u0332\3\2\2\2\u0335\u032d\3\2\2\2\u0335"+
		"\u0336\3\2\2\2\u0336\u0337\3\2\2\2\u0337\u0338\7\f\2\2\u0338\u0083\3\2"+
		"\2\2\u0339\u033f\5\u0092J\2\u033a\u033f\5l\67\2\u033b\u033f\5\u008cG\2"+
		"\u033c\u033f\5\u0090I\2\u033d\u033f\5\u008aF\2\u033e\u0339\3\2\2\2\u033e"+
		"\u033a\3\2\2\2\u033e\u033b\3\2\2\2\u033e\u033c\3\2\2\2\u033e\u033d\3\2"+
		"\2\2\u033f\u0085\3\2\2\2\u0340\u034e\7\17\2\2\u0341\u0342\5\u0084C\2\u0342"+
		"\u0343\7\25\2\2\u0343\u034b\5 \21\2\u0344\u0345\7\22\2\2\u0345\u0346\5"+
		"\u0084C\2\u0346\u0347\7\25\2\2\u0347\u0348\5 \21\2\u0348\u034a\3\2\2\2"+
		"\u0349\u0344\3\2\2\2\u034a\u034d\3\2\2\2\u034b\u0349\3\2\2\2\u034b\u034c"+
		"\3\2\2\2\u034c\u034f\3\2\2\2\u034d\u034b\3\2\2\2\u034e\u0341\3\2\2\2\u034e"+
		"\u034f\3\2\2\2\u034f\u0350\3\2\2\2\u0350\u0351\7\20\2\2\u0351\u0087\3"+
		"\2\2\2\u0352\u035a\5\u008eH\2\u0353\u035a\5\u008aF\2\u0354\u035a\5\u008c"+
		"G\2\u0355\u035a\5\u0090I\2\u0356\u035a\5\u0082B\2\u0357\u035a\5\u0086"+
		"D\2\u0358\u035a\5\u0080A\2\u0359\u0352\3\2\2\2\u0359\u0353\3\2\2\2\u0359"+
		"\u0354\3\2\2\2\u0359\u0355\3\2\2\2\u0359\u0356\3\2\2\2\u0359\u0357\3\2"+
		"\2\2\u0359\u0358\3\2\2\2\u035a\u0089\3\2\2\2\u035b\u035c\7L\2\2\u035c"+
		"\u008b\3\2\2\2\u035d\u035e\7\u0087\2\2\u035e\u008d\3\2\2\2\u035f\u0360"+
		"\7B\2\2\u0360\u008f\3\2\2\2\u0361\u0362\t\24\2\2\u0362\u0091\3\2\2\2\u0363"+
		"\u0364\7\u0086\2\2\u0364\u0093\3\2\2\2\u0365\u0366\t\25\2\2\u0366\u0095"+
		"\3\2\2\2\u0367\u036c\7\21\2\2\u0368\u036c\7\2\2\3\u0369\u036c\6L\26\2"+
		"\u036a\u036c\6L\27\2\u036b\u0367\3\2\2\2\u036b\u0368\3\2\2\2\u036b\u0369"+
		"\3\2\2\2\u036b\u036a\3\2\2\2\u036c\u0097\3\2\2\2h\u0099\u00a0\u00a4\u00ae"+
		"\u00b6\u00ba\u00d1\u00d7\u00d9\u00e1\u00e5\u00e7\u00ed\u0104\u0106\u010f"+
		"\u013b\u0169\u016b\u0179\u017d\u0185\u018c\u0192\u0196\u019a\u019d\u01a2"+
		"\u01a7\u01b8\u01bb\u01c6\u01d0\u01d5\u01dc\u01e0\u01e4\u01eb\u01f4\u01fa"+
		"\u01fd\u0201\u0207\u020a\u0210\u0214\u0218\u0223\u022d\u0231\u0233\u023a"+
		"\u0240\u0245\u024c\u0250\u0256\u025f\u026a\u026d\u0274\u027a\u027f\u0286"+
		"\u0288\u028d\u0294\u0296\u029d\u02a0\u02a7\u02ab\u02ae\u02b3\u02ba\u02bf"+
		"\u02c3\u02c7\u02c9\u02d0\u02d7\u02db\u02df\u02e8\u02ec\u02f4\u02fe\u0302"+
		"\u0307\u030f\u0314\u0317\u031b\u0322\u0328\u0332\u0335\u033e\u034b\u034e"+
		"\u0359\u036b";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}