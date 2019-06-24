export const partial = function(fn, ...argsBound) {
    return function (...args) { //this returned function acts like a thunk
        return fn.apply(null, [...argsBound, ...args]);
    }
};


/**
 * We can use partial to create thunks, as shown below
 * 
 * Q: What is thunk? 
 * A: A function, which has everything it needs to run on its own..i.e it doesn't depend in arguments
 *    In, other words thunk is a function, return by another function  
 * 
 * Sync thunk
 *  function add(x, y) {
 *      return x + y
 *  }
 *  const thunk = function() {
 *      return add(10, 15); 
 *  }
 * 
 *  thunk() --> 25
 * 
 * Async thunk
 *  Only difference between sync and async thunk, is that async ones accept callback as param, as shown in below example
 *  We can see that async thunks forms the conceptual basis of promises 
 */
function addAsync(x, y, cb) {
    setTimeout(() => {
        cb(x + y);
    }, 5000);
}

function printSum(sum) {
    console.log(sum);
}

const addAsyncThunk = partial(addAsync, 10, 15);

// Uncomment to test async thunk
//addAsyncThunk(printSum);
