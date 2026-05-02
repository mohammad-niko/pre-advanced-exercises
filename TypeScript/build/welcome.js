"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.greeting = greeting;
exports.maximum = maximum;
exports.and = and;
exports.removeDuplicates = removeDuplicates;
const data = "welcom to typescript world";
function welcom(data) {
    return data;
}
const result = welcom(data);
console.log(result);
function greeting(name) {
    return "Hello " + name + "!";
}
// const items: any[] = [1, 3, "jelo", true];
function maximum(items) {
    return Math.max(...items);
}
// maximum([1, 2, 3, 4, 5, 6]) // 6
// maximum([20, 12, 15, 23]) // 23
console.log(maximum([1, 2, 3, 4, 5, 6]));
console.log(maximum([20, 12, 15, 23]));
function and(items) {
    return items.every((item) => item === true);
}
// and([true, true, false]) // false
// and([true, true]) // true
console.log(and([true, true, false]));
console.log(and([true, true]));
function removeDuplicates(items) {
    const unique = [...new Set(items)];
    return unique;
}
// removeDuplicates(["foo", "bar", "bar"]) // ["foo", "bar"]
// removeDuplicates(["a", "a", "a", "b", "b"]) // ["a", "b"]
console.log(removeDuplicates(["foo", "bar", "bar"]));
console.log(removeDuplicates(["a", "a", "a", "b", "b"]));
