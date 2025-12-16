export { };
console.log("vid 116");

class Cat {
    public name: string;

    private age_: number; //khai báo thuộc tính là private thì thêm dấu underscore (_)

    private _id: number = 3;
    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }

    private _color: string = "white";
    public get color(): string {
        return this._color;
    }
    public set color(value: string) {
        this._color = value;
    }

    //setter => setAge
    set age(value: number) {
        this.age_ = value;
    }

    //getter => getAge
    get age() {
        return this.age_;
    }

    constructor(name: string, age: number) {
        this.name = name;
        this.age_ = age;
    }

    makeSound() {
        console.log("meow meow meow...");
    }
}

const myCat = new Cat("meo1", 7);

const getAge = myCat.age; //get
myCat.age = 12; //set