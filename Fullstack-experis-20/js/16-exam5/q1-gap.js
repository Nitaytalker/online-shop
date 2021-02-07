// You have an array of numbers with 'gap'.
// Array with gap: [0, 1, 2, 3, 5, 6, 7, 8, 10].

// You need to move that gap 1 step forward:
// Gap moved 1 step forward: [0, 1, 2, 3, 4, 6, 7, 8, 9, 11].

// Do it as efficient as you can.

const numbers = [0, 1, 2, 3, 5, 6, 7, 8, 10];
             // [0, 1, 2, 3, 4, 6, 7, 8, 9, 11]
function moveGap(arr) {
    for(let i = arr.length-1; i >= 0; i--) {
        if(arr[i] - arr[i-1] > 1) {
            if(i == arr.length - 1) {
                arr.push(arr[i] + 1);
            }
            arr[i] = arr[i] - 1;
        }
    }    
}

moveGap(numbers);
console.log(numbers);//[0, 1, 2, 3, 4, 6, 7, 8, 9, 11]