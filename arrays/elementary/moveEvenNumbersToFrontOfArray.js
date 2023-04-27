/*
 * Swap function using destructuring assignment
 */

function swap(array, i, j) {
  [array[i], array[j]] = [array[j], array[i]];
}

/*
 * Function based on hoare partition, that move even elements to the front
 * array: array of elementos
 * low: the lowest integer index in the array
 * high: the higest  integer index in the array
 */
function moveEvenNumbersToFrontOfArray(array) {
  let i = 0;
  let j = array.length - 1;

  while (i < j) {
    while (array[i] % 2 == 0) {
      i++;
    }

    while (array[j] % 2 != 0) {
      j--;
    }

    if (i < j) swap(array, i, j);
  }
}

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
moveEvenNumbersToFrontOfArray(array);
console.log("🚀 ~ file: moveEvenNumbersToFrontOfArray.js:34 ~ array:", array);
