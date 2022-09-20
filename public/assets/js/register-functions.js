"use strict";
const emailRegEx = /^([a-z]|[A-Z]){1}([a-z]|[A-Z]|[0-9]|[_])+([@]){1}(([g][m][a][i][l]){1}|([y][a][h][o][o]){1}|([o][u][t][l][o][o][k]){1}|([h][o][t][m][a][i][l]){1}){1}([.]){1}(([c][o][m]){1}|([c][o][m][.][b][r]){1})$/;
const passwordRegEx = /^([a-z]|[A-Z]|[0-9]|[\S]){8,}$/;
function validateRegister(name, email, password, repassword) {
    if (!name.value || !email.value || !password.value || !repassword.value) {
        showAlertRegister('text-danger', 'Por favor, preencha todos os campos.');
        return false;
    }
    if (!email.value.match(emailRegEx)) {
        showAlertRegister('text-danger', 'Por favor, digite um e-mail válido.');
        return false;
    }
    if (usersList.some((userEmail) => userEmail.email === email.value)) {
        showAlertRegister('text-danger', 'Este endereço de e-mail já foi utilizado.');
        registerForm.reset();
        return false;
    }
    if (!password.value.match(passwordRegEx)) {
        showAlertRegister('text-danger', 'Por favor, digite uma senha válida.');
        registerForm.reset();
        return false;
    }
    if (password.value !== repassword.value) {
        showAlertRegister('text-danger', 'Senhas não conferem.');
        registerForm.reset();
        return false;
    }
    showAlertRegister('text-success', 'Cadastro efetuado com sucesso!');
    return true;
}
function submitRegister(name, email, password) {
    const id = idGenerator();
    const newUser = {
        id,
        name: name.value,
        email: email.value,
        password: password.value,
        notes: [],
    };
    const loggedUser = {
        id: newUser.id,
        name: name.value,
        email: email.value,
        notes: []
    };
    usersList.push(newUser);
    setItem('usersList', usersList);
    setItem('loggedUser', loggedUser);
    registerForm.reset();
    setTimeout(() => {
        location.href = 'login.html';
    }, 2000);
}
function showAlertRegister(color, msg) {
    registerAlert.style.display = 'block';
    registerAlert.classList.add(color);
    registerAlert.innerText = msg;
    setTimeout(() => {
        registerAlert.classList.remove(color);
        registerAlert.innerText = '';
        registerAlert.style.display = 'none';
    }, 2000);
}
