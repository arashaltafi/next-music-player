export const saveToLocalStorage = (key: string, value: any) => {
    if (typeof localStorage === 'undefined' || localStorage === null) return
    localStorage.setItem(key, JSON.stringify(value))
}

export const deleteIdFromStorage = (key: string, id: number) => {
    const list = getFromLocalStorage(key)
    const newList = list?.filter((item: any) => item.id !== id)
    saveToLocalStorage(key, newList)
}

export const isHaveIdInStorage = (key: string, id: number): boolean => {
    const list = getFromLocalStorage(key)
    return list?.find((item: any) => item.id === id) ? true : false
}

export const getFromLocalStorage = (key: string) => {
    if (typeof localStorage === 'undefined' || localStorage === null) return
    const value = localStorage.getItem(key)
        if (value) {
            const parsedValue = JSON.parse(value);
            return Array.isArray(parsedValue) ? parsedValue : [parsedValue];
        }
}

export const deleteFromLocalStorage = (key: string) => {
    if (typeof localStorage === 'undefined' || localStorage === null) return
    localStorage.removeItem(key)
}

export const deleteAllLocalStorage = () => {
    if (typeof localStorage === 'undefined' || localStorage === null) return
    localStorage.clear()
}

export const LocalStorageRoutes = {
    MUSIC: 'music',
    MUSIC_VIDEO: 'music_video',
}