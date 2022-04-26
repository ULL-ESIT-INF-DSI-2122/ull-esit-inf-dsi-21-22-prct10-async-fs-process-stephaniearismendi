import {expect} from 'chai';
import 'mocha';
import {helloWorld} from '../src/ejercicio-clase/modificacion';

describe('Clase AddMapReduce', () => {
  it('Debe existir una clase AddMapReduce', () => {
    expect(helloWorld()).to.exist;
  });
});