Function.prototype.myBind = function(thisArg, ...argsBound) {
    var self = this;
    return function(...args) {
        return self.apply(thisArg, [...argsBound, ...args]);
    }
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

const o3 = {
    name: 'name3'
}

const test1 = test.myBind(o1);
const test2 = test.myBind(o2, 'Mr.');
const test3 = test.myBind(o3, 'Mrs.', ' bye');

console.log(test1('Mr', 'hello'));
console.log(test2('good morning'));
console.log(test3());