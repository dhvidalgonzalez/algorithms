const threePartitionTechnique = require("../threePartitionTechnique");

test("threePartitionTechnique should partition the array correctly", () => {
  const array = [6, 3, 1, 8, 4, 2, 7, 5];
  // Expected: array = [1, 2, 3, 4, 5, 6, 7, 8];
  const lowPivot = 3;
  const highPivot = 6;

  const result = threePartitionTechnique(array, lowPivot, highPivot);

  // Assert that all values between begining and lowPivot are les than lowPivot
  for (let i = 0; i < 3; i++) {
    expect(result[i]).toBeLessThanOrEqual(lowPivot);
  }

  // Assert that all values after highPivot nd before lowPivot are greather than highPivot
  for (let i = 6; i < 8; i++) {
    expect(result[i]).toBeGreaterThan(highPivot);
  }

  //Assert that all values before highPivot are less than highPivot
  for (let i = 0; i < 6; i++) {
    expect(result[i]).toBeLessThanOrEqual(highPivot);
  }
});
