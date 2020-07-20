var randomNumber16 = [];
var userInput = [];



while (randomNumber16.length < 16) {
    numeroCasuale = randomNu(1,100);
    if (randomNumber16.includes(numeroCasuale)== false) {
        randomNumber16.push(numeroCasuale);
    }
}


console.log(randomNumber16);

 
while (controllo(randomNumber16,userNumber) != true && userInput.length < 84) {
    var userNumber = prompt('inserisci il numero');
    if (controllo(randomNumber16,userNumber)){
        alert('hai perso');
    } else if (userInput.includes(userNumber) == false){
        userInput.push(userNumber);
    } else if (userInput.includes(userNumber) == true){
        alert('il numero gia e usato');
    } else if (userInput.length == 84) {
        alert('hai vinto');
    }
    console.log(userInput);
    
}







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