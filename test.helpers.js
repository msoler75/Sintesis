import assert from 'assert'

function tc(received, expected) {
    received = '' + received
    const r = received.replace(/([\W^áéíóúÁÉÍÓÚñÑ]+)/g, ' $1 ').split(/[\s\t\r\n]/).filter(x => !!x).join(" ").replace(/\s*,\s*/g, ',').replace(/- /g, '-')
    const e = expected.replace(/([\W^áéíóúÁÉÍÓÚñÑ]+)/g, ' $1 ').split(/[\s\t\r\n]/).filter(x => !!x).join(" ").replace(/\s*,\s*/g, ',').replace(/- /g, '-')
    
    const message = `Expected '${expected}' but obtained '${received}'`;
    assert(r===e, message);
}


export default function expect(output) {
    return {
        toContainText: function(expected) {
            tc(output, expected)
        }
    }
  }
