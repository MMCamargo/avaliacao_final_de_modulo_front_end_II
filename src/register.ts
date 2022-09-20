const registerForm = document.getElementById('register-form') as HTMLFormElement
const registerAlert = document.getElementById('register-alert') as HTMLParagraphElement
const registerName = document.getElementById('register-name-input') as HTMLInputElement
const registerEmail = document.getElementById('register-email-input') as HTMLInputElement
const emailInfo = document.getElementById('email-info') as HTMLParagraphElement
const registerPassword = document.getElementById('register-password-input') as HTMLInputElement
const passwordInfo = document.getElementById('password-info') as HTMLParagraphElement
const registerRepassword = document.getElementById('register-repassword-input') as HTMLInputElement
const registerBtn = document.getElementById('register-submit-btn') as HTMLButtonElement

registerEmail.addEventListener('focus', () => emailInfo.style.display = 'block')
registerEmail.addEventListener('focusout', () => emailInfo.style.display = 'none')

registerPassword.addEventListener('focus', () => passwordInfo.style.display = 'block')
registerPassword.addEventListener('focusout', () => passwordInfo.style.display = 'none')

registerBtn.addEventListener('click', (event) => {
    event.preventDefault()

    validateRegister(registerName, registerEmail, registerPassword, registerRepassword) ? submitRegister(registerName, registerEmail, registerPassword) : null
})