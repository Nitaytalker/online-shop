//API
//Application Programming Interface

class Student {
    constructor(id, name, courses, avg) {
        this.id = id;
        this.name = name;
        this.courses = courses;
        this.avg = avg;
    }
    printDetails() {
        console.log(`ID: ${this.id}, Name: ${this.name}, Courses: ${this.courses}, Average: ${this.avg}`);
    }
    bonus(tosefet) {
        this.avg += tosefet;
    }
    addCourse(course) {
        this.courses.push(course);
    }
    removeCourse(course) {
        const courseIndex = this.courses.indexOf(course);
        if(courseIndex > -1) {
            this.courses.splice(courseIndex, 1);
        }
    }
}

const students = [
    new Student(1, 'Coral', ['JS', 'Node'], 87),
    new Student(2, 'Neta', ['JS', 'React', 'Node'], 65),
    new Student(3, 'Ohad', ['JS', 'React'], 75),
    new Student(4, 'Amit', ['JS', 'React'], 65),
    new Student(5, 'Saja', ['JS', 'React'], 100)
];




class College {
    constructor(name, city, students) {
        this.name = name;
        this.city = city;
        this.students = students;
    }
    print() {
        console.log(`College ${this.name}, ${this.city}\n-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|`);
        for(const student of this.students) {
            student.printDetails();
        }
    }
    giveBonusBelowAvg(avg, pts) {
        for(const student of this.students) {
            if(student.avg < 80) {
                student.bonus(pts);
            }
        }
    }
    addStudent(student) {
        if(student instanceof Student) {
            this.students.push(student);
        }
    }
    addStudents(studentArr) {
        for(const student of studentArr) {
            // if(student instanceof Student) {
            //     this.students.push(student);
            // }
            this.addStudent(student);
        }
        //bind will be explained later
        // studentArr.forEach(this.addStudent.bind(this));
    }
    find(studentId) {
        function byId(student) {
            return student.id === studentId;
        }
        
        //find returns the student itself, or undefined
        return this.students.find(byId);
    }
    addCourse(studentId, course) {
        const student = this.find(studentId);

        if(student) student.courses.push(course);
    }    
    setAvg(studentId, avg) {
        const student = this.find(studentId);

        if(student) student.avg = avg;
    }
    addCourses(studentIds, course) {
        for(const student of this.students) {
            if(studentIds.includes(student.id)){
                student.courses.push(course);
            }
        }
    }
}

//Make this code work
const college = new College('Lala College', 'Eilat', students);
college.giveBonusBelowAvg(80, 10); //each student having avg below 80 gets 10 pts bonus
college.addStudent(new Student(34, 'Wawa', ['Quilting'], 59)); //adds new student to college

const studentArr = [
    new Student(87, 'Karin', ['Design', 'Engineering'], 45),
    new Student(9995, 'Yosemiti', ['Beep Beep'], 60),
];

college.addStudents(studentArr); //adds new students to college
college.addCourse(3, 'Node'); //adds to student with id 3 Node course
college.addCourses([4,5, 9995], 'Biology');//adds to students with ids 4 or 5 Node course
college.setAvg(2, 90);//set the average of student with id 2 to 90
college.print();//prints the details of the college and the list of students
