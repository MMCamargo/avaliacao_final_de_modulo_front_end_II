const loginForm = document.getElementById('login-form') as HTMLFormElement
const loginEmail = document.getElementById('login-email-input') as HTMLInputElement
const loginPassword = document.getElementById('login-password-input') as HTMLInputElement
const loginBtn = document.getElementById('login-submit-btn') as HTMLButtonElement

loginBtn.addEventListener('click', (event) => {
    event.preventDefault()

    submitLogin(loginEmail, loginPassword)
})