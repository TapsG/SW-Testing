import chai from 'chai';
import clamp from './src/clamp.js';
var expect = chai.expect

describe('clamp()', () => {
    it('input numbers 4, -4 and 7, result should be number and equal to 4', () => {
        expect(clamp(4,-4,4)).to.be.a('number');
        expect(clamp(4,-4,4)).to.equal(4);
    });
    it('input numbers 6,-6 and -8, result should be number and equal to -6', () => {
        expect(clamp(6,-6,-8)).to.be.a('number');
        expect(clamp(6,-6,-8)).to.equal(-8);
    });
    it('input numbers 3,-3 and -2, result should be number and equal to -2', () => {
        expect(clamp(3,-3,-2)).to.be.a('number');
        expect(clamp(3,-3,-2)).to.equal(-2);
    });
});
