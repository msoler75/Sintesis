import exec from '../bin/exec.js'
test('Variables-1', async () => {
    expect(await exec(`a=1 imprimir a`)).toContainText('1')
})

test('Variables-2', async () => {
    expect(await exec(`
    // asigna un valor a una variable, y como no existe, la crea
    a = 1

    // imprime el valor de a
    imprimir a

    // creamos un contexto 
    {
        a = 2
        imprimir a
    }

    imprimir a

    // nuevo contexto  
    { 
        // declaración de la variable a en este contexto
        var a = 3
        
        // lo imprimimos
        imprimir a

        // cuando termina este contexto, la variable a de este contexto desaparece
    }

    imprimir a
`)).toContainText('1 2 2 3 2')
})


test('Variables-3', async () => {
    expect(await exec(`
    a = 3
    {
        var a = [1,2,3]
        imprimir a
    }
    imprimir a
`)).toContainText('[1, 2, 3] 3')
})