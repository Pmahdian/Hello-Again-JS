/**
 * reverses a string without using built-in methods.
 * works with Unicode
 * @param {string} str - The input string to reverse.
 * @returns {string} The input string to reverse.
 * @example
 * reverseString("hello") // => olleh
 * reverseString("😊hello")
 * reverseString("") // =>
 */

function reverseString(str) {
  if (str === "") return;
  if (typeof str !== "string") {
    throw new TypeError("Input must be a string");
  }
  let reverse = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverse += str[i];
  }
  return reverse;
}

//
console.log(reverseString("hello")); // olleh
//
console.log(reverseString("12345")); // 54321
//
console.log(reverseString("hello world, this is JavaScript")); // tpircSavaJ si siht ,dlrow olleh
//
console.log(reverseString("😊hello")); // olleh😊
