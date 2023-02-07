import fs from 'fs'

const fileParser = './src/lib/SintesisParser.js'
const fileSymbolParser = './src/SintesisSymbolParser.js'
const fileEval = './src/SintesisEval.js'

console.log('Convert to async/await version:')

fs.readFile(fileParser, 'utf8', function (err, data) {
  if (err) {
    return console.error(err);
  }

  var result = data
    .replace(/accept\(visitor\)/g, 'async accept(visitor)')
    .replace(/visitor\.visit/g, 'await visitor.visit')
    .replace(/(async\s+){2,8}/g, 'async ')
    .replace(/(await\s+){2,8}/g, 'await ')

  const fileToWrite = fileParser.replace(/\.(js|sync)/g, '') + '.async.js'
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
      .replace(/\basync\b/g, '')
      .replace(/\bawait\b/g, '')
      .replace(/ArrayUtilsHacked/, 'ArrayUtils')
      .replace(/[\t\s]visit([A-Z])/g, ' async visit$1')
      .replace(/[\t\s]callToFunction/g, 'async callToFunction')
      .replace(/[\t\s]visit\s*\(/g, 'async visit(')
      .replace(/this\.visit/g, 'await this.visit')
      .replace(/[\t\s]accept\b/g, 'async accept')
      .replace(/return\s+visitor\./g, 'return await visitor.')
      .replace(/ctx\.(.*?[\r\n]*.*?)map(Async)?Sequence\s*\(/g, 'await ctx.$1mapAsyncSequence(async ')
      .replace(/\.mapAsyncSequence\(\(/g, '.mapAsyncSequence(async(')
      .replace(/SintesisParser(\.a?sync)?\.js/g, 'SintesisParser.async.js')
      .replace(/(async\s+){2,8}/g, 'async ')
      .replace(/(await\s+){2,8}/g, 'await ')

    const fileToWrite = fileOriginal.replace(/\.(js|sync)/g, '') + '.async.js'
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
  });
}