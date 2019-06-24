/**
 * 
 * Below are three steps in creating inheritance
 * 1. Add `SuperClass.call(this)` in SubClass function definition
 * 2. SubClass.prototype = Object.create(SuperClass.prototype);
 * 3. SubClass.prototype.constructor = SubClass
 */
function Quad(area) { //superclass
	this.area = area;
}

Quad.prototype.printArea = function() {
	console.log('Area is: '+this.area);
}

function Rectangle(l,b) { //subclass
	Quad.call(this, l*b); // equivalent to super()
	this.l = l;
	this.b = b;
}

Rectangle.prototype = Object.create(Quad.prototype);
Rectangle.prototype.constructor = Rectangle;



var q1 = new Quad(1);
q1.printArea();

var r1 = new Rectangle(2,3);
r1.printArea();