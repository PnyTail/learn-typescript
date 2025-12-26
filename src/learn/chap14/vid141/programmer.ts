import NhanVien from "./employee";

console.log("lap trinh vien");

export default class LapTrinhVien extends NhanVien {
    public age: number;

    constructor(name: string, id: number, salary: number, age: number) {
        super(name, id, salary);
        this.age = age;
    }

    printInfo() {
        console.log("protected salary: ", this.salary);
    }
}