import exec from '../bin/exec.js'


test('map-1', () => {
    expect(exec(`
    usuarios = mapa()
    usuarios[12] = 'jorge'
    usuarios[24] = 'jaime'

    imprimir usuarios
    imprimir num(usuarios)
    `)).toContainText(`{12: jorge, 24: jaime} 2`)
})

test('map-2', () => {
    expect(exec(`
    a = mapa()
    a['jorge'] = mapa()
    a['jorge']['manuel'] = 123
    imprimir a
    `)).toContainText(`{jorge: {manuel: 123}}`)
})

test('map-3', () => {
    expect(exec(`
    a = mapa()
    a['jorge'] = 33
    a['jaime'] = 77
    imprimir buscar(a, 77), buscar(a, 99)
    `)).toContainText(`jaime nulo`)
})