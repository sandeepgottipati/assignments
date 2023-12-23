/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  let lowerStr = str.toLowerCase();
  let count = 0;
  if (lowerStr.length === 0) return 0;
  lowerStr.split("").forEach((c) => {
    if (c === "a" || c === "e" || c === "i" || c === "o" || c === "u") {
      count += 1;
    }
  });
  return count;
}

module.exports = countVowels;

