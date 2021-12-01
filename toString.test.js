import expect from 'chai';
import toString from './src/toString.js';

describe('toString()', () => {
    describe('input number 3', () => {
        const output = toString(3);
        expect(output).to.be.string;
        expect(output).to.equal("3");
    });
});