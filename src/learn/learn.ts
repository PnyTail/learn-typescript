export { };
// vid 94

//object type

// optional
const student1: {
    name: string;
    id: number;
    phone?: number
} = {
    name: "Nam",
    id: 123
}

const student2: {
    name: string;
    id: number;
    phone?: number
} = {
    name: "Hoang",
    id: 456,
    phone: 4313901
}

const person: {
    name: string;
    age: number;
    address: string;
    isVip: boolean;
} = {
    name: "Nam Hoang",
    age: 19,
    address: "Viet Nam",
    isVip: true
}

const printInfo = (person: {
    name: string;
    age: number;
    address: string;
    isVip: boolean;
}) => {
    console.log("your name's : ", person.isVip);
}

printInfo(person);