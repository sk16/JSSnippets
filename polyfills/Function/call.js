/**
 * Syntax of Function.prototype.call
 * 
 * - fn.call(thisArg, arg1, arg2, arg3, ...)
 * 
 */

Function.prototype.myCall = function(thisArg, ...args){
    var uniquePropName;

    do {
        uniquePropName = 'prop' + Math.random();
    } while (thisArg.hasOwnProperty(uniquePropName));

    thisArg[uniquePropName] = this;

    var res = thisArg[uniquePropName](...args);
    delete thisArg[uniquePropName];
    return res;
}


function test(prefix, suffix) {
    return prefix + ` ${this.name} ` + suffix;
}

const o1 = {
    name: 'name1'
}

const o2 = {
    name: 'name2'
}

console.log(test.myCall(o1, 'Mr.', 'hello'));
console.log(test.myCall(o2, 'Master', 'hola'));