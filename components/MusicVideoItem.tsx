import { showConfetti } from '@/utils/Animation';
import { MusicVideoType } from '@/utils/Type';
import Image from 'next/image'
import React, { useEffect } from 'react'
import { IoIosArrowBack } from "react-icons/io";

const MusicVideoItem = (props: MusicVideoType) => {
    useEffect(() => {
        if (props.isFav) {
            showConfetti()
        }
    }, [props.isFav])

    return (
        <div className={`w-full flex flex-col gap-4 items-center justify-between px-2 sm:px-4 md:px-6 lg:px-8 py-1 sm:py-2 md:py-3 lg:py-4 rounded-xl bg-slate-600 shadow-boxShadow ${props.isFav && 'bg-pattern-3 rounded-boxRadius'}`}>
            <div className='mt-2 sm:mt-3 md:mt-4 lg:mt-6 mb-2 sm:mb-4 md:mb-6 lg:mb-8 w-full flex gap-16 items-center justify-between'>
                <div className='w-full h-full flex flex-col gap-4 items-stretch justify-between'>
                    <h5 className='text-lg'>موزیک ویدیو: <span className='text-xl'>{props.name}</span></h5>
                    <h5 className='text-lg'>خواننده: <span className='text-xl'>{props.singer}</span></h5>

                    <button
                        className='btn btn-green'
                        data-download={props.name}
                    >
                        دانلود موزیک ویدیو
                    </button>
                    <button
                        className='btn btn-sky'
                        data-play={props.name}
                    >
                        پخش موزیک ویدیو
                    </button>
                </div>
                <Image
                    className='w-1/3 h-auto rounded-boxRadius border border-dashed border-rose-500 shadow-musicShadow'
                    src={props.image}
                    alt={props.name}
                    width={500}
                    height={500}
                />
            </div>
            <div className='my-1 sm:my-2 md:my-3 lg:my-4 w-full flex items-center justify-end gap-2 sm:gap-4 md:gap-6 lg:gap-8'>
                <button
                    className='flex gap-2 items-center justify-center btn btn-sky-outline'
                    data-click={props.name}
                >
                    ادامه مطلب
                    <IoIosArrowBack className='hidden sm:block' />
                </button>
            </div>
        </div>
    )
}

export default MusicVideoItem