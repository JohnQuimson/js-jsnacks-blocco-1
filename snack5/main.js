'use strict';

const inputUtente = Number(prompt('Quanti N array vuoi generare ?'));

//verifica che l'input sia un numero
if (!isNaN(inputUtente)) {
  //Genero inputUtente array
  for (let i = 0; i < inputUtente; i++) {
    const myArray = [];
    //Pusho nell'array 10 numeri casuali
    for (let j = 0; j < 10; j++) {
      myArray.push(Math.floor(Math.random() * 100) + 1);
    }
    console.log(`Array ${i + 1}: [${myArray}]`);
  }
} else {
  alert('Non hai inserito un numero');
}
