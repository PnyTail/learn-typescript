// Void Type

// bình thường hàm sẽ trả về giá trị nào đó, nhưng có những hàm không cần trả về giá trị nào cả
const sum = (a: number, b: number): number => {
    return a + b;
}

// ví dụ như hàm console.log, hàm này không cần trả về giá trị nào cả, chỉ cần thực hiện hành động là được
// void => ko trả về giá trị nào cả
// không ghi void cũng được, nhưng ghi vào sẽ giúp code tường minh hơn
const handleLog = (message: string): void => {
    console.log(">>> message: ", message);
}