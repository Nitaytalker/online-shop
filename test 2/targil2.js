const subs = subsets('abcd');

console.log(subs); //[ 'L', 'La', 'Lal', 'Lala', 'a', 'al', 'ala', 'l', 'la', 'a' ]

function subsets(word){
    const array = [];
    let originalLength = word.length;
    let strpush = '';
    for(let i=0; i<word.length ; i++){
        strpush+=word[i];
        array.push(strpush);
    }
    strpush='';
    for( let j = word.length; j > 0 ; j--){
        for(let i = j-1 ; i>0 ; i--){
            strpush+=word[i];
            array.push(strpush);
        }
         strpush = '';
    }
    return array;
    
}