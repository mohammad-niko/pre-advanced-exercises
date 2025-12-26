"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function last(arr) {
    return arr[arr.length - 1];
}
var n = last([1, 2, 3, 4, 5, 6]);
var m = last(["mmad", "ali", "mmadAli"]);
var l = last([true, false, true, true]);
var movie = {
    title: "king",
    price: 100,
};
var message = {
    pending: "waiting for paidment",
    paid: "Payment successfully",
    cancelled: "order Cancelled",
};
function getUser() {
    return {
        id: 1,
        name: "Ali",
        isAdmin: false,
    };
}
var user = {
    id: 1,
    name: "Ali",
    isAdmin: false,
};
console.log(user);
console.log(movie);
console.log(message.paid);
var mmad = {
    title: "ahmad",
    price: 100,
};
function printId(value) {
    console.log(value.id);
}
printId({ id: 1, name: "Ali" });
function printName(value) {
    console.log({ name: "mohmamd", age: 30 });
    console.log({ age: 30 });
}
