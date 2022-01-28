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
	 * Visit a parse tree produced by the {@code expVector}
	 * labeled alternative in {@link SintesisParser#expression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitExpVector(SintesisParser.ExpVectorContext ctx);
	/**
	 * Visit a parse tree produced by the {@code expAssignment}
	 * labeled alternative in {@link SintesisParser#expression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitExpAssignment(SintesisParser.ExpAssignmentContext ctx);
	/**
	 * Visit a parse tree produced by the {@code expPostDecrease}
	 * labeled alternative in {@link SintesisParser#expression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitExpPostDecrease(SintesisParser.ExpPostDecreaseContext ctx);
	/**
	 * Visit a parse tree produced by the {@code expPreIncrement}
	 * labeled alternative in {@link SintesisParser#expression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitExpPreIncrement(SintesisParser.ExpPreIncrementContext ctx);
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
	 * Visit a parse tree produced by the {@code expFunctionCall}
	 * labeled alternative in {@link SintesisParser#expression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitExpFunctionCall(SintesisParser.ExpFunctionCallContext ctx);
	/**
	 * Visit a parse tree produced by the {@code expAssignmentOperator}
	 * labeled alternative in {@link SintesisParser#expression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitExpAssignmentOperator(SintesisParser.ExpAssignmentOperatorContext ctx);
	/**
	 * Visit a parse tree produced by the {@code expSuperExpression}
	 * labeled alternative in {@link SintesisParser#expression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitExpSuperExpression(SintesisParser.ExpSuperExpressionContext ctx);
	/**
	 * Visit a parse tree produced by the {@code expOp}
	 * labeled alternative in {@link SintesisParser#expression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitExpOp(SintesisParser.ExpOpContext ctx);
	/**
	 * Visit a parse tree produced by the {@code expAttribute}
	 * labeled alternative in {@link SintesisParser#expression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitExpAttribute(SintesisParser.ExpAttributeContext ctx);
	/**
	 * Visit a parse tree produced by the {@code expMemberMethod}
	 * labeled alternative in {@link SintesisParser#expression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitExpMemberMethod(SintesisParser.ExpMemberMethodContext ctx);
	/**
	 * Visit a parse tree produced by the {@code expPreDecrease}
	 * labeled alternative in {@link SintesisParser#expression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitExpPreDecrease(SintesisParser.ExpPreDecreaseContext ctx);
	/**
	 * Visit a parse tree produced by the {@code expNot}
	 * labeled alternative in {@link SintesisParser#expression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitExpNot(SintesisParser.ExpNotContext ctx);
	/**
	 * Visit a parse tree produced by the {@code expBitNot}
	 * labeled alternative in {@link SintesisParser#expression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitExpBitNot(SintesisParser.ExpBitNotContext ctx);
	/**
	 * Visit a parse tree produced by the {@code expMethodCall}
	 * labeled alternative in {@link SintesisParser#expression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitExpMethodCall(SintesisParser.ExpMethodCallContext ctx);
	/**
	 * Visit a parse tree produced by the {@code expDictionaryDelete}
	 * labeled alternative in {@link SintesisParser#expression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitExpDictionaryDelete(SintesisParser.ExpDictionaryDeleteContext ctx);
	/**
	 * Visit a parse tree produced by the {@code expComment}
	 * labeled alternative in {@link SintesisParser#expression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitExpComment(SintesisParser.ExpCommentContext ctx);
	/**
	 * Visit a parse tree produced by the {@code expUnaryMinus}
	 * labeled alternative in {@link SintesisParser#expression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitExpUnaryMinus(SintesisParser.ExpUnaryMinusContext ctx);
	/**
	 * Visit a parse tree produced by the {@code expParenthesis}
	 * labeled alternative in {@link SintesisParser#expression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitExpParenthesis(SintesisParser.ExpParenthesisContext ctx);
	/**
	 * Visit a parse tree produced by the {@code expDictionaryGet}
	 * labeled alternative in {@link SintesisParser#expression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitExpDictionaryGet(SintesisParser.ExpDictionaryGetContext ctx);
	/**
	 * Visit a parse tree produced by the {@code expUnaryPlus}
	 * labeled alternative in {@link SintesisParser#expression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitExpUnaryPlus(SintesisParser.ExpUnaryPlusContext ctx);
	/**
	 * Visit a parse tree produced by the {@code expMemberAttribute}
	 * labeled alternative in {@link SintesisParser#expression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitExpMemberAttribute(SintesisParser.ExpMemberAttributeContext ctx);
	/**
	 * Visit a parse tree produced by the {@code expVectorDeclaration}
	 * labeled alternative in {@link SintesisParser#expression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitExpVectorDeclaration(SintesisParser.ExpVectorDeclarationContext ctx);
	/**
	 * Visit a parse tree produced by the {@code expDictionarySet}
	 * labeled alternative in {@link SintesisParser#expression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitExpDictionarySet(SintesisParser.ExpDictionarySetContext ctx);
	/**
	 * Visit a parse tree produced by the {@code expLiteral}
	 * labeled alternative in {@link SintesisParser#expression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitExpLiteral(SintesisParser.ExpLiteralContext ctx);
	/**
	 * Visit a parse tree produced by the {@code expIdentifier}
	 * labeled alternative in {@link SintesisParser#expression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitExpIdentifier(SintesisParser.ExpIdentifierContext ctx);
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
	 * Visit a parse tree produced by {@link SintesisParser#returnStatement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitReturnStatement(SintesisParser.ReturnStatementContext ctx);
	/**
	 * Visit a parse tree produced by the {@code vectorDeclaration}
	 * labeled alternative in {@link SintesisParser#varDeclaration}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitVectorDeclaration(SintesisParser.VectorDeclarationContext ctx);
	/**
	 * Visit a parse tree produced by the {@code varSingleDeclaration}
	 * labeled alternative in {@link SintesisParser#varDeclaration}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitVarSingleDeclaration(SintesisParser.VarSingleDeclarationContext ctx);
	/**
	 * Visit a parse tree produced by {@link SintesisParser#functionDeclaration}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitFunctionDeclaration(SintesisParser.FunctionDeclarationContext ctx);
	/**
	 * Visit a parse tree produced by {@link SintesisParser#formalParameterList}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitFormalParameterList(SintesisParser.FormalParameterListContext ctx);
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
	 * Visit a parse tree produced by the {@code assignableAttribute}
	 * labeled alternative in {@link SintesisParser#assignable}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitAssignableAttribute(SintesisParser.AssignableAttributeContext ctx);
	/**
	 * Visit a parse tree produced by the {@code assignableVector}
	 * labeled alternative in {@link SintesisParser#assignable}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitAssignableVector(SintesisParser.AssignableVectorContext ctx);
	/**
	 * Visit a parse tree produced by the {@code assignableId}
	 * labeled alternative in {@link SintesisParser#assignable}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitAssignableId(SintesisParser.AssignableIdContext ctx);
	/**
	 * Visit a parse tree produced by {@link SintesisParser#reservedWord}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitReservedWord(SintesisParser.ReservedWordContext ctx);
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
	 * Visit a parse tree produced by {@link SintesisParser#identifierName}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitIdentifierName(SintesisParser.IdentifierNameContext ctx);
	/**
	 * Visit a parse tree produced by {@link SintesisParser#keyword}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitKeyword(SintesisParser.KeywordContext ctx);
}