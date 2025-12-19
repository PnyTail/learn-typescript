export { };
console.log("vid 128");

class NumberBox {
    content: number;

    constructor(content: number) {
        this.content = content;
    }
}

class StringBox {
    content: string;

    constructor(content: string) {
        this.content = content;
    }
}

// viết tổng quan hơn thay vì phải viết từng type một
class MagicBox<T> {
    content: T;

    constructor(content: T) {
        this.content = content;
    }
}

const sample1 = new MagicBox<number>(42);
sample1.content; //number

const sample2 = new MagicBox<string>("hoho");
sample2.content; //string