import exec from '../bin/exec.js'
test('logical-1', async () => {
    
    expect(await exec(
        `c = cierto
        f = falso
        imprimir f || f
        imprimir f || c
        imprimir c || f
        imprimir c || c`
    )).toContainText(`falso cierto cierto cierto`)

    expect(await exec(
        `c = cierto
        f = falso
        imprimir f && f
        imprimir f && c
        imprimir c && f
        imprimir c && c`
    )).toContainText(`falso falso falso cierto`)

    expect(await exec(
        `c = cierto
        f = falso
        imprimir !(f || f)
        imprimir !(f || c)
        imprimir !(c || f)
        imprimir !(c || c)`
    )).toContainText(`cierto falso falso falso`)

    expect(await exec(
        `c = cierto
        f = falso
        imprimir !(f && f)
        imprimir !(f && c)
        imprimir !(c && f)
        imprimir !(c && c)`
    )).toContainText(`cierto cierto cierto falso`)

    expect(await exec(
        `c = cierto
        f = falso
        imprimir !f || !f
        imprimir !f || !c
        imprimir !c || !f
        imprimir !c || !c`
    )).toContainText(`cierto cierto cierto falso`)

    expect(await exec(
        `c = cierto
        f = falso
        imprimir !f && !f
        imprimir !f && !c
        imprimir !c && !f
        imprimir !c && !c`
    )).toContainText(`cierto falso falso falso`)

})

test('logical-2 reserved words', async () => {    
    expect(await exec(
        `
        c = vero
        f = faux
        imprimir c and f
        imprimir c or f
        imprimir not (c or f)
        imprimir not (c and f)
        `
    )).toContainText(`falso cierto falso cierto`)

})