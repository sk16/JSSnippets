function compose(...fnArr) {
  //Allows this function to called both as compose(fn1, fn2) and compose([fn1, fn2]) 
  fnArr = [].concat([], ...fnArr);
  return function (x) {
    return fnArr.reduceRight((y, f) => f(y), x);
  }
}

function addOne(a) {

  return a + 1;
}

function timesTwo(a) {
  return a * 2;
}

var actual = compose([addOne, timesTwo]);

console.log(actual(1));