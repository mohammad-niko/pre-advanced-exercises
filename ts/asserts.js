"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Modle 1:
// This assertion function narrows any type to something with a 'length' property.
// Using 'asserts value is' tells TypeScript that if the function doesn't throw, value is guaranteed to have a length property.
function assertHasLength(value) {
    // Ensure value has a 'length' property
    if (!value ||
        value === null ||
        !("length" in value) ||
        typeof value.length !== "number") {
        throw new Error("Type has no length property! ");
    }
}
// This function calls the assertion function to ensure the value has a length property, then safely accesses it.
function printLength(value) {
    // Verify the type using assertHasLength
    assertHasLength(value);
    console.log(value.length);
}
// Example: calling printLength with a string that has a length property.
printLength("hello");
// This assertion function validates that an unknown value matches the User type.
// It uses the 'in' operator to check if required properties (id, name) exist and have correct types.
function assertIsUser(user) {
    // Ensure object conforms to the 'User' type definition
    if (typeof user !== "object" ||
        user === null ||
        !user ||
        !("id" in user) ||
        !("name" in user) ||
        typeof user.id !== "number" ||
        typeof user.name !== "string") {
        throw new Error("Not a user!");
    }
}
// This function accepts an unknown type and uses assertIsUser to narrow it to User type, then safely accesses user.name.
function greet(user) {
    // Verify the type using assertIsUser
    assertIsUser(user);
    console.log(user.name.toUpperCase());
}
