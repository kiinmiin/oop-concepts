class Shape {
    constructor(color) {
        this.color = color;
    }
    setColor(color) {
        this.color = color
    }
    getColor() {
        return this.color
    }
    getArea() {
        return this.area
    }   
}

class Circle extends Shape {
    constructor(color, radius) {
        super(color);
        this.radius = radius;
    }
    getArea() {
        return Math.PI * (this.radius ** 2);
    }
    print() {
        return `Circle (r: ${this.radius}, color: ${this.color})`
    }   
}

class Square extends Shape {
    constructor(color, side) {
        super(color)
        this.side = side
    }
    getArea() {
        return this.side * this.side
    }
    print() {
        return `Square (a: ${this.side}, color: ${this.color})`
    }   
}

class Rectangle extends Shape {
    constructor(color, length, width) {
        super(color);
        this.length = length
        this.width = width
    }
    getArea() {
        return this.length * this.width
    }
    print() {
        return `Rectangle (l: ${this.length}, w: ${this.width}, color: ${this.color})`
    }   
}

class Paint {
    constructor() {
        this.shapes = []; 
    }
    addShape(shape) {
        this.shapes.push(shape);
    }
    getShapes() {
        return this.shapes
    }
    calculateTotalArea() {
        return this.shapes.reduce((total, shape) => total + shape.getArea(), 0);
    }
    getCirlces() {
        return this.shapes.filter(shape => shape instanceof Circle);
    }
    getSquares() {
        return this.shapes.filter(shape => shape instanceof Square);
    }
    getRectangles() {
        return this.shapes.filter(shape => shape instanceof Rectangle);
    }       
} 

// Ringi näide
const ring1 = new Circle("yellow", 8);
console.log(ring1.print()) // Circle (r: 8, color: yellow)
console.log(`Area: ${ring1.getArea()}`) // Area: 201.06.....

ring1.setColor("red");
console.log(ring1.print()); // Circle (r: 8, color: red)

// Ruudu näide
const ruut1 = new Square("blue", 5);
console.log(ruut1.print())
console.log(`Area: ${ruut1.getArea()}`)

// Ristküliku näide
const ristkülik1 = new Rectangle("beige", 4, 6);
console.log(ristkülik1.print())
console.log(`Area: ${ristkülik1.getArea()}`)

// Paint näide
const paint1 = new Paint()
paint1.addShape(ring1)
paint1.addShape(ruut1)
paint1.addShape(ristkülik1)

console.log(paint1.getShapes())
console.log(`Total area: ${paint1.calculateTotalArea()}`)
console.log(paint1.getCirlces())
console.log(paint1.getSquares())
console.log(paint1.getRectangles())