//Simple plain object is just a key:value pairs inside { }

const student = {
    id: 1221,
    name: 'shahar',
    age: 27,
    courses: ['Node', 'React'],
    avg_score: 87
};


console.log(student.id, student.avg_score, student.courses);


const dogi = {
    name: 'humi',
    age: 7,
    color: 'brown red'    
}

//From now on - when you declare a variable, it should be constant.
//If you need - turn it to let

const numbers = [1,2,3,4,5];

for(const num of numbers){
	console.log(num);
}

// for(let i = 0; i < numbers.length; i++) {
//     const num = numbers[i];
//     console.log(num);
// }


numbers.push(6);

//Error
//numbers = [...]

const dogs = [
    {name:'browniz', age: 2}, 
    {name:'klavlavi', age: 1},
    {name:'chuck', age: 7},
    {name:'dorban', age: 15},
    {name:'nelly', age: 10}
];


for(const dog of dogs) {
    console.log(dog.name);
}

for(let i = 0; i < dogs.length; i++){
    console.log(dogs[i].name);
}

//EX
//Print dogs names in 1 line with commas:
//output: 
//browniz, klavlavi, dorban, nelly

// //Solution 1
// const names = [];

// for(const dog of dogs){
//     names.push(dog.name);
// }

// const allNames = names.join(', ');

// console.log(allNames);

//Solution 2
function dogName(dog) {
    return dog.name;
}

const names = dogs.map(dogName);

const allNames = names.join(', ');

console.log(allNames);

//Ex
// print the names which are shorter than 6 characters

//Solution 1
function nameLessThan6Chars(dog) {
    return dog.name.length < 6;
}

// const shorters = dogs.filter(nameLessThan6Chars);
// const shortNames = shorters.map(dogName);

const shortNames = dogs.filter(nameLessThan6Chars)
                      .map(dogName);

console.log(shortNames.join(', '));

//Ex
//Print the names in alphabetic order

// compare function gets 2 items and returns
// -1 if a < b
//  1 if a > b
//  0 if a == b
function compareDogsByName(dogA, dogB) {
    if(dogA.name < dogB.name) return -1;
    if(dogA.name > dogB.name) return 1;
    return 0;
}

console.log(dogs.sort(compareDogsByName));

//Ex
//1- Add to each dog age property
//2- sort them by age
//3- print the *names* of those older than 5 years

//Again:
// compare function gets 2 items and returns
// -1 if a < b
//  1 if a > b
//  0 if a == b
function compareDogsByAge(dogA, dogB) {
    return dogA.age - dogB.age;
}

console.log(dogs.sort(compareDogsByAge));

function olderThan5(dog) {
    return dog.age > 5;
}

function print(name){
    console.log(name);
}
dogs.filter(olderThan5)
    .map(dogName)
    .forEach(print);

//Ex

//1- Create array of 5 points
//   Each point contains x and y
//2- print the point with the biggest x
//3- Find if points array has a point with x = 1 and y = 2

const points = [
    { x: 1, y: 10},
    { x: 1, y: 2},
    { x: 3, y: 11},
    { x: 7, y: 9},
    { x: 30, y: 20}
];

function findBiggestPoint(points) {
    const biggest = { x: 0, y: 0 };

    for(const point of points) {
        if(point.x > biggest.x) {
            biggest.x = point.x;
            biggest.y = point.y;
        }
    }

    return biggest;
}

const biggestPoint = findBiggestPoint(points);
console.log('Biggest point is ', biggestPoint);

function isPointX1Y2(point) {
    return point.x === 1 && point.y === 2;
}

console.log(`Is {x:1, y:2} inside points? ${points.some(isPointX1Y2)}`);

