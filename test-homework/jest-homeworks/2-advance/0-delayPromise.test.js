const getUserWithDelay = require("./0-delayPromise.js");

jest.useFakeTimers();

describe("getUserWithDelay(userId)", () => {
  it("should return user data after 1 second", async () => {
    const userPromis = getUserWithDelay(1);
    jest.advanceTimersByTime(1000);

    const user = await userPromis;

    expect(user).toEqual({ id: 1, name: `User 1` });
  });
});
