import exec from '../bin/exec.js'
test('Variables-1', () => {
    expect(exec(`a=1 imprimir a`)).toBe('1\n')

    expect(exec(`
    // imprime una variable no declarada
    imprimir a

    // asigna un valor a una variable, y como no existe, la crea
    a = 1

    // imprime el valor de a
    imprimir a

    // creamos un contexto { }
    {
        a = 2
        imprimir a
    }

    imprimir a

    // nuevo contexto { } 
    { 
        // declaración de la variable a en este contexto
        var a
        
        // asignamos el valor de a
        a = 3

        // lo imprimimos
        impimir a

        // cuando termina este contexto, la variable a de este contexto desaparece
    }

    imprimir a
`)).toBe('1\n')
})

/* const result = exec(`a=1 imprimir a`)
console.log('RESULT:')
console.log(result)
*/