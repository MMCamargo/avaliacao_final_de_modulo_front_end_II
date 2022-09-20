"use strict";
function showAlert(color, msg) {
    registerAlert.style.display = 'block';
    registerAlert.classList.add(color);
    registerAlert.innerText = msg;
    setTimeout(() => {
        registerAlert.classList.remove(color);
        registerAlert.innerText = '';
        registerAlert.style.display = 'none';
    }, 2000);
}
