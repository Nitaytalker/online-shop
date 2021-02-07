function addXtoY(x, y) {
    if(x === undefined || typeof x !== 'number'){
        return NaN;
    }
    if(y === undefined || typeof y !== 'number'){
        return NaN;
    }
    return x + y;
}

var result = addXtoY(2, "10");

if(!isNaN(result)) {
    console.log(`Result is ${result}`);
}else {
    console.log('Something went wrong, check your input');
}

//Ex:

function sumDigits(num){
    var sum = 0;

    while(num) {
        //1 - get the last digit
        var digit = num % 10;
        //2 - sum
        sum += digit;
        //3 - divide the num
        num = Math.floor(num/10);
    }

    return sum;
}

console.log(sumDigits(12345)); // 15

//Ex 
function sumUntil1Digit(num) {
    while(num > 9){
        num = sumDigits(num);
    }
    return num;
}

console.log(sumUntil1Digit(123456)) // 3


//Ex

function doSomethingExtraOrdiner(number, x) {
    var isDivided = findIfNumberIsDividedByX(number, x);
    var res;
    if(isDivided) {
        res = multiplyNumberByXWithoutMultiplication(number, x);
    }
    if(res != undefined){
        printResult(number, x, res);
    }
}

function findIfNumberIsDividedByX(number, x) {
    return number % x === 0;
}

function multiplyNumberByXWithoutMultiplication(number, x) {
    var sum = 0,
        min = number > x ? x : number,
        max = number > x ? number : x;

    while(min--) {
        sum += max;
    }
    return sum;
}

function printResult(number, x, res) {
    console.log(`number = ${number}, x = ${x}, res = ${res}.`);
}

doSomethingExtraOrdiner(100, 2);
doSomethingExtraOrdiner(100, 3);