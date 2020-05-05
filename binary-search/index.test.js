const binarySearch = require('./');

test('Invalid input.', () => {
  expect(() => binarySearch()).toThrow(
    'Need to supply an array and a key as input.'
  );
  expect(() => binarySearch('string', 'whatever')).toThrow(
    'values need to be an array.'
  );
});

test('Empty array.', () => {
  expect(binarySearch([], 0)).toBeFalsy();
});

test('Simple.', () => {
  expect(binarySearch([1, 2, 3], 2)).toBeTruthy();
});

test('Value in end. ', () => {
  expect(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 9)).toBeTruthy();
});

test('Value in start.', () => {
  expect(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 1)).toBeTruthy();
});

test('characters', () => {
  expect(
    binarySearch(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'z'], 'c')
  ).toBeTruthy();
});
