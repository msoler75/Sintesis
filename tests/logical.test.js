import exec from '../bin/exec.js'
test('logical-1', () => {
    
    expect(exec(
        `c = cierto
        f = falso
        imp f || f
        imp f || c
        imp c || f
        imp c || c`
    )).toContainText(`false true true true`)

    expect(exec(
        `c = cierto
        f = falso
        imp f && f
        imp f && c
        imp c && f
        imp c && c`
    )).toContainText(`false false false true`)

    expect(exec(
        `c = cierto
        f = falso
        imp !(f || f)
        imp !(f || c)
        imp !(c || f)
        imp !(c || c)`
    )).toContainText(`true false false false`)

    expect(exec(
        `c = cierto
        f = falso
        imp !(f && f)
        imp !(f && c)
        imp !(c && f)
        imp !(c && c)`
    )).toContainText(`true true true false`)

    expect(exec(
        `c = cierto
        f = falso
        imp !f || !f
        imp !f || !c
        imp !c || !f
        imp !c || !c`
    )).toContainText(`true true true false`)

    expect(exec(
        `c = cierto
        f = falso
        imp !f && !f
        imp !f && !c
        imp !c && !f
        imp !c && !c`
    )).toContainText(`true false false false`)

})