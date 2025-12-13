export { };
console.log("vid 106");
//vid 106

const BtnElement = document.getElementById("myBtn");
const inputElement = document.getElementById("name") as HTMLInputElement; //ép kiểu dùng từ "as", hoặc dùng generic <>

BtnElement?.addEventListener("click", () => {
    alert(inputElement!.value);
})
