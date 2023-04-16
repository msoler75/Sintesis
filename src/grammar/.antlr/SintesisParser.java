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
		MultiLineCommentJS=1, MultiLineCommentPy=2, MultiLineCommentPy2=3, SingleLineCommentJs=4, 
		SingleLineCommentPy=5, JavascriptCode=6, OpenBracket=7, CloseBracket=8, 
		OpenParen=9, CloseParen=10, OpenBrace=11, CloseBrace=12, SemiColon=13, 
		Comma=14, Assign=15, QuestionMark=16, Colon=17, Ellipsis=18, Dot=19, PlusPlus=20, 
		MinusMinus=21, Plus=22, Minus=23, BitNot=24, Not=25, Multiply=26, Divide=27, 
		Modulus=28, Power=29, NullCoalesce=30, Hashtag=31, RightShiftArithmetic=32, 
		LeftShiftArithmetic=33, RightShiftLogical=34, LessThan=35, MoreThan=36, 
		LessThanEquals=37, GreaterThanEquals=38, Equals_=39, NotEquals=40, IdentityEquals=41, 
		IdentityNotEquals=42, BitAnd=43, BitXOr=44, BitOr=45, And=46, Or=47, MultiplyAssign=48, 
		DivideAssign=49, ModulusAssign=50, PlusAssign=51, MinusAssign=52, LeftShiftArithmeticAssign=53, 
		RightShiftArithmeticAssign=54, RightShiftLogicalAssign=55, BitAndAssign=56, 
		BitXorAssign=57, BitOrAssign=58, PowerAssign=59, ARROW=60, PieceOfCode=61, 
		NullLiteral=62, DecimalLiteral=63, HexIntegerLiteral=64, OctalIntegerLiteral=65, 
		OctalIntegerLiteral2=66, BinaryIntegerLiteral=67, BigHexIntegerLiteral=68, 
		BigOctalIntegerLiteral=69, BigBinaryIntegerLiteral=70, BigDecimalIntegerLiteral=71, 
		BooleanLiteral=72, Step=73, Print=74, While=75, Repeat=76, Times=77, Do=78, 
		Continue=79, Break=80, Switch=81, Case=82, Default=83, Each=84, ForEach=85, 
		For=86, In=87, Of=88, To=89, If=90, Then=91, ElseIf=92, Else=93, Return=94, 
		Declare=95, Function_=96, Delete=97, NumberOf=98, IndexOf=99, Sub=100, 
		Lower=101, Upper=102, Math=103, Min=104, Max=105, Random=106, Chr=107, 
		Ord=108, Prompt=109, Convert=110, Class_=111, Instance=112, New_=113, 
		Extends=114, Attributes=115, Methods=116, Method=117, Constructor=118, 
		Super=119, InstanceOf=120, List=121, Dictionary=122, Get=123, Set=124, 
		Var_=125, Const_=126, Private=127, Public=128, Protected=129, Identifier=130, 
		StringLiteral=131, WhiteSpaces=132, LineTerminator=133;
	public static final int
		RULE_program = 0, RULE_statementList = 1, RULE_statement = 2, RULE_block = 3, 
		RULE_stepStatement = 4, RULE_emptyStatement_ = 5, RULE_printStatement = 6, 
		RULE_expressionStatement = 7, RULE_methodCall = 8, RULE_superSuffix = 9, 
		RULE_member = 10, RULE_memberIdentifier = 11, RULE_singleExpression = 12, 
		RULE_basicFunction0 = 13, RULE_basicFunction1 = 14, RULE_basicFunction2 = 15, 
		RULE_basicFunction3 = 16, RULE_basicFunction = 17, RULE_expressionSequence = 18, 
		RULE_ifStatement = 19, RULE_elseIfs = 20, RULE_elseIf = 21, RULE_iteratorIndexes = 22, 
		RULE_iteratorRange = 23, RULE_iterationStatement = 24, RULE_forPre = 25, 
		RULE_continueStatement = 26, RULE_breakStatement = 27, RULE_returnStatement = 28, 
		RULE_switchStatement = 29, RULE_caseBlock = 30, RULE_caseClauses = 31, 
		RULE_caseClause = 32, RULE_defaultClause = 33, RULE_formalParameterList = 34, 
		RULE_functionDeclaration = 35, RULE_functionDeclarationExpr = 36, RULE_arguments = 37, 
		RULE_visibility = 38, RULE_classDeclaration = 39, RULE_attributesList = 40, 
		RULE_classAttributeDecl = 41, RULE_methodDeclaration = 42, RULE_methodName = 43, 
		RULE_methodsList = 44, RULE_classExp = 45, RULE_listIndex = 46, RULE_listIndexes = 47, 
		RULE_formalParameterArg = 48, RULE_variableStatement = 49, RULE_reservedIdentifier = 50, 
		RULE_variableDeclaration = 51, RULE_variableDeclarationList = 52, RULE_varModifier = 53, 
		RULE_functionBody = 54, RULE_anonymousFunction = 55, RULE_arrowFunctionParameters = 56, 
		RULE_arrowFunctionBody = 57, RULE_assignmentOperator = 58, RULE_reservedWord = 59, 
		RULE_listDeclaration = 60, RULE_listLiteral = 61, RULE_objectLiteral = 62, 
		RULE_literal = 63, RULE_booleanLiteral = 64, RULE_stringLiteral = 65, 
		RULE_nullLiteral = 66, RULE_numericLiteral = 67, RULE_identifier = 68, 
		RULE_safeKeyword = 69, RULE_eos = 70;
	private static String[] makeRuleNames() {
		return new String[] {
			"program", "statementList", "statement", "block", "stepStatement", "emptyStatement_", 
			"printStatement", "expressionStatement", "methodCall", "superSuffix", 
			"member", "memberIdentifier", "singleExpression", "basicFunction0", "basicFunction1", 
			"basicFunction2", "basicFunction3", "basicFunction", "expressionSequence", 
			"ifStatement", "elseIfs", "elseIf", "iteratorIndexes", "iteratorRange", 
			"iterationStatement", "forPre", "continueStatement", "breakStatement", 
			"returnStatement", "switchStatement", "caseBlock", "caseClauses", "caseClause", 
			"defaultClause", "formalParameterList", "functionDeclaration", "functionDeclarationExpr", 
			"arguments", "visibility", "classDeclaration", "attributesList", "classAttributeDecl", 
			"methodDeclaration", "methodName", "methodsList", "classExp", "listIndex", 
			"listIndexes", "formalParameterArg", "variableStatement", "reservedIdentifier", 
			"variableDeclaration", "variableDeclarationList", "varModifier", "functionBody", 
			"anonymousFunction", "arrowFunctionParameters", "arrowFunctionBody", 
			"assignmentOperator", "reservedWord", "listDeclaration", "listLiteral", 
			"objectLiteral", "literal", "booleanLiteral", "stringLiteral", "nullLiteral", 
			"numericLiteral", "identifier", "safeKeyword", "eos"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, null, null, null, null, null, null, "'['", "']'", "'('", "')'", 
			"'{'", "'}'", "';'", "','", null, "'?'", "':'", "'...'", "'.'", "'++'", 
			"'--'", "'+'", "'-'", "'~'", null, "'*'", "'/'", "'%'", "'**'", "'??'", 
			"'#'", "'>>'", "'<<'", "'>>>'", "'<'", "'>'", "'<='", "'>='", "'=='", 
			null, "'==='", "'!=='", "'&'", "'^'", "'|'", null, null, "'*='", "'/='", 
			"'%='", "'+='", "'-='", "'<<='", "'>>='", "'>>>='", "'&='", "'^='", "'|='", 
			"'**='", null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, "'sub'", null, null, null, null, 
			null, null, "'chr'", "'ord'", null, null, null, null, null, null, null, 
			null, null, null, "'super'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "MultiLineCommentJS", "MultiLineCommentPy", "MultiLineCommentPy2", 
			"SingleLineCommentJs", "SingleLineCommentPy", "JavascriptCode", "OpenBracket", 
			"CloseBracket", "OpenParen", "CloseParen", "OpenBrace", "CloseBrace", 
			"SemiColon", "Comma", "Assign", "QuestionMark", "Colon", "Ellipsis", 
			"Dot", "PlusPlus", "MinusMinus", "Plus", "Minus", "BitNot", "Not", "Multiply", 
			"Divide", "Modulus", "Power", "NullCoalesce", "Hashtag", "RightShiftArithmetic", 
			"LeftShiftArithmetic", "RightShiftLogical", "LessThan", "MoreThan", "LessThanEquals", 
			"GreaterThanEquals", "Equals_", "NotEquals", "IdentityEquals", "IdentityNotEquals", 
			"BitAnd", "BitXOr", "BitOr", "And", "Or", "MultiplyAssign", "DivideAssign", 
			"ModulusAssign", "PlusAssign", "MinusAssign", "LeftShiftArithmeticAssign", 
			"RightShiftArithmeticAssign", "RightShiftLogicalAssign", "BitAndAssign", 
			"BitXorAssign", "BitOrAssign", "PowerAssign", "ARROW", "PieceOfCode", 
			"NullLiteral", "DecimalLiteral", "HexIntegerLiteral", "OctalIntegerLiteral", 
			"OctalIntegerLiteral2", "BinaryIntegerLiteral", "BigHexIntegerLiteral", 
			"BigOctalIntegerLiteral", "BigBinaryIntegerLiteral", "BigDecimalIntegerLiteral", 
			"BooleanLiteral", "Step", "Print", "While", "Repeat", "Times", "Do", 
			"Continue", "Break", "Switch", "Case", "Default", "Each", "ForEach", 
			"For", "In", "Of", "To", "If", "Then", "ElseIf", "Else", "Return", "Declare", 
			"Function_", "Delete", "NumberOf", "IndexOf", "Sub", "Lower", "Upper", 
			"Math", "Min", "Max", "Random", "Chr", "Ord", "Prompt", "Convert", "Class_", 
			"Instance", "New_", "Extends", "Attributes", "Methods", "Method", "Constructor", 
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
			setState(143);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,0,_ctx) ) {
			case 1:
				{
				setState(142);
				statementList();
				}
				break;
			}
			setState(145);
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
			setState(148); 
			_errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					setState(147);
					statement();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(150); 
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
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
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
		public ClassDeclarationContext classDeclaration() {
			return getRuleContext(ClassDeclarationContext.class,0);
		}
		public IfStatementContext ifStatement() {
			return getRuleContext(IfStatementContext.class,0);
		}
		public IterationStatementContext iterationStatement() {
			return getRuleContext(IterationStatementContext.class,0);
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
		public SwitchStatementContext switchStatement() {
			return getRuleContext(SwitchStatementContext.class,0);
		}
		public FunctionDeclarationContext functionDeclaration() {
			return getRuleContext(FunctionDeclarationContext.class,0);
		}
		public ExpressionStatementContext expressionStatement() {
			return getRuleContext(ExpressionStatementContext.class,0);
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
			setState(166);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,2,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(152);
				block();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(153);
				variableStatement();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(154);
				emptyStatement_();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(155);
				stepStatement();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(156);
				printStatement();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(157);
				classDeclaration();
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(158);
				ifStatement();
				}
				break;
			case 8:
				enterOuterAlt(_localctx, 8);
				{
				setState(159);
				iterationStatement();
				}
				break;
			case 9:
				enterOuterAlt(_localctx, 9);
				{
				setState(160);
				continueStatement();
				}
				break;
			case 10:
				enterOuterAlt(_localctx, 10);
				{
				setState(161);
				breakStatement();
				}
				break;
			case 11:
				enterOuterAlt(_localctx, 11);
				{
				setState(162);
				returnStatement();
				}
				break;
			case 12:
				enterOuterAlt(_localctx, 12);
				{
				setState(163);
				switchStatement();
				}
				break;
			case 13:
				enterOuterAlt(_localctx, 13);
				{
				setState(164);
				functionDeclaration();
				}
				break;
			case 14:
				enterOuterAlt(_localctx, 14);
				{
				setState(165);
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

	public static class BlockContext extends ParserRuleContext {
		public StatementListContext stmt;
		public TerminalNode OpenBrace() { return getToken(SintesisParser.OpenBrace, 0); }
		public TerminalNode CloseBrace() { return getToken(SintesisParser.CloseBrace, 0); }
		public StatementListContext statementList() {
			return getRuleContext(StatementListContext.class,0);
		}
		public BlockContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_block; }
	}

	public final BlockContext block() throws RecognitionException {
		BlockContext _localctx = new BlockContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_block);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(168);
			match(OpenBrace);
			setState(170);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,3,_ctx) ) {
			case 1:
				{
				setState(169);
				((BlockContext)_localctx).stmt = statementList();
				}
				break;
			}
			setState(172);
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
		enterRule(_localctx, 8, RULE_stepStatement);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(174);
			match(Step);
			setState(175);
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
		enterRule(_localctx, 10, RULE_emptyStatement_);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(177);
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
		enterRule(_localctx, 12, RULE_printStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(179);
			match(Print);
			setState(180);
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
		enterRule(_localctx, 14, RULE_expressionStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(182);
			if (!(this.notOpenBraceAndNotFunction())) throw new FailedPredicateException(this, "this.notOpenBraceAndNotFunction()");
			setState(183);
			expressionSequence();
			setState(184);
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
		enterRule(_localctx, 16, RULE_methodCall);
		try {
			setState(191);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case Identifier:
				enterOuterAlt(_localctx, 1);
				{
				setState(186);
				identifier();
				setState(187);
				arguments();
				}
				break;
			case Super:
				enterOuterAlt(_localctx, 2);
				{
				setState(189);
				match(Super);
				setState(190);
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
		enterRule(_localctx, 18, RULE_superSuffix);
		int _la;
		try {
			setState(199);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case OpenParen:
				enterOuterAlt(_localctx, 1);
				{
				setState(193);
				arguments();
				}
				break;
			case Dot:
				enterOuterAlt(_localctx, 2);
				{
				setState(194);
				match(Dot);
				setState(195);
				identifier();
				setState(197);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==OpenParen) {
					{
					setState(196);
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
		int _startState = 20;
		enterRecursionRule(_localctx, 20, RULE_member, _p);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(219);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case Attributes:
				{
				_localctx = new ExpAttributesContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;

				setState(202);
				match(Attributes);
				}
				break;
			case Methods:
				{
				_localctx = new ExpMethodsContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(203);
				match(Methods);
				}
				break;
			case Super:
				{
				_localctx = new ExpSuperContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(204);
				match(Super);
				}
				break;
			case New_:
				{
				_localctx = new ExpNewContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(205);
				match(New_);
				setState(207);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==Instance) {
					{
					setState(206);
					match(Instance);
					}
				}

				setState(213);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==Of) {
					{
					setState(209);
					match(Of);
					setState(211);
					_errHandler.sync(this);
					_la = _input.LA(1);
					if (_la==Class_) {
						{
						setState(210);
						match(Class_);
						}
					}

					}
				}

				setState(215);
				((ExpNewContext)_localctx).id = match(Identifier);
				setState(216);
				((ExpNewContext)_localctx).args = arguments();
				}
				break;
			case Identifier:
				{
				_localctx = new ExpIdentifierContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(217);
				identifier();
				}
				break;
			case In:
			case Of:
			case ElseIf:
			case Delete:
			case NumberOf:
			case IndexOf:
			case InstanceOf:
				{
				_localctx = new ExpReservedIdentifierContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(218);
				reservedIdentifier();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			_ctx.stop = _input.LT(-1);
			setState(244);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,12,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(242);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,11,_ctx) ) {
					case 1:
						{
						_localctx = new ExpMemberDotContext(new MemberContext(_parentctx, _parentState));
						((ExpMemberDotContext)_localctx).mem = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_member);
						setState(221);
						if (!(precpred(_ctx, 7))) throw new FailedPredicateException(this, "precpred(_ctx, 7)");
						setState(222);
						match(Dot);
						setState(223);
						((ExpMemberDotContext)_localctx).idx = memberIdentifier();
						setState(224);
						((ExpMemberDotContext)_localctx).args = arguments();
						}
						break;
					case 2:
						{
						_localctx = new ExpMemberDotContext(new MemberContext(_parentctx, _parentState));
						((ExpMemberDotContext)_localctx).mem = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_member);
						setState(226);
						if (!(precpred(_ctx, 6))) throw new FailedPredicateException(this, "precpred(_ctx, 6)");
						setState(227);
						match(Dot);
						setState(228);
						((ExpMemberDotContext)_localctx).idx = memberIdentifier();
						}
						break;
					case 3:
						{
						_localctx = new ExpMemberIndexContext(new MemberContext(_parentctx, _parentState));
						((ExpMemberIndexContext)_localctx).mem = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_member);
						setState(229);
						if (!(precpred(_ctx, 5))) throw new FailedPredicateException(this, "precpred(_ctx, 5)");
						setState(230);
						match(OpenBracket);
						setState(231);
						((ExpMemberIndexContext)_localctx).idx = singleExpression(0);
						setState(232);
						match(CloseBracket);
						setState(233);
						((ExpMemberIndexContext)_localctx).args = arguments();
						}
						break;
					case 4:
						{
						_localctx = new ExpMemberIndexContext(new MemberContext(_parentctx, _parentState));
						((ExpMemberIndexContext)_localctx).mem = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_member);
						setState(235);
						if (!(precpred(_ctx, 4))) throw new FailedPredicateException(this, "precpred(_ctx, 4)");
						setState(236);
						match(OpenBracket);
						setState(237);
						((ExpMemberIndexContext)_localctx).idx = singleExpression(0);
						setState(238);
						match(CloseBracket);
						}
						break;
					case 5:
						{
						_localctx = new ExpMemberFuncContext(new MemberContext(_parentctx, _parentState));
						((ExpMemberFuncContext)_localctx).mem = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_member);
						setState(240);
						if (!(precpred(_ctx, 3))) throw new FailedPredicateException(this, "precpred(_ctx, 3)");
						setState(241);
						((ExpMemberFuncContext)_localctx).args = arguments();
						}
						break;
					}
					} 
				}
				setState(246);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,12,_ctx);
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
		enterRule(_localctx, 22, RULE_memberIdentifier);
		try {
			setState(253);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case Attributes:
				enterOuterAlt(_localctx, 1);
				{
				setState(247);
				match(Attributes);
				}
				break;
			case Methods:
				enterOuterAlt(_localctx, 2);
				{
				setState(248);
				match(Methods);
				}
				break;
			case Super:
				enterOuterAlt(_localctx, 3);
				{
				setState(249);
				match(Super);
				}
				break;
			case Constructor:
				enterOuterAlt(_localctx, 4);
				{
				setState(250);
				match(Constructor);
				}
				break;
			case Identifier:
				enterOuterAlt(_localctx, 5);
				{
				setState(251);
				identifier();
				}
				break;
			case In:
			case Of:
			case ElseIf:
			case Delete:
			case NumberOf:
			case IndexOf:
			case InstanceOf:
				enterOuterAlt(_localctx, 6);
				{
				setState(252);
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
		int _startState = 24;
		enterRecursionRule(_localctx, 24, RULE_singleExpression, _p);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(297);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,14,_ctx) ) {
			case 1:
				{
				_localctx = new ExpFunctionExpressionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;

				setState(256);
				anonymousFunction();
				}
				break;
			case 2:
				{
				_localctx = new ExpBasicFunctionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(257);
				((ExpBasicFunctionContext)_localctx).fn = basicFunction();
				setState(258);
				((ExpBasicFunctionContext)_localctx).args = arguments();
				}
				break;
			case 3:
				{
				_localctx = new ExpJavascriptContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(260);
				match(JavascriptCode);
				}
				break;
			case 4:
				{
				_localctx = new ExpMathContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(261);
				match(Math);
				setState(262);
				match(Dot);
				setState(263);
				((ExpMathContext)_localctx).mem = _input.LT(1);
				_la = _input.LA(1);
				if ( !(((((_la - 104)) & ~0x3f) == 0 && ((1L << (_la - 104)) & ((1L << (Min - 104)) | (1L << (Max - 104)) | (1L << (Random - 104)) | (1L << (Identifier - 104)))) != 0)) ) {
					((ExpMathContext)_localctx).mem = (Token)_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(264);
				((ExpMathContext)_localctx).args = arguments();
				}
				break;
			case 5:
				{
				_localctx = new ExpDeleteContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(265);
				((ExpDeleteContext)_localctx).op = match(Delete);
				setState(266);
				((ExpDeleteContext)_localctx).dest = singleExpression(28);
				}
				break;
			case 6:
				{
				_localctx = new ExpPreIncrementContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(267);
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
				setState(268);
				((ExpPreIncrementContext)_localctx).dest = singleExpression(26);
				}
				break;
			case 7:
				{
				_localctx = new ExpUnaryPlusContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(269);
				((ExpUnaryPlusContext)_localctx).op = match(Plus);
				setState(270);
				((ExpUnaryPlusContext)_localctx).dest = singleExpression(25);
				}
				break;
			case 8:
				{
				_localctx = new ExpUnaryMinusContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(271);
				((ExpUnaryMinusContext)_localctx).op = match(Minus);
				setState(272);
				((ExpUnaryMinusContext)_localctx).dest = singleExpression(24);
				}
				break;
			case 9:
				{
				_localctx = new ExpBitNotContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(273);
				((ExpBitNotContext)_localctx).op = match(BitNot);
				setState(274);
				((ExpBitNotContext)_localctx).dest = singleExpression(23);
				}
				break;
			case 10:
				{
				_localctx = new ExpNotContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(275);
				((ExpNotContext)_localctx).op = match(Not);
				setState(276);
				((ExpNotContext)_localctx).dest = singleExpression(22);
				}
				break;
			case 11:
				{
				_localctx = new ExpInContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(277);
				((ExpInContext)_localctx).key = stringLiteral();
				setState(278);
				((ExpInContext)_localctx).op = match(In);
				setState(279);
				((ExpInContext)_localctx).dest = singleExpression(21);
				}
				break;
			case 12:
				{
				_localctx = new ExpAssignmentContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(281);
				((ExpAssignmentContext)_localctx).dest = member(0);
				setState(282);
				match(Assign);
				setState(283);
				((ExpAssignmentContext)_localctx).exp = singleExpression(7);
				}
				break;
			case 13:
				{
				_localctx = new ExpAssignmentOperatorContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(285);
				((ExpAssignmentOperatorContext)_localctx).dest = member(0);
				setState(286);
				((ExpAssignmentOperatorContext)_localctx).op = assignmentOperator();
				setState(287);
				((ExpAssignmentOperatorContext)_localctx).exp = singleExpression(6);
				}
				break;
			case 14:
				{
				_localctx = new ExpVarContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(289);
				variableDeclarationList();
				}
				break;
			case 15:
				{
				_localctx = new ExpParenthesisContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(290);
				match(OpenParen);
				setState(291);
				((ExpParenthesisContext)_localctx).exp = singleExpression(0);
				setState(292);
				match(CloseParen);
				}
				break;
			case 16:
				{
				_localctx = new ExpMemberContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(294);
				member(0);
				}
				break;
			case 17:
				{
				_localctx = new ExpLiteralContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(295);
				literal();
				}
				break;
			case 18:
				{
				_localctx = new ExpPieceOfCodeContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(296);
				match(PieceOfCode);
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(345);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,16,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(343);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,15,_ctx) ) {
					case 1:
						{
						_localctx = new ExpOpContext(new SingleExpressionContext(_parentctx, _parentState));
						((ExpOpContext)_localctx).e1 = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_singleExpression);
						setState(299);
						if (!(precpred(_ctx, 20))) throw new FailedPredicateException(this, "precpred(_ctx, 20)");
						setState(300);
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
						setState(301);
						((ExpOpContext)_localctx).e2 = singleExpression(21);
						}
						break;
					case 2:
						{
						_localctx = new ExpOpContext(new SingleExpressionContext(_parentctx, _parentState));
						((ExpOpContext)_localctx).e1 = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_singleExpression);
						setState(302);
						if (!(precpred(_ctx, 19))) throw new FailedPredicateException(this, "precpred(_ctx, 19)");
						setState(303);
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
						setState(304);
						((ExpOpContext)_localctx).e2 = singleExpression(20);
						}
						break;
					case 3:
						{
						_localctx = new ExpOpContext(new SingleExpressionContext(_parentctx, _parentState));
						((ExpOpContext)_localctx).e1 = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_singleExpression);
						setState(305);
						if (!(precpred(_ctx, 18))) throw new FailedPredicateException(this, "precpred(_ctx, 18)");
						setState(306);
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
						setState(307);
						((ExpOpContext)_localctx).e2 = singleExpression(19);
						}
						break;
					case 4:
						{
						_localctx = new ExpOpContext(new SingleExpressionContext(_parentctx, _parentState));
						((ExpOpContext)_localctx).e1 = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_singleExpression);
						setState(308);
						if (!(precpred(_ctx, 17))) throw new FailedPredicateException(this, "precpred(_ctx, 17)");
						setState(309);
						((ExpOpContext)_localctx).op = match(Power);
						setState(310);
						((ExpOpContext)_localctx).e2 = singleExpression(17);
						}
						break;
					case 5:
						{
						_localctx = new ExpOpContext(new SingleExpressionContext(_parentctx, _parentState));
						((ExpOpContext)_localctx).e1 = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_singleExpression);
						setState(311);
						if (!(precpred(_ctx, 16))) throw new FailedPredicateException(this, "precpred(_ctx, 16)");
						setState(312);
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
						setState(313);
						((ExpOpContext)_localctx).e2 = singleExpression(17);
						}
						break;
					case 6:
						{
						_localctx = new ExpOpContext(new SingleExpressionContext(_parentctx, _parentState));
						((ExpOpContext)_localctx).e1 = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_singleExpression);
						setState(314);
						if (!(precpred(_ctx, 15))) throw new FailedPredicateException(this, "precpred(_ctx, 15)");
						setState(315);
						((ExpOpContext)_localctx).op = match(LessThanEquals);
						setState(316);
						((ExpOpContext)_localctx).e2 = singleExpression(16);
						}
						break;
					case 7:
						{
						_localctx = new ExpOpContext(new SingleExpressionContext(_parentctx, _parentState));
						((ExpOpContext)_localctx).e1 = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_singleExpression);
						setState(317);
						if (!(precpred(_ctx, 14))) throw new FailedPredicateException(this, "precpred(_ctx, 14)");
						setState(318);
						((ExpOpContext)_localctx).op = match(GreaterThanEquals);
						setState(319);
						((ExpOpContext)_localctx).e2 = singleExpression(15);
						}
						break;
					case 8:
						{
						_localctx = new ExpOpContext(new SingleExpressionContext(_parentctx, _parentState));
						((ExpOpContext)_localctx).e1 = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_singleExpression);
						setState(320);
						if (!(precpred(_ctx, 12))) throw new FailedPredicateException(this, "precpred(_ctx, 12)");
						setState(321);
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
						setState(322);
						((ExpOpContext)_localctx).e2 = singleExpression(13);
						}
						break;
					case 9:
						{
						_localctx = new ExpOpContext(new SingleExpressionContext(_parentctx, _parentState));
						((ExpOpContext)_localctx).e1 = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_singleExpression);
						setState(323);
						if (!(precpred(_ctx, 11))) throw new FailedPredicateException(this, "precpred(_ctx, 11)");
						setState(324);
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
						setState(325);
						((ExpOpContext)_localctx).e2 = singleExpression(12);
						}
						break;
					case 10:
						{
						_localctx = new ExpOpContext(new SingleExpressionContext(_parentctx, _parentState));
						((ExpOpContext)_localctx).e1 = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_singleExpression);
						setState(326);
						if (!(precpred(_ctx, 10))) throw new FailedPredicateException(this, "precpred(_ctx, 10)");
						setState(327);
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
						setState(328);
						((ExpOpContext)_localctx).e2 = singleExpression(11);
						}
						break;
					case 11:
						{
						_localctx = new ExpOpContext(new SingleExpressionContext(_parentctx, _parentState));
						((ExpOpContext)_localctx).e1 = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_singleExpression);
						setState(329);
						if (!(precpred(_ctx, 9))) throw new FailedPredicateException(this, "precpred(_ctx, 9)");
						setState(330);
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
						setState(331);
						((ExpOpContext)_localctx).e2 = singleExpression(10);
						}
						break;
					case 12:
						{
						_localctx = new ExpTernaryContext(new SingleExpressionContext(_parentctx, _parentState));
						((ExpTernaryContext)_localctx).cond = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_singleExpression);
						setState(332);
						if (!(precpred(_ctx, 8))) throw new FailedPredicateException(this, "precpred(_ctx, 8)");
						setState(333);
						match(QuestionMark);
						setState(334);
						((ExpTernaryContext)_localctx).ok = singleExpression(0);
						setState(335);
						match(Colon);
						setState(336);
						((ExpTernaryContext)_localctx).no = singleExpression(9);
						}
						break;
					case 13:
						{
						_localctx = new ExpPostIncrementContext(new SingleExpressionContext(_parentctx, _parentState));
						((ExpPostIncrementContext)_localctx).dest = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_singleExpression);
						setState(338);
						if (!(precpred(_ctx, 27))) throw new FailedPredicateException(this, "precpred(_ctx, 27)");
						setState(339);
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
						setState(340);
						if (!(precpred(_ctx, 13))) throw new FailedPredicateException(this, "precpred(_ctx, 13)");
						setState(341);
						match(InstanceOf);
						setState(342);
						((ExpInstanceOfContext)_localctx).e2 = identifier();
						}
						break;
					}
					} 
				}
				setState(347);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,16,_ctx);
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
		enterRule(_localctx, 26, RULE_basicFunction0);
		try {
			_localctx = new RandomContext(_localctx);
			enterOuterAlt(_localctx, 1);
			{
			setState(348);
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
		enterRule(_localctx, 28, RULE_basicFunction1);
		try {
			setState(359);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case NumberOf:
				_localctx = new NumberOfContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(350);
				match(NumberOf);
				}
				break;
			case Lower:
				_localctx = new LowerContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(351);
				match(Lower);
				}
				break;
			case Upper:
				_localctx = new UpperContext(_localctx);
				enterOuterAlt(_localctx, 3);
				{
				setState(352);
				match(Upper);
				}
				break;
			case Max:
				_localctx = new MaxContext(_localctx);
				enterOuterAlt(_localctx, 4);
				{
				setState(353);
				match(Max);
				}
				break;
			case Min:
				_localctx = new MinContext(_localctx);
				enterOuterAlt(_localctx, 5);
				{
				setState(354);
				match(Min);
				}
				break;
			case Ord:
				_localctx = new OrdContext(_localctx);
				enterOuterAlt(_localctx, 6);
				{
				setState(355);
				match(Ord);
				}
				break;
			case Chr:
				_localctx = new ChrContext(_localctx);
				enterOuterAlt(_localctx, 7);
				{
				setState(356);
				match(Chr);
				}
				break;
			case Prompt:
				_localctx = new PromptContext(_localctx);
				enterOuterAlt(_localctx, 8);
				{
				setState(357);
				match(Prompt);
				}
				break;
			case Dictionary:
				_localctx = new DictionaryContext(_localctx);
				enterOuterAlt(_localctx, 9);
				{
				setState(358);
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
		enterRule(_localctx, 30, RULE_basicFunction2);
		try {
			setState(363);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case IndexOf:
				_localctx = new IndexOfContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(361);
				match(IndexOf);
				}
				break;
			case Convert:
				_localctx = new ConvertContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(362);
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
		enterRule(_localctx, 32, RULE_basicFunction3);
		try {
			_localctx = new SubContext(_localctx);
			enterOuterAlt(_localctx, 1);
			{
			setState(365);
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
		enterRule(_localctx, 34, RULE_basicFunction);
		try {
			setState(371);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case Random:
				enterOuterAlt(_localctx, 1);
				{
				setState(367);
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
				setState(368);
				basicFunction1();
				}
				break;
			case IndexOf:
			case Convert:
				enterOuterAlt(_localctx, 3);
				{
				setState(369);
				basicFunction2();
				}
				break;
			case Sub:
				enterOuterAlt(_localctx, 4);
				{
				setState(370);
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
		enterRule(_localctx, 36, RULE_expressionSequence);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(373);
			singleExpression(0);
			setState(378);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,20,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(374);
					match(Comma);
					setState(375);
					singleExpression(0);
					}
					} 
				}
				setState(380);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,20,_ctx);
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
		enterRule(_localctx, 38, RULE_ifStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(381);
			match(If);
			setState(382);
			((IfStatementContext)_localctx).exp = singleExpression(0);
			setState(384);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,21,_ctx) ) {
			case 1:
				{
				setState(383);
				match(Then);
				}
				break;
			}
			setState(386);
			((IfStatementContext)_localctx).stmt = statement();
			setState(388);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,22,_ctx) ) {
			case 1:
				{
				setState(387);
				((IfStatementContext)_localctx).elseifs = elseIfs();
				}
				break;
			}
			setState(395);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,24,_ctx) ) {
			case 1:
				{
				setState(390);
				match(Else);
				setState(392);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,23,_ctx) ) {
				case 1:
					{
					setState(391);
					match(Then);
					}
					break;
				}
				setState(394);
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
		enterRule(_localctx, 40, RULE_elseIfs);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(398); 
			_errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					setState(397);
					elseIf();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(400); 
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,25,_ctx);
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
		enterRule(_localctx, 42, RULE_elseIf);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(402);
			match(ElseIf);
			setState(403);
			((ElseIfContext)_localctx).exp = singleExpression(0);
			setState(405);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,26,_ctx) ) {
			case 1:
				{
				setState(404);
				match(Then);
				}
				break;
			}
			setState(407);
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
		enterRule(_localctx, 44, RULE_iteratorIndexes);
		int _la;
		try {
			setState(422);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,27,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(409);
				((IteratorIndexesContext)_localctx).idv = match(Identifier);
				setState(410);
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
				setState(411);
				((IteratorIndexesContext)_localctx).coll = singleExpression(0);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(412);
				((IteratorIndexesContext)_localctx).idk = match(Identifier);
				setState(413);
				match(Comma);
				setState(414);
				((IteratorIndexesContext)_localctx).idv = match(Identifier);
				setState(415);
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
				setState(416);
				((IteratorIndexesContext)_localctx).coll = singleExpression(0);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(417);
				((IteratorIndexesContext)_localctx).idk = match(Identifier);
				setState(418);
				match(ARROW);
				setState(419);
				((IteratorIndexesContext)_localctx).idv = match(Identifier);
				setState(420);
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
				setState(421);
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
		enterRule(_localctx, 46, RULE_iteratorRange);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(425);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Var_) {
				{
				setState(424);
				((IteratorRangeContext)_localctx).vvar = match(Var_);
				}
			}

			setState(427);
			((IteratorRangeContext)_localctx).id = identifier();
			setState(428);
			_la = _input.LA(1);
			if ( !(_la==Assign || _la==In) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(429);
			((IteratorRangeContext)_localctx).start = singleExpression(0);
			setState(430);
			match(To);
			setState(431);
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
		enterRule(_localctx, 48, RULE_iterationStatement);
		int _la;
		try {
			setState(514);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,43,_ctx) ) {
			case 1:
				_localctx = new RepeatStatementContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(433);
				match(Repeat);
				setState(434);
				((RepeatStatementContext)_localctx).exp = singleExpression(0);
				setState(436);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,29,_ctx) ) {
				case 1:
					{
					setState(435);
					match(Times);
					}
					break;
				}
				setState(438);
				((RepeatStatementContext)_localctx).stmt = statement();
				}
				break;
			case 2:
				_localctx = new RepeatWhileStatementContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(440);
				_la = _input.LA(1);
				if ( !(_la==Repeat || _la==Do) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(441);
				((RepeatWhileStatementContext)_localctx).stmt = statement();
				setState(442);
				match(While);
				setState(443);
				((RepeatWhileStatementContext)_localctx).exp = singleExpression(0);
				}
				break;
			case 3:
				_localctx = new WhileRepeatStatementContext(_localctx);
				enterOuterAlt(_localctx, 3);
				{
				setState(446);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==Repeat) {
					{
					setState(445);
					match(Repeat);
					}
				}

				setState(448);
				match(While);
				setState(449);
				((WhileRepeatStatementContext)_localctx).exp = singleExpression(0);
				setState(451);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,31,_ctx) ) {
				case 1:
					{
					setState(450);
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
				setState(453);
				((WhileRepeatStatementContext)_localctx).stmt = statement();
				}
				break;
			case 4:
				_localctx = new ForClassicContext(_localctx);
				enterOuterAlt(_localctx, 4);
				{
				setState(455);
				match(For);
				setState(456);
				match(OpenParen);
				setState(458);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (((((_la - 6)) & ~0x3f) == 0 && ((1L << (_la - 6)) & ((1L << (JavascriptCode - 6)) | (1L << (OpenBracket - 6)) | (1L << (OpenParen - 6)) | (1L << (OpenBrace - 6)) | (1L << (PlusPlus - 6)) | (1L << (MinusMinus - 6)) | (1L << (Plus - 6)) | (1L << (Minus - 6)) | (1L << (BitNot - 6)) | (1L << (Not - 6)) | (1L << (PieceOfCode - 6)) | (1L << (NullLiteral - 6)) | (1L << (DecimalLiteral - 6)) | (1L << (HexIntegerLiteral - 6)) | (1L << (OctalIntegerLiteral - 6)) | (1L << (OctalIntegerLiteral2 - 6)) | (1L << (BinaryIntegerLiteral - 6)))) != 0) || ((((_la - 72)) & ~0x3f) == 0 && ((1L << (_la - 72)) & ((1L << (BooleanLiteral - 72)) | (1L << (In - 72)) | (1L << (Of - 72)) | (1L << (ElseIf - 72)) | (1L << (Declare - 72)) | (1L << (Function_ - 72)) | (1L << (Delete - 72)) | (1L << (NumberOf - 72)) | (1L << (IndexOf - 72)) | (1L << (Sub - 72)) | (1L << (Lower - 72)) | (1L << (Upper - 72)) | (1L << (Math - 72)) | (1L << (Min - 72)) | (1L << (Max - 72)) | (1L << (Random - 72)) | (1L << (Chr - 72)) | (1L << (Ord - 72)) | (1L << (Prompt - 72)) | (1L << (Convert - 72)) | (1L << (New_ - 72)) | (1L << (Attributes - 72)) | (1L << (Methods - 72)) | (1L << (Super - 72)) | (1L << (InstanceOf - 72)) | (1L << (Dictionary - 72)) | (1L << (Var_ - 72)) | (1L << (Const_ - 72)) | (1L << (Identifier - 72)) | (1L << (StringLiteral - 72)))) != 0)) {
					{
					setState(457);
					((ForClassicContext)_localctx).pre = forPre();
					}
				}

				setState(460);
				match(SemiColon);
				setState(462);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (((((_la - 6)) & ~0x3f) == 0 && ((1L << (_la - 6)) & ((1L << (JavascriptCode - 6)) | (1L << (OpenBracket - 6)) | (1L << (OpenParen - 6)) | (1L << (OpenBrace - 6)) | (1L << (PlusPlus - 6)) | (1L << (MinusMinus - 6)) | (1L << (Plus - 6)) | (1L << (Minus - 6)) | (1L << (BitNot - 6)) | (1L << (Not - 6)) | (1L << (PieceOfCode - 6)) | (1L << (NullLiteral - 6)) | (1L << (DecimalLiteral - 6)) | (1L << (HexIntegerLiteral - 6)) | (1L << (OctalIntegerLiteral - 6)) | (1L << (OctalIntegerLiteral2 - 6)) | (1L << (BinaryIntegerLiteral - 6)))) != 0) || ((((_la - 72)) & ~0x3f) == 0 && ((1L << (_la - 72)) & ((1L << (BooleanLiteral - 72)) | (1L << (In - 72)) | (1L << (Of - 72)) | (1L << (ElseIf - 72)) | (1L << (Declare - 72)) | (1L << (Function_ - 72)) | (1L << (Delete - 72)) | (1L << (NumberOf - 72)) | (1L << (IndexOf - 72)) | (1L << (Sub - 72)) | (1L << (Lower - 72)) | (1L << (Upper - 72)) | (1L << (Math - 72)) | (1L << (Min - 72)) | (1L << (Max - 72)) | (1L << (Random - 72)) | (1L << (Chr - 72)) | (1L << (Ord - 72)) | (1L << (Prompt - 72)) | (1L << (Convert - 72)) | (1L << (New_ - 72)) | (1L << (Attributes - 72)) | (1L << (Methods - 72)) | (1L << (Super - 72)) | (1L << (InstanceOf - 72)) | (1L << (Dictionary - 72)) | (1L << (Var_ - 72)) | (1L << (Const_ - 72)) | (1L << (Identifier - 72)) | (1L << (StringLiteral - 72)))) != 0)) {
					{
					setState(461);
					((ForClassicContext)_localctx).exp = expressionSequence();
					}
				}

				setState(464);
				match(SemiColon);
				setState(466);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (((((_la - 6)) & ~0x3f) == 0 && ((1L << (_la - 6)) & ((1L << (JavascriptCode - 6)) | (1L << (OpenBracket - 6)) | (1L << (OpenParen - 6)) | (1L << (OpenBrace - 6)) | (1L << (PlusPlus - 6)) | (1L << (MinusMinus - 6)) | (1L << (Plus - 6)) | (1L << (Minus - 6)) | (1L << (BitNot - 6)) | (1L << (Not - 6)) | (1L << (PieceOfCode - 6)) | (1L << (NullLiteral - 6)) | (1L << (DecimalLiteral - 6)) | (1L << (HexIntegerLiteral - 6)) | (1L << (OctalIntegerLiteral - 6)) | (1L << (OctalIntegerLiteral2 - 6)) | (1L << (BinaryIntegerLiteral - 6)))) != 0) || ((((_la - 72)) & ~0x3f) == 0 && ((1L << (_la - 72)) & ((1L << (BooleanLiteral - 72)) | (1L << (In - 72)) | (1L << (Of - 72)) | (1L << (ElseIf - 72)) | (1L << (Declare - 72)) | (1L << (Function_ - 72)) | (1L << (Delete - 72)) | (1L << (NumberOf - 72)) | (1L << (IndexOf - 72)) | (1L << (Sub - 72)) | (1L << (Lower - 72)) | (1L << (Upper - 72)) | (1L << (Math - 72)) | (1L << (Min - 72)) | (1L << (Max - 72)) | (1L << (Random - 72)) | (1L << (Chr - 72)) | (1L << (Ord - 72)) | (1L << (Prompt - 72)) | (1L << (Convert - 72)) | (1L << (New_ - 72)) | (1L << (Attributes - 72)) | (1L << (Methods - 72)) | (1L << (Super - 72)) | (1L << (InstanceOf - 72)) | (1L << (Dictionary - 72)) | (1L << (Var_ - 72)) | (1L << (Const_ - 72)) | (1L << (Identifier - 72)) | (1L << (StringLiteral - 72)))) != 0)) {
					{
					setState(465);
					((ForClassicContext)_localctx).post = expressionSequence();
					}
				}

				setState(468);
				match(CloseParen);
				setState(469);
				((ForClassicContext)_localctx).stmt = statement();
				}
				break;
			case 5:
				_localctx = new ForFromToStatementContext(_localctx);
				enterOuterAlt(_localctx, 5);
				{
				setState(470);
				match(For);
				setState(471);
				((ForFromToStatementContext)_localctx).iter = iteratorRange();
				setState(473);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,35,_ctx) ) {
				case 1:
					{
					setState(472);
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
				setState(475);
				((ForFromToStatementContext)_localctx).stmt = statement();
				}
				break;
			case 6:
				_localctx = new ForFromToStatement2Context(_localctx);
				enterOuterAlt(_localctx, 6);
				{
				setState(477);
				match(For);
				setState(478);
				match(OpenParen);
				setState(479);
				((ForFromToStatement2Context)_localctx).iter = iteratorRange();
				setState(480);
				match(CloseParen);
				setState(482);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,36,_ctx) ) {
				case 1:
					{
					setState(481);
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
				setState(484);
				((ForFromToStatement2Context)_localctx).stmt = statement();
				}
				break;
			case 7:
				_localctx = new ForEachStatementContext(_localctx);
				enterOuterAlt(_localctx, 7);
				{
				setState(491);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case For:
					{
					setState(486);
					match(For);
					setState(488);
					_errHandler.sync(this);
					_la = _input.LA(1);
					if (_la==Each) {
						{
						setState(487);
						match(Each);
						}
					}

					}
					break;
				case ForEach:
					{
					setState(490);
					match(ForEach);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(493);
				((ForEachStatementContext)_localctx).iter = iteratorIndexes();
				setState(495);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,39,_ctx) ) {
				case 1:
					{
					setState(494);
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
				setState(497);
				((ForEachStatementContext)_localctx).stmt = statement();
				}
				break;
			case 8:
				_localctx = new ForEachStatement2Context(_localctx);
				enterOuterAlt(_localctx, 8);
				{
				setState(504);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case For:
					{
					setState(499);
					match(For);
					setState(501);
					_errHandler.sync(this);
					_la = _input.LA(1);
					if (_la==Each) {
						{
						setState(500);
						match(Each);
						}
					}

					}
					break;
				case ForEach:
					{
					setState(503);
					match(ForEach);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(506);
				match(OpenParen);
				setState(507);
				((ForEachStatement2Context)_localctx).iter = iteratorIndexes();
				setState(508);
				match(CloseParen);
				setState(510);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,42,_ctx) ) {
				case 1:
					{
					setState(509);
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
				setState(512);
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
		enterRule(_localctx, 50, RULE_forPre);
		try {
			setState(518);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,44,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(516);
				expressionSequence();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(517);
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
		enterRule(_localctx, 52, RULE_continueStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(520);
			match(Continue);
			setState(521);
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
		enterRule(_localctx, 54, RULE_breakStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(523);
			match(Break);
			setState(524);
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
		enterRule(_localctx, 56, RULE_returnStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(526);
			match(Return);
			setState(529);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,45,_ctx) ) {
			case 1:
				{
				setState(527);
				((ReturnStatementContext)_localctx).exp = singleExpression(0);
				}
				break;
			case 2:
				{
				setState(528);
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
		enterRule(_localctx, 58, RULE_switchStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(531);
			match(Switch);
			setState(532);
			match(OpenParen);
			setState(533);
			expressionSequence();
			setState(534);
			match(CloseParen);
			setState(535);
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
		enterRule(_localctx, 60, RULE_caseBlock);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(537);
			match(OpenBrace);
			setState(539);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Case) {
				{
				setState(538);
				caseClauses();
				}
			}

			setState(545);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Default) {
				{
				setState(541);
				defaultClause();
				setState(543);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==Case) {
					{
					setState(542);
					caseClauses();
					}
				}

				}
			}

			setState(547);
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
		enterRule(_localctx, 62, RULE_caseClauses);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(550); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(549);
				caseClause();
				}
				}
				setState(552); 
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
		enterRule(_localctx, 64, RULE_caseClause);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(554);
			match(Case);
			setState(555);
			expressionSequence();
			setState(556);
			match(Colon);
			setState(558);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,50,_ctx) ) {
			case 1:
				{
				setState(557);
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
		enterRule(_localctx, 66, RULE_defaultClause);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(560);
			match(Default);
			setState(561);
			match(Colon);
			setState(563);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,51,_ctx) ) {
			case 1:
				{
				setState(562);
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
		enterRule(_localctx, 68, RULE_formalParameterList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(565);
			formalParameterArg();
			setState(570);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==Comma) {
				{
				{
				setState(566);
				match(Comma);
				setState(567);
				formalParameterArg();
				}
				}
				setState(572);
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
		enterRule(_localctx, 70, RULE_functionDeclaration);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(574);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Declare) {
				{
				setState(573);
				((FunctionDeclarationContext)_localctx).dec = match(Declare);
				}
			}

			setState(576);
			((FunctionDeclarationContext)_localctx).fun = match(Function_);
			setState(577);
			((FunctionDeclarationContext)_localctx).id = identifier();
			setState(578);
			match(OpenParen);
			setState(580);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (((((_la - 87)) & ~0x3f) == 0 && ((1L << (_la - 87)) & ((1L << (In - 87)) | (1L << (Of - 87)) | (1L << (ElseIf - 87)) | (1L << (Delete - 87)) | (1L << (NumberOf - 87)) | (1L << (IndexOf - 87)) | (1L << (InstanceOf - 87)) | (1L << (Identifier - 87)))) != 0)) {
				{
				setState(579);
				((FunctionDeclarationContext)_localctx).pl = formalParameterList();
				}
			}

			setState(582);
			match(CloseParen);
			setState(583);
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
		enterRule(_localctx, 72, RULE_functionDeclarationExpr);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(585);
			((FunctionDeclarationExprContext)_localctx).fun = match(Function_);
			setState(586);
			((FunctionDeclarationExprContext)_localctx).id = identifier();
			setState(587);
			match(OpenParen);
			setState(589);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (((((_la - 87)) & ~0x3f) == 0 && ((1L << (_la - 87)) & ((1L << (In - 87)) | (1L << (Of - 87)) | (1L << (ElseIf - 87)) | (1L << (Delete - 87)) | (1L << (NumberOf - 87)) | (1L << (IndexOf - 87)) | (1L << (InstanceOf - 87)) | (1L << (Identifier - 87)))) != 0)) {
				{
				setState(588);
				((FunctionDeclarationExprContext)_localctx).pl = formalParameterList();
				}
			}

			setState(591);
			match(CloseParen);
			setState(592);
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
		enterRule(_localctx, 74, RULE_arguments);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(594);
			match(OpenParen);
			setState(603);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (((((_la - 6)) & ~0x3f) == 0 && ((1L << (_la - 6)) & ((1L << (JavascriptCode - 6)) | (1L << (OpenBracket - 6)) | (1L << (OpenParen - 6)) | (1L << (OpenBrace - 6)) | (1L << (PlusPlus - 6)) | (1L << (MinusMinus - 6)) | (1L << (Plus - 6)) | (1L << (Minus - 6)) | (1L << (BitNot - 6)) | (1L << (Not - 6)) | (1L << (PieceOfCode - 6)) | (1L << (NullLiteral - 6)) | (1L << (DecimalLiteral - 6)) | (1L << (HexIntegerLiteral - 6)) | (1L << (OctalIntegerLiteral - 6)) | (1L << (OctalIntegerLiteral2 - 6)) | (1L << (BinaryIntegerLiteral - 6)))) != 0) || ((((_la - 72)) & ~0x3f) == 0 && ((1L << (_la - 72)) & ((1L << (BooleanLiteral - 72)) | (1L << (In - 72)) | (1L << (Of - 72)) | (1L << (ElseIf - 72)) | (1L << (Declare - 72)) | (1L << (Function_ - 72)) | (1L << (Delete - 72)) | (1L << (NumberOf - 72)) | (1L << (IndexOf - 72)) | (1L << (Sub - 72)) | (1L << (Lower - 72)) | (1L << (Upper - 72)) | (1L << (Math - 72)) | (1L << (Min - 72)) | (1L << (Max - 72)) | (1L << (Random - 72)) | (1L << (Chr - 72)) | (1L << (Ord - 72)) | (1L << (Prompt - 72)) | (1L << (Convert - 72)) | (1L << (New_ - 72)) | (1L << (Attributes - 72)) | (1L << (Methods - 72)) | (1L << (Super - 72)) | (1L << (InstanceOf - 72)) | (1L << (Dictionary - 72)) | (1L << (Var_ - 72)) | (1L << (Const_ - 72)) | (1L << (Identifier - 72)) | (1L << (StringLiteral - 72)))) != 0)) {
				{
				setState(595);
				singleExpression(0);
				setState(600);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==Comma) {
					{
					{
					setState(596);
					match(Comma);
					setState(597);
					singleExpression(0);
					}
					}
					setState(602);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
			}

			setState(605);
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
		enterRule(_localctx, 76, RULE_visibility);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(607);
			_la = _input.LA(1);
			if ( !(((((_la - 127)) & ~0x3f) == 0 && ((1L << (_la - 127)) & ((1L << (Private - 127)) | (1L << (Public - 127)) | (1L << (Protected - 127)))) != 0)) ) {
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
		enterRule(_localctx, 78, RULE_classDeclaration);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(610);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Declare) {
				{
				setState(609);
				((ClassDeclarationContext)_localctx).dec = match(Declare);
				}
			}

			setState(612);
			((ClassDeclarationContext)_localctx).clas = match(Class_);
			setState(613);
			((ClassDeclarationContext)_localctx).id = identifier();
			setState(616);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Extends) {
				{
				setState(614);
				match(Extends);
				setState(615);
				((ClassDeclarationContext)_localctx).ext = identifier();
				}
			}

			setState(618);
			match(OpenBrace);
			setState(630);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,62,_ctx) ) {
			case 1:
				{
				setState(621);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==Attributes) {
					{
					setState(619);
					match(Attributes);
					setState(620);
					match(Colon);
					}
				}

				setState(628);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case OpenBrace:
					{
					setState(623);
					match(OpenBrace);
					setState(624);
					((ClassDeclarationContext)_localctx).atrs = attributesList();
					setState(625);
					match(CloseBrace);
					}
					break;
				case In:
				case Of:
				case ElseIf:
				case Delete:
				case NumberOf:
				case IndexOf:
				case InstanceOf:
				case Private:
				case Public:
				case Protected:
				case Identifier:
					{
					setState(627);
					((ClassDeclarationContext)_localctx).atrs = attributesList();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
			}
			setState(632);
			eos();
			setState(644);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==OpenBrace || ((((_la - 96)) & ~0x3f) == 0 && ((1L << (_la - 96)) & ((1L << (Function_ - 96)) | (1L << (Methods - 96)) | (1L << (Method - 96)) | (1L << (Constructor - 96)) | (1L << (Private - 96)) | (1L << (Public - 96)) | (1L << (Protected - 96)) | (1L << (Identifier - 96)))) != 0)) {
				{
				setState(635);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==Methods) {
					{
					setState(633);
					((ClassDeclarationContext)_localctx).mdec = match(Methods);
					setState(634);
					match(Colon);
					}
				}

				setState(642);
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
					setState(637);
					((ClassDeclarationContext)_localctx).methods = methodsList();
					}
					break;
				case OpenBrace:
					{
					setState(638);
					match(OpenBrace);
					setState(639);
					((ClassDeclarationContext)_localctx).methods = methodsList();
					setState(640);
					match(CloseBrace);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
			}

			setState(646);
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
		enterRule(_localctx, 80, RULE_attributesList);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(649); 
			_errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					setState(648);
					classAttributeDecl();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(651); 
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,66,_ctx);
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
		enterRule(_localctx, 82, RULE_classAttributeDecl);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(654);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (((((_la - 127)) & ~0x3f) == 0 && ((1L << (_la - 127)) & ((1L << (Private - 127)) | (1L << (Public - 127)) | (1L << (Protected - 127)))) != 0)) {
				{
				setState(653);
				((ClassAttributeDeclContext)_localctx).vis = visibility();
				}
			}

			setState(656);
			variableDeclaration();
			setState(661);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,68,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(657);
					match(Comma);
					setState(658);
					variableDeclaration();
					}
					} 
				}
				setState(663);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,68,_ctx);
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
		enterRule(_localctx, 84, RULE_methodDeclaration);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(665);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (((((_la - 127)) & ~0x3f) == 0 && ((1L << (_la - 127)) & ((1L << (Private - 127)) | (1L << (Public - 127)) | (1L << (Protected - 127)))) != 0)) {
				{
				setState(664);
				((MethodDeclarationContext)_localctx).vis = visibility();
				}
			}

			setState(668);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Function_ || _la==Method) {
				{
				setState(667);
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

			setState(670);
			((MethodDeclarationContext)_localctx).id = methodName();
			setState(671);
			match(OpenParen);
			setState(673);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (((((_la - 87)) & ~0x3f) == 0 && ((1L << (_la - 87)) & ((1L << (In - 87)) | (1L << (Of - 87)) | (1L << (ElseIf - 87)) | (1L << (Delete - 87)) | (1L << (NumberOf - 87)) | (1L << (IndexOf - 87)) | (1L << (InstanceOf - 87)) | (1L << (Identifier - 87)))) != 0)) {
				{
				setState(672);
				((MethodDeclarationContext)_localctx).pl = formalParameterList();
				}
			}

			setState(675);
			match(CloseParen);
			setState(676);
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
		enterRule(_localctx, 86, RULE_methodName);
		try {
			setState(680);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case Identifier:
				enterOuterAlt(_localctx, 1);
				{
				setState(678);
				identifier();
				}
				break;
			case Constructor:
				enterOuterAlt(_localctx, 2);
				{
				setState(679);
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
		enterRule(_localctx, 88, RULE_methodsList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(683); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(682);
				methodDeclaration();
				}
				}
				setState(685); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( ((((_la - 96)) & ~0x3f) == 0 && ((1L << (_la - 96)) & ((1L << (Function_ - 96)) | (1L << (Method - 96)) | (1L << (Constructor - 96)) | (1L << (Private - 96)) | (1L << (Public - 96)) | (1L << (Protected - 96)) | (1L << (Identifier - 96)))) != 0) );
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
		enterRule(_localctx, 90, RULE_classExp);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(687);
			match(New_);
			setState(689);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Instance) {
				{
				setState(688);
				match(Instance);
				}
			}

			setState(695);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Of) {
				{
				setState(691);
				match(Of);
				setState(693);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==Class_) {
					{
					setState(692);
					match(Class_);
					}
				}

				}
			}

			setState(697);
			match(Identifier);
			setState(698);
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
		enterRule(_localctx, 92, RULE_listIndex);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(700);
			match(OpenBracket);
			setState(702);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (((((_la - 6)) & ~0x3f) == 0 && ((1L << (_la - 6)) & ((1L << (JavascriptCode - 6)) | (1L << (OpenBracket - 6)) | (1L << (OpenParen - 6)) | (1L << (OpenBrace - 6)) | (1L << (PlusPlus - 6)) | (1L << (MinusMinus - 6)) | (1L << (Plus - 6)) | (1L << (Minus - 6)) | (1L << (BitNot - 6)) | (1L << (Not - 6)) | (1L << (PieceOfCode - 6)) | (1L << (NullLiteral - 6)) | (1L << (DecimalLiteral - 6)) | (1L << (HexIntegerLiteral - 6)) | (1L << (OctalIntegerLiteral - 6)) | (1L << (OctalIntegerLiteral2 - 6)) | (1L << (BinaryIntegerLiteral - 6)))) != 0) || ((((_la - 72)) & ~0x3f) == 0 && ((1L << (_la - 72)) & ((1L << (BooleanLiteral - 72)) | (1L << (In - 72)) | (1L << (Of - 72)) | (1L << (ElseIf - 72)) | (1L << (Declare - 72)) | (1L << (Function_ - 72)) | (1L << (Delete - 72)) | (1L << (NumberOf - 72)) | (1L << (IndexOf - 72)) | (1L << (Sub - 72)) | (1L << (Lower - 72)) | (1L << (Upper - 72)) | (1L << (Math - 72)) | (1L << (Min - 72)) | (1L << (Max - 72)) | (1L << (Random - 72)) | (1L << (Chr - 72)) | (1L << (Ord - 72)) | (1L << (Prompt - 72)) | (1L << (Convert - 72)) | (1L << (New_ - 72)) | (1L << (Attributes - 72)) | (1L << (Methods - 72)) | (1L << (Super - 72)) | (1L << (InstanceOf - 72)) | (1L << (Dictionary - 72)) | (1L << (Var_ - 72)) | (1L << (Const_ - 72)) | (1L << (Identifier - 72)) | (1L << (StringLiteral - 72)))) != 0)) {
				{
				setState(701);
				singleExpression(0);
				}
			}

			setState(704);
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
		enterRule(_localctx, 94, RULE_listIndexes);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(707); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(706);
				listIndex();
				}
				}
				setState(709); 
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
		enterRule(_localctx, 96, RULE_formalParameterArg);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(713);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case In:
			case Of:
			case ElseIf:
			case Delete:
			case NumberOf:
			case IndexOf:
			case InstanceOf:
				{
				setState(711);
				reservedIdentifier();
				}
				break;
			case Identifier:
				{
				setState(712);
				identifier();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			setState(717);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Assign) {
				{
				setState(715);
				match(Assign);
				setState(716);
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
		enterRule(_localctx, 98, RULE_variableStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(719);
			variableDeclarationList();
			setState(720);
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
		public ReservedIdentifierContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_reservedIdentifier; }
	}

	public final ReservedIdentifierContext reservedIdentifier() throws RecognitionException {
		ReservedIdentifierContext _localctx = new ReservedIdentifierContext(_ctx, getState());
		enterRule(_localctx, 100, RULE_reservedIdentifier);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(722);
			_la = _input.LA(1);
			if ( !(((((_la - 87)) & ~0x3f) == 0 && ((1L << (_la - 87)) & ((1L << (In - 87)) | (1L << (Of - 87)) | (1L << (ElseIf - 87)) | (1L << (Delete - 87)) | (1L << (NumberOf - 87)) | (1L << (IndexOf - 87)) | (1L << (InstanceOf - 87)))) != 0)) ) {
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
		enterRule(_localctx, 102, RULE_variableDeclaration);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(726);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case In:
			case Of:
			case ElseIf:
			case Delete:
			case NumberOf:
			case IndexOf:
			case InstanceOf:
				{
				setState(724);
				reservedIdentifier();
				}
				break;
			case Identifier:
				{
				setState(725);
				identifier();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			setState(730);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,82,_ctx) ) {
			case 1:
				{
				setState(728);
				match(Assign);
				setState(729);
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
		enterRule(_localctx, 104, RULE_variableDeclarationList);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(732);
			varModifier();
			setState(733);
			variableDeclaration();
			setState(738);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,83,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(734);
					match(Comma);
					setState(735);
					variableDeclaration();
					}
					} 
				}
				setState(740);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,83,_ctx);
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
		enterRule(_localctx, 106, RULE_varModifier);
		try {
			setState(748);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,84,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(741);
				match(Declare);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(742);
				match(Declare);
				setState(743);
				match(Var_);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(744);
				match(Declare);
				setState(745);
				match(Const_);
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(746);
				match(Var_);
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(747);
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
		enterRule(_localctx, 108, RULE_functionBody);
		try {
			setState(752);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,85,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(750);
				block();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(751);
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
		enterRule(_localctx, 110, RULE_anonymousFunction);
		int _la;
		try {
			setState(765);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case Function_:
				_localctx = new AnonymousFunctionDeclContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(754);
				((AnonymousFunctionDeclContext)_localctx).fun = match(Function_);
				setState(755);
				match(OpenParen);
				setState(757);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (((((_la - 87)) & ~0x3f) == 0 && ((1L << (_la - 87)) & ((1L << (In - 87)) | (1L << (Of - 87)) | (1L << (ElseIf - 87)) | (1L << (Delete - 87)) | (1L << (NumberOf - 87)) | (1L << (IndexOf - 87)) | (1L << (InstanceOf - 87)) | (1L << (Identifier - 87)))) != 0)) {
					{
					setState(756);
					((AnonymousFunctionDeclContext)_localctx).pl = formalParameterList();
					}
				}

				setState(759);
				match(CloseParen);
				setState(760);
				((AnonymousFunctionDeclContext)_localctx).stmt = functionBody();
				}
				break;
			case OpenParen:
			case Identifier:
				_localctx = new ArrowFunctionContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(761);
				((ArrowFunctionContext)_localctx).pl = arrowFunctionParameters();
				setState(762);
				match(ARROW);
				setState(763);
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
		enterRule(_localctx, 112, RULE_arrowFunctionParameters);
		int _la;
		try {
			setState(773);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case Identifier:
				enterOuterAlt(_localctx, 1);
				{
				setState(767);
				identifier();
				}
				break;
			case OpenParen:
				enterOuterAlt(_localctx, 2);
				{
				setState(768);
				match(OpenParen);
				setState(770);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (((((_la - 87)) & ~0x3f) == 0 && ((1L << (_la - 87)) & ((1L << (In - 87)) | (1L << (Of - 87)) | (1L << (ElseIf - 87)) | (1L << (Delete - 87)) | (1L << (NumberOf - 87)) | (1L << (IndexOf - 87)) | (1L << (InstanceOf - 87)) | (1L << (Identifier - 87)))) != 0)) {
					{
					setState(769);
					formalParameterList();
					}
				}

				setState(772);
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
		enterRule(_localctx, 114, RULE_arrowFunctionBody);
		try {
			setState(777);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,90,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(775);
				singleExpression(0);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(776);
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
		enterRule(_localctx, 116, RULE_assignmentOperator);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(779);
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
		enterRule(_localctx, 118, RULE_reservedWord);
		try {
			setState(784);
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
				setState(781);
				safeKeyword();
				}
				break;
			case NullLiteral:
				enterOuterAlt(_localctx, 2);
				{
				setState(782);
				match(NullLiteral);
				}
				break;
			case BooleanLiteral:
				enterOuterAlt(_localctx, 3);
				{
				setState(783);
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
		enterRule(_localctx, 120, RULE_listDeclaration);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(786);
			match(New_);
			setState(787);
			match(List);
			setState(788);
			match(OpenParen);
			setState(790);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==OpenBracket) {
				{
				setState(789);
				((ListDeclarationContext)_localctx).exp = listLiteral();
				}
			}

			setState(792);
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
		enterRule(_localctx, 122, RULE_listLiteral);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(794);
			match(OpenBracket);
			setState(803);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (((((_la - 6)) & ~0x3f) == 0 && ((1L << (_la - 6)) & ((1L << (JavascriptCode - 6)) | (1L << (OpenBracket - 6)) | (1L << (OpenParen - 6)) | (1L << (OpenBrace - 6)) | (1L << (PlusPlus - 6)) | (1L << (MinusMinus - 6)) | (1L << (Plus - 6)) | (1L << (Minus - 6)) | (1L << (BitNot - 6)) | (1L << (Not - 6)) | (1L << (PieceOfCode - 6)) | (1L << (NullLiteral - 6)) | (1L << (DecimalLiteral - 6)) | (1L << (HexIntegerLiteral - 6)) | (1L << (OctalIntegerLiteral - 6)) | (1L << (OctalIntegerLiteral2 - 6)) | (1L << (BinaryIntegerLiteral - 6)))) != 0) || ((((_la - 72)) & ~0x3f) == 0 && ((1L << (_la - 72)) & ((1L << (BooleanLiteral - 72)) | (1L << (In - 72)) | (1L << (Of - 72)) | (1L << (ElseIf - 72)) | (1L << (Declare - 72)) | (1L << (Function_ - 72)) | (1L << (Delete - 72)) | (1L << (NumberOf - 72)) | (1L << (IndexOf - 72)) | (1L << (Sub - 72)) | (1L << (Lower - 72)) | (1L << (Upper - 72)) | (1L << (Math - 72)) | (1L << (Min - 72)) | (1L << (Max - 72)) | (1L << (Random - 72)) | (1L << (Chr - 72)) | (1L << (Ord - 72)) | (1L << (Prompt - 72)) | (1L << (Convert - 72)) | (1L << (New_ - 72)) | (1L << (Attributes - 72)) | (1L << (Methods - 72)) | (1L << (Super - 72)) | (1L << (InstanceOf - 72)) | (1L << (Dictionary - 72)) | (1L << (Var_ - 72)) | (1L << (Const_ - 72)) | (1L << (Identifier - 72)) | (1L << (StringLiteral - 72)))) != 0)) {
				{
				setState(795);
				singleExpression(0);
				setState(800);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==Comma) {
					{
					{
					setState(796);
					match(Comma);
					setState(797);
					singleExpression(0);
					}
					}
					setState(802);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
			}

			setState(805);
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

	public static class ObjectLiteralContext extends ParserRuleContext {
		public TerminalNode OpenBrace() { return getToken(SintesisParser.OpenBrace, 0); }
		public TerminalNode CloseBrace() { return getToken(SintesisParser.CloseBrace, 0); }
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
		public List<IdentifierContext> identifier() {
			return getRuleContexts(IdentifierContext.class);
		}
		public IdentifierContext identifier(int i) {
			return getRuleContext(IdentifierContext.class,i);
		}
		public List<StringLiteralContext> stringLiteral() {
			return getRuleContexts(StringLiteralContext.class);
		}
		public StringLiteralContext stringLiteral(int i) {
			return getRuleContext(StringLiteralContext.class,i);
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
		enterRule(_localctx, 124, RULE_objectLiteral);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(807);
			match(OpenBrace);
			setState(827);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Identifier || _la==StringLiteral) {
				{
				setState(810);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case Identifier:
					{
					setState(808);
					identifier();
					}
					break;
				case StringLiteral:
					{
					setState(809);
					stringLiteral();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(812);
				match(Colon);
				setState(813);
				singleExpression(0);
				setState(824);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==Comma) {
					{
					{
					setState(814);
					match(Comma);
					setState(817);
					_errHandler.sync(this);
					switch (_input.LA(1)) {
					case Identifier:
						{
						setState(815);
						identifier();
						}
						break;
					case StringLiteral:
						{
						setState(816);
						stringLiteral();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					setState(819);
					match(Colon);
					setState(820);
					singleExpression(0);
					}
					}
					setState(826);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
			}

			setState(829);
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
		enterRule(_localctx, 126, RULE_literal);
		try {
			setState(838);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case NullLiteral:
				enterOuterAlt(_localctx, 1);
				{
				setState(831);
				nullLiteral();
				}
				break;
			case BooleanLiteral:
				enterOuterAlt(_localctx, 2);
				{
				setState(832);
				booleanLiteral();
				}
				break;
			case StringLiteral:
				enterOuterAlt(_localctx, 3);
				{
				setState(833);
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
				setState(834);
				numericLiteral();
				}
				break;
			case OpenBracket:
				enterOuterAlt(_localctx, 5);
				{
				setState(835);
				listLiteral();
				}
				break;
			case OpenBrace:
				enterOuterAlt(_localctx, 6);
				{
				setState(836);
				objectLiteral();
				}
				break;
			case New_:
				enterOuterAlt(_localctx, 7);
				{
				setState(837);
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
		enterRule(_localctx, 128, RULE_booleanLiteral);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(840);
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
		enterRule(_localctx, 130, RULE_stringLiteral);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(842);
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
		enterRule(_localctx, 132, RULE_nullLiteral);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(844);
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
		enterRule(_localctx, 134, RULE_numericLiteral);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(846);
			_la = _input.LA(1);
			if ( !(((((_la - 63)) & ~0x3f) == 0 && ((1L << (_la - 63)) & ((1L << (DecimalLiteral - 63)) | (1L << (HexIntegerLiteral - 63)) | (1L << (OctalIntegerLiteral - 63)) | (1L << (OctalIntegerLiteral2 - 63)) | (1L << (BinaryIntegerLiteral - 63)))) != 0)) ) {
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
		enterRule(_localctx, 136, RULE_identifier);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(848);
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
		enterRule(_localctx, 138, RULE_safeKeyword);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(850);
			_la = _input.LA(1);
			if ( !(((((_la - 74)) & ~0x3f) == 0 && ((1L << (_la - 74)) & ((1L << (Print - 74)) | (1L << (While - 74)) | (1L << (Repeat - 74)) | (1L << (Times - 74)) | (1L << (Do - 74)) | (1L << (Continue - 74)) | (1L << (Break - 74)) | (1L << (Switch - 74)) | (1L << (Case - 74)) | (1L << (Default - 74)) | (1L << (Each - 74)) | (1L << (For - 74)) | (1L << (In - 74)) | (1L << (Of - 74)) | (1L << (If - 74)) | (1L << (ElseIf - 74)) | (1L << (Else - 74)) | (1L << (Return - 74)) | (1L << (InstanceOf - 74)))) != 0)) ) {
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
		enterRule(_localctx, 140, RULE_eos);
		try {
			setState(856);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,100,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(852);
				match(SemiColon);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(853);
				match(EOF);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(854);
				if (!(this.lineTerminatorAhead())) throw new FailedPredicateException(this, "this.lineTerminatorAhead()");
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(855);
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
		case 7:
			return expressionStatement_sempred((ExpressionStatementContext)_localctx, predIndex);
		case 10:
			return member_sempred((MemberContext)_localctx, predIndex);
		case 12:
			return singleExpression_sempred((SingleExpressionContext)_localctx, predIndex);
		case 70:
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
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3\u0087\u035d\4\2\t"+
		"\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13"+
		"\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\4\31\t\31"+
		"\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4\36\t\36\4\37\t\37\4 \t \4!"+
		"\t!\4\"\t\"\4#\t#\4$\t$\4%\t%\4&\t&\4\'\t\'\4(\t(\4)\t)\4*\t*\4+\t+\4"+
		",\t,\4-\t-\4.\t.\4/\t/\4\60\t\60\4\61\t\61\4\62\t\62\4\63\t\63\4\64\t"+
		"\64\4\65\t\65\4\66\t\66\4\67\t\67\48\t8\49\t9\4:\t:\4;\t;\4<\t<\4=\t="+
		"\4>\t>\4?\t?\4@\t@\4A\tA\4B\tB\4C\tC\4D\tD\4E\tE\4F\tF\4G\tG\4H\tH\3\2"+
		"\5\2\u0092\n\2\3\2\3\2\3\3\6\3\u0097\n\3\r\3\16\3\u0098\3\4\3\4\3\4\3"+
		"\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\5\4\u00a9\n\4\3\5\3\5\5\5\u00ad"+
		"\n\5\3\5\3\5\3\6\3\6\3\6\3\7\3\7\3\b\3\b\3\b\3\t\3\t\3\t\3\t\3\n\3\n\3"+
		"\n\3\n\3\n\5\n\u00c2\n\n\3\13\3\13\3\13\3\13\5\13\u00c8\n\13\5\13\u00ca"+
		"\n\13\3\f\3\f\3\f\3\f\3\f\3\f\5\f\u00d2\n\f\3\f\3\f\5\f\u00d6\n\f\5\f"+
		"\u00d8\n\f\3\f\3\f\3\f\3\f\5\f\u00de\n\f\3\f\3\f\3\f\3\f\3\f\3\f\3\f\3"+
		"\f\3\f\3\f\3\f\3\f\3\f\3\f\3\f\3\f\3\f\3\f\3\f\3\f\3\f\7\f\u00f5\n\f\f"+
		"\f\16\f\u00f8\13\f\3\r\3\r\3\r\3\r\3\r\3\r\5\r\u0100\n\r\3\16\3\16\3\16"+
		"\3\16\3\16\3\16\3\16\3\16\3\16\3\16\3\16\3\16\3\16\3\16\3\16\3\16\3\16"+
		"\3\16\3\16\3\16\3\16\3\16\3\16\3\16\3\16\3\16\3\16\3\16\3\16\3\16\3\16"+
		"\3\16\3\16\3\16\3\16\3\16\3\16\3\16\3\16\3\16\3\16\3\16\5\16\u012c\n\16"+
		"\3\16\3\16\3\16\3\16\3\16\3\16\3\16\3\16\3\16\3\16\3\16\3\16\3\16\3\16"+
		"\3\16\3\16\3\16\3\16\3\16\3\16\3\16\3\16\3\16\3\16\3\16\3\16\3\16\3\16"+
		"\3\16\3\16\3\16\3\16\3\16\3\16\3\16\3\16\3\16\3\16\3\16\3\16\3\16\3\16"+
		"\3\16\3\16\7\16\u015a\n\16\f\16\16\16\u015d\13\16\3\17\3\17\3\20\3\20"+
		"\3\20\3\20\3\20\3\20\3\20\3\20\3\20\5\20\u016a\n\20\3\21\3\21\5\21\u016e"+
		"\n\21\3\22\3\22\3\23\3\23\3\23\3\23\5\23\u0176\n\23\3\24\3\24\3\24\7\24"+
		"\u017b\n\24\f\24\16\24\u017e\13\24\3\25\3\25\3\25\5\25\u0183\n\25\3\25"+
		"\3\25\5\25\u0187\n\25\3\25\3\25\5\25\u018b\n\25\3\25\5\25\u018e\n\25\3"+
		"\26\6\26\u0191\n\26\r\26\16\26\u0192\3\27\3\27\3\27\5\27\u0198\n\27\3"+
		"\27\3\27\3\30\3\30\3\30\3\30\3\30\3\30\3\30\3\30\3\30\3\30\3\30\3\30\3"+
		"\30\5\30\u01a9\n\30\3\31\5\31\u01ac\n\31\3\31\3\31\3\31\3\31\3\31\3\31"+
		"\3\32\3\32\3\32\5\32\u01b7\n\32\3\32\3\32\3\32\3\32\3\32\3\32\3\32\3\32"+
		"\5\32\u01c1\n\32\3\32\3\32\3\32\5\32\u01c6\n\32\3\32\3\32\3\32\3\32\3"+
		"\32\5\32\u01cd\n\32\3\32\3\32\5\32\u01d1\n\32\3\32\3\32\5\32\u01d5\n\32"+
		"\3\32\3\32\3\32\3\32\3\32\5\32\u01dc\n\32\3\32\3\32\3\32\3\32\3\32\3\32"+
		"\3\32\5\32\u01e5\n\32\3\32\3\32\3\32\3\32\5\32\u01eb\n\32\3\32\5\32\u01ee"+
		"\n\32\3\32\3\32\5\32\u01f2\n\32\3\32\3\32\3\32\3\32\5\32\u01f8\n\32\3"+
		"\32\5\32\u01fb\n\32\3\32\3\32\3\32\3\32\5\32\u0201\n\32\3\32\3\32\5\32"+
		"\u0205\n\32\3\33\3\33\5\33\u0209\n\33\3\34\3\34\3\34\3\35\3\35\3\35\3"+
		"\36\3\36\3\36\5\36\u0214\n\36\3\37\3\37\3\37\3\37\3\37\3\37\3 \3 \5 \u021e"+
		"\n \3 \3 \5 \u0222\n \5 \u0224\n \3 \3 \3!\6!\u0229\n!\r!\16!\u022a\3"+
		"\"\3\"\3\"\3\"\5\"\u0231\n\"\3#\3#\3#\5#\u0236\n#\3$\3$\3$\7$\u023b\n"+
		"$\f$\16$\u023e\13$\3%\5%\u0241\n%\3%\3%\3%\3%\5%\u0247\n%\3%\3%\3%\3&"+
		"\3&\3&\3&\5&\u0250\n&\3&\3&\3&\3\'\3\'\3\'\3\'\7\'\u0259\n\'\f\'\16\'"+
		"\u025c\13\'\5\'\u025e\n\'\3\'\3\'\3(\3(\3)\5)\u0265\n)\3)\3)\3)\3)\5)"+
		"\u026b\n)\3)\3)\3)\5)\u0270\n)\3)\3)\3)\3)\3)\5)\u0277\n)\5)\u0279\n)"+
		"\3)\3)\3)\5)\u027e\n)\3)\3)\3)\3)\3)\5)\u0285\n)\5)\u0287\n)\3)\3)\3*"+
		"\6*\u028c\n*\r*\16*\u028d\3+\5+\u0291\n+\3+\3+\3+\7+\u0296\n+\f+\16+\u0299"+
		"\13+\3,\5,\u029c\n,\3,\5,\u029f\n,\3,\3,\3,\5,\u02a4\n,\3,\3,\3,\3-\3"+
		"-\5-\u02ab\n-\3.\6.\u02ae\n.\r.\16.\u02af\3/\3/\5/\u02b4\n/\3/\3/\5/\u02b8"+
		"\n/\5/\u02ba\n/\3/\3/\3/\3\60\3\60\5\60\u02c1\n\60\3\60\3\60\3\61\6\61"+
		"\u02c6\n\61\r\61\16\61\u02c7\3\62\3\62\5\62\u02cc\n\62\3\62\3\62\5\62"+
		"\u02d0\n\62\3\63\3\63\3\63\3\64\3\64\3\65\3\65\5\65\u02d9\n\65\3\65\3"+
		"\65\5\65\u02dd\n\65\3\66\3\66\3\66\3\66\7\66\u02e3\n\66\f\66\16\66\u02e6"+
		"\13\66\3\67\3\67\3\67\3\67\3\67\3\67\3\67\5\67\u02ef\n\67\38\38\58\u02f3"+
		"\n8\39\39\39\59\u02f8\n9\39\39\39\39\39\39\59\u0300\n9\3:\3:\3:\5:\u0305"+
		"\n:\3:\5:\u0308\n:\3;\3;\5;\u030c\n;\3<\3<\3=\3=\3=\5=\u0313\n=\3>\3>"+
		"\3>\3>\5>\u0319\n>\3>\3>\3?\3?\3?\3?\7?\u0321\n?\f?\16?\u0324\13?\5?\u0326"+
		"\n?\3?\3?\3@\3@\3@\5@\u032d\n@\3@\3@\3@\3@\3@\5@\u0334\n@\3@\3@\3@\7@"+
		"\u0339\n@\f@\16@\u033c\13@\5@\u033e\n@\3@\3@\3A\3A\3A\3A\3A\3A\3A\5A\u0349"+
		"\nA\3B\3B\3C\3C\3D\3D\3E\3E\3F\3F\3G\3G\3H\3H\3H\3H\5H\u035b\nH\3H\2\4"+
		"\26\32I\2\4\6\b\n\f\16\20\22\24\26\30\32\34\36 \"$&(*,.\60\62\64\668:"+
		"<>@BDFHJLNPRTVXZ\\^`bdfhjlnprtvxz|~\u0080\u0082\u0084\u0086\u0088\u008a"+
		"\u008c\u008e\2\26\4\2AA\u0084\u0084\4\2jl\u0084\u0084\3\2\26\27\3\2\34"+
		"\36\3\2\30\31\3\2\"$\3\2%&\3\2+,\3\2)*\3\2-/\3\2\60\61\3\2YZ\4\2\21\21"+
		"YY\4\2NNPP\3\2\u0081\u0083\4\2bbww\6\2YZ^^cezz\3\2\62=\3\2AE\7\2LVXZ\\"+
		"\\^`zz\2\u03c8\2\u0091\3\2\2\2\4\u0096\3\2\2\2\6\u00a8\3\2\2\2\b\u00aa"+
		"\3\2\2\2\n\u00b0\3\2\2\2\f\u00b3\3\2\2\2\16\u00b5\3\2\2\2\20\u00b8\3\2"+
		"\2\2\22\u00c1\3\2\2\2\24\u00c9\3\2\2\2\26\u00dd\3\2\2\2\30\u00ff\3\2\2"+
		"\2\32\u012b\3\2\2\2\34\u015e\3\2\2\2\36\u0169\3\2\2\2 \u016d\3\2\2\2\""+
		"\u016f\3\2\2\2$\u0175\3\2\2\2&\u0177\3\2\2\2(\u017f\3\2\2\2*\u0190\3\2"+
		"\2\2,\u0194\3\2\2\2.\u01a8\3\2\2\2\60\u01ab\3\2\2\2\62\u0204\3\2\2\2\64"+
		"\u0208\3\2\2\2\66\u020a\3\2\2\28\u020d\3\2\2\2:\u0210\3\2\2\2<\u0215\3"+
		"\2\2\2>\u021b\3\2\2\2@\u0228\3\2\2\2B\u022c\3\2\2\2D\u0232\3\2\2\2F\u0237"+
		"\3\2\2\2H\u0240\3\2\2\2J\u024b\3\2\2\2L\u0254\3\2\2\2N\u0261\3\2\2\2P"+
		"\u0264\3\2\2\2R\u028b\3\2\2\2T\u0290\3\2\2\2V\u029b\3\2\2\2X\u02aa\3\2"+
		"\2\2Z\u02ad\3\2\2\2\\\u02b1\3\2\2\2^\u02be\3\2\2\2`\u02c5\3\2\2\2b\u02cb"+
		"\3\2\2\2d\u02d1\3\2\2\2f\u02d4\3\2\2\2h\u02d8\3\2\2\2j\u02de\3\2\2\2l"+
		"\u02ee\3\2\2\2n\u02f2\3\2\2\2p\u02ff\3\2\2\2r\u0307\3\2\2\2t\u030b\3\2"+
		"\2\2v\u030d\3\2\2\2x\u0312\3\2\2\2z\u0314\3\2\2\2|\u031c\3\2\2\2~\u0329"+
		"\3\2\2\2\u0080\u0348\3\2\2\2\u0082\u034a\3\2\2\2\u0084\u034c\3\2\2\2\u0086"+
		"\u034e\3\2\2\2\u0088\u0350\3\2\2\2\u008a\u0352\3\2\2\2\u008c\u0354\3\2"+
		"\2\2\u008e\u035a\3\2\2\2\u0090\u0092\5\4\3\2\u0091\u0090\3\2\2\2\u0091"+
		"\u0092\3\2\2\2\u0092\u0093\3\2\2\2\u0093\u0094\7\2\2\3\u0094\3\3\2\2\2"+
		"\u0095\u0097\5\6\4\2\u0096\u0095\3\2\2\2\u0097\u0098\3\2\2\2\u0098\u0096"+
		"\3\2\2\2\u0098\u0099\3\2\2\2\u0099\5\3\2\2\2\u009a\u00a9\5\b\5\2\u009b"+
		"\u00a9\5d\63\2\u009c\u00a9\5\f\7\2\u009d\u00a9\5\n\6\2\u009e\u00a9\5\16"+
		"\b\2\u009f\u00a9\5P)\2\u00a0\u00a9\5(\25\2\u00a1\u00a9\5\62\32\2\u00a2"+
		"\u00a9\5\66\34\2\u00a3\u00a9\58\35\2\u00a4\u00a9\5:\36\2\u00a5\u00a9\5"+
		"<\37\2\u00a6\u00a9\5H%\2\u00a7\u00a9\5\20\t\2\u00a8\u009a\3\2\2\2\u00a8"+
		"\u009b\3\2\2\2\u00a8\u009c\3\2\2\2\u00a8\u009d\3\2\2\2\u00a8\u009e\3\2"+
		"\2\2\u00a8\u009f\3\2\2\2\u00a8\u00a0\3\2\2\2\u00a8\u00a1\3\2\2\2\u00a8"+
		"\u00a2\3\2\2\2\u00a8\u00a3\3\2\2\2\u00a8\u00a4\3\2\2\2\u00a8\u00a5\3\2"+
		"\2\2\u00a8\u00a6\3\2\2\2\u00a8\u00a7\3\2\2\2\u00a9\7\3\2\2\2\u00aa\u00ac"+
		"\7\r\2\2\u00ab\u00ad\5\4\3\2\u00ac\u00ab\3\2\2\2\u00ac\u00ad\3\2\2\2\u00ad"+
		"\u00ae\3\2\2\2\u00ae\u00af\7\16\2\2\u00af\t\3\2\2\2\u00b0\u00b1\7K\2\2"+
		"\u00b1\u00b2\t\2\2\2\u00b2\13\3\2\2\2\u00b3\u00b4\7\17\2\2\u00b4\r\3\2"+
		"\2\2\u00b5\u00b6\7L\2\2\u00b6\u00b7\5&\24\2\u00b7\17\3\2\2\2\u00b8\u00b9"+
		"\6\t\2\2\u00b9\u00ba\5&\24\2\u00ba\u00bb\5\u008eH\2\u00bb\21\3\2\2\2\u00bc"+
		"\u00bd\5\u008aF\2\u00bd\u00be\5L\'\2\u00be\u00c2\3\2\2\2\u00bf\u00c0\7"+
		"y\2\2\u00c0\u00c2\5L\'\2\u00c1\u00bc\3\2\2\2\u00c1\u00bf\3\2\2\2\u00c2"+
		"\23\3\2\2\2\u00c3\u00ca\5L\'\2\u00c4\u00c5\7\25\2\2\u00c5\u00c7\5\u008a"+
		"F\2\u00c6\u00c8\5L\'\2\u00c7\u00c6\3\2\2\2\u00c7\u00c8\3\2\2\2\u00c8\u00ca"+
		"\3\2\2\2\u00c9\u00c3\3\2\2\2\u00c9\u00c4\3\2\2\2\u00ca\25\3\2\2\2\u00cb"+
		"\u00cc\b\f\1\2\u00cc\u00de\7u\2\2\u00cd\u00de\7v\2\2\u00ce\u00de\7y\2"+
		"\2\u00cf\u00d1\7s\2\2\u00d0\u00d2\7r\2\2\u00d1\u00d0\3\2\2\2\u00d1\u00d2"+
		"\3\2\2\2\u00d2\u00d7\3\2\2\2\u00d3\u00d5\7Z\2\2\u00d4\u00d6\7q\2\2\u00d5"+
		"\u00d4\3\2\2\2\u00d5\u00d6\3\2\2\2\u00d6\u00d8\3\2\2\2\u00d7\u00d3\3\2"+
		"\2\2\u00d7\u00d8\3\2\2\2\u00d8\u00d9\3\2\2\2\u00d9\u00da\7\u0084\2\2\u00da"+
		"\u00de\5L\'\2\u00db\u00de\5\u008aF\2\u00dc\u00de\5f\64\2\u00dd\u00cb\3"+
		"\2\2\2\u00dd\u00cd\3\2\2\2\u00dd\u00ce\3\2\2\2\u00dd\u00cf\3\2\2\2\u00dd"+
		"\u00db\3\2\2\2\u00dd\u00dc\3\2\2\2\u00de\u00f6\3\2\2\2\u00df\u00e0\f\t"+
		"\2\2\u00e0\u00e1\7\25\2\2\u00e1\u00e2\5\30\r\2\u00e2\u00e3\5L\'\2\u00e3"+
		"\u00f5\3\2\2\2\u00e4\u00e5\f\b\2\2\u00e5\u00e6\7\25\2\2\u00e6\u00f5\5"+
		"\30\r\2\u00e7\u00e8\f\7\2\2\u00e8\u00e9\7\t\2\2\u00e9\u00ea\5\32\16\2"+
		"\u00ea\u00eb\7\n\2\2\u00eb\u00ec\5L\'\2\u00ec\u00f5\3\2\2\2\u00ed\u00ee"+
		"\f\6\2\2\u00ee\u00ef\7\t\2\2\u00ef\u00f0\5\32\16\2\u00f0\u00f1\7\n\2\2"+
		"\u00f1\u00f5\3\2\2\2\u00f2\u00f3\f\5\2\2\u00f3\u00f5\5L\'\2\u00f4\u00df"+
		"\3\2\2\2\u00f4\u00e4\3\2\2\2\u00f4\u00e7\3\2\2\2\u00f4\u00ed\3\2\2\2\u00f4"+
		"\u00f2\3\2\2\2\u00f5\u00f8\3\2\2\2\u00f6\u00f4\3\2\2\2\u00f6\u00f7\3\2"+
		"\2\2\u00f7\27\3\2\2\2\u00f8\u00f6\3\2\2\2\u00f9\u0100\7u\2\2\u00fa\u0100"+
		"\7v\2\2\u00fb\u0100\7y\2\2\u00fc\u0100\7x\2\2\u00fd\u0100\5\u008aF\2\u00fe"+
		"\u0100\5f\64\2\u00ff\u00f9\3\2\2\2\u00ff\u00fa\3\2\2\2\u00ff\u00fb\3\2"+
		"\2\2\u00ff\u00fc\3\2\2\2\u00ff\u00fd\3\2\2\2\u00ff\u00fe\3\2\2\2\u0100"+
		"\31\3\2\2\2\u0101\u0102\b\16\1\2\u0102\u012c\5p9\2\u0103\u0104\5$\23\2"+
		"\u0104\u0105\5L\'\2\u0105\u012c\3\2\2\2\u0106\u012c\7\b\2\2\u0107\u0108"+
		"\7i\2\2\u0108\u0109\7\25\2\2\u0109\u010a\t\3\2\2\u010a\u012c\5L\'\2\u010b"+
		"\u010c\7c\2\2\u010c\u012c\5\32\16\36\u010d\u010e\t\4\2\2\u010e\u012c\5"+
		"\32\16\34\u010f\u0110\7\30\2\2\u0110\u012c\5\32\16\33\u0111\u0112\7\31"+
		"\2\2\u0112\u012c\5\32\16\32\u0113\u0114\7\32\2\2\u0114\u012c\5\32\16\31"+
		"\u0115\u0116\7\33\2\2\u0116\u012c\5\32\16\30\u0117\u0118\5\u0084C\2\u0118"+
		"\u0119\7Y\2\2\u0119\u011a\5\32\16\27\u011a\u012c\3\2\2\2\u011b\u011c\5"+
		"\26\f\2\u011c\u011d\7\21\2\2\u011d\u011e\5\32\16\t\u011e\u012c\3\2\2\2"+
		"\u011f\u0120\5\26\f\2\u0120\u0121\5v<\2\u0121\u0122\5\32\16\b\u0122\u012c"+
		"\3\2\2\2\u0123\u012c\5j\66\2\u0124\u0125\7\13\2\2\u0125\u0126\5\32\16"+
		"\2\u0126\u0127\7\f\2\2\u0127\u012c\3\2\2\2\u0128\u012c\5\26\f\2\u0129"+
		"\u012c\5\u0080A\2\u012a\u012c\7?\2\2\u012b\u0101\3\2\2\2\u012b\u0103\3"+
		"\2\2\2\u012b\u0106\3\2\2\2\u012b\u0107\3\2\2\2\u012b\u010b\3\2\2\2\u012b"+
		"\u010d\3\2\2\2\u012b\u010f\3\2\2\2\u012b\u0111\3\2\2\2\u012b\u0113\3\2"+
		"\2\2\u012b\u0115\3\2\2\2\u012b\u0117\3\2\2\2\u012b\u011b\3\2\2\2\u012b"+
		"\u011f\3\2\2\2\u012b\u0123\3\2\2\2\u012b\u0124\3\2\2\2\u012b\u0128\3\2"+
		"\2\2\u012b\u0129\3\2\2\2\u012b\u012a\3\2\2\2\u012c\u015b\3\2\2\2\u012d"+
		"\u012e\f\26\2\2\u012e\u012f\t\5\2\2\u012f\u015a\5\32\16\27\u0130\u0131"+
		"\f\25\2\2\u0131\u0132\t\6\2\2\u0132\u015a\5\32\16\26\u0133\u0134\f\24"+
		"\2\2\u0134\u0135\t\7\2\2\u0135\u015a\5\32\16\25\u0136\u0137\f\23\2\2\u0137"+
		"\u0138\7\37\2\2\u0138\u015a\5\32\16\23\u0139\u013a\f\22\2\2\u013a\u013b"+
		"\t\b\2\2\u013b\u015a\5\32\16\23\u013c\u013d\f\21\2\2\u013d\u013e\7\'\2"+
		"\2\u013e\u015a\5\32\16\22\u013f\u0140\f\20\2\2\u0140\u0141\7(\2\2\u0141"+
		"\u015a\5\32\16\21\u0142\u0143\f\16\2\2\u0143\u0144\t\t\2\2\u0144\u015a"+
		"\5\32\16\17\u0145\u0146\f\r\2\2\u0146\u0147\t\n\2\2\u0147\u015a\5\32\16"+
		"\16\u0148\u0149\f\f\2\2\u0149\u014a\t\13\2\2\u014a\u015a\5\32\16\r\u014b"+
		"\u014c\f\13\2\2\u014c\u014d\t\f\2\2\u014d\u015a\5\32\16\f\u014e\u014f"+
		"\f\n\2\2\u014f\u0150\7\22\2\2\u0150\u0151\5\32\16\2\u0151\u0152\7\23\2"+
		"\2\u0152\u0153\5\32\16\13\u0153\u015a\3\2\2\2\u0154\u0155\f\35\2\2\u0155"+
		"\u015a\t\4\2\2\u0156\u0157\f\17\2\2\u0157\u0158\7z\2\2\u0158\u015a\5\u008a"+
		"F\2\u0159\u012d\3\2\2\2\u0159\u0130\3\2\2\2\u0159\u0133\3\2\2\2\u0159"+
		"\u0136\3\2\2\2\u0159\u0139\3\2\2\2\u0159\u013c\3\2\2\2\u0159\u013f\3\2"+
		"\2\2\u0159\u0142\3\2\2\2\u0159\u0145\3\2\2\2\u0159\u0148\3\2\2\2\u0159"+
		"\u014b\3\2\2\2\u0159\u014e\3\2\2\2\u0159\u0154\3\2\2\2\u0159\u0156\3\2"+
		"\2\2\u015a\u015d\3\2\2\2\u015b\u0159\3\2\2\2\u015b\u015c\3\2\2\2\u015c"+
		"\33\3\2\2\2\u015d\u015b\3\2\2\2\u015e\u015f\7l\2\2\u015f\35\3\2\2\2\u0160"+
		"\u016a\7d\2\2\u0161\u016a\7g\2\2\u0162\u016a\7h\2\2\u0163\u016a\7k\2\2"+
		"\u0164\u016a\7j\2\2\u0165\u016a\7n\2\2\u0166\u016a\7m\2\2\u0167\u016a"+
		"\7o\2\2\u0168\u016a\7|\2\2\u0169\u0160\3\2\2\2\u0169\u0161\3\2\2\2\u0169"+
		"\u0162\3\2\2\2\u0169\u0163\3\2\2\2\u0169\u0164\3\2\2\2\u0169\u0165\3\2"+
		"\2\2\u0169\u0166\3\2\2\2\u0169\u0167\3\2\2\2\u0169\u0168\3\2\2\2\u016a"+
		"\37\3\2\2\2\u016b\u016e\7e\2\2\u016c\u016e\7p\2\2\u016d\u016b\3\2\2\2"+
		"\u016d\u016c\3\2\2\2\u016e!\3\2\2\2\u016f\u0170\7f\2\2\u0170#\3\2\2\2"+
		"\u0171\u0176\5\34\17\2\u0172\u0176\5\36\20\2\u0173\u0176\5 \21\2\u0174"+
		"\u0176\5\"\22\2\u0175\u0171\3\2\2\2\u0175\u0172\3\2\2\2\u0175\u0173\3"+
		"\2\2\2\u0175\u0174\3\2\2\2\u0176%\3\2\2\2\u0177\u017c\5\32\16\2\u0178"+
		"\u0179\7\20\2\2\u0179\u017b\5\32\16\2\u017a\u0178\3\2\2\2\u017b\u017e"+
		"\3\2\2\2\u017c\u017a\3\2\2\2\u017c\u017d\3\2\2\2\u017d\'\3\2\2\2\u017e"+
		"\u017c\3\2\2\2\u017f\u0180\7\\\2\2\u0180\u0182\5\32\16\2\u0181\u0183\7"+
		"]\2\2\u0182\u0181\3\2\2\2\u0182\u0183\3\2\2\2\u0183\u0184\3\2\2\2\u0184"+
		"\u0186\5\6\4\2\u0185\u0187\5*\26\2\u0186\u0185\3\2\2\2\u0186\u0187\3\2"+
		"\2\2\u0187\u018d\3\2\2\2\u0188\u018a\7_\2\2\u0189\u018b\7]\2\2\u018a\u0189"+
		"\3\2\2\2\u018a\u018b\3\2\2\2\u018b\u018c\3\2\2\2\u018c\u018e\5\6\4\2\u018d"+
		"\u0188\3\2\2\2\u018d\u018e\3\2\2\2\u018e)\3\2\2\2\u018f\u0191\5,\27\2"+
		"\u0190\u018f\3\2\2\2\u0191\u0192\3\2\2\2\u0192\u0190\3\2\2\2\u0192\u0193"+
		"\3\2\2\2\u0193+\3\2\2\2\u0194\u0195\7^\2\2\u0195\u0197\5\32\16\2\u0196"+
		"\u0198\7]\2\2\u0197\u0196\3\2\2\2\u0197\u0198\3\2\2\2\u0198\u0199\3\2"+
		"\2\2\u0199\u019a\5\6\4\2\u019a-\3\2\2\2\u019b\u019c\7\u0084\2\2\u019c"+
		"\u019d\t\r\2\2\u019d\u01a9\5\32\16\2\u019e\u019f\7\u0084\2\2\u019f\u01a0"+
		"\7\20\2\2\u01a0\u01a1\7\u0084\2\2\u01a1\u01a2\t\r\2\2\u01a2\u01a9\5\32"+
		"\16\2\u01a3\u01a4\7\u0084\2\2\u01a4\u01a5\7>\2\2\u01a5\u01a6\7\u0084\2"+
		"\2\u01a6\u01a7\t\r\2\2\u01a7\u01a9\5\32\16\2\u01a8\u019b\3\2\2\2\u01a8"+
		"\u019e\3\2\2\2\u01a8\u01a3\3\2\2\2\u01a9/\3\2\2\2\u01aa\u01ac\7\177\2"+
		"\2\u01ab\u01aa\3\2\2\2\u01ab\u01ac\3\2\2\2\u01ac\u01ad\3\2\2\2\u01ad\u01ae"+
		"\5\u008aF\2\u01ae\u01af\t\16\2\2\u01af\u01b0\5\32\16\2\u01b0\u01b1\7["+
		"\2\2\u01b1\u01b2\5\32\16\2\u01b2\61\3\2\2\2\u01b3\u01b4\7N\2\2\u01b4\u01b6"+
		"\5\32\16\2\u01b5\u01b7\7O\2\2\u01b6\u01b5\3\2\2\2\u01b6\u01b7\3\2\2\2"+
		"\u01b7\u01b8\3\2\2\2\u01b8\u01b9\5\6\4\2\u01b9\u0205\3\2\2\2\u01ba\u01bb"+
		"\t\17\2\2\u01bb\u01bc\5\6\4\2\u01bc\u01bd\7M\2\2\u01bd\u01be\5\32\16\2"+
		"\u01be\u0205\3\2\2\2\u01bf\u01c1\7N\2\2\u01c0\u01bf\3\2\2\2\u01c0\u01c1"+
		"\3\2\2\2\u01c1\u01c2\3\2\2\2\u01c2\u01c3\7M\2\2\u01c3\u01c5\5\32\16\2"+
		"\u01c4\u01c6\t\17\2\2\u01c5\u01c4\3\2\2\2\u01c5\u01c6\3\2\2\2\u01c6\u01c7"+
		"\3\2\2\2\u01c7\u01c8\5\6\4\2\u01c8\u0205\3\2\2\2\u01c9\u01ca\7X\2\2\u01ca"+
		"\u01cc\7\13\2\2\u01cb\u01cd\5\64\33\2\u01cc\u01cb\3\2\2\2\u01cc\u01cd"+
		"\3\2\2\2\u01cd\u01ce\3\2\2\2\u01ce\u01d0\7\17\2\2\u01cf\u01d1\5&\24\2"+
		"\u01d0\u01cf\3\2\2\2\u01d0\u01d1\3\2\2\2\u01d1\u01d2\3\2\2\2\u01d2\u01d4"+
		"\7\17\2\2\u01d3\u01d5\5&\24\2\u01d4\u01d3\3\2\2\2\u01d4\u01d5\3\2\2\2"+
		"\u01d5\u01d6\3\2\2\2\u01d6\u01d7\7\f\2\2\u01d7\u0205\5\6\4\2\u01d8\u01d9"+
		"\7X\2\2\u01d9\u01db\5\60\31\2\u01da\u01dc\t\17\2\2\u01db\u01da\3\2\2\2"+
		"\u01db\u01dc\3\2\2\2\u01dc\u01dd\3\2\2\2\u01dd\u01de\5\6\4\2\u01de\u0205"+
		"\3\2\2\2\u01df\u01e0\7X\2\2\u01e0\u01e1\7\13\2\2\u01e1\u01e2\5\60\31\2"+
		"\u01e2\u01e4\7\f\2\2\u01e3\u01e5\t\17\2\2\u01e4\u01e3\3\2\2\2\u01e4\u01e5"+
		"\3\2\2\2\u01e5\u01e6\3\2\2\2\u01e6\u01e7\5\6\4\2\u01e7\u0205\3\2\2\2\u01e8"+
		"\u01ea\7X\2\2\u01e9\u01eb\7V\2\2\u01ea\u01e9\3\2\2\2\u01ea\u01eb\3\2\2"+
		"\2\u01eb\u01ee\3\2\2\2\u01ec\u01ee\7W\2\2\u01ed\u01e8\3\2\2\2\u01ed\u01ec"+
		"\3\2\2\2\u01ee\u01ef\3\2\2\2\u01ef\u01f1\5.\30\2\u01f0\u01f2\t\17\2\2"+
		"\u01f1\u01f0\3\2\2\2\u01f1\u01f2\3\2\2\2\u01f2\u01f3\3\2\2\2\u01f3\u01f4"+
		"\5\6\4\2\u01f4\u0205\3\2\2\2\u01f5\u01f7\7X\2\2\u01f6\u01f8\7V\2\2\u01f7"+
		"\u01f6\3\2\2\2\u01f7\u01f8\3\2\2\2\u01f8\u01fb\3\2\2\2\u01f9\u01fb\7W"+
		"\2\2\u01fa\u01f5\3\2\2\2\u01fa\u01f9\3\2\2\2\u01fb\u01fc\3\2\2\2\u01fc"+
		"\u01fd\7\13\2\2\u01fd\u01fe\5.\30\2\u01fe\u0200\7\f\2\2\u01ff\u0201\t"+
		"\17\2\2\u0200\u01ff\3\2\2\2\u0200\u0201\3\2\2\2\u0201\u0202\3\2\2\2\u0202"+
		"\u0203\5\6\4\2\u0203\u0205\3\2\2\2\u0204\u01b3\3\2\2\2\u0204\u01ba\3\2"+
		"\2\2\u0204\u01c0\3\2\2\2\u0204\u01c9\3\2\2\2\u0204\u01d8\3\2\2\2\u0204"+
		"\u01df\3\2\2\2\u0204\u01ed\3\2\2\2\u0204\u01fa\3\2\2\2\u0205\63\3\2\2"+
		"\2\u0206\u0209\5&\24\2\u0207\u0209\5j\66\2\u0208\u0206\3\2\2\2\u0208\u0207"+
		"\3\2\2\2\u0209\65\3\2\2\2\u020a\u020b\7Q\2\2\u020b\u020c\5\u008eH\2\u020c"+
		"\67\3\2\2\2\u020d\u020e\7R\2\2\u020e\u020f\5\u008eH\2\u020f9\3\2\2\2\u0210"+
		"\u0213\7`\2\2\u0211\u0214\5\32\16\2\u0212\u0214\5\u008eH\2\u0213\u0211"+
		"\3\2\2\2\u0213\u0212\3\2\2\2\u0214;\3\2\2\2\u0215\u0216\7S\2\2\u0216\u0217"+
		"\7\13\2\2\u0217\u0218\5&\24\2\u0218\u0219\7\f\2\2\u0219\u021a\5> \2\u021a"+
		"=\3\2\2\2\u021b\u021d\7\r\2\2\u021c\u021e\5@!\2\u021d\u021c\3\2\2\2\u021d"+
		"\u021e\3\2\2\2\u021e\u0223\3\2\2\2\u021f\u0221\5D#\2\u0220\u0222\5@!\2"+
		"\u0221\u0220\3\2\2\2\u0221\u0222\3\2\2\2\u0222\u0224\3\2\2\2\u0223\u021f"+
		"\3\2\2\2\u0223\u0224\3\2\2\2\u0224\u0225\3\2\2\2\u0225\u0226\7\16\2\2"+
		"\u0226?\3\2\2\2\u0227\u0229\5B\"\2\u0228\u0227\3\2\2\2\u0229\u022a\3\2"+
		"\2\2\u022a\u0228\3\2\2\2\u022a\u022b\3\2\2\2\u022bA\3\2\2\2\u022c\u022d"+
		"\7T\2\2\u022d\u022e\5&\24\2\u022e\u0230\7\23\2\2\u022f\u0231\5\4\3\2\u0230"+
		"\u022f\3\2\2\2\u0230\u0231\3\2\2\2\u0231C\3\2\2\2\u0232\u0233\7U\2\2\u0233"+
		"\u0235\7\23\2\2\u0234\u0236\5\4\3\2\u0235\u0234\3\2\2\2\u0235\u0236\3"+
		"\2\2\2\u0236E\3\2\2\2\u0237\u023c\5b\62\2\u0238\u0239\7\20\2\2\u0239\u023b"+
		"\5b\62\2\u023a\u0238\3\2\2\2\u023b\u023e\3\2\2\2\u023c\u023a\3\2\2\2\u023c"+
		"\u023d\3\2\2\2\u023dG\3\2\2\2\u023e\u023c\3\2\2\2\u023f\u0241\7a\2\2\u0240"+
		"\u023f\3\2\2\2\u0240\u0241\3\2\2\2\u0241\u0242\3\2\2\2\u0242\u0243\7b"+
		"\2\2\u0243\u0244\5\u008aF\2\u0244\u0246\7\13\2\2\u0245\u0247\5F$\2\u0246"+
		"\u0245\3\2\2\2\u0246\u0247\3\2\2\2\u0247\u0248\3\2\2\2\u0248\u0249\7\f"+
		"\2\2\u0249\u024a\5n8\2\u024aI\3\2\2\2\u024b\u024c\7b\2\2\u024c\u024d\5"+
		"\u008aF\2\u024d\u024f\7\13\2\2\u024e\u0250\5F$\2\u024f\u024e\3\2\2\2\u024f"+
		"\u0250\3\2\2\2\u0250\u0251\3\2\2\2\u0251\u0252\7\f\2\2\u0252\u0253\5n"+
		"8\2\u0253K\3\2\2\2\u0254\u025d\7\13\2\2\u0255\u025a\5\32\16\2\u0256\u0257"+
		"\7\20\2\2\u0257\u0259\5\32\16\2\u0258\u0256\3\2\2\2\u0259\u025c\3\2\2"+
		"\2\u025a\u0258\3\2\2\2\u025a\u025b\3\2\2\2\u025b\u025e\3\2\2\2\u025c\u025a"+
		"\3\2\2\2\u025d\u0255\3\2\2\2\u025d\u025e\3\2\2\2\u025e\u025f\3\2\2\2\u025f"+
		"\u0260\7\f\2\2\u0260M\3\2\2\2\u0261\u0262\t\20\2\2\u0262O\3\2\2\2\u0263"+
		"\u0265\7a\2\2\u0264\u0263\3\2\2\2\u0264\u0265\3\2\2\2\u0265\u0266\3\2"+
		"\2\2\u0266\u0267\7q\2\2\u0267\u026a\5\u008aF\2\u0268\u0269\7t\2\2\u0269"+
		"\u026b\5\u008aF\2\u026a\u0268\3\2\2\2\u026a\u026b\3\2\2\2\u026b\u026c"+
		"\3\2\2\2\u026c\u0278\7\r\2\2\u026d\u026e\7u\2\2\u026e\u0270\7\23\2\2\u026f"+
		"\u026d\3\2\2\2\u026f\u0270\3\2\2\2\u0270\u0276\3\2\2\2\u0271\u0272\7\r"+
		"\2\2\u0272\u0273\5R*\2\u0273\u0274\7\16\2\2\u0274\u0277\3\2\2\2\u0275"+
		"\u0277\5R*\2\u0276\u0271\3\2\2\2\u0276\u0275\3\2\2\2\u0277\u0279\3\2\2"+
		"\2\u0278\u026f\3\2\2\2\u0278\u0279\3\2\2\2\u0279\u027a\3\2\2\2\u027a\u0286"+
		"\5\u008eH\2\u027b\u027c\7v\2\2\u027c\u027e\7\23\2\2\u027d\u027b\3\2\2"+
		"\2\u027d\u027e\3\2\2\2\u027e\u0284\3\2\2\2\u027f\u0285\5Z.\2\u0280\u0281"+
		"\7\r\2\2\u0281\u0282\5Z.\2\u0282\u0283\7\16\2\2\u0283\u0285\3\2\2\2\u0284"+
		"\u027f\3\2\2\2\u0284\u0280\3\2\2\2\u0285\u0287\3\2\2\2\u0286\u027d\3\2"+
		"\2\2\u0286\u0287\3\2\2\2\u0287\u0288\3\2\2\2\u0288\u0289\7\16\2\2\u0289"+
		"Q\3\2\2\2\u028a\u028c\5T+\2\u028b\u028a\3\2\2\2\u028c\u028d\3\2\2\2\u028d"+
		"\u028b\3\2\2\2\u028d\u028e\3\2\2\2\u028eS\3\2\2\2\u028f\u0291\5N(\2\u0290"+
		"\u028f\3\2\2\2\u0290\u0291\3\2\2\2\u0291\u0292\3\2\2\2\u0292\u0297\5h"+
		"\65\2\u0293\u0294\7\20\2\2\u0294\u0296\5h\65\2\u0295\u0293\3\2\2\2\u0296"+
		"\u0299\3\2\2\2\u0297\u0295\3\2\2\2\u0297\u0298\3\2\2\2\u0298U\3\2\2\2"+
		"\u0299\u0297\3\2\2\2\u029a\u029c\5N(\2\u029b\u029a\3\2\2\2\u029b\u029c"+
		"\3\2\2\2\u029c\u029e\3\2\2\2\u029d\u029f\t\21\2\2\u029e\u029d\3\2\2\2"+
		"\u029e\u029f\3\2\2\2\u029f\u02a0\3\2\2\2\u02a0\u02a1\5X-\2\u02a1\u02a3"+
		"\7\13\2\2\u02a2\u02a4\5F$\2\u02a3\u02a2\3\2\2\2\u02a3\u02a4\3\2\2\2\u02a4"+
		"\u02a5\3\2\2\2\u02a5\u02a6\7\f\2\2\u02a6\u02a7\5n8\2\u02a7W\3\2\2\2\u02a8"+
		"\u02ab\5\u008aF\2\u02a9\u02ab\7x\2\2\u02aa\u02a8\3\2\2\2\u02aa\u02a9\3"+
		"\2\2\2\u02abY\3\2\2\2\u02ac\u02ae\5V,\2\u02ad\u02ac\3\2\2\2\u02ae\u02af"+
		"\3\2\2\2\u02af\u02ad\3\2\2\2\u02af\u02b0\3\2\2\2\u02b0[\3\2\2\2\u02b1"+
		"\u02b3\7s\2\2\u02b2\u02b4\7r\2\2\u02b3\u02b2\3\2\2\2\u02b3\u02b4\3\2\2"+
		"\2\u02b4\u02b9\3\2\2\2\u02b5\u02b7\7Z\2\2\u02b6\u02b8\7q\2\2\u02b7\u02b6"+
		"\3\2\2\2\u02b7\u02b8\3\2\2\2\u02b8\u02ba\3\2\2\2\u02b9\u02b5\3\2\2\2\u02b9"+
		"\u02ba\3\2\2\2\u02ba\u02bb\3\2\2\2\u02bb\u02bc\7\u0084\2\2\u02bc\u02bd"+
		"\5L\'\2\u02bd]\3\2\2\2\u02be\u02c0\7\t\2\2\u02bf\u02c1\5\32\16\2\u02c0"+
		"\u02bf\3\2\2\2\u02c0\u02c1\3\2\2\2\u02c1\u02c2\3\2\2\2\u02c2\u02c3\7\n"+
		"\2\2\u02c3_\3\2\2\2\u02c4\u02c6\5^\60\2\u02c5\u02c4\3\2\2\2\u02c6\u02c7"+
		"\3\2\2\2\u02c7\u02c5\3\2\2\2\u02c7\u02c8\3\2\2\2\u02c8a\3\2\2\2\u02c9"+
		"\u02cc\5f\64\2\u02ca\u02cc\5\u008aF\2\u02cb\u02c9\3\2\2\2\u02cb\u02ca"+
		"\3\2\2\2\u02cc\u02cf\3\2\2\2\u02cd\u02ce\7\21\2\2\u02ce\u02d0\5\32\16"+
		"\2\u02cf\u02cd\3\2\2\2\u02cf\u02d0\3\2\2\2\u02d0c\3\2\2\2\u02d1\u02d2"+
		"\5j\66\2\u02d2\u02d3\5\u008eH\2\u02d3e\3\2\2\2\u02d4\u02d5\t\22\2\2\u02d5"+
		"g\3\2\2\2\u02d6\u02d9\5f\64\2\u02d7\u02d9\5\u008aF\2\u02d8\u02d6\3\2\2"+
		"\2\u02d8\u02d7\3\2\2\2\u02d9\u02dc\3\2\2\2\u02da\u02db\7\21\2\2\u02db"+
		"\u02dd\5\32\16\2\u02dc\u02da\3\2\2\2\u02dc\u02dd\3\2\2\2\u02ddi\3\2\2"+
		"\2\u02de\u02df\5l\67\2\u02df\u02e4\5h\65\2\u02e0\u02e1\7\20\2\2\u02e1"+
		"\u02e3\5h\65\2\u02e2\u02e0\3\2\2\2\u02e3\u02e6\3\2\2\2\u02e4\u02e2\3\2"+
		"\2\2\u02e4\u02e5\3\2\2\2\u02e5k\3\2\2\2\u02e6\u02e4\3\2\2\2\u02e7\u02ef"+
		"\7a\2\2\u02e8\u02e9\7a\2\2\u02e9\u02ef\7\177\2\2\u02ea\u02eb\7a\2\2\u02eb"+
		"\u02ef\7\u0080\2\2\u02ec\u02ef\7\177\2\2\u02ed\u02ef\7\u0080\2\2\u02ee"+
		"\u02e7\3\2\2\2\u02ee\u02e8\3\2\2\2\u02ee\u02ea\3\2\2\2\u02ee\u02ec\3\2"+
		"\2\2\u02ee\u02ed\3\2\2\2\u02efm\3\2\2\2\u02f0\u02f3\5\b\5\2\u02f1\u02f3"+
		"\5\6\4\2\u02f2\u02f0\3\2\2\2\u02f2\u02f1\3\2\2\2\u02f3o\3\2\2\2\u02f4"+
		"\u02f5\7b\2\2\u02f5\u02f7\7\13\2\2\u02f6\u02f8\5F$\2\u02f7\u02f6\3\2\2"+
		"\2\u02f7\u02f8\3\2\2\2\u02f8\u02f9\3\2\2\2\u02f9\u02fa\7\f\2\2\u02fa\u0300"+
		"\5n8\2\u02fb\u02fc\5r:\2\u02fc\u02fd\7>\2\2\u02fd\u02fe\5t;\2\u02fe\u0300"+
		"\3\2\2\2\u02ff\u02f4\3\2\2\2\u02ff\u02fb\3\2\2\2\u0300q\3\2\2\2\u0301"+
		"\u0308\5\u008aF\2\u0302\u0304\7\13\2\2\u0303\u0305\5F$\2\u0304\u0303\3"+
		"\2\2\2\u0304\u0305\3\2\2\2\u0305\u0306\3\2\2\2\u0306\u0308\7\f\2\2\u0307"+
		"\u0301\3\2\2\2\u0307\u0302\3\2\2\2\u0308s\3\2\2\2\u0309\u030c\5\32\16"+
		"\2\u030a\u030c\5n8\2\u030b\u0309\3\2\2\2\u030b\u030a\3\2\2\2\u030cu\3"+
		"\2\2\2\u030d\u030e\t\23\2\2\u030ew\3\2\2\2\u030f\u0313\5\u008cG\2\u0310"+
		"\u0313\7@\2\2\u0311\u0313\7J\2\2\u0312\u030f\3\2\2\2\u0312\u0310\3\2\2"+
		"\2\u0312\u0311\3\2\2\2\u0313y\3\2\2\2\u0314\u0315\7s\2\2\u0315\u0316\7"+
		"{\2\2\u0316\u0318\7\13\2\2\u0317\u0319\5|?\2\u0318\u0317\3\2\2\2\u0318"+
		"\u0319\3\2\2\2\u0319\u031a\3\2\2\2\u031a\u031b\7\f\2\2\u031b{\3\2\2\2"+
		"\u031c\u0325\7\t\2\2\u031d\u0322\5\32\16\2\u031e\u031f\7\20\2\2\u031f"+
		"\u0321\5\32\16\2\u0320\u031e\3\2\2\2\u0321\u0324\3\2\2\2\u0322\u0320\3"+
		"\2\2\2\u0322\u0323\3\2\2\2\u0323\u0326\3\2\2\2\u0324\u0322\3\2\2\2\u0325"+
		"\u031d\3\2\2\2\u0325\u0326\3\2\2\2\u0326\u0327\3\2\2\2\u0327\u0328\7\n"+
		"\2\2\u0328}\3\2\2\2\u0329\u033d\7\r\2\2\u032a\u032d\5\u008aF\2\u032b\u032d"+
		"\5\u0084C\2\u032c\u032a\3\2\2\2\u032c\u032b\3\2\2\2\u032d\u032e\3\2\2"+
		"\2\u032e\u032f\7\23\2\2\u032f\u033a\5\32\16\2\u0330\u0333\7\20\2\2\u0331"+
		"\u0334\5\u008aF\2\u0332\u0334\5\u0084C\2\u0333\u0331\3\2\2\2\u0333\u0332"+
		"\3\2\2\2\u0334\u0335\3\2\2\2\u0335\u0336\7\23\2\2\u0336\u0337\5\32\16"+
		"\2\u0337\u0339\3\2\2\2\u0338\u0330\3\2\2\2\u0339\u033c\3\2\2\2\u033a\u0338"+
		"\3\2\2\2\u033a\u033b\3\2\2\2\u033b\u033e\3\2\2\2\u033c\u033a\3\2\2\2\u033d"+
		"\u032c\3\2\2\2\u033d\u033e\3\2\2\2\u033e\u033f\3\2\2\2\u033f\u0340\7\16"+
		"\2\2\u0340\177\3\2\2\2\u0341\u0349\5\u0086D\2\u0342\u0349\5\u0082B\2\u0343"+
		"\u0349\5\u0084C\2\u0344\u0349\5\u0088E\2\u0345\u0349\5|?\2\u0346\u0349"+
		"\5~@\2\u0347\u0349\5z>\2\u0348\u0341\3\2\2\2\u0348\u0342\3\2\2\2\u0348"+
		"\u0343\3\2\2\2\u0348\u0344\3\2\2\2\u0348\u0345\3\2\2\2\u0348\u0346\3\2"+
		"\2\2\u0348\u0347\3\2\2\2\u0349\u0081\3\2\2\2\u034a\u034b\7J\2\2\u034b"+
		"\u0083\3\2\2\2\u034c\u034d\7\u0085\2\2\u034d\u0085\3\2\2\2\u034e\u034f"+
		"\7@\2\2\u034f\u0087\3\2\2\2\u0350\u0351\t\24\2\2\u0351\u0089\3\2\2\2\u0352"+
		"\u0353\7\u0084\2\2\u0353\u008b\3\2\2\2\u0354\u0355\t\25\2\2\u0355\u008d"+
		"\3\2\2\2\u0356\u035b\7\17\2\2\u0357\u035b\7\2\2\3\u0358\u035b\6H\26\2"+
		"\u0359\u035b\6H\27\2\u035a\u0356\3\2\2\2\u035a\u0357\3\2\2\2\u035a\u0358"+
		"\3\2\2\2\u035a\u0359\3\2\2\2\u035b\u008f\3\2\2\2g\u0091\u0098\u00a8\u00ac"+
		"\u00c1\u00c7\u00c9\u00d1\u00d5\u00d7\u00dd\u00f4\u00f6\u00ff\u012b\u0159"+
		"\u015b\u0169\u016d\u0175\u017c\u0182\u0186\u018a\u018d\u0192\u0197\u01a8"+
		"\u01ab\u01b6\u01c0\u01c5\u01cc\u01d0\u01d4\u01db\u01e4\u01ea\u01ed\u01f1"+
		"\u01f7\u01fa\u0200\u0204\u0208\u0213\u021d\u0221\u0223\u022a\u0230\u0235"+
		"\u023c\u0240\u0246\u024f\u025a\u025d\u0264\u026a\u026f\u0276\u0278\u027d"+
		"\u0284\u0286\u028d\u0290\u0297\u029b\u029e\u02a3\u02aa\u02af\u02b3\u02b7"+
		"\u02b9\u02c0\u02c7\u02cb\u02cf\u02d8\u02dc\u02e4\u02ee\u02f2\u02f7\u02ff"+
		"\u0304\u0307\u030b\u0312\u0318\u0322\u0325\u032c\u0333\u033a\u033d\u0348"+
		"\u035a";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}