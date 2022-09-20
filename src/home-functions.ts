function quit(): void {
    location.href = 'login.html'
}

function addNotes(title: HTMLInputElement, description: HTMLInputElement): void {
    if (!title.value || !description.value) return

    const note: Notes = {
        id: idGenerator(),
        title: title.value,
        description: description.value
    }

    loggedUserData.notes.push(note)

    updateLoggedUserData(loggedUserData)

    loadNotes(note)
}

function loadNotes(note: Notes): void {
    const tableBody = document.getElementById('table-body') as HTMLTableSectionElement

    const tableRow = document.createElement('tr') as HTMLTableRowElement
    tableRow.setAttribute('id', note.id)

    const noteTitle = document.createElement('td') as HTMLTableCellElement
    noteTitle.innerText = note.title
    noteTitle.style.wordBreak = 'break-all'

    const noteDescription = document.createElement('td') as HTMLTableCellElement
    noteDescription.innerText = note.description
    noteDescription.style.wordBreak = 'break-all'

    const editBtn = document.createElement('button') as HTMLButtonElement
    editBtn.addEventListener('click', () => editNotes(note))
    editBtn.setAttribute('data-bs-toggle', 'modal')
    editBtn.setAttribute('data-bs-target', '#modal')
    editBtn.classList.add('btn')
    editBtn.classList.add('btn-primary')
    editBtn.innerText = 'Editar'

    const deleteBtn = document.createElement('button') as HTMLButtonElement
    deleteBtn.addEventListener('click', () => deleteNotes(note.id))
    deleteBtn.classList.add('btn')
    deleteBtn.classList.add('btn-danger')
    deleteBtn.innerText = 'Apagar'

    const noteActions = document.createElement('td') as HTMLTableCellElement
    noteActions.classList.add('d-flex')
    noteActions.classList.add('flex-wrap')
    noteActions.classList.add('justify-content-center')
    noteActions.classList.add('gap-3')

    noteActions.appendChild(editBtn)
    noteActions.appendChild(deleteBtn)

    tableRow.appendChild(noteTitle)
    tableRow.appendChild(noteDescription)
    tableRow.appendChild(noteActions)

    tableBody.appendChild(tableRow)
}

function editNotes(note: Notes): void {
    modalTitle.innerText = 'Editar recado'

    titleInput.value = note.title
    descriptionInput.value = note.description

    modalAddBtn.style.display = 'none'

    modalEditBtn.style.display = 'block'

    modalEditBtn.addEventListener('click', () => {
        updateNotes(note)
    }, { once: true })

    // modalCancelBtn.addEventListener('click', () => {
    //     modalEditBtn.removeEventListener('click', updateNotes)
    // })
}

function updateNotes(note: Notes): void {
    const noteIndex = loggedUserData.notes.findIndex((noteAux) => note.id === noteAux.id)

    const editedNote = loggedUserData.notes[noteIndex]

    editedNote.title = titleInput.value
    editedNote.description = descriptionInput.value

    loggedUserData.notes[noteIndex] = editedNote

    updateLoggedUserData(loggedUserData)

    const tableBodyOld = document.getElementById('table-body') as HTMLTableSectionElement
    const tableBodyNew = document.createElement('tbody') as HTMLTableSectionElement
    tableBodyNew.setAttribute('id', 'table-body')

    table.removeChild(tableBodyOld)
    table.appendChild(tableBodyNew)

    loggedUserData.notes.forEach((noteAux) => loadNotes(noteAux))
}

function deleteNotes(id: string): void {
    const noteRow = document.getElementById(id) as HTMLTableRowElement
    const noteIndex = loggedUserData.notes.findIndex((note) => note.id === id)

    noteRow.remove()

    loggedUserData.notes.splice(noteIndex, 1)

    updateLoggedUserData(loggedUserData)
}

function updateLoggedUserData(updatedData: LoggedUserData): void {
    const userIndex = usersList.findIndex((user) => user.email === loggedUserData.email)

    const user = usersList[userIndex]

    user.notes = updatedData.notes

    usersList[userIndex] = user

    setItem('loggedUser', loggedUserData)

    setItem('usersList', usersList)
}