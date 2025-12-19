export { };
console.log("vid 125");

function testNumber(value: number) {
    return value;
}

function testString(value: string) {
    return value;
}

function testGeneric<T>(value: T) {
    return value;
}

const a = testGeneric<string>("bla bla");
const b = testGeneric<number>(12);

function getFirstElementInArray<T>(arr: T[]) {
    return arr[0];
}

// viết dưới dạng arrow function
const getFirstElementInArray2 = <T>(arr: T[]) => {
    return arr[0];
}

const c = getFirstElementInArray<number>([1, 3, 56]);
const d = getFirstElementInArray<string>(["aho", "123", "hihi"]);