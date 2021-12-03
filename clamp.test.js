import chai from 'chai';
import clamp from './src/clamp.js';
var expect = chai.expect

describe('clamp()', () => {
    it('input numbers 7, -4 and 4, result should be number and equal to 4', () => {
        expect(clamp(7, -4, 4)).to.be.a('number');
        expect(clamp(7, -4, 4)).to.equal(4);
    });
    it('input numbers 7, 4 and -4, result should be number and equal to 4', () => {
        expect(clamp(7, 4, -4)).to.be.a('number');
        expect(clamp(7, 4, -4)).to.equal(4);
    });
    it('input numbers -8, -6 and 6, result should be number and equal to -6', () => {
        expect(clamp(-8, -6, 6)).to.be.a('number');
        expect(clamp(-8, -6, 6)).to.equal(-6);
    });
    it('input numbers -8, 6 and -6, result should be number and equal to -6', () => {
        expect(clamp(-8, 6, -6)).to.be.a('number');
        expect(clamp(-8, 6, -6)).to.equal(-6);
    });
    it('input numbers -2, -3 and 3, result should be number and equal to -3', () => {
        expect(clamp(-2, -3, 3)).to.be.a('number');
        expect(clamp(-2, -3, 3)).to.equal(-3);
    });

});
