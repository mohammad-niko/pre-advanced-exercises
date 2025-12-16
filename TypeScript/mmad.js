"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function handle(value) {
    if (typeof value === "string") {
        return value.toUpperCase();
    }
    else if (typeof value === "boolean") {
        return value ? "yes" : "no";
    }
}
var moive = {
    id: 10,
    name: "king's man",
    mainCher: "mmad",
};
function isSucess(res) {
    return "data" in res;
}
function Api(res) {
    if (isSucess(res))
        return res.data.toLocaleUpperCase();
    return res.error;
}
function wrap(value) {
    return value;
}
var gnric = wrap(2566);
console.log(typeof gnric);
