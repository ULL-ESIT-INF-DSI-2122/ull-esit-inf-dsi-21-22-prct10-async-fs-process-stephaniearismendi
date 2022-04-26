import {expect} from 'chai';
import 'mocha';
import {helloWorld} from '../src/ejercicio-clase/modificacion';

describe('Test clases', () => {
  it('Debe existir', () => {
    expect(helloWorld()).to.not.throw;
  });
});