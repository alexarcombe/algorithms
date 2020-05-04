const fizzBuzz = require('./');

const callback = (list) => (x) => list.push(x);

test('NaN or nothing', () => {
  expect(() => fizzBuzz('should fail')).toThrow('num need to be a number.');
  expect(() => fizzBuzz()).toThrow('need to supply a number.');
});

test('Negative and 0', () => {
  expect(() => fizzBuzz(-10)).toThrow('num needs to be greater than 0.');
  expect(() => fizzBuzz(0)).toThrow('num needs to be greater than 0.');
});

test('10', () => {
  const list = [];
  fizzBuzz(10, callback(list));
  expect(list).toEqual([1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz']);
});

test('20', () => {
  const list = [];
  fizzBuzz(20, callback(list));
  expect(list).toEqual([
    1,
    2,
    'Fizz',
    4,
    'Buzz',
    'Fizz',
    7,
    8,
    'Fizz',
    'Buzz',
    11,
    'Fizz',
    13,
    14,
    'FizzBuzz',
    16,
    17,
    'Fizz',
    19,
    'Buzz',
  ]);
});
