import React, { useEffect, useState } from 'react'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, Mousewheel, EffectFade } from 'swiper/modules';
import Image from 'next/image';
import { FaCirclePlay } from "react-icons/fa6";
import { GET_SLIDER } from '@/graphql/graphql-queries';
import { useQuery } from '@apollo/client';

const Slider = () => {
    const [slides, setSlides] = useState<{
        id: number,
        singer: string,
        musicName: string,
        image: string,
    }[]>([])

    const { data } = useQuery(GET_SLIDER);

    useEffect(() => {
        if (!data) return
        
        const sliderListMap = data?.home?.slider?.map((slide: any) => {
            return {
                id: slide.id,
                singer: slide.singer,
                musicName: slide.title,
                image: slide.image
            }
        })

        setSlides(sliderListMap)
    }, [data])

    const handleClickSlider = (e: MouseEvent | TouchEvent | PointerEvent) => {
        const target = e.target as HTMLDivElement
        if (target.id === 'undefined' || target.id === '' || target.id === null || target.id == undefined) return

        if (target.id.includes('slider')) {
            const targetId = parseInt(target.id.replace('slider-', ''))
            if (isNaN(targetId) || targetId < 1) return

            console.log('targetId slider:', targetId)
        } else if (target.id.includes('play')) {
            const targetId = parseInt(target.id.replace('play-', ''))
            if (isNaN(targetId) || targetId < 1) return

            console.log('targetId play:', targetId)
        } else {
            return
        }
    }

    return (
        <div className='flex flex-col items-center justify-start w-full gap-8'>
            <Swiper
                className={`w-full h-[400px] trend-slider rounded-b-xl`}
                slidesPerView={1}
                centeredSlides={true}
                centeredSlidesBounds={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                effect={'fade'}
                pagination={{
                    clickable: true,
                }}
                loop={true}
                direction={'vertical'}
                navigation={true}
                mousewheel={true}
                modules={[Autoplay, Pagination, Navigation, Mousewheel, EffectFade]}
                onClick={(_, e) => handleClickSlider(e)}
            >
                {
                    slides.map(slide => (
                        <SwiperSlide
                            key={slide.id}
                            className='w-full'>
                            <div
                                className='w-full h-full relative bg-slate-950'>
                                <Image
                                    className='w-full h-full'
                                    quality={100}
                                    src={slide.image}
                                    alt={slide.singer}
                                    width={1000}
                                    height={1000}
                                    loading='lazy'
                                />

                                <span id={`slider-${slide.id}`} className='absolute inset-0 bg-sliderBg' />

                                <div className='w-full py-8 pl-8 ps-4 sm:ps-8 md:ps-16 absolute right-0 bottom-0 flex flex-col gap-8'>
                                    <div className='w-full ps-8 flex items-center justify-between'>
                                        <h2 className='text-lg line-clamp-1 text-justify font-semibold'>
                                            خواننده: {slide.singer}
                                        </h2>
                                        <FaCirclePlay
                                            id={`play-${slide.id}`}
                                            className='text-white text-4xl transition-all duration-300 hover:text-rose-500 hover:scale-110 active:scale-90 cursor-pointer'
                                        />
                                    </div>
                                    <p className='text-base line-clamp-1 text-justify font-light'>
                                        موزیک: {slide.musicName}
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}

export default Slider