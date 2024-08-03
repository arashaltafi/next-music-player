import { GetServerSideProps } from 'next'
import React from 'react'
import Head from 'next/head'
import MusicVideosComponent from '@/components/MusicVideosComponent'
import MusicsComponent from '@/components/MusicsComponent'
import { MusicCategory, MusicVideoCategory } from '@/utils/Type'
import DividerImage from '@/components/DividerImage'
import SingerImage from '@/components/SingerImage'
import RoutesAddress from '@/utils/Routes'
import HeadOfTitle from '@/components/HeadOfTitle'
import { useRouter } from 'next/router'
import { GET_CATEGORY } from '@/graphql/graphql-queries'
import { useQuery } from '@apollo/client'
import MusicComponent from '@/components/MusicComponent'
import MusicVideoComponent from '@/components/MusicVideoComponent'

const Category = () => {
    const router = useRouter()
    const category = typeof (router.query.category) === 'string' ? decodeURIComponent(router.query.category).replaceAll('-', ' ') : ''

    const { data } = useQuery(GET_CATEGORY, {
        variables: {
            category
        }
    });

    const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, isVideo: boolean) => {
        const target = e.target as HTMLDivElement
        const targetDiv = target.closest('div')
        if (!targetDiv) return

        const key = targetDiv.getAttribute('data-key')
        if (!key) return

        if (isVideo) {
            router.push(RoutesAddress.MUSIC_VIDEO + "/" + key.replaceAll(' ', '-'))
        } else {
            router.push(RoutesAddress.MUSIC + "/" + key.replaceAll(' ', '-'))
        }
    }

    return (
        <>
            <Head>
                <title>خواننده: {category} | موزیک آنلاین</title>
                <meta name="description" content={`دسته بندی ${category} موزیک آنلاین`} />
            </Head>
            <div className='mt-8 w-full flex flex-col gap-4 sm:gap-6 md:gap-8 items-center justify-start px-2 sm:px-4 md:px-6 lg:px-8'>
                <SingerImage
                    name={category}
                    src={data?.category?.image}
                />
                <h3 className='self-start font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl'>دسته بندی:</h3>
                <h2 className='mb-8 self-start font-medium text-sm sm:text-base md:text-lg lg:text-xl'>{data?.category?.type}</h2>

                <HeadOfTitle fileType='music' route={RoutesAddress.MUSIC_ALL} title="موزیک ها:" />
                <div
                    className={`w-full h-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-x-8 gap-y-6 overflow-hidden mt-0`}
                    onClick={(e) => handleClick(e, false)}
                >
                    {
                        data?.category?.music?.map((item: any) => (
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

                <DividerImage src='/images/music-divider-1.png' className='my-12 sm:my-16 md:my-20' />

                <HeadOfTitle fileType='video' route={RoutesAddress.MUSIC_VIDEO_ALL} title="موزیک ویدیوها:" />
                <div
                    className={`w-full h-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-x-8 gap-y-6 overflow-hidden mt-0`}
                    onClick={(e) => handleClick(e, true)}
                >
                    {
                        data?.category?.musicVideo?.map((item: any) => (
                            <MusicVideoComponent
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
            </div>
        </>
    )
}

export default Category