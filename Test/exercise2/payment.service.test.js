jest.mock("./payment.api.js", () => ({
  charge: jest.fn(),
}));
const pay = require("./payment.service.js");
const { charge } = require("./payment.api.js");

describe("pay(amount)", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  //happy path:
  test("call charge with correct amount when amount is valid", async () => {
    charge.mockResolvedValue({ status: "ok" });
    const result = await pay(100);

    expect(charge).toHaveBeenCalledTimes(1);
    expect(charge).toHaveBeenCalledWith(100);

    expect(result).toEqual({ status: "ok" });
  });

  //bad path:
  test("throw an error when amount is zero or nagtive", async () => {
   await  expect(pay(0)).rejects.toThrow("Invalid amount");
    expect(charge).not.toHaveBeenCalled();
  });
});
