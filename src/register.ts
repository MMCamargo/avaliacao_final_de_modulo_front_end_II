const registerForm = document.getElementById('register-form') as HTMLFormElement
const registerName = document.getElementById('register-name-input') as HTMLInputElement
const registerEmail = document.getElementById('register-email-input') as HTMLInputElement
const registerPassword = document.getElementById('register-password-input') as HTMLInputElement
const registerRepassword = document.getElementById('register-repassword-input') as HTMLInputElement
const registerBtn = document.getElementById('register-submit-btn') as HTMLButtonElement

registerBtn.addEventListener('click', (event) => {
    event.preventDefault()

    validateRegister(registerName, registerEmail, registerPassword, registerRepassword) ? submitRegister(registerName, registerEmail, registerPassword) : registerForm.reset()
})