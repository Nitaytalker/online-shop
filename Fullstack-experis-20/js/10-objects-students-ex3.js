//Ex
//1- Create array of 5 students
//   {id, name, courses, avg}
//2- For each student - print her details
//   ID: X, Name: X, Courses: X, Average: X
//3- Give 10 pts bonus for each student below avg 80

const students = [{
    id: 4,
    name: 'Sahar',
    courses: ['JS', 'Node', 'React'],
    avg: 77,
    printDetails() {
        console.log(`ID: ${this.id}, Name: ${this.name}, Courses: ${this.courses}, Average: ${this.avg}`);
    }
}, {
    id: 1,
    name: 'Coral',
    courses: ['JS', 'Node'],
    avg: 87,
    printDetails() {
        console.log(`ID: ${this.id}, Name: ${this.name}, Courses: ${this.courses}, Average: ${this.avg}`);
    }
}, {
    id: 3,
    name: 'Nitay',
    courses: ['JS', 'Node', 'Angular'],
    avg: 82,
    printDetails() {
        console.log(`ID: ${this.id}, Name: ${this.name}, Courses: ${this.courses}, Average: ${this.avg}`);
    }
}, {
    id: 5,
    name: 'Racheli',
    courses: ['Office', 'HR'],
    avg: 100,
    printDetails() {
        console.log(`ID: ${this.id}, Name: ${this.name}, Courses: ${this.courses}, Average: ${this.avg}`);
    }
}, {
    id: 2,
    name: 'Galit',
    courses: ['JS', 'Node'],
    avg: 85,
    printDetails() {
        console.log(`ID: ${this.id}, Name: ${this.name}, Courses: ${this.courses}, Average: ${this.avg}`);
    }
}];

//Ex
//1- Create array of 5 students
//   {id, name, courses, avg}
//2- For each student - print her details
//   ID: X, Name: X, Courses: X, Average: X
//3- Give 10 pts bonus for each student below avg 80


function printDetails(student) {
    console.log(`ID: ${student.id}, Name: ${student.name}, Courses: ${student.courses}, Average: ${student.avg}`);
}

for(const student of students) {
    // printDetails(student);
    student.printDetails();
}