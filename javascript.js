const form = document.querySelector('#myForm');
const password = document.querySelector('#password');
const confirm_password = document.querySelector('#confirm_password');

form.addEventListener('submit', (event) => {
    if(!isValidPassword(password.value, confirm_password.value)) {
        event.preventDefault();
        password.setCustomValidity('Passwords do not match!');
        confirm_password.setCustomValidity('Passwords do not match!');
        /*cannot submit form after correcting both passwords...*/
    }
});

function isValidPassword(password, confirm_password) {
    if (password !== confirm_password) {
        console.log('PASSWORD does not match!');
        return false;
    }
    return true;
}