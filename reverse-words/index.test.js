const reverseWords = require('./');

test('Wrong input.', () => {
  expect(() => reverseWords()).toThrow('Needs a string as an input.');
  expect(() => reverseWords(12)).toThrow('The input needs to be a string.');
});

test('Empty string.', () => {
  expect(reverseWords('')).toBe('');
});

test('Simple.', () => {
  expect(reverseWords('Alexander Arcombe')).toBe('rednaxelA ebmocrA');
});

test('More complicated.', () => {
  expect(reverseWords('This is a longer string hope it works')).toBe(
    'sihT si a regnol gnirts epoh ti skrow'
  );
});
