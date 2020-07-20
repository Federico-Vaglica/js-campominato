// Creo  3 array 

//La prima per inumeri Random
var randomNumber16 = [];

//La seconda per i numeri dell utente 
var usrNumber = [];

//La terza per calcolare lo score dell utente ;
var arrayUser = [];

//punteggio

var punteggio = 0;

//Variabile a cui assegnare la funzione 
var difficolta1 ;

//Variabile di controllo per la difficolta
var  checkDiff = false;

// Scelta della difficolta
while(checkDiff == false) {
    difficolta1 = checkDifficolta();
    if(difficolta1 == 'facile') {
        checkDiff = true;
    } else if(difficolta1 =='medio') {
        checkDiff = true;
    } else if(difficolta1 == 'difficile'){
        checkDiff = true;
    } else {}
}


//Inserisco i 16 numeri all-interno dell'array controllando la difficolta utilizzando un ciclo switch
//controllando che non  siano gia inclusi nell array , se si sottrago 1 alla i 

for(i=0; i<16; i++) {
    switch(difficolta1){
        case 'facile':
        var numeroRandom = Math.floor(Math.random()*100)+1;
        if (randomNumber16.includes(numeroRandom)){
            i--;
        } else {
            randomNumber16.push(numeroRandom)
        }
        break;
        case 'medio':
            var numeroRandom = Math.floor(Math.random()*80)+1;
            if (randomNumber16.includes(numeroRandom)){
                i--;
            } else {
                randomNumber16.push(numeroRandom)
            }
        break;
        case 'difficile':
            var numeroRandom = Math.floor(Math.random()*50)+1;
            if (randomNumber16.includes(numeroRandom)){
                i--;
            } else {
                randomNumber16.push(numeroRandom)
            }
        break;
        default:
            difficolta1=false;
    }
}

console.log(randomNumber16);
//Richiedo all/user di inserire i numeri (100-16) e controllo che non inserisca due volte lo stsso numero , e che il numero non sia contenuto nei numeri randomGenerati 

if(difficolta1 == 'facile' ) {
    for(i=0; i < 84; i++) {
        usrNumber = parseInt(prompt('Inserisci un NUMERO'));
        if(isNaN(usrNumber) || usrNumber < 1 || usrNumber > 100) {
            alert ('Inserisci un numero , superiore ad 1 ed inferiore a 100');
        } else if (arrayUser.includes(usrNumber)) {
            alert('Non puoi inserire lo stesso numero');
        } else if (randomNumber16.includes(usrNumber)){
            alert ('hai perso');
            break;
        } else {
            arrayUser.push(usrNumber);
            punteggio += 1;
        } 
    }
}else if (difficolta1 == 'medio'){
    for(i=0; i < 84; i++) {
        usrNumber = parseInt(prompt('Inserisci un NUMERO'));
        if(isNaN(usrNumber) || usrNumber < 1 || usrNumber > 80) {
            alert ('Inserisci un numero , superiore ad 1 ed inferiore a 80');
        } else if (arrayUser.includes(usrNumber)) {
            alert('Non puoi inserire lo stesso numero');
        } else if (randomNumber16.includes(usrNumber)){
            alert ('hai perso');
            break;
        } else {
            arrayUser.push(usrNumber);
            punteggio += 1;
        } 
    }
} else if(difficolta1 == 'difficile'){
    for(i=0; i < 84; i++) {
        usrNumber = parseInt(prompt('Inserisci un NUMERO'));
        if(isNaN(usrNumber) || usrNumber < 1 || usrNumber > 50) {
            alert ('Inserisci un numero , superiore ad 1 ed inferiore a 50');
        } else if (arrayUser.includes(usrNumber)) {
            alert('Non puoi inserire lo stesso numero');
        } else if (randomNumber16.includes(usrNumber)){
            alert ('hai perso');
            break;
        } else {
            arrayUser.push(usrNumber);
            punteggio += 1;
        } 
    }
} else {
    difficolta1=checkDifficolta;
}











/*************************************************************************************************/
function checkDifficolta(difficolta) {
    return difficolta = prompt('Inserisci: Facile , Medio , Diffcile. Per scegliere la difficolta.').toLowerCase().trim()
}

 
