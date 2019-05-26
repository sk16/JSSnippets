/*
  Execute with experimental flag (node v12.2.0)
  e.g. node v12.2.0: node --experimental-modules curry.js
      node v10.15.3: node --experimental-modules curry.mjs (all js modules should have 'mjs' ext)
*/
import partial from './partial.js';


export default function curry(func) {
  return function curried(...args) {
    if (args.length < func.length) {
      return partial(curried, ...args);
    }
    return func.call(this, ...args);
  };
}
