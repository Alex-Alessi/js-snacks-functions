/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

//! Siccome tra la sera e il mattino non abbiamo un intervallo, metto che dalle 17 alle 5 (orario dell'alba circa) dia buonasera.

const name = "Mario";

// Dichiara la funzione qui.
const saluto = (nome) => {
  let data = new Date();
  let ora = data.getHours();
  if (ora >= 5 && ora <= 13) {
    return "Buongiorno " + nome;
  } else if (ora > 13 && ora <= 17) {
    return "Buon Pomeriggio " + nome;
  } else {
    return "Buonasera " + nome;
  }
};

const result = saluto(name);
console.log(result);

// Invoca la funzione qui e stampa il risultato in console

//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.
