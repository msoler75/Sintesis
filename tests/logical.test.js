import exec from '../bin/exec.js'
test('logical-1', () => {
    
    expect(exec(
        `c = cierto
        f = falso
        imp f || f
        imp f || c
        imp c || f
        imp c || c`
    )).toContainText(`falso cierto cierto cierto`)

    expect(exec(
        `c = cierto
        f = falso
        imp f && f
        imp f && c
        imp c && f
        imp c && c`
    )).toContainText(`falso falso falso cierto`)

    expect(exec(
        `c = cierto
        f = falso
        imp !(f || f)
        imp !(f || c)
        imp !(c || f)
        imp !(c || c)`
    )).toContainText(`cierto falso falso falso`)

    expect(exec(
        `c = cierto
        f = falso
        imp !(f && f)
        imp !(f && c)
        imp !(c && f)
        imp !(c && c)`
    )).toContainText(`cierto cierto cierto falso`)

    expect(exec(
        `c = cierto
        f = falso
        imp !f || !f
        imp !f || !c
        imp !c || !f
        imp !c || !c`
    )).toContainText(`cierto cierto cierto falso`)

    expect(exec(
        `c = cierto
        f = falso
        imp !f && !f
        imp !f && !c
        imp !c && !f
        imp !c && !c`
    )).toContainText(`cierto falso falso falso`)

})

test('logical-2 reserved words', () => {    
    expect(exec(
        `
        c = vero
        f = faux
        imp c and f
        imp c or f
        imp not (c or f)
        imp not (c and f)
        `
    )).toContainText(`falso cierto falso cierto`)

})