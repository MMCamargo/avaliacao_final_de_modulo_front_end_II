"use strict";
const registerName = document.getElementById('register-form__name-input');
const registerEmail = document.getElementById('register-form__email-input');
const registerPassword = document.getElementById('register-form__password-input');
const registerRepassword = document.getElementById('register-form__repassword-input');
const registerBtn = document.getElementById('register-form__submit-btn');
setItem('teste', 10);
const getItemConst = getItem('teste');
console.log(getItemConst);
registerBtn.addEventListener('click', (event) => {
    event.preventDefault();
    validateRegister(registerName, registerEmail, registerPassword, registerRepassword)
        ? submitRegister()
        : alert('Cadastro inválido!');
});
