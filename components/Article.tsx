import React from 'react'
import HeadOfTitle from './HeadOfTitle'
import MusicsComponent from './MusicsComponent';

const Article = () => {
    return (
        <article className='select-none w-full h-full flex-1 bg-red-500 overflow-y-auto flex flex-col gap-8 items-center justify-start py-4 px-1 sm:px-4 md:px-8'>
            <HeadOfTitle title="تمامی آهنگ ها" />
            <MusicsComponent />
        </article >
    )
}

export default Article