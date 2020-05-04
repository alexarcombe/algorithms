const { HashTable } = require('../../data_structures/hashTable/HashTable');

/**
 * Takes a note and a magazine, returns true if all the words can be taken from magazine.
 * @param {string} note - A string of a note text.
 * @param {string} magazine - A string of a magazine text.
 * @throws {TypeError} - invalid inputs.
 * @returns if possible
 */
function harmlessRansomNote(note, magazine) {
  if (note === undefined || magazine === undefined) {
    throw new TypeError('Need a note and magazine.');
  }
  if (typeof note !== 'string') {
    throw new TypeError('The note needs to be a string.');
  }
  if (typeof magazine !== 'string') {
    throw new TypeError('The magazine needs to be a string.');
  }
  const hs = new HashTable(); // holds the values
  let regex = /[^\w\s]/g;

  // puts the words in the hashtable the amount of times the appear.
  const magazineWords = magazine.toLowerCase().replace(regex, '').split(' ');
  let word, value;
  for (word of magazineWords) {
    value = hs.getValue(word);
    if (value) {
      hs.insert(word, ++value);
    } else {
      hs.insert(word, 1);
    }
  }

  // checks if the words can be taken from the magazine.
  const noteWords = note.toLowerCase().replace(regex, '').split(' ');
  for (word of noteWords) {
    value = hs.getValue(word);
    if (!value) {
      return false;
    }
    hs.insert(word, --value);
  }
  return true;
}

module.exports = harmlessRansomNote;
