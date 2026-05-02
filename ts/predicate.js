"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isCat(animal) {
    return "meow" in animal;
}
// This function uses type narrowing with the isCat predicate to safely call the correct method.
// Inside the if block, TypeScript knows animal is Cat, so animal.meow() is safe; in else it's Dog.
function makeSounds(animal) {
    if (isCat(animal)) {
        return animal.meow();
    }
    else {
        return animal.bark();
    }
}
const people = [
    { role: "admin", permissions: ["read", "write"] },
    { role: "user", email: "a@test.com" },
    { role: "admin", permissions: ["read"] },
];
// The isAdmin function is a type predicate that narrows Person to Admin by checking the role field.
// When used with filter(), TypeScript knows the resulting array contains only Admin objects.
function isAdmin(people) {
    return people.role === "admin";
}
const admins = people.filter(isAdmin);
console.log(admins);
function isSquare(shape) {
    return "size" in shape;
}
function isSuccess(res) {
    return res.status === "success";
}
// Alternative approach: This uses a type assertion ('as' operator) to treat res as SuccessResponse
// and then check if the 'data' property exists. This is less safe than the discriminator approach above.
//dingerse:
function isSuccessTwo(res) {
    return res.data !== undefined;
}
// This function demonstrates type narrowing in action: it uses the isSuccess predicate
// to narrow the ApiResponse union, then safely accesses type-specific properties (data or message).
function handleResponse(res) {
    if (isSuccess(res)) {
        console.log(res.data);
    }
    else {
        console.log(res.message);
    }
}
const pets = [
    { type: "fish", swim: () => { }, name: "nemo" },
    { type: "bird", fly: () => { }, name: "parrot" },
    { type: "fish", swim: () => { }, name: "sharkey" },
];
function noSharkey(pet) {
    if (pet.name === "sharkey")
        return false;
    return pet.type === "fish";
}
// This filters the pets array using the noSharkey predicate, resulting in a Fish[] containing only
// non-sharkey Fish. TypeScript knows the result type is Fish[] due to the type predicate.
const fishs = pets.filter(noSharkey);
console.log(fishs);
