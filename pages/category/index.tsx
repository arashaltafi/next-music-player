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

interface PropsType {
    data: {
        category: string
    }
}

const Category = (props: PropsType) => {
    return (
        <>
            <Head>
                <title>خواننده: {props.data.category} | موزیک آنلاین</title>
                <meta name="description" content={`دسته بندی ${props.data.category} موزیک آنلاین`} />
            </Head>
            <div className='mt-8 w-full flex flex-col gap-4 sm:gap-6 md:gap-8 items-center justify-start px-2 sm:px-4 md:px-6 lg:px-8'>
                <SingerImage name='arash' src='https://arashaltafi.ir//melodyo/media/app/cat_pop.jpg' />
                <h3 className='self-start font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl'>دسته بندی:</h3>
                <h2 className='mb-8 self-start font-medium text-sm sm:text-base md:text-lg lg:text-xl'>{props.data.category}</h2>

                <HeadOfTitle fileType='music' route={RoutesAddress.MUSIC_ALL} title="موزیک ها:" />
                <MusicsComponent category={MusicCategory.ALL} className='mt-0' />

                <DividerImage src='/images/music-divider-1.png' className='my-12 sm:my-16 md:my-20' />

                <HeadOfTitle fileType='video' route={RoutesAddress.MUSIC_VIDEO_ALL} title="موزیک ویدیوها:" />
                <MusicVideosComponent category={MusicVideoCategory.ALL} className='mt-0' />
            </div>
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { query } = context

    if (!query || !query.category) {
        return {
            notFound: true
        }
    }

    const name = typeof (query?.category) === 'string' ? decodeURIComponent(query.category).replaceAll('-', ' ') : ''

    console.log(name)

    return {
        props: {
            data: {
                category: name
            }
        }
    }
}

export default Category