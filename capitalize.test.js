import chai from 'chai';
import add from './src/capitalize.js';
var expect = chai.expect

describe('capitalize()', () => {
    it('input string "kEBAB", result should be string and equal to "Kebab", () => {
        expect(capitalize("kEBAB")).to.be.string;
        expect(capitalize("kEBAB")).to.equal("Kebab");
    });
    it('input string "KEBAB", result should be string and equal to "Kebab", () => {
        expect(capitalize("KEBAB")).to.be.string;
        expect(capitalize("KEBAB")).to.equal("Kebab");
    });
});
