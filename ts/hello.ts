// "dev": "tsc --noEmitOnError hello.ts"
export {};
function greet(person: string, date: Date): string {
  console.log(`Hello ${person}, today is ${date}!`);
  return person;
}

interface PrintName {
  name: string;
  last?: string;
}

function printName(obj: PrintName): string {
  return obj.name + obj?.last;
}
printName({ name: "mmad", last: "nik" });
printName({ name: "ali" });

type ID = number | string;

function printID(id: ID): number | string {
  return typeof id === "string" ? Number(id) : id;
}

printID(552455);

const ali = {
  url: "example.com",
  method: "GET",
} as const;

declare function handleRequest(url: string, method: "GET" | "POST"): void;

// handleRequest(ali.url, ali.method as "GET");
handleRequest(ali.url, ali.method);

enum Status {
  Success,
  Error,
  Loading,
}

function padLeft(padding: number | string | null, input: string | null) {
  if (padding !== null && input !== null) {
    if (typeof padding === "number") {
      return " ".repeat(padding) + input;
    } else {
      return padding;
    }
  }
}

type Circle = { radius?: number };
type Square = { sideLength: number };

function getArea(shape: Circle | Square) {
  if ("radius" in shape && shape.radius) {
    return Math.PI * shape.radius ** 2;
  } else if ("sideLength" in shape) {
    return shape.sideLength ** 2;
  }
}
