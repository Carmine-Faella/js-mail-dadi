let listaMail = ['mario@gmail.com', 'giovanni@gmail.com', 'barbara@hotmail.it', 'susan@hotmail.it'];

let richiestaMail = prompt('Inserisci la tua email');

let accesso = document.getElementById('accesso');

for(let i = 0; i < listaMail.length; ++i){
    if(listaMail[i] == richiestaMail){
        console.log('Sei entrato');
    };
};
    


