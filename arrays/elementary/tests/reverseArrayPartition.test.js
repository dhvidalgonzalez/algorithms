const reverseArrayPartition = require("../reverseArrayPartition");

test("threePartitionTechnique should partition the array correctly", () => {
  let array = [1, 2, 3, 4, 5, 6];
  // Expected: array = [1, 2, 3, 4, 5, 6, 7, 8];
  let low = 0;
  let high = 5;

  reverseArrayPartition(array, low, high);

  // All values are inverted
  for (let i = array.length - 1; i >= 0; i--) {
    expect(array[i]).toBe(6 - i);
  }

  reverseArrayPartition(array, low, high);

  // All values return to the initial position
  for (let i = 0; i < array.length; i++) {
    expect(array[i]).toBe(i + 1);
  }

  low = 2;
  high = 3;

  reverseArrayPartition(array, low, high);
  // All values return to the initial position
  for (let i = 0; i < array.length; i++) {
    if (i < low || i > high) {
      expect(array[i]).toBe(i + 1);
    } else {
      if (i == 2) expect(array[i]).toBe(4);
      if (i == 3) expect(array[i]).toBe(3);
    }
  }

  low = 3;
  high = 3;
  array = [1, 2, 3, 4, 5, 6];
  reverseArrayPartition(array, low, high);
  // All values return to the initial position
  for (let i = 0; i < array.length; i++) {
    expect(array[i]).toBe(i + 1);
  }
});
