const majorityElementInArraySort = require("../majorityElementInArraySort");

describe("majorityElementInArraySort", () => {
  test("returns true when the array has a majority element", () => {
    const arr = [1, 2, 3, 2, 2, 2, 5, 4, 2];
    expect(majorityElementInArraySort(arr)).toBe(true);
  });

  test("returns false when the array does not have a majority element", () => {
    const arr = [1, 2, 3, 4, 5, 6];
    expect(majorityElementInArraySort(arr)).toBe(false);
  });

  test("returns false for an empty array", () => {
    const arr = [];
    expect(majorityElementInArraySort(arr)).toBe(false);
  });

  test("returns true for an array with a single element", () => {
    const arr = [42];
    expect(majorityElementInArraySort(arr)).toBe(true);
  });

  test("returns true for an array with all elements the same", () => {
    const arr = [7, 7, 7, 7, 7];
    expect(majorityElementInArraySort(arr)).toBe(true);
  });

  test("returns true for an array with exactly half elements the same", () => {
    const arr = [1, 2, 3, 4, 4, 4];
    expect(majorityElementInArraySort(arr)).toBe(true);
  });

  test("works correctly with negative integers", () => {
    const arr = [-1, 2, -1, 3, -1, -1, -1];
    expect(majorityElementInArraySort(arr)).toBe(true);
  });

  test("works correctly with floating point numbers", () => {
    const arr = [1.5, 2.0, 1.5, 1.5];
    expect(majorityElementInArraySort(arr)).toBe(true);
  });
});
