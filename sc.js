// let num=5;
// while(num<10){
// console.log(num);
// num+=2;
// }
// let num2=10;
// const prompt = require('prompt-sync')();
// const name = prompt("What is your name? ");
// console.log("Hello, " + name + "!");
//  let square=function (num) {
//     return num * num;
// }
// console.log(square(5)); // Output: 25

function pokemon(name, type1,type2) {
    console.log("Pokemon Name: " + name);
    type1(type2);

}
function pikachu(pok) {
    console.log("Pikachu is an Electric type Pokemon.");
pok();
}  

function charmander() {
    console.log("Charmander is a Fire type Pokemon.");
}
 
console.log(pokemon("Pikachu", pikachu,charmander)); // Output: Pokemon Name: Pikachu
