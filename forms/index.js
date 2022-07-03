document.querySelector('#register-button').addEventListener('click', (event) => {
    let name = document.querySelector('#name');
    let email = document.querySelector('#email');
    let password = document.querySelector('#password');
    let password_confirmation = document.querySelector('#password-confirmation');
    let error = document.querySelector('#register-form .error');

    if(!validate(name.value.trim()!=='', 'name field is required', event)) return;
    if(!validate(email.value.trim()!=='', 'email field is required', event)) return;
    if(!validate(validateEmail(email.value), 'Invalid email format', event)) return;
    if(!validate(password.value.trim()!=='', 'Password field is required', event)) return;
    if(!validate(password_confirmation.value.trim()!=='', 'Password confirmation field is required', event)) return;
    if(!validate(password.value.trim().length>6, 'Password length should contain more than 6 characters', event)) return;
    if(!validate(password.value.trim()===password_confirmation.value.trim(), 'Password fields should match each others', event)) return;

    error.style.display = 'none';
    
    event.preventDefault();

    // Use ajax call
});

function validate(condition, error, event) {
    if(!condition) {
        let errorElement = document.querySelector('#register-form .error');
        errorElement.textContent = error;
        errorElement.style.display = 'block';
        event.preventDefault();

        return false;
    }

    return true;
}

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}