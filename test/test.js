const assert = require('chai').assert;
const expect = require('chai').expect;
const fact = require('../factorialize');
const findLongestWordLength = require("../longestWord");
const LargestNumberFromArray = require('../largestNumberInArray');
const confirmEnding = require('../confirmEnding');
const repeatStringNumTimes = require('../repeatString');
const truncateString = require("../truncateastring");
describe('Factorialize', () => {
    it('should Return the factorial of the provided integer. ', () => {
        assert(typeof fact(5) === 'number');
        assert.equal(fact(5), 120);
    })
});
describe('FindTheLongestWord', () => {
    it('should be a number', () => {
        assert(typeof findLongestWordLength("Google do a barrel roll") === "number");
    });
    it('should Return the length of the longest word in the provided sentence', () => {

        assert.equal(findLongestWordLength("Google do a barrel roll"), 6);
    });
});
describe('LargestNumberInArray', () => {
    it('Should return an array', () => {
        assert(Array.isArray(LargestNumberFromArray([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]])));
    });
    it('should Return an array consisting of the largest number from each provided sub-array ', () => {
        assert.deepEqual(LargestNumberFromArray([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]), [27, 5, 39, 1001]);
    });
});
describe('ConfirmEnding', () => {
    it('Check if a string (first argument, str) ends with the given target string (second argument, target).', () => {
        assert.isTrue(confirmEnding("Bastian", "n"), 'Bastian ends by n character');
        assert.isFalse(confirmEnding("Connor", "n"), 'Connor does not ends by n');
        assert.isFalse(confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification"), 'this doesnot ends by specification');
        assert.isTrue(confirmEnding("Abstraction", "action"), '');
    });
});
describe('ReapetAstring', () => {
    it('should return ***', () => {
        assert.equal(repeatStringNumTimes("*", 3), "***");
    });
    it('should return abcabcabcabc', () => {
        assert.equal(assert.equal(repeatStringNumTimes("abc", 4), "abcabcabcabc"));
    });
    it('should return empty string', () => {
        assert.equal(assert.equal(repeatStringNumTimes("abc", -3), ""));
    });
});
describe('TruncateString', () => {
    it("Return the truncated string with a ... ending. if it is longer than the given maximum string length", () => {
        let str = "A-tisket a-tasket A green and yellow basket";
        assert.equal(truncateString(str, 8), "A-tisket...");
        assert.equal(truncateString(str, str.length), str);
    })
});