const withdraw = require("./withdraw.js");

describe("withdraw(balance, amount)", () => {
  test("should return balance and amount mines if amount is less than balance", async () => {
    const result = await withdraw(10, 5);

    expect(result).toBe(5);
  });

  test("should throw error if amount biger than balance", async () => {
  

  await  expect(withdraw(15,25)).rejects.toThrow("Insufficient funds");
  });
});
