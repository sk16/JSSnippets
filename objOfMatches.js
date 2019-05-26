/**
 * Construct a function objOfMatches that accepts two arrays and a callback. 
 * objOfMatches will build an object and return it. To build the object, 
 * objOfMatches will test each element of the first array using the callback 
 * to see if the output matches the corresponding element (by index) of the 
 * second array. If there is a match, the element from the first array becomes 
 * a key in an object, and the element from the second array becomes the 
 * corresponding value.
 */

import { arrayToObject } from './intersection.js';

function objOfMatches(array1, array2, callback) {
    const map2 = arrayToObject(array2);

    return array1.reduce((acc, elem) => {
        let mappedElem = callback(elem);
        if(map2[mappedElem]) {
            acc[elem] = mappedElem;
        }
        return acc;
    }, {});
}

/* console.log(objOfMatches(['hi', 'howdy', 'bye', 'later', 'hello'], ['HI', 'Howdy', 'BYE', 'LATER', 'hello'], function(str) { return str.toUpperCase(); })); */

function multiMap(arrVals, arrCallbacks) {
    return arrVals.reduce((acc, elem) => {
        acc[elem] = arrCallbacks.map(cb => cb(elem));
        return acc;
    }, {});
}

/* console.log(multiMap(['catfood', 'glue', 'beer'], [function(str) { return str.toUpperCase(); }, function(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }, function(str) { return str + str; }])); */