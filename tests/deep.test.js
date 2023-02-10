import exec from '../bin/exec.js'


test('Deep objects-1', async () => {

    expect(await exec(`
    a={e:1}
    a['k'] = {x:2}
    imprimir a
    `)).toContainText(`{e: 1, k: {x: 2}}`)

})




test('Deep objects-2', async () => {

    expect(await exec(`
    b={i:1,j:[2,{m:[3,4]}]} 
    b['k']={n:6}
    b.x='Hola'
    imprimir b
    `)).toContainText(`{i: 1, j: [2, {m: [3, 4]}], k: {n: 6}, x: Hola}`)

})