class Human {
    constructor(name, age, height) {
        this.name = name;
        this.age = age;
        this.height = height;
    }    
    toString() {
        return `${this.name}, Aged ${this.age}, H ${this.height}`;
    }
}

class Teacher extends Human {
    constructor(name, age, height, course) {
        super(name, age, height);
        this.course = course;
    }
    toString() {
        return `${super.toString()}, Teaching course ${this.course}`;
    }
}

const human = new Human('Shahar', 89, 180);

console.log(human);
console.log(`Human details: ${human.toString()}`);

const teacher = new Teacher('Hava', 80, 151, 'Ezrachut Alla Yustor');

console.log(`Teacher: ${teacher}`);