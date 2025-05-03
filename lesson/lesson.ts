const sum = (x: number, y: number) => {
    return x + y;
}

// no error
console.log(">>> check sum = ", sum(1, 2)); // check sum = 3

// error
// console.log(">>> check sum = ", sum(3, '12'));