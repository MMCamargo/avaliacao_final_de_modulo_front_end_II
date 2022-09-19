"use strict";
function quit() {
    location.href = 'login.html';
}
function addNotes(title, description) {
    if (!title.value || !description.value)
        return;
    const note = {
        id: idGenerator(),
        title: title.value,
        description: description.value
    };
    loggedUserData.notes.push(note);
    updateLoggedUserData(loggedUserData);
    loadNotes(note);
}
function loadNotes(note) {
    const tableBody = document.getElementById('table-body');
    const tableRow = document.createElement('tr');
    tableRow.setAttribute('id', note.id);
    const noteTitle = document.createElement('td');
    noteTitle.innerText = note.title;
    noteTitle.style.wordBreak = 'break-all';
    const noteDescription = document.createElement('td');
    noteDescription.innerText = note.description;
    noteDescription.style.wordBreak = 'break-all';
    const editBtn = document.createElement('button');
    editBtn.addEventListener('click', () => editNotes(note));
    editBtn.setAttribute('data-bs-toggle', 'modal');
    editBtn.setAttribute('data-bs-target', '#modal');
    editBtn.classList.add('btn');
    editBtn.classList.add('btn-primary');
    editBtn.innerText = 'Editar';
    const deleteBtn = document.createElement('button');
    deleteBtn.addEventListener('click', () => deleteNotes(note.id));
    deleteBtn.classList.add('btn');
    deleteBtn.classList.add('btn-danger');
    deleteBtn.innerText = 'Apagar';
    const noteActions = document.createElement('td');
    noteActions.classList.add('d-flex');
    noteActions.classList.add('flex-wrap');
    noteActions.classList.add('justify-content-center');
    noteActions.classList.add('gap-3');
    noteActions.appendChild(editBtn);
    noteActions.appendChild(deleteBtn);
    tableRow.appendChild(noteTitle);
    tableRow.appendChild(noteDescription);
    tableRow.appendChild(noteActions);
    tableBody.appendChild(tableRow);
}
function editNotes(note) {
    modalTitle.innerText = 'Editar recado';
    titleInput.value = note.title;
    descriptionInput.value = note.description;
    modalAddBtn.style.display = 'none';
    modalEditBtn.style.display = 'block';
    modalEditBtn.addEventListener('click', () => updateNotes(note));
}
function updateNotes(note) {
    const noteIndex = loggedUserData.notes.findIndex((noteAux) => note.id === noteAux.id);
    const editedNote = loggedUserData.notes[noteIndex];
    const editedNoteRow = document.getElementById(note.id);
    editedNote.title = titleInput.value;
    editedNote.description = descriptionInput.value;
    loggedUserData.notes[noteIndex] = editedNote;
    updateLoggedUserData(loggedUserData);
    loggedUserData.notes.forEach((note) => loadNotes(note));
    editedNoteRow.remove();
}
function deleteNotes(id) {
    const noteRow = document.getElementById(id);
    const noteIndex = loggedUserData.notes.findIndex((note) => note.id === id);
    noteRow.remove();
    loggedUserData.notes.splice(noteIndex, 1);
    updateLoggedUserData(loggedUserData);
}
function updateLoggedUserData(updatedData) {
    const userIndex = usersList.findIndex((user) => user.email === loggedUserData.email);
    const user = usersList[userIndex];
    user.notes = updatedData.notes;
    usersList[userIndex] = user;
    setItem('loggedUser', loggedUserData);
    setItem('usersList', usersList);
}
