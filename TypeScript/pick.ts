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
export {};
