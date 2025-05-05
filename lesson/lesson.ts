// Access Modifiers

class Employee {
    public empCode: string;
    private empName: string;
    //protected empAddress: string; // protected: only accessible within class and subclasses

    constructor(empCode: string, empName: string) {
        this.empCode = empCode;
        this.empName = empName;
    }
}
let emp = new Employee("adsfg", "egfb");
emp.empCode = "123";
// emp.empName = "Nam Hoang"; //error: Property 'empName' is private and only accessible within class 'Employee'.

console.log(">>> check emp: ", emp);