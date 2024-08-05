import { showConfetti } from '@/utils/Animation'
import { MusicType } from '@/utils/Type'
import Image from 'next/image'
import React, { useEffect } from 'react'
import { FaCloudDownloadAlt } from "react-icons/fa";
import { FaPlayCircle } from "react-icons/fa";

const FavMusicItem = (props: MusicType) => {

    useEffect(() => {
        if (props.isFav) {
            showConfetti()
        }
    }, [])

    return (
        <div className='w-full flex items-center justify-between bg-pattern-7 rounded-xl px-4 py-2'>
            <button
                data-click={props.id}
            >
                <Image
                    src={props.image}
                    alt={props.name}
                    width={100}
                    height={100}
                    className='p-1 border border-double border-rose-500 rounded-full cursor-pointer hover:brightness-125 active:brightness-90 transition-all duration-300'
                />
            </button>
            <div className='flex flex-col items-center justify-center gap-2'>
                <h5 className='text-xs sm:text-xs md:text-sm lg:text-base'>موزیک: <span className='text-sm sm:text-base md:text-lg lg:text-xl'>{props.name}</span></h5>
                <h5 className='text-xs sm:text-xs md:text-sm lg:text-base'>خواننده: <span className='text-sm sm:text-base md:text-lg lg:text-xl'>{props.singer}</span></h5>
            </div>
            <div className='flex flex-col items-center justify-center gap-2'>
                <div
                    className='btn-small btn-green flex-1 flex items-center justify-center gap-4'
                    data-download={props.name}
                >
                    <button>دانلود</button>
                    <FaCloudDownloadAlt className='text-2xl' />
                </div>
                <div
                    className='btn-small btn-sky flex-1 flex items-center justify-center gap-4'
                    data-play={props.name}
                >
                    <button>پخش</button>
                    <FaPlayCircle className='text-xl' />
                </div>
            </div>
        </div>
    )
}

export default FavMusicItem