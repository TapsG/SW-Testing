const chai = require('chai');
const expect = chai.expect;

const { toString } = require('./src/toString');

describe('toString()', () => {
    describe('input number 3', () => {
        const output = toString(3);
        expect(output).to.be.string;
        expect(output).to.equal("3");
    });
});
