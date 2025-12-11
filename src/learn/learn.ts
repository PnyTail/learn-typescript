export { };
// vid 101

// tuple

type TTuple = [string, number, boolean?]; // quy định 3 phần tử, ? là optional

/**
 * chỉ dùng tuple khi muốn giới hạn số phần tử cho mảng => tiết kiệm bộ nhớ
 * quy định kiểu dữ liệu phải lưu vào
 * có thể dùng optional (?) để tuỳ chọn phần tử đó
 * 
 */

const test = ["Nam", 15, true];

const test1: TTuple = ["Hoang", 87, false];
const test2: [string, number, boolean] = ["Hoang", 87, false];
const test3: TTuple = ["Hoang", 124];