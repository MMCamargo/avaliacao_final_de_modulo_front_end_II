interface Notes {
    id: string,
    title: string,
    description: string
}

interface User {
    id: string,
    name: string,
    email?: string,
    password?: string,
    notes: Array<Notes>
}

interface LoggedUserData {
    id: string,
    name: string,
    email: string,
    notes: Array<Notes>
}

function idGenerator(): string {
    const time = new Date().getTime();
    return Math.floor((1 + Math.random()) * time)
        .toString(16)
        .substring(1);
}

!getItem('usersList') ? setItem('usersList', []) : null

const usersList: Array<User> = getItem('usersList')