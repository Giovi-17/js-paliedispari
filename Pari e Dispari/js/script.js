/* L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto. */

const parDispari = prompt('Scegli fra pari e dispari');
const num = parseInt( prompt('Inserisci un numero fra 1 e 5') );
const numPC = numberGenerator();

const somma = num + numPC; 

const numString = "";
const numPD = numPariDispari(somma,numString);

if(numPD === parDispari){
    alert("Hai vinto!");
    alert("Tu hai inserito: " + num + " Mentre il PC ha inserito: " + numPC + " quindi la somma totale é: " + somma + " ed é: " + numPD);
}else{
    alert("Hai perso!");
    alert("Tu hai inserito: " + num + " Mentre il PC ha inserito: " + numPC + " quindi la somma totale é: " + somma + " ed é: " + numPD);
}

//Generatore di numeri fra 1 e 5
function numberGenerator(){
    const x = Math.floor(Math.random() * 5) + 1;
    return x;
}

//Controllo che il numero sia pari o dispari
function numPariDispari(somma,numString){
    if(somma % 2 === 0){
        numString = "pari";
    }else{
        numString = "dispari";
    }

    return numString;
}
