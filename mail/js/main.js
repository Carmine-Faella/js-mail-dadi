let listaMail = ['mario@gmail.com', 'giovanni@gmail.com', 'barbara@hotmail.it', 'susan@hotmail.it'];

let richiestaMail = prompt('Inserisci la tua email');

let accesso = document.getElementById('accesso');

let i = 0;


for(;i < listaMail.length; ++i){
    if(listaMail[i] !== richiestaMail){
        accesso.innerHTML = ('Non sei entrato');
    }else if(listaMail[i] == richiestaMail){
        accesso.innerHTML = ('Sei entrato');
    }
};







    


