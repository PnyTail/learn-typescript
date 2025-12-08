export { };

const sum = (a: number, b: number): number => {
    return a + b;
}

const sayHi = (name: string) => {
    console.log("say hi: ", name);
}

sayHi("Nam Hoang");
const mySum = sum(3, 4);
console.log("my sum = ", mySum);