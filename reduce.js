function add (a, b) {
  return a + b;
}

function mul(a, b) {
  return a * b;
}

var arr = [4, 1, 3, 10, 2];

function reduceRecursive(array, callback, initialValue) {
  if(array.length == 0) {
    return initialValue;
  }
  return reduce(array.slice(1), callback, callback(initialValue, array[0]));
}

function reduce(array, callback, accumulator) {
  const length = !array ? 0 : array.length;
  let index = -1;
  if(length) {
    accumulator = array[++index];
  }
  while(++index < length) {
    accumulator = callback(accumulator, array[index]);
  }
  return accumulator;
}
//e.g.

console.log(reduce(arr, add, 0)); // ---> 8
console.log(reduce(arr, mul, 1));