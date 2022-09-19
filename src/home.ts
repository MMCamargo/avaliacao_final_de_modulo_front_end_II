if (getItem('loggedUser').length === 0) quit()

const loggedUserData: LoggedUserData = getItem('loggedUser')

document.addEventListener('DOMContentLoaded', () => {
    loggedUserData.notes.forEach((note) => loadNotes(note))
})

const username = document.getElementById('username') as HTMLParagraphElement
const logoutBtn = document.getElementById('logout-btn') as HTMLParagraphElement
const addNotesBtn = document.getElementById('add-notes-btn') as HTMLButtonElement
const modalTitle = document.getElementById('modal-label') as HTMLHeadingElement
const titleInput = document.getElementById('modal-title-input') as HTMLInputElement
const descriptionInput = document.getElementById('modal-description-input') as HTMLInputElement
const modalAddBtn = document.getElementById('modal-add-btn') as HTMLButtonElement
const modalEditBtn = document.getElementById('modal-edit-btn') as HTMLButtonElement

username.innerText = `${loggedUserData.name}`

logoutBtn.addEventListener('click', () => {
    removeItem('loggedUser')

    quit()
})

addNotesBtn.addEventListener('click', () => {
    modalTitle.innerText = 'Novo recado'

    titleInput.value = ''
    descriptionInput.value = ''

    modalAddBtn.style.display = 'block'
    modalEditBtn.style.display = 'none'
})

modalAddBtn.addEventListener('click', () => addNotes(titleInput, descriptionInput))