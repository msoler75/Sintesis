import { Assertion, assert } from 'chai';


function equalsIgnoringSpaces(received, expected) {
    received = '' + received
    const r = received.replace(/([\W^áéíóúÁÉÍÓÚñÑ]+)/g, ' $1 ').split(/[\s\t\r\n]/).filter(x => !!x).join(" ").replace(/\s*,\s*/g, ',').replace(/- /g, '-')
    const e = expected.replace(/([\W^áéíóúÁÉÍÓÚñÑ]+)/g, ' $1 ').split(/[\s\t\r\n]/).filter(x => !!x).join(" ").replace(/\s*,\s*/g, ',').replace(/- /g, '-')
    
    const message = `Expected '${e}' but obtained '${r}'`;
    
    assert.strictEqual(r, e, message);
}

  
  Assertion.addMethod("equalsIgnoringSpaces", function (expected) {
    const obj = this._obj;
    equalsIgnoringSpaces(obj, expected);
  });
  
  export default equalsIgnoringSpaces;