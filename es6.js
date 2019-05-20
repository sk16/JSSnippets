"use strict"

let numbers = [6,4,2,5,8,12,3,1,10,51,80], evenc = 0, oddc = 0, oddMap = {}, evenMap = {}, eveni = 0, oddi = 0, res = [];
const isEven = (n) => n%2 === 0;
const isOdd = (n) => Math.abs(n%2) === 1;
const addInMap = (n) => {
	if(isEven(n) && !evenMap[n]){
		evenMap[n] = true;
		evenc++;
	}
	if(isOdd(n) && !oddMap[n]) {
		oddMap[n] = true;
		oddc++;
	}
}
numbers = numbers.sort((a,b) => {
	addInMap(a);
	addInMap(b);
	return a-b;
});
console.log(numbers);
console.log(evenMap, evenc, oddMap, oddc);


