jest.mock("./repo.js", () => ({
  saveOrder: jest.fn(),
}));
const createOrder = require("./miniProject.js");
const {saveOrder} = require("./repo.js");

describe("createOrder(user, amount)", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  //happy path:
  test("calls saveOrder with correct order data when inputs are valid", async () => {
    saveOrder.mockResolvedValue({ id: "order-1" });

    const user = { id: 1 };
    const result = await createOrder(user, 100);

    expect(saveOrder).toHaveBeenCalledTimes(1);
    expect(saveOrder).toHaveBeenCalledWith(
      expect.objectContaining({
        userId: 1,
        amount: 100,
      })
    );

    expect(result).toEqual({ id: "order-1" });
  });

  //bad path:
  test("throws error when user is missing", async () => {
    await expect(createOrder(null, 100)).rejects.toThrow("User is required");

    expect(saveOrder).not.toHaveBeenCalled();
  });
  test("throw an error amount is zero or nagetive", async () => {
    await expect(createOrder({ id: 1 }, 0)).rejects.toThrow("Invalid amount");

    expect(saveOrder).not.toHaveBeenCalled();
  });
});
