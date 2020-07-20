var randomNumber16 = [];
var userInput = [];
var punteggio = 0;
var a = 1;
var b = 0;
var checkDiff = false;
var difficolta = prompt('Inserisci: Facile , Medio , Diffcile. Per scegliere la difficolta.').toLowerCase().trim()
var possbilita = 0;
/*Bonus*/
switch(difficolta) {
    case 'facile':
        b = 100;
        possbilita = 84;
    break;
    case 'medio':
        b = 80;
        possbilita = 64;
    break;
    case 'difficile':
        b = 50;
        possbilita = 34;
    break;   
}

console.log(difficolta);
console.log(b);
console.log(possbilita);


while (randomNumber16.length < 16) {
    numeroCasuale = randomNu(1,b);
    if (randomNumber16.includes(numeroCasuale)== false) {
        randomNumber16.push(numeroCasuale);
    }
}

console.log(randomNumber16);


while (controllo(randomNumber16,userNumber) != true && userInput.length < possbilita) {
    var userNumber = prompt('inserisci il numero');
    if (controllo(randomNumber16,userNumber)){
        alert('hai perso');
    } else if (userInput.includes(userNumber) == false){
        punteggio += 1;
        userInput.push(userNumber);
    } else if (userInput.includes(userNumber) == true){
        alert('il numero gia e usato');
    } else if (userInput.length == possbilita) {
        alert('hai vinto');
    }
}

alert('il tuo risultato e\' di ' + punteggio + ' punti.')




/******************************************************************************* */


function randomNu(min,max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}




function controllo(randomNumbers,userInput) {
    var trovato = false;
    for (i=0; i < randomNumbers.length ; i++) {
        if (randomNumbers[i] == userInput){
            trovato = true;
        }
    }
    return trovato;
}

