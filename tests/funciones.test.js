import exec from '../bin/exec.js'

test('Funciones-0', () => {
    expect(exec(`
    funcion s() retornar 3
    imprimir s()
`)).toContainText(`3`)
})

test('Funciones-1', () => {
    expect(exec(`
    fun s() {print 1 return 5}
    fun m(a,b) ret a*b
    s()
    imprimir m(2,3)
    imprimir m(s(),2)    
`)).toContainText(`1 6 1 10`)
})


test('Funciones-2', () => {
    expect(exec(`
    // factorial
    fun f(n) if n<=1 ret 1 else ret n*f(n-1)
    print f(4)
    // suma
    fun s(a,b) ret a+b
    fun m(a,b) ret a*b
    print s(7, m(2, 3))
`)).toContainText(`12 24`)
})



test('Funciones-3', () => {
    expect(exec(`
    fun depende(x) ret x-10
    {
        fun depende(x) ret x+10
        imprimir depende(5)
    }
    imprimir depende(5)
    `)).toContainText(`15 -5`)
})


test('Funciones-4', () => {
    expect(exec(`
    fun haceralgo(a) {
        fun suma_dos(a) {
            ret a+2
        }
        ret suma_dos(a)
    }
    imprimir haceralgo(3)
    `)).toContainText(`5`)
})

