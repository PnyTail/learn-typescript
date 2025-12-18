export { };
console.log("lab 8");

interface IUser {
    printUserInfo(user: User): void;
}

type TRole = "Student" | "Teacher";

class User {
    public name: string;
    private _email: string;
    protected role: TRole;

    constructor(name: string, email: string, role?: TRole) {
        this.name = name;
        this._email = email;
        this.role = role ?? "Student";
    }

    //getter
    get email() {
        return this._email;
    }

    //setter
    set email(value: string) {
        this._email = value;
    }

    // get _role(){
    //     return this.role;
    // }

    printUserInfo() {
        console.log(`thông tin của người dùng ${this.name}: email: ${this._email} và role: ${this.role}`);
    }
}

//it is possible to use extends and implements at the same time, but extends must stand before implements
class Teacher extends User implements IUser {
    private courses: string[] = [];

    constructor(name: string, email: string, role: TRole) {
        super(name, email, role);
    }

    addCourse(courseName: string) {
        this.courses?.push(courseName);
    }

    printUserInfo(): void {
        console.log(`[${this.role}] ${this.name} - Course Taught: ${this.courses?.join(" ,")}`)
    }
}

class Student extends User implements IUser {
    private enrollCourses: string[] = [];

    constructor(name: string, email: string) {
        super(name, email);
    }

    enroll(courseName: string) {
        this.enrollCourses?.push(courseName);
    }

    printUserInfo(): void {
        console.log(`[${this.role}] ${this.name} - Enrolled Courses: ${this.enrollCourses?.join(", ")}`)
    }
}

const person1 = new Student("Nam Hoang", "namhoang@gmail.com");
person1.enroll("Learn JavaScript");
person1.enroll("Learn Typescript");

const person2 = new Teacher("hoidanit", "hoidanit@gmail.com", "Teacher");
person2.addCourse("React");
person2.addCourse("NodeJs");

person1.printUserInfo();
person2.printUserInfo();