/*let listaMail = ['mario@gmail.com', 'giovanni@gmail.com', 'barbara@hotmail.it', 'susan@hotmail.it'];

let richiestaMail = document.getElementById('email');

let accesso = document.getElementById('accesso');

let consentito = false;

for(let i = 0; i<listaMail.length;i++){

    const email = listaMail[i];

    if(email == richiestaMail){
        consentito = true;
    }
};

if(consentito){
    console.log('Accesso Consentito');
}else{
    console.log('Accesso Negato');
};*/

let listaMail = ['mario@gmail.com', 'giovanni@gmail.com', 'barbara@hotmail.it', 'susan@hotmail.it'];

let richiestaMail = document.getElementById('email');

let accesso = document.getElementById('accesso');

const domButton = document.querySelector('#leggiForm');

domButton.addEventListener('click', 
    function (){

        let consentito = false;

        const email = richiestaMail.value;

        for(let i = 0; i<listaMail.length;i++){

            const mail = listaMail[i];
        
            if(mail == email){
                consentito = true;
            }
        };
        
        if(consentito){
            accesso.innerHTML = ('Accesso Consentito');
        }else{
            accesso.innerHTML = ('Accesso Negato');
        };

    }
);

const domReset = document.querySelector('#resettaForm');

domReset.addEventListener('click', 
    function() {  
        richiestaMail.value = "";  
    } 
);






    


