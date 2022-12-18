# Sintesis

Lenguaje de programación para aprender a programar.

Desarrollado con la librería antlr4


# Compilar la gramática

Para compilar la gramática y generar los archivos en la carpeta ./lib

`yarn generate`

Esto generará los archivos necesarios de lexer y parser. 

Además llamará a la utilidad `to_async.js` que convertirá el archivo `lib/SintesisParser.js` a una versión que usa llamadas asíncronas.

Ejemplo:

```
accept(visitor) {
    if ( visitor instanceof SintesisParserVisitor ) {
        return visitor.visitLiteral(this);
    } else {
        return visitor.visitChildren(this);
    }
}
```

Se convierte en:

```
async accept(visitor) {
    if ( visitor instanceof SintesisParserVisitor ) {
        return await visitor.visitBooleanLiteral(this);
    } else {
        return await visitor.visitChildren(this);
    }
}
```

## Generar versión Java

`yarn generatejava`

