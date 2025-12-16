const validateEmail = require("./validateEmail.js");

describe("validateEmail(email)", () => {
  //happy path:
  test("return true when email is valid and has '@ '", () => {
    const result = validateEmail("mohammad@gmail.com");

    expect(result).toBe(true);
  });

  //bad path:
  test("return false when email is invalid and doesn't have '@'", () => {
    const result = validateEmail("mohammad");

    expect(result).toBe(false);
  });
  test("throw an error when email miseing ",  () => {
     expect(() => validateEmail()).toThrow("Email is required");
  });
});
