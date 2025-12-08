export { };
// vid 93

//union type
let username: string | number = "nam1@gmail.com"; //email

username = 123456; //id (cccd)

username = "123435467"; //phone number

const printUsername = (username: string | number) => {
    if (typeof (username) === "string") { //check điều kiện để typescript gợi ý code, và không báo lỗi
        console.log("my username: ", username.toUpperCase());
    }
}

printUsername("Nam Hoang");