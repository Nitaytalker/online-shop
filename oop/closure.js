
// function foo() {
//     let s = 0;

//     function bar(x){
//         s +=x;
//         return s;
//     }

//     return bar;
// }

// const save = foo();
// console.log(save(1));
// console.log(save(2));
// console.log(save(0));
// console.log(save(2));

// console.log(save(2));


// function addToStringStart(){
//     let str = '';
//     function add(newStr){
//         str = newStr +str;
//         return str;
//     }
//     return add;
// }
// let addChar= addToStringStart();

// console.log(addChar('a')); 
// console.log(addChar('b')); 
// console.log(addChar('c')); 
// console.log(addChar('d')); 

// function addToStringStartByArray(){
//     let str = [];
//     function add(newStr){
//         str.unshift(newStr);
//         return str.join('');
//     }
//     return add;
// }

// let addChar1= addToStringStartByArray();

// console.log(addChar1('a')); 
// console.log(addChar1('b')); 
// console.log(addChar1('c')); 
// console.log(addChar1('d'));


// 1 What is the output of this ?

// function doSomething(a) {
//     function doSomethingElse(a) {
//         return a - 1;
//     }
//     var b;
//     b = a + doSomethingElse(a * 2);
//     console.log(b * 3);
// }
// doSomething(2);//15
// // 2 What is the output of this ?
// function foo() {
//     function bar(a) {
//         i = 3;
//         console.log(a + i);
//     }
//     for (let i = 0; i < 10; i++) {
//         bar(i * 2);//0,2,4,6,8...18.
//     }
// }
// foo();//3,5,7,9,11,...21. or 3,11,11,11,11,11,11,11,11.........

// 1- First explain what this code do
// 2- What is the expected output?
// 3- What is the actual output? Why?
// 4- Find at least 2 different ways to fix this
function func(f) {
   f();
}

function foo() {
  var funcs = [];
  for (var i = 0; i < 5; i++) {
    var res = function () {
      console.log(i);
    };
    funcs.push(res);
  }
  funcs.forEach(func);
}

foo();
console.log('---------------');

function foo1() {
    var funcs = [];
    for (var i = 0; i < 5; i++) {
      var res = function () {
        console.log(i);
      };
      funcs.push(res);
      funcs[i](func);
    }
    
  }

  foo1();
console.log('---------------');

  function foo2() {
    var funcs = [];
    for (let i = 0; i < 5; i++) {
      var res = function () {
        console.log(i);
      };
      funcs.push(res);
    }
    funcs.forEach(func);
  }

  foo2();

  function func(f) {
    f();
 }
 
 function foo3() {
   var funcs = [];
   for (var i = 0; i < 5; i++) {
     var res = function () {
       console.log(i);
     };
     funcs.push(res);
   }
   funcs.forEach(func);
 }
 foo3();