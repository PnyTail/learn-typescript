// Type Aliases

type namHoangType = number | string | boolean | object;

function addNumberOrString(a: namHoangType, b: number | string) {
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
console.log(">>> check : ", addNumberOrString('hahhie', ' bựa'));