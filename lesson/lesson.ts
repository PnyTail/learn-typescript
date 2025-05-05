// Classes

class Person {
    ssn: string;
    firstName: string;
    lastName: string;

    constructor(ssn: string, firstName: string, lastName: string) {
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName(): string {
        return `calling method: ${this.firstName} ${this.lastName}`;
    }
}

let namhp = new Person("123", "Nam", "Hoang");
console.log(">>> check class: ", namhp.getFullName());