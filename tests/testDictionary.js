import Dictionary from '../PublicClasses/Dictionary.js'

let dic = new Dictionary()
dic.set('1', 'jorge')
dic.set('3', 'jaime')

console.log(dic.get('3'))

dic.delete('3')

console.log(dic.get('3'))