'use strict';

const myArray = [];
let counter = 0;

/*
-------------
For
-------------
*/
// for (let i = 0; i < Infinity; i++) {
//   let inputUtente = Number(prompt('Inserisci un numero'));
//   counter += inputUtente;
//   myArray.push(inputUtente);
//   if (counter >= 50) {
//     break;
//   }
// }
// console.log('Ciclo For con break');
// console.log(`Somma: ${counter}`);
// console.log(myArray);
/*
-------------
For
-------------
*/
let inputUtente = 0;
for (counter = 0; counter < 50; counter = counter + inputUtente) {
  inputUtente = Number(prompt('Inserisci un numero'));
  myArray.push(inputUtente);
}
console.log('Ciclo For senza break');
console.log(`Somma: ${counter}`);
console.log(myArray);
/*
-------------
While
-------------
*/
// while (counter < 50) {
//   let inputUtente = Number(prompt('Inserisci un numero'));
//   myArray.push(inputUtente);
//   counter += inputUtente;
// }
// console.log('Ciclo While');
// console.log(`Somma: ${counter}`);
// console.log(myArray);

/*
-------------
Do While
-------------
*/
// do {
//   let inputUtente = Number(prompt('Inserisci un numero'));
//   myArray.push(inputUtente);
//   counter += inputUtente;
// } while (counter < 50);
// console.log('Ciclo Do While');
// console.log(`Somma: ${counter}`);
// console.log(myArray);
