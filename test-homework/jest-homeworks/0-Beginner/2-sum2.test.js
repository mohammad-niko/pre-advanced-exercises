const sum = require("./2-sum2.js");

describe("sum(a, b)", () => {
  //happy path:
  test("should collect two num and returned", () => {
    const collect = sum(1, 5);
    expect(collect).toBe(6);
  });

  //bad path:

  test("when props a is not a number", () => {
    expect(() => sum(null, 5)).toThrow("Input must be numbers");
  });
  test("when props b is not a number", () => {
    expect(() => sum(1,"mmad")).toThrow("Input must be numbers");
  });
});
