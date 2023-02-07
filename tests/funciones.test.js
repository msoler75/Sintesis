import exec from '../bin/exec.js'

test('Funciones-1', async () => {
    expect(await exec(`
    funcion s() retornar 3
    imprimir s()
`)).toContainText(`3`)
})

test('Funciones-2', async () => {
    expect(await exec(`
    fun s() {imprimir 1 return 5}
    fun m(a,b) ret a*b
    s()
    imprimir m(2,3)
    imprimir m(s(),2)    
`)).toContainText(`1 6 1 10`)
})


test('Funciones-3', async () => {
    expect(await exec(`
    // factorial
    fun f(n) if n<=1 ret 1 else ret n*f(n-1)
    imprimir f(4)
    // suma
    fun s(a,b) ret a+b
    fun m(a,b) ret a*b
    imprimir s(7, m(2, 3))
`)).toContainText(`24 13`)
})



test('Funciones-4', async () => {
    expect(await exec(`
    fun depende(x) ret x-10
    {
        fun depende(x) ret x+10
        imprimir depende(5)
    }
    imprimir depende(5)
    `)).toContainText(`15 -5`)
})


test('Funciones-5', async () => {
    expect(await exec(`
    fun haceralgo(a) {
        fun suma_dos(a) {
            ret a+2
        }
        ret suma_dos(a)
    }
    imprimir haceralgo(3)
    `)).toContainText(`5`)
})



test('Funciones-6', async () => {
    expect(await exec(`
    fun negativo (x) {
        si(x<0) ret cierto
        y si no return falso
    }
    
    fun positivo (x) {
        return x>=0
    }
    
    imprimir negativo(3)
    imprimir negativo(-2)
    imprimir negativo(0)
    
    imprimir positivo(3)
    imprimir positivo(-2)
    imprimir positivo(0)    
`)).toContainText(`falso cierto falso cierto falso cierto`)
})


test('Funciones-7', async () => {
    expect(await exec(`
    // las variables deben conservar su valor local en las llamadas recursivas
    fun f(n) {
        n++
        if(n<3) f(n)
        imprimir n
    }
    f(0)
    imprimir n
    `)).toContainText(`3 2 1 nulo`)
})





test('Funciones-8', async () => {
    expect(await exec(`
    // las variables deben conservar su valor local en las llamadas recursivas
    fun f(n) {
        n++
        {
            e=1
            if(n<3) f(n)
            e++
            imprimir e
        }
    }
    f(0)
    `)).toContainText(`2 2 2`)
})



test('Funciones-9', async () => {
    expect(await exec(`
    class A {
        b
        constructor(c) {
            b=c
        }
    }

    contador = 33

    fun crear() {
        retornar nuevo A(contador++)
    }

    z = crear()
    imprimir z
    imprimir crear()
    `)).toContainText(`
    A {b: 33}
    A {b: 34}
    `)
})
