const registerName = document.getElementById('register-form__name-input') as HTMLInputElement
const registerEmail = document.getElementById('register-form__email-input') as HTMLInputElement
const registerPassword = document.getElementById('register-form__password-input') as HTMLInputElement
const registerRepassword = document.getElementById('register-form__repassword-input') as HTMLInputElement
const registerBtn = document.getElementById('register-form__submit-btn') as HTMLButtonElement

setItem('teste', 10)

const getItemConst = getItem('teste')

console.log(getItemConst)

registerBtn.addEventListener('click', (event) => {
    event.preventDefault()

    validateRegister(registerName, registerEmail, registerPassword, registerRepassword) ? submitRegister() : null
})