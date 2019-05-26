// Type JavaScript here and click "Run Code" or press Ctrl + s
console.log('Hello, world!');


// Challenge 1
function addTwo(num) {
	return num + 2;
}

// To check if you've completed it, uncomment these console.logs!
 console.log(addTwo(3));
 console.log(addTwo(10));


// Challenge 2
function addS(word) {
	return word + 's';
}

// uncomment these to check your work
 console.log(addS('pizza'));
 console.log(addS('bagel'));


// Challenge 3
function map(array, callback) {
    const ret = [];
    for(let val of array) {
        ret.push(callback(val));
    }
    return ret
}

 console.log(map([1, 2, 3], addTwo));


// Challenge 4
function forEach(array, callback) {
  for(let val of array) {
    callback(val);
  }
}

// see for yourself if your forEach works!


//--------------------------------------------------
// Extension
//--------------------------------------------------

//Extension 1
function mapWith(array, callback) {
  const ret = [];
	forEach(array, function(val) {
    ret.push(callback(val));
  });
  return ret;
}

//Extension 2
function reduce(array, callback, accumulator) {
  const length = !array ? 0 : array.length;
  let index = -1;
  if(length) {
    accumulator = array[++index];
  }
  while(++index < length) {
    accumulator = callback(accumulator, array[index]);
  }
  return accumulator;
}

//Extension 3
function intersection(arrays) {
    if(arrays.length < 2) {
        return arrays[0] ? arrays[0] : [];
    }

    let initialMap = arrays[0].reduce((acc, val) => {
        acc[val] = true;
        return acc;
    }, {});

    for(let array of arrays) {
        initialMap = array.reduce((acc, val) => {
            if(initialMap[val]) {
                acc[val] = true;
            }
            return acc;
        }, {});
    }

    return Object.keys(initialMap);
}

// console.log(intersection([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]));
// should log: [5, 15]

//Extension 4
function union(arrays) {
	    return arrays.reduce((acc, array) => {
        array.forEach(element => {
            if(!acc.map[element]) {
                acc.map[element] = true;
                acc.arr.push(element);
            }
        });
        return acc;
    }, {arr: [], map: {}}).arr;
}

// console.log(union([5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]));
// should log: [5, 10, 15, 88, 1, 7, 100]

//Extension 5
function objOfMatches(array1, array2, callback) {
  const map2 = array2.reduce((acc, val) => {
        acc[val] = true;
        return acc;
    }, {})
    return array1.reduce((acc, elem) => {
        let mappedElem = callback(elem);
        if(map2[mappedElem]) {
            acc[elem] = mappedElem;
        }
        return acc;
    }, {});
}

// console.log(objOfMatches(['hi', 'howdy', 'bye', 'later', 'hello'], ['HI', 'Howdy', 'BYE', 'LATER', 'hello'], function(str) { return str.toUpperCase(); }));
// should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }

//Extension 6
function multiMap(arrVals, arrCallbacks) {
    return arrVals.reduce((acc, elem) => {
        acc[elem] = arrCallbacks.map(cb => cb(elem));
        return acc;
    }, {});
}

// console.log(multiMap(['catfood', 'glue', 'beer'], [function(str) { return str.toUpperCase(); }, function(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }, function(str) { return str + str; }]));
// should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }

