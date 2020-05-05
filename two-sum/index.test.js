const twoSum = require('./');

test('Invalid inputs.', () => {
  expect(() => twoSum()).toThrow(
    'Needs an array of numbers and a sum as input.'
  );
  expect(() => twoSum('alexander', 10)).toThrow(
    'The list needs to be an array of numbers.'
  );
  expect(() => twoSum([1, 19, 'alexander'], 10)).toThrow(
    'The list needs to be an array of numbers.'
  );
  expect(() => twoSum([1, 2, 3], 'Alexander')).toThrow(
    'The sum needs to be a number'
  );
});

test('Empty values array.', () => {
  expect(twoSum([], 10)).toEqual([]);
});

test('Single values', () => {
  expect(twoSum([1, 2, 3, 4, 5], 6)).toEqual([
    [2, 4],
    [1, 5],
  ]);
});

test('Copies of numbers', () => {
  expect(twoSum([1, 1, 2, 2], 3)).toEqual([
    [1, 2],
    [1, 2],
  ]);
});

test('No pairs that sums up', () => {
  expect(twoSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 1000)).toEqual([]);
});
