// Enum types

// Enum (enumerated : liệt kê, one by one) là 1 nhóm các giá trị hằng số.

// enum API_STATUS {
//     PENDING, FULFILLED, REJECTED
// }

// let a1 = API_STATUS.PENDING; //0
// let a2 = API_STATUS.FULFILLED; //1

// console.log(">>> check a1 = ", a1, " a2 = ", a2);

enum API_STATUS {
    PENDING = "PENDING",
    FULFILLED = "FULFILLED",
    REJECTED = "REJECTED"
}

let a1 = API_STATUS.PENDING; //PENDING
let a2 = API_STATUS.FULFILLED; //FULFILLED

console.log(">>> check a1 = ", a1, " a2 = ", a2);