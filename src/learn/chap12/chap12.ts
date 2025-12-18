export { };
console.log("vid 119");

interface IAnimal {
    makeSound(): void;
}

class Dog implements IAnimal {
    makeSound() {
        console.log("cho sua go go");
    }
}

class Cat implements IAnimal {
    makeSound(): void {
        console.log("meo keu meow meow");
    }
}

class Pig implements IAnimal {
    makeSound(): void {
        console.log("lợn kêu ủn ỉn");
    }
}

const dog1 = new Dog();
const meo1 = new Cat();
const heo1 = new Pig();

const arr1: string[] = ["a", "x", "r"];
const arr2: number[] = [2, 12, 76];

const zoo: IAnimal[] = [dog1, meo1, heo1]; //tính đa hình

zoo.forEach((animal, index) => {
    animal.makeSound();
})