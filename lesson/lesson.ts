// Type Annotations - Keyword Type

let count: number = 1; // khai báo type cho biến count là number

// count = "name"; // Error: Type 'string' is not assignable to type 'number'

// console.log(">>> check count: ", count);

let names: string[] = ['nam', 'hoang', 'vainho']; // array chỉ chứa string
// names.push(54); // error
names.push("hihi"); // ok

console.log(">>> check names: ", names);