const dogs = [
    {name:'browniz' , age:3}, 
    {name:'klav', age:7},
    {name:'dorban' , age: 12},
    {name:'nelly' , age : 5},
    {name:'darban' ,age:8}
];
//foreach iteration
for(const dog of dogs) {
    console.log(dog.name);
}
//regular for iteration
for(let i = 0; i < dogs.length; i++){
    console.log(dogs[i].name);
}
//EX
//Print dogs names in 1 line with commas:
//output: 
//browniz, klavlavi, dorban, nelly

function dogLength6(dog){
    return dog.name.length <6 ;
}
function dogName(dog){
    return dog.name;
}

const names = dogs.filter(dogLength6);

const dognames = names.map(dogName);

const allnames= dognames.join(' , ');

console.log(allnames);

function compareDogs(a, b) {
    if(a.name > b.name) return 1;
    if(a.name < b.name) return -1;
    return 0 ;
}

//functions can be passed around as argument



const names1 = dogs.sort(compareDogs);

const dognames1 = names1.map(dogName);

const allnames1= dognames1.join(' , ');

console.log(allnames1);

function compareDogsAge(a, b) {
    if(a.age > b.age) return 1;
    if(a.age < b.age) return -1;
    return 0 ;
}
function dogNameAge(dog){
    return dog.name;
}
function dogYoung(dog){
    return dog.age > 5;
}

const names2 = dogs.sort(compareDogsAge);

const dogLess5 = names2.filter(dogYoung)

const dognames2 = dogLess5.map(dogName);

const allnames2= dognames2.join(' , ');

console.log(`by age : ${allnames2}`);

const points = [
    {x:5, y:7},
    {x:9, y:7},
    {x:1, y:2},
    {x:1, y:6},
    {x:4, y:2}
];

function bigNumToSmall(a,b){
    return b.x - a.x ;
}

function haveThePoint(a){
    if ( a.x === 1 && a.y === 2 ) return true;
    return false;
}

const bigToSmallPoints = points.sort(bigNumToSmall);
 console.log(bigToSmallPoints);
 console.log(points[0]);

 const havepoint = points.some(haveThePoint);
 console.log('have point (1,2) :',havepoint);
 