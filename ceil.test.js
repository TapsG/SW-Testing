import chai from 'chai';
import ceil from './src/ceil.js';
var expect = chai.expect

describe('ceil()', () => {
    it('input numbers 5030 and -2, result should be number and equal to 5100', () => {
        expect(ceil(5030,-22)).to.be.a('number');
        expect(ceil(5030,-2)).to.equal(5100);
    });
    it('input numbers 7.003 and 2, result should be number and equal to 7.01', () => {
        expect(ceil(7.003,2)).to.be.a('number');
        expect(ceil(7.003,2)).to.equal(7.01);
    });
});
