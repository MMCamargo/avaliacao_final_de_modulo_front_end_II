function submitLogin(email: HTMLInputElement, password: HTMLInputElement): void {
    const validationReturn = validateLogin(email, password)

    if (validationReturn.confirm) {
        const loggedUser = {
            id: validationReturn.user?.id,
            name: validationReturn.user?.name,
            email: validationReturn.user?.email,
            notes: validationReturn.user?.notes
        }

        setItem('loggedUser', loggedUser)

        loginForm.reset()

        setTimeout(() => {
            location.href = 'home.html'
        }, 500);
    } else {
        loginForm.reset()
    }
}

function validateLogin(email: HTMLInputElement, password: HTMLInputElement): { confirm: boolean, user?: User } {
    const user: User | undefined = usersList.find((user) => user.email === email.value && user.password === password.value)

    if (!email.value || !password.value) {
        showAlertLogin('text-danger', 'Por favor, preencha todos os campos.')

        return { confirm: false }
    }

    if (!user) {
        showAlertLogin('text-danger', 'Usuário não encontrado.')

        return { confirm: false }
    }

    return {
        confirm: true,
        user: user
    }
}

function showAlertLogin(color: string, msg: string): void {
    loginAlert.style.display = 'block'

    loginAlert.classList.add(color)
    loginAlert.innerText = msg

    setTimeout(() => {
        loginAlert.classList.remove(color)
        loginAlert.innerText = ''

        loginAlert.style.display = 'none'
    }, 2000);
}