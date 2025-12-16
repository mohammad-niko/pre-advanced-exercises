type Value = boolean | string;

function handle(value: Value) {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else if (typeof value === "boolean") {
    return value ? "yes" : "no";
  }
}

type Moive = {
  readonly id: number;
  name: string;
  mainCher: string;
};

const moive: Moive = {
  id: 10,
  name: "king's man",
  mainCher: "mmad",
};

type success = { data: string };
type error = { error: string };

function isSucess(res: success | error): res is success {
  return "data" in res;
}

function Api(res: success | error): string {
  if (isSucess(res)) return res.data.toLocaleUpperCase();

  return res.error;
}




function wrap<T>(value:T):T {
    return value 
}



const gnric = wrap(2566);

console.log(typeof gnric);














export {};
