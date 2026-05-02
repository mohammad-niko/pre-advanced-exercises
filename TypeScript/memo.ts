function memoize<Input, Result>(fn: (input: Input) => Result) {
  const cacheMemory = new Map<Input, Result>();

  return function (input: Input): Result {
    if (cacheMemory.has(input)) return cacheMemory.get(input)!;
    else {
      const result = fn(input);
      cacheMemory.set(input, result);
      console.log(Array.from(cacheMemory.entries()));
      return result;
    }
  };
}
function add(a: number, b: number): number {
  return a + b;
}

const memoizedAdd = memoize((a: number) => memoize((b: number) => a + b));

console.log("return: " + memoizedAdd(5)(10));
console.log("return: " + memoizedAdd(12)(20));
console.log("return: " + memoizedAdd(2)(12));
// console.log("return: " + memoizedAdd(5)(10));
console.log("return: " + memoizedAdd(12)(21));
console.log("return: " + memoizedAdd(5)(11));
console.log("return: " + memoizedAdd(6)(10));
console.log("return: " + memoizedAdd(6)(20));
console.log("return: " + memoizedAdd(6)(30));
console.log("return: " + memoizedAdd(6)(30));
