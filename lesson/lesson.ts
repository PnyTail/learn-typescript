// Default Parameters

const sum = (a: number, b: number, c = false) => {
    if (c === false) return a + b;
    if (c) return a - b;
}

console.log(">>> check sum: ", sum(1, 2), sum(1, 2, true));