import exec from '../bin/exec.js'


test('Deep objects-1', () => {

    expect(exec(`
    a={e:1}
    a['k'] = {o:2}
    imp a
    `)).toContainText(`{e: 1, k: {o: 2}}`)

})




test('Deep objects-2', () => {

    expect(exec(`
    b={i:1,j:[2,{m:[3,4]}]} 
    b['k']=map({n:6})
    b.o='Hola'
    imp b
    `)).toContainText(`{i: 1, j: [2, {m: [3, 4]}], k: {n: 6}, o: Hola}`)

})