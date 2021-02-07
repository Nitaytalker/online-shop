// //Rest operator
// ​
// const numbers = [1,2,3,4,5];
// ​
// // const first = numbers[0],
// //       allTheRest = numbers.slice(1);
// ​
// ​
// const [first, ...allTheRest] = numbers;
// ​
// console.log(first, allTheRest);
// ​
// ​
// function stam([first, second, ...rest]) {
//     console.log(first, rest, second);
// }
// ​
// stam(numbers);
// ​
// ​
// const hero = {
//     name: 'Magneto',
//     strength: 'Hafirot',
//     course: 'Electricity'
// }
// ​
// const {name, ...rest} = hero;
// ​
// console.log(name, rest);
// ​
// function stam2({name, ...restProps}) {
//     console.log(name, restProps);
// }
​
stam2(hero);
stam2({id:3, name: 'Adi', course: 'JS'});