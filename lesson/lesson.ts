// readonly

class Person {
    readonly birthDate: Date; // Readonly property
    // The readonly modifier makes the property immutable after the constructor has been called.
    // This means that the property can only be assigned a value in the constructor and cannot be changed afterwards.
    // This is useful for properties that should not be changed after the object is created, such as a birth date.

    constructor(birthDate: Date) {
        this.birthDate = birthDate;
    }
}
let person = new Person(new Date(1990, 12, 25));
// person.birthDate = new Date(1991, 12, 25); // Compile error