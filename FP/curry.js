export default function curry(func) {
  return function curried(...args) {
    return args.length < func.length ?
      curried.bind(null, ...args) :
      func.call(null, ...args);
  };
}

function add(x, y, z) {
  return x + y + z;
}

const addCurry = curry(add);
console.log(addCurry(10)(20)(30));