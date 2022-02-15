import Map from '../src/internals/Map.js'
import Vector from '../src/internals/Vector.js'
import Variable from '../src/internals/Variable.js'
import variableCreate from '../src/internals/Factory.js'

test('Vector-class-with-map', () => {

    let v = new Vector([10, 20], -1)
    let m = new Map({
        'j': 1,
        'p': 2
    })
    v.setVariable(3, m)
    m.setValue('k', 77)
    expect(v.text()).toContainText('[10, 20, -1, {j: 1, p: 2, k: 77}]')
    expect(v.getRef(3).getRef('p').text()).toContainText('2')
    
    m.delete('j')
    expect(v.getRef(3).text()).toContainText('{p: 2, k: 77}')
    
    let x = new Variable(55)
    m.setVariable('fifty', x)
    expect(v.getRef(3).text()).toContainText('{p: 2, k: 77, fifty: 55}')
})


test('Map-class-with-Vector', () => {
    let m = new Map()
    m.setValue('j', 1)
    m.setVariable('k', new Variable(2))

    let n = new Map({ i: 3 })
    m.setVariable('dicc', n)
    n.setValue('z', 99)

    n.setVariable('x', new Vector([7, 8]))

    expect(m.text()).toContainText('{j: 1, k: 2, dicc: {i: 3, z: 99, x: [7, 8]}}')
})