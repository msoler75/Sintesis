/*
*    grammar Rules
*    Based on https://github.com/antlr/grammars-v4/blob/master/javascript/javascript/JavaScriptParser.g4
*/



parser grammar SintesisParser;

options {
    tokenVocab=SintesisLexer;
    superClass=SintesisParserBase; 
}

program
    : statementList? EOF
    ;

statementList
    : statement+ 
    ;

statement
    : simpleStatement
    | compoundStatement
    ;

simpleStatement
    : variableStatement
    | emptyStatement_
    | stepStatement
    | printStatement
    | continueStatement
    | breakStatement
    | returnStatement
    | expressionStatement
    ;

compoundStatement
    : block
    | classDeclaration    
    | ifStatement
    | iterationStatement
    | functionDeclaration
    | switchStatement
    ;


// simple_stmts: simpleStatement (';' simpleStatement)* ';'? NEWLINE;


blockJS
    : '{' stmt=statementList? '}'
    ;

// blockPy: simple_stmts | NEWLINE INDENT statementList DEDENT;

block 
    : blockJS
    // | blockPy
    ;

stepStatement
    : Step exp=identifierExt
    ;

emptyStatement_
    : SemiColon
    ;

printStatement
    : Print exp=expressionSequence
    ;

expressionStatement
    : {this.notOpenBraceAndNotFunction()}? expressionSequence eos
    ;


methodCall
    : identifier arguments
    | Super arguments
    ;

superSuffix
    : arguments
    | Dot identifier arguments?
    ;

member 
    : Attributes                                                             #expAttributes
    | Methods                                                                #expMethods
    | Super                                                                  #expSuper
    | New_ Instance? (Of Class_?)? id=Identifier args=arguments              #expNew
    | mem=member '.' idx=memberIdentifier  args=arguments                    #expMemberDot
    | mem=member '.' idx=memberIdentifier                                    #expMemberDot
    | mem=member '[' idx=singleExpression ']'   args=arguments               #expMemberIndex
    | mem=member '[' idx=singleExpression ']'                                #expMemberIndex
    | mem=member args=arguments                                              #expMemberFunc
    | identifier                                                             #expIdentifier
    | reservedIdentifier                                                     #expReservedIdentifier
    | stringLiteral                                                          #expMemberString
    | listLiteral                                                            #expMemberList
    | objectLiteral                                                          #expMemberObject
    ;

memberIdentifier
    : Attributes     
    | Methods
    | Super
    | Constructor
    | identifierExt
    ;

singleExpression     
    :    anonymousFunction                                                  #expFunctionExpression
    |    fn=basicFunction args=arguments                                    #expBasicFunction
    |    JavascriptCode                                                     #expJavascript
    |    Math Dot mem=identifier args=arguments                             #expMath
    |    op=Delete dest=singleExpression                                    #expDelete
    |    dest=singleExpression op=(PlusPlus|MinusMinus)                           #expPostIncrement
    |    op=(PlusPlus | MinusMinus) dest=singleExpression                         #expPreIncrement
    |    op=Plus dest=singleExpression                                             #expUnaryPlus
    |    op=Minus dest=singleExpression                                            #expUnaryMinus
    |    op=BitNot dest=singleExpression                                           #expBitNot
    |    op=Not dest=singleExpression                                              #expNot
    |    key=singleExpression op=In dest=singleExpression                                #expIn
    |    e1=singleExpression op=(Modulus|Multiply|Divide) e2=singleExpression           #expOp
    |    e1=singleExpression op=('+'|'-') e2=singleExpression                           #expOp
    |    e1=singleExpression op=('>>'|'<<'|'>>>') e2=singleExpression                   #expOp
    |    <assoc=right> e1=singleExpression op=Power e2=singleExpression                 #expOp
    |    e1=singleExpression op=('<'|'>') e2=singleExpression                           #expOp
    |    e1=singleExpression op=LessThanEquals e2=singleExpression                      #expOp
    |    e1=singleExpression op=GreaterThanEquals e2=singleExpression                   #expOp
    |    e1=singleExpression InstanceOf e2=identifier                             #expInstanceOf
    |    e1=singleExpression op=(IdentityEquals|IdentityNotEquals) e2=singleExpression  #expOp
    |    e1=singleExpression op=(Equals_|NotEquals) e2=singleExpression                 #expOp
    |    e1=singleExpression op=(BitAnd|BitOr|BitXOr) e2=singleExpression               #expOp
    |    e1=singleExpression op=(And|Or) e2=singleExpression                            #expOp
    |    cond=singleExpression '?' ok=singleExpression ':' no=singleExpression                #expTernary
    |    <assoc=right> dest=member Assign exp=singleExpression                    #expAssignment
    |    <assoc=right> dest=member op=assignmentOperator exp=singleExpression     #expAssignmentOperator
    |    variableDeclarationList                                                  #expVar
    |    '(' exp=singleExpression ')'                                             #expParenthesis
    |    member                                                             #expMember
    |    literal                                                            #expLiteral
    |    PieceOfCode                                                         #expPieceOfCode
    ;


