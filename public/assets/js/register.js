"use strict";
const registerForm = document.getElementById('register-form');
const registerName = document.getElementById('register-name-input');
const registerEmail = document.getElementById('register-email-input');
const registerPassword = document.getElementById('register-password-input');
const registerRepassword = document.getElementById('register-repassword-input');
const registerBtn = document.getElementById('register-submit-btn');
registerBtn.addEventListener('click', (event) => {
    event.preventDefault();
    validateRegister(registerName, registerEmail, registerPassword, registerRepassword) ? submitRegister(registerName, registerEmail, registerPassword) : registerForm.reset();
});
