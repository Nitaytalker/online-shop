
// var scope
//------------
//Scope means - טווח הגדרה

console.log(i);

for(var i = 0; i < 5; i++) {
    console.log(i);
}

console.log(i);


// The above 'magic' is named HOISTING
// The hoisting process is done right before execution:
// **All vars** are hoisted - go up to the top of the scope


//In the background
//(Hoisted by JS)
// var i;
// console.log(i);

// for(i = 0; i < 5; i++) {
//     console.log(i);
// }

// console.log(i);


//-----Hoisting === Headache-----

function hoist() {
    var ok = true;

    if(ok) {
        var notOK = false;
        console.log(notOK);
    }
    console.log(ok, notOK);
}
hoist();

////(Hoisted by JS)
// function hoist() {
//     var ok, notOK;
//     ok = true;

//     if(ok) {
//         notOK = false;
//         console.log(notOK);
//     }
//     console.log(ok, notOK);
// }

//Scope is function scope! OR module scope (the file).