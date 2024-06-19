import React from 'react'
import { FaArrowLeftLong } from "react-icons/fa6";
import { RiArrowLeftSFill } from "react-icons/ri";
import Link from 'next/link';

interface PropsType {
    title: string,
    fileType: 'video' | 'music'
}

const HeadOfTitle = (props: PropsType) => {
    return (
        <div className='w-full flex items-center justify-between'>
            <div className='flex items-center justify-center gap-2'>
                <RiArrowLeftSFill className='text-xl text-rose-500' />
                <h2 className='text-2xl font-bold'>{props.title}</h2>
            </div>
            <Link
                prefetch={false}
                href={`${props.fileType === 'video' ? '/video' : '/music'}/${props.title.replaceAll(' ', '-')}`}
                className='text-base flex items-center justify-center gap-2 cursor-pointer text-white hover:bg-rose-500 hover:text-rose-50 px-4 py-2 rounded-xl transition-all duration-200'
            >
                <h6>مشاهده همه</h6>
                <FaArrowLeftLong />
            </Link>
        </div>
    )
}

export default HeadOfTitle