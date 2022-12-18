import fs from 'fs'

const fileToChange = './src/lib/SintesisParser.js'

fs.readFile(fileToChange, 'utf8', function (err, data) {
  if (err) {
    return console.error(err);
  }
  console.log('Converting', fileToChange, 'to async/await version...')
  var result = data
  .replace(/accept\(visitor\)/g, 'async accept(visitor)')
  .replace(/return visitor/g, 'return await visitor')

  fs.writeFile(fileToChange, result, 'utf8', function (err) {
    if (err) return console.log(err);
    console.log('Finished!')
  });
});