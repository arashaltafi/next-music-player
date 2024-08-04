import LottieComponent from '@/components/LottieComponent'
import MusicVideoItem from '@/components/MusicVideoItem'
import PaginationComponent from '@/components/PaginationComponent'
import { GET_ALL_MUSIC_VIDEOS } from '@/graphql/graphql-queries'
import { getFromLocalStorage, LocalStorageRoutes } from '@/utils/LocalStorage'
import RoutesAddress from '@/utils/Routes'
import { MusicVideoType } from '@/utils/Type'
import { useQuery } from '@apollo/client'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { useParams, useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import ResponsivePagination from 'react-responsive-pagination';
import 'react-responsive-pagination/themes/classic.css';

const MusicVideos = () => {
    const [page, setPage] = useState(1)
    const router = useRouter()
    const params = useParams()
    const category = typeof (params?.category) === 'string' ? decodeURIComponent(params.category).replaceAll('-', ' ') : ''

    const { data } = useQuery(GET_ALL_MUSIC_VIDEOS, {
        variables: {
            name: category,
            page,
            page_size: 5
        }
    });

    const favMusicVideo = getFromLocalStorage(LocalStorageRoutes.MUSIC_VIDEO)

    const [favMusicVideoData, setFavMusicVideoData] = useState<MusicVideoType[]>(favMusicVideo?.splice((page - 1) * 5, 5) || [])

    useEffect(() => {
        if (category === 'موزیک ویدیوهای مورد علاقه') {
            setFavMusicVideoData(favMusicVideo?.splice((page - 1) * 5, 5) || [])
            router.push(RoutesAddress.MUSIC_VIDEO_FAV + "/" + "?page=" + page)
        } else {
            router.push(RoutesAddress.MUSIC_VIDEOS + "/" + category + "?page=" + page)
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
            router.push(RoutesAddress.MUSIC_VIDEO + "/" + click.replaceAll(' ', '-'))
        } else if (download) {

        } else if (play) {
            router.push(RoutesAddress.MUSIC_VIDEO + "/" + play.replaceAll(' ', '-'))
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
            <div 
                onClick={(e) => handleClick(e)} 
                className='-mb-52 mt-10 w-full flex flex-col gap-4 sm:gap-6 md:gap-8 lg:gap-12 items-center justify-start px-2 sm:px-4 md:px-6 lg:px-8'
            >
                <h2 className='self-start font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl my-4'>{category}:</h2>

                {
                    category === 'موزیک ویدیوهای مورد علاقه' ? (
                        favMusicVideoData?.map((item: any) => (
                            <MusicVideoItem
                                key={item.id}
                                id={item.id}
                                name={item.name}
                                singer={item.singer}
                                image={item.image}
                                path={item.src}
                                isFav={true}
                            />
                        ))
                    ) : (
                        data?.musicVideos?.data?.map((item: any) => (
                            <MusicVideoItem
                                key={item.id}
                                id={item.id}
                                name={item.name}
                                singer={item.singer}
                                image={item.image}
                                path={item.path}
                                isFav={false}
                            />
                        ))
                    )
                }

                {
                    favMusicVideoData === undefined || (favMusicVideoData?.length === 0 && category === 'موزیک ویدیوهای مورد علاقه') || (data?.length === 0) ? (
                        <div className='w-full h-[70vh] flex flex-col items-center justify-center'>
                            <LottieComponent src='anim5' />
                            <p className='text-sm sm:text-base md:text-lg'>هیچ موردی برای نمایش وجود ندارد</p>
                        </div>
                    ) : (
                        <></>
                    )
                }

                {
                    category === 'موزیک ویدیوهای مورد علاقه' ? (
                        favMusicVideo && favMusicVideo?.length > 5 && category === 'موزیک ویدیوهای مورد علاقه' && (
                            <div className='w-full flex items-center justify-center gap-8'>
                                <PaginationComponent
                                    currentPage={page}
                                    totalPage={Math.max(1, Math.ceil((favMusicVideo?.length || 0) / 5))}
                                    setPageNumber={(pageNumber) => setPage(pageNumber)}
                                />
                            </div>
                        )
                    ) : (
                        <div className='w-full flex items-center justify-center gap-8'>
                            <PaginationComponent
                                currentPage={page}
                                totalPage={Math.max(1, Math.ceil(data?.musicVideos?.total / 5))}
                                setPageNumber={(pageNumber) => setPage(pageNumber)}
                            />
                        </div>
                    )
                }
            </div>
        </>
    )
}

export default MusicVideos