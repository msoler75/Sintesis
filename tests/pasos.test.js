import exec from '../bin/exec.js'

test('pasos', () => {
    expect(exec(`
    // esto es un comentario o nota
    paso 1
    // y aquí otro comentario
    paso dos
    `)).toContainText(``)
})
