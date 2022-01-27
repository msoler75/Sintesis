/*
*    Lexer Rules
*    Based on https://github.com/antlr/grammars-v4/blob/master/javascript/javascript/JavaScriptLexer.g4
*/


lexer grammar SintesisLexer;

channels { ERROR }

options { 
    superClass=SintesisLexerBase; 
}


MultiLineComment:               '/*' .*? '*/';
SingleLineComment:              '//' ~[\r\n\u2028\u2029]*;

OpenBracket:                    '[';
CloseBracket:                   ']';
OpenParen:                      '(';
CloseParen:                     ')';
OpenBrace:                      '{' {this.ProcessOpenBrace();};
CloseBrace:                     '}' {this.ProcessCloseBrace();};
SemiColon:                      ';';
Comma:                          ',';
Assign:                         '=';
QuestionMark:                   '?';
Colon:                          ':';
Ellipsis:                       '...';
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
              |   'r' [eé] 'p' [eé] 'ter'
              |   'ripetere'
              |   'rep'
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
              |    'ent' [aã] 'o'
              |    'ent'
              ;

ElseIf
              :    'else if'
              |    'elseif'
              |    'o si'
              |    'ou se' ' for'?
              |    'ou si'
              |    'o s' [èe]
              ;

Else
              :    'else'
              |    'y si no'
              |    'i si no'
              |    'altrament'
              |    'sinon'
              |    'altrimenti'
              |    'sen' [ãa] ' o'
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
              |    'funci' [óo] 'n'
              |    'fonction'
              |    'funzione'
              |    'fun' [çc][aã] 'o'
              |    'fun'
              ;

Vector
              :    'vector'
              |    'array'
              |    'matriu'
              |    'arreglo'
              |    'vecteur'
              |    'd' [eé] 'ployer'
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
              |     'tama' [nñ] 'o'
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
              ;

Super
              :      'super'
              |      'padre'
              ;

InstanceOf
               :      'is'
               |      'es'
               ;


// DICCIONARIO
Dictionary
              :    'dictionary'
              |    'diccionario'
              |    'diccionari'
              |    'dictionnaire'
              |    'dizionario'
              |    'dicion' [aá] 'rio'
              |    'mapa'
              |    'carte'
              |    'mappa'
              |    'map'
              |    'dict'
              |    'dic'
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
              |     'stabilire'
              |     [eé] 'tablir'
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
