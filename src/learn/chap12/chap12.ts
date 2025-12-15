export { };
console.log("vid 113");

//
class SinhVien {
    //thuộc tính (đặc miêu) - đặc điểm miêu tả
    name: string | undefined;
    id: number | undefined;

    //hành vi
    sleep() {
        console.log(`sinh viên đi ngủ: , ${this.name}, và id: ${this.id}`);
    }
}

//object (clone => chi tiết)
const sv1 = new SinhVien();
sv1.name = "Nam";
sv1.id = 124;
sv1.sleep();

console.log("===============");

const sv2 = new SinhVien();
sv2.name = "Hoang";
sv2.id = 122;
sv2.sleep();