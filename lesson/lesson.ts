// Tuple types

let skills = ['HTML', 31];
skills.push('CSS'); // OK
skills.push(55); // OK

// tuple: dataType, order, size
let skills2: [string, number] = ['Javascript', 38];

let skills3: [boolean, string, number];
skills3 = [true, 'HTML', 25]; // OK

/**
 * - Số phần tử của tuple cần được khai báo trước (cố định)
 * - Type của từng phần tử trong array cần được khai báo trước, và không nhất thiết phải giống nhau
 * - Với tuple, thứ tự của phần tử rất QUAN TRỌNG
 */

// Optional tuple elements, bắt buộc đặt ở cuối
let skills4: [boolean, string, number?] = [true, 'hello']; // OK