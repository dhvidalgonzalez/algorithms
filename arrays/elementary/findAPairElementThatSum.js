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
