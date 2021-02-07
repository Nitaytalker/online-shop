// Write the subsets function:
// const subs = subsets('Lala');
// console.log(subs); //[ 'L', 'La', 'Lal', 'Lala', 'a', 'al', 'ala', 'l', 'la', 'a' ]

function subsets(str) {
    const substrings = [];

    for(let i = 0; i < str.length; i++){
        for(let j = i + 1; j <= str.length; j++){
            substrings.push(str.substring(i, j));
        }
    }

    return substrings;
}

console.log(subsets('Lala'));

// 10pts bonus:
// Build a HTML page, enabling the user to enter some word and print her the subsets:
// 1. L
// 2. La
// 3. Lal
// 4. Lala
// 5. a
// ...and so on...

// Integrate this function with a web page 

function toListItem(word) {
    return `<li class="list-group-item">${word}</li>`;
} 

function display() {
    const word = document.querySelector('#word'),
          subsetsResult = document.querySelector('#subsetsResult');

    const words = subsets(word.value); 

    const listItems = words.map(toListItem);

    subsetsResult.innerHTML += listItems.join('');
}