const simpleSum = require("./1-sum.js");

test("should collect two num and returned ", () => {
  const collect = simpleSum(1, 5);
  expect(collect).toBe(6);
});
