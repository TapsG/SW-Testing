import chai from 'chai';
import toString from './src/upperFirst.js';
var expect = chai.expect

describe('upperFirst()', () => {
    it('input number 3, result should be string and equal to "3"', () => {
        expect(toString(3)).to.be.string;
        expect(toString(3)).to.equal("3");
    });

    it('inputarray [2,3,4], result should be string and equal to "2,3,4"', () => {
        expect(toString([2,3,4])).to.be.string;
        expect(toString([2,3,4])).to.equal("2,3,4");
    });

});