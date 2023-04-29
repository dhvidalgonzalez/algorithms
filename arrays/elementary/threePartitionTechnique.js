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
function threePartitionTechnique(array, lowPivot, hightPivot) {
  let i = 0;
  let begin = 0;
  let end = array.length - 1;

  while (i < end) {
    if (array[i] > hightPivot) {
      swap(array, i, end);
      end--;
    } else if (array[i] <= lowPivot) {
      swap(array, i, begin);
      begin++;
      i++;
    } else if (array[i] >= lowPivot && array[i] <= hightPivot) {
      i++;
    }
  }
  return array;
}

module.exports = threePartitionTechnique;
