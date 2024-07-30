import React, { useEffect, useState } from 'react'
import MusicComponent from './MusicComponent'
import { MusicCategory } from '@/utils/Type'
import RoutesAddress from '@/utils/Routes'
import { useRouter } from 'next/navigation'
import { useQuery } from '@apollo/client'
import { GET_ALL_MUSIC, GET_FAV_MUSIC, GET_LAST_MUSIC, GET_SUGGESTED_MUSIC, GET_TOP_MUSIC } from '@/graphql/graphql-queries'

interface PropsType {
    category: MusicCategory,
    className?: string
}

const MusicsComponent = (props: PropsType) => {
    const router = useRouter()

    const [musics, setMusics] = useState<{
        id: number,
        name: string,
        path: string,
        image: string,
        singer: string,
    }[]>([])

    let requestType: any;
    
    if (props.category === MusicCategory.ALL) {
        requestType = GET_ALL_MUSIC
    } else if (props.category === MusicCategory.BEST) {
        requestType = GET_TOP_MUSIC
    } else if (props.category === MusicCategory.FAVORITE) {
        requestType = GET_FAV_MUSIC
    } else if (props.category === MusicCategory.NEW) {
        requestType = GET_LAST_MUSIC
    } else if (props.category === MusicCategory.SUGGESTED) {
        requestType = GET_SUGGESTED_MUSIC
    } else {
        requestType = GET_ALL_MUSIC
    }

    const { data } = useQuery(requestType);

    useEffect(() => {
        let response: any;

        if (props.category === MusicCategory.ALL) {
            response = data?.home?.allMusic
        } else if (props.category === MusicCategory.BEST) {
            response = data?.home?.topMusic
        } else if (props.category === MusicCategory.FAVORITE) {
            response = data?.home?.favMusic
        } else if (props.category === MusicCategory.NEW) {
            response = data?.home?.lastMusic
        } else if (props.category === MusicCategory.SUGGESTED) {
            response = data?.home?.suggestedMusic
        } else {
            response = data?.home?.allMusic
        }

        if (!data) return
        setMusics(response)
    }, [data])

    const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const target = e.target as HTMLDivElement
        const targetDiv = target.closest('div')
        if (!targetDiv) return

        const key = targetDiv.getAttribute('data-key')
        if (!key) return

        router.push(RoutesAddress.MUSIC + "/" + key.replaceAll(' ', '-'))
    }

    return (
        <div
            className={`w-full h-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-x-8 gap-y-6 overflow-hidden ${props.className ? props.className : '-mt-8'}`}
            onClick={(e) => handleClick(e)}
        >
            {
                musics?.map((item) => (
                    <MusicComponent
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        singer={item.singer}
                        path={item.path}
                        image={item.image}
                    />
                ))
            }
        </div>
    )
}

export default MusicsComponent