/*
 * Swap function using destructuring assignment
 */

function swap(array, i, j) {
  [array[i], array[j]] = [array[j], array[i]];
}

function reverseArrayPartition(array, low, high) {
  while (low < high) {
    swap(array, low, high);
    low++;
    high--;
  }
}

function rotationArrayToRightWithReverse(array, rotationNumber) {
  reverseArrayPartition(array, 0, rotationNumber - 1);
  reverseArrayPartition(array, rotationNumber, array.length - 1);
  reverseArrayPartition(array, 0, array.length - 1);
}

module.exports = rotationArrayToRightWithReverse;
