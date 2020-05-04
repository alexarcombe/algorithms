const isPalindrome = require('./');

test('invalid inputs.', () => {
  expect(() => isPalindrome()).toThrow('Needs a input.');
  expect(() => isPalindrome(4)).toThrow('The input should be a string.');
});

test('Empty text', () => {
  expect(isPalindrome('')).toBeTruthy();
});

test('Simple, mum.', () => {
  expect(isPalindrome('mum')).toBeTruthy();
});

test('Max should return false.', () => {
  expect(isPalindrome('Max')).toBeFalsy();
});

test('With special characters.', () => {
  expect(isPalindrome('?Max, # xam!')).toBeTruthy();
});

test('False with special characters.', () => {
  expect(isPalindrome('This! is a random, text that should be wrong...'));
});
