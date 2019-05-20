function foo2 () {
	for(var i = 0; i < 10; i++){
		setTimeout(function(i){
			console.log(i);
		}, 0);
	}
}
foo2();