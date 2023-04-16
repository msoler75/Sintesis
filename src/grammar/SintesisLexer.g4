/*
*    Lexer Rules
*    Based on https://github.com/antlr/grammars-v4/blob/master/javascript/javascript/JavaScriptLexer.g4
*/


lexer grammar SintesisLexer;

channels { ERROR, COMMENTS }

MultiLineCommentJS:             '/*' .*? '*/' -> channel(2);
MultiLineCommentPy:             '"""' .*? '"""' -> channel(2);
MultiLineCommentPy2:            '\u0027\u0027\u0027' .*? '\u0027\u0027\u0027' -> channel(2);
SingleLineCommentJs:            '//' ~[\r\n\u2028\u2029]* -> channel(2);
SingleLineCommentPy:            '#' ~[\r\n\u2028\u2029]*  -> channel(2);
JavascriptCode:                 '{{' .*? '}}';

OpenBracket:                    '[';
CloseBracket:                   ']';
OpenParen:                      '(';
CloseParen:                     ')';
OpenBrace:                      '{'; 
CloseBrace:                     '}'; 
SemiColon:                      ';';
Comma:                          ',';
Assign:                         '=' | '<-';
QuestionMark:                   '?';
Colon:                          ':';
Ellipsis:                       '...';
Dot:                            '.';
PlusPlus:                       '++';
MinusMinus:                     '--';
Plus:                           '+';
Minus:                          '-';
BitNot:                         '~';
Not:                            '!'|'not';
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
NotEquals:                      '!=' | '<>';
IdentityEquals:                 '===';
IdentityNotEquals:              '!==';
BitAnd:                         '&';
BitXOr:                         '^';
BitOr:                          '|';
And:                            '&&'|'and';
Or:                             '||'|'or';
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
ARROW:                          '=>' | '->';


// PieceOfCode:                    ('?'|'??'|'???')[0-9]+;
PieceOfCode:                    ('\u00BF'|'\u00BF\u00BF'|'\u00BF\u00BF\u00BF')[0-9]+;

/// Null Literals

NullLiteral:                    'null'
                                |'nul'
                                |'nulo'
                                |'nullo'
                                |'void';


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
              |   'verdadeiro'
              |   'faux'
              |   'vrai'
              |   'certo'
              ;

/// Instructions

Step
: 'step'
| 'paso'
| 'passo'
| 'etape'
| '\u00E9tape'
;

Print
: 'print'
| 'imprimir'
| 'stampare'
| 'imprimer'
| 'imprimi'
| 'ecrire'
| '\u00E9crire'
;

While
              :   'while'
              |   'mientras'
              |   'mentre'
              |   'tantque'
              |   'enquanto'
              ;

Repeat         :   'repeat'
              |   'repetir'
              |   'repeteix'
              |   'repeter'
              |   'ripetere'
              |   'r\u00E9p\u00E9ter'
              ;

Times
: 'times'
| 'veces'
| 'volte'
| 'fois'
| 'vezes'
;

Do
: 'do'
| 'hacer'
| 'faire'
| 'fazer'
| 'agire'
;

Continue
: 'continue'
| 'continuar'
| 'continuez'
| 'prosseguir'
| 'continua'
;

Break
: 'break'
| 'salir'
| 'sortir'
| 'sair'
| 'uscire'
;

Switch
: 'switch'
| 'elegir'
| 'choisir'
| 'selecionar'
| 'scegliere'
;

Case
: 'case'
| 'caso'
| 'cas'
;

Default
: 'default'
| 'defecto'
| 'defaut'
| 'd\u00E9faut'
| 'padrao'
| 'padr\u00E3o'
;

Each            
              :   'each'
              |   'cada'
              |   'chaque'
              |   'ogni'
              ;

ForEach
              :   'for'[\t ]*'each'
              |   'para'[\t ]*'cada'
              |   'pour'[\t ]*'chaque'
              |   'per'[\t ]*'ogni'
              ;

For
              : 'for'
              | 'para'
              | 'pour'
              | 'per'
              ;

In
              :   'in'
              |   'en'
              |   'dans'
              |   'em'
              ;

Of
              :   'of'
              |   'de'
              |   'di'
              ;

To
              :   '..'
              |   'to'
              |   'hasta'
              ;

If            :    'if'
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
              |    'allora'
              |    'alors'
              |    'entao'
              |    'ent\u00E3o'
              ;

ElseIf
              :    'else'[ \t\n]*'if'
              |    'o'[ \t\n]*'si'
              |    'ou'[ \t\n]+'se'[ \t\n]+'for'?
              |    'ou'[ \t\n]+'si'
              |    'o'[ \t\n]+'s\u00E8'
              |    'o'[ \t\n]+'se'
              ;



Else
              :    'else'
              |     [yio][ \t\n]+'si'[ \t\n]+'no'
              |    'sino'
              |    'sinon'
              |    'altrimenti'
              |    'sen\u00E3o'
              |    'senao'
              ;


