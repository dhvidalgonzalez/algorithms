const rotationArrayToRightWithReverse = require("../rotationArrayToRightWithReverse");

describe("rotationArrayToRightWithReverse", () => {
  it("should rotate array to the right by 2 positions", () => {
    const array = [1, 2, 3, 4, 5];
    const rotationNumber = 2;
    rotationArrayToRightWithReverse(array, rotationNumber);
    expect(array).toEqual([3, 4, 5, 1, 2]);
  });

  it("should rotate array to the left by 5 positions", () => {
    const array = [1, 2, 3, 4, 5];
    const rotationNumber = 5;
    rotationArrayToRightWithReverse(array, rotationNumber);
    expect(array).toEqual([1, 2, 3, 4, 5]);
  });

  it("should rotate array to the left by 2 positions", () => {
    // Note that D rotations to the left are equivalent to N-D rotation to the right
    const array = [1, 2, 3, 4, 5];
    const rotationNumber = 5 - 2;
    rotationArrayToRightWithReverse(array, rotationNumber);
    expect(array).toEqual([4, 5, 1, 2, 3]);
  });

  it("should rotate an empty array", () => {
    const array = [];
    const rotationNumber = 1;
    rotationArrayToRightWithReverse(array, rotationNumber);
    expect(array).toEqual([]);
  });

  it("should rotate an array with one element", () => {
    const array = [1];
    const rotationNumber = 1;
    rotationArrayToRightWithReverse(array, rotationNumber);
    expect(array).toEqual([1]);
  });
});
