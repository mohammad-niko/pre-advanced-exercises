function placeholder(args) {
    return args;
}
const number = placeholder([100, 200, 300]); // ✅
const string = placeholder(["100", "200", "300"]); // ✅
const nav = {
    home: { title: "Home" },
    about: { title: "About" },
    contact: { title: "Contact" },
};
const product1 = {
    name: "Samsung TV",
    price: 1000,
};
// ReturnType<Type> :
function fetchPost() {
    return {
        id: 10,
        title: "Hello TS",
        published: true,
    };
}
const post = {
    id: 10,
    title: "Hello TS",
    published: true,
};
function printName(obj) {
    console.log(obj.name);
}
const userWeb = { data: { name: "mostang", id: 10 } };
const filter = (f, arr) => arr.filter(f);
filter((x) => (x > 3 ? true : false), [1, 2, 3, 4, 5]);
const map = (f, arr) => arr.map(f);
map((x) => (x ? 1 : 2), [true, false, true]);
class Store {
    _objects = [];
    add(obj) {
        this._objects.push(obj);
    }
}
class SearchableStore extends Store {
    find(name) {
        return this._objects.find((obj) => obj.name === name); // ❌❌
        // Property 'name' dose not exist on type 'T'.
    }
}
class BaseRepository {
    add(item) {
        console.log("Item added to DB", item);
    }
    getById(id) {
        return null;
    }
}
class User {
    name;
    constructor(name) {
        this.name = name;
    }
}
class Product {
    price;
    constructor(price) {
        this.price = price;
    }
}
class AdvancedRepository extends BaseRepository {
    deleteAll(items) {
        console.log(`Deleted ${items.length} items`);
    }
}
const repo = new AdvancedRepository();
repo.add(new User("Reza"));
repo.deleteAll([new User("Reza"), new User("Ali")]);
class UserRepository extends BaseRepository {
    getUserByEmail(email) {
        console.log(`Finding user with email: ${email}`);
        return new User("TestUser");
    }
}
const userRepo = new UserRepository();
userRepo.add(new User("Sara"));
userRepo.getUserByEmail("sara@test.com");
class LoggedRepository extends BaseRepository {
    addAndLog(item, logDetail) {
        super.add(item);
        console.log(`Logged detail:`, logDetail);
    }
}
const loggedRepo = new LoggedRepository();
loggedRepo.addAndLog(new User("Mina"), "User added successfully at 10 AM");
function getProperty(obj, key) {
    return obj[key];
}
const person = { name: "Ali", age: 30, location: "Tehran" };
const personName = getProperty(person, "name");
const personAge = getProperty(person, "age");
const getLoc = getProperty(person, "location");
console.log(personName);
const test = {
    a: 1,
    b: 2,
    c: 3,
};
export {};
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
