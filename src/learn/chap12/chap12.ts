export { };
console.log("vid 118");

class Person {
    gender: string | undefined;
}

class NhanVien {
    id: number;
    name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
}

class LapTrinhVien extends NhanVien {
    skill: string;

    constructor(skill: string, id: number, name: string) {
        super(id, name); //thực thi hàm tạo của cha
        this.skill = skill;
    }
}

const dev1 = new LapTrinhVien("typescript", 21, "Nam");
console.log("======================");

interface IAnimal {
    makeSound(): void;
}

interface IFlyable {
    doFly(): void;
}

// đa kế thừa
class Bird implements IAnimal, IFlyable {
    name: string | undefined;

    makeSound() {
        console.log("chim keu chip chip");
    }

    doFly() {
        console.log("chim bay");
    }
}

const chim1 = new Bird();
chim1.makeSound();
chim1.doFly();