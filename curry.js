import partial from './partial.js';
//const partial = require('./partial.js');

function curry(func) {
  return function curried(...args) {
    if (args.length < func.length) {
      return partial(curried, ...args);
    }
    return func.call(this, ...args);
  };
}

function asArr(a, b, c) {
  return [a, b, c];
}

const curr = curry(asArr);
console.log(curr(1)(2)(3));
console.log(curr(1, 2)(3));
console.log(curr(1)(2, 3));
