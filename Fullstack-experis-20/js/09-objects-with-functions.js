//Simple plain object is just a key:value pairs inside { }

const shahar = {
    id: 1221,
    name: 'shahar',
    age: 27,
    courses: ['Node', 'React'],
    avg_score: 87,
    printDetails() {
        console.log(`Student Details:\n----------------\nID\t${this.id}\nName\t${this.name}\nAge\t${this.age}\nAVG\t${this.avg_score}\nCourses\t${this.courses}`);
    },
    corona() {
        this.age--;
    },
    addCourse(course) {
        this.courses.push(course);
    }
};


//console.log(`Student Details:\n----------------\nID\t${shahar.id}\nName\t${shahar.name}\nAVG\t${shahar.avg_score}\nCourses\t${shahar.courses}`);
//printStudentDetails(shahar);
shahar.printDetails();

const neta = {
    id: 59502,
    name: 'neta',
    age: 19,
    courses: ['Node', 'React'],
    avg_score: 90,
    printDetails() {
        console.log(`Student Details:\n----------------\nID\t${this.id}\nName\t${this.name}\nAge\t${this.age}\nAVG\t${this.avg_score}\nCourses\t${this.courses}`);
    },
    corona() {
        this.age--;
    },
    addCourse(course) {
        this.courses.push(course);
    }
};


//console.log(`Student Details:\n----------------\nID\t${neta.id}\nName\t${neta.name}\nAVG\t${neta.avg_score}\nCourses\t${neta.courses}`);
//printStudentDetails(neta);
neta.printDetails();

// function printStudentDetails(student) {
//     console.log(`Student Details:\n----------------\nID\t${student.id}\nName\t${student.name}\nAVG\t${student.avg_score}\nCourses\t${student.courses}`);
// }

// function corona(student) {
//     student.age--;
// }

neta.corona();   //age = 18
shahar.corona(); //age = 26

neta.printDetails();
shahar.printDetails();
//context - הקשר
//Inside object functions, 'this' is the object which invoked the function

// function addCourse(student, course) {
//     student.courses.push(course);
// }

neta.addCourse('JS');
shahar.addCourse('Angular');
neta.printDetails();
shahar.printDetails();


// Make this code work:
calculator.add(1);
calculator.add(2);
calculator.sum(); //3
calculator.mul(10);
calculator.sum(); //30
calculator.div(3);
calculator.sum(); //10

// Bonus:
// Enable this code to work as well:
calculator.add(1).add(2).result(); //3
calculator.mul(10).result(); //30
calculator.div(3).result(); //10