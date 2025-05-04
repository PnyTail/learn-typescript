// Optional Parameters

const sum = (a: number, b: number, c?: number) => {
    if (c) return a + b + c;
    return a + b;
}

console.log(">>> check sum: ", sum(1, 2), sum(1, 2, 3));