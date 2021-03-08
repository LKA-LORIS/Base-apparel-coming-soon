window.addEventListener('load',function(){
    document.body.classList.remove('clean-transition');
    setTimeout(function() {  
        document.querySelector('.loader').classList.add("loaded");
    }, 1500);

    /* Déclaration variables */
    const formulaire = document.getElementById('form');
    const email = document.getElementById('email');
    const infosubmit = document.getElementById('info-text');

    /* Fonction de vérification avec regex */
    function validationEmail(email) {
        const result = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        return result.test(String(email).toLowerCase());
    }

    formulaire.addEventListener('submit', function(e) {
        e.preventDefault();
        const emailValue = email.value;

        /* Condition pour vérifier si l'email est valide */
        if(!validationEmail(emailValue)) {
            formulaire.classList.add('error');
            infosubmit.innerHTML = 'Please provide a valid email';
        } else {
            formulaire.classList.remove('error');
            email.value = '';
            infosubmit.classList.add('success');
            infosubmit.innerHTML = 'Your email address has been taken into account. Thank you';
        }
    })
  });