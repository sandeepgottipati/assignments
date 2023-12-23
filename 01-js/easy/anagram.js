/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  if (str1.length === 0 && str2.length === 0) return true;
  if (str1.length === 0 || str2.length === 0) return false;
  if (str1.length !== str2.length) return false;
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  let sortedStringOne = str1.split("").sort().join("");
  let sortedStringTwo = str2.split("").sort().join("");
  return sortedStringOne === sortedStringTwo;
}
console.log(isAnagram("sar", "rai"));
module.exports = isAnagram;
