import {createVectorWithSizes} from '../src/internals/Factory.js'
import Vector from '../src/internals/Vector.js'
import Map from '../src/internals/Map.js'


test('Vector-class-basic-1', () => {
    expect(createVectorWithSizes([3,2], -1).text()).toContainText('[[-1, -1], [-1, -1], [-1, -1]]')

    let v = new Vector([10, 20], 0)
    expect(v.text()).toContainText('[10, 20]')

    expect(v.getRef(1).text()).toContainText('20')

    v.setVariable(4, new Vector([50, 60], -2))
    expect(v.text()).toContainText('[10, 20, 0, 0, [50, 60]]')

    expect(v.getRef(4).getRef(1).text()).toContainText('60')
})



test('Vector-class-basic-2', () => {
    
    let v = new Vector([10, 20], -1)
    let m = new Map({'j':1, 'p': 2})
    v.setVariable(3, m)
    expect(v.text()).toContainText('[10, 20, -1, {j: 1, p: 2}]')

    v.setValue(5, 55)
    expect(v.text()).toContainText('[10, 20, -1, {j: 1, p: 2}, -1, 55]')
})


test('Vector-class-delete', () => {
    
    let v = new Vector([10, 20, 30, 40], -1)
    v.delete(4)
    v.delete(2)
    expect(v.text()).toContainText('[10, 20, -1, 40]')
    v.delete(3)
    expect(v.text()).toContainText('[10, 20, -1]')
})