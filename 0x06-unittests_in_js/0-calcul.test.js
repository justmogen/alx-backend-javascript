// 0-calcul.test.js
const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('should return the rounded sum of two integers', () => {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });

  it('should return the rounded sum of an integer and a float', () => {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });

  it('should return the rounded sum of two floats', () => {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });

  it('should return the rounded sum of two floats, with proper rounding', () => {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });
});

