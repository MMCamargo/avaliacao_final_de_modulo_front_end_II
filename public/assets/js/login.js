"use strict";
if (getItem('loggedUser').length !== 0)
    location.href = 'home.html';
const loginForm = document.getElementById('login-form');
const loginAlert = document.getElementById('login-alert');
const loginEmail = document.getElementById('login-email-input');
const loginPassword = document.getElementById('login-password-input');
const loginBtn = document.getElementById('login-submit-btn');
loginBtn.addEventListener('click', (event) => {
    event.preventDefault();
    submitLogin(loginEmail, loginPassword);
});
