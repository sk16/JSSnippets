/**
 * 
 * The 'new' keyword does the following things:
 * 1. Creates a blank, plain JavaScript object;
 * 2. Links (sets the constructor of) this object to another object;
 * 3. Passes the newly created object from Step 1 as the this context;
 * 4. Returns this if the function doesn't return its own object.

 */
function myNew(Constr, ...args) {
    const o = {};
    o.__proto__ = Constr.prototype;
    Constr.call(o, ...args);
    return o;
}
