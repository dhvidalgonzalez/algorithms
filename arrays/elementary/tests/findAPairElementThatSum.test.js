const findAPairElementThatSum = require("../findAPairElementThatSum");

describe("findAPairElementThatSum", () => {
  it("should return true if there exists a pair of elements that sum to the given value", () => {
    const array = [1, 2, 3, 4, 5];
    const sum = 7;
    const result = findAPairElementThatSum(array, sum);
    expect(result).toBe(true);
  });

  it("should return false if there does not exist a pair of elements that sum to the given value", () => {
    const array = [1, 2, 3, 4, 5];
    const sum = 10;
    const result = findAPairElementThatSum(array, sum);
    expect(result).toBe(false);
  });

  it("should handle negative numbers correctly", () => {
    const array = [-3, 1, 2, 4, 7, 8];
    const sum = 4;
    const result = findAPairElementThatSum(array, sum);
    expect(result).toBe(true);
  });

  it("should handle duplicate numbers correctly", () => {
    const array = [2, 2, 3, 4, 5];
    const sum = 4;
    const result = findAPairElementThatSum(array, sum);
    expect(result).toBe(true);
  });
});
