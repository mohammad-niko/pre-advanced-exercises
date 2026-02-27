// **Type Assertion Examples**
export {};

//Modle 1:
function assertHasLength(value: any): asserts value is { length: number } {
  // Ensure value has a 'length' property
  if (
    !value ||
    value === null ||
    !("length" in value) ||
    typeof value.length !== "number"
  ) {
    throw new Error("Type has no length property! ");
  }
}

function printLength(value: any) {
  // Verify the type using assertHasLength
  assertHasLength(value);
  console.log(value.length);
}
printLength("hello");

//Modle 2:
type User = {
  id: number;
  name: string;
};

function assertIsUser(user: unknown): asserts user is User {
  // Ensure object conforms to the 'User' type definition
  if (
    typeof user !== "object" ||
    user === null ||
    !user ||
    !("id" in user) ||
    !("name" in user) ||
    typeof user.id !== "number" ||
    typeof user.name !== "string"
  ) {
    throw new Error("Not a user!");
  }
}

function greet(user: unknown) {
  // Verify the type using assertIsUser
  assertIsUser(user);
  console.log(user.name.toUpperCase());
}
