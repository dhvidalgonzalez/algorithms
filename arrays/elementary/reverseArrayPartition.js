/*
 * Swap function using destructuring assignment
 */

function swap(array, i, j) {
  [array[i], array[j]] = [array[j], array[i]];
}

/*
 * The function reverses the elements in the array between the low and high indices
 * by swapping the element at the low index with the element at the high index,
 * and then incrementing the low index and decrementing the high index until they meet in the middle.
 * array: array of elementos to find a partition index
 * low: the lowest integer index to consider the partition
 * high: the higest  integer index to consider the partition
 */
function reverseArrayPartition(array, low, high) {
  while (low < high) {
    swap(array, low, high);
    low++;
    high--;
  }
  return;
}

module.exports = reverseArrayPartition;
