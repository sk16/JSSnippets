export const bind = function (fn, ctx, ...argsBound) {
    return function (...args) {
        return fn.apply(ctx, [...argsBound, ...args]);
    }
}

function testBind() {
    function printName() {
        console.log("Name: " + this.name);
    }
    
    const test1 = {
        name: "test1"
    }
    
    const test2 = {
        name: 'test2'
    }
    
    const printName1 = bind(printName, test1);
    const printName2 = bind(printName, test2);
    
    printName1();
    printName2 ();
}

testBind();