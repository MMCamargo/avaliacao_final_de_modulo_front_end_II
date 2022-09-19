"use strict";
const emailRegEx = /^([a-z]|[A-Z]){1}([a-z]|[A-Z]|[0-9]|[_])+([@]){1}(([g][m][a][i][l]){1}|([y][a][h][o][o]){1}|([o][u][t][l][o][o][k]){1}|([h][o][t][m][a][i][l]){1}){1}([.]){1}(([c][o][m]){1}|([c][o][m][.][b][r]){1})$/;
const passwordRegEx = /^([a-z]|[A-Z]|[0-9]|[\S]){8,}$/;
function validateRegister(name, email, password, repassword) {
    if (!name.value || !email.value || !password.value || !repassword.value) {
        alert('Campos vazios');
        return false;
    }
    if (!email.value.match(emailRegEx)) {
        alert('E-mail inválido');
        return false;
    }
    if (usersList.some((userEmail) => userEmail.email === email.value)) {
        alert('E-mail existente!');
        return false;
    }
    if (!password.value.match(passwordRegEx)) {
        alert('Senha inválida');
        return false;
    }
    if (password.value !== repassword.value) {
        alert('Senhas não conferem');
        return false;
    }
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
    usersList.push(newUser);
    setItem('usersList', usersList);
    setTimeout(() => {
        location.href = 'login.html';
    }, 750);
}
