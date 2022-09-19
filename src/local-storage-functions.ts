function setItem(key: string, item: any): void {
    localStorage.setItem(key, JSON.stringify(item))
}

function getItem(key: string): any {
    return JSON.parse(localStorage.getItem(key) || '[]')
}

function removeItem(key: string): void {
    localStorage.removeItem(key)
}