import { expect } from 'chai';
import equalsIgnoringSpaces from '../chai-extensions.js';

describe('Mi suite de tests', () => {
  it('debe probar algo', () => {
    expect('foo').equalsIgnoringSpaces('nofoo');
  });
});