/**
 * Takes a text and returns true if it is a palindrome.
 * @param {string} text.
 * @throws {TypeError} - wrong inputs.
 * @returns if palindrome
 */
function isPalindrome(input) {
  if (input === undefined) {
    throw new TypeError('Needs a input.');
  }
  if (typeof input !== 'string') {
    throw new TypeError('The input should be a string.');
  }

  const text = input.toLowerCase().replace(/\W/g, '');
  let head = 0;
  let tail = text.length - 1;

  while (head < tail) {
    if (text[head] !== text[tail]) {
      return false;
    }
    head++;
    tail--;
  }
  return true;
}

module.exports = isPalindrome;
