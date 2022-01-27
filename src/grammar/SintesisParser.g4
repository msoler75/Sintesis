/*
*    grammar Rules
*    Based on https://github.com/antlr/grammars-v4/blob/master/javascript/javascript/JavaScriptParser.g4
*/



parser grammar SintesisParser;

options {
    tokenVocab=SintesisLexer;
}

program
    : statementList
    ;

statementList
    : statement+
    ;

statement
    : block
    | stepStatement
    | printStatement
    | ifStatement
    | iterationStatement
    | returnStatement
    | varDeclaration
    | classDeclaration
    | functionDeclaration
    | expression
    ;

block
    : '{' stmt=statementList? '}'
    ;

stepStatement
    : Step exp=( Identifier | DecimalLiteral )
    ;

printStatement
    : Print exp=expression
    ;

expression 
    :    id=Identifier idx=vectorIndexes                     #expVector
    |    id=Identifier args=arguments                        #expFunctionCall
    |    id=Identifier '.' Get '(' exp=expression ')'        #expDictionaryGet
    |    id=Identifier '.' Set '(' key=StringLiteral ',' expression ')'        #expDictionarySet
    |    id=Identifier '.' Delete '(' key=StringLiteral ')'  #expDictionaryDelete
    |    id=Identifier '.' method=Identifier args=arguments  #expMemberMethod
    |    id=Identifier '.' attr=Identifier                   #expMemberAttribute
    |    id=Identifier InstanceOf is=Identifier              #expInstanceOf
    |    Attributes '.' id=Identifier                        #expAttribute
    |    e1=expression op=Plus e2=expression                 #expOp
    |    e1=expression op=Minus e2=expression                #expOp
    |    e1=expression op=Multiply e2=expression             #expOp
    |    e1=expression op=Divide e2=expression               #expOp
    |    e1=expression op=Power e2=expression                #expOp
    |    e1=expression op=Modulus e2=expression              #expOp
    |    e1=expression op=LessThan e2=expression             #expOp
    |    e1=expression op=MoreThan e2=expression             #expOp
    |    e1=expression op=LessThanEquals e2=expression       #expOp
    |    e1=expression op=GreaterThanEquals e2=expression    #expOp
    |    e1=expression op=BitAnd e2=expression               #expOp
    |    e1=expression op=BitOr e2=expression                #expOp
    |    e1=expression op=BitXOr e2=expression               #expOp
    |    e1=expression op=IdentityEquals e2=expression       #expOp
    |    e1=expression op=IdentityNotEquals e2=expression    #expOp
    |    e1=expression op=Equals_ e2=expression              #expOp
    |    e1=expression op=NotEquals e2=expression            #expOp
    |    e1=expression op=And e2=expression                  #expOp
    |    e1=expression op=Or e2=expression                   #expOp
    |    Not exp=expression                                  #expNot
    |    BitNot exp=expression                               #expBitNot
    |    PlusPlus exp=expression                             #expPreIncrement
    |    MinusMinus exp=expression                           #expPreDecrease
    |    Plus exp=expression                                 #expUnaryPlus
    |    Minus exp=expression                                #expUnaryMinus
    |    exp=expression PlusPlus                             #expPostIncrement
    |    exp=expression MinusMinus                           #expPostDecrease
    |    Vector? idx=vectorIndexes                                  #expVectorDeclaration
    |    <assoc=right> dest=assignable Assign exp=expression                 #expAssignment
    |    <assoc=right> dest=assignable op=assignmentOperator exp=expression    #expAssignmentOperator
    |    id=Identifier                                       #expIdentifier
    |    literal                                             #expLiteral
    |    '(' exp=expression ')'                              #expParenthesis
    |    SingleLineComment                                   #expComment
    ;




expressionSequence
    : expression (',' expression)*
    ;

ifStatement
    :  If exp=expression Then? stmt=statement elseifs=elseIfs? else_=elseStatement?
    ;    

elseIfs 
    : elseIf+
    ;

elseIf
    : ElseIf exp=expression Then? stmt=statement
    ;

elseStatement
    : Else statement
    ;

iterationStatement
    : Repeat exp=expression stmt=statement                   #repeatStatement
    | Repeat stmt=statement While exp=expression             #repeatWhileStatement
    | Repeat? While exp=expression Repeat? stmt=statement    #whileRepeatStatement
    ;

returnStatement
    : Return exp=expression
    ;

varDeclaration
    : Var id=Identifier Assign Vector? idx=vectorIndexes   #vectorDeclaration
    | Var id=Identifier Assign exp=expression              #varSingleDeclaration
    ;

functionDeclaration
    : Function_ id=Identifier '(' pl=formalParameterList? ')' stmt=functionBody
    ;

formalParameterList
    : formalParameterArg (',' formalParameterArg)* 
    ;

arguments
    : '(' (expression (',' expression)* )? ')'
    ;

classDeclaration
    : Class_ id=Identifier (Extends ext=Identifier)? '{' 
        (Attributes ':'  atrs=identifiers)?
        (Methods ':' methods=methodsList)?
        '}'
    ;

identifiers 
    : (Identifier ','?)+
    ;

methodDeclaration
    : Function_? id=Identifier '(' pl=formalParameterList? ')' stmt=functionBody
    ;

methodsList
    : methodDeclaration+
    ;

classExp
    : New_ Identifier args=arguments
    ;

vectorIndex
    : '[' expression? ']'
    ;

vectorIndexes
    : vectorIndex+
    ;

formalParameterArg
    : Identifier (Assign expression)?      
    ;

functionBody 
    : block
    | statement
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


assignable
    : Attributes '.' id=Identifier      #assignableAttribute
    | id=Identifier idx=vectorIndexes   #assignableVector
    | id=Identifier                     #assignableId
    ;

reservedWord
    : keyword
    | NullLiteral
    | BooleanLiteral
    ;

literal
    : nullLiteral       
    | booleanLiteral    
    | stringLiteral     
    | numericLiteral    
    ;


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

identifierName
    : Identifier
    | reservedWord
    ;

keyword
    :
    | Else
    | Then
    | Return
    | While
    | Function_
    | If
    | Vector
    | 
    ;

eos
    : SemiColon
    | EOF
    ;