/**
 * A function that returns a boolean value indicating whether there is a majority element in the array or not.
 * @param {Array} array - An array of integers.
 * @returns {boolean} - A boolean value indicating whether there is a majority element in the array or not.
 */
function majorityElementInArrayNaive(array) {
  // Initialize a variable count to 0.
  let count = 0;

  if (array.length == 0) {
    return false;
  }
  if (array.length == 1) {
    return true;
  }

  // Iterate over the array using a nested for loop, comparing each element to every other element.
  for (let i = 0; i < array.length; i++) {
    let count = 0;
    for (let j = 1; j < array.length; j++) {
      // If two elements are equal, increment the count variable. Otherwise, set count to 0.
      if (array[i] == array[j]) {
        count++;
      }
      // If the count variable is greater than or equal to half the length of the array, return true.
      if (count >= array.length / 2) {
        return true;
      }
    }
  }

  // If no majority element is found, return false.
  return false;
}

// Export the function to be used in other modules
module.exports = majorityElementInArrayNaive;
