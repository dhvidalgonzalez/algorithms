const moveOddNumbersToFrontOfArray = require("../moveOddNumbersToFrontOfArray");

describe("moveOddNumbersToFrontOfArray", () => {
  it("should move all odd numbers to the front of the array", () => {
    const array = [1, 2, 3, 4, 5, 6];
    const expectedArray = [1, 5, 3, 4, 2, 6];

    moveOddNumbersToFrontOfArray(array);

    expect(array).toEqual(expectedArray);
  });

  it("should not modify the array if all odd numbers are already at the front", () => {
    const array = [1, 3, 5, 2, 4, 6];
    const expectedArray = [1, 3, 5, 2, 4, 6];

    moveOddNumbersToFrontOfArray(array);

    expect(array).toEqual(expectedArray);
  });

  it("should not modify the array if it is empty", () => {
    const array = [];
    const expectedArray = [];

    moveOddNumbersToFrontOfArray(array);

    expect(array).toEqual(expectedArray);
  });
});
