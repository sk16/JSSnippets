 var Foo = function (a) {
	function biz() {
		console.log(a);
	}
	this.baz = function(){
		console.log(a);
	}
}

Foo.prototype = {
	bar: function(){
		console.log(a);
	}
}

var f = new Foo(5);


f.biz();