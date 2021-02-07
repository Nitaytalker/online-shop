var x; //value is undefined

x = 6; //value is a number now etc.

for (var i = 0; i < "array".length; i++) {
    console.log("array"[i]);    
}

for (var i = "array".length - 1; i >= 0; i--) {
    console.log("array"[i]);    
}

var sum = 0,
    numbers = [1,2,3,4,5,6];

for (var i = 0; i < numbers.length; sum += numbers[i++]){}

console.log(sum);

/*
while() {

}

do {
//at least 1 time
}while();
*/

for (let i = 0; i < numbers.length; i++) {
    var num = numbers[i];
    console.log(num);    
}

//foreach loop (iterator pattern)
for(var num of numbers) {
    console.log(num);
}


var names = ['Michael', 'Coral', 'Ohad', 'Adi'];

function isInArray(array, item) {
    var found = false;
    for(var value of array){
        if(value === item) {
            found = true;
            break;
        }
    }
    return found;
}

console.log(`Is Coral inside? ${isInArray(names, 'Coral')}`);


function dayMessage(day) {
    if(day == 'sunday' || day == 'monday'){
        return 'Have a good week';
    }else if(day == "tuesday" || day == 'wednesday'){
        return 'Ohh...';
    }else if(day == 'friday' || day == 'saturday'){
        return 'Yalla Jachnun';
    }else {
        return 'Not a day you silly boy';
    }
}

function dayMessage2(day) {
    switch(day){
    case 'sunday':         
    case 'monday':
        return 'Have a good week';
    case "tuesday":
    case 'wednesday':
        return 'Ohh...';
    case 'friday':
    case 'saturday':
        return 'Yalla Jachnun';
    default:
        return 'Not a day you silly boy';
    }
}



"4" + 4
// "44"
"4" + 4 + 77
// "4477"
4 + 77 + "44"
// "8144"
4 + 77 + "44" + 8
// "81448"
var ageInput = "34"
parseInt(ageInput)
// 34
ageInput + 1
// "341"
parseInt(ageInput) + 1
// 35
ageInput = "34!"
// "34!"
parseInt(ageInput)
// 34
parseInt("34!")
// 34
parseInt("3!4")
// 3
parseInt("3d4dlsoe58585")
// 3
parseInt("w3d4dlsoe58585")
// NaN
parseInt(".3d4dlsoe58585")
// NaN
parseInt("0.3d4dlsoe58585")
// 0
parseFloat("0.3d4dlsoe58585");
// 0.3


