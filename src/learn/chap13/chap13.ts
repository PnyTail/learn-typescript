export { };
console.log("vid 126");

function merge<T, U>(a: T, b: U) {
    return [a, b];
}

const result1 = merge<string, number>("vip", 42);
const result2 = merge<string, string>("bla", "vla");
const result3 = merge<number, boolean>(12, false);