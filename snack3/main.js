'use strict';

//Dichiaro un counter = 0
let counter = 0;

//Chiedo in input 10 numeri
for (let i = 1; i <= 10; i++) {
  let inputNumero = Number(prompt('Digita il numero ' + i));
  //Una volta chiesto il numero, lo aggiungo a counter
  counter = counter + inputNumero;

  console.log('La somma è:' + counter);
}
