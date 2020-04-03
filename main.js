window.addEventListener('load',function(){
    setTimeout(function() {
        document.querySelector('.loader').classList.add("loaded");
    }, 1500);

    /* Déclaration variables */
    const formulaire = document.getElementById('form');
    const email = document.getElementById('email');
    const infosubmit = document.getElementById('info-text');
    /*const succesWord = document.getElementById('')*/
    /*const echecWord = document.getElementById('')*/

    /* Fonction de vérification avec regex*/
    function validationEmail(email) {
        var result = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        return result.test(String(email).toLowerCase());
    }

    formulaire.addEventListener('submit', function(e) {
        e.preventDefault();
        var emailValue = email.value;

        /* Condition pour vérifier si l'email est valide */
        if(!validationEmail(emailValue)) {
            formulaire.classList.add('error');
            infosubmit.innerHTML = 'Please provide a valid email';
            /* Ajout du word echec*/
        } else {
            formulaire.classList.remove('error');
            formulaire.classList.add('disable');
            email.value = '';
            email.disabled = true;
            infosubmit.classList.add('success');
            infosubmit.innerHTML = 'Your email address has been taken into account. Thank you';
            
            /* Ajout du word success*/
        }
    })
  });