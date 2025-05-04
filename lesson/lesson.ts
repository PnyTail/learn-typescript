// Union Type: gán nhiều hơn 1 type cho 1 biến

function addNumberOrString(a: number | string | boolean, b: number | string) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    if (typeof a === 'string' && typeof b === 'string') {
        return a.concat(b);
    }
    throw new Error('Parameters must be numbers or strings');
}

// lỗi khi run code
// lỗi khi compile code
console.log(">>> check : ", addNumberOrString(true, 2));