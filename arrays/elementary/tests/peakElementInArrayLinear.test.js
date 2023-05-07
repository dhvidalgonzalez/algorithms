const peakElementInArrayLinear = require("../peakElementInArrayLinear");

describe("peakElementInArrayLinear", () => {
  it("returns undefined for empty array", () => {
    expect(peakElementInArrayLinear([])).toBeUndefined();
  });

  it("returns the only element in a single-element array", () => {
    expect(peakElementInArrayLinear([5])).toBe(5);
  });

  it("returns the first element if it is a peak", () => {
    expect(peakElementInArrayLinear([5, 3, 2, 1])).toBe(5);
  });

  it("returns the second element if it is a peak", () => {
    expect(peakElementInArrayLinear([1, 3, 5, 2])).toBe(5);
  });

  it("returns the middle element if it is a peak", () => {
    expect(peakElementInArrayLinear([1, 2, 3, 2, 1])).toBe(3);
  });

  it("returns the last element if it is a peak", () => {
    expect(peakElementInArrayLinear([1, 2, 3, 5])).toBe(5);
  });

  it("returns the first element if there is no peak", () => {
    expect(peakElementInArrayLinear([5, 4, 3, 2, 1])).toBe(5);
  });
});
