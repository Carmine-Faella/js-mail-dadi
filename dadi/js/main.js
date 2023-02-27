const numeroUtente = [];

const numeroComputer = [];

let numeroU = document.getElementById('numeroUtente');

let numeroC = document.getElementById('numeroComputer');

let vincitore = document.querySelector('.vincente');

for (let i = 0; i < 1; i++) {

    let numeroCasuale = Math.floor(Math.random() * 6) + 1; 
    numeroUtente.push(numeroCasuale);

    let numeroCasualeComputer = Math.floor(Math.random() * 6) + 1; 
    numeroComputer.push(numeroCasualeComputer);

    if(numeroUtente > numeroComputer){
        vincitore.innerHTML = ("Vince l'utente");
    }else if(numeroUtente < numeroComputer){
        vincitore.innerHTML = ("Vince il computer");
    }else{
        vincitore.innerHTML = ("Pareggio");
    }

};

numeroU.innerHTML = (`Numero utente: ${numeroUtente}`);

numeroC.innerHTML = (`Numero computer: ${numeroComputer}`);