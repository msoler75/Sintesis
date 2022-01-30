/*
*    grammar Rules
*    Based on https://github.com/antlr/grammars-v4/blob/master/javascript/javascript/JavaScriptParser.g4
*/



parser grammar SintesisParser;

options {
    tokenVocab=SintesisLexer;
}

program
    : statementList EOF
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
    :    Vector idx=vectorIndexes args=arguments?                       #expVectorDeclaration
    |    Map args=arguments                                             #expMapDeclaration
    |    fn=basicFunction args=arguments                                #expBasicFunction
    |    src=expression '.' method=Identifier args=arguments            #expMemberMethod
    |    src=expression '.' attr=Identifier                             #expMemberAttribute
    |    id=Identifier idx=vectorIndexes                                #expVector
    |    id=Identifier '.' Get '(' exp=expression ')'                   #expDictionaryGet
    |    id=Identifier '.' Set '(' key=StringLiteral ',' expression ')' #expDictionarySet
    |    id=Identifier '.' Delete '(' key=StringLiteral ')'             #expDictionaryDelete
    |    id=Identifier InstanceOf is=Identifier                         #expInstanceOf
    |    Attributes '.' id=Identifier                                   #expAttribute
    |    Methods '.' id=Identifier  args=arguments                      #expMethodCall
    |    Super args=arguments                                           #expSuperExpression
    |    id=Identifier args=arguments                                   #expFunctionCall
    |    dest=assignable op=(PlusPlus|MinusMinus)                       #expPostIncrement
    |    op=(PlusPlus | MinusMinus) dest=assignable                     #expPreIncrement
    |    Plus exp=expression                                            #expUnaryPlus
    |    Minus exp=expression                                           #expUnaryMinus
    |    BitNot exp=expression                                          #expBitNot
    |    Not exp=expression                                             #expNot
    |    e1=expression op=Plus e2=expression                            #expOp
    |    e1=expression op=Minus e2=expression                           #expOp
    |    e1=expression op=Multiply e2=expression                        #expOp
    |    e1=expression op=Divide e2=expression                          #expOp
    |    <assoc=right> e1=expression op=Power e2=expression             #expOp
    |    e1=expression op=Modulus e2=expression                         #expOp
    |    e1=expression op=LessThan e2=expression                        #expOp
    |    e1=expression op=MoreThan e2=expression                        #expOp
    |    e1=expression op=LessThanEquals e2=expression                  #expOp
    |    e1=expression op=GreaterThanEquals e2=expression               #expOp
    |    e1=expression op=BitAnd e2=expression                          #expOp
    |    e1=expression op=BitOr e2=expression                           #expOp
    |    e1=expression op=BitXOr e2=expression                          #expOp
    |    e1=expression op=IdentityEquals e2=expression                  #expOp
    |    e1=expression op=IdentityNotEquals e2=expression               #expOp
    |    e1=expression op=Equals_ e2=expression                         #expOp
    |    e1=expression op=NotEquals e2=expression                       #expOp
    |    e1=expression op=And e2=expression                             #expOp
    |    e1=expression op=Or e2=expression                              #expOp
    |    cond=expression '?' ok=expression ':' no=expression            #expTernary
    |    <assoc=right> dest=assignable Assign exp=expression            #expAssignment
    |    <assoc=right> dest=assignable op=assignmentOperator exp=expression    #expAssignmentOperator
    |    id=Identifier                                                  #expIdentifier
    |    literal                                                        #expLiteral
    |    '(' exp=expression ')'                                         #expParenthesis
    |    SingleLineComment                                              #expComment
    ;


basicFunction0
    : Random                        #random
    ;

basicFunction1
    : NumberOf                      #numberOf
    | Lower                         #lower
    | Upper                         #upper
    | Max                           #max
    | Min                           #min
    | Ord                           #ord
    | Chr                           #chr
    | Prompt                        #prompt
    ;


basicFunction2
    : IndexOf                       #indexOf
    | Convert                       #convert
    ;
    
basicFunction3
    : Sub                           #sub
    ;

basicFunction
    : basicFunction0
    | basicFunction1
    | basicFunction2
    | basicFunction3
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
    : Repeat exp=expression Times? stmt=statement                 #repeatStatement
    | (Repeat|Do) stmt=statement While exp=expression             #repeatWhileStatement
    | Repeat? While exp=expression (Repeat|Do)? stmt=statement    #whileRepeatStatement
    | For '('? id=Identifier (Assign|In) start=expression To to=expression ')'? Repeat? stmt=statement #forFromToStatement
    | (For Each?|ForEach) '('? id=Identifier In coll=expression ')'? (Repeat|Do)? stmt=statement                      #forEachInCollectionStatement
    | (For Each?|ForEach) '('? id=Identifier Of coll=expression ')'? (Repeat|Do)? stmt=statement                      #forEachOfCollectionStatement
    ;

returnStatement
    : Return exp=expression
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

vectorLiteral
    : '[' (expression (',' expression)*)? ']'
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
    | id=Identifier idx=vectorIndexes   #assignableMapOrVector
    | vvar=Var_? id=Identifier           #assignableId
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
    | vectorLiteral    
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
    | Map
    | Var_
    ;
