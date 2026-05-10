

class Car {
  model: string;
  year: number;
  price: number;

  constructor(model: string, year: number, price: number) {
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
  manufactureDate: Date;
  price: number;
  readonly id: string;
  quantity: number;
  expireDate?: Date | undefined;
  isPrime?: boolean | undefined;

  constructor(
    id: string,
    price: number,
    quantity: number,
    manufactureDate: Date,
    expireDate?: Date | undefined,
    isPrime?: boolean | undefined,
  ) {
    this.id = id;
    this.price = price;
    this.quantity = quantity;
    this.manufactureDate = manufactureDate;
    this.expireDate = expireDate;
    this.isPrime = isPrime;
  }

  buy(amount: number = 5): void {
    this.quantity = (this.quantity ?? 0) + amount;
  }

  sell(amount: number = 5): void {
    if (this.quantity >= amount) {
      this.quantity -= amount;
    } else {
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
  private static _ordersCount: number = 0;
  
  makeOrder(): void {
    Orders._ordersCount += 1;
  }

  get ordersCount() {
    return Orders._ordersCount;
  }
}

let order1 = new Orders();
order1.makeOrder();

let order2 = new Orders();
order2.makeOrder();

let order3 = new Orders();
order3.makeOrder();

// console.log(order1.ordersCount);



class Animal {
  move(lengthOfRoad: number = 0) {
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
 override work() {
    // اول کدهای متد والد را اجرا کن
    super.work(); 
    
    // بعد کدهای مخصوص مدیر را اضافه کن
    // console.log("مدیر در حال برنامه‌ریزی و نظارت روی تیم است.");
  }
}

const myManager = new Manager();
myManager.work();




export class Account {
  id: number;
  owner: string;
  balance: number;
  
  constructor(id: number, owner: string, balance: number) {
    this.id = id;
    this.owner = owner;
    this.balance = balance;
  }
  
  withdraw(amount: number) {
    this.balance -= amount + amount * 0.02;
  }
}

class BadAccount extends Account {
debt:number;

constructor(id:number,owner:string,balance:number,debt:number){
  super(id,owner,balance);
  this.debt = debt
}

override withdraw(amount: number): void {
  super.withdraw(amount);

  this.balance -= amount * 0.1;

}
}

function printeOwner(accountList:Account[]) {
  
  for(const account of accountList){
    console.log(account.owner);
  }
  
}

const acc1 = new Account(1, "ali", 1000);
const acc2 = new BadAccount(2, "reza", 500, 200);

printeOwner([acc1,acc2]);
