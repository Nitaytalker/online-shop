
class Student {
    constructor(id, name, courses, avg, address, pic, email) {
        this.id = id;
        this.name = name;
        this.courses = courses;
        this.avg = avg;
        this.address = address;
        this.pic = pic;
        this.email = email;
    }
    getName() {
        const array = [];
        array.push(this.name);
        array.push(this.id);
        return array;
    }
    getInfoIfIdTrue(studentId) {
        const array = [];
        if (this.id == studentId) {
            array.push(this.id);
            array.push(this.name);
            array.push(this.courses);
            array.push(this.avg);
            array.push(this.address.getCity());
            array.push(this.pic);
            array.push(this.email);
            return array;
        }
        return 0;
    }
    
}
class Address {
    constructor(city, street, zipCode) {
        this.city = city;
        this.street = street;
        this.zipCode = zipCode;
    }
    getDetails() {
        return `${this.street}, ${this.city}, ${this.zipCode}`;
    }
    getCity() {
        return this.city;
    }
}
class College {
    constructor(id, name, city, newstudents = []) {
        this.id = id;
        this.name = name;
        this.city = city;
        this.newstudents = newstudents;
    }
    addStudent(student) {
        this.newstudents.push(student);
    }
    addStudents(studentArr) {
        for (const newstudent of studentArr) {

            this.newstudents.push(newstudent);
        }
    }
    getNameStudents() {
        console.log(this.newstudents);
        const names = [];
        for (const student of this.newstudents) {
            names.push(student.getName());
        }
        return names;
    }
    getInfoStudentById(studentId) {
        let arrayInfo = [];
        for (const student of this.newstudents) {
            arrayInfo = student.getInfoIfIdTrue(studentId);
            if (arrayInfo != 0) {
                return arrayInfo;
            }
        }
        return arrayInfo;
    }
}

const tonamestudent = document.getElementById('linefornames');

const myStudent = [
    new Student(1, 'Coral', ['JS', 'Node'], 87, new Address('Haifa', 'Tzi Moshe 4', 121212), "data:image/jpeg;base64,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", 'coral@'),
    new Student(2, 'Neta', ['JS', 'React', 'Node'], 65, new Address('Jerusalem', 'Tzi Moshe 4', 5252), "https://cdn.now.howstuffworks.com/media-content/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg", 'neta@'),
    new Student(3, 'Ohad', ['JS', 'React'], 75, new Address('Beer Sheva', 'Ben Gurion 120', 9999), "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlUBAsQUqu5a6Ce5GLi_dUqdjA2P7wE0-o8A&usqp=CAU", 'ohad@'),
    new Student(4, 'Amit', ['JS', 'React'], 65, new Address('Dimona', 'Lev 10', 121212), "https://www.branza.co.il/assets/uploads/articles/horizontal_big/1de6268ac1465a9bb9953180bfc97696.jpg", 'amit@'),
    new Student(5, 'Saja', ['JS', 'React'], 100, new Address('Mitzpe', 'Moshe 40', 121212), "https://cdn.now.howstuffworks.com/media-content/f94d2646-9628-45ae-b69d-a0d317dc37e5-1920-1080.jpg", 'saja@')
];
const allcollege = new College(1, 'college for you', 'dimona',);
allcollege.addStudents(myStudent);


//in refresh give all info from my data to user
function firstInfoToUser() {
    const allNameStudent = allcollege.getNameStudents();
    console.log(allNameStudent);
    // console.log(allNameStudent);
    function mymap(name) {
        return ` <li href="#" onclick="getInfo(${name[1]})" class="list-group-item list-group-item-action">${name[0]}</li> `;
    }
    const aftermap = allNameStudent.map(mymap);

    tonamestudent.innerHTML = '';
    for (const i of aftermap) {
        tonamestudent.innerHTML += i;
    }
}


const infostudent = document.getElementById('lineforinfo');

function getInfo(studentId) {
    // console.log(studentId);
    const myinfo = allcollege.getInfoStudentById(studentId);
    console.log(myinfo);
    infostudent.innerHTML = '';
    infostudent.innerHTML += ` <div class="card-header"><img src="${myinfo[5]}" class="card-img-top rounded-circle" alt="omer_face"></div>
        <div class="card-body">
          <h5 class="card-title">Info</h5>
          <p class="card-text">name:${myinfo[1]}</p>
          <p class="card-text">ID:${myinfo[0]}</p>
          <p class="card-text">course:${myinfo[2]}</p>
          <p class="card-text">Email:${myinfo[6]}</p>
          <p class="card-text">city:${myinfo[4]}</p>
          <p class="card-text">Student grade:${myinfo[3]}</p>
        </div> `
}


function addNewStudent(event) {
    // event.preventDefault();
    const newstudent = [];
    for (let i = 1; i <= 9; i++) {
        let x = document.getElementById(`validationCustom0${i}`);
        newstudent.push(x);
        console.log(newstudent[i - 1].value);
        console.log(i);
    }
    allcollege.addStudent(new Student(newstudent[1].value, newstudent[0].value, newstudent[6].value, newstudent[8].value,
         new Address(newstudent[2].value, newstudent[3].value, newstudent[4].value), newstudent[7].value, newstudent[5].value))
    // console.log(allcollege);
    firstInfoToUser();
    const stringified = JSON.stringify(allcollege.newstudents) // localStorage need read 
    localStorage.setItem('currntStudent',stringified);
}



(function () {
    'use strict';
    window.addEventListener('load', function () {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        if(localStorage.getItem('currntStudent')){
            let students=JSON.parse(localStorage.getItem('currntStudent'));
            allcollege.newstudents = [];
            students.forEach(function(st){
                allcollege.addStudent(new Student(st.id,st.name,st.courses,st.avg,
                    new Address(st.address.city,st.address.street,st.address.zipCode),st.pic,st.email));
            })
                    }
        firstInfoToUser();

        
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                else{
                    addNewStudent(event);
                }
               
                
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();