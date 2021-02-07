// INHERITANCE EX

// 1.
// Create a family of shapes:
// 		Shape
// 		/   \
// 	   /     \
//   Square  Circle
//   /	       \
//  /	        \
// Cube         Sphere

// The program is a drawing software of shapes.
// Each shape has its position on the screen (x and y)

// 2.
// Add method 'draw' to the family which prints the shape details
// Example:
// myCircle.draw(); // Circle (2, 4)
// or
// mySphere.draw(); // Sphere (0,0)

// 3.
// Create circle, cube and square and print them to the console.

// 4.
// Do the same, but now create an array with shapes and print their details using foreach loop.

// 5.
// Add 2 new attributes: color and area.

// 6.
// Each shape should tell its area so add the color and the area to the drawing details.

// 7.
// Add new shape: Triangle.

// 8.
// Add a triangle instance to the array and that should be all.
// It should work as before, but now the triangle details should be printed!

// 9.
// Add Pyramide (Pyramide 'is a' triangle)	

// 10.
// Finaly, create an array containing 2 from each shape.
// Create new function which gets 'type' argument.
// This function will print only the shapes of this type.

class Shape {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    draw() {
        return `(${this.x},${this.y})`;
    }
    static abc(){
        console.log('static abc');
    }
    static numberOfShape(array){
        let counter = 0;
        for(let i of array){
            if(i instanceof Shape){
                counter++;
            }
        }
        return counter;
    } 
    static allAreaArray(array){
        let sum = 0;
        for(let i of array){
            if(i instanceof Square){
                sum += i.area();
            }else if(i instanceof Cube){
                sum += i.area();
            }
        }
        return sum;
    }
}

class Square extends Shape {
    constructor(x, y, side){
        super(x, y);
        this.side = side;
    }
    area() {
        return this.side**2;
    }
    draw() {
        return `Square ${super.draw()}, Side ${this.side}`;
    }
    static clone(mySquare){
        return new Square(mySquare.x,mySquare.y,mySquare.side);
    }
    toString(){
        return `(${this.x},${this.y},${this.side})`
    }
}

class Cube extends Square {
    constructor(x, y, side) {
        super(x, y, side);        
    }
    area() {
        return super.area() * this.side;
    }
    draw() {
        return `Cube ${super.draw()}`;
    }
}

const s = new Shape(0, 0);
console.log(s);

const ribua = new Square(10, 10, 10);
console.log(ribua);

console.log(ribua instanceof Square);

const kubiya = new Cube(12, 20, 10);

console.log(kubiya);

console.log(`Square area is ${ribua.area()}`);
console.log(`Kubiya area is ${kubiya.area()}`);

console.log(`Ribua is drawing itself: ${ribua.draw()}`);
console.log(`Cube is drawing itself: ${kubiya.draw()}`);

Shape.abc();
// ribua.abc();
Square.abc();

// 1- Instantiate few objects.
const mykubiya =[
    new Cube(12, 20, 10),
    new Cube(2, 2, 5),
    new Cube(17, 10, 7)
];

// 2- Print the number of shape instances
console.log(Shape.numberOfShape(mykubiya)); 

//      (No outer data is allowed, meaning - use only the shapes code)
// 3- Enable this:
//     Square. clone(mySquare) // returns a new square like the the passed one
const mySquare = new Square (2,4,5);
const newSquare = Square. clone(mySquare);
console.log(`copy squre ${newSquare} original ${mySquare}`);

console.log(mykubiya[0].area());
console.log(mykubiya[1].area());
console.log(mykubiya[2].area());
console.log(Shape.allAreaArray(mykubiya)); 
// console.log(`${newSquare.toString()}`);