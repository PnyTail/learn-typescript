export { };
// vid 95

//type Aliases

type TStudent = {
    id: string;
    name: string;
    address: string;
    age: number;
}

const student1: TStudent = {
    id: "sv1",
    name: "Nam",
    address: "HCM",
    age: 19
}

const student2: TStudent = {
    id: "sv2",
    name: "Hoang",
    address: "HN",
    age: 18
}

const printInfo = (student: TStudent) => {
    console.log("student name : ", student.name);
}

printInfo(student1);
printInfo(student2);