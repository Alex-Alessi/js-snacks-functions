/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];
let initial = prompt("Scrivi l'iniziale: ");
initial = initial.toUpperCase();

// Dichiara la funzione qui.

const sameInitial = (array, lettera) => {
  let NamesWsameInitial = [];
  for (let i = 0; i < array.length; i++) {
    let nameCurrent = array[i];
    if (lettera == nameCurrent[0]) {
      NamesWsameInitial.push(nameCurrent);
    }
  }
  return NamesWsameInitial;
};

// Invoca la funzione qui e stampa il risultato in console
const result = sameInitial(names, initial);
console.log(result);

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]
