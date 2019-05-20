/*
  Execute with experimental flag (node v12.2.0)
  e.g. node v12.2.0: node --experimental-modules curry.js
      node v10.15.3: node --experimental-modules curry.mjs (all js modules should have 'mjs' ext)
*/
import partial from './partial.js';


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
