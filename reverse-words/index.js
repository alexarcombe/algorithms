/**
 * Takes a string of words as input and returns a string with all the words reversed.
 * @param {string} input - A string of words.
 * @throws {TypeError} - wrong input.
 * @returns {string} - reversed words.
 */
function reverseWords(input) {
  if (input === undefined) {
    throw new TypeError('Needs a string as an input.');
  }
  if (typeof input !== 'string') {
    throw new TypeError('The input needs to be a string.');
  }
  let words = input.split(/\s/g);
  return words.map((word) => reverse(word)).join(' ');
}

function reverse(word) {
  const res = word.split('');
  let head = 0;
  let tail = res.length - 1;
  let tmp;
  while (head < tail) {
    tmp = res[head];
    res[head] = res[tail];
    res[tail] = tmp;
    head++;
    tail--;
  }
  return res.join('');
}

module.exports = reverseWords;
