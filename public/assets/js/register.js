"use strict";
const registerForm = document.getElementById('register-form');
const registerAlert = document.getElementById('register-alert');
const registerName = document.getElementById('register-name-input');
const registerEmail = document.getElementById('register-email-input');
const emailInfo = document.getElementById('email-info');
const registerPassword = document.getElementById('register-password-input');
const passwordInfo = document.getElementById('password-info');
const registerRepassword = document.getElementById('register-repassword-input');
const registerBtn = document.getElementById('register-submit-btn');
registerEmail.addEventListener('focus', () => emailInfo.style.display = 'block');
registerEmail.addEventListener('focusout', () => emailInfo.style.display = 'none');
registerPassword.addEventListener('focus', () => passwordInfo.style.display = 'block');
registerPassword.addEventListener('focusout', () => passwordInfo.style.display = 'none');
registerBtn.addEventListener('click', (event) => {
    event.preventDefault();
    validateRegister(registerName, registerEmail, registerPassword, registerRepassword) ? submitRegister(registerName, registerEmail, registerPassword) : null;
});
