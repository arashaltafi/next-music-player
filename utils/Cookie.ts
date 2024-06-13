const getCookieValue = (name: string): string | undefined => {
    const cookies = document.cookie.split(';')
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim()
        if (cookie.startsWith(name + '=')) {
            return cookie.substring(name.length + 1)
        }
    }
    return undefined
}

const setCookie = (name: string, value: string, days: number) => {
    let expires = ""
    if (days) {
        const date = new Date()
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000))
        expires = "; expires=" + date.toUTCString()
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/"
}

const removeCookie = (name: string) => {
    document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
}

const hasCookie = (name: string = ''): boolean => {
    return getCookieValue(name) !== undefined
}

export {
    getCookieValue,
    setCookie,
    removeCookie,
    hasCookie
}