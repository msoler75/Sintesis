# Sintesis

Lenguaje de programación para aprender a programar.

Desarrollado con la librería antlr4


# Compilar la gramática

Para compilar la gramática y generar los archivos en la carpeta ./lib

## Paso 1

`yarn generate`

## Paso 2: después de generar, debes cambiar a la versión async/await en el archivo:

`lib/SintesisParser.js`

Para el archivo SintesisParser.js se añade async/await en todos los métodos `accept`

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

