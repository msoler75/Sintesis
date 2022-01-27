
const exec = require('./bin/exec')
const fs = require('fs')

try {
  const input = fs.readFileSync('/Users/joe/test.txt', 'utf8')
  // console.log(data)
  exec(input)
} catch (err) {
  console.error(err)
}




`;

let inputx = `fun f(n){ if n<=1 return 1 else return n*f(n-1) } print f(3)`
let inputz = `fun s(a,b) { return a+b } print s(7, s(2, 3))`
let input = `
a=1
{
  var a=2
  b = vector [3]
  print a
  a=3
  print a
  print b
}
print a
`


