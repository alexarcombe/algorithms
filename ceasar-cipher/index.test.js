const ceasarCipher = require('.');

test('Wrong inputs', () => {
  expect(() => ceasarCipher()).toThrow(
    'Need to supply text and number as input.'
  );
  expect(() => ceasarCipher(12, 12)).toThrow(
    'The text input needs to be a string.'
  );
  expect(() => ceasarCipher('Alex', 'Arcombe')).toThrow(
    'The num input needs to be a number.'
  );
});

test('Simple test.', () => {
  expect(ceasarCipher('alex', 1)).toBe('bmfy');
});

test('Test empty', () => {
  expect(ceasarCipher('', 10)).toBe('');
});

test('More complex', () => {
  expect(
    ceasarCipher('My name is Alexander Arcombe, and I am from Sweden.', 5)
  ).toBe('Rd sfrj nx Fqjcfsijw Fwhtrgj, fsi N fr kwtr Xbjijs.');
});

test('Big number', () => {
  expect(
    ceasarCipher('This is a silly example..... But It shoULD work!', 100)
  ).toBe('Pdeo eo w oehhu atwilha..... Xqp Ep odkQHZ skng!');
});
