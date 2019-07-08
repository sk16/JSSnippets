Object.prototype.myCreate = function(proto) {
   function F() {}
   F.prototype = proto;
   return new F();
}

//Below is more direct way to visualize, what Object.create does internally
function myCreate(proto) {
   const o = {};
   o.__proto__ = proto;
   return o;
}