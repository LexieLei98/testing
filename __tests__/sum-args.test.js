const sumArgs = require('../katas/sum-args')

//tests for sum arguments
describe("tests for sum arguments", () => {
    test("returns 0 when not given arguments ", () => {
        //arrange
        const arg = ""
        const expectedOutput = 0
        //act
        const output = sumArgs(arg)
        //assert
        expect(output).toBe(expectedOutput)
    })

    test("returns argument when given only one argument ", () => {
        //arrange
        const arg = 1
        const expectedOutput = 1
        //act
        const output = sumArgs(arg)
        //assert
        expect(output).toBe(expectedOutput)
    })

    test("returns the sum argument when given multi arguments ", () => {
        //arrange
        const arg1 = 1
        const arg2 = 2
        const expectedOutput = 3
        //act
        const output = sumArgs(arg1,arg2)
        //assert
        expect(output).toBe(expectedOutput)
    })
})