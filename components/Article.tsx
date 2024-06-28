import React from 'react'
import HeadOfTitle from './HeadOfTitle'
import MusicsComponent from './MusicsComponent';
import DividerImage from './DividerImage';
import Image from 'next/image';
import MusicVideosComponent from './MusicVideosComponent';
import { MusicCategory, MusicVideoCategory } from '@/utils/Type';
import RoutesAddress from '@/utils/Routes';
import CategoryComponent from './CategoryComponent';
import ImageHomePageComponent from './ImageHomePageComponent';
import BannerHomePage from './BannerHomePage';

const Article = () => {
    return (
        <article className='mt-8 select-none w-full h-full flex flex-col gap-6 items-center justify-start py-4 px-1 sm:px-4 md:px-8'>
            <CategoryComponent />
            <ImageHomePageComponent src='/images/music_3.png' />

            <BannerHomePage
                src1='https://arashaltafi.ir/Social_Media/story-01.jpg' 
                src2='https://arashaltafi.ir/Social_Media/story-02.jpg' 
                src3='https://arashaltafi.ir/Social_Media/story-03.jpg' 
                isReverce
            />

            <HeadOfTitle fileType='music' route={RoutesAddress.MUSIC_ALL} title="تمامی موزیک ها" />
            <MusicsComponent category={MusicCategory.ALL} />
            <DividerImage src='/images/music-divider-1.png' className='my-8' />
            <ImageHomePageComponent src='/images/music_1.png' />

            <HeadOfTitle fileType='music' route={RoutesAddress.MUSIC_BEST} title="برترین موزیک ها" />
            <MusicsComponent category={MusicCategory.BEST} />
            <DividerImage src='/images/music-divider-2.png' className='my-8' />
            <ImageHomePageComponent src='/images/music_2.png' />

            <HeadOfTitle fileType='music' route={RoutesAddress.MUSIC_NEW} title="آخرین موزیک ها" />
            <MusicsComponent category={MusicCategory.NEW} />
            <DividerImage src='/images/music-divider-1.png' className='my-8' />
            <ImageHomePageComponent src='/images/music_4.png' />

            <HeadOfTitle fileType='music' route={RoutesAddress.MUSIC_SUGGESTED} title="موزیک های پیشنهادی" />
            <MusicsComponent category={MusicCategory.SUGGESTED} />

            <Image
                className='w-2/3 my-8 opacity-60 rounded-b-[48px]'
                src={'/icons/svg-wave-1.svg'}
                width={100}
                height={100}
                alt='background wave'
            />

            {/* Music Video */}
            <HeadOfTitle fileType='video' route={RoutesAddress.MUSIC_VIDEO_ALL} title="تمامی موزیک ویدیوها" />
            <MusicVideosComponent category={MusicVideoCategory.ALL} />
            <DividerImage src='/images/music-divider-1.png' className='my-8' />
            <ImageHomePageComponent src='/images/music_video_1.png' />

            <HeadOfTitle fileType='video' route={RoutesAddress.MUSIC_VIDEO_BEST} title="برترین موزیک ویدیوها" />
            <MusicVideosComponent category={MusicVideoCategory.BEST} />
            <DividerImage src='/images/music-divider-1.png' className='my-8' />
            <ImageHomePageComponent src='/images/music_video_2.png' className='w-1/3' />

            <HeadOfTitle fileType='video' route={RoutesAddress.MUSIC_VIDEO_NEW} title="آخرین موزیک ویدیوها" />
            <MusicVideosComponent category={MusicVideoCategory.NEW} />
            <DividerImage src='/images/music-divider-1.png' className='my-8' />
            <ImageHomePageComponent src='/images/dj3.png' className='w-1/3 mb-4' />

            <HeadOfTitle fileType='video' route={RoutesAddress.MUSIC_VIDEO_SUGGESTED} title="موزیک ویدیوهای پیشنهادی" />
            <MusicVideosComponent category={MusicVideoCategory.SUGGESTED} />
            <ImageHomePageComponent src='/images/dj4.png' className='w-1/3 mt-4' />
        </article>
    )
}

export default Article