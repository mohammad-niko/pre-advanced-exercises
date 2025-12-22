const getAverage = require("./1-getAverage.js");

describe("getAverage(a, b, c)", () => {
  test("when awerage of three props are greater than 5", () => {
    expect(getAverage(6, 7, 6)).toBeGreaterThan(5);
  });
  test("when awerage of three props are less than 5", () => {
    expect(getAverage(2, 3, 4)).toBeLessThan(5);
  });
  test("when awerage of three props are equal 5", () => {
    expect(getAverage(5, 4, 6)).toBe(5);
  });
});
