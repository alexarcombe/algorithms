const harmlessRansomNote = require('./');

test('No input, wrong input.', () => {
  expect(() => harmlessRansomNote()).toThrow('Need a note and magazine.');
  expect(() => harmlessRansomNote(1, 'something')).toThrow(
    'The note needs to be a string.'
  );
  expect(() => harmlessRansomNote('something', 2)).toThrow(
    'The magazine needs to be a string.'
  );
});

test('Simple.', () => {
  expect(
    harmlessRansomNote(
      'This is a note.',
      'This is a magazine text with some text for a note.'
    )
  ).toBeTruthy();
});

test('Words two times.', () => {
  expect(
    harmlessRansomNote(
      'this note text has note twice.',
      'This magazine also has note text twice, note.'
    )
  ).toBeTruthy();
});

test('Should fail.', () => {
  expect(
    harmlessRansomNote(
      'There is no Alex in the magazine.',
      'There is no Arcombe in the magazine.'
    )
  ).toBeFalsy();
});

test('Should fail only note once in magazine.', () => {
  expect(
    harmlessRansomNote(
      'This is a note for a note.',
      'This magazine text only have note once, is a for.'
    )
  ).toBeFalsy();
});
