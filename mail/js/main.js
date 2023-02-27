let listaMail = ['mario@gmail.com', 'giovanni@gmail.com', 'barbara@hotmail.it', 'susan@hotmail.it'];

let richiestaMail = prompt('Inserisci la tua email');

let accesso = document.getElementById('accesso');

let email = listaMail;

email = false;

for(let i = 0; i<listaMail.length;i++){
    if(listaMail[i] = richiestaMail){
        email = true;
        console.log('Accesso consentito');
    }else{
        console.log('Accesso Negato');
    }
};














    


