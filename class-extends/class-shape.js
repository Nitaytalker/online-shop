// class 1 

class Shape{
    constructor(x,y){
        this.x=x;
        this.y=y;
    }
    toString(){
        return ` (${this.x},${this.y}) `;
    }
}

// class 2
class Circle extends Shape{
    constructor(x,y,color,area ){
        super(x,y);
        this.color =color ;
        this.area=area;
    }
    toString(){
        return ` ${super.toString()} `;
    }
    draw(){
        console.log(`Circle ${super.toString()} `);
    }
}

class Square extends Shape{
    constructor(x,y,color,area ){
        super(x,y);
        this.color =color ;
        this.area=area;
    }
    toString(){
        return `Square ${super.toString()}  `;
    }
    draw(){
        console.log(`Square ${super.toString()} `);
    }
}


//class 3 

class Sphere extends Circle {
    constructor(x,y,color,area ){
        super(x,y,color );
        this.area=area;
    }
    toString(){
        return `Sphere: ${super.toString()} `
    }
    draw(){
        console.log(`mySquare ${super.toString()}`);
    }
}

class Cube extends Square {
    constructor(x,y,color,area ){
        super(x,y,color );
        this.area=area;
    }
    toString(){
        return `Cube: ${super.toString()}  `
    }
    draw(){
        console.log(`${super.toString()}`);
    }
}

const myCircle = new Circle(2,4);
myCircle.draw();

const mySphere = new Sphere(0,0);
mySphere.draw();

const myCube= new Cube(2,6);
console.log(`${myCube}`);

const mySquare = new Square(25,7);
console.log(`${mySquare}`);

const array= [];
array.push(myCircle);
array.push(mySphere);
array.push(myCube);
array.push(mySquare);
console.log(`${array}`);
