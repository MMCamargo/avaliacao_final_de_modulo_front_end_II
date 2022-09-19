if (getItem('loggedUser').length === 0) quit()

const loggedUserData: LoggedUserData = getItem('loggedUser')

document.addEventListener('DOMContentLoaded', () => {
    loggedUserData.notes.forEach((note) => loadNotes(note))
})

const username = document.getElementById('username') as HTMLParagraphElement
const logoutBtn = document.querySelector('.logout') as HTMLParagraphElement
const addNotesBtn = document.getElementById('add-notes-btn') as HTMLButtonElement
const modalTitle = document.getElementById('createNotesLabel') as HTMLTitleElement
const titleInput = document.getElementById('modal-title-input') as HTMLInputElement
const descriptionInput = document.getElementById('modal-description-input') as HTMLInputElement
const sendBtn = document.getElementById('modal-send-btn') as HTMLButtonElement
const sendEditBtn = document.getElementById('modal-edit-btn') as HTMLButtonElement

username.innerText = `${loggedUserData.name}`

logoutBtn.addEventListener('click', () => {
    removeItem('loggedUser')

    quit()
})

addNotesBtn.addEventListener('click', () => {
    modalTitle.innerText = 'Novo recado'

    titleInput.value = ''
    descriptionInput.value = ''

    sendBtn.style.display = 'block'
    sendEditBtn.style.display = 'none'
})

sendBtn.addEventListener('click', () => addNotes(titleInput, descriptionInput))