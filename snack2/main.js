'use strict';

//Input
const input1 = prompt('Digita parola 1');
const input2 = prompt('Digita parola 2');

//Estraggo le lunghezze
const lungh1 = input1.length;
const lungh2 = input2.length;

//Condizioni
if (lungh1 === lungh2) {
  console.log('Le parole sono lunghe uguali - Lunghezza: ' + lungh1);
} else if (lungh1 > lungh2) {
  console.log('Parola 1: ' + input2 + '- Lunghezza: ' + lungh2);
  console.log('Parola 2: ' + input1 + '- Lunghezza: ' + lungh1);
  console.log('La parola 1 è più lunga della parola 2');
} else {
  console.log('Parola 1: ' + input1 + '- Lunghezza: ' + lungh1);
  console.log('Parola 2: ' + input2 + '- Lunghezza: ' + lungh2);
  console.log('La parola 2 è più lunga della parola 1');
}
