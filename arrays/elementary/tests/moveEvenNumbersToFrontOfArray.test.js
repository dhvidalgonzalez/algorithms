const moveEvenNumbersToFrontOfArray = require("../moveEvenNumbersToFrontOfArray");

describe("moveEvenNumbersToFrontOfArray", () => {
  it("should move all even numbers to the front of the array", () => {
    const array = [1, 2, 3, 4, 5, 6];
    const expectedArray = [6, 2, 4, 3, 5, 1];

    moveEvenNumbersToFrontOfArray(array);

    expect(array).toEqual(expectedArray);
  });

  it("should not modify the array if all even numbers are already at the front", () => {
    const array = [2, 4, 6, 1, 3, 5];
    const expectedArray = [2, 4, 6, 1, 3, 5];

    moveEvenNumbersToFrontOfArray(array);

    expect(array).toEqual(expectedArray);
  });

  it("should not modify the array if it is empty", () => {
    const array = [];
    const expectedArray = [];

    moveEvenNumbersToFrontOfArray(array);

    expect(array).toEqual(expectedArray);
  });
});
