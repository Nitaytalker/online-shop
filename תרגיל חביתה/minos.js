var numbers = [11  ,5 ,-2 ,3 ,14];
var names = ['Avi', 'Shahar', 'Gila', 'Omer', 'Sara', 'Ilan', 'Shani'];

function powerBy2(number){
    return number * number ;
}

 function strlen(str){
     return str.length;
 }

 function firstTav(str){
     return str.charAt(0);
 }

function transfrom(array,action){
    var result = [];
    for(var number of array){
        result.push(action(number));
    }
    return result;
}


var powers = transfrom(numbers,powerBy2);
console.log(powers);

var str1= transfrom(names,strlen);
console.log(str1);

var str2= transfrom(names,firstTav);
console.log(str2);

function round(num){
    return Math.round(num);
}

console.log([7.9, 1.2, 3.47, 10.69].map(round));


var rundnumber =[];
for( var i=0 ; i < 10; i++){
    rundnumber[i] = getRndInteger(23,43);
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

console.log(rundnumber);

function trueIf3(num){
    if(num-30 >=0 && num-30 <10){
        return true;
    }
    return false;
}


console.log(rundnumber.map(trueIf3));