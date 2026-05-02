"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function memoize(fn) {
    const cacheMemory = new Map();
    return function (input) {
        if (cacheMemory.has(input))
            return cacheMemory.get(input);
        else {
            const result = fn(input);
            cacheMemory.set(input, result);
            console.log(Array.from(cacheMemory.entries()));
            return result;
        }
    };
}
function add(a, b) {
    return a + b;
}
const memoizedAdd = memoize((a) => memoize((b) => a + b));
console.log("return: " + memoizedAdd(5)(10));
console.log("return: " + memoizedAdd(12)(20));
console.log("return: " + memoizedAdd(2)(12));
// console.log("return: " + memoizedAdd(5)(10));
console.log("return: " + memoizedAdd(12)(21));
console.log("return: " + memoizedAdd(5)(11));
console.log("return: " + memoizedAdd(6)(10));
console.log("return: " + memoizedAdd(6)(20));
console.log("return: " + memoizedAdd(6)(30));
console.log("return: " + memoizedAdd(6)(30));
