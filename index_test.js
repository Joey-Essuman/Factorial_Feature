var assert = require("assert");
var Calculate = require("../index.js");

describe("Calculate", () => {
  describe(".factorial", () => {
    // Edge Case for an input of zero(0)
    it("returns 1 as the factorial of an input of 0!", () => {
      // Setup
      const expectedResult = 1;
      const inputNumber = 0;
      // Exercise
      const actualResult = Calculate.factorial(inputNumber);
      // Verify
      assert(actualResult, expectedResult);
    });
    it("returns 120 as the factorial of an input 5!", () => {
      // Setup
      const expectedResult = 120;
      const inputNumber = 5;
      // Exercise
      const actualResult = Calculate.factorial(inputNumber);
      // Verify
      assert(actualResult, expectedResult);
    });
    it("returns 6 as the factorial of an input 3!", () => {
      // Setup
      const expectedResult = 6;
      const inputNumber = 3;
      // Exercise
      const actualResult = Calculate.factorial(inputNumber);
      // Verify
      assert(actualResult, expectedResult);
    });
  });
});
