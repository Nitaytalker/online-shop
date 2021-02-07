// Ex
// 1-
// Create merge function getting 2 arrays and return 1 merged array
// Don't use concat

function mergeArray([...array]){
    let mereg = [];
    for(let i of array){
        for(let x of i){
            mereg.push(x);
        }
    }
    console.log(array);
    console.log(mereg);
    
    return array
}

mergeArray([[1, 2, 3], [4, 5], [6]]);

// 2-
// Write a function which gets 2d array and returns it flattened as 1 array.
// Use the previous function.
// For Example: For [[1, 2, 3], [4, 5], [6]] you get [1, 2, 3, 4, 5, 6]


// 3-
const person = {
    id: 12345,
    name: 'Shahar',
    age: 27
};

const cloned ={...person};

//her name is 'Alice'
const her = {...person ,name:'alice'} ;
//him is a copy of person with addition of car: 'Volvo'
const him = {...person , car:'volvo'};
console.log(person, cloned, her,him);
//{ id: 12345, name: 'Shahar', age: 27 }
//{ id: 12345, name: 'Shahar', age: 27 }
//{ id: 12345, name: 'Alice, age: 27 }
//{ id: 12345, name: 'Shahar', age: 27, car: 'Volvo' }