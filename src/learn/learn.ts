export { };
// vid 99

//null & undefined

type TName = string | null;

let name: TName = null;

const printName = (myName: TName) => {
    myName?.toUpperCase(); // optional chaining (?.)
    (myName!).toLowerCase(); // non-null (!)
    if (myName) myName.toUpperCase(); // hoặc đơn giản là check bằng if
    console.log("name: ", myName);
}