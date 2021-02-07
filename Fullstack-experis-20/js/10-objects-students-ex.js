//Ex
//1- Create array of 5 students
//   {id, name, courses, avg}
//2- For each student - print her details
//   ID: X, Name: X, Courses: X, Average: X
//3- Give 10 pts bonus for each student below avg 80

const coral = {
    id: 1,
    name: 'Coral',
    courses: ['JS', 'Node'],
    avg: 87
}

const galit = {
    id: 2,
    name: 'Galit',
    courses: ['JS', 'Node'],
    avg: 85
}

const nitay = {
    id: 3,
    name: 'Nitay',
    courses: ['JS', 'Node', 'Angular'],
    avg: 82
}

const sahar = {
    id: 4,
    name: 'Sahar',
    courses: ['JS', 'Node', 'React'],
    avg: 77
}

const racheli = {
    id: 5,
    name: 'Racheli',
    courses: ['Office', 'HR'],
    avg: 100
}

const students = [sahar, coral, nitay, racheli, galit];

coral.avg++;

console.log(students[1].avg);//87 or 88?