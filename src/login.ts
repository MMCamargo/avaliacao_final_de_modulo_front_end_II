const loginForm = document.getElementById('login-form') as HTMLFormElement
const loginEmail = document.getElementById('login-form__email-input') as HTMLInputElement
const loginPassword = document.getElementById('login-form__password-input') as HTMLInputElement
const loginBtn = document.getElementById('login-form__submit-btn') as HTMLButtonElement

loginBtn.addEventListener('click', (event) => {
    event.preventDefault()

    submitLogin(loginEmail, loginPassword)
})