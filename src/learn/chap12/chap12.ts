export { };
console.log("vid 112");

// class: định nghĩa tổng quát, mô tả chung chung

class Lion {
    // mô tả đặc điểm
    name: string | undefined;
    color: string | undefined;


    // mô tả hành vi
    sleep() {
        console.log("Lion is sleeping... : ", this.name);
    }
}

// mô tả cụ thể từng con Lion => object
// clone: new

const sutu1 = new Lion();
sutu1.color = "yellow";
sutu1.name = "con-su-tu";
sutu1.sleep();
console.log("============");
const sutu2 = new Lion();
sutu2.color = "orange";
sutu2.name = "con-heo";
sutu2.sleep();