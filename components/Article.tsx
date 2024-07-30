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
import LottieComponent from './LottieComponent';
import ThreeJsComponent from './ThreeJsComponent';
import { useQuery } from '@apollo/client';
import { GET_HOME } from '@/graphql/graphql-queries';

const Article = () => {
    const { data } = useQuery(GET_HOME);

    console.log(data)

    return (
        <article className='mt-8 select-none w-full h-full flex flex-col gap-12 items-center justify-start py-4 px-1 sm:px-4 md:px-8'>
            <ThreeJsComponent className='hidden lg:flex' />
            
            <CategoryComponent />
            <LottieComponent src='anim1' />

            <BannerHomePage
                src1={data?.home?.bannerAllMusic[0]?.image}
                src2={data?.home?.bannerAllMusic[1]?.image}
                src3={data?.home?.bannerAllMusic[2]?.image}
                link1={RoutesAddress.MUSIC + '/' + data?.home?.bannerAllMusic[0]?.title}
                link2={RoutesAddress.MUSIC + '/' + data?.home?.bannerAllMusic[1]?.title}
                link3={RoutesAddress.MUSIC + '/' + data?.home?.bannerAllMusic[2]?.title}
                isReverce={false}
            />

            <HeadOfTitle fileType='music' route={RoutesAddress.MUSIC_ALL} title="تمامی موزیک ها" />
            <MusicsComponent category={MusicCategory.ALL} />
            <DividerImage src='/images/music-divider-1.png' className='my-2 sm:my-4 md:my-8' />
            <LottieComponent src='anim2' />

            <BannerHomePage
                src1={data?.home?.bannerTopMusic[0]?.image}
                src2={data?.home?.bannerTopMusic[1]?.image}
                src3={data?.home?.bannerTopMusic[2]?.image}
                link1={RoutesAddress.MUSIC + '/' + data?.home?.bannerTopMusic[0]?.title}
                link2={RoutesAddress.MUSIC + '/' + data?.home?.bannerTopMusic[1]?.title}
                link3={RoutesAddress.MUSIC + '/' + data?.home?.bannerTopMusic[2]?.title}
                isReverce={true}
            />

            <HeadOfTitle fileType='music' route={RoutesAddress.MUSIC_BEST} title="برترین موزیک ها" />
            <MusicsComponent category={MusicCategory.BEST} />
            <DividerImage src='/images/music-divider-2.png' className='my-2 sm:my-4 md:my-8' />
            <LottieComponent src='anim3' />

            <BannerHomePage
                src1={data?.home?.bannerLastMusic[0]?.image}
                src2={data?.home?.bannerLastMusic[1]?.image}
                src3={data?.home?.bannerLastMusic[2]?.image}
                link1={RoutesAddress.MUSIC + '/' + data?.home?.bannerLastMusic[0]?.title}
                link2={RoutesAddress.MUSIC + '/' + data?.home?.bannerLastMusic[1]?.title}
                link3={RoutesAddress.MUSIC + '/' + data?.home?.bannerLastMusic[2]?.title}
                isReverce={false}
            />

            <HeadOfTitle fileType='music' route={RoutesAddress.MUSIC_NEW} title="آخرین موزیک ها" />
            <MusicsComponent category={MusicCategory.NEW} />
            <DividerImage src='/images/music-divider-1.png' className='my-2 sm:my-4 md:my-8' />
            <LottieComponent src='anim4' />

            <BannerHomePage
                src1={data?.home?.bannerFavMusic[0]?.image}
                src2={data?.home?.bannerFavMusic[1]?.image}
                src3={data?.home?.bannerFavMusic[2]?.image}
                link1={RoutesAddress.MUSIC + '/' + data?.home?.bannerFavMusic[0]?.title}
                link2={RoutesAddress.MUSIC + '/' + data?.home?.bannerFavMusic[1]?.title}
                link3={RoutesAddress.MUSIC + '/' + data?.home?.bannerFavMusic[2]?.title}
                isReverce={true}
            />

            <HeadOfTitle fileType='music' route={RoutesAddress.MUSIC_SUGGESTED} title="موزیک های پیشنهادی" />
            <MusicsComponent category={MusicCategory.SUGGESTED} />

            <Image
                className='w-full sm:w-2/3 my-8 opacity-60 rounded-b-[48px]'
                src={'/icons/svg-wave-1.svg'}
                width={100}
                height={100}
                alt='background wave'
            />

            {/* Music Video */}
            <BannerHomePage
                src1={data?.home?.bannerAllMusicVideo[0]?.image}
                src2={data?.home?.bannerAllMusicVideo[1]?.image}
                src3={data?.home?.bannerAllMusicVideo[2]?.image}
                link1={RoutesAddress.MUSIC + '/' + data?.home?.bannerAllMusicVideo[0]?.title}
                link2={RoutesAddress.MUSIC + '/' + data?.home?.bannerAllMusicVideo[1]?.title}
                link3={RoutesAddress.MUSIC + '/' + data?.home?.bannerAllMusicVideo[2]?.title}
                isReverce={false}
            />

            <HeadOfTitle fileType='video' route={RoutesAddress.MUSIC_VIDEO_ALL} title="تمامی موزیک ویدیوها" />
            <MusicVideosComponent category={MusicVideoCategory.ALL} />
            <DividerImage src='/images/music-divider-1.png' className='my-2 sm:my-4 md:my-8' />
            <ImageHomePageComponent src='/images/music_video_1.png' className='w-2/3 sm:w-1/2 md:w-1/3 mb-4' />

            <BannerHomePage
                src1={data?.home?.bannerTopMusicVideo[0]?.image}
                src2={data?.home?.bannerTopMusicVideo[1]?.image}
                src3={data?.home?.bannerTopMusicVideo[2]?.image}
                link1={RoutesAddress.MUSIC + '/' + data?.home?.bannerTopMusicVideo[0]?.title}
                link2={RoutesAddress.MUSIC + '/' + data?.home?.bannerTopMusicVideo[1]?.title}
                link3={RoutesAddress.MUSIC + '/' + data?.home?.bannerTopMusicVideo[2]?.title}
                isReverce={false}
            />

            <HeadOfTitle fileType='video' route={RoutesAddress.MUSIC_VIDEO_BEST} title="برترین موزیک ویدیوها" />
            <MusicVideosComponent category={MusicVideoCategory.BEST} />
            <DividerImage src='/images/music-divider-1.png' className='my-2 sm:my-4 md:my-8' />
            <ImageHomePageComponent src='/images/music_video_2.png' className='w-2/3 sm:w-1/2 md:w-1/3 mb-4' />

            <BannerHomePage
                src1={data?.home?.bannerTopMusicVideo[0]?.image}
                src2={data?.home?.bannerTopMusicVideo[1]?.image}
                src3={data?.home?.bannerTopMusicVideo[2]?.image}
                link1={RoutesAddress.MUSIC + '/' + data?.home?.bannerTopMusicVideo[0]?.title}
                link2={RoutesAddress.MUSIC + '/' + data?.home?.bannerTopMusicVideo[1]?.title}
                link3={RoutesAddress.MUSIC + '/' + data?.home?.bannerTopMusicVideo[2]?.title}
                isReverce={true}
            />

            <HeadOfTitle fileType='video' route={RoutesAddress.MUSIC_VIDEO_NEW} title="آخرین موزیک ویدیوها" />
            <MusicVideosComponent category={MusicVideoCategory.NEW} />
            <DividerImage src='/images/music-divider-1.png' className='my-2 sm:my-4 md:my-8' />
            <ImageHomePageComponent src='/images/dj3.png' className='w-2/3 sm:w-1/2 md:w-1/3 mb-4' />

            <BannerHomePage
                src1={data?.home?.bannerSuggestedMusicVideo[0]?.image}
                src2={data?.home?.bannerSuggestedMusicVideo[1]?.image}
                src3={data?.home?.bannerSuggestedMusicVideo[2]?.image}
                link1={RoutesAddress.MUSIC + '/' + data?.home?.bannerSuggestedMusicVideo[0]?.title}
                link2={RoutesAddress.MUSIC + '/' + data?.home?.bannerSuggestedMusicVideo[1]?.title}
                link3={RoutesAddress.MUSIC + '/' + data?.home?.bannerSuggestedMusicVideo[2]?.title}
                isReverce={false}
            />

            <HeadOfTitle fileType='video' route={RoutesAddress.MUSIC_VIDEO_SUGGESTED} title="موزیک ویدیوهای پیشنهادی" />
            <MusicVideosComponent category={MusicVideoCategory.SUGGESTED} />
        </article>
    )
}

export default Article