class Student {
    constructor(id, name, courses, avg) {
        //const this = {};
        this.id = id;
        // this = {id: 1}
        this.name = name;
        // this = {id: 1, name: 'shahar'}
        this.courses = courses;
        // this = {id: 1, name: 'shahar', courses = ['React']}
        this.avg = avg;
        // this = {id: 1, name: 'shahar', courses = ['React'], avg: 80}
        //return this;
    }
    printDetails() {
        console.log(`ID: ${this.id}, Name: ${this.name}, Courses: ${this.courses}, Average: ${this.avg}`);
    }
    bonus(tosefet) {
        this.avg += tosefet;
    }
}

const coral = new Student(1, 'Coral', ['JS', 'Node'], 87),
      neta = new Student(2, 'Neta', ['JS', 'React', 'Node'], 95);

coral.printDetails();
neta.printDetails();

console.log(coral, neta);

console.log('printDetails' in coral);

coral.bonus(10);
coral.printDetails();