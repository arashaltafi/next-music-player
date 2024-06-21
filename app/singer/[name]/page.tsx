import DividerImage from '@/components/DividerImage'
import MusicsComponent from '@/components/MusicsComponent'
import MusicVideosComponent from '@/components/MusicVideosComponent'
import SingerImage from '@/components/SingerImage'
import { MusicCategory, MusicVideoCategory } from '@/utils/Type'
import React from 'react'

const Singer = async ({ params }: { params: { name: string } }) => {
    const data = await fetchData(params.name)

    return (
        <div className='mt-8 w-full flex flex-col gap-8 items-center justify-start px-8'>
            <SingerImage name='arash' src='https://arashaltafi.ir/arash.jpg' />
            <h3 className='self-start font-bold text-4xl'>نام:</h3>
            <h2 className='self-start font-medium text-xl'>{decodeURIComponent(params.name).replaceAll('-', ' ')}</h2>

            <h3 className='mt-12 self-start font-bold text-4xl'>بیوگرافی:</h3>
            <p className='self-start font-medium text-xl text-justify'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>

            <h3 className='mt-16 self-start font-bold text-4xl'>موزیک ها:</h3>
            <MusicsComponent category={MusicCategory.ALL} />

            <DividerImage src='/images/music-divider-1.png' className='my-20' />

            <h3 className='self-start font-bold text-4xl'>موزیک ویدیوها:</h3>
            <MusicVideosComponent category={MusicVideoCategory.ALL} />
        </div>
    )
}

export const generateMetadata = ({ params }: { params: { name: string } }) => {
    const singer = decodeURIComponent(params.name).replaceAll('-', ' ')

    return {
        title: singer,
        description: `صفحه خواننده: ${singer}`,
    }
}

const fetchData = async (singer: string) => {
    // const res = await fetch(`https://api.1loc.dev/singer/${singer}`)
    // const data = await res.json()
    // return data
}

export default Singer