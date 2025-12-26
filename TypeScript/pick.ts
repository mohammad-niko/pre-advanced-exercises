function last<T>(arr: T[]): T {
  return arr[arr.length - 1];
}

const n = last([1, 2, 3, 4, 5, 6]);
const m = last(["mmad", "ali", "mmadAli"]);
const l = last([true, false, true, true]);

// console.log(n+100);
// console.log(m+"ohammad");
// console.log(l);

type Product = {
  title: string;
  price: number;
  instock: boolean;
};

type ProductPreview = Pick<Product, "title" | "price">;

const movie: ProductPreview = {
  title: "king",
  price: 100,
};

type Status = "pending" | "paid" | "cancelled";

type StatusMessage = Record<Status, string>;

const message: StatusMessage = {
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

type User = ReturnType<typeof getUser>;

const user: User = {
  id: 1,
  name: "Ali",
  isAdmin: false,
};

console.log(user);

console.log(movie);
console.log(message.paid);

type MyReadonly<T> = {
  readonly [k in keyof T]?: T[k];
};

type Products = { title: string; price: number };
type ReadonlyProduct = MyReadonly<Products>;

const mmad: ReadonlyProduct = {
  title: "ahmad",
  price: 100,
};

function printId<T extends { id: number }>(value: T) {
  console.log(value.id);
}

printId({ id: 1, name: "Ali" });

function printName<T extends {name:string}>(value:T){
  console.log({name:"mohmamd",age:30});
  console.log({age:30});
}

printName({name:"ali",id:5})
export  {}