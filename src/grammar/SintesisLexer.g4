/*
*    Lexer Rules
*    Based on https://github.com/antlr/grammars-v4/blob/master/javascript/javascript/JavaScriptLexer.g4
*/


lexer grammar SintesisLexer;

channels { ERROR }


MultiLineComment:               '/*' .*? '*/';
SingleLineComment:              '//' ~[\r\n\u2028\u2029]*;

OpenBracket:                    '[';
CloseBracket:                   ']';
OpenParen:                      '(';
CloseParen:                     ')';
OpenBrace:                      '{'; 
CloseBrace:                     '}'; 
SemiColon:                      ';';
Comma:                          ',';
Assign:                         '=';
QuestionMark:                   '?';
Colon:                          ':';
Ellipsis:                       '-...-';
Dot:                            '.';
PlusPlus:                       '++';
MinusMinus:                     '--';
Plus:                           '+';
Minus:                          '-';
BitNot:                         '~';
Not:                            '!';
Multiply:                       '*';
Divide:                         '/';
Modulus:                        '%';
Power:                          '**';
NullCoalesce:                   '??';
Hashtag:                        '#';
RightShiftArithmetic:           '>>';
LeftShiftArithmetic:            '<<';
RightShiftLogical:              '>>>';
LessThan:                       '<';
MoreThan:                       '>';
LessThanEquals:                 '<=';
GreaterThanEquals:              '>=';
Equals_:                        '==';
NotEquals:                      '!=';
IdentityEquals:                 '===';
IdentityNotEquals:              '!==';
BitAnd:                         '&';
BitXOr:                         '^';
BitOr:                          '|';
And:                            '&&';
Or:                             '||';
MultiplyAssign:                 '*=';
DivideAssign:                   '/=';
ModulusAssign:                  '%=';
PlusAssign:                     '+=';
MinusAssign:                    '-=';
LeftShiftArithmeticAssign:      '<<=';
RightShiftArithmeticAssign:     '>>=';
RightShiftLogicalAssign:        '>>>=';
BitAndAssign:                   '&=';
BitXorAssign:                   '^=';
BitOrAssign:                    '|=';
PowerAssign:                    '**=';
ARROW:                          '=>';

/// Null Literals

NullLiteral:                    'null';


/// Numeric Literals

DecimalLiteral:                 DecimalIntegerLiteral '.' [0-9] [0-9_]* ExponentPart?
              |                 '.' [0-9] [0-9_]* ExponentPart?
              |                 DecimalIntegerLiteral ExponentPart?
              ;

/// Numeric Literals

HexIntegerLiteral:              '0' [xX] [0-9a-fA-F] HexDigit*;
OctalIntegerLiteral:            '0' [0-7]+;
OctalIntegerLiteral2:           '0' [oO] [0-7] [_0-7]*;
BinaryIntegerLiteral:           '0' [bB] [01] [_01]*;

BigHexIntegerLiteral:           '0' [xX] [0-9a-fA-F] HexDigit* 'n';
BigOctalIntegerLiteral:         '0' [oO] [0-7] [_0-7]* 'n';
BigBinaryIntegerLiteral:        '0' [bB] [01] [_01]* 'n';
BigDecimalIntegerLiteral:       DecimalIntegerLiteral 'n';


/// Boolean Literals

BooleanLiteral:   'true'
              |   'false'
              |   'cierto'
              |   'falso'
              |   'vero'
              |   'faux'
              |   'vrai'
              |   'certo'
              ;

/// Instructions

Step          
              :   'step'
              |   'paso'
              |   'passo'
              |   'pas'
              ;

Print                   
              :   'print'
              |   'imprimir'
              |   'stampa'
              |   'imprimer' 
              |   'imp'
              |   'prt'
              |   'prn'
              ;

While
              :   'while'
              |   'mientras'
              |   'mentre'
              |   'tantque'
              |   'enquanto'
              ;

Repeat      
              :   'repeat'
              |   'repetir'
              |   'repeteix'
              |   'repeter'
              |   'répéter'
              |   'ripetere'
              |   'rep'
              ;

Times
              :   'times'
              |   'veces'
              ;

Do
              :   'do'
              |   'hacer'
              ;

For
              :   'for'
              |   'para'
              ;

Each            
              :   'each'
              |   'cada'
              ;

ForEach
              :   'foreach'
              |   'paracada'
              ;
In
              :   'in'
              |   'en'
              ;

Of
              :   'of'
              |   'de'
              ;

To
              :   '..'
              |   'to'
              |   'hasta'
              ;

If     
              :    'if'
              |    'si'
              |    'se'
              |    'sì'
              ;

