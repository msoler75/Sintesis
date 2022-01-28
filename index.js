import exec from './bin/exec.js'
import fs from 'fs'


const file = process.argv[2]

if (!file) {
  console.log('Debes especificar un archivo')
  process.exit()
}


try {
  const input = fs.readFileSync(file, 'utf8')
  const lines = input.split('\n')

  function mostrarError(err, titulo) {
    let line = lines[err.line-1]
    let numline = 'Línea '+err.line + ':   '
    console.log(numline+line)
    console.log(' '.repeat(numline.length+err.column) + '^'.repeat(err.stop-err.start+1))
    console.log(titulo, err.msg, err.stop - err.start, err.line, err.column)
  }

  try {
    console.log(exec(input))
  } catch (err) {
    if (err instanceof SyntaxError) {
      let data = JSON.parse(err.message)
      mostrarError(data, 'Error de sintaxis:')
    } else {
      //SintesisError
      mostrarError(err, 'Error en la ejecución:')
    }
  }
} catch (err) {
  console.log(`Error al leer el archivo ${file}`)
}