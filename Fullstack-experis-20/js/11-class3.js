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
        this.address = address;
    }
    printDetails() {
        console.log(`ID: ${this.id}, Name: ${this.name}, Courses: ${this.courses}, Average: ${this.avg}, Address: ${this.address.getDetails()}`);
    }
    bonus(tosefet) {
        this.avg += tosefet;
    }
    addCourse(course) {

        this.courses.push(course);
    }
    removeCourse(course) {
        const courseIndex = this.courses.indexOf(course);
        if (courseIndex > -1) {
            this.courses.splice(courseIndex, 1);
        }
    }
    setAddress(newaddress){
        this.address = newaddress;
    }
}

const students = [
    new Student(1, 'Coral', ['JS', 'Node'], 87, new Address('Haifa', 'Tzi Moshe 4', 121212)),
    new Student(2, 'Neta', ['JS', 'React', 'Node'], 65, new Address('Jerusalem', 'Tzi Moshe 4', 5252)),
    new Student(3, 'Ohad', ['JS', 'React'], 75, new Address('Beer Sheva', 'Ben Gurion 120', 9999)),
    new Student(4, 'Amit', ['JS', 'React'], 65, new Address('Dimona', 'Lev 10', 121212)),
    new Student(5, 'Saja', ['JS', 'React'], 100, new Address('Mitzpe', 'Moshe 40', 121212))
];

for (const student of students) {
    if (student.avg < 80) {
        student.bonus(10);
        student.printDetails();
    }
}

students[2].addCourse('Node');
students[2].printDetails();

students[2].removeCourse('Node');
students[2].printDetails();


class College {
    constructor(name, city, newstudents) {
        this.name = name;
        this.city = city;
        this.newstudents = newstudents;
    }
    giveBonusBelowAvg(lowavg, bonus) {
        for (const student of this.newstudents) {
            if (student.avg < lowavg) {
                student.bonus(bonus);
            }
        }
    }
    addStudent(student) {

        this.newstudents.push(student);
    }
    find(studentId) {
        function byId(student) {
            return student.id === studentId;
        }
        
        //find returns the student itself, or undefined
        return this.newstudents.find(byId);
    }
    addStudents(studentArr) {
        for (const newstudent of studentArr) {

            this.addStudent(newstudent);
        }
    }
    addCourse(studentId, newcourse) {
        const student = this.find(studentId);

        if(student) student.courses.push(newcourse);
    }
    addCourses(ids, newcourse) {
        for (const newid of ids) {
            this.addCourse(newid,newcourse);
        }
    }
    setAvg(studentId, avg) {
        const student = this.find(studentId);

        if(student) student.avg = avg;
    }
    setAddress(studentID,city, street, zipCode){
        const student = this.find(studentID);
        if(student) student.setAddress(new Address(city, street, zipCode));
    }
    print() {
        console.log(`College Name: ${this.name}, ${this.city}\n-----------------------------------------`);
        for (const student of this.newstudents) {
            student.printDetails();
        }
    }
    findCity(city){
        function byCity(student) {
            return student.address.city === city;
        }
        
        //find returns the student itself, or undefined
        return this.newstudents.find(byCity);
    }
    printByCity(city){
        const student = this.findCity(city);
        if(student) student.printDetails();
        //print only the first...problem
    }
    averageByCity(){
        const groups = {};

        for(const student of this.newstudents){
            const city = student.address.city;
            if(!groups[city]){
                groups[city] = [];
            }
            groups[city].push(student.avg);
        }
        const cities = Object.keys(groups);
        for(const city of cities){
            const averages = groups[city];
            let sum = 0;
            for (let i = 0 ; i < averages.length ; i++){
                sum += averages[i];
            }
            sum=sum/averages.length
            averages.length=0;
            averages.push(sum);

        }
        return groups;
    }
}


let student = new Student(6, 'omer', ['JS', 'Node'], 75,new Address('Dimona', 'Lev 20', 12212)),
    studentArr = [
        new Student(87, 'Karin', ['Design', 'Engineering'], 45, new Address('Izdarechet', 'Tzfanya Hanavi 9', 8777)),
        new Student(9995, 'Yosemiti', ['Beep Beep'], 60, new Address('Meitar', 'Yossi', 1210312)),
    ];
//Make this code work

const college = new College('Lala College', 'Eilat', students);
college.print();
college.giveBonusBelowAvg(80, 10); //each student having avg below 80 gets 10 pts bonus
college.addStudent(student); //adds new student to college
college.addStudents(studentArr); //adds new students to college
college.addCourse(3, 'Node'); //adds to student with id 3 Node course
college.addCourses([40,50], 'Node');//adds to students with ids 4 or 5 Node course
college.setAvg(6, 90);//set the average of student with id 2 to 90
//prints the details of the college and the list of students


// 1- Add to each student address (city, street)

//2- Enable changing student address (add the method to Student class)
college.setAddress(9995, 'Eilat', 'Uri Batz 89', 877401);
college.print();
//3- Print student details from Eilat
//4- Print student details from Haifa
college.printByCity('Haifa');
college.printByCity('Dimona');
//BONUS
//5- Print the average for each city (in descending order of average)



const averagecity = college.averageByCity();
console.log(averagecity);
