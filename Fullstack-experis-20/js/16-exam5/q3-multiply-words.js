// Write a simple HTML page consisting of 1 input, 1 select and 2 buttons.
// Input - enter some word,
// select - choose a number from 2 to 5,
// 1st button - add new word
// 2nd button - display result

// The user can insert text (1 word at a time, required), and click a button to add the word.
// When she finish she can select a number from the select (required) and hit the display button.

// For example:
// User inserted 3 words
// 'ab', 'cd' and 'q2z' and selected 3
// You display
// 'ababab', 'cdcdcd' and 'q2zq2zq2z'

// *
// 5pts bonus - no bugs,
// 5pts bonus - clean coding
// 5pts bonus - styling

const words = [],
      input = document.querySelector('#word'),
      select = document.querySelector('#repeats'),
      result = document.querySelector('#result');

//Add Word button click
function addWord() {
    if(!input.value){
        alert('Please enter a word');
    }else if(input.value
                  .trimRight()
                  .split(' ').length > 1) {
        alert('Please enter just 1 word at a time');
    }
    else{
        words.push(input.value);
        input.value = '';
    }
}

function toListItem(word) {
    return `<li class="list-group-item">${word}</li>`;
} 

function display() {
    const repeated = [];

    for(let word of words) {
        repeated.push(word.repeat(select.value));
    }

    result.innerHTML = repeated.map(toListItem).join('');
}

