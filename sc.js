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

// function pokemon(name, type1,type2) {
//     console.log("Pokemon Name: " + name);
//     type1(type2);

// }
// function pikachu(pok) {
//     console.log("Pikachu is an Electric type Pokemon.");
// pok();
// }  

// function charmander() {
//     console.log("Charmander is a Fire type Pokemon.");
// }
 
// console.log(pokemon("Pikachu", pikachu,charmander)); // Output: Pokemon Name: Pikachu
function avenger(name,power,power1){
    console.log("Avenmgername:"+name);
    power(power1);
}
function ironman(iron){
    console.log("Rich,gineus,philantoriphist")
    iron();
} 
function avenger1(spider,power1){
console.log("Junior avenger name"+spider)
power1();
}
function spiderman(e){
    console.log("can climb on walls&building and can shoot webfluid");
    e();

}

function eternalname(name,et){
console.log("Eternal name"+name);
et();
}
function eternal(more){
console.log("they are the entity created by clestials to save humanity")
more();
}

function clestials() {
    console.log("Clestials are the most powerful beings in the universe");
}
avenger("Ironman", ironman, (next) =>avenger1("Spiderman", () =>spiderman(() =>eternalname("Thena",()=> eternal(() =>clestials())))))
   

;