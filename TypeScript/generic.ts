function placeholder<T>(args: T[]): T[] {
  return args;
}

const number = placeholder<number>([100, 200, 300]); // ✅
const string = placeholder<string>(["100", "200", "300"]); // ✅

// type User = {
//   id: number;
//   name: string;
// };

// let firstUser : User = {
//     id:1
// }

// let partialUser: Partial<User> = {
//   id: 2,
// };

// let secondUser : User = {
//     id:1
// }

// Record<Keys, Type>:
interface Pageinfo {
  title: string;
}

type Pages = "home" | "about" | "contact";

const nav: Record<Pages, Pageinfo> = {
  home: { title: "Home" },
  about: { title: "About" },
  contact: { title: "Contact" },
};

// Pick<Type, Keys>:
interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  category: string;
  imageUrl: string;
}

type ProductListItem1 = Pick<Product, "name" | "price">;

const product1: ProductListItem1 = {
  name: "Samsung TV",
  price: 1000,
};
// Omit<Type, Keys>:
type ProductListItem2 = Omit<Product, "id" | "stock">;

// const product2 : ProductListItem2 = {
// id: "1",
// }❌

// Exclude<UnionType, ExcludedMembers>:

type EventType =
  | { type: "click"; x: number; y: number }
  | { type: "keypress"; key: string }
  | { type: "scroll"; position: number };

type WithoutScroll = Exclude<EventType, { type: "scroll"; position: number }>;

//  <Extract<Type, Union:
type Role = "admin" | "editor" | "viewer";

type CanEdit = Extract<Role, "admin" | "editor">;

// ReturnType<Type> :

function fetchPost() {
  return {
    id: 10,
    title: "Hello TS",
    published: true,
  };
}

type Post = ReturnType<typeof fetchPost>;

const post: Post = {
  id: 10,
  title: "Hello TS",
  published: true,
};

function printName<T extends { name: string }>(obj: T) {
  console.log(obj.name);
}
// printName({ name: "Ali" });
// printName({ name: "Sara", age: 25 });
// printName({ name: "Reza", job: "engineer", married: true });
// printName({ age: 30 }); //❌

interface HasID {
  id: number;
}

interface UserWeb<T extends HasID> {
  data: T;
}
type Car = { id: number; name: string };

const userWeb: UserWeb<Car> = { data: { name: "mostang", id: 10 } };

export type Filter = <T>(f: (item: T) => boolean, arr: T[]) => T[];
const filter: Filter = (f, arr) => arr.filter(f);

filter((x) => (x > 3 ? true : false), [1, 2, 3, 4, 5]);

export type FMap = <T, U>(f: (i: T) => U, arr: T[]) => U[];

const map: FMap = (f, arr) => arr.map(f);

map((x) => (x ? 1 : 2), [true, false, true]);

class Store<T> {
  protected _objects: T[] = [];
  add(obj: T): void {
    this._objects.push(obj);
  }
}

class SearchableStore<T extends { name: string }> extends Store<T> {
  find(name: string): T | undefined {
    return this._objects.find((obj) => obj.name === name); // ❌❌
    // Property 'name' dose not exist on type 'T'.
  }
}

class BaseRepository<T> {
  add(item: T): void {
    console.log("Item added to DB", item);
  }

  getById(id: number): T | null {
    return null;
  }
}

class User {
  constructor(public name: string) {}
}

class Product {
  constructor(public price: number) {}
}

class AdvancedRepository<T> extends BaseRepository<T> {
  deleteAll(items: T[]): void {
    console.log(`Deleted ${items.length} items`);
  }
}

const repo = new AdvancedRepository<User>();
repo.add(new User("Reza"));
repo.deleteAll([new User("Reza"), new User("Ali")]);

class UserRepository extends BaseRepository<User> {
  getUserByEmail(email: string): User {
    console.log(`Finding user with email: ${email}`);
    return new User("TestUser");
  }
}

const userRepo = new UserRepository();
userRepo.add(new User("Sara"));
userRepo.getUserByEmail("sara@test.com");

class LoggedRepository<T, U> extends BaseRepository<T> {
  addAndLog(item: T, logDetail: U): void {
    super.add(item);
    console.log(`Logged detail:`, logDetail);
  }
}

const loggedRepo = new LoggedRepository<User, string>();
loggedRepo.addAndLog(new User("Mina"), "User added successfully at 10 AM");

type Point = { [index: string]: number; x: number; y: number };

type P = keyof Point;

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const person = { name: "Ali", age: 30, location: "Tehran" };

const personName = getProperty(person, "name");
const personAge = getProperty(person, "age");
const getLoc = getProperty(person, "location");

console.log(personName);

interface Todo {
  title: string;
  description: string;
  completed: boolean;
  createdAt: number;
}
type TodoPreview = Omit<Todo, "description">;

// publice Mapped type:
type Newtype<T> = {
  [P in "k"]: "someType";
};

type redonly<T> = {
  readonly [P in keyof T]: T[P];
};

type pick<T, K extends keyof T> = {
  [P in K]: T[P];
};

type exclude<T, K> = T extends K ? never : T;
type extract<T, K> = T extends K ? T : never;

type UnionToIntersection<U> = (U extends any ? (x: U) => void : never) extends (
  x: infer I,
) => void
  ? I
  : never;

type U = { a: 1 } | { b: 2 } | { c: 3 };

type I = UnionToIntersection<U>;

const test: I = {
  a: 1,
  b: 2,
  c: 3,
};

type JsonType<T> = {
  [K in keyof T as K extends "salt" | "ezx" | "hash" | "iat"
    ? never
    : K]: K extends "active" ? boolean : string;
} extends "active"
  ? T
  : T & { active: boolean };

type MMadJson<T> = "active" extends keyof T
  ? {
      [K in keyof Omit<T, "salt" | "ezx" | "hash" | "iat">]: K extends "active"
        ? boolean
        : string;
    }
  : { [K in keyof Omit<T, "salt" | "ezx" | "hash" | "iat">]: string } & {
      active: boolean;
    };

type T = {
  name: string;
  salt: string;
  ezx: string;
  hash: number;
  data: string;
};

type Mmad = JsonType<T>;



//  should add 'active' key to return type in case it doesn't exist in input type FAIL
//         test score ratio: 15/100
//         test time: -
//     should change type of property with 'active' key to boolean in case this key exists but it's not from type boolean FAIL
//         test score ratio: 15/100
//         test time: -
//     should assign type boolean to property with key 'active' in case it doesn't exist in input type FAIL
//         test score ratio: 15/100
//         test time: -
//     should convert type of all properties to string, except property with key 'active' FAIL
//         test score ratio: 15/100
//         test time: -
//     should remove forbidden key word 'hash' FAIL
//         test score ratio: 10/100
//         test time: -
//     should remove forbidden key word 'ezx' FAIL
//         test score ratio: 10/100
//         test time: -
//     should remove forbidden key word 'iat' FAIL
//         test score ratio: 10/100
//         test time: -
//     should remove forbidden key word 'salt' FAIL
//         test score ratio: 10/100
// test time: -
