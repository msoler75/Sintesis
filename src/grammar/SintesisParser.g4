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
    | variableStatement
    | expression
    ;

block
    : '{' stmt=statementList? '}'
    ;

stepStatement
    : Step exp=( Identifier | DecimalLiteral )
    ;

printStatement
    : Print exp=expressionSequence
    ;


methodCall
    : identifierWithKeywords arguments
    | Super arguments
    ;

superSuffix
    : arguments
    | Dot identifierWithKeywords arguments?
    ;

member 
    : Attributes                                                             #expAttributes
    | Methods                                                                #expMethods
    | Super                                                                  #expSuper
    | New_ Instance? (Of Class_?)? id=Identifier args=arguments              #expNew
    | exp=member '.' idx=memberIdentifier  args=arguments                    #expMemberDot
    | exp=member '.' idx=memberIdentifier                                    #expMemberDot
    | exp=member '[' idx=expression ']'   args=arguments                     #expMemberIndex
    | exp=member '[' idx=expression ']'                                      #expMemberIndex
    | exp=member args=arguments                                              #expMemberFunc
    | identifier                                                             #expIdentifier
    ;

memberIdentifier
    : Attributes     
    | Methods
    | Super
    | Constructor
    | identifierWithKeywords
    ;

expression     
    :    fn=basicFunction args=arguments                                    #expBasicFunction
    |    Math Dot fn=(Identifier|Min|Max|Random) args=arguments             #expMath
    |    dest=expression op=(PlusPlus|MinusMinus)                           #expPostIncrement
    |    op=(PlusPlus | MinusMinus) dest=expression                         #expPreIncrement
    |    Plus exp=expression                                                #expUnaryPlus
    |    Minus exp=expression                                               #expUnaryMinus
    |    BitNot exp=expression                                              #expBitNot
    |    Not exp=expression                                                 #expNot
    |    e1=expression op=(Modulus|Multiply|Divide) e2=expression           #expOp
    |    e1=expression op=('+'|'-') e2=expression                           #expOp
    |    e1=expression op=('>>'|'<<'|'>>>') e2=expression                   #expOp
    |    <assoc=right> e1=expression op=Power e2=expression                 #expOp
    |    e1=expression op=('<'|'>') e2=expression                           #expOp
    |    e1=expression op=LessThanEquals e2=expression                      #expOp
    |    e1=expression op=GreaterThanEquals e2=expression                   #expOp
    |    e1=expression InstanceOf e2=identifier                             #expInstanceOf
    |    e1=expression op=(IdentityEquals|IdentityNotEquals) e2=expression  #expOp
    |    e1=expression op=(Equals_|NotEquals) e2=expression                 #expOp
    |    e1=expression op=(BitAnd|BitOr|BitXOr) e2=expression               #expOp
    |    e1=expression op=(And|Or) e2=expression                            #expOp
    |    cond=expression '?' ok=expression ':' no=expression                #expTernary
    |    <assoc=right> dest=member Assign exp=expression                    #expAssignment
    |    <assoc=right> dest=member op=assignmentOperator exp=expression     #expAssignmentOperator
    |    Var_ id=Identifier                                                 #expVar
    |    '(' exp=expression ')'                                             #expParenthesis
    |    member                                                             #expMember
    |    literal                                                            #expLiteral
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

iteratorIndexes
    : idv=Identifier op=(In|Of) coll=expression                      
    | idv=Identifier ',' idk=Identifier op=(In|Of) coll=expression  
    | idk=Identifier ARROW idv=Identifier op=(In|Of) coll=expression 
    ;

iteratorRange
    :  vvar=Var_? id=Identifier (Assign|In) start=expression To to=expression 
    ;

iterationStatement
    : Repeat exp=expression Times? stmt=statement                   #repeatStatement
    | (Repeat|Do) stmt=statement While exp=expression               #repeatWhileStatement
    | Repeat? While exp=expression (Repeat|Do)? stmt=statement      #whileRepeatStatement
    | For iter=iteratorRange (Repeat|Do)? stmt=statement                            #forFromToStatement
    | For '(' iter=iteratorRange ')' (Repeat|Do)? stmt=statement                    #forFromToStatement2
    | (For Each?|ForEach) iter=iteratorIndexes (Repeat|Do)? stmt=statement          #forEachStatement
    | (For Each?|ForEach) '(' iter=iteratorIndexes ')' (Repeat|Do)? stmt=statement  #forEachStatement2
    ;

returnStatement
    : Return (exp=expression|eos)
    ;

formalParameterList
    : formalParameterArg (',' formalParameterArg)* 
    ;

functionDeclaration
    : Function_ id=Identifier '(' pl=formalParameterList? ')' stmt=functionBody
    ;

arguments
    : '(' (expression (',' expression)* )? ')'
    ;

classDeclaration
    : Class_ id=Identifier (Extends ext=Identifier)? '{' 
        ((Attributes ':')? ('{' atrs=identifiers '}' | atrs=identifiers ))?
        ((mdec=Methods ':')? (methods=methodsList| '{' methods=methodsList '}'))?
        '}'
    ;

identifiers 
    : (Identifier ','?)+
    ;

methodDeclaration
    : (Method|Function_)? id=(Identifier|Constructor) '(' pl=formalParameterList? ')' stmt=functionBody
    ;

methodsList
    : methodDeclaration+
    ;

classExp
    : New_ Instance? (Of Class_?)? Identifier args=arguments
    ;

vectorIndex
    : '[' expression? ']'
    ;

vectorIndexes
    : vectorIndex+
    ;

formalParameterArg
    : identifier (Assign expression)?      
    ;

variableStatement
    : variableDeclarationList 
    ;

variableDeclarationList
    : Var_ variableDeclaration (',' variableDeclaration)*
    ;

variableDeclaration
    : id=identifier (Assign exp=expression)? 
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


reservedWord
    : keyword
    | NullLiteral
    | BooleanLiteral
    ;

vectorDeclaration
    : Vector idx=vectorIndexes args=arguments?
    ;

mapDeclaration
    : Map args=arguments
    ;


vectorLiteral
    : '[' (expression (',' expression)*)? ']'
    ;

objectLiteral
    : '{' (identifierWithKeywords ':' expression (',' identifierWithKeywords ':' expression)*)? '}'
    ;


literal
    : nullLiteral       
    | booleanLiteral    
    | stringLiteral     
    | numericLiteral
    | vectorLiteral 
    | objectLiteral
    | vectorDeclaration
    | mapDeclaration   
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

identifier : Identifier;

identifierWithKeywords 
    : Identifier     #id
    | reservedWord   #keyw
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
    | Methods
    | Attributes
    ;

eos
    : SemiColon
    | EOF
    | {this.lineTerminatorAhead()}?
    | {this.closeBrace()}?
    ;