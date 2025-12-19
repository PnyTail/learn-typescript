export { };
console.log("vid 127");

type MyArrString = string[];

type MyArrNumber = number[];

type MyArr<T> = T[];

type Wrapper<T> = {
    data: T
}

const ex1: MyArr<number> = [12, 5, 64];
const ex2: MyArr<string> = ["ad", "sp"];

const ex3: Wrapper<number> = {
    data: 43
}

const ex4: Wrapper<string> = {
    data: "top"
}