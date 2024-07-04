export const saveToLocalStorage = (key: string, value: any) => {
    localStorage.setItem(key, JSON.stringify(value))
}

export const getFromLocalStorage = (key: string) => {
    const value = localStorage.getItem(key)
    return value ? JSON.parse(value) : null
}

export const deleteFromLocalStorage = (key: string) => {
    localStorage.removeItem(key)
}

export const deleteAllLocalStorage = () => {
    localStorage.clear()
}

export const LocalStorageRoutes = {
    MUSIC: 'music',
    MUSIC_VIDEO: 'music_video',
}