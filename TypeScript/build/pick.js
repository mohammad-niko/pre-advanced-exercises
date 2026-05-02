"use strict";
// function last<T>(arr: T[]): T {
//   return arr[arr.length - 1];
// }
Object.defineProperty(exports, "__esModule", { value: true });
const movie = {
    title: "king",
    price: 100,
};
const message = {
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
const user = {
    id: 1,
    name: "Ali",
    isAdmin: false,
};
console.log(user);
console.log(movie);
console.log(message.paid);
const mmad = {
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
printName({ name: "ali", id: 5 });
