// Static Methods and Properties

class Circle {
    static pi: number = 3.14; // Static property
    public test: number = 69;

    static calculateArea(radius: number): number { // Static method
        return this.pi * radius * radius;
    }
}

// console.log(">>> check pi = ", Circle.pi); // Accessing static property
console.log(">>> check area = ", Circle.calculateArea(10)); // Accessing static method