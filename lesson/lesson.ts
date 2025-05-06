// Getters and Setters

class Person {
    private _age: number;
    public firstName: string;
    public lastName: string;

    constructor(_age: number, firstName: string, lastName: string) {
        this._age = _age;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    // getter
    get age() {
        return this._age;
    }

    // setter
    set age(age: number) {
        if (age < 0 || age > 120) {
            throw Error("Invalid age value");
        }
        this._age = age;
    }
}
let person = new Person(25, "Nam", "Hoang");
// person.currentAge = 14;
let checkAge = person.age; // getter


person.age = 51; // setter
// person.setAge(74);
console.log(">>> check age: ", person);