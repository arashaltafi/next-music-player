import React from 'react'
import { FaArrowLeftLong } from "react-icons/fa6";
import Link from 'next/link';

interface PropsType {
    title: string
}

const HeadOfTitle = (props: PropsType) => {
    return (
        <div className='w-full flex items-center justify-between mt-8'>
            <h2 className='text-2xl'>{props.title}</h2>
            <Link
                href={`/music/${props.title.replaceAll(' ', '-')}`}
                className='text-base flex items-center justify-center gap-2 cursor-pointer text-white hover:bg-rose-500 hover:text-rose-50 px-4 py-2 rounded-xl transition-all duration-200'
            >
                <h6>مشاهده همه</h6>
                <FaArrowLeftLong />
            </Link>
        </div>
    )
}

export default HeadOfTitle