basicFunction0
    : Random                        #random
    ;

basicFunction1
    : NumberOf                      #numberOf
    | Ord                           #ord
    | Chr                           #chr
    | Prompt                        #prompt
    | Dictionary                    #Dictionary
    ;


basicFunction2
    :
     Convert                       #convert
    ;
    
basicFunction
    : basicFunction0
    | basicFunction1
    | basicFunction2
    ;

expressionSequence
    : singleExpression (',' singleExpression)*
    ;

ifStatement
    :  If exp=singleExpression Then? stmt=statement elseifs=elseIfs? (Else Then? elsestmt_=statement)?
    ;    

elseIfs 
    : elseIf+
    ;

elseIf
    : ElseIf exp=singleExpression Then? stmt=statement
    ;

 
iteratorIndexes
    : idv=Identifier op=(In|Of) coll=singleExpression                      
    | idk=Identifier ',' idv=Identifier op=(In|Of) coll=singleExpression  
    | idk=Identifier ARROW idv=Identifier op=(In|Of) coll=singleExpression 
    ;

iteratorRange
    :  vvar=Var_? id=identifier (Assign|In) start=singleExpression To to=singleExpression 
    ;

iterationStatement
    : Repeat exp=singleExpression Times? stmt=statement                   #repeatStatement
    | (Repeat|Do) stmt=statement While exp=singleExpression               #repeatWhileStatement
    | Repeat? While exp=singleExpression (Repeat|Do)? stmt=statement      #whileRepeatStatement
    | For '(' pre=forPre? ';' exp=expressionSequence? ';' post=expressionSequence? ')' stmt=statement  #forClassic
    | For iter=iteratorRange (Repeat|Do)? stmt=statement                            #forFromToStatement
    | For '(' iter=iteratorRange ')' (Repeat|Do)? stmt=statement                    #forFromToStatement2
    | (For Each?|ForEach) iter=iteratorIndexes (Repeat|Do)? stmt=statement          #forEachStatement
    | (For Each?|ForEach) '(' iter=iteratorIndexes ')' (Repeat|Do)? stmt=statement  #forEachStatement2
    ;

forPre 
    : expressionSequence                                    
    | variableDeclarationList                               
;

continueStatement
    : Continue eos
    ;

breakStatement
    : Break eos
    ;

returnStatement
    : Return (exp=singleExpression|eos)
    ;


switchStatement
    : Switch '(' expressionSequence ')' caseBlock
    ;

caseBlock
    : '{' caseClauses? (defaultClause caseClauses?)? '}'
    ;

caseClauses
    : caseClause+
    ;

caseClause
    : Case expressionSequence ':' statementList?
    ;

defaultClause
    : Default ':' statementList?
    ;
    


formalParameterList
    : formalParameterArg (',' formalParameterArg)* 
    ;

functionDeclaration
    : dec=Declare? fun=Function_ id=identifier '(' pl=formalParameterList? ')' stmt=functionBody
    ;

functionDeclarationExpr
: fun=Function_ id=identifier '(' pl=formalParameterList? ')' stmt=functionBody
;

arguments
    : '(' (singleExpression (',' singleExpression)* )? ')'
    ;

