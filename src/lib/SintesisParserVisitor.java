// Generated from ./src/grammar/SintesisParser.g4 by ANTLR 4.9.3
import org.antlr.v4.runtime.tree.ParseTreeVisitor;

/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by {@link SintesisParser}.
 *
 * @param <T> The return type of the visit operation. Use {@link Void} for
 * operations with no return type.
 */
public interface SintesisParserVisitor<T> extends ParseTreeVisitor<T> {
	/**
	 * Visit a parse tree produced by {@link SintesisParser#program}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitProgram(SintesisParser.ProgramContext ctx);
	/**
	 * Visit a parse tree produced by {@link SintesisParser#statementList}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitStatementList(SintesisParser.StatementListContext ctx);
	/**
	 * Visit a parse tree produced by {@link SintesisParser#statement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitStatement(SintesisParser.StatementContext ctx);
	/**
	 * Visit a parse tree produced by {@link SintesisParser#block}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitBlock(SintesisParser.BlockContext ctx);
	/**
	 * Visit a parse tree produced by {@link SintesisParser#stepStatement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitStepStatement(SintesisParser.StepStatementContext ctx);
	/**
	 * Visit a parse tree produced by {@link SintesisParser#printStatement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitPrintStatement(SintesisParser.PrintStatementContext ctx);
	/**
	 * Visit a parse tree produced by {@link SintesisParser#methodCall}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitMethodCall(SintesisParser.MethodCallContext ctx);
	/**
	 * Visit a parse tree produced by {@link SintesisParser#superSuffix}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitSuperSuffix(SintesisParser.SuperSuffixContext ctx);
	/**
	 * Visit a parse tree produced by the {@code expAttributes}
	 * labeled alternative in {@link SintesisParser#member}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitExpAttributes(SintesisParser.ExpAttributesContext ctx);
	/**
	 * Visit a parse tree produced by the {@code expSuper}
	 * labeled alternative in {@link SintesisParser#member}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitExpSuper(SintesisParser.ExpSuperContext ctx);
	/**
	 * Visit a parse tree produced by the {@code expMemberIndex}
	 * labeled alternative in {@link SintesisParser#member}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitExpMemberIndex(SintesisParser.ExpMemberIndexContext ctx);
	/**
	 * Visit a parse tree produced by the {@code expIdentifier}
	 * labeled alternative in {@link SintesisParser#member}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitExpIdentifier(SintesisParser.ExpIdentifierContext ctx);
	/**
	 * Visit a parse tree produced by the {@code expMethods}
	 * labeled alternative in {@link SintesisParser#member}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitExpMethods(SintesisParser.ExpMethodsContext ctx);
	/**
	 * Visit a parse tree produced by the {@code expNew}
	 * labeled alternative in {@link SintesisParser#member}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitExpNew(SintesisParser.ExpNewContext ctx);
	/**
	 * Visit a parse tree produced by the {@code expMemberFunc}
	 * labeled alternative in {@link SintesisParser#member}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitExpMemberFunc(SintesisParser.ExpMemberFuncContext ctx);
	/**
	 * Visit a parse tree produced by the {@code expMemberDot}
	 * labeled alternative in {@link SintesisParser#member}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitExpMemberDot(SintesisParser.ExpMemberDotContext ctx);
	/**
	 * Visit a parse tree produced by the {@code expBitNot}
	 * labeled alternative in {@link SintesisParser#expression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitExpBitNot(SintesisParser.ExpBitNotContext ctx);
	/**
	 * Visit a parse tree produced by the {@code expAssignment}
	 * labeled alternative in {@link SintesisParser#expression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitExpAssignment(SintesisParser.ExpAssignmentContext ctx);
	/**
	 * Visit a parse tree produced by the {@code expBasicFunction}
	 * labeled alternative in {@link SintesisParser#expression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitExpBasicFunction(SintesisParser.ExpBasicFunctionContext ctx);
	/**
	 * Visit a parse tree produced by the {@code expMath}
	 * labeled alternative in {@link SintesisParser#expression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitExpMath(SintesisParser.ExpMathContext ctx);
	/**
	 * Visit a parse tree produced by the {@code expPreIncrement}
	 * labeled alternative in {@link SintesisParser#expression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitExpPreIncrement(SintesisParser.ExpPreIncrementContext ctx);
	/**
	 * Visit a parse tree produced by the {@code expUnaryMinus}
	 * labeled alternative in {@link SintesisParser#expression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitExpUnaryMinus(SintesisParser.ExpUnaryMinusContext ctx);
	/**
	 * Visit a parse tree produced by the {@code expTernary}
	 * labeled alternative in {@link SintesisParser#expression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitExpTernary(SintesisParser.ExpTernaryContext ctx);
	/**
	 * Visit a parse tree produced by the {@code expParenthesis}
	 * labeled alternative in {@link SintesisParser#expression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitExpParenthesis(SintesisParser.ExpParenthesisContext ctx);
	/**
	 * Visit a parse tree produced by the {@code expPostIncrement}
	 * labeled alternative in {@link SintesisParser#expression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitExpPostIncrement(SintesisParser.ExpPostIncrementContext ctx);
	/**
	 * Visit a parse tree produced by the {@code expInstanceOf}
	 * labeled alternative in {@link SintesisParser#expression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitExpInstanceOf(SintesisParser.ExpInstanceOfContext ctx);
	/**
	 * Visit a parse tree produced by the {@code expAssignmentOperator}
	 * labeled alternative in {@link SintesisParser#expression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitExpAssignmentOperator(SintesisParser.ExpAssignmentOperatorContext ctx);
	/**
	 * Visit a parse tree produced by the {@code expUnaryPlus}
	 * labeled alternative in {@link SintesisParser#expression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitExpUnaryPlus(SintesisParser.ExpUnaryPlusContext ctx);
	/**
	 * Visit a parse tree produced by the {@code expLiteral}
	 * labeled alternative in {@link SintesisParser#expression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitExpLiteral(SintesisParser.ExpLiteralContext ctx);
	/**
	 * Visit a parse tree produced by the {@code expMember}
	 * labeled alternative in {@link SintesisParser#expression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitExpMember(SintesisParser.ExpMemberContext ctx);
	/**
	 * Visit a parse tree produced by the {@code expOp}
	 * labeled alternative in {@link SintesisParser#expression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitExpOp(SintesisParser.ExpOpContext ctx);
	/**
	 * Visit a parse tree produced by the {@code expNot}
	 * labeled alternative in {@link SintesisParser#expression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitExpNot(SintesisParser.ExpNotContext ctx);
	/**
	 * Visit a parse tree produced by the {@code random}
	 * labeled alternative in {@link SintesisParser#basicFunction0}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitRandom(SintesisParser.RandomContext ctx);
	/**
	 * Visit a parse tree produced by the {@code numberOf}
	 * labeled alternative in {@link SintesisParser#basicFunction1}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitNumberOf(SintesisParser.NumberOfContext ctx);
	/**
	 * Visit a parse tree produced by the {@code lower}
	 * labeled alternative in {@link SintesisParser#basicFunction1}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitLower(SintesisParser.LowerContext ctx);
	/**
	 * Visit a parse tree produced by the {@code upper}
	 * labeled alternative in {@link SintesisParser#basicFunction1}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitUpper(SintesisParser.UpperContext ctx);
	/**
	 * Visit a parse tree produced by the {@code max}
	 * labeled alternative in {@link SintesisParser#basicFunction1}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitMax(SintesisParser.MaxContext ctx);
	/**
	 * Visit a parse tree produced by the {@code min}
	 * labeled alternative in {@link SintesisParser#basicFunction1}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitMin(SintesisParser.MinContext ctx);
	/**
	 * Visit a parse tree produced by the {@code ord}
	 * labeled alternative in {@link SintesisParser#basicFunction1}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitOrd(SintesisParser.OrdContext ctx);
	/**
	 * Visit a parse tree produced by the {@code chr}
	 * labeled alternative in {@link SintesisParser#basicFunction1}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitChr(SintesisParser.ChrContext ctx);
	/**
	 * Visit a parse tree produced by the {@code prompt}
	 * labeled alternative in {@link SintesisParser#basicFunction1}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitPrompt(SintesisParser.PromptContext ctx);
	/**
	 * Visit a parse tree produced by the {@code indexOf}
	 * labeled alternative in {@link SintesisParser#basicFunction2}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitIndexOf(SintesisParser.IndexOfContext ctx);
	/**
	 * Visit a parse tree produced by the {@code convert}
	 * labeled alternative in {@link SintesisParser#basicFunction2}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitConvert(SintesisParser.ConvertContext ctx);
	/**
	 * Visit a parse tree produced by the {@code sub}
	 * labeled alternative in {@link SintesisParser#basicFunction3}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitSub(SintesisParser.SubContext ctx);
	/**
	 * Visit a parse tree produced by {@link SintesisParser#basicFunction}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitBasicFunction(SintesisParser.BasicFunctionContext ctx);
	/**
	 * Visit a parse tree produced by {@link SintesisParser#expressionSequence}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitExpressionSequence(SintesisParser.ExpressionSequenceContext ctx);
	/**
	 * Visit a parse tree produced by {@link SintesisParser#ifStatement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitIfStatement(SintesisParser.IfStatementContext ctx);
	/**
	 * Visit a parse tree produced by {@link SintesisParser#elseIfs}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitElseIfs(SintesisParser.ElseIfsContext ctx);
	/**
	 * Visit a parse tree produced by {@link SintesisParser#elseIf}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitElseIf(SintesisParser.ElseIfContext ctx);
	/**
	 * Visit a parse tree produced by {@link SintesisParser#elseStatement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitElseStatement(SintesisParser.ElseStatementContext ctx);
	/**
	 * Visit a parse tree produced by {@link SintesisParser#iteratorIndexes}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitIteratorIndexes(SintesisParser.IteratorIndexesContext ctx);
	/**
	 * Visit a parse tree produced by {@link SintesisParser#iteratorRange}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitIteratorRange(SintesisParser.IteratorRangeContext ctx);
	/**
	 * Visit a parse tree produced by the {@code repeatStatement}
	 * labeled alternative in {@link SintesisParser#iterationStatement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitRepeatStatement(SintesisParser.RepeatStatementContext ctx);
	/**
	 * Visit a parse tree produced by the {@code repeatWhileStatement}
	 * labeled alternative in {@link SintesisParser#iterationStatement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitRepeatWhileStatement(SintesisParser.RepeatWhileStatementContext ctx);
	/**
	 * Visit a parse tree produced by the {@code whileRepeatStatement}
	 * labeled alternative in {@link SintesisParser#iterationStatement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitWhileRepeatStatement(SintesisParser.WhileRepeatStatementContext ctx);
	/**
	 * Visit a parse tree produced by the {@code forFromToStatement}
	 * labeled alternative in {@link SintesisParser#iterationStatement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitForFromToStatement(SintesisParser.ForFromToStatementContext ctx);
	/**
	 * Visit a parse tree produced by the {@code forFromToStatement2}
	 * labeled alternative in {@link SintesisParser#iterationStatement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitForFromToStatement2(SintesisParser.ForFromToStatement2Context ctx);
	/**
	 * Visit a parse tree produced by the {@code forEachStatement}
	 * labeled alternative in {@link SintesisParser#iterationStatement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitForEachStatement(SintesisParser.ForEachStatementContext ctx);
	/**
	 * Visit a parse tree produced by the {@code forEachStatement2}
	 * labeled alternative in {@link SintesisParser#iterationStatement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitForEachStatement2(SintesisParser.ForEachStatement2Context ctx);
	/**
	 * Visit a parse tree produced by {@link SintesisParser#returnStatement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitReturnStatement(SintesisParser.ReturnStatementContext ctx);
	/**
	 * Visit a parse tree produced by {@link SintesisParser#formalParameterList}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitFormalParameterList(SintesisParser.FormalParameterListContext ctx);
	/**
	 * Visit a parse tree produced by {@link SintesisParser#functionDeclaration}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitFunctionDeclaration(SintesisParser.FunctionDeclarationContext ctx);
	/**
	 * Visit a parse tree produced by {@link SintesisParser#arguments}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitArguments(SintesisParser.ArgumentsContext ctx);
	/**
	 * Visit a parse tree produced by {@link SintesisParser#classDeclaration}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitClassDeclaration(SintesisParser.ClassDeclarationContext ctx);
	/**
	 * Visit a parse tree produced by {@link SintesisParser#identifiers}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitIdentifiers(SintesisParser.IdentifiersContext ctx);
	/**
	 * Visit a parse tree produced by {@link SintesisParser#methodDeclaration}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitMethodDeclaration(SintesisParser.MethodDeclarationContext ctx);
	/**
	 * Visit a parse tree produced by {@link SintesisParser#methodsList}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitMethodsList(SintesisParser.MethodsListContext ctx);
	/**
	 * Visit a parse tree produced by {@link SintesisParser#classExp}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitClassExp(SintesisParser.ClassExpContext ctx);
	/**
	 * Visit a parse tree produced by {@link SintesisParser#vectorIndex}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitVectorIndex(SintesisParser.VectorIndexContext ctx);
	/**
	 * Visit a parse tree produced by {@link SintesisParser#vectorIndexes}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitVectorIndexes(SintesisParser.VectorIndexesContext ctx);
	/**
	 * Visit a parse tree produced by {@link SintesisParser#formalParameterArg}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitFormalParameterArg(SintesisParser.FormalParameterArgContext ctx);
	/**
	 * Visit a parse tree produced by {@link SintesisParser#functionBody}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitFunctionBody(SintesisParser.FunctionBodyContext ctx);
	/**
	 * Visit a parse tree produced by {@link SintesisParser#assignmentOperator}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitAssignmentOperator(SintesisParser.AssignmentOperatorContext ctx);
	/**
	 * Visit a parse tree produced by {@link SintesisParser#reservedWord}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitReservedWord(SintesisParser.ReservedWordContext ctx);
	/**
	 * Visit a parse tree produced by {@link SintesisParser#vectorDeclaration}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitVectorDeclaration(SintesisParser.VectorDeclarationContext ctx);
	/**
	 * Visit a parse tree produced by {@link SintesisParser#mapDeclaration}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitMapDeclaration(SintesisParser.MapDeclarationContext ctx);
	/**
	 * Visit a parse tree produced by {@link SintesisParser#vectorLiteral}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitVectorLiteral(SintesisParser.VectorLiteralContext ctx);
	/**
	 * Visit a parse tree produced by {@link SintesisParser#objectLiteral}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitObjectLiteral(SintesisParser.ObjectLiteralContext ctx);
	/**
	 * Visit a parse tree produced by {@link SintesisParser#literal}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitLiteral(SintesisParser.LiteralContext ctx);
	/**
	 * Visit a parse tree produced by {@link SintesisParser#booleanLiteral}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitBooleanLiteral(SintesisParser.BooleanLiteralContext ctx);
	/**
	 * Visit a parse tree produced by {@link SintesisParser#stringLiteral}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitStringLiteral(SintesisParser.StringLiteralContext ctx);
	/**
	 * Visit a parse tree produced by {@link SintesisParser#nullLiteral}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitNullLiteral(SintesisParser.NullLiteralContext ctx);
	/**
	 * Visit a parse tree produced by {@link SintesisParser#numericLiteral}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitNumericLiteral(SintesisParser.NumericLiteralContext ctx);
	/**
	 * Visit a parse tree produced by {@link SintesisParser#identifier}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitIdentifier(SintesisParser.IdentifierContext ctx);
	/**
	 * Visit a parse tree produced by the {@code id}
	 * labeled alternative in {@link SintesisParser#identifierWithKeywords}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitId(SintesisParser.IdContext ctx);
	/**
	 * Visit a parse tree produced by the {@code keyw}
	 * labeled alternative in {@link SintesisParser#identifierWithKeywords}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitKeyw(SintesisParser.KeywContext ctx);
	/**
	 * Visit a parse tree produced by {@link SintesisParser#keyword}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitKeyword(SintesisParser.KeywordContext ctx);
}