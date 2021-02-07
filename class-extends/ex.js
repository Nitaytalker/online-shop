// const func = ()=>{
//     console.log(i);
// }
// func();
// let i = 1;
// let f;
// if(true){
//      f =()=>{
//         console.log('works');
//     }
    
// }
// f();
// if(true){
//     var f = () => {
//         console.log('works');
//     }
// }
// f();

var y=0;
for(let i=0;i<3;i++,y++){

    setTimeout(()=>{
        console.log(i,y);
    }) 
    console.log('-------');
    
}
console.log('---1----');

