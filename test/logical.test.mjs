import { expect } from 'chai';
import equalsIgnoringSpaces from '../chai-extensions.js';
import exec from "../bin/exec.js";


describe('logical-1',() => {
    
    it('', async () => expect(await exec(
        `c = cierto
        f = falso
        imprimir f || f
        imprimir f || c
        imprimir c || f
        imprimir c || c`
    )).equalsIgnoringSpaces(`falso cierto cierto cierto`))

    it('', async () => expect(await exec(
        `c = cierto
        f = falso
        imprimir f && f
        imprimir f && c
        imprimir c && f
        imprimir c && c`
    )).equalsIgnoringSpaces(`falso falso falso cierto`))

    it('', async () => expect(await exec(
        `c = cierto
        f = falso
        imprimir !(f || f)
        imprimir !(f || c)
        imprimir !(c || f)
        imprimir !(c || c)`
    )).equalsIgnoringSpaces(`cierto falso falso falso`))

    it('', async () => expect(await exec(
        `c = cierto
        f = falso
        imprimir !(f && f)
        imprimir !(f && c)
        imprimir !(c && f)
        imprimir !(c && c)`
    )).equalsIgnoringSpaces(`cierto cierto cierto falso`))

    it('', async () => expect(await exec(
        `c = cierto
        f = falso
        imprimir !f || !f
        imprimir !f || !c
        imprimir !c || !f
        imprimir !c || !c`
    )).equalsIgnoringSpaces(`cierto cierto cierto falso`))

    it('', async () => expect(await exec(
        `c = cierto
        f = falso
        imprimir !f && !f
        imprimir !f && !c
        imprimir !c && !f
        imprimir !c && !c`
    )).equalsIgnoringSpaces(`cierto falso falso falso`))

})

describe('logical-2 reserved words',() => {    
    it('', async () => expect(await exec(
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