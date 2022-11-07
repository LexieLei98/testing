const sumDigits = require('../katas/sum-digits');

// Tests for sumDigits
describe("tests for sumDigits",() => {
  test.skip ("returns the input number when passed a single digit number",() => {
    //arrange 
    const num1 = 1;
    const expectedOutput = 1;
    //act
    const output = sumDigits(1);
    //assert
    expect(output).toBe(expectedOutput)
  })

  test.skip("returns the sum when passed a multi digit number", () => {
    //arrange
    const num = 99;
    const expectedOutput = 18;
    //act
    const output = sumDigits(99);
    //assert
    expect(output).toBe(expectedOutput)

  })

  test.skip("returns the sum when passed a non-numerical number", () => {
    //arrange
    const num = 10.5;
    const expectedOutput = 6;
    //act
    const output = sumDigits(10.5);
    //assert
    expect(output).toBe(expectedOutput);
  })
})


/*
  TEST 1 - sumDigits returns the input number when passed a single digit number
  This test has two ASSERTIONS being made
  The same behaviour is being tested but with different inputs - 1 and 9

  E.g. sumDigits(1) should output 1
  E.g. sumDigits(9) should output 9
*/

/*
  Once you have got the first test passing, then you can write your next one.
  If you've already handled a single digit, your next test could test for multi-digit inputs.

  E.g. sumDigits(99) should output 18
  E.g. sumDigits(123) should output 6

  HINT: Remember to see the test *fail* first, then write the code to pass the test

  Why this test?  
  A multi-digit input means you now have to implement to 'addition' part of this function,
  but you don't have to think about the logic for dealing with/ignoring non-digit characters yet
  (that's for our next test!)
*/

/*
  Once you have successfully passed the above test, then you can write your next test.
  A good next test might be to check that your function handles non-numerical characters correctly (i.e. ignores them)
  
  E.g. sumDigits(10.5) should output 6
*/
