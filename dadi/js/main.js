const numeroUtente = [];

const numeroComputer = [];

for (let i = 0; i < 1; i++) {

    let numeroCasuale = Math.floor(Math.random() * 6) + 1; 
    numeroUtente.push(numeroCasuale);

    let numeroCasualeComputer = Math.floor(Math.random() * 6) + 1; 
    numeroComputer.push(numeroCasualeComputer);

    if(numeroUtente > numeroComputer){
        alert("Vince l'utente");
    }else{
        alert('Vince il Computer')
    }

}

console.log(numeroUtente)

console.log(numeroComputer)