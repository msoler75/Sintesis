import exec from './lib/exec.js'
import fs from 'fs'

import SintesisError from './src/SintesisError.js'


const command_arg = process.argv[2]

if (!command_arg) {
  console.log('Debes especificar un archivo o un programa')
  process.exit()
}

let sintesis_code = command_arg
let file = command_arg
if (file.match(/.*\.s(in|intesis)?$/) || fs.existsSync(file)) {
  try {
    sintesis_code = fs.readFileSync(file, 'utf8')
  } catch (err) {
    console.log(`Error al leer el archivo ${file}`)
    process.exit();
  }
} 


if (sintesis_code) {
  const lines = sintesis_code.split('\n')

  function mostrarError(titulo, err) {
    let line = lines[err.line - 1]
    let numline = 'Línea ' + err.line + ':   '
    console.log(numline + line)
    console.log(' '.repeat(numline.length + err.column) + '^'.repeat(err.stop - err.start + 1))
    console.log(titulo, err.msg
      .replace('extraneous', 'extraña')
      .replace('input', 'entrada')
      .replace('expecting', 'esperaba')
      .replace('mismatched', 'no coincide')
      .replace('alternative', 'alternativa')
      .replace(/\bat\b/, 'en')
      .replace('no viable alternativa en entrada', 'no se esperaba')
      .replace('missing', 'se esperaba')
      )
  }

  try {
    console.log(exec(sintesis_code))
  } catch (err) {
    if (err instanceof SyntaxError) {
      const data = JSON.parse(err.message)
      mostrarError('Error de sintaxis:', data)
    } else if (err instanceof SintesisError) {
      //SintesisError
      mostrarError('Error en la ejecución:', err)
    } else
      console.error(err)
  }
}