export { };
console.log("vid 115");

class Animal {
    //fields
    public name: string;
    private id: number;

    constructor(name: string, id: number) {
        this.name = name;
        this.id = id;
    }

    //method
    makeSound() {
        console.log("é é é with id: ", this.id);
    }
}

const myDog = new Animal("dog1", 151);
console.log(`animal name: ${myDog.name}`);
myDog.makeSound();