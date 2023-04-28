const moveNegativeToFrontOfArray = require("../moveNegativeToFrontOfArray");

describe("moveNegativeToFrontOfArray", () => {
  it("should move all negative numbers to the front of the array", () => {
    const array = [-1, 2, 3, -4, 5, -6];
    const expectedArray = [-1, -6, -4, 3, 5, 2];

    moveNegativeToFrontOfArray(array);

    expect(array).toEqual(expectedArray);
  });

  it("should not modify the array if all negative numbers are already at the front", () => {
    const array = [-1, -4, -6, 2, 3, 5];
    const expectedArray = [-1, -4, -6, 2, 3, 5];

    moveNegativeToFrontOfArray(array);

    expect(array).toEqual(expectedArray);
  });

  it("should not modify the array if it is empty", () => {
    const array = [];
    const expectedArray = [];

    moveNegativeToFrontOfArray(array);

    expect(array).toEqual(expectedArray);
  });
});
