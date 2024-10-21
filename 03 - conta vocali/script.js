/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = "javascript";

// Dichiara la funzione qui.

const numVowels = (stringa) => {
  const vowels = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"];
  let counter = 0;
  for (let i = 0; i < stringa.length; i++) {
    if (vowels.includes(stringa[i])) {
      counter++;
    }
  }
  return counter;
};

// Invoca la funzione qui e stampa il risultato in console

const result = numVowels(word);
console.log(result);

//Risultato atteso se si passa 'javascript': 3 (a, a, i)
