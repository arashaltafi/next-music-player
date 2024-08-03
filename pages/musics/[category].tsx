import LottieComponent from '@/components/LottieComponent'
import MusicItem from '@/components/MusicItem'
import PaginationComponent from '@/components/PaginationComponent'
import { GET_ALL_MUSICS } from '@/graphql/graphql-queries'
import { getFromLocalStorage, LocalStorageRoutes } from '@/utils/LocalStorage'
import RoutesAddress from '@/utils/Routes'
import {  MusicType } from '@/utils/Type'
import { useQuery } from '@apollo/client'
import Head from 'next/head'
import { useParams, useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import 'react-responsive-pagination/themes/classic.css';

const Musics = () => {
    const [page, setPage] = useState(1)
    const router = useRouter()
    const params = useParams()
    const category = typeof (params?.category) === 'string' ? decodeURIComponent(params.category).replaceAll('-', ' ') : ''

    const { data } = useQuery(GET_ALL_MUSICS, {
        variables: {
            name: category,
            page,
            page_size: 5
        }
    });

    console.log('1111111111111111', data)

    const favMusic = getFromLocalStorage(LocalStorageRoutes.MUSIC)

    const [favMusicData, setFavMusicData] = useState<MusicType[]>(favMusic?.splice((page - 1) * 5, 5) || [])

    useEffect(() => {
        if (category === 'موزیک های مورد علاقه') {
            setFavMusicData(favMusic?.splice((page - 1) * 5, 5) || [])
            router.push(RoutesAddress.MUSIC_FAV + "/" + "?page=" + page)
        } else {
            router.push(RoutesAddress.MUSICS + "/" + category + "?page=" + page)
        }
    }, [page])

    const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const target = e.target as HTMLDivElement
        const targetBtn = target.closest('button')
        if (!targetBtn) return

        const click = targetBtn.getAttribute('data-click')
        const download = targetBtn.getAttribute('data-download')
        const play = targetBtn.getAttribute('data-play')

        if (click) {
            router.push(RoutesAddress.MUSIC + "/" + click.replaceAll(' ', '-'))
        } else if (download) {

        } else if (play) {

        } else {
            return
        }
    }

    return (
        <>
            <Head>
                <title>{category} | موزیک آنلاین</title>
                <meta name="description" content={`${category} موزیک آنلاین`} />
            </Head>
            <div onClick={(e) => handleClick(e)} className='-mb-52 mt-10 w-full flex flex-col gap-4 sm:gap-6 md:gap-8 lg:gap-12 items-center justify-start px-2 sm:px-4 md:px-6 lg:px-8'>
                <h2 className='self-start font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl my-4'>{category}:</h2>

                {
                    category === 'موزیک های مورد علاقه' ? (
                        favMusicData?.map((item: any) => (
                            <MusicItem
                                key={item.id}
                                id={item.id}
                                name={item.name}
                                singer={item.singer}
                                image={item.img}
                                text={item.text}
                                path={item.src}
                                isFav={true}
                            />
                        ))
                    ) : (
                        data?.musics?.data?.map((item: any) => (
                            <MusicItem
                                key={item.id}
                                id={item.id}
                                name={item.name}
                                singer={item.singer}
                                image={item.image}
                                text={item.text}
                                path={item.path}
                                isFav={false}
                            />
                        ))
                    )
                }

                {
                    favMusicData === undefined || (favMusicData?.length === 0 && category === 'موزیک های مورد علاقه') || (data?.length === 0) ? (
                        <div className='w-full h-[70vh] flex flex-col items-center justify-center'>
                            <LottieComponent src='anim5' />
                            <p className='text-sm sm:text-base md:text-lg'>هیچ موردی برای نمایش وجود ندارد</p>
                        </div>
                    ) : (
                        <></>
                    )
                }

                {
                    category === 'موزیک های مورد علاقه' ? (
                        favMusic && favMusic?.length > 5 && category === 'موزیک های مورد علاقه' && (
                            <div className='w-full flex items-center justify-center gap-8'>
                                <PaginationComponent
                                    currentPage={page}
                                    totalPage={Math.max(1, Math.ceil((favMusic?.length || 0) / 5))}
                                    setPageNumber={(pageNumber) => setPage(pageNumber)}
                                />
                            </div>
                        )
                    ) : (
                        <div className='w-full flex items-center justify-center gap-8'>
                            <PaginationComponent
                                currentPage={page}
                                totalPage={Math.max(1, Math.ceil(data?.musics?.total / 5))}
                                setPageNumber={(pageNumber) => setPage(pageNumber)}
                            />
                        </div>
                    )
                }
            </div>
        </>
    )
}

export default Musics