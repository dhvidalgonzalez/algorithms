/**
 * This function takes an array as input and returns true if the majority element
 * (i.e., an element that appears more than n/2 times in the array, where n is the
 * length of the array) is present in the array. If the majority element is not
 * present, it returns false.
 *
 * @param {Array} array - The input array to search for a majority element
 * @returns {Boolean} true if the majority element is present, false otherwise
 */
function majorityElementInArraySort(array) {
  // Sort the input array in ascending order
  array = array.sort();

  // If the sorted array is empty, there can be no majority element, so return false
  if (array.length == 0) {
    return false;
  }

  // If the sorted array has only one element, that element is the majority element, so return true
  if (array.length == 1) {
    return true;
  }

  // Initialize a count variable to keep track of how many times an element appears in a row
  let count = 0;

  // Iterate over the sorted array from the first element to the second-to-last element
  for (let i = 0; i < array.length - 1; i++) {
    // If the current element is the same as the next element, increment the count
    if (array[i] == array[i + 1]) {
      count += 1;

      // If the count is greater than or equal to half the length of the array, the current element is the majority element, so return true
      if (count >= array.length / 2) {
        return true;
      }
    }
    // If the current element is different from the next element, reset the count to 1
    else {
      count = 1;
    }
  }

  // If the loop completes without finding a majority element, return false
  return false;
}

module.exports = majorityElementInArraySort;
