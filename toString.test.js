import chai from 'chai';
import toString from './src/toString.js';
var expect = chai.expect

describe('toString()', () => {
    it('input number 3, result should be string and equal to "3"', () => {
        expect(toString(3)).to.be.string;
        expect(toString(3)).to.equal("3");
    });
});