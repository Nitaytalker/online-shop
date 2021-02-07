function student(id, name, courses, avg) {
    return {
        id: id,
        name: name,
        courses: courses,
        avg: avg,
        printDetails() {
            console.log(`ID: ${this.id}, Name: ${this.name}, Courses: ${this.courses}, Average: ${this.avg}`);
        }
    }
}

// {
//     id: 1,
//     name: 'Coral',
//     courses: ['JS', 'Node'],
//     avg: 87,
// }
const coral = student(1, 'Coral', ['JS', 'Node'], 87),
      neta = student(2, 'Neta', ['JS', 'React', 'Node'], 95);

coral.printDetails();
neta.printDetails();

console.log(coral, neta);

//We are still having for each object another printDetails function instead of 1 for all of the students
