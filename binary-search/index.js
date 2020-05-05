/**
 * Takes a sorted array of value and a key to search for, returns true if key is found.
 * @param {Array} values
 * @param {Object} key
 * @throws {TypeError} Invalid input
 * @returns {boolean} true, if key found.
 */
function binarySearch(values, key) {
  if (values === undefined || key === undefined) {
    throw new TypeError('Need to supply an array and a key as input.');
  }
  if (!(values instanceof Array)) {
    throw new TypeError('values need to be an array.');
  }
  return search(values, key);
}

function search(values, key) {
  let len = values.length;
  if (len === 0) {
    return false;
  }
  const middle = Math.floor(len / 2);
  if (values[middle] === key) {
    return true;
  } else if (values[middle] > key) {
    return search(values.slice(0, middle), key);
  } else {
    return search(values.slice(middle + 1, len), key);
  }
}

module.exports = binarySearch;
