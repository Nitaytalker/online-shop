var array = [];
array.push(1);
array.push(2);
array.push(3);
//[1,2,3]
array.length; // 3
var lastItem = array.pop();
//[1,2]
array.length; //2

for (var i = 0; i < array.length; i++) {
    const item = array[i];
    console.log(item);
}

//foreach
for(var item of array){
    console.log(item);
}

var numbers = [11, 5, -2, 3, 14];
var names = ['Adi', 'Neta', 'Ohad', 'Saja', 'Galit'];

//Ex - 1
//Sort both arrays and print the result

console.log(names.sort());

//return 0               -> a == b
//return negative number -> a > b
//return positive number -> b > a

function compareNumbers(a, b) {
    return b - a;
}

//functions can be passed around as argument
console.log(numbers.sort(compareNumbers));

//Ex - 2
// You have numbers array
// Create another array containing the power by 2 of each number from the first array
function powerBy2Func(array) {
    var result = [];
    for(var number of array) {
        result.push(number**2);
        // result.push(number*number);
        // result.push(Math.pow(number, 2));
    }
    return result;
}

var powersBy2Array = powerBy2Func(numbers);
console.log(numbers, powersBy2Array);

//Ex - 3
// You have numbers array
// Create another array containing the negative/positive number of each number from the first array
function negateFunc(array) {
    var result = [];
    for(var number of array) {
        result.push(-number);
    }
    return result;
}

var negateArray = negateFunc(numbers);
console.log(numbers, negateArray);

// After completing the exercises, do you see a pattern here?
// Can you extract out the similarity between the two above solutions?

function powerBy2(number) {
    return number**2;
}

function negate(number) {
    return -number;
}

function vat(number) {
    return number * 1.17;
}

//action is named: callback
//Like with addEventListener('click', ourCallback function)

function transform(array, action) {
    var result = [];
    for(var item of array) {
        result.push(action(item));
    }
    return result;
}

var powers = transform(numbers, powerBy2);
console.log(powers);
var negates = transform(numbers, negate);
console.log(negates);
var vats = transform(numbers, vat);
console.log(vats);

//transform function:
// - You send it ['Avi', 'Shahar', 'Gila', 'Omer', 'Sara', 'Ilan', 'Shani'] and a function (think of it) -  
//and gets back [3,6,4,4,4,4,5] 
// - You send it ['Avi', 'Shahar', 'Gila', 'Omer', 'Sara', 'Ilan', 'Shani'] and a function (think of it) - 
// and gets back ['A', 'S', 'G', 'O', 'S', 'I',' S']

var names = ['Avi', 'Shahar', 'Gila', 'Omer', 'Sara', 'Ilan', 'Shani'];

function length(str) {
    return str.length;
}

function firstChar(str) {
    return str.charAt(0);// str[0];
}

function vat2(number) {
    return parseFloat(parseFloat(number * Math.PI).toFixed(3));
}

var vats2 = transform(numbers, vat2);
console.log(vats2);


var namesLengths = transform(names, length);
console.log(namesLengths);

var firstChars = transform(names, firstChar);
console.log(firstChars);


//map is a built-in array function.
//Similar to our transform, map operates on arrays.

var namesLengths2 = names.map(length);
console.log(namesLengths2);

var firstChars2 = names.map(firstChar);
console.log(firstChars2);


// Using map:
// 1- Convert [7.9, 1.2, 3.47, 10.69] to [8, 1, 3, 11]
// 2- Convert ['Sha', 'lab', 'Of', 'Dok'] to ['a', 'b', 'f', 'k']

function round(number) {
    return Math.round(number);
}

function lastChar(str) {
    return str.charAt(str.length-1);
}

console.log([7.9, 1.2, 3.47, 10.69].map(round));
console.log(['Sha', 'lab', 'Of', 'Dok'].map(lastChar));


// 1- Create array of 10 random numbers between 24 and 43.
// 2- Create another array of all the numbers starting with 3 (from the first array).
// 3- Create another array of all the odd numbers (from the first array).
// 4- Create another array of all the numbers above 38 (from the first array).

//1
function randomNumber(min, max) {
    return Math.floor(Math.random()*-(max-min)) + max;
}

var randoms = [];
for(var i = 0; i < 10; i++){
    randoms.push(randomNumber(24, 43));
}

console.log(randoms);

//2
//Convert to string and extract the first char
// function startingWith3(number) {
//     return (''+number)[0] == 3;
// }

