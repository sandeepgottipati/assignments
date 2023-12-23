/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
  if (numbers.length === 1) return numbers[0];
  if (numbers.length === 0) return;
  let max = Math.max(...numbers);
  return max;
}

module.exports = findLargestElement;

