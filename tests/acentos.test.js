import exec from '../bin/exec.js'

test('acentos-1', async () => {
    expect(await exec(`
    á=1
    imprimir "áéíóú" + á
    `)).toContainText(`áéíóú1`)
})

test('acentos-2', async () => {
    expect(await exec(`
    códigos=[1,2,3]
    para cada(código en códigos) imprimir código
    `)).toContainText(`1 2 3`)
})

test('acentos-3', async () => {
    expect(await exec(`
    fun ímpetu(único) { imprimir único+"!"}
    ímpetu("adelante")
    `)).toContainText(`adelante!`)
})


test('acentos-4', async () => {
    expect(await exec(`
    clase ámbito { 
        único 
        
        métodos: 
        constructor(ámbito){
            atributos.único=ámbito
        } 
        únicamente(índole) {
            imprimir índole,único
        }
    }
    nuevo ámbito(1).únicamente(2)
    `)).toContainText(`2 1`)
})