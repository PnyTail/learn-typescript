// Abstract Classes

abstract class Employee {
    constructor(private firstName: string, private lastName: string) { }

    abstract getSalary(): number; // Abstract method

    // normal method
    get FullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }

    compensationStatement(): string {
        return `${this.FullName} makes ${this.getSalary()} a month.`;
    }
}

// không thể tạo 1 object từ abstract class, chỉ có thể tạo ra các class con kế thừa từ nó
// => dùng kế thừa để sử dụng abstract class

class FullTimeEmployee extends Employee {
    constructor(firstName: string, lastName: string, private Salary: number) {
        super(firstName, lastName); // dùng super để kế thừa lại cha
    }

    // cần viết lại method này, vì nó được khai báo trong abstract class ở trên chứ chưa được đinh nghĩa
    getSalary(): number {
        return this.Salary;
    }
}

class Contractor extends Employee {
    constructor(firstName: string, lastName: string, private rate: number, private hours: number) {
        super(firstName, lastName); // dùng super để kế thừa lại cha
    }

    getSalary(): number {
        return this.rate * this.hours;
    }
}

const test1 = new FullTimeEmployee("Nam", "Nguyen", 1000);
console.log(">>> check test1: ", test1.getSalary());
