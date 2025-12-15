export { };
console.log("vid 114");

class Person {
    name: string;
    age: number;

    // hàm tạo
    constructor();
    constructor(name: string, age: number);

    constructor(name?: string, age?: number) {
        this.name = name ?? "unknown name";
        this.age = age ?? 1;
    }
}

const person1 = new Person("Nam-Hoang", 19);
console.log(`my name is: ${person1.name} and age: ${person1.age}`);

console.log("=================");
const person2 = new Person();
console.log(`my name 2 is: ${person2.name} and age 2: ${person2.age}`);