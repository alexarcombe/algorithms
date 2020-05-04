/**
 * Takes a number num and a callback function, iterates over 1 to num and calls the callback
 * function on the values. If the value is a multiple of 3 it becomes Fizz, multiple
 * of 5 becomes Buzz and a multiple of both becomes FizzBuzz.
 * @param {number} num
 * @param {Function} callback
 * @throws {TypeError} - invalid inputs.
 */
function fizzBuzz(num, callback = (x) => console.log(x)) {
  if (num === undefined) {
    throw new TypeError('need to supply a number.');
  }
  if (typeof num !== 'number') {
    throw new TypeError('num need to be a number.');
  }
  if (num < 1) {
    throw new RangeError('num needs to be greater than 0.');
  }
  let x, fizz, buzz;
  for (x = 1; x <= num; x++) {
    fizz = x % 3 === 0;
    buzz = x % 5 === 0;
    if (fizz && buzz) {
      callback('FizzBuzz');
    } else if (fizz) {
      callback('Fizz');
    } else if (buzz) {
      callback('Buzz');
    } else {
      callback(x);
    }
  }
}

module.exports = fizzBuzz;
