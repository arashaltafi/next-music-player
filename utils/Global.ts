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

const getDeviceSize = (): string => {
    if (typeof window !== 'undefined') {
        const width = window.innerWidth;
        if (width >= 0 && width < 300) return 'xm';
        if (width >= 300 && width < 480) return 'sm';
        if (width >= 480 && width < 640) return 'md';
        if (width >= 640 && width < 768) return 'lg';
        if (width >= 768 && width < 1024) return 'xl';
    }
    return 'xl';
}

export {
    scrollToId,
    convertSecondToTime,
    getDeviceSize
}