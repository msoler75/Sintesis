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