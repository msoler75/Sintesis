import exec from '../bin/exec.js'

test('acentos-1', () => {
    expect(exec(`
    á=1
    imp "áéíóú" + á
    `)).toContainText(`áéíóú1`)
})

test('acentos-2', () => {
    expect(exec(`
    códigos=[1,2,3]
    para cada(código en códigos) imp código
    `)).toContainText(`1 2 3`)
})

test('acentos-3', () => {
    expect(exec(`
    fun ímpetu(único) { impr único+"!"}
    ímpetu("adelante")
    `)).toContainText(`adelante!`)
})


test('acentos-4', () => {
    expect(exec(`
    clase ámbito { 
        único 
        
        métodos: 
        constructor(ámbito){
            atributos.único=ámbito
        } 
        únicamente(índole) {
            imp índole,único
        }
    }
    nuevo ámbito(1).únicamente(2)
    `)).toContainText(`2 1`)
})