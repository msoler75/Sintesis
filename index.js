
import exec from './bin/exec.js'
import fs  from 'fs'

const file = process.argv[2]

if(!file) 
{
  console.log('Debes especificar un archivo')
  process.exit()
}

try {
  const input = fs.readFileSync(file, 'utf8')
  // console.log(data)
  exec(input)
} catch (err) {
  console.error(err)
}