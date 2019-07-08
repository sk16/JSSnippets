export function arrayToObject(arr) {
    return arr.reduce((acc, val) => {
        acc[val] = true;
        return acc;
    }, {});
};

export function interection(...arrays) {
    if(arrays.length < 2) {
        return arrays[0] ? arrays[0] : [];
    }

    let initialMap = arrayToObject(arrays[0]);

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

// const arr1 = [7, 1, 5, 2, 3, 6];
// const arr2 = [3, 8, 6, 20, 7];
// const arr3 = [6, 8, 7];
// console.log(interection(arr1, arr2, arr3));