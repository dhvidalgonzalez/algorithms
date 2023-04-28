/*
 * Swap function using destructuring assignment
 */

function swap(array, i, j) {
  [array[i], array[j]] = [array[j], array[i]];
}

/*
 * Lomuto partition function
 * array: array of elementos to find a partition index
 * low: the lowest integer index to consider the partition
 * high: the higest  integer index to consider the partition
 */
function lomutoPartition(array, low, hight) {
  const pivot = array[hight];
  let i = low - 1;

  for (let j = low; j < hight; j++) {
    if (pivot >= array[j]) {
      i++;
      swap(array, i, j);
    }
  }

  swap(array, i + 1, hight);

  return i + 1;
}

module.exports = lomutoPartition;