visibility
    :   Public
    |   Private
    |   Protected
    ;

classDeclaration
    : dec=Declare? clas=Class_ id=identifier (Extends ext=identifier)? '{' 
        ((Attributes ':')? ('{' atrs=attributesList '}' | atrs=attributesList ))? eos
        ((mdec=Methods ':')? (methods=methodsList| '{' methods=methodsList '}'))?
        '}'
    ;

attributesList 
    : classAttributeDecl+
    ;

classAttributeDecl 
    :  vis=visibility? variableDeclaration (',' variableDeclaration)*
    ;

methodDeclaration
    : vis=visibility? mname=(Method|Function_)? id=methodName '(' pl=formalParameterList? ')' stmt=functionBody
    ;

methodName
    :   identifier
    |   Constructor
    ;

methodsList
    : methodDeclaration+
    ;

classExp
    : New_ Instance? (Of Class_?)? Identifier args=arguments
    ;

listIndex
    : '[' singleExpression? ']'
    ;

listIndexes
    : listIndex+
    ;

formalParameterArg
    : identifierExt (Assign exp=singleExpression)?      
    ;

variableStatement
    : variableDeclarationList eos
    ;

reservedIdentifier 
    : Delete 
    | In
    | InstanceOf
    | NumberOf
    | IndexOf
    | Sub
    | ElseIf
    | Of
    | Function_
    ;

variableDeclaration
    : identifierExt (Assign exp=singleExpression)?  
    ;

variableDeclarationList
    : varModifier variableDeclaration (',' variableDeclaration)*
    ;

varModifier 
    : Declare
    | Declare Var_
    | Declare Const_
    | Var_
    | Const_
    ;

functionBody 
    : block
    | statement
    ;

 
anonymousFunction
    : fun=Function_ '(' pl=formalParameterList? ')'    stmt=functionBody  #anonymousFunctionDecl
    | pl=arrowFunctionParameters ARROW stmt=arrowFunctionBody                     #arrowFunction
    ;

arrowFunctionParameters
    : identifierExt
    | '(' formalParameterList? ')'
    ;

arrowFunctionBody
    : singleExpression
    | functionBody
    ;

assignmentOperator
    : '*='
    | '/='
    | '%='
    | '+='
    | '-='
    | '<<='
    | '>>='
    | '>>>='
    | '&='
    | '^='
    | '|='
    | '**='
    ;


reservedWord
    : safeKeyword
    | NullLiteral
    | BooleanLiteral
    ;

listDeclaration
    : New_ List '(' exp=listLiteral? ')'
    ;


listLiteral
    : '[' (singleExpression (',' singleExpression)*)? ']'
    ;

objectKey
    : identifierExt
    | reservedIdentifier
    | stringLiteral
    | numericLiteral
    | booleanLiteral
    ;

objectLiteral
    : '{' (objectKey ':' singleExpression (',' objectKey ':' singleExpression)*)? '}'
    ;



literal
    : nullLiteral       
    | booleanLiteral    
    | stringLiteral     
    | numericLiteral
    | listLiteral 
    | objectLiteral
    | listDeclaration
    | regularExpressionLiteral 
    ;

regularExpressionLiteral: RegularExpressionLiteral;

booleanLiteral : BooleanLiteral ;
stringLiteral : StringLiteral ;
nullLiteral : NullLiteral ;

numericLiteral
    : DecimalLiteral
    | HexIntegerLiteral
    | OctalIntegerLiteral
    | OctalIntegerLiteral2
    | BinaryIntegerLiteral
    ;

identifier 
    : Identifier ;


identifierExt :
identifier
|reservedIdentifier;

/*
List not included as keyword
Var_ not included
Method not included
Class not included
Function_
Methods
Attributes

*/
safeKeyword
    : Return
    | While
    | Continue
    | Break
    | Each
    | For
    | Of
    | In
    | Do
    | InstanceOf
    | Default
    | Case
    | Times
    | Switch
    | Print
    | If
    | ElseIf
    | Else
    | Repeat
    | While
    ;

eos
    : SemiColon
    | EOF
    | {this.lineTerminatorAhead()}?
    | {this.closeBrace()}?
    ;