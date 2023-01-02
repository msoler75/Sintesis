import fs from 'fs'

const fileParser = './src/lib/SintesisParser.js'
const fileSymbolParser = './src/SintesisSymbolParser.js'
const fileEval = './src/SintesisEval.js'

console.log('Convert to sync`d:')

fs.readFile(fileParser, 'utf8', function (err, data) {
  if (err) {
    return console.error(err);
  }

  var result = data
    .replace(/\basync\b/g, '')
    .replace(/\bwait\b/g, '')
    .replace(/SintesisParser(\.a?sync)?\.js/g, 'SintesisParser.sync.js')

  const fileToWrite = fileParser.replace(/\.(js|async)/g, '') + '.sync.js'
  fs.writeFile(fileToWrite, result, 'utf8', function (err) {
    if (err) return console.log(err);
    console.log('Written ' + fileToWrite)
    fs.copyFile(fileToWrite, fileParser, (err) => {
      if (err) {
        console.log("Error Found:", err);
      } else {
        console.log('Overwritten', fileParser)
      }
    })
  });
});


const files = [fileSymbolParser, fileEval]
for (var file of files)
  convert(file)

function convert(fileOriginal) {
  fs.readFile(fileOriginal, 'utf8', function (err, data) {
    if (err) {
      return console.error(err);
    }

    var result = data
      .replace(/ArrayUtils\b/, 'ArrayUtilsHacked')
      .replace(/\basync\b/g, '')
      .replace(/\bawait\b/g, '')

    const fileToWrite = fileOriginal.replace(/\.(js|async)/g, '') + '.sync.js'
    fs.writeFile(fileToWrite, result, 'utf8', function (err) {
      if (err) return console.log(err);
      console.log('Written ' + fileToWrite)
      fs.copyFile(fileToWrite, fileOriginal, (err) => {
        if (err) {
          console.log("Error Found:", err);
        } else {
          console.log('Overwritten', fileOriginal)
        }
      })
    });
  })
}