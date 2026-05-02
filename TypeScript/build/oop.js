"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Account = void 0;
class Car {
    constructor(model, year, price) {
        this.model = model;
        this.year = year;
        this.price = price;
    }
    drive() {
        console.log("the car has started to diriving");
    }
    stop() {
        console.log("the car has stoped");
    }
}
const ford = new Car("mostang", 1975, 150000);
// console.log(ford);
// console.log(ford instanceof Car);
class Product {
    constructor(id, price, quantity, manufactureDate, expireDate, isPrime) {
        this.id = id;
        this.price = price;
        this.quantity = quantity;
        this.manufactureDate = manufactureDate;
        this.expireDate = expireDate;
        this.isPrime = isPrime;
    }
    buy(amount = 5) {
        this.quantity = (this.quantity ?? 0) + amount;
    }
    sell(amount = 5) {
        if (this.quantity >= amount) {
            this.quantity -= amount;
        }
        else {
            throw new Error("Amount is greater than product quantity");
        }
    }
}
// const thing = new Product();
// thing.buy();
// thing.buy(12);
// thing.sell();
// console.log(thing);
// class Account {
//   readonly id: number;
//   private _password: number;
//   public owner: string;
//   public balance: number;
//   public age?: number;
//   constructor(id: number, password: number, owner: string, balance: number) {
//     this.id = id;
//     this._password = password; //private field can only
//     this.owner = owner;
//     this.balance = balance;
//   }
//   deposit(amount: number): void {
//     if (amount < 0) throw new Error("Amount must be greater than zero");
//     this.balance += amount;
//   }
//   get getPassword(): number {
//     return this._password;
//   }
//   set changePassword(newPass: number) {
//     this._password = newPass;
//   }
// }
// let myAccount = new Account(1, 1234, "ahmad", 0);
// // console.log(myAccount.getPassword);
// myAccount.changePassword = 1125
// // console.log(myAccount.getPassword);
class Orders {
    makeOrder() {
        Orders._ordersCount += 1;
    }
    get ordersCount() {
        return Orders._ordersCount;
    }
}
Orders._ordersCount = 0;
let order1 = new Orders();
order1.makeOrder();
let order2 = new Orders();
order2.makeOrder();
let order3 = new Orders();
order3.makeOrder();
// console.log(order1.ordersCount);
class Animal {
    move(lengthOfRoad = 0) {
        console.log(`Animal moved ${lengthOfRoad}m.`);
    }
}
class Cat extends Animal {
    bark() {
        console.log("Meoow!");
    }
}
const cat = new Cat();
// cat.bark();
// cat.move(10);
// cat.bark();
class Employee {
    work() {
        // console.log("کارمند در حال انجام وظایف عمومی است.");
    }
}
class Manager extends Employee {
    // بازنویسی متد work
    work() {
        // اول کدهای متد والد را اجرا کن
        super.work();
        // بعد کدهای مخصوص مدیر را اضافه کن
        // console.log("مدیر در حال برنامه‌ریزی و نظارت روی تیم است.");
    }
}
const myManager = new Manager();
myManager.work();
class Account {
    constructor(id, owner, balance) {
        this.id = id;
        this.owner = owner;
        this.balance = balance;
    }
    withdraw(amount) {
        this.balance -= amount + amount * 0.02;
    }
}
exports.Account = Account;
class BadAccount extends Account {
    constructor(id, owner, balance, debt) {
        super(id, owner, balance);
        this.debt = debt;
    }
    withdraw(amount) {
        super.withdraw(amount);
        this.balance -= amount * 0.1;
    }
}
function printeOwner(accountList) {
    for (const account of accountList) {
        console.log(account.owner);
    }
}
const acc1 = new Account(1, "ali", 1000);
const acc2 = new BadAccount(2, "reza", 500, 200);
printeOwner([acc1, acc2]);
