const fibonacci = require('./');

test('Invalid input.', () => {
  expect(() => fibonacci()).toThrow('Need to supply a position to find.');
  expect(() => fibonacci('text')).toThrow('The position should be a number.');
  expect(() => fibonacci(-1)).toThrow(
    'The position needs to be greater then 0.'
  );
});

test('Should return 3.', () => {
  expect(fibonacci(3)).toBe(2);
});

test('Should return 8.', () => {
  expect(fibonacci(6)).toBe(8);
});

test('Should return 55.', () => {
  expect(fibonacci(10)).toBe(55);
});