Then
              :    'then'
              |    'entonces'
              |    'llavors'
              |    'poi'
              |    'ensuite'
              |    'entao'
              |    'então'
              |    'ent'
              ;

ElseIf
              :    'else'[ \t\n]*'if'
              |    'o'[ \t\n]+'si'
              |    'ou'[ \t\n]+'se'[ \t\n]+'for'?
              |    'ou'[ \t\n]+'si'
              |    'o'[ \t\n]+'sè'
              |    'o'[ \t\n]+'se'
              ;

Else
              :    'else'
              |    'y'[ \t\n]+'si'[ \t\n]+'no'
              |    'i'[ \t\n]+'si'[ \t\n]+'no'
              |    'o'
              |    'altrament'
              |    'sinon'
              |    'altrimenti'
              |    'senã'[ \t\n]+'o'
              |    'sena'[ \t\n]+'o'
              ;

Return
              :    'return'
              |    'retorna'
              |    'retornar'
              |    'retourner'
              |    'restituisce'
              |    'renvoie'
              |    'ret'
              ;

Function_   
              :    'function'
              |    'funcion'
              |    'función'
              |    'fonction'
              |    'funzione'
              |    'funçao'
              |    'função'
              |    'fun'
              ;

Vector
              :    'vector'
              |    'array'
              |    'matriu'
              |    'arreglo'
              |    'vecteur'
              |    'deployer'
              |    'déployer'
              |    'vettore'
              |    'vetor'
              |    'variedade'
              |    'vec'
              |    'arr'
              ;    

Delete          
              :     'delete'
              |     'eliminar'
              |     'rimouvere'
              |     'supprimier'
              |     'remover'
              |     'del'
              |     'rem'
              |     'rim'
              |     'sup'
              ;

NumberOf       
              :     'num'
              |     'numero'
              |     'tamano'
              |     'tamaño'
              |     'size'
              |     'length'
              |     'len'
              |     'tam'
              |     'dimensione'
              |     'dim'
              |     'taille'
              |     'tamanho'
              |     'longueur'
              ;

New_            
              :     'new'
              |     'nuevo'
              |     'nueva'
              ;

Class_
              :     'class'
              |     'clase'
              ;

Extends     
              :     'extends'
              |     'extiende'
              ;

Attributes  
              :     'attributes'
              |     'atributos'
              |     'attrib'     
              ;

Methods
              :     'methods'
              |     'metodos'
              |     'métodos'
              ;

Super
              :      'super'
              |      'padre'
              ;

InstanceOf
               :      'is'
               |      'es'
               ;


// Mapa
Map
              :    'map'
              |    'mapa'
              |    'carte'
              |    'mappa'
              ;

Get  
              :     'get'
              |     'obtener'
              |     'obtenir'
              |     'ottenere'
              |     'obter'
              ;

Set  
              :     'set'
              |     'establecer'
              |     'establir'
              |     'asignar'
              |     'assignar'
              |     'stabilire'
              |     'etablir'
              |     'établir'
              |     'estabelecer'
              |     'est'
              ;

Var
              :      'var'
              ;

/// Identifier Names and Identifiers

// bug: https://github.com/antlr/antlr4/issues/3506

// Identifier: [$_]{0,2}[a-zA-Z][a-zA-Z_0-9]* ;

/// Identifier Names and Identifiers

Identifier:                     IdentifierStart IdentifierPart*;

// Strings

StringLiteral:                 ('"' DoubleStringCharacter* '"'
             |                  '\'' SingleStringCharacter* '\'') 
             ;

WhiteSpaces:                    [\t\u000B\u000C\u0020\u00A0]+ -> channel(HIDDEN);

LineTerminator:                 [\r\n\u2028\u2029] -> channel(HIDDEN);


fragment DoubleStringCharacter
    : ~["\\\r\n]
    | '\\' SingleEscapeCharacter
    ;
fragment SingleStringCharacter
    : ~['\\\r\n]
    | '\\' SingleEscapeCharacter
    ;

fragment SingleEscapeCharacter
    : ['"\\bfnrtv]
    ;

fragment HexDigit
    : [_0-9a-fA-F]
    ;
fragment DecimalIntegerLiteral
    : '0'
    | [1-9] [0-9_]*
    ;
fragment ExponentPart
    : [eE] [+-]? [0-9_]+
    ;

    
fragment IdentifierPart
    : IdentifierStart
    | [\p{Mn}]
    | [\p{Nd}]
    | [\p{Pc}]
    | '\u200C'
    | '\u200D'
    ;
fragment IdentifierStart
    : [\p{L}]
    | [$_]
    ;
