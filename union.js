export default function union(...arrays) {
    return arrays.reduce((acc, array) => {
        array.forEach(element => {
            if(!acc.map[element]) {
                //Since using object.keys on acc.map can break ordering, so to maintain the order,
                //we push in array and compare using map
                acc.map[element] = true;
                acc.arr.push(element);
            }
        });
        return acc;
    }, {arr: [], map: {}}).arr;
}

console.log(union([5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]));