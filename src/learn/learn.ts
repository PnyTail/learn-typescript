export { };
// vid 103

// interface

interface IPerson {
    name: string;
    age: number;
    address?: string; //optional
    readonly language: string;
    sayHi: () => void;
}

const user: IPerson = {
    name: "Nam",
    age: 17,
    language: "vn",
    sayHi: () => console.log("I'm user")
}

// user.language = "en"; //lỗi, chỉ đọc, không thể sửa

interface Animal {
    name: string;
}

interface Dog extends Animal {
    breed: string;
}

const myDog: Dog = {
    name: "Buddy",
    breed: "Golden Retriever",
}
