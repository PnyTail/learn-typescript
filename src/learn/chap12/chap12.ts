export { };
console.log("vid 120");

abstract class Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    abstract makeSound(): void;

    test() {
        console.log("do a test: ", this.name);
    }
}

class Dog extends Animal {

    makeSound(): void {
        console.log("cho sua go go");
    }
}

const cho1 = new Dog("chó điên");
cho1.test();
cho1.makeSound();