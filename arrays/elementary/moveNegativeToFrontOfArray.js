/*
 * Swap function using destructuring assignment
 */

function swap(array, i, j) {
  [array[i], array[j]] = [array[j], array[i]];
}

function moveNegativeToFrontOfArray(array) {
  let i = 0;
  let j = array.length - 1;

  while (i < j) {
    if (array[i] < 0 && array[j] < 0) {
      i++;
    } else if (array[j] > 0 && array[j] > 0) {
      j--;
    } else if (array[i] > 0 && array[j] < 0) {
      swap(array, i, j);
    } else {
      i++;
      j--;
    }
  }
}

module.exports = moveNegativeToFrontOfArray;
