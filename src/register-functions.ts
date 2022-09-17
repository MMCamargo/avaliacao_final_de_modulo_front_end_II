function validateRegister(name: HTMLInputElement, email: HTMLInputElement, password: HTMLInputElement, repassword: HTMLInputElement): Boolean {
    !name.value || !email.value || !password.value || !repassword.value ? alert() : null

    return true
}

function submitRegister(): void {

}