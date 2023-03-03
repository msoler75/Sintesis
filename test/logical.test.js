import { expect } from 'chai';
import equalsIgnoringSpaces from '../chai-extensions.js';
import exec from "../bin/exec.js";


describe('Operaciones lógicas', () => {
    
     it('logical-1.0', async () => expect(await exec(
        `c = cierto
        f = falso
        imprimir f || f
        imprimir f || c
        imprimir c || f
        imprimir c || c`
    )).equalsIgnoringSpaces(`falso cierto cierto cierto`))

     it('logical-1.1', async () => expect(await exec(
        `c = cierto
        f = falso
        imprimir f && f
        imprimir f && c
        imprimir c && f
        imprimir c && c`
    )).equalsIgnoringSpaces(`falso falso falso cierto`))

     it('logical-1.2', async () => expect(await exec(
        `c = cierto
        f = falso
        imprimir !(f || f)
        imprimir !(f || c)
        imprimir !(c || f)
        imprimir !(c || c)`
    )).equalsIgnoringSpaces(`cierto falso falso falso`))

     it('logical-1.3', async () => expect(await exec(
        `c = cierto
        f = falso
        imprimir !(f && f)
        imprimir !(f && c)
        imprimir !(c && f)
        imprimir !(c && c)`
    )).equalsIgnoringSpaces(`cierto cierto cierto falso`))

     it('logical-1.4', async () => expect(await exec(
        `c = cierto
        f = falso
        imprimir !f || !f
        imprimir !f || !c
        imprimir !c || !f
        imprimir !c || !c`
    )).equalsIgnoringSpaces(`cierto cierto cierto falso`))

     it('logical-1.5', async () => expect(await exec(
        `c = cierto
        f = falso
        imprimir !f && !f
        imprimir !f && !c
        imprimir !c && !f
        imprimir !c && !c`
    )).equalsIgnoringSpaces(`cierto falso falso falso`))

     it('logical-2 reserved words', async () => expect(await exec(
        `
        c = vero
        f = faux
        imprimir c and f
        imprimir c or f
        imprimir not (c or f)
        imprimir not (c and f)
        `
    )).equalsIgnoringSpaces(`falso cierto falso cierto`))

})