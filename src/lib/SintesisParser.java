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
		Step=68, Print=69, While=70, Repeat=71, Times=72, Do=73, For=74, Each=75, 
		ForEach=76, In=77, Of=78, To=79, If=80, Then=81, ElseIf=82, Else=83, Return=84, 
		Method=85, Function_=86, Vector=87, Delete=88, NumberOf=89, IndexOf=90, 
		Sub=91, Lower=92, Upper=93, Math=94, Min=95, Max=96, Random=97, Chr=98, 
		Ord=99, Prompt=100, Convert=101, New_=102, Class_=103, Extends=104, Attributes=105, 
		Methods=106, Constructor=107, Super=108, InstanceOf=109, Map=110, Get=111, 
		Set=112, Var_=113, Identifier=114, StringLiteral=115, WhiteSpaces=116, 
		LineTerminator=117;
	public static final int
		RULE_program = 0, RULE_statementList = 1, RULE_statement = 2, RULE_block = 3, 
		RULE_stepStatement = 4, RULE_printStatement = 5, RULE_methodCall = 6, 
		RULE_superSuffix = 7, RULE_member = 8, RULE_expression = 9, RULE_basicFunction0 = 10, 
		RULE_basicFunction1 = 11, RULE_basicFunction2 = 12, RULE_basicFunction3 = 13, 
		RULE_basicFunction = 14, RULE_expressionSequence = 15, RULE_ifStatement = 16, 
		RULE_elseIfs = 17, RULE_elseIf = 18, RULE_elseStatement = 19, RULE_iteratorIndexes = 20, 
		RULE_iteratorRange = 21, RULE_iterationStatement = 22, RULE_returnStatement = 23, 
		RULE_formalParameterList = 24, RULE_functionDeclaration = 25, RULE_arguments = 26, 
		RULE_classDeclaration = 27, RULE_identifiers = 28, RULE_methodDeclaration = 29, 
		RULE_methodsList = 30, RULE_classExp = 31, RULE_vectorIndex = 32, RULE_vectorIndexes = 33, 
		RULE_formalParameterArg = 34, RULE_functionBody = 35, RULE_assignmentOperator = 36, 
		RULE_reservedWord = 37, RULE_vectorDeclaration = 38, RULE_mapDeclaration = 39, 
		RULE_vectorLiteral = 40, RULE_objectLiteral = 41, RULE_literal = 42, RULE_booleanLiteral = 43, 
		RULE_stringLiteral = 44, RULE_nullLiteral = 45, RULE_numericLiteral = 46, 
		RULE_identifier = 47, RULE_identifierWithKeywords = 48, RULE_keyword = 49;
	private static String[] makeRuleNames() {
		return new String[] {
			"program", "statementList", "statement", "block", "stepStatement", "printStatement", 
			"methodCall", "superSuffix", "member", "expression", "basicFunction0", 
			"basicFunction1", "basicFunction2", "basicFunction3", "basicFunction", 
			"expressionSequence", "ifStatement", "elseIfs", "elseIf", "elseStatement", 
			"iteratorIndexes", "iteratorRange", "iterationStatement", "returnStatement", 
			"formalParameterList", "functionDeclaration", "arguments", "classDeclaration", 
			"identifiers", "methodDeclaration", "methodsList", "classExp", "vectorIndex", 
			"vectorIndexes", "formalParameterArg", "functionBody", "assignmentOperator", 
			"reservedWord", "vectorDeclaration", "mapDeclaration", "vectorLiteral", 
			"objectLiteral", "literal", "booleanLiteral", "stringLiteral", "nullLiteral", 
			"numericLiteral", "identifier", "identifierWithKeywords", "keyword"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, null, null, "'['", "']'", "'('", "')'", "'{'", "'}'", "';'", "','", 
			null, "'?'", "':'", "'-...-'", "'.'", "'++'", "'--'", "'+'", "'-'", "'~'", 
			"'!'", "'*'", "'/'", "'%'", "'**'", "'??'", "'#'", "'>>'", "'<<'", "'>>>'", 
			"'<'", "'>'", "'<='", "'>='", "'=='", null, "'==='", "'!=='", "'&'", 
			"'^'", "'|'", "'&&'", "'||'", "'*='", "'/='", "'%='", "'+='", "'-='", 
			"'<<='", "'>>='", "'>>>='", "'&='", "'^='", "'|='", "'**='", null, "'null'", 
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, "'sub'", null, 
			null, null, null, null, null, "'chr'", "'ord'", null, null, null, null, 
			null, null, null, null, null, null, null, null, null, "'var'"
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
			"Repeat", "Times", "Do", "For", "Each", "ForEach", "In", "Of", "To", 
			"If", "Then", "ElseIf", "Else", "Return", "Method", "Function_", "Vector", 
			"Delete", "NumberOf", "IndexOf", "Sub", "Lower", "Upper", "Math", "Min", 
			"Max", "Random", "Chr", "Ord", "Prompt", "Convert", "New_", "Class_", 
			"Extends", "Attributes", "Methods", "Constructor", "Super", "InstanceOf", 
			"Map", "Get", "Set", "Var_", "Identifier", "StringLiteral", "WhiteSpaces", 
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
		public StatementListContext statementList() {
			return getRuleContext(StatementListContext.class,0);
		}
		public TerminalNode EOF() { return getToken(SintesisParser.EOF, 0); }
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
			setState(100);
			statementList();
			setState(101);
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
			setState(104); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(103);
				statement();
				}
				}
				setState(106); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( (((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << OpenBracket) | (1L << OpenParen) | (1L << OpenBrace) | (1L << PlusPlus) | (1L << MinusMinus) | (1L << Plus) | (1L << Minus) | (1L << BitNot) | (1L << Not) | (1L << NullLiteral) | (1L << DecimalLiteral) | (1L << HexIntegerLiteral) | (1L << OctalIntegerLiteral) | (1L << OctalIntegerLiteral2) | (1L << BinaryIntegerLiteral))) != 0) || ((((_la - 67)) & ~0x3f) == 0 && ((1L << (_la - 67)) & ((1L << (BooleanLiteral - 67)) | (1L << (Step - 67)) | (1L << (Print - 67)) | (1L << (While - 67)) | (1L << (Repeat - 67)) | (1L << (Do - 67)) | (1L << (For - 67)) | (1L << (ForEach - 67)) | (1L << (If - 67)) | (1L << (Return - 67)) | (1L << (Function_ - 67)) | (1L << (Vector - 67)) | (1L << (NumberOf - 67)) | (1L << (IndexOf - 67)) | (1L << (Sub - 67)) | (1L << (Lower - 67)) | (1L << (Upper - 67)) | (1L << (Math - 67)) | (1L << (Min - 67)) | (1L << (Max - 67)) | (1L << (Random - 67)) | (1L << (Chr - 67)) | (1L << (Ord - 67)) | (1L << (Prompt - 67)) | (1L << (Convert - 67)) | (1L << (New_ - 67)) | (1L << (Class_ - 67)) | (1L << (Attributes - 67)) | (1L << (Methods - 67)) | (1L << (Super - 67)) | (1L << (Map - 67)) | (1L << (Identifier - 67)) | (1L << (StringLiteral - 67)))) != 0) );
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
			setState(117);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,1,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(108);
				block();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(109);
				stepStatement();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(110);
				printStatement();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(111);
				ifStatement();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(112);
				iterationStatement();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(113);
				returnStatement();
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(114);
				classDeclaration();
				}
				break;
			case 8:
				enterOuterAlt(_localctx, 8);
				{
				setState(115);
				functionDeclaration();
				}
				break;
			case 9:
				enterOuterAlt(_localctx, 9);
				{
				setState(116);
				expression(0);
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
			setState(119);
			match(OpenBrace);
			setState(121);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << OpenBracket) | (1L << OpenParen) | (1L << OpenBrace) | (1L << PlusPlus) | (1L << MinusMinus) | (1L << Plus) | (1L << Minus) | (1L << BitNot) | (1L << Not) | (1L << NullLiteral) | (1L << DecimalLiteral) | (1L << HexIntegerLiteral) | (1L << OctalIntegerLiteral) | (1L << OctalIntegerLiteral2) | (1L << BinaryIntegerLiteral))) != 0) || ((((_la - 67)) & ~0x3f) == 0 && ((1L << (_la - 67)) & ((1L << (BooleanLiteral - 67)) | (1L << (Step - 67)) | (1L << (Print - 67)) | (1L << (While - 67)) | (1L << (Repeat - 67)) | (1L << (Do - 67)) | (1L << (For - 67)) | (1L << (ForEach - 67)) | (1L << (If - 67)) | (1L << (Return - 67)) | (1L << (Function_ - 67)) | (1L << (Vector - 67)) | (1L << (NumberOf - 67)) | (1L << (IndexOf - 67)) | (1L << (Sub - 67)) | (1L << (Lower - 67)) | (1L << (Upper - 67)) | (1L << (Math - 67)) | (1L << (Min - 67)) | (1L << (Max - 67)) | (1L << (Random - 67)) | (1L << (Chr - 67)) | (1L << (Ord - 67)) | (1L << (Prompt - 67)) | (1L << (Convert - 67)) | (1L << (New_ - 67)) | (1L << (Class_ - 67)) | (1L << (Attributes - 67)) | (1L << (Methods - 67)) | (1L << (Super - 67)) | (1L << (Map - 67)) | (1L << (Identifier - 67)) | (1L << (StringLiteral - 67)))) != 0)) {
				{
				setState(120);
				((BlockContext)_localctx).stmt = statementList();
				}
			}

			setState(123);
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
			setState(125);
			match(Step);
			setState(126);
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
		public ExpressionSequenceContext exp;
		public TerminalNode Print() { return getToken(SintesisParser.Print, 0); }
		public ExpressionSequenceContext expressionSequence() {
			return getRuleContext(ExpressionSequenceContext.class,0);
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
			setState(128);
			match(Print);
			setState(129);
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

	public static class MethodCallContext extends ParserRuleContext {
		public IdentifierWithKeywordsContext identifierWithKeywords() {
			return getRuleContext(IdentifierWithKeywordsContext.class,0);
		}
		public ArgumentsContext arguments() {
			return getRuleContext(ArgumentsContext.class,0);
		}
		public TerminalNode Super() { return getToken(SintesisParser.Super, 0); }
		public MethodCallContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_methodCall; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SintesisParserVisitor ) return ((SintesisParserVisitor<? extends T>)visitor).visitMethodCall(this);
			else return visitor.visitChildren(this);
		}
	}

	public final MethodCallContext methodCall() throws RecognitionException {
		MethodCallContext _localctx = new MethodCallContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_methodCall);
		try {
			setState(136);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case OpenParen:
			case NullLiteral:
			case BooleanLiteral:
			case While:
			case If:
			case Then:
			case Else:
			case Return:
			case Function_:
			case Vector:
			case Attributes:
			case Methods:
			case Map:
			case Var_:
			case Identifier:
				enterOuterAlt(_localctx, 1);
				{
				setState(131);
				identifierWithKeywords();
				setState(132);
				arguments();
				}
				break;
			case Super:
				enterOuterAlt(_localctx, 2);
				{
				setState(134);
				match(Super);
				setState(135);
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
		public IdentifierWithKeywordsContext identifierWithKeywords() {
			return getRuleContext(IdentifierWithKeywordsContext.class,0);
		}
		public SuperSuffixContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_superSuffix; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SintesisParserVisitor ) return ((SintesisParserVisitor<? extends T>)visitor).visitSuperSuffix(this);
			else return visitor.visitChildren(this);
		}
	}

	public final SuperSuffixContext superSuffix() throws RecognitionException {
		SuperSuffixContext _localctx = new SuperSuffixContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_superSuffix);
		int _la;
		try {
			setState(144);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case OpenParen:
				enterOuterAlt(_localctx, 1);
				{
				setState(138);
				arguments();
				}
				break;
			case Dot:
				enterOuterAlt(_localctx, 2);
				{
				setState(139);
				match(Dot);
				setState(140);
				identifierWithKeywords();
				setState(142);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==OpenParen) {
					{
					setState(141);
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
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SintesisParserVisitor ) return ((SintesisParserVisitor<? extends T>)visitor).visitExpAttributes(this);
			else return visitor.visitChildren(this);
		}
	}
	public static class ExpSuperContext extends MemberContext {
		public TerminalNode Super() { return getToken(SintesisParser.Super, 0); }
		public ExpSuperContext(MemberContext ctx) { copyFrom(ctx); }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SintesisParserVisitor ) return ((SintesisParserVisitor<? extends T>)visitor).visitExpSuper(this);
			else return visitor.visitChildren(this);
		}
	}
	public static class ExpMemberIndexContext extends MemberContext {
		public MemberContext exp;
		public ExpressionContext idx;
		public ArgumentsContext args;
		public TerminalNode OpenBracket() { return getToken(SintesisParser.OpenBracket, 0); }
		public TerminalNode CloseBracket() { return getToken(SintesisParser.CloseBracket, 0); }
		public MemberContext member() {
			return getRuleContext(MemberContext.class,0);
		}
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public ArgumentsContext arguments() {
			return getRuleContext(ArgumentsContext.class,0);
		}
		public ExpMemberIndexContext(MemberContext ctx) { copyFrom(ctx); }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SintesisParserVisitor ) return ((SintesisParserVisitor<? extends T>)visitor).visitExpMemberIndex(this);
			else return visitor.visitChildren(this);
		}
	}
	public static class ExpIdentifierContext extends MemberContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public ExpIdentifierContext(MemberContext ctx) { copyFrom(ctx); }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SintesisParserVisitor ) return ((SintesisParserVisitor<? extends T>)visitor).visitExpIdentifier(this);
			else return visitor.visitChildren(this);
		}
	}
	public static class ExpMethodsContext extends MemberContext {
		public TerminalNode Methods() { return getToken(SintesisParser.Methods, 0); }
		public ExpMethodsContext(MemberContext ctx) { copyFrom(ctx); }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SintesisParserVisitor ) return ((SintesisParserVisitor<? extends T>)visitor).visitExpMethods(this);
			else return visitor.visitChildren(this);
		}
	}
	public static class ExpNewContext extends MemberContext {
		public Token id;
		public ArgumentsContext args;
		public TerminalNode New_() { return getToken(SintesisParser.New_, 0); }
		public TerminalNode Identifier() { return getToken(SintesisParser.Identifier, 0); }
		public ArgumentsContext arguments() {
			return getRuleContext(ArgumentsContext.class,0);
		}
		public ExpNewContext(MemberContext ctx) { copyFrom(ctx); }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SintesisParserVisitor ) return ((SintesisParserVisitor<? extends T>)visitor).visitExpNew(this);
			else return visitor.visitChildren(this);
		}
	}
	public static class ExpMemberFuncContext extends MemberContext {
		public MemberContext exp;
		public ArgumentsContext args;
		public MemberContext member() {
			return getRuleContext(MemberContext.class,0);
		}
		public ArgumentsContext arguments() {
			return getRuleContext(ArgumentsContext.class,0);
		}
		public ExpMemberFuncContext(MemberContext ctx) { copyFrom(ctx); }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SintesisParserVisitor ) return ((SintesisParserVisitor<? extends T>)visitor).visitExpMemberFunc(this);
			else return visitor.visitChildren(this);
		}
	}
	public static class ExpMemberDotContext extends MemberContext {
		public MemberContext exp;
		public MemberContext idx;
		public ArgumentsContext args;
		public TerminalNode Dot() { return getToken(SintesisParser.Dot, 0); }
		public List<MemberContext> member() {
			return getRuleContexts(MemberContext.class);
		}
		public MemberContext member(int i) {
			return getRuleContext(MemberContext.class,i);
		}
		public ArgumentsContext arguments() {
			return getRuleContext(ArgumentsContext.class,0);
		}
		public ExpMemberDotContext(MemberContext ctx) { copyFrom(ctx); }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SintesisParserVisitor ) return ((SintesisParserVisitor<? extends T>)visitor).visitExpMemberDot(this);
			else return visitor.visitChildren(this);
		}
	}

	public final MemberContext member() throws RecognitionException {
		return member(0);
	}

	private MemberContext member(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		MemberContext _localctx = new MemberContext(_ctx, _parentState);
		MemberContext _prevctx = _localctx;
		int _startState = 16;
		enterRecursionRule(_localctx, 16, RULE_member, _p);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(154);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case Attributes:
				{
				_localctx = new ExpAttributesContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;

				setState(147);
				match(Attributes);
				}
				break;
			case Methods:
				{
				_localctx = new ExpMethodsContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(148);
				match(Methods);
				}
				break;
			case Super:
				{
				_localctx = new ExpSuperContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(149);
				match(Super);
				}
				break;
			case New_:
				{
				_localctx = new ExpNewContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(150);
				match(New_);
				setState(151);
				((ExpNewContext)_localctx).id = match(Identifier);
				setState(152);
				((ExpNewContext)_localctx).args = arguments();
				}
				break;
			case Identifier:
				{
				_localctx = new ExpIdentifierContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(153);
				identifier();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			_ctx.stop = _input.LT(-1);
			setState(179);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,8,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(177);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,7,_ctx) ) {
					case 1:
						{
						_localctx = new ExpMemberDotContext(new MemberContext(_parentctx, _parentState));
						((ExpMemberDotContext)_localctx).exp = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_member);
						setState(156);
						if (!(precpred(_ctx, 5))) throw new FailedPredicateException(this, "precpred(_ctx, 5)");
						setState(157);
						match(Dot);
						setState(158);
						((ExpMemberDotContext)_localctx).idx = member(6);
						}
						break;
					case 2:
						{
						_localctx = new ExpMemberDotContext(new MemberContext(_parentctx, _parentState));
						((ExpMemberDotContext)_localctx).exp = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_member);
						setState(159);
						if (!(precpred(_ctx, 6))) throw new FailedPredicateException(this, "precpred(_ctx, 6)");
						setState(160);
						match(Dot);
						setState(161);
						((ExpMemberDotContext)_localctx).idx = member(0);
						setState(162);
						((ExpMemberDotContext)_localctx).args = arguments();
						}
						break;
					case 3:
						{
						_localctx = new ExpMemberIndexContext(new MemberContext(_parentctx, _parentState));
						((ExpMemberIndexContext)_localctx).exp = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_member);
						setState(164);
						if (!(precpred(_ctx, 4))) throw new FailedPredicateException(this, "precpred(_ctx, 4)");
						setState(165);
						match(OpenBracket);
						setState(166);
						((ExpMemberIndexContext)_localctx).idx = expression(0);
						setState(167);
						match(CloseBracket);
						setState(168);
						((ExpMemberIndexContext)_localctx).args = arguments();
						}
						break;
					case 4:
						{
						_localctx = new ExpMemberIndexContext(new MemberContext(_parentctx, _parentState));
						((ExpMemberIndexContext)_localctx).exp = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_member);
						setState(170);
						if (!(precpred(_ctx, 3))) throw new FailedPredicateException(this, "precpred(_ctx, 3)");
						setState(171);
						match(OpenBracket);
						setState(172);
						((ExpMemberIndexContext)_localctx).idx = expression(0);
						setState(173);
						match(CloseBracket);
						}
						break;
					case 5:
						{
						_localctx = new ExpMemberFuncContext(new MemberContext(_parentctx, _parentState));
						((ExpMemberFuncContext)_localctx).exp = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_member);
						setState(175);
						if (!(precpred(_ctx, 2))) throw new FailedPredicateException(this, "precpred(_ctx, 2)");
						setState(176);
						((ExpMemberFuncContext)_localctx).args = arguments();
						}
						break;
					}
					} 
				}
				setState(181);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,8,_ctx);
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
	public static class ExpAssignmentContext extends ExpressionContext {
		public ExpressionContext dest;
		public ExpressionContext exp;
		public TerminalNode Assign() { return getToken(SintesisParser.Assign, 0); }
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public ExpAssignmentContext(ExpressionContext ctx) { copyFrom(ctx); }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SintesisParserVisitor ) return ((SintesisParserVisitor<? extends T>)visitor).visitExpAssignment(this);
			else return visitor.visitChildren(this);
		}
	}
	public static class ExpBasicFunctionContext extends ExpressionContext {
		public BasicFunctionContext fn;
		public ArgumentsContext args;
		public BasicFunctionContext basicFunction() {
			return getRuleContext(BasicFunctionContext.class,0);
		}
		public ArgumentsContext arguments() {
			return getRuleContext(ArgumentsContext.class,0);
		}
		public ExpBasicFunctionContext(ExpressionContext ctx) { copyFrom(ctx); }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SintesisParserVisitor ) return ((SintesisParserVisitor<? extends T>)visitor).visitExpBasicFunction(this);
			else return visitor.visitChildren(this);
		}
	}
	public static class ExpMathContext extends ExpressionContext {
		public Token fn;
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
		public ExpMathContext(ExpressionContext ctx) { copyFrom(ctx); }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SintesisParserVisitor ) return ((SintesisParserVisitor<? extends T>)visitor).visitExpMath(this);
			else return visitor.visitChildren(this);
		}
	}
	public static class ExpPreIncrementContext extends ExpressionContext {
		public Token op;
		public ExpressionContext dest;
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TerminalNode PlusPlus() { return getToken(SintesisParser.PlusPlus, 0); }
		public TerminalNode MinusMinus() { return getToken(SintesisParser.MinusMinus, 0); }
		public ExpPreIncrementContext(ExpressionContext ctx) { copyFrom(ctx); }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SintesisParserVisitor ) return ((SintesisParserVisitor<? extends T>)visitor).visitExpPreIncrement(this);
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
	public static class ExpTernaryContext extends ExpressionContext {
		public ExpressionContext cond;
		public ExpressionContext ok;
		public ExpressionContext no;
		public TerminalNode QuestionMark() { return getToken(SintesisParser.QuestionMark, 0); }
		public TerminalNode Colon() { return getToken(SintesisParser.Colon, 0); }
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public ExpTernaryContext(ExpressionContext ctx) { copyFrom(ctx); }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SintesisParserVisitor ) return ((SintesisParserVisitor<? extends T>)visitor).visitExpTernary(this);
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
	public static class ExpPostIncrementContext extends ExpressionContext {
		public ExpressionContext dest;
		public Token op;
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TerminalNode PlusPlus() { return getToken(SintesisParser.PlusPlus, 0); }
		public TerminalNode MinusMinus() { return getToken(SintesisParser.MinusMinus, 0); }
		public ExpPostIncrementContext(ExpressionContext ctx) { copyFrom(ctx); }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SintesisParserVisitor ) return ((SintesisParserVisitor<? extends T>)visitor).visitExpPostIncrement(this);
			else return visitor.visitChildren(this);
		}
	}
	public static class ExpInstanceOfContext extends ExpressionContext {
		public ExpressionContext e1;
		public IdentifierContext e2;
		public TerminalNode InstanceOf() { return getToken(SintesisParser.InstanceOf, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public ExpInstanceOfContext(ExpressionContext ctx) { copyFrom(ctx); }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SintesisParserVisitor ) return ((SintesisParserVisitor<? extends T>)visitor).visitExpInstanceOf(this);
			else return visitor.visitChildren(this);
		}
	}
	public static class ExpAssignmentOperatorContext extends ExpressionContext {
		public ExpressionContext dest;
		public AssignmentOperatorContext op;
		public ExpressionContext exp;
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public AssignmentOperatorContext assignmentOperator() {
			return getRuleContext(AssignmentOperatorContext.class,0);
		}
		public ExpAssignmentOperatorContext(ExpressionContext ctx) { copyFrom(ctx); }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SintesisParserVisitor ) return ((SintesisParserVisitor<? extends T>)visitor).visitExpAssignmentOperator(this);
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
	public static class ExpMemberContext extends ExpressionContext {
		public MemberContext member() {
			return getRuleContext(MemberContext.class,0);
		}
		public ExpMemberContext(ExpressionContext ctx) { copyFrom(ctx); }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SintesisParserVisitor ) return ((SintesisParserVisitor<? extends T>)visitor).visitExpMember(this);
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
		public ExpOpContext(ExpressionContext ctx) { copyFrom(ctx); }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SintesisParserVisitor ) return ((SintesisParserVisitor<? extends T>)visitor).visitExpOp(this);
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

	public final ExpressionContext expression() throws RecognitionException {
		return expression(0);
	}

	private ExpressionContext expression(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		ExpressionContext _localctx = new ExpressionContext(_ctx, _parentState);
		ExpressionContext _prevctx = _localctx;
		int _startState = 18;
		enterRecursionRule(_localctx, 18, RULE_expression, _p);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(206);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case NumberOf:
			case IndexOf:
			case Sub:
			case Lower:
			case Upper:
			case Min:
			case Max:
			case Random:
			case Chr:
			case Ord:
			case Prompt:
			case Convert:
				{
				_localctx = new ExpBasicFunctionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;

				setState(183);
				((ExpBasicFunctionContext)_localctx).fn = basicFunction();
				setState(184);
				((ExpBasicFunctionContext)_localctx).args = arguments();
				}
				break;
			case Math:
				{
				_localctx = new ExpMathContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(186);
				match(Math);
				setState(187);
				match(Dot);
				setState(188);
				((ExpMathContext)_localctx).fn = _input.LT(1);
				_la = _input.LA(1);
				if ( !(((((_la - 95)) & ~0x3f) == 0 && ((1L << (_la - 95)) & ((1L << (Min - 95)) | (1L << (Max - 95)) | (1L << (Random - 95)) | (1L << (Identifier - 95)))) != 0)) ) {
					((ExpMathContext)_localctx).fn = (Token)_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(189);
				((ExpMathContext)_localctx).args = arguments();
				}
				break;
			case PlusPlus:
			case MinusMinus:
				{
				_localctx = new ExpPreIncrementContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(190);
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
				setState(191);
				((ExpPreIncrementContext)_localctx).dest = expression(23);
				}
				break;
			case Plus:
				{
				_localctx = new ExpUnaryPlusContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(192);
				match(Plus);
				setState(193);
				((ExpUnaryPlusContext)_localctx).exp = expression(22);
				}
				break;
			case Minus:
				{
				_localctx = new ExpUnaryMinusContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(194);
				match(Minus);
				setState(195);
				((ExpUnaryMinusContext)_localctx).exp = expression(21);
				}
				break;
			case BitNot:
				{
				_localctx = new ExpBitNotContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(196);
				match(BitNot);
				setState(197);
				((ExpBitNotContext)_localctx).exp = expression(20);
				}
				break;
			case Not:
				{
				_localctx = new ExpNotContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(198);
				match(Not);
				setState(199);
				((ExpNotContext)_localctx).exp = expression(19);
				}
				break;
			case OpenParen:
				{
				_localctx = new ExpParenthesisContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(200);
				match(OpenParen);
				setState(201);
				((ExpParenthesisContext)_localctx).exp = expression(0);
				setState(202);
				match(CloseParen);
				}
				break;
			case New_:
			case Attributes:
			case Methods:
			case Super:
			case Identifier:
				{
				_localctx = new ExpMemberContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(204);
				member(0);
				}
				break;
			case OpenBracket:
			case OpenBrace:
			case NullLiteral:
			case DecimalLiteral:
			case HexIntegerLiteral:
			case OctalIntegerLiteral:
			case OctalIntegerLiteral2:
			case BinaryIntegerLiteral:
			case BooleanLiteral:
			case Vector:
			case Map:
			case StringLiteral:
				{
				_localctx = new ExpLiteralContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(205);
				literal();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			_ctx.stop = _input.LT(-1);
			setState(261);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,11,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(259);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,10,_ctx) ) {
					case 1:
						{
						_localctx = new ExpOpContext(new ExpressionContext(_parentctx, _parentState));
						((ExpOpContext)_localctx).e1 = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(208);
						if (!(precpred(_ctx, 18))) throw new FailedPredicateException(this, "precpred(_ctx, 18)");
						setState(209);
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
						setState(210);
						((ExpOpContext)_localctx).e2 = expression(19);
						}
						break;
					case 2:
						{
						_localctx = new ExpOpContext(new ExpressionContext(_parentctx, _parentState));
						((ExpOpContext)_localctx).e1 = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(211);
						if (!(precpred(_ctx, 17))) throw new FailedPredicateException(this, "precpred(_ctx, 17)");
						setState(212);
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
						setState(213);
						((ExpOpContext)_localctx).e2 = expression(18);
						}
						break;
					case 3:
						{
						_localctx = new ExpOpContext(new ExpressionContext(_parentctx, _parentState));
						((ExpOpContext)_localctx).e1 = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(214);
						if (!(precpred(_ctx, 16))) throw new FailedPredicateException(this, "precpred(_ctx, 16)");
						setState(215);
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
						setState(216);
						((ExpOpContext)_localctx).e2 = expression(17);
						}
						break;
					case 4:
						{
						_localctx = new ExpOpContext(new ExpressionContext(_parentctx, _parentState));
						((ExpOpContext)_localctx).e1 = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(217);
						if (!(precpred(_ctx, 15))) throw new FailedPredicateException(this, "precpred(_ctx, 15)");
						setState(218);
						((ExpOpContext)_localctx).op = match(Power);
						setState(219);
						((ExpOpContext)_localctx).e2 = expression(15);
						}
						break;
					case 5:
						{
						_localctx = new ExpOpContext(new ExpressionContext(_parentctx, _parentState));
						((ExpOpContext)_localctx).e1 = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(220);
						if (!(precpred(_ctx, 14))) throw new FailedPredicateException(this, "precpred(_ctx, 14)");
						setState(221);
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
						setState(222);
						((ExpOpContext)_localctx).e2 = expression(15);
						}
						break;
					case 6:
						{
						_localctx = new ExpOpContext(new ExpressionContext(_parentctx, _parentState));
						((ExpOpContext)_localctx).e1 = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(223);
						if (!(precpred(_ctx, 13))) throw new FailedPredicateException(this, "precpred(_ctx, 13)");
						setState(224);
						((ExpOpContext)_localctx).op = match(LessThanEquals);
						setState(225);
						((ExpOpContext)_localctx).e2 = expression(14);
						}
						break;
					case 7:
						{
						_localctx = new ExpOpContext(new ExpressionContext(_parentctx, _parentState));
						((ExpOpContext)_localctx).e1 = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(226);
						if (!(precpred(_ctx, 12))) throw new FailedPredicateException(this, "precpred(_ctx, 12)");
						setState(227);
						((ExpOpContext)_localctx).op = match(GreaterThanEquals);
						setState(228);
						((ExpOpContext)_localctx).e2 = expression(13);
						}
						break;
					case 8:
						{
						_localctx = new ExpOpContext(new ExpressionContext(_parentctx, _parentState));
						((ExpOpContext)_localctx).e1 = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(229);
						if (!(precpred(_ctx, 10))) throw new FailedPredicateException(this, "precpred(_ctx, 10)");
						setState(230);
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
						setState(231);
						((ExpOpContext)_localctx).e2 = expression(11);
						}
						break;
					case 9:
						{
						_localctx = new ExpOpContext(new ExpressionContext(_parentctx, _parentState));
						((ExpOpContext)_localctx).e1 = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(232);
						if (!(precpred(_ctx, 9))) throw new FailedPredicateException(this, "precpred(_ctx, 9)");
						setState(233);
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
						setState(234);
						((ExpOpContext)_localctx).e2 = expression(10);
						}
						break;
					case 10:
						{
						_localctx = new ExpOpContext(new ExpressionContext(_parentctx, _parentState));
						((ExpOpContext)_localctx).e1 = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(235);
						if (!(precpred(_ctx, 8))) throw new FailedPredicateException(this, "precpred(_ctx, 8)");
						setState(236);
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
						setState(237);
						((ExpOpContext)_localctx).e2 = expression(9);
						}
						break;
					case 11:
						{
						_localctx = new ExpOpContext(new ExpressionContext(_parentctx, _parentState));
						((ExpOpContext)_localctx).e1 = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(238);
						if (!(precpred(_ctx, 7))) throw new FailedPredicateException(this, "precpred(_ctx, 7)");
						setState(239);
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
						setState(240);
						((ExpOpContext)_localctx).e2 = expression(8);
						}
						break;
					case 12:
						{
						_localctx = new ExpTernaryContext(new ExpressionContext(_parentctx, _parentState));
						((ExpTernaryContext)_localctx).cond = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(241);
						if (!(precpred(_ctx, 6))) throw new FailedPredicateException(this, "precpred(_ctx, 6)");
						setState(242);
						match(QuestionMark);
						setState(243);
						((ExpTernaryContext)_localctx).ok = expression(0);
						setState(244);
						match(Colon);
						setState(245);
						((ExpTernaryContext)_localctx).no = expression(7);
						}
						break;
					case 13:
						{
						_localctx = new ExpAssignmentContext(new ExpressionContext(_parentctx, _parentState));
						((ExpAssignmentContext)_localctx).dest = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(247);
						if (!(precpred(_ctx, 5))) throw new FailedPredicateException(this, "precpred(_ctx, 5)");
						setState(248);
						match(Assign);
						setState(249);
						((ExpAssignmentContext)_localctx).exp = expression(5);
						}
						break;
					case 14:
						{
						_localctx = new ExpAssignmentOperatorContext(new ExpressionContext(_parentctx, _parentState));
						((ExpAssignmentOperatorContext)_localctx).dest = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(250);
						if (!(precpred(_ctx, 4))) throw new FailedPredicateException(this, "precpred(_ctx, 4)");
						setState(251);
						((ExpAssignmentOperatorContext)_localctx).op = assignmentOperator();
						setState(252);
						((ExpAssignmentOperatorContext)_localctx).exp = expression(4);
						}
						break;
					case 15:
						{
						_localctx = new ExpPostIncrementContext(new ExpressionContext(_parentctx, _parentState));
						((ExpPostIncrementContext)_localctx).dest = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(254);
						if (!(precpred(_ctx, 24))) throw new FailedPredicateException(this, "precpred(_ctx, 24)");
						setState(255);
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
					case 16:
						{
						_localctx = new ExpInstanceOfContext(new ExpressionContext(_parentctx, _parentState));
						((ExpInstanceOfContext)_localctx).e1 = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(256);
						if (!(precpred(_ctx, 11))) throw new FailedPredicateException(this, "precpred(_ctx, 11)");
						setState(257);
						match(InstanceOf);
						setState(258);
						((ExpInstanceOfContext)_localctx).e2 = identifier();
						}
						break;
					}
					} 
				}
				setState(263);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,11,_ctx);
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
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SintesisParserVisitor ) return ((SintesisParserVisitor<? extends T>)visitor).visitRandom(this);
			else return visitor.visitChildren(this);
		}
	}

	public final BasicFunction0Context basicFunction0() throws RecognitionException {
		BasicFunction0Context _localctx = new BasicFunction0Context(_ctx, getState());
		enterRule(_localctx, 20, RULE_basicFunction0);
		try {
			_localctx = new RandomContext(_localctx);
			enterOuterAlt(_localctx, 1);
			{
			setState(264);
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
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SintesisParserVisitor ) return ((SintesisParserVisitor<? extends T>)visitor).visitOrd(this);
			else return visitor.visitChildren(this);
		}
	}
	public static class MinContext extends BasicFunction1Context {
		public TerminalNode Min() { return getToken(SintesisParser.Min, 0); }
		public MinContext(BasicFunction1Context ctx) { copyFrom(ctx); }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SintesisParserVisitor ) return ((SintesisParserVisitor<? extends T>)visitor).visitMin(this);
			else return visitor.visitChildren(this);
		}
	}
	public static class MaxContext extends BasicFunction1Context {
		public TerminalNode Max() { return getToken(SintesisParser.Max, 0); }
		public MaxContext(BasicFunction1Context ctx) { copyFrom(ctx); }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SintesisParserVisitor ) return ((SintesisParserVisitor<? extends T>)visitor).visitMax(this);
			else return visitor.visitChildren(this);
		}
	}
	public static class LowerContext extends BasicFunction1Context {
		public TerminalNode Lower() { return getToken(SintesisParser.Lower, 0); }
		public LowerContext(BasicFunction1Context ctx) { copyFrom(ctx); }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SintesisParserVisitor ) return ((SintesisParserVisitor<? extends T>)visitor).visitLower(this);
			else return visitor.visitChildren(this);
		}
	}
	public static class UpperContext extends BasicFunction1Context {
		public TerminalNode Upper() { return getToken(SintesisParser.Upper, 0); }
		public UpperContext(BasicFunction1Context ctx) { copyFrom(ctx); }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SintesisParserVisitor ) return ((SintesisParserVisitor<? extends T>)visitor).visitUpper(this);
			else return visitor.visitChildren(this);
		}
	}
	public static class ChrContext extends BasicFunction1Context {
		public TerminalNode Chr() { return getToken(SintesisParser.Chr, 0); }
		public ChrContext(BasicFunction1Context ctx) { copyFrom(ctx); }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SintesisParserVisitor ) return ((SintesisParserVisitor<? extends T>)visitor).visitChr(this);
			else return visitor.visitChildren(this);
		}
	}
	public static class PromptContext extends BasicFunction1Context {
		public TerminalNode Prompt() { return getToken(SintesisParser.Prompt, 0); }
		public PromptContext(BasicFunction1Context ctx) { copyFrom(ctx); }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SintesisParserVisitor ) return ((SintesisParserVisitor<? extends T>)visitor).visitPrompt(this);
			else return visitor.visitChildren(this);
		}
	}
	public static class NumberOfContext extends BasicFunction1Context {
		public TerminalNode NumberOf() { return getToken(SintesisParser.NumberOf, 0); }
		public NumberOfContext(BasicFunction1Context ctx) { copyFrom(ctx); }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SintesisParserVisitor ) return ((SintesisParserVisitor<? extends T>)visitor).visitNumberOf(this);
			else return visitor.visitChildren(this);
		}
	}

	public final BasicFunction1Context basicFunction1() throws RecognitionException {
		BasicFunction1Context _localctx = new BasicFunction1Context(_ctx, getState());
		enterRule(_localctx, 22, RULE_basicFunction1);
		try {
			setState(274);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case NumberOf:
				_localctx = new NumberOfContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(266);
				match(NumberOf);
				}
				break;
			case Lower:
				_localctx = new LowerContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(267);
				match(Lower);
				}
				break;
			case Upper:
				_localctx = new UpperContext(_localctx);
				enterOuterAlt(_localctx, 3);
				{
				setState(268);
				match(Upper);
				}
				break;
			case Max:
				_localctx = new MaxContext(_localctx);
				enterOuterAlt(_localctx, 4);
				{
				setState(269);
				match(Max);
				}
				break;
			case Min:
				_localctx = new MinContext(_localctx);
				enterOuterAlt(_localctx, 5);
				{
				setState(270);
				match(Min);
				}
				break;
			case Ord:
				_localctx = new OrdContext(_localctx);
				enterOuterAlt(_localctx, 6);
				{
				setState(271);
				match(Ord);
				}
				break;
			case Chr:
				_localctx = new ChrContext(_localctx);
				enterOuterAlt(_localctx, 7);
				{
				setState(272);
				match(Chr);
				}
				break;
			case Prompt:
				_localctx = new PromptContext(_localctx);
				enterOuterAlt(_localctx, 8);
				{
				setState(273);
				match(Prompt);
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
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SintesisParserVisitor ) return ((SintesisParserVisitor<? extends T>)visitor).visitConvert(this);
			else return visitor.visitChildren(this);
		}
	}
	public static class IndexOfContext extends BasicFunction2Context {
		public TerminalNode IndexOf() { return getToken(SintesisParser.IndexOf, 0); }
		public IndexOfContext(BasicFunction2Context ctx) { copyFrom(ctx); }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SintesisParserVisitor ) return ((SintesisParserVisitor<? extends T>)visitor).visitIndexOf(this);
			else return visitor.visitChildren(this);
		}
	}

	public final BasicFunction2Context basicFunction2() throws RecognitionException {
		BasicFunction2Context _localctx = new BasicFunction2Context(_ctx, getState());
		enterRule(_localctx, 24, RULE_basicFunction2);
		try {
			setState(278);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case IndexOf:
				_localctx = new IndexOfContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(276);
				match(IndexOf);
				}
				break;
			case Convert:
				_localctx = new ConvertContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(277);
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
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SintesisParserVisitor ) return ((SintesisParserVisitor<? extends T>)visitor).visitSub(this);
			else return visitor.visitChildren(this);
		}
	}

	public final BasicFunction3Context basicFunction3() throws RecognitionException {
		BasicFunction3Context _localctx = new BasicFunction3Context(_ctx, getState());
		enterRule(_localctx, 26, RULE_basicFunction3);
		try {
			_localctx = new SubContext(_localctx);
			enterOuterAlt(_localctx, 1);
			{
			setState(280);
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
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SintesisParserVisitor ) return ((SintesisParserVisitor<? extends T>)visitor).visitBasicFunction(this);
			else return visitor.visitChildren(this);
		}
	}

	public final BasicFunctionContext basicFunction() throws RecognitionException {
		BasicFunctionContext _localctx = new BasicFunctionContext(_ctx, getState());
		enterRule(_localctx, 28, RULE_basicFunction);
		try {
			setState(286);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case Random:
				enterOuterAlt(_localctx, 1);
				{
				setState(282);
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
				enterOuterAlt(_localctx, 2);
				{
				setState(283);
				basicFunction1();
				}
				break;
			case IndexOf:
			case Convert:
				enterOuterAlt(_localctx, 3);
				{
				setState(284);
				basicFunction2();
				}
				break;
			case Sub:
				enterOuterAlt(_localctx, 4);
				{
				setState(285);
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
		enterRule(_localctx, 30, RULE_expressionSequence);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(288);
			expression(0);
			setState(293);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==Comma) {
				{
				{
				setState(289);
				match(Comma);
				setState(290);
				expression(0);
				}
				}
				setState(295);
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
		enterRule(_localctx, 32, RULE_ifStatement);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(296);
			match(If);
			setState(297);
			((IfStatementContext)_localctx).exp = expression(0);
			setState(299);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Then) {
				{
				setState(298);
				match(Then);
				}
			}

			setState(301);
			((IfStatementContext)_localctx).stmt = statement();
			setState(303);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,17,_ctx) ) {
			case 1:
				{
				setState(302);
				((IfStatementContext)_localctx).elseifs = elseIfs();
				}
				break;
			}
			setState(306);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,18,_ctx) ) {
			case 1:
				{
				setState(305);
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
		enterRule(_localctx, 34, RULE_elseIfs);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(309); 
			_errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					setState(308);
					elseIf();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(311); 
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,19,_ctx);
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
		enterRule(_localctx, 36, RULE_elseIf);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(313);
			match(ElseIf);
			setState(314);
			((ElseIfContext)_localctx).exp = expression(0);
			setState(316);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Then) {
				{
				setState(315);
				match(Then);
				}
			}

			setState(318);
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
		enterRule(_localctx, 38, RULE_elseStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(320);
			match(Else);
			setState(321);
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

	public static class IteratorIndexesContext extends ParserRuleContext {
		public Token idv;
		public Token op;
		public ExpressionContext coll;
		public Token idk;
		public List<TerminalNode> Identifier() { return getTokens(SintesisParser.Identifier); }
		public TerminalNode Identifier(int i) {
			return getToken(SintesisParser.Identifier, i);
		}
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TerminalNode In() { return getToken(SintesisParser.In, 0); }
		public TerminalNode Of() { return getToken(SintesisParser.Of, 0); }
		public TerminalNode Comma() { return getToken(SintesisParser.Comma, 0); }
		public TerminalNode ARROW() { return getToken(SintesisParser.ARROW, 0); }
		public IteratorIndexesContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_iteratorIndexes; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SintesisParserVisitor ) return ((SintesisParserVisitor<? extends T>)visitor).visitIteratorIndexes(this);
			else return visitor.visitChildren(this);
		}
	}

	public final IteratorIndexesContext iteratorIndexes() throws RecognitionException {
		IteratorIndexesContext _localctx = new IteratorIndexesContext(_ctx, getState());
		enterRule(_localctx, 40, RULE_iteratorIndexes);
		int _la;
		try {
			setState(336);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,21,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(323);
				((IteratorIndexesContext)_localctx).idv = match(Identifier);
				setState(324);
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
				setState(325);
				((IteratorIndexesContext)_localctx).coll = expression(0);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(326);
				((IteratorIndexesContext)_localctx).idv = match(Identifier);
				setState(327);
				match(Comma);
				setState(328);
				((IteratorIndexesContext)_localctx).idk = match(Identifier);
				setState(329);
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
				setState(330);
				((IteratorIndexesContext)_localctx).coll = expression(0);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(331);
				((IteratorIndexesContext)_localctx).idk = match(Identifier);
				setState(332);
				match(ARROW);
				setState(333);
				((IteratorIndexesContext)_localctx).idv = match(Identifier);
				setState(334);
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
				setState(335);
				((IteratorIndexesContext)_localctx).coll = expression(0);
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
		public Token id;
		public ExpressionContext start;
		public ExpressionContext to;
		public TerminalNode To() { return getToken(SintesisParser.To, 0); }
		public TerminalNode Identifier() { return getToken(SintesisParser.Identifier, 0); }
		public TerminalNode Assign() { return getToken(SintesisParser.Assign, 0); }
		public TerminalNode In() { return getToken(SintesisParser.In, 0); }
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public IteratorRangeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_iteratorRange; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SintesisParserVisitor ) return ((SintesisParserVisitor<? extends T>)visitor).visitIteratorRange(this);
			else return visitor.visitChildren(this);
		}
	}

	public final IteratorRangeContext iteratorRange() throws RecognitionException {
		IteratorRangeContext _localctx = new IteratorRangeContext(_ctx, getState());
		enterRule(_localctx, 42, RULE_iteratorRange);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(338);
			((IteratorRangeContext)_localctx).id = match(Identifier);
			setState(339);
			_la = _input.LA(1);
			if ( !(_la==Assign || _la==In) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(340);
			((IteratorRangeContext)_localctx).start = expression(0);
			setState(341);
			match(To);
			setState(342);
			((IteratorRangeContext)_localctx).to = expression(0);
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
		public TerminalNode While() { return getToken(SintesisParser.While, 0); }
		public TerminalNode Repeat() { return getToken(SintesisParser.Repeat, 0); }
		public TerminalNode Do() { return getToken(SintesisParser.Do, 0); }
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
		public TerminalNode Times() { return getToken(SintesisParser.Times, 0); }
		public RepeatStatementContext(IterationStatementContext ctx) { copyFrom(ctx); }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SintesisParserVisitor ) return ((SintesisParserVisitor<? extends T>)visitor).visitRepeatStatement(this);
			else return visitor.visitChildren(this);
		}
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
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SintesisParserVisitor ) return ((SintesisParserVisitor<? extends T>)visitor).visitForEachStatement(this);
			else return visitor.visitChildren(this);
		}
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
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SintesisParserVisitor ) return ((SintesisParserVisitor<? extends T>)visitor).visitForEachStatement2(this);
			else return visitor.visitChildren(this);
		}
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
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SintesisParserVisitor ) return ((SintesisParserVisitor<? extends T>)visitor).visitForFromToStatement2(this);
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
		public TerminalNode Do() { return getToken(SintesisParser.Do, 0); }
		public WhileRepeatStatementContext(IterationStatementContext ctx) { copyFrom(ctx); }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SintesisParserVisitor ) return ((SintesisParserVisitor<? extends T>)visitor).visitWhileRepeatStatement(this);
			else return visitor.visitChildren(this);
		}
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
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SintesisParserVisitor ) return ((SintesisParserVisitor<? extends T>)visitor).visitForFromToStatement(this);
			else return visitor.visitChildren(this);
		}
	}

	public final IterationStatementContext iterationStatement() throws RecognitionException {
		IterationStatementContext _localctx = new IterationStatementContext(_ctx, getState());
		enterRule(_localctx, 44, RULE_iterationStatement);
		int _la;
		try {
			setState(410);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,33,_ctx) ) {
			case 1:
				_localctx = new RepeatStatementContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(344);
				match(Repeat);
				setState(345);
				((RepeatStatementContext)_localctx).exp = expression(0);
				setState(347);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==Times) {
					{
					setState(346);
					match(Times);
					}
				}

				setState(349);
				((RepeatStatementContext)_localctx).stmt = statement();
				}
				break;
			case 2:
				_localctx = new RepeatWhileStatementContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(351);
				_la = _input.LA(1);
				if ( !(_la==Repeat || _la==Do) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(352);
				((RepeatWhileStatementContext)_localctx).stmt = statement();
				setState(353);
				match(While);
				setState(354);
				((RepeatWhileStatementContext)_localctx).exp = expression(0);
				}
				break;
			case 3:
				_localctx = new WhileRepeatStatementContext(_localctx);
				enterOuterAlt(_localctx, 3);
				{
				setState(357);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==Repeat) {
					{
					setState(356);
					match(Repeat);
					}
				}

				setState(359);
				match(While);
				setState(360);
				((WhileRepeatStatementContext)_localctx).exp = expression(0);
				setState(362);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,24,_ctx) ) {
				case 1:
					{
					setState(361);
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
				setState(364);
				((WhileRepeatStatementContext)_localctx).stmt = statement();
				}
				break;
			case 4:
				_localctx = new ForFromToStatementContext(_localctx);
				enterOuterAlt(_localctx, 4);
				{
				setState(366);
				match(For);
				setState(367);
				((ForFromToStatementContext)_localctx).iter = iteratorRange();
				setState(369);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,25,_ctx) ) {
				case 1:
					{
					setState(368);
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
				setState(371);
				((ForFromToStatementContext)_localctx).stmt = statement();
				}
				break;
			case 5:
				_localctx = new ForFromToStatement2Context(_localctx);
				enterOuterAlt(_localctx, 5);
				{
				setState(373);
				match(For);
				setState(374);
				match(OpenParen);
				setState(375);
				((ForFromToStatement2Context)_localctx).iter = iteratorRange();
				setState(376);
				match(CloseParen);
				setState(378);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,26,_ctx) ) {
				case 1:
					{
					setState(377);
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
				setState(380);
				((ForFromToStatement2Context)_localctx).stmt = statement();
				}
				break;
			case 6:
				_localctx = new ForEachStatementContext(_localctx);
				enterOuterAlt(_localctx, 6);
				{
				setState(387);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case For:
					{
					setState(382);
					match(For);
					setState(384);
					_errHandler.sync(this);
					_la = _input.LA(1);
					if (_la==Each) {
						{
						setState(383);
						match(Each);
						}
					}

					}
					break;
				case ForEach:
					{
					setState(386);
					match(ForEach);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(389);
				((ForEachStatementContext)_localctx).iter = iteratorIndexes();
				setState(391);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,29,_ctx) ) {
				case 1:
					{
					setState(390);
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
				setState(393);
				((ForEachStatementContext)_localctx).stmt = statement();
				}
				break;
			case 7:
				_localctx = new ForEachStatement2Context(_localctx);
				enterOuterAlt(_localctx, 7);
				{
				setState(400);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case For:
					{
					setState(395);
					match(For);
					setState(397);
					_errHandler.sync(this);
					_la = _input.LA(1);
					if (_la==Each) {
						{
						setState(396);
						match(Each);
						}
					}

					}
					break;
				case ForEach:
					{
					setState(399);
					match(ForEach);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(402);
				match(OpenParen);
				setState(403);
				((ForEachStatement2Context)_localctx).iter = iteratorIndexes();
				setState(404);
				match(CloseParen);
				setState(406);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,32,_ctx) ) {
				case 1:
					{
					setState(405);
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
				setState(408);
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
		enterRule(_localctx, 46, RULE_returnStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(412);
			match(Return);
			setState(413);
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
		enterRule(_localctx, 48, RULE_formalParameterList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(415);
			formalParameterArg();
			setState(420);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==Comma) {
				{
				{
				setState(416);
				match(Comma);
				setState(417);
				formalParameterArg();
				}
				}
				setState(422);
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
		enterRule(_localctx, 50, RULE_functionDeclaration);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(423);
			match(Function_);
			setState(424);
			((FunctionDeclarationContext)_localctx).id = match(Identifier);
			setState(425);
			match(OpenParen);
			setState(427);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Identifier) {
				{
				setState(426);
				((FunctionDeclarationContext)_localctx).pl = formalParameterList();
				}
			}

			setState(429);
			match(CloseParen);
			setState(430);
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
		enterRule(_localctx, 52, RULE_arguments);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(432);
			match(OpenParen);
			setState(441);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << OpenBracket) | (1L << OpenParen) | (1L << OpenBrace) | (1L << PlusPlus) | (1L << MinusMinus) | (1L << Plus) | (1L << Minus) | (1L << BitNot) | (1L << Not) | (1L << NullLiteral) | (1L << DecimalLiteral) | (1L << HexIntegerLiteral) | (1L << OctalIntegerLiteral) | (1L << OctalIntegerLiteral2) | (1L << BinaryIntegerLiteral))) != 0) || ((((_la - 67)) & ~0x3f) == 0 && ((1L << (_la - 67)) & ((1L << (BooleanLiteral - 67)) | (1L << (Vector - 67)) | (1L << (NumberOf - 67)) | (1L << (IndexOf - 67)) | (1L << (Sub - 67)) | (1L << (Lower - 67)) | (1L << (Upper - 67)) | (1L << (Math - 67)) | (1L << (Min - 67)) | (1L << (Max - 67)) | (1L << (Random - 67)) | (1L << (Chr - 67)) | (1L << (Ord - 67)) | (1L << (Prompt - 67)) | (1L << (Convert - 67)) | (1L << (New_ - 67)) | (1L << (Attributes - 67)) | (1L << (Methods - 67)) | (1L << (Super - 67)) | (1L << (Map - 67)) | (1L << (Identifier - 67)) | (1L << (StringLiteral - 67)))) != 0)) {
				{
				setState(433);
				expression(0);
				setState(438);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==Comma) {
					{
					{
					setState(434);
					match(Comma);
					setState(435);
					expression(0);
					}
					}
					setState(440);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
			}

			setState(443);
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
		public Token mdec;
		public MethodsListContext methods;
		public TerminalNode Class_() { return getToken(SintesisParser.Class_, 0); }
		public List<TerminalNode> OpenBrace() { return getTokens(SintesisParser.OpenBrace); }
		public TerminalNode OpenBrace(int i) {
			return getToken(SintesisParser.OpenBrace, i);
		}
		public List<TerminalNode> CloseBrace() { return getTokens(SintesisParser.CloseBrace); }
		public TerminalNode CloseBrace(int i) {
			return getToken(SintesisParser.CloseBrace, i);
		}
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
		public IdentifiersContext identifiers() {
			return getRuleContext(IdentifiersContext.class,0);
		}
		public MethodsListContext methodsList() {
			return getRuleContext(MethodsListContext.class,0);
		}
		public TerminalNode Methods() { return getToken(SintesisParser.Methods, 0); }
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
		enterRule(_localctx, 54, RULE_classDeclaration);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(445);
			match(Class_);
			setState(446);
			((ClassDeclarationContext)_localctx).id = match(Identifier);
			setState(449);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Extends) {
				{
				setState(447);
				match(Extends);
				setState(448);
				((ClassDeclarationContext)_localctx).ext = match(Identifier);
				}
			}

			setState(451);
			match(OpenBrace);
			setState(463);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,41,_ctx) ) {
			case 1:
				{
				setState(454);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==Attributes) {
					{
					setState(452);
					match(Attributes);
					setState(453);
					match(Colon);
					}
				}

				setState(461);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case OpenBrace:
					{
					setState(456);
					match(OpenBrace);
					setState(457);
					((ClassDeclarationContext)_localctx).atrs = identifiers();
					setState(458);
					match(CloseBrace);
					}
					break;
				case Identifier:
					{
					setState(460);
					((ClassDeclarationContext)_localctx).atrs = identifiers();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
			}
			setState(476);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==OpenBrace || ((((_la - 85)) & ~0x3f) == 0 && ((1L << (_la - 85)) & ((1L << (Method - 85)) | (1L << (Function_ - 85)) | (1L << (Methods - 85)) | (1L << (Constructor - 85)) | (1L << (Identifier - 85)))) != 0)) {
				{
				setState(467);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==Methods) {
					{
					setState(465);
					((ClassDeclarationContext)_localctx).mdec = match(Methods);
					setState(466);
					match(Colon);
					}
				}

				setState(474);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case Method:
				case Function_:
				case Constructor:
				case Identifier:
					{
					setState(469);
					((ClassDeclarationContext)_localctx).methods = methodsList();
					}
					break;
				case OpenBrace:
					{
					setState(470);
					match(OpenBrace);
					setState(471);
					((ClassDeclarationContext)_localctx).methods = methodsList();
					setState(472);
					match(CloseBrace);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
			}

			setState(478);
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
		enterRule(_localctx, 56, RULE_identifiers);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(484); 
			_errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					setState(480);
					match(Identifier);
					setState(482);
					_errHandler.sync(this);
					_la = _input.LA(1);
					if (_la==Comma) {
						{
						setState(481);
						match(Comma);
						}
					}

					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(486); 
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,46,_ctx);
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

	public static class MethodDeclarationContext extends ParserRuleContext {
		public Token id;
		public FormalParameterListContext pl;
		public FunctionBodyContext stmt;
		public TerminalNode OpenParen() { return getToken(SintesisParser.OpenParen, 0); }
		public TerminalNode CloseParen() { return getToken(SintesisParser.CloseParen, 0); }
		public FunctionBodyContext functionBody() {
			return getRuleContext(FunctionBodyContext.class,0);
		}
		public TerminalNode Identifier() { return getToken(SintesisParser.Identifier, 0); }
		public TerminalNode Constructor() { return getToken(SintesisParser.Constructor, 0); }
		public TerminalNode Method() { return getToken(SintesisParser.Method, 0); }
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
		enterRule(_localctx, 58, RULE_methodDeclaration);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(489);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Method || _la==Function_) {
				{
				setState(488);
				_la = _input.LA(1);
				if ( !(_la==Method || _la==Function_) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
			}

			setState(491);
			((MethodDeclarationContext)_localctx).id = _input.LT(1);
			_la = _input.LA(1);
			if ( !(_la==Constructor || _la==Identifier) ) {
				((MethodDeclarationContext)_localctx).id = (Token)_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(492);
			match(OpenParen);
			setState(494);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Identifier) {
				{
				setState(493);
				((MethodDeclarationContext)_localctx).pl = formalParameterList();
				}
			}

			setState(496);
			match(CloseParen);
			setState(497);
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
		enterRule(_localctx, 60, RULE_methodsList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(500); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(499);
				methodDeclaration();
				}
				}
				setState(502); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( ((((_la - 85)) & ~0x3f) == 0 && ((1L << (_la - 85)) & ((1L << (Method - 85)) | (1L << (Function_ - 85)) | (1L << (Constructor - 85)) | (1L << (Identifier - 85)))) != 0) );
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
		enterRule(_localctx, 62, RULE_classExp);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(504);
			match(New_);
			setState(505);
			match(Identifier);
			setState(506);
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
		enterRule(_localctx, 64, RULE_vectorIndex);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(508);
			match(OpenBracket);
			setState(510);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << OpenBracket) | (1L << OpenParen) | (1L << OpenBrace) | (1L << PlusPlus) | (1L << MinusMinus) | (1L << Plus) | (1L << Minus) | (1L << BitNot) | (1L << Not) | (1L << NullLiteral) | (1L << DecimalLiteral) | (1L << HexIntegerLiteral) | (1L << OctalIntegerLiteral) | (1L << OctalIntegerLiteral2) | (1L << BinaryIntegerLiteral))) != 0) || ((((_la - 67)) & ~0x3f) == 0 && ((1L << (_la - 67)) & ((1L << (BooleanLiteral - 67)) | (1L << (Vector - 67)) | (1L << (NumberOf - 67)) | (1L << (IndexOf - 67)) | (1L << (Sub - 67)) | (1L << (Lower - 67)) | (1L << (Upper - 67)) | (1L << (Math - 67)) | (1L << (Min - 67)) | (1L << (Max - 67)) | (1L << (Random - 67)) | (1L << (Chr - 67)) | (1L << (Ord - 67)) | (1L << (Prompt - 67)) | (1L << (Convert - 67)) | (1L << (New_ - 67)) | (1L << (Attributes - 67)) | (1L << (Methods - 67)) | (1L << (Super - 67)) | (1L << (Map - 67)) | (1L << (Identifier - 67)) | (1L << (StringLiteral - 67)))) != 0)) {
				{
				setState(509);
				expression(0);
				}
			}

			setState(512);
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
		enterRule(_localctx, 66, RULE_vectorIndexes);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(515); 
			_errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					setState(514);
					vectorIndex();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(517); 
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,51,_ctx);
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
		enterRule(_localctx, 68, RULE_formalParameterArg);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(519);
			match(Identifier);
			setState(522);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Assign) {
				{
				setState(520);
				match(Assign);
				setState(521);
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
		enterRule(_localctx, 70, RULE_functionBody);
		try {
			setState(526);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,53,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(524);
				block();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(525);
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
		enterRule(_localctx, 72, RULE_assignmentOperator);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(528);
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
		enterRule(_localctx, 74, RULE_reservedWord);
		try {
			setState(533);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case EOF:
			case OpenParen:
			case Colon:
			case While:
			case If:
			case Then:
			case Else:
			case Return:
			case Function_:
			case Vector:
			case Attributes:
			case Methods:
			case Map:
			case Var_:
				enterOuterAlt(_localctx, 1);
				{
				setState(530);
				keyword();
				}
				break;
			case NullLiteral:
				enterOuterAlt(_localctx, 2);
				{
				setState(531);
				match(NullLiteral);
				}
				break;
			case BooleanLiteral:
				enterOuterAlt(_localctx, 3);
				{
				setState(532);
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

	public static class VectorDeclarationContext extends ParserRuleContext {
		public VectorIndexesContext idx;
		public ArgumentsContext args;
		public TerminalNode Vector() { return getToken(SintesisParser.Vector, 0); }
		public VectorIndexesContext vectorIndexes() {
			return getRuleContext(VectorIndexesContext.class,0);
		}
		public ArgumentsContext arguments() {
			return getRuleContext(ArgumentsContext.class,0);
		}
		public VectorDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_vectorDeclaration; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SintesisParserVisitor ) return ((SintesisParserVisitor<? extends T>)visitor).visitVectorDeclaration(this);
			else return visitor.visitChildren(this);
		}
	}

	public final VectorDeclarationContext vectorDeclaration() throws RecognitionException {
		VectorDeclarationContext _localctx = new VectorDeclarationContext(_ctx, getState());
		enterRule(_localctx, 76, RULE_vectorDeclaration);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(535);
			match(Vector);
			setState(536);
			((VectorDeclarationContext)_localctx).idx = vectorIndexes();
			setState(538);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,55,_ctx) ) {
			case 1:
				{
				setState(537);
				((VectorDeclarationContext)_localctx).args = arguments();
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

	public static class MapDeclarationContext extends ParserRuleContext {
		public ArgumentsContext args;
		public TerminalNode Map() { return getToken(SintesisParser.Map, 0); }
		public ArgumentsContext arguments() {
			return getRuleContext(ArgumentsContext.class,0);
		}
		public MapDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_mapDeclaration; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SintesisParserVisitor ) return ((SintesisParserVisitor<? extends T>)visitor).visitMapDeclaration(this);
			else return visitor.visitChildren(this);
		}
	}

	public final MapDeclarationContext mapDeclaration() throws RecognitionException {
		MapDeclarationContext _localctx = new MapDeclarationContext(_ctx, getState());
		enterRule(_localctx, 78, RULE_mapDeclaration);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(540);
			match(Map);
			setState(541);
			((MapDeclarationContext)_localctx).args = arguments();
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

	public static class VectorLiteralContext extends ParserRuleContext {
		public TerminalNode OpenBracket() { return getToken(SintesisParser.OpenBracket, 0); }
		public TerminalNode CloseBracket() { return getToken(SintesisParser.CloseBracket, 0); }
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
		public VectorLiteralContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_vectorLiteral; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SintesisParserVisitor ) return ((SintesisParserVisitor<? extends T>)visitor).visitVectorLiteral(this);
			else return visitor.visitChildren(this);
		}
	}

	public final VectorLiteralContext vectorLiteral() throws RecognitionException {
		VectorLiteralContext _localctx = new VectorLiteralContext(_ctx, getState());
		enterRule(_localctx, 80, RULE_vectorLiteral);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(543);
			match(OpenBracket);
			setState(552);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << OpenBracket) | (1L << OpenParen) | (1L << OpenBrace) | (1L << PlusPlus) | (1L << MinusMinus) | (1L << Plus) | (1L << Minus) | (1L << BitNot) | (1L << Not) | (1L << NullLiteral) | (1L << DecimalLiteral) | (1L << HexIntegerLiteral) | (1L << OctalIntegerLiteral) | (1L << OctalIntegerLiteral2) | (1L << BinaryIntegerLiteral))) != 0) || ((((_la - 67)) & ~0x3f) == 0 && ((1L << (_la - 67)) & ((1L << (BooleanLiteral - 67)) | (1L << (Vector - 67)) | (1L << (NumberOf - 67)) | (1L << (IndexOf - 67)) | (1L << (Sub - 67)) | (1L << (Lower - 67)) | (1L << (Upper - 67)) | (1L << (Math - 67)) | (1L << (Min - 67)) | (1L << (Max - 67)) | (1L << (Random - 67)) | (1L << (Chr - 67)) | (1L << (Ord - 67)) | (1L << (Prompt - 67)) | (1L << (Convert - 67)) | (1L << (New_ - 67)) | (1L << (Attributes - 67)) | (1L << (Methods - 67)) | (1L << (Super - 67)) | (1L << (Map - 67)) | (1L << (Identifier - 67)) | (1L << (StringLiteral - 67)))) != 0)) {
				{
				setState(544);
				expression(0);
				setState(549);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==Comma) {
					{
					{
					setState(545);
					match(Comma);
					setState(546);
					expression(0);
					}
					}
					setState(551);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
			}

			setState(554);
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
		public List<IdentifierWithKeywordsContext> identifierWithKeywords() {
			return getRuleContexts(IdentifierWithKeywordsContext.class);
		}
		public IdentifierWithKeywordsContext identifierWithKeywords(int i) {
			return getRuleContext(IdentifierWithKeywordsContext.class,i);
		}
		public List<TerminalNode> Colon() { return getTokens(SintesisParser.Colon); }
		public TerminalNode Colon(int i) {
			return getToken(SintesisParser.Colon, i);
		}
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
		public ObjectLiteralContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_objectLiteral; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SintesisParserVisitor ) return ((SintesisParserVisitor<? extends T>)visitor).visitObjectLiteral(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ObjectLiteralContext objectLiteral() throws RecognitionException {
		ObjectLiteralContext _localctx = new ObjectLiteralContext(_ctx, getState());
		enterRule(_localctx, 82, RULE_objectLiteral);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(556);
			match(OpenBrace);
			setState(570);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Colon || _la==NullLiteral || ((((_la - 67)) & ~0x3f) == 0 && ((1L << (_la - 67)) & ((1L << (BooleanLiteral - 67)) | (1L << (While - 67)) | (1L << (If - 67)) | (1L << (Then - 67)) | (1L << (Else - 67)) | (1L << (Return - 67)) | (1L << (Function_ - 67)) | (1L << (Vector - 67)) | (1L << (Attributes - 67)) | (1L << (Methods - 67)) | (1L << (Map - 67)) | (1L << (Var_ - 67)) | (1L << (Identifier - 67)))) != 0)) {
				{
				setState(557);
				identifierWithKeywords();
				setState(558);
				match(Colon);
				setState(559);
				expression(0);
				setState(567);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==Comma) {
					{
					{
					setState(560);
					match(Comma);
					setState(561);
					identifierWithKeywords();
					setState(562);
					match(Colon);
					setState(563);
					expression(0);
					}
					}
					setState(569);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
			}

			setState(572);
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
		public VectorLiteralContext vectorLiteral() {
			return getRuleContext(VectorLiteralContext.class,0);
		}
		public ObjectLiteralContext objectLiteral() {
			return getRuleContext(ObjectLiteralContext.class,0);
		}
		public VectorDeclarationContext vectorDeclaration() {
			return getRuleContext(VectorDeclarationContext.class,0);
		}
		public MapDeclarationContext mapDeclaration() {
			return getRuleContext(MapDeclarationContext.class,0);
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
		enterRule(_localctx, 84, RULE_literal);
		try {
			setState(582);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case NullLiteral:
				enterOuterAlt(_localctx, 1);
				{
				setState(574);
				nullLiteral();
				}
				break;
			case BooleanLiteral:
				enterOuterAlt(_localctx, 2);
				{
				setState(575);
				booleanLiteral();
				}
				break;
			case StringLiteral:
				enterOuterAlt(_localctx, 3);
				{
				setState(576);
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
				setState(577);
				numericLiteral();
				}
				break;
			case OpenBracket:
				enterOuterAlt(_localctx, 5);
				{
				setState(578);
				vectorLiteral();
				}
				break;
			case OpenBrace:
				enterOuterAlt(_localctx, 6);
				{
				setState(579);
				objectLiteral();
				}
				break;
			case Vector:
				enterOuterAlt(_localctx, 7);
				{
				setState(580);
				vectorDeclaration();
				}
				break;
			case Map:
				enterOuterAlt(_localctx, 8);
				{
				setState(581);
				mapDeclaration();
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
		enterRule(_localctx, 86, RULE_booleanLiteral);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(584);
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
		enterRule(_localctx, 88, RULE_stringLiteral);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(586);
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
		enterRule(_localctx, 90, RULE_nullLiteral);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(588);
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
		enterRule(_localctx, 92, RULE_numericLiteral);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(590);
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

	public static class IdentifierContext extends ParserRuleContext {
		public TerminalNode Identifier() { return getToken(SintesisParser.Identifier, 0); }
		public IdentifierContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_identifier; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SintesisParserVisitor ) return ((SintesisParserVisitor<? extends T>)visitor).visitIdentifier(this);
			else return visitor.visitChildren(this);
		}
	}

	public final IdentifierContext identifier() throws RecognitionException {
		IdentifierContext _localctx = new IdentifierContext(_ctx, getState());
		enterRule(_localctx, 94, RULE_identifier);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(592);
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

	public static class IdentifierWithKeywordsContext extends ParserRuleContext {
		public IdentifierWithKeywordsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_identifierWithKeywords; }
	 
		public IdentifierWithKeywordsContext() { }
		public void copyFrom(IdentifierWithKeywordsContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class KeywContext extends IdentifierWithKeywordsContext {
		public ReservedWordContext reservedWord() {
			return getRuleContext(ReservedWordContext.class,0);
		}
		public KeywContext(IdentifierWithKeywordsContext ctx) { copyFrom(ctx); }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SintesisParserVisitor ) return ((SintesisParserVisitor<? extends T>)visitor).visitKeyw(this);
			else return visitor.visitChildren(this);
		}
	}
	public static class IdContext extends IdentifierWithKeywordsContext {
		public TerminalNode Identifier() { return getToken(SintesisParser.Identifier, 0); }
		public IdContext(IdentifierWithKeywordsContext ctx) { copyFrom(ctx); }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SintesisParserVisitor ) return ((SintesisParserVisitor<? extends T>)visitor).visitId(this);
			else return visitor.visitChildren(this);
		}
	}

	public final IdentifierWithKeywordsContext identifierWithKeywords() throws RecognitionException {
		IdentifierWithKeywordsContext _localctx = new IdentifierWithKeywordsContext(_ctx, getState());
		enterRule(_localctx, 96, RULE_identifierWithKeywords);
		try {
			setState(596);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case Identifier:
				_localctx = new IdContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(594);
				match(Identifier);
				}
				break;
			case EOF:
			case OpenParen:
			case Colon:
			case NullLiteral:
			case BooleanLiteral:
			case While:
			case If:
			case Then:
			case Else:
			case Return:
			case Function_:
			case Vector:
			case Attributes:
			case Methods:
			case Map:
			case Var_:
				_localctx = new KeywContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(595);
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
		public TerminalNode Map() { return getToken(SintesisParser.Map, 0); }
		public TerminalNode Var_() { return getToken(SintesisParser.Var_, 0); }
		public TerminalNode Methods() { return getToken(SintesisParser.Methods, 0); }
		public TerminalNode Attributes() { return getToken(SintesisParser.Attributes, 0); }
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
		enterRule(_localctx, 98, RULE_keyword);
		try {
			setState(610);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case EOF:
			case OpenParen:
			case Colon:
				enterOuterAlt(_localctx, 1);
				{
				}
				break;
			case Else:
				enterOuterAlt(_localctx, 2);
				{
				setState(599);
				match(Else);
				}
				break;
			case Then:
				enterOuterAlt(_localctx, 3);
				{
				setState(600);
				match(Then);
				}
				break;
			case Return:
				enterOuterAlt(_localctx, 4);
				{
				setState(601);
				match(Return);
				}
				break;
			case While:
				enterOuterAlt(_localctx, 5);
				{
				setState(602);
				match(While);
				}
				break;
			case Function_:
				enterOuterAlt(_localctx, 6);
				{
				setState(603);
				match(Function_);
				}
				break;
			case If:
				enterOuterAlt(_localctx, 7);
				{
				setState(604);
				match(If);
				}
				break;
			case Vector:
				enterOuterAlt(_localctx, 8);
				{
				setState(605);
				match(Vector);
				}
				break;
			case Map:
				enterOuterAlt(_localctx, 9);
				{
				setState(606);
				match(Map);
				}
				break;
			case Var_:
				enterOuterAlt(_localctx, 10);
				{
				setState(607);
				match(Var_);
				}
				break;
			case Methods:
				enterOuterAlt(_localctx, 11);
				{
				setState(608);
				match(Methods);
				}
				break;
			case Attributes:
				enterOuterAlt(_localctx, 12);
				{
				setState(609);
				match(Attributes);
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

	public boolean sempred(RuleContext _localctx, int ruleIndex, int predIndex) {
		switch (ruleIndex) {
		case 8:
			return member_sempred((MemberContext)_localctx, predIndex);
		case 9:
			return expression_sempred((ExpressionContext)_localctx, predIndex);
		}
		return true;
	}
	private boolean member_sempred(MemberContext _localctx, int predIndex) {
		switch (predIndex) {
		case 0:
			return precpred(_ctx, 5);
		case 1:
			return precpred(_ctx, 6);
		case 2:
			return precpred(_ctx, 4);
		case 3:
			return precpred(_ctx, 3);
		case 4:
			return precpred(_ctx, 2);
		}
		return true;
	}
	private boolean expression_sempred(ExpressionContext _localctx, int predIndex) {
		switch (predIndex) {
		case 5:
			return precpred(_ctx, 18);
		case 6:
			return precpred(_ctx, 17);
		case 7:
			return precpred(_ctx, 16);
		case 8:
			return precpred(_ctx, 15);
		case 9:
			return precpred(_ctx, 14);
		case 10:
			return precpred(_ctx, 13);
		case 11:
			return precpred(_ctx, 12);
		case 12:
			return precpred(_ctx, 10);
		case 13:
			return precpred(_ctx, 9);
		case 14:
			return precpred(_ctx, 8);
		case 15:
			return precpred(_ctx, 7);
		case 16:
			return precpred(_ctx, 6);
		case 17:
			return precpred(_ctx, 5);
		case 18:
			return precpred(_ctx, 4);
		case 19:
			return precpred(_ctx, 24);
		case 20:
			return precpred(_ctx, 11);
		}
		return true;
	}

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3w\u0267\4\2\t\2\4"+
		"\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13\t"+
		"\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\4\31\t\31"+
		"\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4\36\t\36\4\37\t\37\4 \t \4!"+
		"\t!\4\"\t\"\4#\t#\4$\t$\4%\t%\4&\t&\4\'\t\'\4(\t(\4)\t)\4*\t*\4+\t+\4"+
		",\t,\4-\t-\4.\t.\4/\t/\4\60\t\60\4\61\t\61\4\62\t\62\4\63\t\63\3\2\3\2"+
		"\3\2\3\3\6\3k\n\3\r\3\16\3l\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\5\4x\n"+
		"\4\3\5\3\5\5\5|\n\5\3\5\3\5\3\6\3\6\3\6\3\7\3\7\3\7\3\b\3\b\3\b\3\b\3"+
		"\b\5\b\u008b\n\b\3\t\3\t\3\t\3\t\5\t\u0091\n\t\5\t\u0093\n\t\3\n\3\n\3"+
		"\n\3\n\3\n\3\n\3\n\3\n\5\n\u009d\n\n\3\n\3\n\3\n\3\n\3\n\3\n\3\n\3\n\3"+
		"\n\3\n\3\n\3\n\3\n\3\n\3\n\3\n\3\n\3\n\3\n\3\n\3\n\7\n\u00b4\n\n\f\n\16"+
		"\n\u00b7\13\n\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3"+
		"\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\5\13\u00d1"+
		"\n\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13"+
		"\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13"+
		"\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13"+
		"\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\7\13\u0106\n\13\f\13"+
		"\16\13\u0109\13\13\3\f\3\f\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3\r\5\r\u0115\n"+
		"\r\3\16\3\16\5\16\u0119\n\16\3\17\3\17\3\20\3\20\3\20\3\20\5\20\u0121"+
		"\n\20\3\21\3\21\3\21\7\21\u0126\n\21\f\21\16\21\u0129\13\21\3\22\3\22"+
		"\3\22\5\22\u012e\n\22\3\22\3\22\5\22\u0132\n\22\3\22\5\22\u0135\n\22\3"+
		"\23\6\23\u0138\n\23\r\23\16\23\u0139\3\24\3\24\3\24\5\24\u013f\n\24\3"+
		"\24\3\24\3\25\3\25\3\25\3\26\3\26\3\26\3\26\3\26\3\26\3\26\3\26\3\26\3"+
		"\26\3\26\3\26\3\26\5\26\u0153\n\26\3\27\3\27\3\27\3\27\3\27\3\27\3\30"+
		"\3\30\3\30\5\30\u015e\n\30\3\30\3\30\3\30\3\30\3\30\3\30\3\30\3\30\5\30"+
		"\u0168\n\30\3\30\3\30\3\30\5\30\u016d\n\30\3\30\3\30\3\30\3\30\3\30\5"+
		"\30\u0174\n\30\3\30\3\30\3\30\3\30\3\30\3\30\3\30\5\30\u017d\n\30\3\30"+
		"\3\30\3\30\3\30\5\30\u0183\n\30\3\30\5\30\u0186\n\30\3\30\3\30\5\30\u018a"+
		"\n\30\3\30\3\30\3\30\3\30\5\30\u0190\n\30\3\30\5\30\u0193\n\30\3\30\3"+
		"\30\3\30\3\30\5\30\u0199\n\30\3\30\3\30\5\30\u019d\n\30\3\31\3\31\3\31"+
		"\3\32\3\32\3\32\7\32\u01a5\n\32\f\32\16\32\u01a8\13\32\3\33\3\33\3\33"+
		"\3\33\5\33\u01ae\n\33\3\33\3\33\3\33\3\34\3\34\3\34\3\34\7\34\u01b7\n"+
		"\34\f\34\16\34\u01ba\13\34\5\34\u01bc\n\34\3\34\3\34\3\35\3\35\3\35\3"+
		"\35\5\35\u01c4\n\35\3\35\3\35\3\35\5\35\u01c9\n\35\3\35\3\35\3\35\3\35"+
		"\3\35\5\35\u01d0\n\35\5\35\u01d2\n\35\3\35\3\35\5\35\u01d6\n\35\3\35\3"+
		"\35\3\35\3\35\3\35\5\35\u01dd\n\35\5\35\u01df\n\35\3\35\3\35\3\36\3\36"+
		"\5\36\u01e5\n\36\6\36\u01e7\n\36\r\36\16\36\u01e8\3\37\5\37\u01ec\n\37"+
		"\3\37\3\37\3\37\5\37\u01f1\n\37\3\37\3\37\3\37\3 \6 \u01f7\n \r \16 \u01f8"+
		"\3!\3!\3!\3!\3\"\3\"\5\"\u0201\n\"\3\"\3\"\3#\6#\u0206\n#\r#\16#\u0207"+
		"\3$\3$\3$\5$\u020d\n$\3%\3%\5%\u0211\n%\3&\3&\3\'\3\'\3\'\5\'\u0218\n"+
		"\'\3(\3(\3(\5(\u021d\n(\3)\3)\3)\3*\3*\3*\3*\7*\u0226\n*\f*\16*\u0229"+
		"\13*\5*\u022b\n*\3*\3*\3+\3+\3+\3+\3+\3+\3+\3+\3+\7+\u0238\n+\f+\16+\u023b"+
		"\13+\5+\u023d\n+\3+\3+\3,\3,\3,\3,\3,\3,\3,\3,\5,\u0249\n,\3-\3-\3.\3"+
		".\3/\3/\3\60\3\60\3\61\3\61\3\62\3\62\5\62\u0257\n\62\3\63\3\63\3\63\3"+
		"\63\3\63\3\63\3\63\3\63\3\63\3\63\3\63\3\63\5\63\u0265\n\63\3\63\2\4\22"+
		"\24\64\2\4\6\b\n\f\16\20\22\24\26\30\32\34\36 \"$&(*,.\60\62\64\668:<"+
		">@BDFHJLNPRTVXZ\\^`bd\2\24\4\2<<tt\4\2actt\3\2\22\23\3\2\30\32\3\2\24"+
		"\25\3\2\36 \3\2!\"\3\2\'(\3\2%&\3\2)+\3\2,-\3\2OP\4\2\r\rOO\4\2IIKK\3"+
		"\2WX\4\2mmtt\3\2.9\3\2<@\2\u02b5\2f\3\2\2\2\4j\3\2\2\2\6w\3\2\2\2\by\3"+
		"\2\2\2\n\177\3\2\2\2\f\u0082\3\2\2\2\16\u008a\3\2\2\2\20\u0092\3\2\2\2"+
		"\22\u009c\3\2\2\2\24\u00d0\3\2\2\2\26\u010a\3\2\2\2\30\u0114\3\2\2\2\32"+
		"\u0118\3\2\2\2\34\u011a\3\2\2\2\36\u0120\3\2\2\2 \u0122\3\2\2\2\"\u012a"+
		"\3\2\2\2$\u0137\3\2\2\2&\u013b\3\2\2\2(\u0142\3\2\2\2*\u0152\3\2\2\2,"+
		"\u0154\3\2\2\2.\u019c\3\2\2\2\60\u019e\3\2\2\2\62\u01a1\3\2\2\2\64\u01a9"+
		"\3\2\2\2\66\u01b2\3\2\2\28\u01bf\3\2\2\2:\u01e6\3\2\2\2<\u01eb\3\2\2\2"+
		">\u01f6\3\2\2\2@\u01fa\3\2\2\2B\u01fe\3\2\2\2D\u0205\3\2\2\2F\u0209\3"+
		"\2\2\2H\u0210\3\2\2\2J\u0212\3\2\2\2L\u0217\3\2\2\2N\u0219\3\2\2\2P\u021e"+
		"\3\2\2\2R\u0221\3\2\2\2T\u022e\3\2\2\2V\u0248\3\2\2\2X\u024a\3\2\2\2Z"+
		"\u024c\3\2\2\2\\\u024e\3\2\2\2^\u0250\3\2\2\2`\u0252\3\2\2\2b\u0256\3"+
		"\2\2\2d\u0264\3\2\2\2fg\5\4\3\2gh\7\2\2\3h\3\3\2\2\2ik\5\6\4\2ji\3\2\2"+
		"\2kl\3\2\2\2lj\3\2\2\2lm\3\2\2\2m\5\3\2\2\2nx\5\b\5\2ox\5\n\6\2px\5\f"+
		"\7\2qx\5\"\22\2rx\5.\30\2sx\5\60\31\2tx\58\35\2ux\5\64\33\2vx\5\24\13"+
		"\2wn\3\2\2\2wo\3\2\2\2wp\3\2\2\2wq\3\2\2\2wr\3\2\2\2ws\3\2\2\2wt\3\2\2"+
		"\2wu\3\2\2\2wv\3\2\2\2x\7\3\2\2\2y{\7\t\2\2z|\5\4\3\2{z\3\2\2\2{|\3\2"+
		"\2\2|}\3\2\2\2}~\7\n\2\2~\t\3\2\2\2\177\u0080\7F\2\2\u0080\u0081\t\2\2"+
		"\2\u0081\13\3\2\2\2\u0082\u0083\7G\2\2\u0083\u0084\5 \21\2\u0084\r\3\2"+
		"\2\2\u0085\u0086\5b\62\2\u0086\u0087\5\66\34\2\u0087\u008b\3\2\2\2\u0088"+
		"\u0089\7n\2\2\u0089\u008b\5\66\34\2\u008a\u0085\3\2\2\2\u008a\u0088\3"+
		"\2\2\2\u008b\17\3\2\2\2\u008c\u0093\5\66\34\2\u008d\u008e\7\21\2\2\u008e"+
		"\u0090\5b\62\2\u008f\u0091\5\66\34\2\u0090\u008f\3\2\2\2\u0090\u0091\3"+
		"\2\2\2\u0091\u0093\3\2\2\2\u0092\u008c\3\2\2\2\u0092\u008d\3\2\2\2\u0093"+
		"\21\3\2\2\2\u0094\u0095\b\n\1\2\u0095\u009d\7k\2\2\u0096\u009d\7l\2\2"+
		"\u0097\u009d\7n\2\2\u0098\u0099\7h\2\2\u0099\u009a\7t\2\2\u009a\u009d"+
		"\5\66\34\2\u009b\u009d\5`\61\2\u009c\u0094\3\2\2\2\u009c\u0096\3\2\2\2"+
		"\u009c\u0097\3\2\2\2\u009c\u0098\3\2\2\2\u009c\u009b\3\2\2\2\u009d\u00b5"+
		"\3\2\2\2\u009e\u009f\f\7\2\2\u009f\u00a0\7\21\2\2\u00a0\u00b4\5\22\n\b"+
		"\u00a1\u00a2\f\b\2\2\u00a2\u00a3\7\21\2\2\u00a3\u00a4\5\22\n\2\u00a4\u00a5"+
		"\5\66\34\2\u00a5\u00b4\3\2\2\2\u00a6\u00a7\f\6\2\2\u00a7\u00a8\7\5\2\2"+
		"\u00a8\u00a9\5\24\13\2\u00a9\u00aa\7\6\2\2\u00aa\u00ab\5\66\34\2\u00ab"+
		"\u00b4\3\2\2\2\u00ac\u00ad\f\5\2\2\u00ad\u00ae\7\5\2\2\u00ae\u00af\5\24"+
		"\13\2\u00af\u00b0\7\6\2\2\u00b0\u00b4\3\2\2\2\u00b1\u00b2\f\4\2\2\u00b2"+
		"\u00b4\5\66\34\2\u00b3\u009e\3\2\2\2\u00b3\u00a1\3\2\2\2\u00b3\u00a6\3"+
		"\2\2\2\u00b3\u00ac\3\2\2\2\u00b3\u00b1\3\2\2\2\u00b4\u00b7\3\2\2\2\u00b5"+
		"\u00b3\3\2\2\2\u00b5\u00b6\3\2\2\2\u00b6\23\3\2\2\2\u00b7\u00b5\3\2\2"+
		"\2\u00b8\u00b9\b\13\1\2\u00b9\u00ba\5\36\20\2\u00ba\u00bb\5\66\34\2\u00bb"+
		"\u00d1\3\2\2\2\u00bc\u00bd\7`\2\2\u00bd\u00be\7\21\2\2\u00be\u00bf\t\3"+
		"\2\2\u00bf\u00d1\5\66\34\2\u00c0\u00c1\t\4\2\2\u00c1\u00d1\5\24\13\31"+
		"\u00c2\u00c3\7\24\2\2\u00c3\u00d1\5\24\13\30\u00c4\u00c5\7\25\2\2\u00c5"+
		"\u00d1\5\24\13\27\u00c6\u00c7\7\26\2\2\u00c7\u00d1\5\24\13\26\u00c8\u00c9"+
		"\7\27\2\2\u00c9\u00d1\5\24\13\25\u00ca\u00cb\7\7\2\2\u00cb\u00cc\5\24"+
		"\13\2\u00cc\u00cd\7\b\2\2\u00cd\u00d1\3\2\2\2\u00ce\u00d1\5\22\n\2\u00cf"+
		"\u00d1\5V,\2\u00d0\u00b8\3\2\2\2\u00d0\u00bc\3\2\2\2\u00d0\u00c0\3\2\2"+
		"\2\u00d0\u00c2\3\2\2\2\u00d0\u00c4\3\2\2\2\u00d0\u00c6\3\2\2\2\u00d0\u00c8"+
		"\3\2\2\2\u00d0\u00ca\3\2\2\2\u00d0\u00ce\3\2\2\2\u00d0\u00cf\3\2\2\2\u00d1"+
		"\u0107\3\2\2\2\u00d2\u00d3\f\24\2\2\u00d3\u00d4\t\5\2\2\u00d4\u0106\5"+
		"\24\13\25\u00d5\u00d6\f\23\2\2\u00d6\u00d7\t\6\2\2\u00d7\u0106\5\24\13"+
		"\24\u00d8\u00d9\f\22\2\2\u00d9\u00da\t\7\2\2\u00da\u0106\5\24\13\23\u00db"+
		"\u00dc\f\21\2\2\u00dc\u00dd\7\33\2\2\u00dd\u0106\5\24\13\21\u00de\u00df"+
		"\f\20\2\2\u00df\u00e0\t\b\2\2\u00e0\u0106\5\24\13\21\u00e1\u00e2\f\17"+
		"\2\2\u00e2\u00e3\7#\2\2\u00e3\u0106\5\24\13\20\u00e4\u00e5\f\16\2\2\u00e5"+
		"\u00e6\7$\2\2\u00e6\u0106\5\24\13\17\u00e7\u00e8\f\f\2\2\u00e8\u00e9\t"+
		"\t\2\2\u00e9\u0106\5\24\13\r\u00ea\u00eb\f\13\2\2\u00eb\u00ec\t\n\2\2"+
		"\u00ec\u0106\5\24\13\f\u00ed\u00ee\f\n\2\2\u00ee\u00ef\t\13\2\2\u00ef"+
		"\u0106\5\24\13\13\u00f0\u00f1\f\t\2\2\u00f1\u00f2\t\f\2\2\u00f2\u0106"+
		"\5\24\13\n\u00f3\u00f4\f\b\2\2\u00f4\u00f5\7\16\2\2\u00f5\u00f6\5\24\13"+
		"\2\u00f6\u00f7\7\17\2\2\u00f7\u00f8\5\24\13\t\u00f8\u0106\3\2\2\2\u00f9"+
		"\u00fa\f\7\2\2\u00fa\u00fb\7\r\2\2\u00fb\u0106\5\24\13\7\u00fc\u00fd\f"+
		"\6\2\2\u00fd\u00fe\5J&\2\u00fe\u00ff\5\24\13\6\u00ff\u0106\3\2\2\2\u0100"+
		"\u0101\f\32\2\2\u0101\u0106\t\4\2\2\u0102\u0103\f\r\2\2\u0103\u0104\7"+
		"o\2\2\u0104\u0106\5`\61\2\u0105\u00d2\3\2\2\2\u0105\u00d5\3\2\2\2\u0105"+
		"\u00d8\3\2\2\2\u0105\u00db\3\2\2\2\u0105\u00de\3\2\2\2\u0105\u00e1\3\2"+
		"\2\2\u0105\u00e4\3\2\2\2\u0105\u00e7\3\2\2\2\u0105\u00ea\3\2\2\2\u0105"+
		"\u00ed\3\2\2\2\u0105\u00f0\3\2\2\2\u0105\u00f3\3\2\2\2\u0105\u00f9\3\2"+
		"\2\2\u0105\u00fc\3\2\2\2\u0105\u0100\3\2\2\2\u0105\u0102\3\2\2\2\u0106"+
		"\u0109\3\2\2\2\u0107\u0105\3\2\2\2\u0107\u0108\3\2\2\2\u0108\25\3\2\2"+
		"\2\u0109\u0107\3\2\2\2\u010a\u010b\7c\2\2\u010b\27\3\2\2\2\u010c\u0115"+
		"\7[\2\2\u010d\u0115\7^\2\2\u010e\u0115\7_\2\2\u010f\u0115\7b\2\2\u0110"+
		"\u0115\7a\2\2\u0111\u0115\7e\2\2\u0112\u0115\7d\2\2\u0113\u0115\7f\2\2"+
		"\u0114\u010c\3\2\2\2\u0114\u010d\3\2\2\2\u0114\u010e\3\2\2\2\u0114\u010f"+
		"\3\2\2\2\u0114\u0110\3\2\2\2\u0114\u0111\3\2\2\2\u0114\u0112\3\2\2\2\u0114"+
		"\u0113\3\2\2\2\u0115\31\3\2\2\2\u0116\u0119\7\\\2\2\u0117\u0119\7g\2\2"+
		"\u0118\u0116\3\2\2\2\u0118\u0117\3\2\2\2\u0119\33\3\2\2\2\u011a\u011b"+
		"\7]\2\2\u011b\35\3\2\2\2\u011c\u0121\5\26\f\2\u011d\u0121\5\30\r\2\u011e"+
		"\u0121\5\32\16\2\u011f\u0121\5\34\17\2\u0120\u011c\3\2\2\2\u0120\u011d"+
		"\3\2\2\2\u0120\u011e\3\2\2\2\u0120\u011f\3\2\2\2\u0121\37\3\2\2\2\u0122"+
		"\u0127\5\24\13\2\u0123\u0124\7\f\2\2\u0124\u0126\5\24\13\2\u0125\u0123"+
		"\3\2\2\2\u0126\u0129\3\2\2\2\u0127\u0125\3\2\2\2\u0127\u0128\3\2\2\2\u0128"+
		"!\3\2\2\2\u0129\u0127\3\2\2\2\u012a\u012b\7R\2\2\u012b\u012d\5\24\13\2"+
		"\u012c\u012e\7S\2\2\u012d\u012c\3\2\2\2\u012d\u012e\3\2\2\2\u012e\u012f"+
		"\3\2\2\2\u012f\u0131\5\6\4\2\u0130\u0132\5$\23\2\u0131\u0130\3\2\2\2\u0131"+
		"\u0132\3\2\2\2\u0132\u0134\3\2\2\2\u0133\u0135\5(\25\2\u0134\u0133\3\2"+
		"\2\2\u0134\u0135\3\2\2\2\u0135#\3\2\2\2\u0136\u0138\5&\24\2\u0137\u0136"+
		"\3\2\2\2\u0138\u0139\3\2\2\2\u0139\u0137\3\2\2\2\u0139\u013a\3\2\2\2\u013a"+
		"%\3\2\2\2\u013b\u013c\7T\2\2\u013c\u013e\5\24\13\2\u013d\u013f\7S\2\2"+
		"\u013e\u013d\3\2\2\2\u013e\u013f\3\2\2\2\u013f\u0140\3\2\2\2\u0140\u0141"+
		"\5\6\4\2\u0141\'\3\2\2\2\u0142\u0143\7U\2\2\u0143\u0144\5\6\4\2\u0144"+
		")\3\2\2\2\u0145\u0146\7t\2\2\u0146\u0147\t\r\2\2\u0147\u0153\5\24\13\2"+
		"\u0148\u0149\7t\2\2\u0149\u014a\7\f\2\2\u014a\u014b\7t\2\2\u014b\u014c"+
		"\t\r\2\2\u014c\u0153\5\24\13\2\u014d\u014e\7t\2\2\u014e\u014f\7:\2\2\u014f"+
		"\u0150\7t\2\2\u0150\u0151\t\r\2\2\u0151\u0153\5\24\13\2\u0152\u0145\3"+
		"\2\2\2\u0152\u0148\3\2\2\2\u0152\u014d\3\2\2\2\u0153+\3\2\2\2\u0154\u0155"+
		"\7t\2\2\u0155\u0156\t\16\2\2\u0156\u0157\5\24\13\2\u0157\u0158\7Q\2\2"+
		"\u0158\u0159\5\24\13\2\u0159-\3\2\2\2\u015a\u015b\7I\2\2\u015b\u015d\5"+
		"\24\13\2\u015c\u015e\7J\2\2\u015d\u015c\3\2\2\2\u015d\u015e\3\2\2\2\u015e"+
		"\u015f\3\2\2\2\u015f\u0160\5\6\4\2\u0160\u019d\3\2\2\2\u0161\u0162\t\17"+
		"\2\2\u0162\u0163\5\6\4\2\u0163\u0164\7H\2\2\u0164\u0165\5\24\13\2\u0165"+
		"\u019d\3\2\2\2\u0166\u0168\7I\2\2\u0167\u0166\3\2\2\2\u0167\u0168\3\2"+
		"\2\2\u0168\u0169\3\2\2\2\u0169\u016a\7H\2\2\u016a\u016c\5\24\13\2\u016b"+
		"\u016d\t\17\2\2\u016c\u016b\3\2\2\2\u016c\u016d\3\2\2\2\u016d\u016e\3"+
		"\2\2\2\u016e\u016f\5\6\4\2\u016f\u019d\3\2\2\2\u0170\u0171\7L\2\2\u0171"+
		"\u0173\5,\27\2\u0172\u0174\t\17\2\2\u0173\u0172\3\2\2\2\u0173\u0174\3"+
		"\2\2\2\u0174\u0175\3\2\2\2\u0175\u0176\5\6\4\2\u0176\u019d\3\2\2\2\u0177"+
		"\u0178\7L\2\2\u0178\u0179\7\7\2\2\u0179\u017a\5,\27\2\u017a\u017c\7\b"+
		"\2\2\u017b\u017d\t\17\2\2\u017c\u017b\3\2\2\2\u017c\u017d\3\2\2\2\u017d"+
		"\u017e\3\2\2\2\u017e\u017f\5\6\4\2\u017f\u019d\3\2\2\2\u0180\u0182\7L"+
		"\2\2\u0181\u0183\7M\2\2\u0182\u0181\3\2\2\2\u0182\u0183\3\2\2\2\u0183"+
		"\u0186\3\2\2\2\u0184\u0186\7N\2\2\u0185\u0180\3\2\2\2\u0185\u0184\3\2"+
		"\2\2\u0186\u0187\3\2\2\2\u0187\u0189\5*\26\2\u0188\u018a\t\17\2\2\u0189"+
		"\u0188\3\2\2\2\u0189\u018a\3\2\2\2\u018a\u018b\3\2\2\2\u018b\u018c\5\6"+
		"\4\2\u018c\u019d\3\2\2\2\u018d\u018f\7L\2\2\u018e\u0190\7M\2\2\u018f\u018e"+
		"\3\2\2\2\u018f\u0190\3\2\2\2\u0190\u0193\3\2\2\2\u0191\u0193\7N\2\2\u0192"+
		"\u018d\3\2\2\2\u0192\u0191\3\2\2\2\u0193\u0194\3\2\2\2\u0194\u0195\7\7"+
		"\2\2\u0195\u0196\5*\26\2\u0196\u0198\7\b\2\2\u0197\u0199\t\17\2\2\u0198"+
		"\u0197\3\2\2\2\u0198\u0199\3\2\2\2\u0199\u019a\3\2\2\2\u019a\u019b\5\6"+
		"\4\2\u019b\u019d\3\2\2\2\u019c\u015a\3\2\2\2\u019c\u0161\3\2\2\2\u019c"+
		"\u0167\3\2\2\2\u019c\u0170\3\2\2\2\u019c\u0177\3\2\2\2\u019c\u0185\3\2"+
		"\2\2\u019c\u0192\3\2\2\2\u019d/\3\2\2\2\u019e\u019f\7V\2\2\u019f\u01a0"+
		"\5\24\13\2\u01a0\61\3\2\2\2\u01a1\u01a6\5F$\2\u01a2\u01a3\7\f\2\2\u01a3"+
		"\u01a5\5F$\2\u01a4\u01a2\3\2\2\2\u01a5\u01a8\3\2\2\2\u01a6\u01a4\3\2\2"+
		"\2\u01a6\u01a7\3\2\2\2\u01a7\63\3\2\2\2\u01a8\u01a6\3\2\2\2\u01a9\u01aa"+
		"\7X\2\2\u01aa\u01ab\7t\2\2\u01ab\u01ad\7\7\2\2\u01ac\u01ae\5\62\32\2\u01ad"+
		"\u01ac\3\2\2\2\u01ad\u01ae\3\2\2\2\u01ae\u01af\3\2\2\2\u01af\u01b0\7\b"+
		"\2\2\u01b0\u01b1\5H%\2\u01b1\65\3\2\2\2\u01b2\u01bb\7\7\2\2\u01b3\u01b8"+
		"\5\24\13\2\u01b4\u01b5\7\f\2\2\u01b5\u01b7\5\24\13\2\u01b6\u01b4\3\2\2"+
		"\2\u01b7\u01ba\3\2\2\2\u01b8\u01b6\3\2\2\2\u01b8\u01b9\3\2\2\2\u01b9\u01bc"+
		"\3\2\2\2\u01ba\u01b8\3\2\2\2\u01bb\u01b3\3\2\2\2\u01bb\u01bc\3\2\2\2\u01bc"+
		"\u01bd\3\2\2\2\u01bd\u01be\7\b\2\2\u01be\67\3\2\2\2\u01bf\u01c0\7i\2\2"+
		"\u01c0\u01c3\7t\2\2\u01c1\u01c2\7j\2\2\u01c2\u01c4\7t\2\2\u01c3\u01c1"+
		"\3\2\2\2\u01c3\u01c4\3\2\2\2\u01c4\u01c5\3\2\2\2\u01c5\u01d1\7\t\2\2\u01c6"+
		"\u01c7\7k\2\2\u01c7\u01c9\7\17\2\2\u01c8\u01c6\3\2\2\2\u01c8\u01c9\3\2"+
		"\2\2\u01c9\u01cf\3\2\2\2\u01ca\u01cb\7\t\2\2\u01cb\u01cc\5:\36\2\u01cc"+
		"\u01cd\7\n\2\2\u01cd\u01d0\3\2\2\2\u01ce\u01d0\5:\36\2\u01cf\u01ca\3\2"+
		"\2\2\u01cf\u01ce\3\2\2\2\u01d0\u01d2\3\2\2\2\u01d1\u01c8\3\2\2\2\u01d1"+
		"\u01d2\3\2\2\2\u01d2\u01de\3\2\2\2\u01d3\u01d4\7l\2\2\u01d4\u01d6\7\17"+
		"\2\2\u01d5\u01d3\3\2\2\2\u01d5\u01d6\3\2\2\2\u01d6\u01dc\3\2\2\2\u01d7"+
		"\u01dd\5> \2\u01d8\u01d9\7\t\2\2\u01d9\u01da\5> \2\u01da\u01db\7\n\2\2"+
		"\u01db\u01dd\3\2\2\2\u01dc\u01d7\3\2\2\2\u01dc\u01d8\3\2\2\2\u01dd\u01df"+
		"\3\2\2\2\u01de\u01d5\3\2\2\2\u01de\u01df\3\2\2\2\u01df\u01e0\3\2\2\2\u01e0"+
		"\u01e1\7\n\2\2\u01e19\3\2\2\2\u01e2\u01e4\7t\2\2\u01e3\u01e5\7\f\2\2\u01e4"+
		"\u01e3\3\2\2\2\u01e4\u01e5\3\2\2\2\u01e5\u01e7\3\2\2\2\u01e6\u01e2\3\2"+
		"\2\2\u01e7\u01e8\3\2\2\2\u01e8\u01e6\3\2\2\2\u01e8\u01e9\3\2\2\2\u01e9"+
		";\3\2\2\2\u01ea\u01ec\t\20\2\2\u01eb\u01ea\3\2\2\2\u01eb\u01ec\3\2\2\2"+
		"\u01ec\u01ed\3\2\2\2\u01ed\u01ee\t\21\2\2\u01ee\u01f0\7\7\2\2\u01ef\u01f1"+
		"\5\62\32\2\u01f0\u01ef\3\2\2\2\u01f0\u01f1\3\2\2\2\u01f1\u01f2\3\2\2\2"+
		"\u01f2\u01f3\7\b\2\2\u01f3\u01f4\5H%\2\u01f4=\3\2\2\2\u01f5\u01f7\5<\37"+
		"\2\u01f6\u01f5\3\2\2\2\u01f7\u01f8\3\2\2\2\u01f8\u01f6\3\2\2\2\u01f8\u01f9"+
		"\3\2\2\2\u01f9?\3\2\2\2\u01fa\u01fb\7h\2\2\u01fb\u01fc\7t\2\2\u01fc\u01fd"+
		"\5\66\34\2\u01fdA\3\2\2\2\u01fe\u0200\7\5\2\2\u01ff\u0201\5\24\13\2\u0200"+
		"\u01ff\3\2\2\2\u0200\u0201\3\2\2\2\u0201\u0202\3\2\2\2\u0202\u0203\7\6"+
		"\2\2\u0203C\3\2\2\2\u0204\u0206\5B\"\2\u0205\u0204\3\2\2\2\u0206\u0207"+
		"\3\2\2\2\u0207\u0205\3\2\2\2\u0207\u0208\3\2\2\2\u0208E\3\2\2\2\u0209"+
		"\u020c\7t\2\2\u020a\u020b\7\r\2\2\u020b\u020d\5\24\13\2\u020c\u020a\3"+
		"\2\2\2\u020c\u020d\3\2\2\2\u020dG\3\2\2\2\u020e\u0211\5\b\5\2\u020f\u0211"+
		"\5\6\4\2\u0210\u020e\3\2\2\2\u0210\u020f\3\2\2\2\u0211I\3\2\2\2\u0212"+
		"\u0213\t\22\2\2\u0213K\3\2\2\2\u0214\u0218\5d\63\2\u0215\u0218\7;\2\2"+
		"\u0216\u0218\7E\2\2\u0217\u0214\3\2\2\2\u0217\u0215\3\2\2\2\u0217\u0216"+
		"\3\2\2\2\u0218M\3\2\2\2\u0219\u021a\7Y\2\2\u021a\u021c\5D#\2\u021b\u021d"+
		"\5\66\34\2\u021c\u021b\3\2\2\2\u021c\u021d\3\2\2\2\u021dO\3\2\2\2\u021e"+
		"\u021f\7p\2\2\u021f\u0220\5\66\34\2\u0220Q\3\2\2\2\u0221\u022a\7\5\2\2"+
		"\u0222\u0227\5\24\13\2\u0223\u0224\7\f\2\2\u0224\u0226\5\24\13\2\u0225"+
		"\u0223\3\2\2\2\u0226\u0229\3\2\2\2\u0227\u0225\3\2\2\2\u0227\u0228\3\2"+
		"\2\2\u0228\u022b\3\2\2\2\u0229\u0227\3\2\2\2\u022a\u0222\3\2\2\2\u022a"+
		"\u022b\3\2\2\2\u022b\u022c\3\2\2\2\u022c\u022d\7\6\2\2\u022dS\3\2\2\2"+
		"\u022e\u023c\7\t\2\2\u022f\u0230\5b\62\2\u0230\u0231\7\17\2\2\u0231\u0239"+
		"\5\24\13\2\u0232\u0233\7\f\2\2\u0233\u0234\5b\62\2\u0234\u0235\7\17\2"+
		"\2\u0235\u0236\5\24\13\2\u0236\u0238\3\2\2\2\u0237\u0232\3\2\2\2\u0238"+
		"\u023b\3\2\2\2\u0239\u0237\3\2\2\2\u0239\u023a\3\2\2\2\u023a\u023d\3\2"+
		"\2\2\u023b\u0239\3\2\2\2\u023c\u022f\3\2\2\2\u023c\u023d\3\2\2\2\u023d"+
		"\u023e\3\2\2\2\u023e\u023f\7\n\2\2\u023fU\3\2\2\2\u0240\u0249\5\\/\2\u0241"+
		"\u0249\5X-\2\u0242\u0249\5Z.\2\u0243\u0249\5^\60\2\u0244\u0249\5R*\2\u0245"+
		"\u0249\5T+\2\u0246\u0249\5N(\2\u0247\u0249\5P)\2\u0248\u0240\3\2\2\2\u0248"+
		"\u0241\3\2\2\2\u0248\u0242\3\2\2\2\u0248\u0243\3\2\2\2\u0248\u0244\3\2"+
		"\2\2\u0248\u0245\3\2\2\2\u0248\u0246\3\2\2\2\u0248\u0247\3\2\2\2\u0249"+
		"W\3\2\2\2\u024a\u024b\7E\2\2\u024bY\3\2\2\2\u024c\u024d\7u\2\2\u024d["+
		"\3\2\2\2\u024e\u024f\7;\2\2\u024f]\3\2\2\2\u0250\u0251\t\23\2\2\u0251"+
		"_\3\2\2\2\u0252\u0253\7t\2\2\u0253a\3\2\2\2\u0254\u0257\7t\2\2\u0255\u0257"+
		"\5L\'\2\u0256\u0254\3\2\2\2\u0256\u0255\3\2\2\2\u0257c\3\2\2\2\u0258\u0265"+
		"\3\2\2\2\u0259\u0265\7U\2\2\u025a\u0265\7S\2\2\u025b\u0265\7V\2\2\u025c"+
		"\u0265\7H\2\2\u025d\u0265\7X\2\2\u025e\u0265\7R\2\2\u025f\u0265\7Y\2\2"+
		"\u0260\u0265\7p\2\2\u0261\u0265\7s\2\2\u0262\u0265\7l\2\2\u0263\u0265"+
		"\7k\2\2\u0264\u0258\3\2\2\2\u0264\u0259\3\2\2\2\u0264\u025a\3\2\2\2\u0264"+
		"\u025b\3\2\2\2\u0264\u025c\3\2\2\2\u0264\u025d\3\2\2\2\u0264\u025e\3\2"+
		"\2\2\u0264\u025f\3\2\2\2\u0264\u0260\3\2\2\2\u0264\u0261\3\2\2\2\u0264"+
		"\u0262\3\2\2\2\u0264\u0263\3\2\2\2\u0265e\3\2\2\2Alw{\u008a\u0090\u0092"+
		"\u009c\u00b3\u00b5\u00d0\u0105\u0107\u0114\u0118\u0120\u0127\u012d\u0131"+
		"\u0134\u0139\u013e\u0152\u015d\u0167\u016c\u0173\u017c\u0182\u0185\u0189"+
		"\u018f\u0192\u0198\u019c\u01a6\u01ad\u01b8\u01bb\u01c3\u01c8\u01cf\u01d1"+
		"\u01d5\u01dc\u01de\u01e4\u01e8\u01eb\u01f0\u01f8\u0200\u0207\u020c\u0210"+
		"\u0217\u021c\u0227\u022a\u0239\u023c\u0248\u0256\u0264";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}