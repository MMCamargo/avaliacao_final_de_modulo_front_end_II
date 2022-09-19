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
        }, 1000);
    } else {
        loginForm.reset()
    }
}

function validateLogin(email: HTMLInputElement, password: HTMLInputElement): { confirm: boolean, user?: User } {
    const user: User | undefined = usersList.find((user) => user.email === email.value && user.password === password.value)

    if (!email.value || !password.value) {
        alert('Campos vazios')

        return { confirm: false }
    }

    if (!user) {
        alert('Usuário não encontrado')

        return { confirm: false }
    }

    return {
        confirm: true,
        user: user
    }
}