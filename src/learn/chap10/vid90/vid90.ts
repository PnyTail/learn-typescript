export { };

// let name: any = "Nam";

// name = 25;

// name = true;

let name1: unknown = "Nam";
// name1.toUpperCase(); //hiện cảnh báo, nó sẽ check type trước khi thao tác với biến đó
if (typeof (name1) === "string") { //phải check điều kiện if
    name1.toUpperCase();
}

//unknown nhẹ hơn any

let name2: any = 25;
name2.toUpperCase(); // không báo lỗi

let name3: string = "Nam";
name3.toUpperCase(); //code chuẩn nên hiển nhiên không có lỗi