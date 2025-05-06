// Interfaces: định nghĩa cấu trúc dữ liệu

interface IPerson {
    readonly firstName: string; // readonly là không thể thay đổi giá trị của biến này
    lastName: string;
    address?: string; // ? là optional parameter, có thể có hoặc không
}

// dài hơn
// function getFullName(
//     person: {
//         firstName: string;
//         lastName: string;
//     }
// ) {
//     return `${person.firstName} ${person.lastName}`;
// }

// ngắn hơn
function getFullName(person: IPerson) {
    return `${person.firstName} ${person.lastName}`;
}

let person40 = {
    firstName: "Nam",
    lastName: "Hoang",
    address: "Ha noi",
};

// console.log(">>> check full name: ", getFullName(person40)); // Nam Hoang

