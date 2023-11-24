const assert = require("assert");
const calculateNumber = require("./0-calcul.js");

describe("calculateNumber", function () {
    it('should return the rounded sum of two numbers', () => {
        assert.strictEqual(calculateNumber(1, 3), 4);
    });

    it("should return the rounded sum of an integer abd a float", () => {
        assert.strictEqual(calculateNumber(1, 3.7), 5);
    });

    it('should return the rounded sum of two floats', () => {
        assert.strictEqual(calculateNumber(1.2, 3.7), 5);
    });
    
    it('should return the rounded sum of two floats, with proper rounding', () => {
        assert.strictEqual(calculateNumber(1.5, 3.7), 6);
    });
})
