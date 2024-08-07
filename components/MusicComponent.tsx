import React from 'react'
import Image from 'next/image'
import { IoMusicalNote } from "react-icons/io5";

interface PropsType {
    id: number,
    name: string,
    singer: string,
    image: string,
    path: string,
}

const MusicComponent = (props: PropsType) => {
    return (
        <div
            data-key={props.id}
            className='relative w-full flex flex-col items-center justify-center gap-2 px-2 group'
        >
            <Image
                className='absolute inset-0 z-0 w-full h-full blur-[3px] rounded-lg border border-rose-500 border-solid delay-100 group-hover:brightness-90 group-hover:blur-[4px] group-hover:rounded-xl transition-all duration-300'
                src={props.image}
                alt={props.name}
                width={1000}
                height={1000}
                loading='lazy'
            />

            <h3 className='mx-2 mt-4 z-10 text-base self-start bg-rose-500 px-4 md:px-6 py-1 md:py-2 rounded-lg border border-white border-dashed line-clamp-1'>
                {props.name}
            </h3>

            <Image
                className='cursor-pointer my-3 z-10 w-[calc(100%-64px)] rounded-full border border-slate-500 shadow-musicShadow border-solid group-hover:scale-105 group-active:scale-95 group-hover:brightness-125 transition-all duration-300'
                src={props.image}
                alt={props.name}
                width={500}
                height={500}
                loading='lazy'
            />

            <IoMusicalNote className='absolute opacity-0 transition-all duration-300 group-hover:opacity-100 text-rose-600 text-4xl z-10 bg-rose-300 rounded-full p-2' />

            <h4 className='mb-2 w-full bg-slate-800/70 border border-dotted border-slate-500 text-end z-10 text-sm self-end px-2 sm:px-4 md:px-6 py-1 md:py-2 line-clamp-1 rounded-lg'>
                {props.singer}
            </h4>
        </div>
    )
}

export default MusicComponent