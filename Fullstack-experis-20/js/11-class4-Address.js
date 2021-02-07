//API
//Application Programming Interface

class Address {
    constructor(city, street, zipCode) {
        this.city = city;
        this.street = street;
        this.zipCode = zipCode;
    }
    getDetails() {
        return `${this.street}, ${this.city}, ${this.zipCode}`;
    }
}

class Student {
    constructor(id, name, courses, avg, address) {
        this.id = id;
        this.name = name;
        this.courses = courses;
        this.avg = avg;
        // this.city = city;
        // this.street = street;
        // this.address = [city, street];
        this.address = address;
    }
    printDetails() {
        console.log(`ID: ${this.id}, Name: ${this.name}, Courses: ${this.courses}, Average: ${this.avg}. Address: ${this.address.getDetails()}`);
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
    setAddress(address) {
        this.address = address;
    }
}

const students = [
    new Student(1, 'Coral', ['JS', 'Node'], 87, new Address('Dimona', 'Tzi Moshe 4', 121212)),
    new Student(2, 'Neta', ['JS', 'React', 'Node'], 65, new Address('Eilat', 'Tzi Moshe 4', 5252)),
    new Student(3, 'Ohad', ['JS', 'React'], 75, new Address('Mitzpe', 'Ben Gurion 120', 9999)),
    new Student(4, 'Amit', ['JS', 'React'], 65, new Address('Dimona', 'Lev 10', 121212)),
    new Student(5, 'Saja', ['JS', 'React'], 100, new Address('Mitzpe', 'Moshe 40', 121212))
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
    setAddress(studentId, city, street, zipCode) {
        const student = this.find(studentId);

        if(student) student.setAddress(new Address(city, street, zipCode));
    }
    printStudentDetailsByCity(city) {        
        //Anonymous function
        const filteredStudents = this.students.filter(function (student) {
            return student.address.city === city;
        });
        
        for(const student of filteredStudents) {
            student.printDetails();
        }
    }
    /*
        returns something like
        {
            Eilat: 85,
            Dimona: 70
        }
    */
    getAverageByCity() {
        //   a- Group students by city
        //   b- For each city - 
        //      - sum the average 
        //      - divide by group size
        //   c- Sort by average desc

        const groups = {};

        for(const student of this.students) {
            const city = student.address.city;
            if(!groups[city]){
                groups[city] = [];
            }
            groups[city].push(student.avg);
        }

        //First, get the keys of the groups object (the cities actually)
        const cities = Object.keys(groups);
        //Second, get the averages by each city
        for(const city of cities) {
            const averages = groups[city];
            
            //Calculate the average
            let sum = 0;
            for(let i = 0; i < averages.length; i++) {
                sum += averages[i];
            }

            groups[city] = sum / averages.length;
            // console.log(`CITY ${city} -> AVG ${sum / averages.length}`);
        }

        return groups;
    }
}

//Make this code work
const college = new College('Lala College', 'Eilat', students);
college.giveBonusBelowAvg(80, 10); //each student having avg below 80 gets 10 pts bonus
college.addStudent(new Student(34, 'Wawa', ['Quilting'], 59, new Address('Eilat', 'Melonot Oy', 54549))); //adds new student to college

const studentArr = [
    new Student(87, 'Karin', ['Design', 'Engineering'], 45, new Address('Dimona', 'Tzfanya Hanavi 9', 8777)),
    new Student(9995, 'Yosemiti', ['Beep Beep'], 60, new Address('Mitzpe', 'Yossi', 121212)),
];

college.addStudents(studentArr); //adds new students to college
college.addCourse(3, 'Node'); //adds to student with id 3 Node course
college.addCourses([4,5, 9995], 'Biology');//adds to students with ids 4 or 5 Node course
college.setAvg(2, 90);//set the average of student with id 2 to 90
college.print();//prints the details of the college and the list of students


//1- Add to each student address (city, street, zipCode)
//2- Enable changing student address (add the method to Student class)
college.setAddress(9995, 'Eilat', 'Uri Batz 89', 877401);

//3- Print student details from Eilat
//4- Print student details from Haifa
college.printStudentDetailsByCity('Eilat');
college.printStudentDetailsByCity('Haifa');

//BONUS
//5- Print the average for each city (in descending order of average)
const averagesByCities = college.getAverageByCity();

for(const cityName in averagesByCities){
    console.log(`CITY ${cityName} -> AVG ${averagesByCities[cityName]}`);
}

function sortBigToSmall(a,b){
    return b[1] - a[1];
}

const bigtosmall = Object.entries(averagesByCities);

bigtosmall.sort(sortBigToSmall)

for(const i of bigtosmall){
    console.log(`CITY ${i[0]} -> AVG ${i[1]}`);
}