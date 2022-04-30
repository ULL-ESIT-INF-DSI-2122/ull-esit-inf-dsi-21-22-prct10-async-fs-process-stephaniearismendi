import {expect} from 'chai';
import 'mocha';
import {checkColor} from '../src/ejercicio-3/notes-app';

describe('Test', () => {
  it('Debe existir', () => {
    expect(checkColor('red')).to.exist;
  });
});