export { };
console.log("vid 117");

class Parent {
    //fields
    gold: number | undefined;
    money: number | undefined;

    //methods
    shareAHouse() {
        console.log("share a house from parent");
    }
}

class Child extends Parent {
    name: string | undefined;

    shareAHouse() {
        super.shareAHouse(); //super tượng trưng cho class cha
        console.log("share a house from child");
    }
}

const child1 = new Child();
child1.shareAHouse();

//1. cha - con

//Animal - Dog
//Person - Student
//Employee - Developer

class Animal { }
class Dog extends Animal { }