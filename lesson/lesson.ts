// Object Type

// let person: object;
// let person: {}; // đây vẫn là kiểu object

// person = { name: "Nam" };

// không thể khai báo type cho thuộc tính của object
// let pro = {
//     name: "Nam", // string
//     age: 18, // number
// };

/*cách 1*/
// let pro1: {
//     name: string,
//     age: number
// };

// pro1 = {
//     name: "Nam", // string
//     age: 18, // number
// };

/*cách 2*/
let pro1: {
    name: string,
    age: number
} = {
    name: "Nam", // string
    age: 18, // number
};

// error
// pro1.address = "Hà Nội"; // không thể thêm thuộc tính mới vào object đã khai báo type

