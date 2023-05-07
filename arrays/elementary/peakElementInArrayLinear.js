function peakElementInArrayLinear(array) {
  if (array.length == 0) {
    return undefined;
  }

  if (array.length == 1) {
    return array[0];
  }

  if (array.length == 2) {
    if (array[0] > array[1]) {
      return array[0];
    }
    if (array[0] < array[1]) {
      return array[1];
    }
  }

  for (let i = 1; i < array.length - 1; i++) {
    if (array[i - 1] < array[i] && array[i] > array[i + 1]) {
      return array[i];
    } else if (array[i] < array[i + 1] && i == array.length - 2) {
      return array[i + 1];
    }
  }

  return array[0];
}

module.exports = peakElementInArrayLinear;
