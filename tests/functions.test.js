const assert = require('assert')
const { sum } = require('../utils/math')
const { expect } = require('chai')

// describe (опис, функція з тестами)
describe('Testing math.sum', function () {
  it('should return 4 when 2: number + 2: number', function () {
    // твердження (реально пораховане, очікуване)
    assert.equal(sum(2, 2), 4)
  })

  // написати тест для '2', '2'=>4
  it('should return 4 when "2": string + "2": string', function () {
    assert.equal(sum('2', '2'), 4)
  })

  describe('should return NaN', function () {
    it('should return NaN when "abc": string + 2: number', function () {
      assert.equal(sum('abc', 2), NaN)
    })

    it('should return NaN when {}: object + 2: number', function () {
      const result = sum({}, 2)
      const expected = NaN
      assert.equal(result, expected)
    })
  })

  it('should return Infinyty when Number.MAX_VALUE + Number.MAX_VALUE', function () {
    const result = sum(Number.MAX_VALUE, Number.MAX_VALUE)
    const expected = Infinity
    expect(result).to.equal(expected)
    // expect(result).to.be.not.finite
  })
})
