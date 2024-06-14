const scrollToId = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

const convertSecondToTime = (second: number) => {
    const hours = Math.floor(second / 3600)
    const minutes = Math.floor((second % 3600) / 60)
    const seconds = Math.floor(second % 60)
    const padToTwoDigits = (num: number): string => num.toString().padStart(2, '0');

    if (hours > 0) {
        return `${padToTwoDigits(hours)}:${padToTwoDigits(minutes)}:${padToTwoDigits(seconds)}`;
    } else if (minutes > 0) {
        return `${padToTwoDigits(minutes)}:${padToTwoDigits(seconds)}`;
    } else {
        return `00:${padToTwoDigits(seconds)}`;
    }
}

export {
    scrollToId,
    convertSecondToTime
}