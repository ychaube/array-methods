function forEach(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i, arr);
  }
}

function map(arr, callback) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i], i, arr));
  }
  return result;
}

function filter(arr, callback) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    const elem = arr[i];

    if (callback(elem, i, arr)) {
      result.push(elem);
    }
  }
  return result;
}

function reduce(arr, callback) {}

function some(arr, callback) {}

function every(arr, callback) {}

function flat(arr, callback) {}

function find(arr, callback) {}

module.exports = {
  forEach,
  map,
  filter,
  reduce,
  some,
  every,
  flat,
  find,
};
