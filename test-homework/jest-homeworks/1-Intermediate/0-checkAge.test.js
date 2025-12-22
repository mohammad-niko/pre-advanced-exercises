const checkAge = require("./0-checkAge");

describe(" checkAge(age)", () => {
  test("when the age props is greater than 18", () => {
    expect(() => checkAge(20)).toBeUndefined;
  });
  test("when the age props is less than 18", () => {
    expect(() => checkAge(20)).not.toBeUndefined;
  });
});
