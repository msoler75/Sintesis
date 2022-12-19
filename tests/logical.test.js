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

test('logical-2 tipografic', () => {    
    expect(exec(
        `c = vero
        f = faux
        
        imp c Y f
        imp c AND f
        imp c ET f
        imp c E f
        
        imp c O f
        imp c OR f
        imp c OU f
        
        imp NOT (c || f)
        imp NAO (c && f)
        imp NON (c || f)
        imp NÃO (c && f)
`
    )).toContainText(`falso falso falso falso cierto cierto cierto falso cierto falso cierto`)

})