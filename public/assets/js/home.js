"use strict";
if (getItem('loggedUser').length === 0)
    quit();
const loggedUserData = getItem('loggedUser');
document.addEventListener('DOMContentLoaded', () => {
    loggedUserData.notes.forEach((note) => loadNotes(note));
});
const username = document.getElementById('username');
const logoutBtn = document.querySelector('.logout');
const addNotesBtn = document.getElementById('add-notes-btn');
const modalTitle = document.getElementById('createNotesLabel');
const titleInput = document.getElementById('modal-title-input');
const descriptionInput = document.getElementById('modal-description-input');
const sendBtn = document.getElementById('modal-send-btn');
const sendEditBtn = document.getElementById('modal-edit-btn');
username.innerText = `${loggedUserData.name}`;
logoutBtn.addEventListener('click', () => {
    removeItem('loggedUser');
    quit();
});
addNotesBtn.addEventListener('click', () => {
    modalTitle.innerText = 'Novo recado';
    titleInput.value = '';
    descriptionInput.value = '';
    sendBtn.style.display = 'block';
    sendEditBtn.style.display = 'none';
});
sendBtn.addEventListener('click', () => addNotes(titleInput, descriptionInput));