function startingWith3(numbers) {
    var result = [];

    for(var number of numbers) {
        if((''+number)[0] == 3){
            result.push(number);
        }
    }

    return result;
}

var numbersStartingWith3 = startingWith3(randoms);
console.log(numbersStartingWith3);

function oddNumbers(numbers) {
    var result = [];

    for(var number of numbers) {
        if(number % 2 === 1){
            result.push(number);
        }
    }

    return result;
}

function screen(array, condition) {
    var result = [];

    for(var item of array) {
        if(condition(item)) {
            result.push(item);
        }
    }

    return result;
}

//3
function odd(number) {
    return number % 2 === 1;
}

var odds = screen(randoms, odd);
console.log(odds);

//4
function above38(number) {
    return number > 38;
}

var aboves = screen(randoms, above38);
console.log(aboves);

//built-in array filter
function numberStartingWith3(number) {
    return (''+number)[0] == 3;
}

var numbersStartingWith3_next_gen = randoms.filter(numberStartingWith3);
var odds_next_gen = randoms.filter(odd);
var above38_next_gen = randoms.filter(above38);

// Ex
// 1
// [-17, 0, 16, 129, 32, 128, 2048, 25]
// filter out all numbers between 20 and 70
// 2
// [-17, 0, 16, 129, 32, 128, 2048, 25]
// filter out all numbers that are a power of 2
// 3
// ['Haifa', 'Jerusalem', 'Beer Sheva', 'Afula', 'Eilat']
// filter out all southern cities
// 4
// ['Haifa', 'Jerusalem', 'Beer Sheva', 'Afula', 'Holon', 'Eilat']
// filter out all cities starting with b or h


//1
function between20And70(number) {
    return number >= 20 && number <= 70;
}

console.log([-17, 0, 16, 129, 32, 128, 2048, 25].filter(between20And70));

//2
function powerOf2(number) {
    while(number > 2) {
        number = number / 2;
    }
    return number === 2;
}

console.log([-17, 0, 16, 129, 32, 128, 2048, 25].filter(powerOf2));

//3

var southernCities = ['Beer Sheva', 'Dimona', 'Eilat'],
    cities = ['Dimona', 'Haifa', 'Jerusalem', 'Beer Sheva', 'Afula', 'Eilat'];

function isSouthern(city) {
    return southernCities.includes(city);
}

console.log(cities.filter(isSouthern));

//4
function startsWith_B_or_H(city) {
    var firstChar = city[0].toLowerCase();
    return firstChar === 'b' || firstChar === 'h';
}

console.log(cities.filter(startsWith_B_or_H));


// BONUS:

// function process(array, filter, manipulate, action) {
//    //1- Filter from array into new array
//    //2- Manipulate each element in the new array
//    //  and get back new manipulated array
//    //3- Perform action on each element in this new manipulated array
// }

// יש לכם מערך כזה
//  [88, -90, 11, 22, 189, -440, 7, -333, 65]
//  השתמשו ב
//  process
// כדי לסנן את המספרים האיזוגיים בטווח שבין 400- ל 100,
// לאחר מכן לחשב 17% מעמ לכל הנותרים,
// ולבסוף להדפיס
//  <The TAX is <the calculated value
// לכל אחד

function between400and100_odd(number) {
    return number >= -400 && 
           number <= 100 && 
           number % 2 === 1;
}

function addVAT(number) {
    return number * 1.17;
}

function printWithVAT(number) {
    console.log(`The TAX is ${number}`);
}

function process(array, filter, manipulate, action) {
    //1- Filter from array into new array
    var filtered = array.filter(filter);
   //2- Manipulate each element in the new array
   //  and get back new manipulated array
   var manipulated = filtered.map(manipulate);
   //3- Perform action on each element in this new manipulated array
   manipulated.forEach(action);
}

var salaries = [88, -90, 11, 22, 189, -440, 7, -333, 65];

process(salaries, between400and100_odd, addVAT, printWithVAT);


// אקסטרה בונוס:
// שימו לב ש
//  process
// ניתנת לשימוש לכל סוג של מערך.
// נסו אותה על מערך מחרוזות:
//  למשל סננו את כל המחרוזות שארוכות יותר מ 5 תווים,
// כעת היפכו כל מחרוזת לאותיות גדולות
// ולבסוף הדפיסו את המחרוזות עם רווחים ביניהם. (edited) 