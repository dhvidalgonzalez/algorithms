/**

This function takes an array of integers and returns true if there is a majority element in the array,
which is an element that appears more than n/2 times (where n is the length of the array), and false otherwise.
It uses a map to keep track of the frequency of each element in the array.
@param {number[]} array - An array of integers to check for majority element.
@returns {boolean} - True if a majority element is found, false otherwise.
*/

function majorityElementInArrayBoyerMoore(array) {
  const arrayLength = array.length;
  if (arrayLength == 0) {
    return false;
  }
  if (arrayLength == 1) {
    return true;
  }

  let m = 0;
  let count = 0;

  for (let i = 0; i < arrayLength; i++) {
    if (count == 0) {
      m = array[i];
    } else if (m == array[i]) {
      count++;
    } else {
      count--;
    }
  }
  count = 0;
  for (let i = 0; i < arrayLength; i++) {
    if (m == array[i]) {
      count++;
    }
  }

  if (count >= arrayLength / 2) {
    return true;
  }

  return false;
}

module.exports = majorityElementInArrayBoyerMoore;
