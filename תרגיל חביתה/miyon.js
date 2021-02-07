var number = [11,5 ,-2 ,3 ,14];
var names = ['neta','adi','ohad','saja','galit']


console.log(names.sort());



function mymiyon(a,b){
    return a - b ;
}

console.log(number.sort(mymiyon));

function powerny2(array){
    var result = [];
    for(var number of array){
        result.push(number**2);
    }
    return result;
}
var power = powerny2(number);
console.log(number,power);

function negativenum(array){
    var result = [];
    for(var number of array){
        result.push(number*(-1));
    }
    return result;
}
var negativearr = negativenum(number);
console.log(number,negativearr);