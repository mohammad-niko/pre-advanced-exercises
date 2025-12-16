const {subtract,sum} = require("./Calculater");


describe("claculate logic", () => {
  it("should subtract two numbers correctly", () => {
    const num1 = 1;
    const num2 = 2;

    const result = subtract(num1, num2);

    expect(result).toBe(-1);
  });
});



describe('claculate logic', () => { 

    it("add two number and return it",()=>{
        const nu1 = 10;
        const nu2 = 100;

        const result = sum(nu1,nu2);

        expect(result).toBe(110)
    })
 })