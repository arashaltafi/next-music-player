import Image from 'next/image'
import React from 'react'
import { IoIosArrowBack } from "react-icons/io";

interface PropsType {
    id: number,
    name: string,
    singer: string,
    image: string,
    path: string
    text: string
}

const MusicItem = (props: PropsType) => {
    return (
        <div className='w-full flex flex-col gap-4 items-center justify-between px-8 py-4 rounded-xl bg-slate-600 shadow-boxShadow'>
            <div className='mt-6 mb-8 w-full flex gap-16 items-center justify-between'>
                <div className='w-full h-full flex flex-col gap-4 items-stretch justify-between'>
                    <h5 className='text-lg'>موزیک: <span className='text-xl'>{props.name}</span></h5>
                    <h5 className='text-lg'>خواننده: <span className='text-xl'>{props.singer}</span></h5>
                    <p className='text-lg line-clamp-3 text-justify'>متن: <span className='text-base'>{props.text}</span></p>

                    <button
                        className='btn btn-green'
                        data-download={props.name}
                    >
                        دانلود موزیک
                    </button>
                    <button
                        className='btn btn-sky'
                        data-play={props.name}
                    >
                        پخش موزیک
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
            <div className='my-4 w-full flex items-center justify-end gap-8'>
                <button
                    className='flex gap-2 items-center justify-center btn btn-sky-outline'
                    data-click={props.name}
                >
                    ادامه مطلب
                    <IoIosArrowBack />
                </button>
            </div>
        </div>
    )
}

export default MusicItem