/**
 * Syntax of Function.prototype.apply
 * 
 * - fn.apply(thisArg, [args])
 * 
 */

Function.prototype.myApply = function(thisArg, args){
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

console.log(test.myApply(o1, ['Mr.', 'hello']));
console.log(test.myApply(o2, ['Master', 'hola']));