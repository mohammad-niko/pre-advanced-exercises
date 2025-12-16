jest.mock("./log.js", () => ({
  log: jest.fn(),
}));

const createUser = require("./user.service.js");
const { log } = require("./log.js");

describe(" createUser(name)", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  //happy path:
  test("return an objec with name priprty when name is valid", () => {


    const result = createUser("mohammad");

    expect(log).toHaveBeenCalledTimes(1);
    expect(log).toHaveBeenCalledWith(`User mohammad created`);

    expect(result).toEqual({ name: "mohammad" });
  });

  //bad path:
  test('throw an error if name miseing', () => { 
    expect(()=>createUser()).toThrow("Name is required")
    expect(log).not.toHaveBeenCalled()
   })
});
