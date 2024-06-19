import React from 'react'
import Image from 'next/image'
import { FaVideo } from "react-icons/fa";

const MusicVideoComponent = () => {
    return (
        <div className='relative w-full flex flex-col items-center justify-center gap-2 px-2 group'>
            <Image
                className='absolute inset-0 z-0 w-full h-full blur-[3px] rounded-lg border border-rose-500 border-solid delay-100 group-hover:brightness-90 group-hover:blur-[4px] group-hover:rounded-xl transition-all duration-300'
                src={'https://music-fa.com/wp-content/uploads/2018/12/M-chavoshi4956439822146524268375268572682365.jpg'}
                alt='test'
                width={1000}
                height={1000}
                loading='lazy'
            />

            <h3 className='mx-2 mt-4 z-10 text-base self-start bg-rose-500 px-6 py-2 rounded-lg border border-white border-dashed line-clamp-1'>
                آمد بهار جان ها
            </h3>

            <Image
                className='cursor-pointer my-3 z-10 w-[calc(100%-64px)] rounded-video border border-slate-500 shadow-sm shadow-slate-500 border-solid group-hover:scale-105 group-active:scale-95 group-hover:brightness-125 transition-all duration-300'
                src={'https://music-fa.com/wp-content/uploads/2018/12/M-chavoshi4956439822146524268375268572682365.jpg'}
                alt='test'
                width={500}
                height={500}
                loading='lazy'
            />

            <FaVideo className='absolute opacity-0 transition-all duration-300 group-hover:opacity-100 text-rose-600 text-4xl z-10 bg-rose-300 rounded-full p-2' />

            <h4 className='mb-2 w-full bg-slate-800/70 border border-dotted border-slate-500 text-end z-10 text-sm self-end px-6 py-2 line-clamp-1 rounded-lg'>
                محسن چاوشی
            </h4>
        </div>
    )
}

export default MusicVideoComponent