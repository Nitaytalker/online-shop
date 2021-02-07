const student = {
    id: 78,
    name: 'Shahar',
    email: 'lala@wawa.com',
    average: 65
}

console.log(Object.keys(student)); //[ 'id', 'name', 'email', 'average' ]
console.log(Object.values(student)); //[ 78, 'Shahar', 'lala@wawa.com', 65 ]
console.log(Object.entries(student));
// [
//     [ 'id', 78 ],
//     [ 'name', 'Shahar' ],
//     [ 'email', 'lala@wawa.com' ],
//     [ 'average', 65 ]
// ]

for(const property in student) {
    console.log(property, student[property]);
}
// id 78
// name Shahar
// email lala@wawa.com
// average 65

