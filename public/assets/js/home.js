"use strict";
if (getItem('loggedUser').length === 0)
    quit();
const loggedUserData = getItem('loggedUser');
document.addEventListener('DOMContentLoaded', () => {
    loggedUserData.notes.forEach((note) => loadNotes(note));
});
const username = document.getElementById('username');
const logoutBtn = document.getElementById('logout-btn');
const addNotesBtn = document.getElementById('add-notes-btn');
const modalTitle = document.getElementById('modal-label');
const titleInput = document.getElementById('modal-title-input');
const descriptionInput = document.getElementById('modal-description-input');
const modalAddBtn = document.getElementById('modal-add-btn');
const modalEditBtn = document.getElementById('modal-edit-btn');
username.innerText = `${loggedUserData.name}`;
logoutBtn.addEventListener('click', () => {
    removeItem('loggedUser');
    quit();
});
addNotesBtn.addEventListener('click', () => {
    modalTitle.innerText = 'Novo recado';
    titleInput.value = '';
    descriptionInput.value = '';
    modalAddBtn.style.display = 'block';
    modalEditBtn.style.display = 'none';
});
modalAddBtn.addEventListener('click', () => addNotes(titleInput, descriptionInput));
