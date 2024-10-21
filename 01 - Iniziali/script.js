/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];
let letters = [];

// Dichiara la funzione qui.
const firstLetter = (parola) => parola[0];

// Invoca la funzione qui e stampa il risultato in console
for (let i = 0; i < names.length; i++) {
  letters.push(firstLetter(names[i]));
}

console.log(letters);

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]
