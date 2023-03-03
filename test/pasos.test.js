import { expect } from 'chai';
import equalsIgnoringSpaces from '../chai-extensions.js';
import exec from "../bin/exec.js";

describe('Pasos', () => {
      it('pasos', async () => expect(await exec(`
    // esto es un comentario o nota
    paso 1
    // y aquí otro comentario
    paso dos
    `)).equalsIgnoringSpaces(``))
})