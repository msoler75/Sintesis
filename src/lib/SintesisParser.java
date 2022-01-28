// Generated from ./src/grammar/SintesisParser.g4 by ANTLR 4.9.3
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class SintesisParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.9.3", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		MultiLineComment=1, SingleLineComment=2, OpenBracket=3, CloseBracket=4, 
		OpenParen=5, CloseParen=6, OpenBrace=7, CloseBrace=8, SemiColon=9, Comma=10, 
		Assign=11, QuestionMark=12, Colon=13, Ellipsis=14, Dot=15, PlusPlus=16, 
		MinusMinus=17, Plus=18, Minus=19, BitNot=20, Not=21, Multiply=22, Divide=23, 
		Modulus=24, Power=25, NullCoalesce=26, Hashtag=27, RightShiftArithmetic=28, 
		LeftShiftArithmetic=29, RightShiftLogical=30, LessThan=31, MoreThan=32, 
		LessThanEquals=33, GreaterThanEquals=34, Equals_=35, NotEquals=36, IdentityEquals=37, 
		IdentityNotEquals=38, BitAnd=39, BitXOr=40, BitOr=41, And=42, Or=43, MultiplyAssign=44, 
		DivideAssign=45, ModulusAssign=46, PlusAssign=47, MinusAssign=48, LeftShiftArithmeticAssign=49, 
		RightShiftArithmeticAssign=50, RightShiftLogicalAssign=51, BitAndAssign=52, 
		BitXorAssign=53, BitOrAssign=54, PowerAssign=55, ARROW=56, NullLiteral=57, 
		DecimalLiteral=58, HexIntegerLiteral=59, OctalIntegerLiteral=60, OctalIntegerLiteral2=61, 
		BinaryIntegerLiteral=62, BigHexIntegerLiteral=63, BigOctalIntegerLiteral=64, 
		BigBinaryIntegerLiteral=65, BigDecimalIntegerLiteral=66, BooleanLiteral=67, 
		Step=68, Print=69, While=70, Repeat=71, If=72, Then=73, ElseIf=74, Else=75, 
		Return=76, Function_=77, Vector=78, Delete=79, NumberOf=80, New_=81, Class_=82, 
		Extends=83, Attributes=84, Methods=85, Super=86, InstanceOf=87, Dictionary=88, 
		Get=89, Set=90, Var=91, Identifier=92, StringLiteral=93, WhiteSpaces=94, 
		LineTerminator=95;
	public static final int
		RULE_program = 0, RULE_statementList = 1, RULE_statement = 2, RULE_block = 3, 
		RULE_stepStatement = 4, RULE_printStatement = 5, RULE_expression = 6, 
		RULE_expressionSequence = 7, RULE_ifStatement = 8, RULE_elseIfs = 9, RULE_elseIf = 10, 
		RULE_elseStatement = 11, RULE_iterationStatement = 12, RULE_returnStatement = 13, 
		RULE_varDeclaration = 14, RULE_functionDeclaration = 15, RULE_formalParameterList = 16, 
		RULE_arguments = 17, RULE_classDeclaration = 18, RULE_identifiers = 19, 
		RULE_methodDeclaration = 20, RULE_methodsList = 21, RULE_classExp = 22, 
		RULE_vectorIndex = 23, RULE_vectorIndexes = 24, RULE_formalParameterArg = 25, 
		RULE_functionBody = 26, RULE_assignmentOperator = 27, RULE_assignable = 28, 
		RULE_reservedWord = 29, RULE_literal = 30, RULE_booleanLiteral = 31, RULE_stringLiteral = 32, 
		RULE_nullLiteral = 33, RULE_numericLiteral = 34, RULE_identifierName = 35, 
		RULE_keyword = 36;
	private static String[] makeRuleNames() {
		return new String[] {
			"program", "statementList", "statement", "block", "stepStatement", "printStatement", 
			"expression", "expressionSequence", "ifStatement", "elseIfs", "elseIf", 
			"elseStatement", "iterationStatement", "returnStatement", "varDeclaration", 
			"functionDeclaration", "formalParameterList", "arguments", "classDeclaration", 
			"identifiers", "methodDeclaration", "methodsList", "classExp", "vectorIndex", 
			"vectorIndexes", "formalParameterArg", "functionBody", "assignmentOperator", 
			"assignable", "reservedWord", "literal", "booleanLiteral", "stringLiteral", 
			"nullLiteral", "numericLiteral", "identifierName", "keyword"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, null, null, "'['", "']'", "'('", "')'", "'{'", "'}'", "';'", "','", 
			"'='", "'?'", "':'", "'...'", "'.'", "'++'", "'--'", "'+'", "'-'", "'~'", 
			"'!'", "'*'", "'/'", "'%'", "'**'", "'??'", "'#'", "'>>'", "'<<'", "'>>>'", 
			"'<'", "'>'", "'<='", "'>='", "'=='", "'!='", "'==='", "'!=='", "'&'", 
			"'^'", "'|'", "'&&'", "'||'", "'*='", "'/='", "'%='", "'+='", "'-='", 
			"'<<='", "'>>='", "'>>>='", "'&='", "'^='", "'|='", "'**='", "'=>'", 
			"'null'", null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, null, "'var'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "MultiLineComment", "SingleLineComment", "OpenBracket", "CloseBracket", 
			"OpenParen", "CloseParen", "OpenBrace", "CloseBrace", "SemiColon", "Comma", 
			"Assign", "QuestionMark", "Colon", "Ellipsis", "Dot", "PlusPlus", "MinusMinus", 
			"Plus", "Minus", "BitNot", "Not", "Multiply", "Divide", "Modulus", "Power", 
			"NullCoalesce", "Hashtag", "RightShiftArithmetic", "LeftShiftArithmetic", 
			"RightShiftLogical", "LessThan", "MoreThan", "LessThanEquals", "GreaterThanEquals", 
			"Equals_", "NotEquals", "IdentityEquals", "IdentityNotEquals", "BitAnd", 
			"BitXOr", "BitOr", "And", "Or", "MultiplyAssign", "DivideAssign", "ModulusAssign", 
			"PlusAssign", "MinusAssign", "LeftShiftArithmeticAssign", "RightShiftArithmeticAssign", 
			"RightShiftLogicalAssign", "BitAndAssign", "BitXorAssign", "BitOrAssign", 
			"PowerAssign", "ARROW", "NullLiteral", "DecimalLiteral", "HexIntegerLiteral", 
			"OctalIntegerLiteral", "OctalIntegerLiteral2", "BinaryIntegerLiteral", 
			"BigHexIntegerLiteral", "BigOctalIntegerLiteral", "BigBinaryIntegerLiteral", 
			"BigDecimalIntegerLiteral", "BooleanLiteral", "Step", "Print", "While", 
			"Repeat", "If", "Then", "ElseIf", "Else", "Return", "Function_", "Vector", 
			"Delete", "NumberOf", "New_", "Class_", "Extends", "Attributes", "Methods", 
			"Super", "InstanceOf", "Dictionary", "Get", "Set", "Var", "Identifier", 
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
		public StatementListContext statementList() {
			return getRuleContext(StatementListContext.class,0);
		}
		public ProgramContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_program; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SintesisParserVisitor ) return ((SintesisParserVisitor<? extends T>)visitor).visitProgram(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ProgramContext program() throws RecognitionException {
		ProgramContext _localctx = new ProgramContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_program);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(74);
			statementList();
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
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SintesisParserVisitor ) return ((SintesisParserVisitor<? extends T>)visitor).visitStatementList(this);
			else return visitor.visitChildren(this);
		}
	}

	public final StatementListContext statementList() throws RecognitionException {
		StatementListContext _localctx = new StatementListContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_statementList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(77); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(76);
				statement();
				}
				}
				setState(79); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( (((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << SingleLineComment) | (1L << OpenBracket) | (1L << OpenParen) | (1L << OpenBrace) | (1L << PlusPlus) | (1L << MinusMinus) | (1L << Plus) | (1L << Minus) | (1L << BitNot) | (1L << Not) | (1L << NullLiteral) | (1L << DecimalLiteral) | (1L << HexIntegerLiteral) | (1L << OctalIntegerLiteral) | (1L << OctalIntegerLiteral2) | (1L << BinaryIntegerLiteral))) != 0) || ((((_la - 67)) & ~0x3f) == 0 && ((1L << (_la - 67)) & ((1L << (BooleanLiteral - 67)) | (1L << (Step - 67)) | (1L << (Print - 67)) | (1L << (While - 67)) | (1L << (Repeat - 67)) | (1L << (If - 67)) | (1L << (Return - 67)) | (1L << (Function_ - 67)) | (1L << (Vector - 67)) | (1L << (Class_ - 67)) | (1L << (Attributes - 67)) | (1L << (Methods - 67)) | (1L << (Super - 67)) | (1L << (Var - 67)) | (1L << (Identifier - 67)) | (1L << (StringLiteral - 67)))) != 0) );
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
		public StepStatementContext stepStatement() {
			return getRuleContext(StepStatementContext.class,0);
		}
		public PrintStatementContext printStatement() {
			return getRuleContext(PrintStatementContext.class,0);
		}
		public IfStatementContext ifStatement() {
			return getRuleContext(IfStatementContext.class,0);
		}
		public IterationStatementContext iterationStatement() {
			return getRuleContext(IterationStatementContext.class,0);
		}
		public ReturnStatementContext returnStatement() {
			return getRuleContext(ReturnStatementContext.class,0);
		}
		public VarDeclarationContext varDeclaration() {
			return getRuleContext(VarDeclarationContext.class,0);
		}
		public ClassDeclarationContext classDeclaration() {
			return getRuleContext(ClassDeclarationContext.class,0);
		}
		public FunctionDeclarationContext functionDeclaration() {
			return getRuleContext(FunctionDeclarationContext.class,0);
		}
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public StatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_statement; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SintesisParserVisitor ) return ((SintesisParserVisitor<? extends T>)visitor).visitStatement(this);
			else return visitor.visitChildren(this);
		}
	}

	public final StatementContext statement() throws RecognitionException {
		StatementContext _localctx = new StatementContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_statement);
		try {
			setState(91);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case OpenBrace:
				enterOuterAlt(_localctx, 1);
				{
				setState(81);
				block();
				}
				break;
			case Step:
				enterOuterAlt(_localctx, 2);
				{
				setState(82);
				stepStatement();
				}
				break;
			case Print:
				enterOuterAlt(_localctx, 3);
				{
				setState(83);
				printStatement();
				}
				break;
			case If:
				enterOuterAlt(_localctx, 4);
				{
				setState(84);
				ifStatement();
				}
				break;
			case While:
			case Repeat:
				enterOuterAlt(_localctx, 5);
				{
				setState(85);
				iterationStatement();
				}
				break;
			case Return:
				enterOuterAlt(_localctx, 6);
				{
				setState(86);
				returnStatement();
				}
				break;
			case Var:
				enterOuterAlt(_localctx, 7);
				{
				setState(87);
				varDeclaration();
				}
				break;
			case Class_:
				enterOuterAlt(_localctx, 8);
				{
				setState(88);
				classDeclaration();
				}
				break;
			case Function_:
				enterOuterAlt(_localctx, 9);
				{
				setState(89);
				functionDeclaration();
				}
				break;
			case SingleLineComment:
			case OpenBracket:
			case OpenParen:
			case PlusPlus:
			case MinusMinus:
			case Plus:
			case Minus:
			case BitNot:
			case Not:
			case NullLiteral:
			case DecimalLiteral:
			case HexIntegerLiteral:
			case OctalIntegerLiteral:
			case OctalIntegerLiteral2:
			case BinaryIntegerLiteral:
			case BooleanLiteral:
			case Vector:
			case Attributes:
			case Methods:
			case Super:
			case Identifier:
			case StringLiteral:
				enterOuterAlt(_localctx, 10);
				{
				setState(90);
				expression(0);
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
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SintesisParserVisitor ) return ((SintesisParserVisitor<? extends T>)visitor).visitBlock(this);
			else return visitor.visitChildren(this);
		}
	}

	public final BlockContext block() throws RecognitionException {
		BlockContext _localctx = new BlockContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_block);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(93);
			match(OpenBrace);
			setState(95);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << SingleLineComment) | (1L << OpenBracket) | (1L << OpenParen) | (1L << OpenBrace) | (1L << PlusPlus) | (1L << MinusMinus) | (1L << Plus) | (1L << Minus) | (1L << BitNot) | (1L << Not) | (1L << NullLiteral) | (1L << DecimalLiteral) | (1L << HexIntegerLiteral) | (1L << OctalIntegerLiteral) | (1L << OctalIntegerLiteral2) | (1L << BinaryIntegerLiteral))) != 0) || ((((_la - 67)) & ~0x3f) == 0 && ((1L << (_la - 67)) & ((1L << (BooleanLiteral - 67)) | (1L << (Step - 67)) | (1L << (Print - 67)) | (1L << (While - 67)) | (1L << (Repeat - 67)) | (1L << (If - 67)) | (1L << (Return - 67)) | (1L << (Function_ - 67)) | (1L << (Vector - 67)) | (1L << (Class_ - 67)) | (1L << (Attributes - 67)) | (1L << (Methods - 67)) | (1L << (Super - 67)) | (1L << (Var - 67)) | (1L << (Identifier - 67)) | (1L << (StringLiteral - 67)))) != 0)) {
				{
				setState(94);
				((BlockContext)_localctx).stmt = statementList();
				}
			}

			setState(97);
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
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SintesisParserVisitor ) return ((SintesisParserVisitor<? extends T>)visitor).visitStepStatement(this);
			else return visitor.visitChildren(this);
		}
	}

	public final StepStatementContext stepStatement() throws RecognitionException {
		StepStatementContext _localctx = new StepStatementContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_stepStatement);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(99);
			match(Step);
			setState(100);
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

	public static class PrintStatementContext extends ParserRuleContext {
		public ExpressionContext exp;
		public TerminalNode Print() { return getToken(SintesisParser.Print, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public PrintStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_printStatement; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SintesisParserVisitor ) return ((SintesisParserVisitor<? extends T>)visitor).visitPrintStatement(this);
			else return visitor.visitChildren(this);
		}
	}

	public final PrintStatementContext printStatement() throws RecognitionException {
		PrintStatementContext _localctx = new PrintStatementContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_printStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(102);
			match(Print);
			setState(103);
			((PrintStatementContext)_localctx).exp = expression(0);
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

	public static class ExpressionContext extends ParserRuleContext {
		public ExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expression; }
	 
		public ExpressionContext() { }
		public void copyFrom(ExpressionContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class ExpVectorContext extends ExpressionContext {
		public Token id;
		public VectorIndexesContext idx;
		public TerminalNode Identifier() { return getToken(SintesisParser.Identifier, 0); }
		public VectorIndexesContext vectorIndexes() {
			return getRuleContext(VectorIndexesContext.class,0);
		}
		public ExpVectorContext(ExpressionContext ctx) { copyFrom(ctx); }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SintesisParserVisitor ) return ((SintesisParserVisitor<? extends T>)visitor).visitExpVector(this);
			else return visitor.visitChildren(this);
		}
	}
	public static class ExpAssignmentContext extends ExpressionContext {
		public AssignableContext dest;
		public ExpressionContext exp;
		public TerminalNode Assign() { return getToken(SintesisParser.Assign, 0); }
		public AssignableContext assignable() {
			return getRuleContext(AssignableContext.class,0);
		}
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public ExpAssignmentContext(ExpressionContext ctx) { copyFrom(ctx); }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SintesisParserVisitor ) return ((SintesisParserVisitor<? extends T>)visitor).visitExpAssignment(this);
			else return visitor.visitChildren(this);
		}
	}
	public static class ExpPostDecreaseContext extends ExpressionContext {
		public ExpressionContext exp;
		public TerminalNode MinusMinus() { return getToken(SintesisParser.MinusMinus, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public ExpPostDecreaseContext(ExpressionContext ctx) { copyFrom(ctx); }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SintesisParserVisitor ) return ((SintesisParserVisitor<? extends T>)visitor).visitExpPostDecrease(this);
			else return visitor.visitChildren(this);
		}
	}
	public static class ExpPreIncrementContext extends ExpressionContext {
		public ExpressionContext exp;
		public TerminalNode PlusPlus() { return getToken(SintesisParser.PlusPlus, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public ExpPreIncrementContext(ExpressionContext ctx) { copyFrom(ctx); }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SintesisParserVisitor ) return ((SintesisParserVisitor<? extends T>)visitor).visitExpPreIncrement(this);
			else return visitor.visitChildren(this);
		}
	}
	public static class ExpPostIncrementContext extends ExpressionContext {
		public ExpressionContext exp;
		public TerminalNode PlusPlus() { return getToken(SintesisParser.PlusPlus, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public ExpPostIncrementContext(ExpressionContext ctx) { copyFrom(ctx); }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SintesisParserVisitor ) return ((SintesisParserVisitor<? extends T>)visitor).visitExpPostIncrement(this);
			else return visitor.visitChildren(this);
		}
	}
	public static class ExpInstanceOfContext extends ExpressionContext {
		public Token id;
		public Token is;
		public TerminalNode InstanceOf() { return getToken(SintesisParser.InstanceOf, 0); }
		public List<TerminalNode> Identifier() { return getTokens(SintesisParser.Identifier); }
		public TerminalNode Identifier(int i) {
			return getToken(SintesisParser.Identifier, i);
		}
		public ExpInstanceOfContext(ExpressionContext ctx) { copyFrom(ctx); }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SintesisParserVisitor ) return ((SintesisParserVisitor<? extends T>)visitor).visitExpInstanceOf(this);
			else return visitor.visitChildren(this);
		}
	}
	public static class ExpFunctionCallContext extends ExpressionContext {
		public Token id;
		public ArgumentsContext args;
		public TerminalNode Identifier() { return getToken(SintesisParser.Identifier, 0); }
		public ArgumentsContext arguments() {
			return getRuleContext(ArgumentsContext.class,0);
		}
		public ExpFunctionCallContext(ExpressionContext ctx) { copyFrom(ctx); }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SintesisParserVisitor ) return ((SintesisParserVisitor<? extends T>)visitor).visitExpFunctionCall(this);
			else return visitor.visitChildren(this);
		}
	}
	public static class ExpAssignmentOperatorContext extends ExpressionContext {
		public AssignableContext dest;
		public AssignmentOperatorContext op;
		public ExpressionContext exp;
		public AssignableContext assignable() {
			return getRuleContext(AssignableContext.class,0);
		}
		public AssignmentOperatorContext assignmentOperator() {
			return getRuleContext(AssignmentOperatorContext.class,0);
		}
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public ExpAssignmentOperatorContext(ExpressionContext ctx) { copyFrom(ctx); }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SintesisParserVisitor ) return ((SintesisParserVisitor<? extends T>)visitor).visitExpAssignmentOperator(this);
			else return visitor.visitChildren(this);
		}
	}
	public static class ExpSuperExpressionContext extends ExpressionContext {
		public ArgumentsContext args;
		public TerminalNode Super() { return getToken(SintesisParser.Super, 0); }
		public ArgumentsContext arguments() {
			return getRuleContext(ArgumentsContext.class,0);
		}
		public ExpSuperExpressionContext(ExpressionContext ctx) { copyFrom(ctx); }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SintesisParserVisitor ) return ((SintesisParserVisitor<? extends T>)visitor).visitExpSuperExpression(this);
			else return visitor.visitChildren(this);
		}
	}
	public static class ExpOpContext extends ExpressionContext {
		public ExpressionContext e1;
		public Token op;
		public ExpressionContext e2;
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public TerminalNode Plus() { return getToken(SintesisParser.Plus, 0); }
		public TerminalNode Minus() { return getToken(SintesisParser.Minus, 0); }
		public TerminalNode Multiply() { return getToken(SintesisParser.Multiply, 0); }
		public TerminalNode Divide() { return getToken(SintesisParser.Divide, 0); }
		public TerminalNode Power() { return getToken(SintesisParser.Power, 0); }
		public TerminalNode Modulus() { return getToken(SintesisParser.Modulus, 0); }
		public TerminalNode LessThan() { return getToken(SintesisParser.LessThan, 0); }
		public TerminalNode MoreThan() { return getToken(SintesisParser.MoreThan, 0); }
		public TerminalNode LessThanEquals() { return getToken(SintesisParser.LessThanEquals, 0); }
		public TerminalNode GreaterThanEquals() { return getToken(SintesisParser.GreaterThanEquals, 0); }
		public TerminalNode BitAnd() { return getToken(SintesisParser.BitAnd, 0); }
		public TerminalNode BitOr() { return getToken(SintesisParser.BitOr, 0); }
		public TerminalNode BitXOr() { return getToken(SintesisParser.BitXOr, 0); }
		public TerminalNode IdentityEquals() { return getToken(SintesisParser.IdentityEquals, 0); }
		public TerminalNode IdentityNotEquals() { return getToken(SintesisParser.IdentityNotEquals, 0); }
		public TerminalNode Equals_() { return getToken(SintesisParser.Equals_, 0); }
		public TerminalNode NotEquals() { return getToken(SintesisParser.NotEquals, 0); }
		public TerminalNode And() { return getToken(SintesisParser.And, 0); }
		public TerminalNode Or() { return getToken(SintesisParser.Or, 0); }
		public ExpOpContext(ExpressionContext ctx) { copyFrom(ctx); }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SintesisParserVisitor ) return ((SintesisParserVisitor<? extends T>)visitor).visitExpOp(this);
			else return visitor.visitChildren(this);
		}
	}
	public static class ExpAttributeContext extends ExpressionContext {
		public Token id;
		public TerminalNode Attributes() { return getToken(SintesisParser.Attributes, 0); }
		public TerminalNode Dot() { return getToken(SintesisParser.Dot, 0); }
		public TerminalNode Identifier() { return getToken(SintesisParser.Identifier, 0); }
		public ExpAttributeContext(ExpressionContext ctx) { copyFrom(ctx); }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SintesisParserVisitor ) return ((SintesisParserVisitor<? extends T>)visitor).visitExpAttribute(this);
			else return visitor.visitChildren(this);
		}
	}
	public static class ExpMemberMethodContext extends ExpressionContext {
		public Token id;
		public Token method;
		public ArgumentsContext args;
		public TerminalNode Dot() { return getToken(SintesisParser.Dot, 0); }
		public List<TerminalNode> Identifier() { return getTokens(SintesisParser.Identifier); }
		public TerminalNode Identifier(int i) {
			return getToken(SintesisParser.Identifier, i);
		}
		public ArgumentsContext arguments() {
			return getRuleContext(ArgumentsContext.class,0);
		}
		public ExpMemberMethodContext(ExpressionContext ctx) { copyFrom(ctx); }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SintesisParserVisitor ) return ((SintesisParserVisitor<? extends T>)visitor).visitExpMemberMethod(this);
			else return visitor.visitChildren(this);
		}
	}
	public static class ExpPreDecreaseContext extends ExpressionContext {
		public ExpressionContext exp;
		public TerminalNode MinusMinus() { return getToken(SintesisParser.MinusMinus, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public ExpPreDecreaseContext(ExpressionContext ctx) { copyFrom(ctx); }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SintesisParserVisitor ) return ((SintesisParserVisitor<? extends T>)visitor).visitExpPreDecrease(this);
			else return visitor.visitChildren(this);
		}
	}
	public static class ExpNotContext extends ExpressionContext {
		public ExpressionContext exp;
		public TerminalNode Not() { return getToken(SintesisParser.Not, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public ExpNotContext(ExpressionContext ctx) { copyFrom(ctx); }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SintesisParserVisitor ) return ((SintesisParserVisitor<? extends T>)visitor).visitExpNot(this);
			else return visitor.visitChildren(this);
		}
	}
	public static class ExpBitNotContext extends ExpressionContext {
		public ExpressionContext exp;
		public TerminalNode BitNot() { return getToken(SintesisParser.BitNot, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public ExpBitNotContext(ExpressionContext ctx) { copyFrom(ctx); }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SintesisParserVisitor ) return ((SintesisParserVisitor<? extends T>)visitor).visitExpBitNot(this);
			else return visitor.visitChildren(this);
		}
	}
	public static class ExpMethodCallContext extends ExpressionContext {
		public Token id;
		public ArgumentsContext args;
		public TerminalNode Methods() { return getToken(SintesisParser.Methods, 0); }
		public TerminalNode Dot() { return getToken(SintesisParser.Dot, 0); }
		public TerminalNode Identifier() { return getToken(SintesisParser.Identifier, 0); }
		public ArgumentsContext arguments() {
			return getRuleContext(ArgumentsContext.class,0);
		}
		public ExpMethodCallContext(ExpressionContext ctx) { copyFrom(ctx); }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SintesisParserVisitor ) return ((SintesisParserVisitor<? extends T>)visitor).visitExpMethodCall(this);
			else return visitor.visitChildren(this);
		}
	}
	public static class ExpDictionaryDeleteContext extends ExpressionContext {
		public Token id;
		public Token key;
		public TerminalNode Dot() { return getToken(SintesisParser.Dot, 0); }
		public TerminalNode Delete() { return getToken(SintesisParser.Delete, 0); }
		public TerminalNode OpenParen() { return getToken(SintesisParser.OpenParen, 0); }
		public TerminalNode CloseParen() { return getToken(SintesisParser.CloseParen, 0); }
		public TerminalNode Identifier() { return getToken(SintesisParser.Identifier, 0); }
		public TerminalNode StringLiteral() { return getToken(SintesisParser.StringLiteral, 0); }
		public ExpDictionaryDeleteContext(ExpressionContext ctx) { copyFrom(ctx); }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SintesisParserVisitor ) return ((SintesisParserVisitor<? extends T>)visitor).visitExpDictionaryDelete(this);
			else return visitor.visitChildren(this);
		}
	}
	public static class ExpCommentContext extends ExpressionContext {
		public TerminalNode SingleLineComment() { return getToken(SintesisParser.SingleLineComment, 0); }
		public ExpCommentContext(ExpressionContext ctx) { copyFrom(ctx); }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SintesisParserVisitor ) return ((SintesisParserVisitor<? extends T>)visitor).visitExpComment(this);
			else return visitor.visitChildren(this);
		}
	}
	public static class ExpUnaryMinusContext extends ExpressionContext {
		public ExpressionContext exp;
		public TerminalNode Minus() { return getToken(SintesisParser.Minus, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public ExpUnaryMinusContext(ExpressionContext ctx) { copyFrom(ctx); }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SintesisParserVisitor ) return ((SintesisParserVisitor<? extends T>)visitor).visitExpUnaryMinus(this);
			else return visitor.visitChildren(this);
		}
	}
	public static class ExpParenthesisContext extends ExpressionContext {
		public ExpressionContext exp;
		public TerminalNode OpenParen() { return getToken(SintesisParser.OpenParen, 0); }
		public TerminalNode CloseParen() { return getToken(SintesisParser.CloseParen, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public ExpParenthesisContext(ExpressionContext ctx) { copyFrom(ctx); }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SintesisParserVisitor ) return ((SintesisParserVisitor<? extends T>)visitor).visitExpParenthesis(this);
			else return visitor.visitChildren(this);
		}
	}
	public static class ExpDictionaryGetContext extends ExpressionContext {
		public Token id;
		public ExpressionContext exp;
		public TerminalNode Dot() { return getToken(SintesisParser.Dot, 0); }
		public TerminalNode Get() { return getToken(SintesisParser.Get, 0); }
		public TerminalNode OpenParen() { return getToken(SintesisParser.OpenParen, 0); }
		public TerminalNode CloseParen() { return getToken(SintesisParser.CloseParen, 0); }
		public TerminalNode Identifier() { return getToken(SintesisParser.Identifier, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public ExpDictionaryGetContext(ExpressionContext ctx) { copyFrom(ctx); }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SintesisParserVisitor ) return ((SintesisParserVisitor<? extends T>)visitor).visitExpDictionaryGet(this);
			else return visitor.visitChildren(this);
		}
	}
	public static class ExpUnaryPlusContext extends ExpressionContext {
		public ExpressionContext exp;
		public TerminalNode Plus() { return getToken(SintesisParser.Plus, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public ExpUnaryPlusContext(ExpressionContext ctx) { copyFrom(ctx); }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SintesisParserVisitor ) return ((SintesisParserVisitor<? extends T>)visitor).visitExpUnaryPlus(this);
			else return visitor.visitChildren(this);
		}
	}
	public static class ExpMemberAttributeContext extends ExpressionContext {
		public Token id;
		public Token attr;
		public TerminalNode Dot() { return getToken(SintesisParser.Dot, 0); }
		public List<TerminalNode> Identifier() { return getTokens(SintesisParser.Identifier); }
		public TerminalNode Identifier(int i) {
			return getToken(SintesisParser.Identifier, i);
		}
		public ExpMemberAttributeContext(ExpressionContext ctx) { copyFrom(ctx); }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SintesisParserVisitor ) return ((SintesisParserVisitor<? extends T>)visitor).visitExpMemberAttribute(this);
			else return visitor.visitChildren(this);
		}
	}
	public static class ExpVectorDeclarationContext extends ExpressionContext {
		public VectorIndexesContext idx;
		public VectorIndexesContext vectorIndexes() {
			return getRuleContext(VectorIndexesContext.class,0);
		}
		public TerminalNode Vector() { return getToken(SintesisParser.Vector, 0); }
		public ExpVectorDeclarationContext(ExpressionContext ctx) { copyFrom(ctx); }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SintesisParserVisitor ) return ((SintesisParserVisitor<? extends T>)visitor).visitExpVectorDeclaration(this);
			else return visitor.visitChildren(this);
		}
	}
	public static class ExpDictionarySetContext extends ExpressionContext {
		public Token id;
		public Token key;
		public TerminalNode Dot() { return getToken(SintesisParser.Dot, 0); }
		public TerminalNode Set() { return getToken(SintesisParser.Set, 0); }
		public TerminalNode OpenParen() { return getToken(SintesisParser.OpenParen, 0); }
		public TerminalNode Comma() { return getToken(SintesisParser.Comma, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TerminalNode CloseParen() { return getToken(SintesisParser.CloseParen, 0); }
		public TerminalNode Identifier() { return getToken(SintesisParser.Identifier, 0); }
		public TerminalNode StringLiteral() { return getToken(SintesisParser.StringLiteral, 0); }
		public ExpDictionarySetContext(ExpressionContext ctx) { copyFrom(ctx); }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SintesisParserVisitor ) return ((SintesisParserVisitor<? extends T>)visitor).visitExpDictionarySet(this);
			else return visitor.visitChildren(this);
		}
	}
	public static class ExpLiteralContext extends ExpressionContext {
		public LiteralContext literal() {
			return getRuleContext(LiteralContext.class,0);
		}
		public ExpLiteralContext(ExpressionContext ctx) { copyFrom(ctx); }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SintesisParserVisitor ) return ((SintesisParserVisitor<? extends T>)visitor).visitExpLiteral(this);
			else return visitor.visitChildren(this);
		}
	}
	public static class ExpIdentifierContext extends ExpressionContext {
		public Token id;
		public TerminalNode Identifier() { return getToken(SintesisParser.Identifier, 0); }
		public ExpIdentifierContext(ExpressionContext ctx) { copyFrom(ctx); }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SintesisParserVisitor ) return ((SintesisParserVisitor<? extends T>)visitor).visitExpIdentifier(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ExpressionContext expression() throws RecognitionException {
		return expression(0);
	}

	private ExpressionContext expression(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		ExpressionContext _localctx = new ExpressionContext(_ctx, _parentState);
		ExpressionContext _prevctx = _localctx;
		int _startState = 12;
		enterRecursionRule(_localctx, 12, RULE_expression, _p);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(182);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,4,_ctx) ) {
			case 1:
				{
				_localctx = new ExpVectorContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;

				setState(106);
				((ExpVectorContext)_localctx).id = match(Identifier);
				setState(107);
				((ExpVectorContext)_localctx).idx = vectorIndexes();
				}
				break;
			case 2:
				{
				_localctx = new ExpFunctionCallContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(108);
				((ExpFunctionCallContext)_localctx).id = match(Identifier);
				setState(109);
				((ExpFunctionCallContext)_localctx).args = arguments();
				}
				break;
			case 3:
				{
				_localctx = new ExpDictionaryGetContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(110);
				((ExpDictionaryGetContext)_localctx).id = match(Identifier);
				setState(111);
				match(Dot);
				setState(112);
				match(Get);
				setState(113);
				match(OpenParen);
				setState(114);
				((ExpDictionaryGetContext)_localctx).exp = expression(0);
				setState(115);
				match(CloseParen);
				}
				break;
			case 4:
				{
				_localctx = new ExpDictionarySetContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(117);
				((ExpDictionarySetContext)_localctx).id = match(Identifier);
				setState(118);
				match(Dot);
				setState(119);
				match(Set);
				setState(120);
				match(OpenParen);
				setState(121);
				((ExpDictionarySetContext)_localctx).key = match(StringLiteral);
				setState(122);
				match(Comma);
				setState(123);
				expression(0);
				setState(124);
				match(CloseParen);
				}
				break;
			case 5:
				{
				_localctx = new ExpDictionaryDeleteContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(126);
				((ExpDictionaryDeleteContext)_localctx).id = match(Identifier);
				setState(127);
				match(Dot);
				setState(128);
				match(Delete);
				setState(129);
				match(OpenParen);
				setState(130);
				((ExpDictionaryDeleteContext)_localctx).key = match(StringLiteral);
				setState(131);
				match(CloseParen);
				}
				break;
			case 6:
				{
				_localctx = new ExpMemberMethodContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(132);
				((ExpMemberMethodContext)_localctx).id = match(Identifier);
				setState(133);
				match(Dot);
				setState(134);
				((ExpMemberMethodContext)_localctx).method = match(Identifier);
				setState(135);
				((ExpMemberMethodContext)_localctx).args = arguments();
				}
				break;
			case 7:
				{
				_localctx = new ExpMemberAttributeContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(136);
				((ExpMemberAttributeContext)_localctx).id = match(Identifier);
				setState(137);
				match(Dot);
				setState(138);
				((ExpMemberAttributeContext)_localctx).attr = match(Identifier);
				}
				break;
			case 8:
				{
				_localctx = new ExpInstanceOfContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(139);
				((ExpInstanceOfContext)_localctx).id = match(Identifier);
				setState(140);
				match(InstanceOf);
				setState(141);
				((ExpInstanceOfContext)_localctx).is = match(Identifier);
				}
				break;
			case 9:
				{
				_localctx = new ExpAttributeContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(142);
				match(Attributes);
				setState(143);
				match(Dot);
				setState(144);
				((ExpAttributeContext)_localctx).id = match(Identifier);
				}
				break;
			case 10:
				{
				_localctx = new ExpMethodCallContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(145);
				match(Methods);
				setState(146);
				match(Dot);
				setState(147);
				((ExpMethodCallContext)_localctx).id = match(Identifier);
				setState(148);
				((ExpMethodCallContext)_localctx).args = arguments();
				}
				break;
			case 11:
				{
				_localctx = new ExpSuperExpressionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(149);
				match(Super);
				setState(150);
				((ExpSuperExpressionContext)_localctx).args = arguments();
				}
				break;
			case 12:
				{
				_localctx = new ExpPreIncrementContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(151);
				match(PlusPlus);
				setState(152);
				((ExpPreIncrementContext)_localctx).exp = expression(34);
				}
				break;
			case 13:
				{
				_localctx = new ExpPreDecreaseContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(153);
				match(MinusMinus);
				setState(154);
				((ExpPreDecreaseContext)_localctx).exp = expression(33);
				}
				break;
			case 14:
				{
				_localctx = new ExpUnaryPlusContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(155);
				match(Plus);
				setState(156);
				((ExpUnaryPlusContext)_localctx).exp = expression(32);
				}
				break;
			case 15:
				{
				_localctx = new ExpUnaryMinusContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(157);
				match(Minus);
				setState(158);
				((ExpUnaryMinusContext)_localctx).exp = expression(31);
				}
				break;
			case 16:
				{
				_localctx = new ExpBitNotContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(159);
				match(BitNot);
				setState(160);
				((ExpBitNotContext)_localctx).exp = expression(30);
				}
				break;
			case 17:
				{
				_localctx = new ExpNotContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(161);
				match(Not);
				setState(162);
				((ExpNotContext)_localctx).exp = expression(29);
				}
				break;
			case 18:
				{
				_localctx = new ExpVectorDeclarationContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(164);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==Vector) {
					{
					setState(163);
					match(Vector);
					}
				}

				setState(166);
				((ExpVectorDeclarationContext)_localctx).idx = vectorIndexes();
				}
				break;
			case 19:
				{
				_localctx = new ExpAssignmentContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(167);
				((ExpAssignmentContext)_localctx).dest = assignable();
				setState(168);
				match(Assign);
				setState(169);
				((ExpAssignmentContext)_localctx).exp = expression(6);
				}
				break;
			case 20:
				{
				_localctx = new ExpAssignmentOperatorContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(171);
				((ExpAssignmentOperatorContext)_localctx).dest = assignable();
				setState(172);
				((ExpAssignmentOperatorContext)_localctx).op = assignmentOperator();
				setState(173);
				((ExpAssignmentOperatorContext)_localctx).exp = expression(5);
				}
				break;
			case 21:
				{
				_localctx = new ExpIdentifierContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(175);
				((ExpIdentifierContext)_localctx).id = match(Identifier);
				}
				break;
			case 22:
				{
				_localctx = new ExpLiteralContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(176);
				literal();
				}
				break;
			case 23:
				{
				_localctx = new ExpParenthesisContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(177);
				match(OpenParen);
				setState(178);
				((ExpParenthesisContext)_localctx).exp = expression(0);
				setState(179);
				match(CloseParen);
				}
				break;
			case 24:
				{
				_localctx = new ExpCommentContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(181);
				match(SingleLineComment);
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(247);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,6,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(245);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,5,_ctx) ) {
					case 1:
						{
						_localctx = new ExpOpContext(new ExpressionContext(_parentctx, _parentState));
						((ExpOpContext)_localctx).e1 = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(184);
						if (!(precpred(_ctx, 28))) throw new FailedPredicateException(this, "precpred(_ctx, 28)");
						setState(185);
						((ExpOpContext)_localctx).op = match(Plus);
						setState(186);
						((ExpOpContext)_localctx).e2 = expression(29);
						}
						break;
					case 2:
						{
						_localctx = new ExpOpContext(new ExpressionContext(_parentctx, _parentState));
						((ExpOpContext)_localctx).e1 = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(187);
						if (!(precpred(_ctx, 27))) throw new FailedPredicateException(this, "precpred(_ctx, 27)");
						setState(188);
						((ExpOpContext)_localctx).op = match(Minus);
						setState(189);
						((ExpOpContext)_localctx).e2 = expression(28);
						}
						break;
					case 3:
						{
						_localctx = new ExpOpContext(new ExpressionContext(_parentctx, _parentState));
						((ExpOpContext)_localctx).e1 = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(190);
						if (!(precpred(_ctx, 26))) throw new FailedPredicateException(this, "precpred(_ctx, 26)");
						setState(191);
						((ExpOpContext)_localctx).op = match(Multiply);
						setState(192);
						((ExpOpContext)_localctx).e2 = expression(27);
						}
						break;
					case 4:
						{
						_localctx = new ExpOpContext(new ExpressionContext(_parentctx, _parentState));
						((ExpOpContext)_localctx).e1 = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(193);
						if (!(precpred(_ctx, 25))) throw new FailedPredicateException(this, "precpred(_ctx, 25)");
						setState(194);
						((ExpOpContext)_localctx).op = match(Divide);
						setState(195);
						((ExpOpContext)_localctx).e2 = expression(26);
						}
						break;
					case 5:
						{
						_localctx = new ExpOpContext(new ExpressionContext(_parentctx, _parentState));
						((ExpOpContext)_localctx).e1 = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(196);
						if (!(precpred(_ctx, 24))) throw new FailedPredicateException(this, "precpred(_ctx, 24)");
						setState(197);
						((ExpOpContext)_localctx).op = match(Power);
						setState(198);
						((ExpOpContext)_localctx).e2 = expression(24);
						}
						break;
					case 6:
						{
						_localctx = new ExpOpContext(new ExpressionContext(_parentctx, _parentState));
						((ExpOpContext)_localctx).e1 = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(199);
						if (!(precpred(_ctx, 23))) throw new FailedPredicateException(this, "precpred(_ctx, 23)");
						setState(200);
						((ExpOpContext)_localctx).op = match(Modulus);
						setState(201);
						((ExpOpContext)_localctx).e2 = expression(24);
						}
						break;
					case 7:
						{
						_localctx = new ExpOpContext(new ExpressionContext(_parentctx, _parentState));
						((ExpOpContext)_localctx).e1 = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(202);
						if (!(precpred(_ctx, 22))) throw new FailedPredicateException(this, "precpred(_ctx, 22)");
						setState(203);
						((ExpOpContext)_localctx).op = match(LessThan);
						setState(204);
						((ExpOpContext)_localctx).e2 = expression(23);
						}
						break;
					case 8:
						{
						_localctx = new ExpOpContext(new ExpressionContext(_parentctx, _parentState));
						((ExpOpContext)_localctx).e1 = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(205);
						if (!(precpred(_ctx, 21))) throw new FailedPredicateException(this, "precpred(_ctx, 21)");
						setState(206);
						((ExpOpContext)_localctx).op = match(MoreThan);
						setState(207);
						((ExpOpContext)_localctx).e2 = expression(22);
						}
						break;
					case 9:
						{
						_localctx = new ExpOpContext(new ExpressionContext(_parentctx, _parentState));
						((ExpOpContext)_localctx).e1 = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(208);
						if (!(precpred(_ctx, 20))) throw new FailedPredicateException(this, "precpred(_ctx, 20)");
						setState(209);
						((ExpOpContext)_localctx).op = match(LessThanEquals);
						setState(210);
						((ExpOpContext)_localctx).e2 = expression(21);
						}
						break;
					case 10:
						{
						_localctx = new ExpOpContext(new ExpressionContext(_parentctx, _parentState));
						((ExpOpContext)_localctx).e1 = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(211);
						if (!(precpred(_ctx, 19))) throw new FailedPredicateException(this, "precpred(_ctx, 19)");
						setState(212);
						((ExpOpContext)_localctx).op = match(GreaterThanEquals);
						setState(213);
						((ExpOpContext)_localctx).e2 = expression(20);
						}
						break;
					case 11:
						{
						_localctx = new ExpOpContext(new ExpressionContext(_parentctx, _parentState));
						((ExpOpContext)_localctx).e1 = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(214);
						if (!(precpred(_ctx, 18))) throw new FailedPredicateException(this, "precpred(_ctx, 18)");
						setState(215);
						((ExpOpContext)_localctx).op = match(BitAnd);
						setState(216);
						((ExpOpContext)_localctx).e2 = expression(19);
						}
						break;
					case 12:
						{
						_localctx = new ExpOpContext(new ExpressionContext(_parentctx, _parentState));
						((ExpOpContext)_localctx).e1 = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(217);
						if (!(precpred(_ctx, 17))) throw new FailedPredicateException(this, "precpred(_ctx, 17)");
						setState(218);
						((ExpOpContext)_localctx).op = match(BitOr);
						setState(219);
						((ExpOpContext)_localctx).e2 = expression(18);
						}
						break;
					case 13:
						{
						_localctx = new ExpOpContext(new ExpressionContext(_parentctx, _parentState));
						((ExpOpContext)_localctx).e1 = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(220);
						if (!(precpred(_ctx, 16))) throw new FailedPredicateException(this, "precpred(_ctx, 16)");
						setState(221);
						((ExpOpContext)_localctx).op = match(BitXOr);
						setState(222);
						((ExpOpContext)_localctx).e2 = expression(17);
						}
						break;
					case 14:
						{
						_localctx = new ExpOpContext(new ExpressionContext(_parentctx, _parentState));
						((ExpOpContext)_localctx).e1 = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(223);
						if (!(precpred(_ctx, 15))) throw new FailedPredicateException(this, "precpred(_ctx, 15)");
						setState(224);
						((ExpOpContext)_localctx).op = match(IdentityEquals);
						setState(225);
						((ExpOpContext)_localctx).e2 = expression(16);
						}
						break;
					case 15:
						{
						_localctx = new ExpOpContext(new ExpressionContext(_parentctx, _parentState));
						((ExpOpContext)_localctx).e1 = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(226);
						if (!(precpred(_ctx, 14))) throw new FailedPredicateException(this, "precpred(_ctx, 14)");
						setState(227);
						((ExpOpContext)_localctx).op = match(IdentityNotEquals);
						setState(228);
						((ExpOpContext)_localctx).e2 = expression(15);
						}
						break;
					case 16:
						{
						_localctx = new ExpOpContext(new ExpressionContext(_parentctx, _parentState));
						((ExpOpContext)_localctx).e1 = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(229);
						if (!(precpred(_ctx, 13))) throw new FailedPredicateException(this, "precpred(_ctx, 13)");
						setState(230);
						((ExpOpContext)_localctx).op = match(Equals_);
						setState(231);
						((ExpOpContext)_localctx).e2 = expression(14);
						}
						break;
					case 17:
						{
						_localctx = new ExpOpContext(new ExpressionContext(_parentctx, _parentState));
						((ExpOpContext)_localctx).e1 = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(232);
						if (!(precpred(_ctx, 12))) throw new FailedPredicateException(this, "precpred(_ctx, 12)");
						setState(233);
						((ExpOpContext)_localctx).op = match(NotEquals);
						setState(234);
						((ExpOpContext)_localctx).e2 = expression(13);
						}
						break;
					case 18:
						{
						_localctx = new ExpOpContext(new ExpressionContext(_parentctx, _parentState));
						((ExpOpContext)_localctx).e1 = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(235);
						if (!(precpred(_ctx, 11))) throw new FailedPredicateException(this, "precpred(_ctx, 11)");
						setState(236);
						((ExpOpContext)_localctx).op = match(And);
						setState(237);
						((ExpOpContext)_localctx).e2 = expression(12);
						}
						break;
					case 19:
						{
						_localctx = new ExpOpContext(new ExpressionContext(_parentctx, _parentState));
						((ExpOpContext)_localctx).e1 = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(238);
						if (!(precpred(_ctx, 10))) throw new FailedPredicateException(this, "precpred(_ctx, 10)");
						setState(239);
						((ExpOpContext)_localctx).op = match(Or);
						setState(240);
						((ExpOpContext)_localctx).e2 = expression(11);
						}
						break;
					case 20:
						{
						_localctx = new ExpPostIncrementContext(new ExpressionContext(_parentctx, _parentState));
						((ExpPostIncrementContext)_localctx).exp = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(241);
						if (!(precpred(_ctx, 9))) throw new FailedPredicateException(this, "precpred(_ctx, 9)");
						setState(242);
						match(PlusPlus);
						}
						break;
					case 21:
						{
						_localctx = new ExpPostDecreaseContext(new ExpressionContext(_parentctx, _parentState));
						((ExpPostDecreaseContext)_localctx).exp = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(243);
						if (!(precpred(_ctx, 8))) throw new FailedPredicateException(this, "precpred(_ctx, 8)");
						setState(244);
						match(MinusMinus);
						}
						break;
					}
					} 
				}
				setState(249);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,6,_ctx);
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

	public static class ExpressionSequenceContext extends ParserRuleContext {
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public List<TerminalNode> Comma() { return getTokens(SintesisParser.Comma); }
		public TerminalNode Comma(int i) {
			return getToken(SintesisParser.Comma, i);
		}
		public ExpressionSequenceContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expressionSequence; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SintesisParserVisitor ) return ((SintesisParserVisitor<? extends T>)visitor).visitExpressionSequence(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ExpressionSequenceContext expressionSequence() throws RecognitionException {
		ExpressionSequenceContext _localctx = new ExpressionSequenceContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_expressionSequence);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(250);
			expression(0);
			setState(255);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==Comma) {
				{
				{
				setState(251);
				match(Comma);
				setState(252);
				expression(0);
				}
				}
				setState(257);
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

	public static class IfStatementContext extends ParserRuleContext {
		public ExpressionContext exp;
		public StatementContext stmt;
		public ElseIfsContext elseifs;
		public ElseStatementContext else_;
		public TerminalNode If() { return getToken(SintesisParser.If, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public StatementContext statement() {
			return getRuleContext(StatementContext.class,0);
		}
		public TerminalNode Then() { return getToken(SintesisParser.Then, 0); }
		public ElseIfsContext elseIfs() {
			return getRuleContext(ElseIfsContext.class,0);
		}
		public ElseStatementContext elseStatement() {
			return getRuleContext(ElseStatementContext.class,0);
		}
		public IfStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ifStatement; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SintesisParserVisitor ) return ((SintesisParserVisitor<? extends T>)visitor).visitIfStatement(this);
			else return visitor.visitChildren(this);
		}
	}

	public final IfStatementContext ifStatement() throws RecognitionException {
		IfStatementContext _localctx = new IfStatementContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_ifStatement);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(258);
			match(If);
			setState(259);
			((IfStatementContext)_localctx).exp = expression(0);
			setState(261);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Then) {
				{
				setState(260);
				match(Then);
				}
			}

			setState(263);
			((IfStatementContext)_localctx).stmt = statement();
			setState(265);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,9,_ctx) ) {
			case 1:
				{
				setState(264);
				((IfStatementContext)_localctx).elseifs = elseIfs();
				}
				break;
			}
			setState(268);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,10,_ctx) ) {
			case 1:
				{
				setState(267);
				((IfStatementContext)_localctx).else_ = elseStatement();
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
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SintesisParserVisitor ) return ((SintesisParserVisitor<? extends T>)visitor).visitElseIfs(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ElseIfsContext elseIfs() throws RecognitionException {
		ElseIfsContext _localctx = new ElseIfsContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_elseIfs);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(271); 
			_errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					setState(270);
					elseIf();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(273); 
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,11,_ctx);
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
		public ExpressionContext exp;
		public StatementContext stmt;
		public TerminalNode ElseIf() { return getToken(SintesisParser.ElseIf, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public StatementContext statement() {
			return getRuleContext(StatementContext.class,0);
		}
		public TerminalNode Then() { return getToken(SintesisParser.Then, 0); }
		public ElseIfContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_elseIf; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SintesisParserVisitor ) return ((SintesisParserVisitor<? extends T>)visitor).visitElseIf(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ElseIfContext elseIf() throws RecognitionException {
		ElseIfContext _localctx = new ElseIfContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_elseIf);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(275);
			match(ElseIf);
			setState(276);
			((ElseIfContext)_localctx).exp = expression(0);
			setState(278);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Then) {
				{
				setState(277);
				match(Then);
				}
			}

			setState(280);
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

	public static class ElseStatementContext extends ParserRuleContext {
		public TerminalNode Else() { return getToken(SintesisParser.Else, 0); }
		public StatementContext statement() {
			return getRuleContext(StatementContext.class,0);
		}
		public ElseStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_elseStatement; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SintesisParserVisitor ) return ((SintesisParserVisitor<? extends T>)visitor).visitElseStatement(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ElseStatementContext elseStatement() throws RecognitionException {
		ElseStatementContext _localctx = new ElseStatementContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_elseStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(282);
			match(Else);
			setState(283);
			statement();
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
		public ExpressionContext exp;
		public TerminalNode Repeat() { return getToken(SintesisParser.Repeat, 0); }
		public TerminalNode While() { return getToken(SintesisParser.While, 0); }
		public StatementContext statement() {
			return getRuleContext(StatementContext.class,0);
		}
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public RepeatWhileStatementContext(IterationStatementContext ctx) { copyFrom(ctx); }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SintesisParserVisitor ) return ((SintesisParserVisitor<? extends T>)visitor).visitRepeatWhileStatement(this);
			else return visitor.visitChildren(this);
		}
	}
	public static class RepeatStatementContext extends IterationStatementContext {
		public ExpressionContext exp;
		public StatementContext stmt;
		public TerminalNode Repeat() { return getToken(SintesisParser.Repeat, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public StatementContext statement() {
			return getRuleContext(StatementContext.class,0);
		}
		public RepeatStatementContext(IterationStatementContext ctx) { copyFrom(ctx); }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SintesisParserVisitor ) return ((SintesisParserVisitor<? extends T>)visitor).visitRepeatStatement(this);
			else return visitor.visitChildren(this);
		}
	}
	public static class WhileRepeatStatementContext extends IterationStatementContext {
		public ExpressionContext exp;
		public StatementContext stmt;
		public TerminalNode While() { return getToken(SintesisParser.While, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public StatementContext statement() {
			return getRuleContext(StatementContext.class,0);
		}
		public List<TerminalNode> Repeat() { return getTokens(SintesisParser.Repeat); }
		public TerminalNode Repeat(int i) {
			return getToken(SintesisParser.Repeat, i);
		}
		public WhileRepeatStatementContext(IterationStatementContext ctx) { copyFrom(ctx); }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SintesisParserVisitor ) return ((SintesisParserVisitor<? extends T>)visitor).visitWhileRepeatStatement(this);
			else return visitor.visitChildren(this);
		}
	}

	public final IterationStatementContext iterationStatement() throws RecognitionException {
		IterationStatementContext _localctx = new IterationStatementContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_iterationStatement);
		int _la;
		try {
			setState(304);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,15,_ctx) ) {
			case 1:
				_localctx = new RepeatStatementContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(285);
				match(Repeat);
				setState(286);
				((RepeatStatementContext)_localctx).exp = expression(0);
				setState(287);
				((RepeatStatementContext)_localctx).stmt = statement();
				}
				break;
			case 2:
				_localctx = new RepeatWhileStatementContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(289);
				match(Repeat);
				setState(290);
				((RepeatWhileStatementContext)_localctx).stmt = statement();
				setState(291);
				match(While);
				setState(292);
				((RepeatWhileStatementContext)_localctx).exp = expression(0);
				}
				break;
			case 3:
				_localctx = new WhileRepeatStatementContext(_localctx);
				enterOuterAlt(_localctx, 3);
				{
				setState(295);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==Repeat) {
					{
					setState(294);
					match(Repeat);
					}
				}

				setState(297);
				match(While);
				setState(298);
				((WhileRepeatStatementContext)_localctx).exp = expression(0);
				setState(300);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,14,_ctx) ) {
				case 1:
					{
					setState(299);
					match(Repeat);
					}
					break;
				}
				setState(302);
				((WhileRepeatStatementContext)_localctx).stmt = statement();
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

	public static class ReturnStatementContext extends ParserRuleContext {
		public ExpressionContext exp;
		public TerminalNode Return() { return getToken(SintesisParser.Return, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public ReturnStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_returnStatement; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SintesisParserVisitor ) return ((SintesisParserVisitor<? extends T>)visitor).visitReturnStatement(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ReturnStatementContext returnStatement() throws RecognitionException {
		ReturnStatementContext _localctx = new ReturnStatementContext(_ctx, getState());
		enterRule(_localctx, 26, RULE_returnStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(306);
			match(Return);
			setState(307);
			((ReturnStatementContext)_localctx).exp = expression(0);
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

	public static class VarDeclarationContext extends ParserRuleContext {
		public VarDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_varDeclaration; }
	 
		public VarDeclarationContext() { }
		public void copyFrom(VarDeclarationContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class VectorDeclarationContext extends VarDeclarationContext {
		public Token id;
		public VectorIndexesContext idx;
		public TerminalNode Var() { return getToken(SintesisParser.Var, 0); }
		public TerminalNode Assign() { return getToken(SintesisParser.Assign, 0); }
		public TerminalNode Identifier() { return getToken(SintesisParser.Identifier, 0); }
		public VectorIndexesContext vectorIndexes() {
			return getRuleContext(VectorIndexesContext.class,0);
		}
		public TerminalNode Vector() { return getToken(SintesisParser.Vector, 0); }
		public VectorDeclarationContext(VarDeclarationContext ctx) { copyFrom(ctx); }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SintesisParserVisitor ) return ((SintesisParserVisitor<? extends T>)visitor).visitVectorDeclaration(this);
			else return visitor.visitChildren(this);
		}
	}
	public static class VarSingleDeclarationContext extends VarDeclarationContext {
		public Token id;
		public ExpressionContext exp;
		public TerminalNode Var() { return getToken(SintesisParser.Var, 0); }
		public TerminalNode Assign() { return getToken(SintesisParser.Assign, 0); }
		public TerminalNode Identifier() { return getToken(SintesisParser.Identifier, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public VarSingleDeclarationContext(VarDeclarationContext ctx) { copyFrom(ctx); }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SintesisParserVisitor ) return ((SintesisParserVisitor<? extends T>)visitor).visitVarSingleDeclaration(this);
			else return visitor.visitChildren(this);
		}
	}

	public final VarDeclarationContext varDeclaration() throws RecognitionException {
		VarDeclarationContext _localctx = new VarDeclarationContext(_ctx, getState());
		enterRule(_localctx, 28, RULE_varDeclaration);
		int _la;
		try {
			setState(320);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,17,_ctx) ) {
			case 1:
				_localctx = new VectorDeclarationContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(309);
				match(Var);
				setState(310);
				((VectorDeclarationContext)_localctx).id = match(Identifier);
				setState(311);
				match(Assign);
				setState(313);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==Vector) {
					{
					setState(312);
					match(Vector);
					}
				}

				setState(315);
				((VectorDeclarationContext)_localctx).idx = vectorIndexes();
				}
				break;
			case 2:
				_localctx = new VarSingleDeclarationContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(316);
				match(Var);
				setState(317);
				((VarSingleDeclarationContext)_localctx).id = match(Identifier);
				setState(318);
				match(Assign);
				setState(319);
				((VarSingleDeclarationContext)_localctx).exp = expression(0);
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

	public static class FunctionDeclarationContext extends ParserRuleContext {
		public Token id;
		public FormalParameterListContext pl;
		public FunctionBodyContext stmt;
		public TerminalNode Function_() { return getToken(SintesisParser.Function_, 0); }
		public TerminalNode OpenParen() { return getToken(SintesisParser.OpenParen, 0); }
		public TerminalNode CloseParen() { return getToken(SintesisParser.CloseParen, 0); }
		public TerminalNode Identifier() { return getToken(SintesisParser.Identifier, 0); }
		public FunctionBodyContext functionBody() {
			return getRuleContext(FunctionBodyContext.class,0);
		}
		public FormalParameterListContext formalParameterList() {
			return getRuleContext(FormalParameterListContext.class,0);
		}
		public FunctionDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_functionDeclaration; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SintesisParserVisitor ) return ((SintesisParserVisitor<? extends T>)visitor).visitFunctionDeclaration(this);
			else return visitor.visitChildren(this);
		}
	}

	public final FunctionDeclarationContext functionDeclaration() throws RecognitionException {
		FunctionDeclarationContext _localctx = new FunctionDeclarationContext(_ctx, getState());
		enterRule(_localctx, 30, RULE_functionDeclaration);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(322);
			match(Function_);
			setState(323);
			((FunctionDeclarationContext)_localctx).id = match(Identifier);
			setState(324);
			match(OpenParen);
			setState(326);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Identifier) {
				{
				setState(325);
				((FunctionDeclarationContext)_localctx).pl = formalParameterList();
				}
			}

			setState(328);
			match(CloseParen);
			setState(329);
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
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SintesisParserVisitor ) return ((SintesisParserVisitor<? extends T>)visitor).visitFormalParameterList(this);
			else return visitor.visitChildren(this);
		}
	}

	public final FormalParameterListContext formalParameterList() throws RecognitionException {
		FormalParameterListContext _localctx = new FormalParameterListContext(_ctx, getState());
		enterRule(_localctx, 32, RULE_formalParameterList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(331);
			formalParameterArg();
			setState(336);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==Comma) {
				{
				{
				setState(332);
				match(Comma);
				setState(333);
				formalParameterArg();
				}
				}
				setState(338);
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

	public static class ArgumentsContext extends ParserRuleContext {
		public TerminalNode OpenParen() { return getToken(SintesisParser.OpenParen, 0); }
		public TerminalNode CloseParen() { return getToken(SintesisParser.CloseParen, 0); }
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public List<TerminalNode> Comma() { return getTokens(SintesisParser.Comma); }
		public TerminalNode Comma(int i) {
			return getToken(SintesisParser.Comma, i);
		}
		public ArgumentsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_arguments; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SintesisParserVisitor ) return ((SintesisParserVisitor<? extends T>)visitor).visitArguments(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ArgumentsContext arguments() throws RecognitionException {
		ArgumentsContext _localctx = new ArgumentsContext(_ctx, getState());
		enterRule(_localctx, 34, RULE_arguments);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(339);
			match(OpenParen);
			setState(348);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << SingleLineComment) | (1L << OpenBracket) | (1L << OpenParen) | (1L << PlusPlus) | (1L << MinusMinus) | (1L << Plus) | (1L << Minus) | (1L << BitNot) | (1L << Not) | (1L << NullLiteral) | (1L << DecimalLiteral) | (1L << HexIntegerLiteral) | (1L << OctalIntegerLiteral) | (1L << OctalIntegerLiteral2) | (1L << BinaryIntegerLiteral))) != 0) || ((((_la - 67)) & ~0x3f) == 0 && ((1L << (_la - 67)) & ((1L << (BooleanLiteral - 67)) | (1L << (Vector - 67)) | (1L << (Attributes - 67)) | (1L << (Methods - 67)) | (1L << (Super - 67)) | (1L << (Identifier - 67)) | (1L << (StringLiteral - 67)))) != 0)) {
				{
				setState(340);
				expression(0);
				setState(345);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==Comma) {
					{
					{
					setState(341);
					match(Comma);
					setState(342);
					expression(0);
					}
					}
					setState(347);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
			}

			setState(350);
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

	public static class ClassDeclarationContext extends ParserRuleContext {
		public Token id;
		public Token ext;
		public IdentifiersContext atrs;
		public MethodsListContext methods;
		public TerminalNode Class_() { return getToken(SintesisParser.Class_, 0); }
		public TerminalNode OpenBrace() { return getToken(SintesisParser.OpenBrace, 0); }
		public TerminalNode CloseBrace() { return getToken(SintesisParser.CloseBrace, 0); }
		public List<TerminalNode> Identifier() { return getTokens(SintesisParser.Identifier); }
		public TerminalNode Identifier(int i) {
			return getToken(SintesisParser.Identifier, i);
		}
		public TerminalNode Extends() { return getToken(SintesisParser.Extends, 0); }
		public TerminalNode Attributes() { return getToken(SintesisParser.Attributes, 0); }
		public List<TerminalNode> Colon() { return getTokens(SintesisParser.Colon); }
		public TerminalNode Colon(int i) {
			return getToken(SintesisParser.Colon, i);
		}
		public TerminalNode Methods() { return getToken(SintesisParser.Methods, 0); }
		public IdentifiersContext identifiers() {
			return getRuleContext(IdentifiersContext.class,0);
		}
		public MethodsListContext methodsList() {
			return getRuleContext(MethodsListContext.class,0);
		}
		public ClassDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_classDeclaration; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SintesisParserVisitor ) return ((SintesisParserVisitor<? extends T>)visitor).visitClassDeclaration(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ClassDeclarationContext classDeclaration() throws RecognitionException {
		ClassDeclarationContext _localctx = new ClassDeclarationContext(_ctx, getState());
		enterRule(_localctx, 36, RULE_classDeclaration);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(352);
			match(Class_);
			setState(353);
			((ClassDeclarationContext)_localctx).id = match(Identifier);
			setState(356);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Extends) {
				{
				setState(354);
				match(Extends);
				setState(355);
				((ClassDeclarationContext)_localctx).ext = match(Identifier);
				}
			}

			setState(358);
			match(OpenBrace);
			setState(362);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Attributes) {
				{
				setState(359);
				match(Attributes);
				setState(360);
				match(Colon);
				setState(361);
				((ClassDeclarationContext)_localctx).atrs = identifiers();
				}
			}

			setState(367);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Methods) {
				{
				setState(364);
				match(Methods);
				setState(365);
				match(Colon);
				setState(366);
				((ClassDeclarationContext)_localctx).methods = methodsList();
				}
			}

			setState(369);
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

	public static class IdentifiersContext extends ParserRuleContext {
		public List<TerminalNode> Identifier() { return getTokens(SintesisParser.Identifier); }
		public TerminalNode Identifier(int i) {
			return getToken(SintesisParser.Identifier, i);
		}
		public List<TerminalNode> Comma() { return getTokens(SintesisParser.Comma); }
		public TerminalNode Comma(int i) {
			return getToken(SintesisParser.Comma, i);
		}
		public IdentifiersContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_identifiers; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SintesisParserVisitor ) return ((SintesisParserVisitor<? extends T>)visitor).visitIdentifiers(this);
			else return visitor.visitChildren(this);
		}
	}

	public final IdentifiersContext identifiers() throws RecognitionException {
		IdentifiersContext _localctx = new IdentifiersContext(_ctx, getState());
		enterRule(_localctx, 38, RULE_identifiers);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(375); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(371);
				match(Identifier);
				setState(373);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==Comma) {
					{
					setState(372);
					match(Comma);
					}
				}

				}
				}
				setState(377); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( _la==Identifier );
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
		public Token id;
		public FormalParameterListContext pl;
		public FunctionBodyContext stmt;
		public TerminalNode OpenParen() { return getToken(SintesisParser.OpenParen, 0); }
		public TerminalNode CloseParen() { return getToken(SintesisParser.CloseParen, 0); }
		public TerminalNode Identifier() { return getToken(SintesisParser.Identifier, 0); }
		public FunctionBodyContext functionBody() {
			return getRuleContext(FunctionBodyContext.class,0);
		}
		public TerminalNode Function_() { return getToken(SintesisParser.Function_, 0); }
		public FormalParameterListContext formalParameterList() {
			return getRuleContext(FormalParameterListContext.class,0);
		}
		public MethodDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_methodDeclaration; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SintesisParserVisitor ) return ((SintesisParserVisitor<? extends T>)visitor).visitMethodDeclaration(this);
			else return visitor.visitChildren(this);
		}
	}

	public final MethodDeclarationContext methodDeclaration() throws RecognitionException {
		MethodDeclarationContext _localctx = new MethodDeclarationContext(_ctx, getState());
		enterRule(_localctx, 40, RULE_methodDeclaration);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(380);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Function_) {
				{
				setState(379);
				match(Function_);
				}
			}

			setState(382);
			((MethodDeclarationContext)_localctx).id = match(Identifier);
			setState(383);
			match(OpenParen);
			setState(385);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Identifier) {
				{
				setState(384);
				((MethodDeclarationContext)_localctx).pl = formalParameterList();
				}
			}

			setState(387);
			match(CloseParen);
			setState(388);
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
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SintesisParserVisitor ) return ((SintesisParserVisitor<? extends T>)visitor).visitMethodsList(this);
			else return visitor.visitChildren(this);
		}
	}

	public final MethodsListContext methodsList() throws RecognitionException {
		MethodsListContext _localctx = new MethodsListContext(_ctx, getState());
		enterRule(_localctx, 42, RULE_methodsList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(391); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(390);
				methodDeclaration();
				}
				}
				setState(393); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( _la==Function_ || _la==Identifier );
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
		public ClassExpContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_classExp; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SintesisParserVisitor ) return ((SintesisParserVisitor<? extends T>)visitor).visitClassExp(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ClassExpContext classExp() throws RecognitionException {
		ClassExpContext _localctx = new ClassExpContext(_ctx, getState());
		enterRule(_localctx, 44, RULE_classExp);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(395);
			match(New_);
			setState(396);
			match(Identifier);
			setState(397);
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

	public static class VectorIndexContext extends ParserRuleContext {
		public TerminalNode OpenBracket() { return getToken(SintesisParser.OpenBracket, 0); }
		public TerminalNode CloseBracket() { return getToken(SintesisParser.CloseBracket, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public VectorIndexContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_vectorIndex; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SintesisParserVisitor ) return ((SintesisParserVisitor<? extends T>)visitor).visitVectorIndex(this);
			else return visitor.visitChildren(this);
		}
	}

	public final VectorIndexContext vectorIndex() throws RecognitionException {
		VectorIndexContext _localctx = new VectorIndexContext(_ctx, getState());
		enterRule(_localctx, 46, RULE_vectorIndex);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(399);
			match(OpenBracket);
			setState(401);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << SingleLineComment) | (1L << OpenBracket) | (1L << OpenParen) | (1L << PlusPlus) | (1L << MinusMinus) | (1L << Plus) | (1L << Minus) | (1L << BitNot) | (1L << Not) | (1L << NullLiteral) | (1L << DecimalLiteral) | (1L << HexIntegerLiteral) | (1L << OctalIntegerLiteral) | (1L << OctalIntegerLiteral2) | (1L << BinaryIntegerLiteral))) != 0) || ((((_la - 67)) & ~0x3f) == 0 && ((1L << (_la - 67)) & ((1L << (BooleanLiteral - 67)) | (1L << (Vector - 67)) | (1L << (Attributes - 67)) | (1L << (Methods - 67)) | (1L << (Super - 67)) | (1L << (Identifier - 67)) | (1L << (StringLiteral - 67)))) != 0)) {
				{
				setState(400);
				expression(0);
				}
			}

			setState(403);
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

	public static class VectorIndexesContext extends ParserRuleContext {
		public List<VectorIndexContext> vectorIndex() {
			return getRuleContexts(VectorIndexContext.class);
		}
		public VectorIndexContext vectorIndex(int i) {
			return getRuleContext(VectorIndexContext.class,i);
		}
		public VectorIndexesContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_vectorIndexes; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SintesisParserVisitor ) return ((SintesisParserVisitor<? extends T>)visitor).visitVectorIndexes(this);
			else return visitor.visitChildren(this);
		}
	}

	public final VectorIndexesContext vectorIndexes() throws RecognitionException {
		VectorIndexesContext _localctx = new VectorIndexesContext(_ctx, getState());
		enterRule(_localctx, 48, RULE_vectorIndexes);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(406); 
			_errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					setState(405);
					vectorIndex();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(408); 
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,31,_ctx);
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

	public static class FormalParameterArgContext extends ParserRuleContext {
		public TerminalNode Identifier() { return getToken(SintesisParser.Identifier, 0); }
		public TerminalNode Assign() { return getToken(SintesisParser.Assign, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public FormalParameterArgContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_formalParameterArg; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SintesisParserVisitor ) return ((SintesisParserVisitor<? extends T>)visitor).visitFormalParameterArg(this);
			else return visitor.visitChildren(this);
		}
	}

	public final FormalParameterArgContext formalParameterArg() throws RecognitionException {
		FormalParameterArgContext _localctx = new FormalParameterArgContext(_ctx, getState());
		enterRule(_localctx, 50, RULE_formalParameterArg);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(410);
			match(Identifier);
			setState(413);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Assign) {
				{
				setState(411);
				match(Assign);
				setState(412);
				expression(0);
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
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SintesisParserVisitor ) return ((SintesisParserVisitor<? extends T>)visitor).visitFunctionBody(this);
			else return visitor.visitChildren(this);
		}
	}

	public final FunctionBodyContext functionBody() throws RecognitionException {
		FunctionBodyContext _localctx = new FunctionBodyContext(_ctx, getState());
		enterRule(_localctx, 52, RULE_functionBody);
		try {
			setState(417);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,33,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(415);
				block();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(416);
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
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SintesisParserVisitor ) return ((SintesisParserVisitor<? extends T>)visitor).visitAssignmentOperator(this);
			else return visitor.visitChildren(this);
		}
	}

	public final AssignmentOperatorContext assignmentOperator() throws RecognitionException {
		AssignmentOperatorContext _localctx = new AssignmentOperatorContext(_ctx, getState());
		enterRule(_localctx, 54, RULE_assignmentOperator);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(419);
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

	public static class AssignableContext extends ParserRuleContext {
		public AssignableContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_assignable; }
	 
		public AssignableContext() { }
		public void copyFrom(AssignableContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class AssignableVectorContext extends AssignableContext {
		public Token id;
		public VectorIndexesContext idx;
		public TerminalNode Identifier() { return getToken(SintesisParser.Identifier, 0); }
		public VectorIndexesContext vectorIndexes() {
			return getRuleContext(VectorIndexesContext.class,0);
		}
		public AssignableVectorContext(AssignableContext ctx) { copyFrom(ctx); }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SintesisParserVisitor ) return ((SintesisParserVisitor<? extends T>)visitor).visitAssignableVector(this);
			else return visitor.visitChildren(this);
		}
	}
	public static class AssignableAttributeContext extends AssignableContext {
		public Token id;
		public TerminalNode Attributes() { return getToken(SintesisParser.Attributes, 0); }
		public TerminalNode Dot() { return getToken(SintesisParser.Dot, 0); }
		public TerminalNode Identifier() { return getToken(SintesisParser.Identifier, 0); }
		public AssignableAttributeContext(AssignableContext ctx) { copyFrom(ctx); }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SintesisParserVisitor ) return ((SintesisParserVisitor<? extends T>)visitor).visitAssignableAttribute(this);
			else return visitor.visitChildren(this);
		}
	}
	public static class AssignableIdContext extends AssignableContext {
		public Token id;
		public TerminalNode Identifier() { return getToken(SintesisParser.Identifier, 0); }
		public AssignableIdContext(AssignableContext ctx) { copyFrom(ctx); }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SintesisParserVisitor ) return ((SintesisParserVisitor<? extends T>)visitor).visitAssignableId(this);
			else return visitor.visitChildren(this);
		}
	}

	public final AssignableContext assignable() throws RecognitionException {
		AssignableContext _localctx = new AssignableContext(_ctx, getState());
		enterRule(_localctx, 56, RULE_assignable);
		try {
			setState(427);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,34,_ctx) ) {
			case 1:
				_localctx = new AssignableAttributeContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(421);
				match(Attributes);
				setState(422);
				match(Dot);
				setState(423);
				((AssignableAttributeContext)_localctx).id = match(Identifier);
				}
				break;
			case 2:
				_localctx = new AssignableVectorContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(424);
				((AssignableVectorContext)_localctx).id = match(Identifier);
				setState(425);
				((AssignableVectorContext)_localctx).idx = vectorIndexes();
				}
				break;
			case 3:
				_localctx = new AssignableIdContext(_localctx);
				enterOuterAlt(_localctx, 3);
				{
				setState(426);
				((AssignableIdContext)_localctx).id = match(Identifier);
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

	public static class ReservedWordContext extends ParserRuleContext {
		public KeywordContext keyword() {
			return getRuleContext(KeywordContext.class,0);
		}
		public TerminalNode NullLiteral() { return getToken(SintesisParser.NullLiteral, 0); }
		public TerminalNode BooleanLiteral() { return getToken(SintesisParser.BooleanLiteral, 0); }
		public ReservedWordContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_reservedWord; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SintesisParserVisitor ) return ((SintesisParserVisitor<? extends T>)visitor).visitReservedWord(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ReservedWordContext reservedWord() throws RecognitionException {
		ReservedWordContext _localctx = new ReservedWordContext(_ctx, getState());
		enterRule(_localctx, 58, RULE_reservedWord);
		try {
			setState(432);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case EOF:
			case While:
			case If:
			case Then:
			case Else:
			case Return:
			case Function_:
			case Vector:
				enterOuterAlt(_localctx, 1);
				{
				setState(429);
				keyword();
				}
				break;
			case NullLiteral:
				enterOuterAlt(_localctx, 2);
				{
				setState(430);
				match(NullLiteral);
				}
				break;
			case BooleanLiteral:
				enterOuterAlt(_localctx, 3);
				{
				setState(431);
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
		public LiteralContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_literal; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SintesisParserVisitor ) return ((SintesisParserVisitor<? extends T>)visitor).visitLiteral(this);
			else return visitor.visitChildren(this);
		}
	}

	public final LiteralContext literal() throws RecognitionException {
		LiteralContext _localctx = new LiteralContext(_ctx, getState());
		enterRule(_localctx, 60, RULE_literal);
		try {
			setState(438);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case NullLiteral:
				enterOuterAlt(_localctx, 1);
				{
				setState(434);
				nullLiteral();
				}
				break;
			case BooleanLiteral:
				enterOuterAlt(_localctx, 2);
				{
				setState(435);
				booleanLiteral();
				}
				break;
			case StringLiteral:
				enterOuterAlt(_localctx, 3);
				{
				setState(436);
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
				setState(437);
				numericLiteral();
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
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SintesisParserVisitor ) return ((SintesisParserVisitor<? extends T>)visitor).visitBooleanLiteral(this);
			else return visitor.visitChildren(this);
		}
	}

	public final BooleanLiteralContext booleanLiteral() throws RecognitionException {
		BooleanLiteralContext _localctx = new BooleanLiteralContext(_ctx, getState());
		enterRule(_localctx, 62, RULE_booleanLiteral);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(440);
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
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SintesisParserVisitor ) return ((SintesisParserVisitor<? extends T>)visitor).visitStringLiteral(this);
			else return visitor.visitChildren(this);
		}
	}

	public final StringLiteralContext stringLiteral() throws RecognitionException {
		StringLiteralContext _localctx = new StringLiteralContext(_ctx, getState());
		enterRule(_localctx, 64, RULE_stringLiteral);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(442);
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
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SintesisParserVisitor ) return ((SintesisParserVisitor<? extends T>)visitor).visitNullLiteral(this);
			else return visitor.visitChildren(this);
		}
	}

	public final NullLiteralContext nullLiteral() throws RecognitionException {
		NullLiteralContext _localctx = new NullLiteralContext(_ctx, getState());
		enterRule(_localctx, 66, RULE_nullLiteral);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(444);
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
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SintesisParserVisitor ) return ((SintesisParserVisitor<? extends T>)visitor).visitNumericLiteral(this);
			else return visitor.visitChildren(this);
		}
	}

	public final NumericLiteralContext numericLiteral() throws RecognitionException {
		NumericLiteralContext _localctx = new NumericLiteralContext(_ctx, getState());
		enterRule(_localctx, 68, RULE_numericLiteral);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(446);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << DecimalLiteral) | (1L << HexIntegerLiteral) | (1L << OctalIntegerLiteral) | (1L << OctalIntegerLiteral2) | (1L << BinaryIntegerLiteral))) != 0)) ) {
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

	public static class IdentifierNameContext extends ParserRuleContext {
		public TerminalNode Identifier() { return getToken(SintesisParser.Identifier, 0); }
		public ReservedWordContext reservedWord() {
			return getRuleContext(ReservedWordContext.class,0);
		}
		public IdentifierNameContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_identifierName; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SintesisParserVisitor ) return ((SintesisParserVisitor<? extends T>)visitor).visitIdentifierName(this);
			else return visitor.visitChildren(this);
		}
	}

	public final IdentifierNameContext identifierName() throws RecognitionException {
		IdentifierNameContext _localctx = new IdentifierNameContext(_ctx, getState());
		enterRule(_localctx, 70, RULE_identifierName);
		try {
			setState(450);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case Identifier:
				enterOuterAlt(_localctx, 1);
				{
				setState(448);
				match(Identifier);
				}
				break;
			case EOF:
			case NullLiteral:
			case BooleanLiteral:
			case While:
			case If:
			case Then:
			case Else:
			case Return:
			case Function_:
			case Vector:
				enterOuterAlt(_localctx, 2);
				{
				setState(449);
				reservedWord();
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

	public static class KeywordContext extends ParserRuleContext {
		public TerminalNode Else() { return getToken(SintesisParser.Else, 0); }
		public TerminalNode Then() { return getToken(SintesisParser.Then, 0); }
		public TerminalNode Return() { return getToken(SintesisParser.Return, 0); }
		public TerminalNode While() { return getToken(SintesisParser.While, 0); }
		public TerminalNode Function_() { return getToken(SintesisParser.Function_, 0); }
		public TerminalNode If() { return getToken(SintesisParser.If, 0); }
		public TerminalNode Vector() { return getToken(SintesisParser.Vector, 0); }
		public KeywordContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_keyword; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SintesisParserVisitor ) return ((SintesisParserVisitor<? extends T>)visitor).visitKeyword(this);
			else return visitor.visitChildren(this);
		}
	}

	public final KeywordContext keyword() throws RecognitionException {
		KeywordContext _localctx = new KeywordContext(_ctx, getState());
		enterRule(_localctx, 72, RULE_keyword);
		try {
			setState(461);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,38,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(453);
				match(Else);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(454);
				match(Then);
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(455);
				match(Return);
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(456);
				match(While);
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(457);
				match(Function_);
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(458);
				match(If);
				}
				break;
			case 8:
				enterOuterAlt(_localctx, 8);
				{
				setState(459);
				match(Vector);
				}
				break;
			case 9:
				enterOuterAlt(_localctx, 9);
				{
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
		case 6:
			return expression_sempred((ExpressionContext)_localctx, predIndex);
		}
		return true;
	}
	private boolean expression_sempred(ExpressionContext _localctx, int predIndex) {
		switch (predIndex) {
		case 0:
			return precpred(_ctx, 28);
		case 1:
			return precpred(_ctx, 27);
		case 2:
			return precpred(_ctx, 26);
		case 3:
			return precpred(_ctx, 25);
		case 4:
			return precpred(_ctx, 24);
		case 5:
			return precpred(_ctx, 23);
		case 6:
			return precpred(_ctx, 22);
		case 7:
			return precpred(_ctx, 21);
		case 8:
			return precpred(_ctx, 20);
		case 9:
			return precpred(_ctx, 19);
		case 10:
			return precpred(_ctx, 18);
		case 11:
			return precpred(_ctx, 17);
		case 12:
			return precpred(_ctx, 16);
		case 13:
			return precpred(_ctx, 15);
		case 14:
			return precpred(_ctx, 14);
		case 15:
			return precpred(_ctx, 13);
		case 16:
			return precpred(_ctx, 12);
		case 17:
			return precpred(_ctx, 11);
		case 18:
			return precpred(_ctx, 10);
		case 19:
			return precpred(_ctx, 9);
		case 20:
			return precpred(_ctx, 8);
		}
		return true;
	}

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3a\u01d2\4\2\t\2\4"+
		"\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13\t"+
		"\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\4\31\t\31"+
		"\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4\36\t\36\4\37\t\37\4 \t \4!"+
		"\t!\4\"\t\"\4#\t#\4$\t$\4%\t%\4&\t&\3\2\3\2\3\3\6\3P\n\3\r\3\16\3Q\3\4"+
		"\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\5\4^\n\4\3\5\3\5\5\5b\n\5\3\5\3\5"+
		"\3\6\3\6\3\6\3\7\3\7\3\7\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3"+
		"\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b"+
		"\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3"+
		"\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\5\b\u00a7\n\b\3\b\3"+
		"\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\5\b\u00b9\n"+
		"\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b"+
		"\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3"+
		"\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b"+
		"\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\7\b\u00f8\n\b\f\b\16\b\u00fb\13\b"+
		"\3\t\3\t\3\t\7\t\u0100\n\t\f\t\16\t\u0103\13\t\3\n\3\n\3\n\5\n\u0108\n"+
		"\n\3\n\3\n\5\n\u010c\n\n\3\n\5\n\u010f\n\n\3\13\6\13\u0112\n\13\r\13\16"+
		"\13\u0113\3\f\3\f\3\f\5\f\u0119\n\f\3\f\3\f\3\r\3\r\3\r\3\16\3\16\3\16"+
		"\3\16\3\16\3\16\3\16\3\16\3\16\3\16\5\16\u012a\n\16\3\16\3\16\3\16\5\16"+
		"\u012f\n\16\3\16\3\16\5\16\u0133\n\16\3\17\3\17\3\17\3\20\3\20\3\20\3"+
		"\20\5\20\u013c\n\20\3\20\3\20\3\20\3\20\3\20\5\20\u0143\n\20\3\21\3\21"+
		"\3\21\3\21\5\21\u0149\n\21\3\21\3\21\3\21\3\22\3\22\3\22\7\22\u0151\n"+
		"\22\f\22\16\22\u0154\13\22\3\23\3\23\3\23\3\23\7\23\u015a\n\23\f\23\16"+
		"\23\u015d\13\23\5\23\u015f\n\23\3\23\3\23\3\24\3\24\3\24\3\24\5\24\u0167"+
		"\n\24\3\24\3\24\3\24\3\24\5\24\u016d\n\24\3\24\3\24\3\24\5\24\u0172\n"+
		"\24\3\24\3\24\3\25\3\25\5\25\u0178\n\25\6\25\u017a\n\25\r\25\16\25\u017b"+
		"\3\26\5\26\u017f\n\26\3\26\3\26\3\26\5\26\u0184\n\26\3\26\3\26\3\26\3"+
		"\27\6\27\u018a\n\27\r\27\16\27\u018b\3\30\3\30\3\30\3\30\3\31\3\31\5\31"+
		"\u0194\n\31\3\31\3\31\3\32\6\32\u0199\n\32\r\32\16\32\u019a\3\33\3\33"+
		"\3\33\5\33\u01a0\n\33\3\34\3\34\5\34\u01a4\n\34\3\35\3\35\3\36\3\36\3"+
		"\36\3\36\3\36\3\36\5\36\u01ae\n\36\3\37\3\37\3\37\5\37\u01b3\n\37\3 \3"+
		" \3 \3 \5 \u01b9\n \3!\3!\3\"\3\"\3#\3#\3$\3$\3%\3%\5%\u01c5\n%\3&\3&"+
		"\3&\3&\3&\3&\3&\3&\3&\5&\u01d0\n&\3&\2\3\16\'\2\4\6\b\n\f\16\20\22\24"+
		"\26\30\32\34\36 \"$&(*,.\60\62\64\668:<>@BDFHJ\2\5\4\2<<^^\3\2.9\3\2<"+
		"@\2\u0210\2L\3\2\2\2\4O\3\2\2\2\6]\3\2\2\2\b_\3\2\2\2\ne\3\2\2\2\fh\3"+
		"\2\2\2\16\u00b8\3\2\2\2\20\u00fc\3\2\2\2\22\u0104\3\2\2\2\24\u0111\3\2"+
		"\2\2\26\u0115\3\2\2\2\30\u011c\3\2\2\2\32\u0132\3\2\2\2\34\u0134\3\2\2"+
		"\2\36\u0142\3\2\2\2 \u0144\3\2\2\2\"\u014d\3\2\2\2$\u0155\3\2\2\2&\u0162"+
		"\3\2\2\2(\u0179\3\2\2\2*\u017e\3\2\2\2,\u0189\3\2\2\2.\u018d\3\2\2\2\60"+
		"\u0191\3\2\2\2\62\u0198\3\2\2\2\64\u019c\3\2\2\2\66\u01a3\3\2\2\28\u01a5"+
		"\3\2\2\2:\u01ad\3\2\2\2<\u01b2\3\2\2\2>\u01b8\3\2\2\2@\u01ba\3\2\2\2B"+
		"\u01bc\3\2\2\2D\u01be\3\2\2\2F\u01c0\3\2\2\2H\u01c4\3\2\2\2J\u01cf\3\2"+
		"\2\2LM\5\4\3\2M\3\3\2\2\2NP\5\6\4\2ON\3\2\2\2PQ\3\2\2\2QO\3\2\2\2QR\3"+
		"\2\2\2R\5\3\2\2\2S^\5\b\5\2T^\5\n\6\2U^\5\f\7\2V^\5\22\n\2W^\5\32\16\2"+
		"X^\5\34\17\2Y^\5\36\20\2Z^\5&\24\2[^\5 \21\2\\^\5\16\b\2]S\3\2\2\2]T\3"+
		"\2\2\2]U\3\2\2\2]V\3\2\2\2]W\3\2\2\2]X\3\2\2\2]Y\3\2\2\2]Z\3\2\2\2][\3"+
		"\2\2\2]\\\3\2\2\2^\7\3\2\2\2_a\7\t\2\2`b\5\4\3\2a`\3\2\2\2ab\3\2\2\2b"+
		"c\3\2\2\2cd\7\n\2\2d\t\3\2\2\2ef\7F\2\2fg\t\2\2\2g\13\3\2\2\2hi\7G\2\2"+
		"ij\5\16\b\2j\r\3\2\2\2kl\b\b\1\2lm\7^\2\2m\u00b9\5\62\32\2no\7^\2\2o\u00b9"+
		"\5$\23\2pq\7^\2\2qr\7\21\2\2rs\7[\2\2st\7\7\2\2tu\5\16\b\2uv\7\b\2\2v"+
		"\u00b9\3\2\2\2wx\7^\2\2xy\7\21\2\2yz\7\\\2\2z{\7\7\2\2{|\7_\2\2|}\7\f"+
		"\2\2}~\5\16\b\2~\177\7\b\2\2\177\u00b9\3\2\2\2\u0080\u0081\7^\2\2\u0081"+
		"\u0082\7\21\2\2\u0082\u0083\7Q\2\2\u0083\u0084\7\7\2\2\u0084\u0085\7_"+
		"\2\2\u0085\u00b9\7\b\2\2\u0086\u0087\7^\2\2\u0087\u0088\7\21\2\2\u0088"+
		"\u0089\7^\2\2\u0089\u00b9\5$\23\2\u008a\u008b\7^\2\2\u008b\u008c\7\21"+
		"\2\2\u008c\u00b9\7^\2\2\u008d\u008e\7^\2\2\u008e\u008f\7Y\2\2\u008f\u00b9"+
		"\7^\2\2\u0090\u0091\7V\2\2\u0091\u0092\7\21\2\2\u0092\u00b9\7^\2\2\u0093"+
		"\u0094\7W\2\2\u0094\u0095\7\21\2\2\u0095\u0096\7^\2\2\u0096\u00b9\5$\23"+
		"\2\u0097\u0098\7X\2\2\u0098\u00b9\5$\23\2\u0099\u009a\7\22\2\2\u009a\u00b9"+
		"\5\16\b$\u009b\u009c\7\23\2\2\u009c\u00b9\5\16\b#\u009d\u009e\7\24\2\2"+
		"\u009e\u00b9\5\16\b\"\u009f\u00a0\7\25\2\2\u00a0\u00b9\5\16\b!\u00a1\u00a2"+
		"\7\26\2\2\u00a2\u00b9\5\16\b \u00a3\u00a4\7\27\2\2\u00a4\u00b9\5\16\b"+
		"\37\u00a5\u00a7\7P\2\2\u00a6\u00a5\3\2\2\2\u00a6\u00a7\3\2\2\2\u00a7\u00a8"+
		"\3\2\2\2\u00a8\u00b9\5\62\32\2\u00a9\u00aa\5:\36\2\u00aa\u00ab\7\r\2\2"+
		"\u00ab\u00ac\5\16\b\b\u00ac\u00b9\3\2\2\2\u00ad\u00ae\5:\36\2\u00ae\u00af"+
		"\58\35\2\u00af\u00b0\5\16\b\7\u00b0\u00b9\3\2\2\2\u00b1\u00b9\7^\2\2\u00b2"+
		"\u00b9\5> \2\u00b3\u00b4\7\7\2\2\u00b4\u00b5\5\16\b\2\u00b5\u00b6\7\b"+
		"\2\2\u00b6\u00b9\3\2\2\2\u00b7\u00b9\7\4\2\2\u00b8k\3\2\2\2\u00b8n\3\2"+
		"\2\2\u00b8p\3\2\2\2\u00b8w\3\2\2\2\u00b8\u0080\3\2\2\2\u00b8\u0086\3\2"+
		"\2\2\u00b8\u008a\3\2\2\2\u00b8\u008d\3\2\2\2\u00b8\u0090\3\2\2\2\u00b8"+
		"\u0093\3\2\2\2\u00b8\u0097\3\2\2\2\u00b8\u0099\3\2\2\2\u00b8\u009b\3\2"+
		"\2\2\u00b8\u009d\3\2\2\2\u00b8\u009f\3\2\2\2\u00b8\u00a1\3\2\2\2\u00b8"+
		"\u00a3\3\2\2\2\u00b8\u00a6\3\2\2\2\u00b8\u00a9\3\2\2\2\u00b8\u00ad\3\2"+
		"\2\2\u00b8\u00b1\3\2\2\2\u00b8\u00b2\3\2\2\2\u00b8\u00b3\3\2\2\2\u00b8"+
		"\u00b7\3\2\2\2\u00b9\u00f9\3\2\2\2\u00ba\u00bb\f\36\2\2\u00bb\u00bc\7"+
		"\24\2\2\u00bc\u00f8\5\16\b\37\u00bd\u00be\f\35\2\2\u00be\u00bf\7\25\2"+
		"\2\u00bf\u00f8\5\16\b\36\u00c0\u00c1\f\34\2\2\u00c1\u00c2\7\30\2\2\u00c2"+
		"\u00f8\5\16\b\35\u00c3\u00c4\f\33\2\2\u00c4\u00c5\7\31\2\2\u00c5\u00f8"+
		"\5\16\b\34\u00c6\u00c7\f\32\2\2\u00c7\u00c8\7\33\2\2\u00c8\u00f8\5\16"+
		"\b\32\u00c9\u00ca\f\31\2\2\u00ca\u00cb\7\32\2\2\u00cb\u00f8\5\16\b\32"+
		"\u00cc\u00cd\f\30\2\2\u00cd\u00ce\7!\2\2\u00ce\u00f8\5\16\b\31\u00cf\u00d0"+
		"\f\27\2\2\u00d0\u00d1\7\"\2\2\u00d1\u00f8\5\16\b\30\u00d2\u00d3\f\26\2"+
		"\2\u00d3\u00d4\7#\2\2\u00d4\u00f8\5\16\b\27\u00d5\u00d6\f\25\2\2\u00d6"+
		"\u00d7\7$\2\2\u00d7\u00f8\5\16\b\26\u00d8\u00d9\f\24\2\2\u00d9\u00da\7"+
		")\2\2\u00da\u00f8\5\16\b\25\u00db\u00dc\f\23\2\2\u00dc\u00dd\7+\2\2\u00dd"+
		"\u00f8\5\16\b\24\u00de\u00df\f\22\2\2\u00df\u00e0\7*\2\2\u00e0\u00f8\5"+
		"\16\b\23\u00e1\u00e2\f\21\2\2\u00e2\u00e3\7\'\2\2\u00e3\u00f8\5\16\b\22"+
		"\u00e4\u00e5\f\20\2\2\u00e5\u00e6\7(\2\2\u00e6\u00f8\5\16\b\21\u00e7\u00e8"+
		"\f\17\2\2\u00e8\u00e9\7%\2\2\u00e9\u00f8\5\16\b\20\u00ea\u00eb\f\16\2"+
		"\2\u00eb\u00ec\7&\2\2\u00ec\u00f8\5\16\b\17\u00ed\u00ee\f\r\2\2\u00ee"+
		"\u00ef\7,\2\2\u00ef\u00f8\5\16\b\16\u00f0\u00f1\f\f\2\2\u00f1\u00f2\7"+
		"-\2\2\u00f2\u00f8\5\16\b\r\u00f3\u00f4\f\13\2\2\u00f4\u00f8\7\22\2\2\u00f5"+
		"\u00f6\f\n\2\2\u00f6\u00f8\7\23\2\2\u00f7\u00ba\3\2\2\2\u00f7\u00bd\3"+
		"\2\2\2\u00f7\u00c0\3\2\2\2\u00f7\u00c3\3\2\2\2\u00f7\u00c6\3\2\2\2\u00f7"+
		"\u00c9\3\2\2\2\u00f7\u00cc\3\2\2\2\u00f7\u00cf\3\2\2\2\u00f7\u00d2\3\2"+
		"\2\2\u00f7\u00d5\3\2\2\2\u00f7\u00d8\3\2\2\2\u00f7\u00db\3\2\2\2\u00f7"+
		"\u00de\3\2\2\2\u00f7\u00e1\3\2\2\2\u00f7\u00e4\3\2\2\2\u00f7\u00e7\3\2"+
		"\2\2\u00f7\u00ea\3\2\2\2\u00f7\u00ed\3\2\2\2\u00f7\u00f0\3\2\2\2\u00f7"+
		"\u00f3\3\2\2\2\u00f7\u00f5\3\2\2\2\u00f8\u00fb\3\2\2\2\u00f9\u00f7\3\2"+
		"\2\2\u00f9\u00fa\3\2\2\2\u00fa\17\3\2\2\2\u00fb\u00f9\3\2\2\2\u00fc\u0101"+
		"\5\16\b\2\u00fd\u00fe\7\f\2\2\u00fe\u0100\5\16\b\2\u00ff\u00fd\3\2\2\2"+
		"\u0100\u0103\3\2\2\2\u0101\u00ff\3\2\2\2\u0101\u0102\3\2\2\2\u0102\21"+
		"\3\2\2\2\u0103\u0101\3\2\2\2\u0104\u0105\7J\2\2\u0105\u0107\5\16\b\2\u0106"+
		"\u0108\7K\2\2\u0107\u0106\3\2\2\2\u0107\u0108\3\2\2\2\u0108\u0109\3\2"+
		"\2\2\u0109\u010b\5\6\4\2\u010a\u010c\5\24\13\2\u010b\u010a\3\2\2\2\u010b"+
		"\u010c\3\2\2\2\u010c\u010e\3\2\2\2\u010d\u010f\5\30\r\2\u010e\u010d\3"+
		"\2\2\2\u010e\u010f\3\2\2\2\u010f\23\3\2\2\2\u0110\u0112\5\26\f\2\u0111"+
		"\u0110\3\2\2\2\u0112\u0113\3\2\2\2\u0113\u0111\3\2\2\2\u0113\u0114\3\2"+
		"\2\2\u0114\25\3\2\2\2\u0115\u0116\7L\2\2\u0116\u0118\5\16\b\2\u0117\u0119"+
		"\7K\2\2\u0118\u0117\3\2\2\2\u0118\u0119\3\2\2\2\u0119\u011a\3\2\2\2\u011a"+
		"\u011b\5\6\4\2\u011b\27\3\2\2\2\u011c\u011d\7M\2\2\u011d\u011e\5\6\4\2"+
		"\u011e\31\3\2\2\2\u011f\u0120\7I\2\2\u0120\u0121\5\16\b\2\u0121\u0122"+
		"\5\6\4\2\u0122\u0133\3\2\2\2\u0123\u0124\7I\2\2\u0124\u0125\5\6\4\2\u0125"+
		"\u0126\7H\2\2\u0126\u0127\5\16\b\2\u0127\u0133\3\2\2\2\u0128\u012a\7I"+
		"\2\2\u0129\u0128\3\2\2\2\u0129\u012a\3\2\2\2\u012a\u012b\3\2\2\2\u012b"+
		"\u012c\7H\2\2\u012c\u012e\5\16\b\2\u012d\u012f\7I\2\2\u012e\u012d\3\2"+
		"\2\2\u012e\u012f\3\2\2\2\u012f\u0130\3\2\2\2\u0130\u0131\5\6\4\2\u0131"+
		"\u0133\3\2\2\2\u0132\u011f\3\2\2\2\u0132\u0123\3\2\2\2\u0132\u0129\3\2"+
		"\2\2\u0133\33\3\2\2\2\u0134\u0135\7N\2\2\u0135\u0136\5\16\b\2\u0136\35"+
		"\3\2\2\2\u0137\u0138\7]\2\2\u0138\u0139\7^\2\2\u0139\u013b\7\r\2\2\u013a"+
		"\u013c\7P\2\2\u013b\u013a\3\2\2\2\u013b\u013c\3\2\2\2\u013c\u013d\3\2"+
		"\2\2\u013d\u0143\5\62\32\2\u013e\u013f\7]\2\2\u013f\u0140\7^\2\2\u0140"+
		"\u0141\7\r\2\2\u0141\u0143\5\16\b\2\u0142\u0137\3\2\2\2\u0142\u013e\3"+
		"\2\2\2\u0143\37\3\2\2\2\u0144\u0145\7O\2\2\u0145\u0146\7^\2\2\u0146\u0148"+
		"\7\7\2\2\u0147\u0149\5\"\22\2\u0148\u0147\3\2\2\2\u0148\u0149\3\2\2\2"+
		"\u0149\u014a\3\2\2\2\u014a\u014b\7\b\2\2\u014b\u014c\5\66\34\2\u014c!"+
		"\3\2\2\2\u014d\u0152\5\64\33\2\u014e\u014f\7\f\2\2\u014f\u0151\5\64\33"+
		"\2\u0150\u014e\3\2\2\2\u0151\u0154\3\2\2\2\u0152\u0150\3\2\2\2\u0152\u0153"+
		"\3\2\2\2\u0153#\3\2\2\2\u0154\u0152\3\2\2\2\u0155\u015e\7\7\2\2\u0156"+
		"\u015b\5\16\b\2\u0157\u0158\7\f\2\2\u0158\u015a\5\16\b\2\u0159\u0157\3"+
		"\2\2\2\u015a\u015d\3\2\2\2\u015b\u0159\3\2\2\2\u015b\u015c\3\2\2\2\u015c"+
		"\u015f\3\2\2\2\u015d\u015b\3\2\2\2\u015e\u0156\3\2\2\2\u015e\u015f\3\2"+
		"\2\2\u015f\u0160\3\2\2\2\u0160\u0161\7\b\2\2\u0161%\3\2\2\2\u0162\u0163"+
		"\7T\2\2\u0163\u0166\7^\2\2\u0164\u0165\7U\2\2\u0165\u0167\7^\2\2\u0166"+
		"\u0164\3\2\2\2\u0166\u0167\3\2\2\2\u0167\u0168\3\2\2\2\u0168\u016c\7\t"+
		"\2\2\u0169\u016a\7V\2\2\u016a\u016b\7\17\2\2\u016b\u016d\5(\25\2\u016c"+
		"\u0169\3\2\2\2\u016c\u016d\3\2\2\2\u016d\u0171\3\2\2\2\u016e\u016f\7W"+
		"\2\2\u016f\u0170\7\17\2\2\u0170\u0172\5,\27\2\u0171\u016e\3\2\2\2\u0171"+
		"\u0172\3\2\2\2\u0172\u0173\3\2\2\2\u0173\u0174\7\n\2\2\u0174\'\3\2\2\2"+
		"\u0175\u0177\7^\2\2\u0176\u0178\7\f\2\2\u0177\u0176\3\2\2\2\u0177\u0178"+
		"\3\2\2\2\u0178\u017a\3\2\2\2\u0179\u0175\3\2\2\2\u017a\u017b\3\2\2\2\u017b"+
		"\u0179\3\2\2\2\u017b\u017c\3\2\2\2\u017c)\3\2\2\2\u017d\u017f\7O\2\2\u017e"+
		"\u017d\3\2\2\2\u017e\u017f\3\2\2\2\u017f\u0180\3\2\2\2\u0180\u0181\7^"+
		"\2\2\u0181\u0183\7\7\2\2\u0182\u0184\5\"\22\2\u0183\u0182\3\2\2\2\u0183"+
		"\u0184\3\2\2\2\u0184\u0185\3\2\2\2\u0185\u0186\7\b\2\2\u0186\u0187\5\66"+
		"\34\2\u0187+\3\2\2\2\u0188\u018a\5*\26\2\u0189\u0188\3\2\2\2\u018a\u018b"+
		"\3\2\2\2\u018b\u0189\3\2\2\2\u018b\u018c\3\2\2\2\u018c-\3\2\2\2\u018d"+
		"\u018e\7S\2\2\u018e\u018f\7^\2\2\u018f\u0190\5$\23\2\u0190/\3\2\2\2\u0191"+
		"\u0193\7\5\2\2\u0192\u0194\5\16\b\2\u0193\u0192\3\2\2\2\u0193\u0194\3"+
		"\2\2\2\u0194\u0195\3\2\2\2\u0195\u0196\7\6\2\2\u0196\61\3\2\2\2\u0197"+
		"\u0199\5\60\31\2\u0198\u0197\3\2\2\2\u0199\u019a\3\2\2\2\u019a\u0198\3"+
		"\2\2\2\u019a\u019b\3\2\2\2\u019b\63\3\2\2\2\u019c\u019f\7^\2\2\u019d\u019e"+
		"\7\r\2\2\u019e\u01a0\5\16\b\2\u019f\u019d\3\2\2\2\u019f\u01a0\3\2\2\2"+
		"\u01a0\65\3\2\2\2\u01a1\u01a4\5\b\5\2\u01a2\u01a4\5\6\4\2\u01a3\u01a1"+
		"\3\2\2\2\u01a3\u01a2\3\2\2\2\u01a4\67\3\2\2\2\u01a5\u01a6\t\3\2\2\u01a6"+
		"9\3\2\2\2\u01a7\u01a8\7V\2\2\u01a8\u01a9\7\21\2\2\u01a9\u01ae\7^\2\2\u01aa"+
		"\u01ab\7^\2\2\u01ab\u01ae\5\62\32\2\u01ac\u01ae\7^\2\2\u01ad\u01a7\3\2"+
		"\2\2\u01ad\u01aa\3\2\2\2\u01ad\u01ac\3\2\2\2\u01ae;\3\2\2\2\u01af\u01b3"+
		"\5J&\2\u01b0\u01b3\7;\2\2\u01b1\u01b3\7E\2\2\u01b2\u01af\3\2\2\2\u01b2"+
		"\u01b0\3\2\2\2\u01b2\u01b1\3\2\2\2\u01b3=\3\2\2\2\u01b4\u01b9\5D#\2\u01b5"+
		"\u01b9\5@!\2\u01b6\u01b9\5B\"\2\u01b7\u01b9\5F$\2\u01b8\u01b4\3\2\2\2"+
		"\u01b8\u01b5\3\2\2\2\u01b8\u01b6\3\2\2\2\u01b8\u01b7\3\2\2\2\u01b9?\3"+
		"\2\2\2\u01ba\u01bb\7E\2\2\u01bbA\3\2\2\2\u01bc\u01bd\7_\2\2\u01bdC\3\2"+
		"\2\2\u01be\u01bf\7;\2\2\u01bfE\3\2\2\2\u01c0\u01c1\t\4\2\2\u01c1G\3\2"+
		"\2\2\u01c2\u01c5\7^\2\2\u01c3\u01c5\5<\37\2\u01c4\u01c2\3\2\2\2\u01c4"+
		"\u01c3\3\2\2\2\u01c5I\3\2\2\2\u01c6\u01d0\3\2\2\2\u01c7\u01d0\7M\2\2\u01c8"+
		"\u01d0\7K\2\2\u01c9\u01d0\7N\2\2\u01ca\u01d0\7H\2\2\u01cb\u01d0\7O\2\2"+
		"\u01cc\u01d0\7J\2\2\u01cd\u01d0\7P\2\2\u01ce\u01d0\3\2\2\2\u01cf\u01c6"+
		"\3\2\2\2\u01cf\u01c7\3\2\2\2\u01cf\u01c8\3\2\2\2\u01cf\u01c9\3\2\2\2\u01cf"+
		"\u01ca\3\2\2\2\u01cf\u01cb\3\2\2\2\u01cf\u01cc\3\2\2\2\u01cf\u01cd\3\2"+
		"\2\2\u01cf\u01ce\3\2\2\2\u01d0K\3\2\2\2)Q]a\u00a6\u00b8\u00f7\u00f9\u0101"+
		"\u0107\u010b\u010e\u0113\u0118\u0129\u012e\u0132\u013b\u0142\u0148\u0152"+
		"\u015b\u015e\u0166\u016c\u0171\u0177\u017b\u017e\u0183\u018b\u0193\u019a"+
		"\u019f\u01a3\u01ad\u01b2\u01b8\u01c4\u01cf";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}