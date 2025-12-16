 const adult = require('./isAdult');

describe("adult", () => {
  test("returns true whem age is more than 18", () => {
    const result = adult(20);

    expect(result).toBe(true);
  });

  test("returns true when age is 18", () => {
    const result = adult(18);

    expect(result).toBe(true);
  });

  test("should returns false when age is less than 18", () => {
    const result = adult(15);

    expect(result).toBe(false);
  });
});
