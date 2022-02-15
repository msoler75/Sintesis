import {createVectorWithSizes} from '../src/internals/Factory.js'
import Vector from '../src/internals/Vector.js'

console.log(createVectorWithSizes([3,2], -1).text())

let v = new Vector([10, 20], 0)
console.log(v.text())

console.log(v.getRef(1).text())

v.setVariable(4, new Vector([50, 60], -2))
console.log(v.text())

console.log(v.getRef(4).getRef(1).text())