/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  if (str.length === 1) { return true; }

  let modifiedStr = str.replace(/[^a-z]/gi, "");
  modifiedStr = modifiedStr.toLowerCase();
  console.log(modifiedStr);

  const modifiedArr = new Array(...modifiedStr);
  console.log(modifiedArr)
  const result = modifiedArr.reverse().join('');
  console.log(result);
  return result === modifiedStr;


}
console.log(isPalindrome("openai").toString())


module.exports = isPalindrome;
