const { HashTable } = require('../../data_structures/hashTable/HashTable');

function twoSum(list, sum) {
  if (list === undefined || sum === undefined) {
    throw new TypeError('Needs an array of numbers and a sum as input.');
  }
  if (!(list instanceof Array)) {
    throw new TypeError('The list needs to be an array of numbers.');
  }
  if (typeof sum !== 'number') {
    throw new TypeError('The sum needs to be a number');
  }
  let res = [];
  const hs = new HashTable();
  let value, counter;
  for (value of list) {
    if (typeof value !== 'number') {
      throw new TypeError('The list needs to be an array of numbers.');
    }
    counter = hs.getValue(value.toString());
    if (counter === null) {
      counter = sum - value;
      hs.insert(counter.toString(), value);
    } else {
      res.push([counter, value]);
      hs.insert(value.toString(), counter);
    }
  }
  return res;
}

module.exports = twoSum;
