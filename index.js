import exec from './bin/exec.js'
import fs from 'fs'

import SintesisError from './src/SintesisError.js'


const file = process.argv[2]

if (!file) {
  console.log('Debes especificar un archivo o un programa')
  process.exit()
}

let input
if (file.match(/.*\.sint?(tesis)?$/) || fs.existsSync(file)) {
  try {
    input = fs.readFileSync(file, 'utf8')
  } catch (err) {
    console.log(`Error al leer el archivo ${file}`)
  }
} else {
  input = file
}


if (input) {
  const lines = input.split('\n')

  function mostrarError(err, titulo) {
    let line = lines[err.line - 1]
    let numline = 'Línea ' + err.line + ':   '
    console.log(numline + line)
    console.log(' '.repeat(numline.length + err.column) + '^'.repeat(err.stop - err.start + 1))
    console.log(titulo, err.msg, err.stop - err.start, err.line, err.column)
  }

  try {
    console.log(exec(input))
  } catch (err) {
    if (err instanceof SyntaxError) {
      try {
        let data = JSON.parse(err.message)
        mostrarError(data, 'Error de sintaxis:')
      } catch (err2) {
        console.error(err2)
        console.error(err)
      }
    } else if (err instanceof SintesisError) {
      //SintesisError
      mostrarError(err, 'Error en la ejecución:')
    } else
      console.error(err)
  }
}