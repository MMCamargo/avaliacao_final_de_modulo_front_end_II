"use strict";
function validateRegister(name, email, password, repassword) {
    !name.value || !email.value || !password.value || !repassword.value
        ? console.log('não')
        : console.log('sim');
    return true;
}
function submitRegister() {
}
