export enum MusicCategory {
    ALL = 'All',
    BEST = 'Best',
    NEW = 'New',
    SUGGESTED = 'Suggested',
    FAVORITE = 'Favorite'
}

export enum MusicVideoCategory {
    ALL = 'All',
    BEST = 'Best',
    NEW = 'New',
    SUGGESTED = 'Suggested',
    FAVORITE = 'Favorite'
}

export type SingerType = {
    id: number
    name: string,
    image?: string,
    isFav?: boolean
}

export type MusicType = {
    id: number,
    name: string
    path: string
    image: string
    singer: string,
    text: string,
    isFav?: boolean
}

export type MusicVideoType = {
    id: number,
    name: string
    path: string
    image: string
    singer: string,
    isFav?: boolean
}

export type SingersType = {
    id: number,
    name: string,
    image: string,
}[]