const registerForm = document.getElementById('register-form') as HTMLFormElement
const registerName = document.getElementById('register-form__name-input') as HTMLInputElement
const registerEmail = document.getElementById('register-form__email-input') as HTMLInputElement
const registerPassword = document.getElementById('register-form__password-input') as HTMLInputElement
const registerRepassword = document.getElementById('register-form__repassword-input') as HTMLInputElement
const registerBtn = document.getElementById('register-form__submit-btn') as HTMLButtonElement

registerBtn.addEventListener('click', (event) => {
    event.preventDefault()

    validateRegister(registerName, registerEmail, registerPassword, registerRepassword) ? submitRegister(registerName, registerEmail, registerPassword) : registerForm.reset()
})