class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    getArea() {
        return `Площадь: ${this.width * this.height}`;
    }

    getPerimeter() {
        return `Периметр: ${2 * (this.width + this.height)}`;
    }
}
const rectangle1 = new Rectangle(39, 190);
const rectangle2 = new Rectangle(4, 12);
const rectangle3 = new Rectangle(50, 50);


console.log(rectangle1.getArea());  // Площадь: 7410
console.log(rectangle1.getPerimeter());  // Периметр: 458

console.log(rectangle2.getArea());  // Площадь: 48
console.log(rectangle2.getPerimeter());  // Периметр: 32

console.log(rectangle3.getArea());  // Площадь: 2500
console.log(rectangle3.getPerimeter());  // Периметр: 200
