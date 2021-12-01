import chai from 'chai';
import add from './src/add.js';
var expect = chai.expect

describe('add()', () => {
    it('input numbers 2 and 5, result should be number and equal to 7', () => {
        expect(add(2,5)).to.be.a('number');
        expect(add(2,5)).to.equal(7);
    });
    it('input numbers 5 and 2, result should be same as first test', () => {
        expect(add(5,2)).to.be.a('number');
        expect(add(5,2)).to.equal(7);
    });
});