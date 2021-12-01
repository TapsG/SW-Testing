import chai from 'chai';
import upperFirst from './src/upperFirst.js';
var expect = chai.expect

describe('upperFirst()', () => {
    it('"hot wings", result should be string and equal to "Hot wings"', () => {
        expect(upperFirst("hot wings")).to.be.string;
        expect(upperFirst("hot wings")).to.equal("Hot wings");
    });

    it('"Hot wings", result should be string and equal to "Hot wings"', () => {
        expect(upperFirst("Hot wings")).to.be.string;
        expect(upperFirst("Hot wings")).to.equal("Hot wings");
    });

});