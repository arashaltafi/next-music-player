import { GetServerSideProps } from 'next'
import React from 'react'
import Head from 'next/head'
import MusicVideosComponent from '@/components/MusicVideosComponent'
import MusicsComponent from '@/components/MusicsComponent'
import { MusicCategory, MusicVideoCategory } from '@/utils/Type'
import DividerImage from '@/components/DividerImage'
import SingerImage from '@/components/SingerImage'

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
            <div className='mt-8 w-full flex flex-col gap-8 items-center justify-start px-8'>
                <SingerImage name='arash' src='https://arashaltafi.ir//melodyo/media/app/cat_pop.jpg' />
                <h3 className='self-start font-bold text-4xl'>دسته بندی:</h3>
                <h2 className='self-start font-medium text-xl'>{props.data.category}</h2>

                <h3 className='mt-16 self-start font-bold text-4xl'>موزیک ها:</h3>
                <MusicsComponent category={MusicCategory.ALL} />

                <DividerImage src='/images/music-divider-1.png' className='my-20' />

                <h3 className='self-start font-bold text-4xl'>موزیک ویدیوها:</h3>
                <MusicVideosComponent category={MusicVideoCategory.ALL} />
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