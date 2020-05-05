/**
 * Returns the value of the position of the fibonacci series.
 * @param {number} pos - The position
 * @throws {TypeError} - Invalid input.
 * @returns {number} - fibonacci value
 */
function fibonacci(pos) {
  if (pos === undefined) {
    throw new TypeError('Need to supply a position to find.');
  }
  if (typeof pos !== 'number') {
    throw new TypeError('The position should be a number.');
  }
  if (pos < 1) {
    throw new TypeError('The position needs to be greater then 0.');
  }
  // return fibonacciRec(pos - 2, 1, 1);
  return fibonacciIte(pos);
}

function fibonacciRec(pos, value, prev) {
  if (pos < 1) {
    return value;
  }
  return fibonacciRec(pos - 1, value + prev, value);
}

function fibonacciIte(pos) {
  let current = 1,
    value = 1,
    prev = 0,
    tmp;
  while (current !== pos) {
    tmp = value;
    value += prev;
    prev = tmp;
    current++;
  }
  return value;
}

module.exports = fibonacci;
