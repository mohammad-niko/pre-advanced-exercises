export {};

// PRACTICE 1: Type Predicates with 'in' Operator
// This defines two types (Cat and Dog) and a union type Animal. The isCat function is a type predicate
// that narrows type using the 'in' operator to check if the animal object has a 'meow' method.
// This allows TypeScript to automatically know the animal is a Cat when isCat returns true.
type Cat = { meow: () => void };
type Dog = { bark: () => void };

type Animal = Cat | Dog;

function isCat(animal: Animal): animal is Cat {
  return "meow" in animal;
}

// This function uses type narrowing with the isCat predicate to safely call the correct method.
// Inside the if block, TypeScript knows animal is Cat, so animal.meow() is safe; in else it's Dog.
function makeSounds(animal: Animal) {
  if (isCat(animal)) {
    return animal.meow();
  } else {
    return animal.bark();
  }
}

// PRACTICE 2: Type Predicates with Discriminated Union
// Here we define Admin and User types with a literal 'role' field that acts as a discriminator.
// The isAdmin predicate checks if role equals "admin" to narrow the type to Admin.
// practice  2:
type Admin = { role: "admin"; permissions: string[] };
type User = { role: "user"; email: string };

type Person = Admin | User;

const people: Person[] = [
  { role: "admin", permissions: ["read", "write"] },
  { role: "user", email: "a@test.com" },
  { role: "admin", permissions: ["read"] },
];

// The isAdmin function is a type predicate that narrows Person to Admin by checking the role field.
// When used with filter(), TypeScript knows the resulting array contains only Admin objects.
function isAdmin(people: Person): people is Admin {
  return people.role === "admin";
}

const admins: Admin[] = people.filter(isAdmin);
console.log(admins);

// PRACTICE 3: Type Predicates with 'in' Operator for Object Properties
// Square and Circle are distinguished by different properties: size vs radius.
// The isSquare predicate uses the 'in' operator to check if 'size' exists, narrowing Shape to Square.
type Square = { size: number };
type Circle = { radius: number };

type Shape = Square | Circle;

function isSquare(shape: Shape): shape is Square {
  return "size" in shape;
}

// PRACTICE 4: Type Predicates with Discriminated Union (Status Field)
// SuccessResponse and ErrorResponse are union types with a literal 'status' field as discriminator.
// The isSuccess predicate narrows ApiResponse to SuccessResponse by checking if status equals "success".
type SuccessResponse = {
  status: "success";
  data: string;
};

type ErrorResponse = {
  status: "error";
  message: string;
};

type ApiResponse = SuccessResponse | ErrorResponse;

function isSuccess(res: ApiResponse): res is SuccessResponse {
  return res.status === "success";
}

// Alternative approach: This uses a type assertion ('as' operator) to treat res as SuccessResponse
// and then check if the 'data' property exists. This is less safe than the discriminator approach above.
//dingerse:
function isSuccessTwo(res: ApiResponse): res is SuccessResponse {
  return (res as SuccessResponse).data !== undefined;
}

// This function demonstrates type narrowing in action: it uses the isSuccess predicate
// to narrow the ApiResponse union, then safely accesses type-specific properties (data or message).
function handleResponse(res: ApiResponse) {
  if (isSuccess(res)) {
    console.log(res.data);
  } else {
    console.log(res.message);
  }
}

// PRACTICE 5: Complex Type Predicate with Multiple Conditions
// Fish and Bird both have a 'type' field and 'name', but different action methods.
// The noSharkey predicate returns Fish only if type is "fish" AND the name is not "sharkey".
type Fish = { type: "fish"; swim: () => void; name: string };
type Bird = { type: "bird"; fly: () => void; name: string };

type Pet = Fish | Bird;

const pets: Pet[] = [
  { type: "fish", swim: () => {}, name: "nemo" },
  { type: "bird", fly: () => {}, name: "parrot" },
  { type: "fish", swim: () => {}, name: "sharkey" },
];

function noSharkey(pet: Pet): pet is Fish {
  if (pet.name === "sharkey") return false;

  return pet.type === "fish";
}

// This filters the pets array using the noSharkey predicate, resulting in a Fish[] containing only
// non-sharkey Fish. TypeScript knows the result type is Fish[] due to the type predicate.
const fishs: Fish[] = pets.filter(noSharkey);
console.log(fishs);
