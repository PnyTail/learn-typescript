// Function types

// gán type cho giá trị trả về của hàm, tuy nhiên không nhất thiết phải làm như vậy
const sum = (a: number, b: number): number => {
    return a + b;
}

console.log(sum(1, 2)); // 3