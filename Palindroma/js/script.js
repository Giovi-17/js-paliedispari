/* Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma */

//Inserimento della parola da parte dell'utente
const parola = prompt("Scrivi una parola");

const parolaP = parolaPalindroma(parola);

console.log("Parola N: ",parola);

console.log("Parola P: ",parolaP);

if(parola === parolaP){
    alert("La parola é palindroma");
}else{
    alert("La parola NON é palindroma");
}

//Scrivo un ciclo for per scorrere le lettere della parola inserita
//Dichiaro una variabile x per concatenare le lettere al contrario
//Faccio return x per restituire il contrario della parola originale
function parolaPalindroma(parola){
    let x = '';

    for(let i = parola.length - 1; i >= 0; i--){

        x += parola[i];

    }

    return x;

}

