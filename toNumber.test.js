import chai from 'chai';
import toNumber from './src/toNumber.js';
var expect = chai.expect

describe('upperFirst()', () => {
    it('"545", result should be number and equal to 545', () => {
        expect(toNumber("545")).to.be.a('number');
        expect(toNumber("545")).to.equal(545);
    });

    it('"545" can be added to number 2, result 547', () => {
        expect(toNumber("545")).to.be.a('number');
        expect(toNumber("545") + 2).to.equal(547);
    });

    it('char 3, result should be number', () => {
        expect(toNumber('3')).to.be.a('number');
        expect(toNumber('3') + 2).to.equal(5);
    });

    it('3, can be added to number 2, result 5', () => {
        expect(toNumber('3')).to.be.a('number');
        expect(toNumber('3') + 2).to.equal(5);
    });
    

});