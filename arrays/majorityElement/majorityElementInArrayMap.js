/**

This function takes an array of integers and returns true if there is a majority element in the array,
which is an element that appears more than n/2 times (where n is the length of the array), and false otherwise.
It uses a map to keep track of the frequency of each element in the array.
@param {number[]} array - An array of integers to check for majority element.
@returns {boolean} - True if a majority element is found, false otherwise.
*/

function majorityElementInArrayMap(array) {
  const map = new Map();

  if (array.length == 0) {
    return false;
  }
  if (array.length == 1) {
    return true;
  }

  for (let i = 0; i < array.length; i++) {
    let currentElement = map.has(array[i]);
    if (currentElement) {
      map.set(array[i], map.get(array[i]) + 1);
      if (map.get(array[i]) + 1 >= array.length / 2) return true;
    } else {
      map.set(array[i], 1);
    }
  }

  return false;
}

module.exports = majorityElementInArrayMap;