Return
              :    'return'
              |    'retornar'
              |    'regresar'
              |    'devolver'
              |    'ritornare '
              |    'renvoyer'
              |    'ret'
              ;


Declare
              :    'declare'
              |    'declarar'
              |    'dichiarare'
              |    'declarer '
              |    'd\u00E9clarer'
              |    'def'
              ;

Function_   
              :    'function'
              |    'funcion'
              |    'funci\u00F3n'
              |    'fonction'
              |    'funzione'
              |    'fun\u00E7ao'
              |    'fun\u00E7\u00E3o'
              |    'fun'
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
              :     'contar'
              |     'count'
              |     'tam'
              |     'dimensione'
              |     'dim'
              |     'taille'
              |     'tamanho'
              |     'longueur'
              |     'longitud'
              |     'len'
              |     'length'
              ;

IndexOf 
              :     'indexOf'
              |     'find'
              |     'search'
              |     'buscar'
              ;

Sub
              :     'sub'
              ;

Lower
              :     'lower'
              |     'minusculas'
              |     'min\u00FAsculas'
              |     'minuscule'
              |     'minuscolo'
              ;

Upper
              :     'upper'
              |     'mayusculas'
              |     'may\u00FAsculas'
              |     'maiusculas'
              |     'mai\u00FAsculas'
              ;

Math            
              :     'Math'
              |     'mates'
              ;

Min         
              :     'min'
              |     'm'[i\u00ED]'nimo'
              ;

Max         
              :     'm'[a\u00E1]'ximo'
              |     'm'[a\u00E1]'x'
              ;

Random        
              :     'random'
              |     'aleatorio'
              ;

Chr
              :     'chr'
              ;

Ord
              :     'ord'
              ;

Prompt
              :     'prompt'
              |     'input'
              |     'preguntar'
              |     'demander'
              |     'chiedere'
              |     'perguntar'
              ;

Convert
              :     'convert'
              |     'convertir'
              |     'conv'
              ;


Class_
              :     'class'
              |     'clase'
              |     'classe'
              ;

Instance
              :     'instance'
              |     'instancia'
              |     'istanza'
              ;

New_           
              :     'new'
              |     'nuev'[oa]
              |     'nouvelle'
              |     'nouveau'
              |     'nuov'[oa]
              |     'nov'[oa]
              ;

Extends     
              :     'extends'
              |     'extiende'
              |     'extende'
              |     'herda'
              ;

Attributes  
              :     'attributes'
              |     'atributos'
              |     'attributs'
              |     'attributi'
              |     'attrib'    
              ;

Methods
              :     'methods'
              |     'metodos'
              |     'm'[e\u00E9]'tod'[oe]'s'
              |     'm'[e\u00E9]'todes'
              |     'metodi'
              ;

Method         
              :    'method'
              |    'metodo'
              |    'm\u00E9todo'
              |    'm\u00E9tode'
              ;

Constructor
              :     'constructor'
              |     'construct'
              ;

Super
              :      'super'
              ;

InstanceOf
              :     'instanceof'
              |     'instanciade'
              |     'instancede'
              |     'istanzadi'
              |     'inst'[a\u00E2]'nciade' 
              |     'is'
              |     'es'
               ;

List
              :    'List'
              |    'Lista'
              |    'Elenco'
              |    'Liste'
              ;    

Dictionary
              :    'Dictionary'
              |    'Diccionario'
              |    'Dizionario'
              |    'Dictionnaire'
              |    'Dicion[a\u00E2]rio'
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
              |     '\u00E9tablir'
              |     'estabelecer'
              |     'est'
              ;

Var_
              :      'var'
              |      'let'
              ;

Const_ 
              :  'const'
              |  'final'
              ;


Private:                        'private' | 'privad'[oa] | 'privé' | 'priv\u00E9';
Public:                         'public' | 'p'[u\u00FA]'blic'[oa];
Protected:                      'protected' | 'protegid'[oa];

/// Identifier Names and Identifiers

// bug: https://github.com/antlr/antlr4/issues/3506

// Identifier: [$_]{0,2}[a-zA-Z][a-zA-Z_0-9]* ;

/// Identifier Names and Identifiers


// Identifier:                     [a-zA-Z$_áéíóúÁÉÍÓÚàèìòùÀÈÌÒÙñÑ][a-zA-Z$_áéíóúÁÉÍÓÚàèìòùÀÈÌÒÙñÑçÇ0-9]*;
Identifier:                     [a-zA-Z$_\u00E1\u00E9\u00ED\u00F3\u00FA\u00C1\u00C9\u00CD\u00D3\u00DA\u00E0\u00E8\u00EC\u00F2\u00F9\u00C0\u00C8\u00CC\u00D2\u00D9\u00F1\u00D1][a-zA-Z$_\u00E1\u00E9\u00ED\u00F3\u00FA\u00C1\u00C9\u00CD\u00D3\u00DA\u00E0\u00E8\u00EC\u00F2\u00F9\u00C0\u00C8\u00CC\u00D2\u00D9\u00F1\u00D1\u00E7\u00C70-9]*;

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

    