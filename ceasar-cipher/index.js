/**
 * Takes a text and returns the ceaser cipher with num difference of the text.
 * @param {string} text
 * @param {number} num
 * @returns {string} Ceaser Cipher
 */
function ceasarCipher(text, num) {
  if (text === undefined && num === undefined) {
    throw new TypeError('Need to supply text and number as input.');
  }
  if (typeof text !== 'string') {
    throw new TypeError('The text input needs to be a string.');
  }
  if (typeof num !== 'number') {
    throw new TypeError('The num input needs to be a number.');
  }
  const number = num % 26;
  const result = text.split('');
  let value, upper;
  return result
    .map((c) => {
      value = c.charCodeAt(0);
      if (value >= 65 && value <= 90) {
        upper = true;
      } else if (value >= 97 && value <= 122) {
        upper = false;
      } else {
        return c;
      }
      value += number;
      return (upper && value > 90) || (!upper && value > 122)
        ? String.fromCharCode(value - 26)
        : String.fromCharCode(value);
    })
    .join('');
}

console.log(ceasarCipher('Alex', 1));

module.exports = ceasarCipher;
