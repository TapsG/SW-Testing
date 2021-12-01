import chai from 'chai';
import camelCase from './src/camelCase.js';
var expect = chai.expect

describe('camelCase()', () => {
    it('input "Kebab on hyvaa", result should be string and equal to "kebabOnHyvaa"', () => {
        expect(camelCase("Kebab on hyvaa")).to.be.string;
        expect(camelCase("Kebab on hyvaa")).to.equal("kebabOnHyvaa");
    });
});