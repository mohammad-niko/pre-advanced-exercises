const data: string = "welcom to typescript world";

function welcom(data: string): string {
  return data;
}

const result: string = welcom(data);
console.log(result);

export function greeting(name: string): string {
  return "Hello " + name + "!";
}

// const items: any[] = [1, 3, "jelo", true];

export function maximum(items: number[]): number {
  return Math.max(...items);
}

// maximum([1, 2, 3, 4, 5, 6]) // 6
// maximum([20, 12, 15, 23]) // 23

console.log(maximum([1, 2, 3, 4, 5, 6]));
console.log(maximum([20, 12, 15, 23]));

export function and(items: boolean[]): boolean {
  return items.every((item) => item === true);
}

// and([true, true, false]) // false
// and([true, true]) // true
console.log(and([true, true, false]));
console.log(and([true, true]));

export function removeDuplicates(items: string[]): string[] {
  const unique = [...new Set(items)];
  return unique;
}

// removeDuplicates(["foo", "bar", "bar"]) // ["foo", "bar"]
// removeDuplicates(["a", "a", "a", "b", "b"]) // ["a", "b"]

console.log(removeDuplicates(["foo", "bar", "bar"]));
console.log(removeDuplicates(["a", "a", "a", "b", "b"]));
