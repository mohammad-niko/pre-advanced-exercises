// Description: This file contains a collection of predicate functions in JavaScript.
function isCat(animal) {
    // Returns true if the animal makes "meow" sound
    return "meow" in animal;
}
function makeSounds(animal) {
    // Makes the animal make its respective sounds (meow or bark)
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
function isAdmin(people) {
    // Checks if the person has the "admin" role
    return people.role === "admin";
}
const admins = people.filter(isAdmin);
console.log(admins);
function isSquare(shape) {
    // Returns true if the shape has a "size" property
    return "size" in shape;
}
function isSuccess(res) {
    // Checks if the response status is "success"
    return res.status === "success";
}
//dingerse:
function isSuccessTwo(res) {
    // Checks if the response data is not undefined
    return res.data !== undefined;
}
function handleResponse(res) {
    // Handles a response based on its success or failure
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
    // Returns false if the pet's name is "sharkey"
    if (pet.name === "sharkey")
        return false;
    return pet.type === "fish";
}
const fishs = pets.filter(noSharkey);
console.log(fishs);
export {};
