const sumAscii = require("../katas/sum-ascii")

//tests for sum ascii

describe("tests for sum ascii",() => {
    test.skip("returns the  ascii score for one letter", () => {
        //arrange
        const str = "j";
        const expectedOutput = 106;
        //act
        output = sumAscii("j")
        //assert
        expect(output).toBe(expectedOutput)
    })

    test.skip("returns the sum of ascii score for multi letters", () => {
        //arrange
        const str = "john";
        const expectedOutput = 431;
        //act
        output = sumAscii(str)
        //assert
        expect(output).toBe(expectedOutput)
    })
})