export { };
// vid 100

// Literal types, Enum types

type TRole = string | number;

type TSuperRole = "USER" | "SUPER_ADMIN" | "ADMIN"; //literal types
// type TSuperRole = "USER" | "SUPER_ADMIN" | "ADMIN" | string; // vấn đề của literal type là có thể bị sửa => thêm type khác vào
//bị người khác thêm string vào type

const user: TRole = "USER";
const admin: TRole = "ADMIN";
const administrator: TRole = 1;

const otherUser: TSuperRole = "ADMIN";

enum RoleEnum {
    USER, //0
    SUPER_ADMIN = 7, //1
    ADMIN //2
}

//nếu gán số thì sau đó nó sẽ tự tăng dần lên

enum RoleEnum2 {
    USER = "USER",
    SUPER_ADMIN = "SUPER_ADMIN",
    ADMIN = "ADMIN"
} //có thể khởi tạo giá trị cho enum

const myRole1: RoleEnum = RoleEnum.USER;
const myRole2: RoleEnum = RoleEnum.ADMIN;
const myRole3: RoleEnum = RoleEnum.SUPER_ADMIN;
console.log(">> check enum myRole1: ", myRole1); //0
console.log(">> check enum myRole2: ", myRole2); //2
console.log(">> check enum myRole3: ", myRole3);
console.log("===================");

const role1: RoleEnum2 = RoleEnum2.SUPER_ADMIN;
const role2: RoleEnum2 = RoleEnum2.ADMIN;
console.log(">>> check role1 enum 2: ", role1);
console.log(">>> check role2 enum 2: ", role2);