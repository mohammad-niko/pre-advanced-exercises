const fetchUserData = require("./1-fetchUserData.js");

describe("fetchUserData(userId)", () => {
  it("should return user data after fetch them", async () => {
    const mockUser = { userId: 1, name: "user 1" };
    jest.spyOn(global, "fetch").mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockUser),
    });

    const result = await fetchUserData(1);

    expect(result).toEqual({ userId: 1, name: "user 1" });
    expect(fetch).toHaveBeenCalledWith(
      "https://jsonplaceholder.typicode.com/users/1"
    );

    fetch.mockRestore();
  });
});
