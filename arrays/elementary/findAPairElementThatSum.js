/**
 * Given an array of integers `array` and a target sum `sum`, this function
 * returns `true` if there exists a pair of elements in the array that add up
 * to the target sum, and `false` otherwise.
 *
 * @param {number[]} array - An array of integers.
 * @param {number} sum - The target sum to find a pair of elements for.
 * @returns {boolean} `true` if there exists a pair of elements in the array
 * that add up to the target sum, `false` otherwise.
 */

function findAPairElementThatSum(array, sum) {
  let sortedArray = array.sort((a, b) => a - b);

  let i = 0;
  let j = sortedArray.length - 1;

  while (i < j) {
    if (sortedArray[i] + sortedArray[j] < sum) {
      i++;
    } else if (sortedArray[i] + sortedArray[j] > sum) {
      j--;
    } else if (sortedArray[i] + sortedArray[j] == sum) return true;
  }

  return false;
}

module.exports = findAPairElementThatSum;
