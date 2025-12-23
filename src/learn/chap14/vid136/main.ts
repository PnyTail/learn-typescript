
// import { Animal } from "./animal"; //import từ module không phải export "default"
import Animal from "./animal"; ////import từ module có export default
import { subtract as phepTru } from "./math";

// dùng "as" để thay cho từ đó khi import

console.log("main");

const subtract = "bựa";

console.log("subtract: 4-2 = ", phepTru(4, 2))

const dongVat1 = new Animal("dog");