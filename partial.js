const partial = (func, ...argsBound) => (...args) => func.call(this, ...argsBound, ...args);

export default partial;
