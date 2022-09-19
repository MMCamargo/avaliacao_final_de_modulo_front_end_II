"use strict";
const loginForm = document.getElementById('login-form');
const loginEmail = document.getElementById('login-form__email-input');
const loginPassword = document.getElementById('login-form__password-input');
const loginBtn = document.getElementById('login-form__submit-btn');
loginBtn.addEventListener('click', (event) => {
    event.preventDefault();
    submitLogin(loginEmail, loginPassword);
});
