
const arraynumber =[0, 1, 2, 3, 5, 6, 7, 8, 10];
console.log(arraynumber);
gap(arraynumber);

console.log(arraynumber);
gap(arraynumber);

console.log(arraynumber);

function gap(array){
    let pos =array.length;
    for(let i = 0 ; i< array.length ; i++){
        if(array[i]-array[i+1] != -1 ){
            array.splice(i+1,0, array[i]+1);
            pos=i+2;
            i=array.length;
        }
    }
    for( ; pos < array.length ;pos++){
        array[pos]++;
    }
    
}