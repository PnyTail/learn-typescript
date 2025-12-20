export { };
console.log("vid 130");

// function logLength1<T>(value: T) {
//     console.log(value.length); //không chắc kiểu T có thuộc tính length
// }

// ràng buộc. kiểu T phải có thuộc tính length
function logLength<T extends { length: number }>(value: T) {
    console.log(value.length);
}

logLength("xinChao");
logLength([1, 2, 4]); //cả 2 phía trên đúng vì có thuộc tính length

// logLength(1234); // lỗi, vì number không có thuộc tính length

//ràng buộc interface
interface IUser {
    id: number;
    name: string;
}

function testInterface<T extends IUser>(value: T) {
    console.log(value)
}

testInterface({ id: 12, name: "hello" }); //ok
testInterface({ id: 12, name: "hello", age: 41 }); //không lỗi vì có đủ, hơn cũng không sao => miễn là thoả mãn TỐI THIỂU
// testInterface({ id: 123 }); //lỗi vì thiếu thuộc tính name => ràng buộc


// ràng buộc class
class Animal {
    move() {
        console.log("moving...");
    }
}

class Dog extends Animal {
    bark() {
        console.log("wolf!");
    }
}

function testClass<T extends Animal>(value: T) {
    console.log(value.move());

    if (value instanceof Dog) {
        value.bark();
    }
}

const a = new Animal();
const b = new Dog();

testClass(a);
testClass(b);

//ràng buộc keyof
function getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}

const user = {
    name: "Kirito",
    age: 18
}

getProperty(user, "age"); //tham số thứ 2 - phải là key của tham số thứ 1 (ở đây là object user)
// getProperty(user, "email"); //lỗi
