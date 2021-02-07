//This will throw error - i is not defined
//console.log(i);

for(let i = 0; i < 5; i++) {
    console.log(i);
}


//This will throw error - i is not defined
//console.log(i);
let lala = 'lala';

function notHoisted() {
    let ok = true;

    if(ok) {
        let notOK = false;
        console.log(notOK);

        if(true) {
           let lala = 'wawa';
        }
    }
    //console.log(ok, notOK);
}
notHoisted();
console.log(lala);

//constant variables
//Can't be assigned again

const num = 100;
// num = 101;
// num++; // num = num + 1

let anotherNum = num;

anotherNum++;

console.log(num, anotherNum);


//const is just like let, 
//the only difference is that you can't re-assign to constant variables

const cat = {
    name: 'kitty'
}

cat.name = 'mitzi';

console.log(cat.name);

////Can't re-assign! cat is constant
// cat = {
//     name: 'mitzi'
// }

cat.color = 'white';

console.log(cat);

