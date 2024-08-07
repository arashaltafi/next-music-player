import React from 'react'
import { FaArrowLeftLong } from "react-icons/fa6";
import { RiArrowLeftSFill } from "react-icons/ri";
import Link from 'next/link';

interface PropsType {
    title: string,
    fileType: 'video' | 'music',
    route: string
}

const HeadOfTitle = (props: PropsType) => {
    return (
        <div className='w-full flex items-center justify-between'>
            <div className='flex items-center justify-center gap-2'>
                <RiArrowLeftSFill className='text-sm sm:text-base md:text-lg lg:text-xl text-rose-500' />
                <h2 className='text-base sm:text-lg md:text-xl lg:text-2xl font-bold'>{props.title}</h2>
            </div>
            <Link
                prefetch={false}
                href={props.route}
                className='text-xs sm:text-sm md:text-base flex items-center justify-center gap-2 cursor-pointer text-white hover:bg-rose-500 hover:text-rose-50 px-4 py-2 rounded-xl transition-all duration-200'
            >
                <h6>مشاهده همه</h6>
                <FaArrowLeftLong className='hidden sm:block' />
            </Link>
        </div>
    )
}

export default HeadOfTitle