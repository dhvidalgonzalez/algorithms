const lomutoPartition = require("../lomutoPartition");

describe("lomutoPartition", () => {
  test("should return the index of the pivot element", () => {
    const arr = [4, 6, 2, 7, 9, 1, 5];
    const low = 0;
    const high = arr.length - 1;

    expect(lomutoPartition(arr, low, high)).toBe(3);
  });

  test("should return the index of the pivot element when the array has only one element", () => {
    const arr = [5];
    const low = 0;
    const high = arr.length - 1;

    expect(lomutoPartition(arr, low, high)).toBe(0);
  });

  test("should return the index of the pivot element when there are repeated elements in the array", () => {
    const arr = [4, 6, 2, 7, 9, 1, 5, 2, 5];
    const low = 0;
    const high = arr.length - 1;

    expect(lomutoPartition(arr, low, high)).toBe(5);
  });
});
