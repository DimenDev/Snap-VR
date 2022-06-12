// Enabled buttons once form is ok

const form = document.getElementById('signupform');

form.addEventListener('input', (event) => {

    const button = document.getElementById("signupbutton");

    if (form.checkValidity()) {
        
        button.classList.remove('disabled');
    }

    else {
        button.classList.add('disabled');
    }
})


