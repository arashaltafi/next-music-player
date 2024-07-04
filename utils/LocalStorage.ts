export const saveToLocalStorage = (key: string, value: any) => {
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
    const value = localStorage.getItem(key)
    if (value) {
        const parsedValue = JSON.parse(value);
        return Array.isArray(parsedValue) ? parsedValue : [parsedValue];
    }
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