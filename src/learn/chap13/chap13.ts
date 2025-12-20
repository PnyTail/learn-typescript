export { };
console.log("vid 131");

//nếu không truyền type generics thì mặc định là kiểu string
function printValue<T = string>(value: T) {
    return value;
}

const x = printValue("abc");

//gán giá trị mặc định nếu không truyền generics type
interface ITest<T = string> {
    data: T
}

interface ITest2<T = string | number> {
    data: T
}

const y: ITest = {
    // data: 123 // lỗi
    data: "hihi" //ok
}

const z: ITest<number> = {
    data: 543
}
