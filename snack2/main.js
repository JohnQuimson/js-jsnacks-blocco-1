'use strict';

//Input
const input1 = prompt('Digita parola 1');
const input2 = prompt('Digita parola 2');

//Estraggo le lunghezze
const lungh1 = input1.length;
const lungh2 = input2.length;

//Condizioni
if (lungh1 === lungh2) {
  console.log('Le parole sono lunghe uguali');
} else if (lungh1 > lungh2) {
  console.log(input1);
  console.log(input2);
} else {
  console.log(input2);
  console.log(input1);
}
