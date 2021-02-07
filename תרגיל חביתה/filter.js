var numbers = [-17, 0, 16, 129, 32, 128, 2048, 25];

function between20_70(num) {
    return num >= 20 && num <= 70;
}

var num20_70 = numbers.filter(between20_70);
console.log(num20_70);


function power2(num) {
    while (num > 2) {
        num = num / 2;
    }
    return num == 2;
}

var numpower2 = numbers.filter(power2);
console.log(numpower2);

var citys = ['Haifa', 'Jerusalem', 'Beer Sheva', 'Afula', 'Eilat'];

function firstTavB_H(name) {
    name = name.toLowerCase();
    return name[0] == 'b' || name[0] == 'h';
}

var cityb_h = citys.filter(firstTavB_H);
console.log(cityb_h);

function citySouthern(name) {

    switch (name) {
        case 'Beer Sheva':
        case 'Eilat':
            return true;
        default:
            return false;
    }
}
var number5=[88, -90, 11, 22, 189, -440, 7, -333, 65];

var city_Southern = citys.filter(citySouthern);
console.log(city_Southern);

function process(array, filter, manipulate, action) {
    //1- Filter from array into new array
    var filtered = array.filter(filter);
    //2- Manipulate each element in the new array
    //  and get back new manipulated array
    var aftertax = filtered.map(manipulate);
    //3- Perform action on each element in this new manipulated array
    aftertax.forEach(action);
        
    }


function beeweenMinus400and100_odd(number) {
    if (number > -400 && number < 100) {
        if (number % 2 == 1) {
            return true;
        }
    }
    return false;
}

function maam(num){
    return num*1.17;
}
function printf(num){
    console.log('the tax is '+ num);
}

process(number5,beeweenMinus400and100_odd,maam,printf);

words= ['nitay','dimona','talker','abc','','a'];

function str5plus(str){
    return str.length<=4;
}
function tobig(word){
    return word.toLocaleUpperCase();
}
function myprint(name){
    console.log(name);
}

process(words,str5plus,tobig,myprint);
