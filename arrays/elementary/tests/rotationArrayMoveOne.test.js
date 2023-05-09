const rotationArrayMoveOne = require("../rotationArrayMoveOne");

describe("rotationArrayMoveOne", () => {
  it("should rotate the array by one position", () => {
    const array = [1, 2, 3, 4, 5];
    rotationArrayMoveOne(array, 1);
    expect(array).toEqual([2, 3, 4, 5, 1]);
  });

  it("should handle rotation numbers greater than the array length", () => {
    const array = [1, 2, 3, 4, 5];
    rotationArrayMoveOne(array, 6);
    expect(array).toEqual([2, 3, 4, 5, 1]);
  });

  it("should handle empty arrays", () => {
    const array = [];
    rotationArrayMoveOne(array, 1);
    expect(array).toEqual([]);
  });

  it("should handle arrays with only one element", () => {
    const array = [1];
    rotationArrayMoveOne(array, 1);
    expect(array).toEqual([1]);
  });

  it("should handle rotation numbers of zero", () => {
    const array = [1, 2, 3, 4, 5];
    rotationArrayMoveOne(array, 0);
    expect(array).toEqual([1, 2, 3, 4, 5]);
  });
});
