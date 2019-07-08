/**
 * Usage:
 * var arr2 = [1, 2, [3, 4, [5, 6]]];
 * arr2.flat(); --> [1, 2, 3, 4, [5, 6]]
 */


// Recursive Solution (Reduce + Concat)

function flatDeep(arr)  {
    return arr.reduce((acc, el) => {
        return acc.concat(Array.isArray(el) ? flatDeep(el) : el);
    }, []);
}


// Non Recursive - using stack

function flatDeepN(arr) {
    const stack = [...arr];
    const res = [];
    while(stack.length) {
        const next = stack.pop();
        if (Array.isArray(next)) {
            stack.push(...next);
        } else {
            res.push(next);
        }
    }

    return res.reverse();
}

console.log(flatDeep([1, 2, [3, 4,[5, 6,[7, 8], 9], 10, [11, 12, [13, [14, [16, [17, [18]]]]]]]]));
console.log(flatDeep([1,2,3,[1,2,3,4, [2,3,4]]]));

console.log(flatDeepN([1, 2, [3, 4,[5, 6,[7, 8], 9], 10, [11, 12, [13, [14, [16, [17, [18]]]]]]]]));
console.log(flatDeepN([1,2,3,[1,2,3,4, [2,3,4]]]));