import { showConfetti } from '@/utils/Animation';
import { MusicType } from '@/utils/Type';
import Image from 'next/image'
import React, { useEffect } from 'react'
import { IoIosArrowBack } from "react-icons/io";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { FaPlayCircle } from "react-icons/fa";

const MusicItem = (props: MusicType) => {
    useEffect(() => {
        if (props.isFav) {
            showConfetti()
        }
    }, [props.isFav])

    return (
        <div className={`w-full flex flex-col gap-4 items-center justify-between px-2 sm:px-4 md:px-6 lg:px-8 py-1 sm:py-2 md:py-3 lg:py-4 rounded-xl bg-slate-600 shadow-boxShadow ${props.isFav && 'bg-pattern-7 rounded-boxRadius'}`}>
            <div className='mt-2 sm:mt-3 md:mt-4 lg:mt-6 mb-2 sm:mb-4 md:mb-6 lg:mb-8 w-full flex flex-col-reverse sm:flex-row gap-y-8 gap-x-6 sm:gap-x-8 md:gap-x-12 lg:gap-x-16 items-center justify-between'>
                <div className='w-full h-full flex flex-col gap-4 items-stretch justify-between'>
                    <h5 className='text-xs sm:text-sm md:text-base lg:text-lg'>موزیک: <span className='text-sm sm:text-base md:text-lg lg:text-xl'>{props.name}</span></h5>
                    <h5 className='text-xs sm:text-sm md:text-base lg:text-lg'>خواننده: <span className='text-sm sm:text-base md:text-lg lg:text-xl'>{props.singer}</span></h5>

                    <div className='w-full flex items-center justify-between gap-4'>
                        <div
                            className='btn btn-green flex-1 flex items-center justify-center gap-4'
                            data-download={props.name}
                        >
                            <button>دانلود</button>
                            <FaCloudDownloadAlt className='text-2xl' />
                        </div>
                        <div
                            className='btn btn-sky flex-1 flex items-center justify-center gap-4'
                            data-play={props.name}
                        >
                            <button>پخش</button>
                            <FaPlayCircle className='text-2xl' />
                        </div>
                    </div>
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
                    className='flex gap-2 items-center justify-center btn btn-sky-outline px-4 py-2 text-sm'
                    data-click={props.id}
                >
                    ادامه مطلب
                    <IoIosArrowBack className='hidden sm:block' />
                </button>
            </div>
        </div>
    )
}

export default MusicItem