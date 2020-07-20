// Creo  3 array 

//La prima per inumeri Random
var randomNumber16 = [];

//La seconda per i numeri dell utente 
var usrNumber = [];

//La terza per calcolare lo score dell utente ;
var arrayUser = [];

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
//Richiedo all/user di inserire 











/*************************************************************************************************/
function checkDifficolta(difficolta) {
    return difficolta = prompt('Inserisci: Facile , Medio , Diffcile. Per scegliere la difficolta.').toLowerCase().trim()
}

 
