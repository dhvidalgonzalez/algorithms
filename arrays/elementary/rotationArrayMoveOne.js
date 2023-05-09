/**
 * Rotate an array a given number of times to the left.
 *
 * @param {Array} array - The array to rotate.
 * @param {number} rotationNumber - The number of times to rotate the array to the left.
 * @return {void} This function does not return anything, it modifies the input array in place.
 */
function rotationToLeft(array) {
  let temp = array[0];
  for (let i = 1; i < array.length; i++) {
    array[i - 1] = array[i];
  }
  array[array.length - 1] = temp;
}

function rotationArrayMoveOne(array, rotationNumber) {
  for (let i = 0; i < rotationNumber; i++) {
    rotationToLeft(array);
  }
}

module.exports = rotationArrayMoveOne;
