import React from 'react'
import HeadOfTitle from './HeadOfTitle'
import MusicsComponent from './MusicsComponent';
import DividerImage from './DividerImage';
import Image from 'next/image';
import MusicVideosComponent from './MusicVideosComponent';

const Article = () => {
    return (
        <article className='mt-8 select-none w-full h-full flex flex-col gap-6 items-center justify-start py-4 px-1 sm:px-4 md:px-8'>
            <HeadOfTitle fileType='music' title="تمامی موزیک ها" />
            <MusicsComponent />
            <DividerImage src='/images/music-divider-1.png' className='my-8' />

            <HeadOfTitle fileType='music' title="برترین موزیک ها" />
            <MusicsComponent />
            <DividerImage src='/images/music-divider-2.png' className='my-8' />

            <HeadOfTitle fileType='music' title="آخرین موزیک ها" />
            <MusicsComponent />
            <DividerImage src='/images/music-divider-1.png' className='my-8' />

            <HeadOfTitle fileType='music' title="موزیک های پیشنهادی" />
            <MusicsComponent />

            <Image
                className='w-2/3 my-8 opacity-40 rounded-b-[48px]'
                src={'/icons/svg-wave-1.svg'}
                width={100}
                height={100}
                alt='background wave'
            />

            {/* Music Video */}
            <HeadOfTitle fileType='video' title="تمامی موزیک ویدیوها" />
            <MusicVideosComponent />
            <DividerImage src='/images/music-divider-1.png' className='my-8' />

            <HeadOfTitle fileType='video' title="برترین موزیک ویدیوها" />
            <MusicVideosComponent />
            <DividerImage src='/images/music-divider-1.png' className='my-8' />

            <HeadOfTitle fileType='video' title="آخرین موزیک ویدیوها" />
            <MusicVideosComponent />
            <DividerImage src='/images/music-divider-1.png' className='my-8' />

            <HeadOfTitle fileType='video' title="موزیک ویدیوهای پیشنهادی" />
            <MusicVideosComponent />

        </article>
    )
}

export default Article