import React from 'react'
import HeadOfTitle from './HeadOfTitle'

const Article = () => {
    return (
        <article className='select-none w-full flex-1 overflow-y-auto flex flex-col gap-16 items-center justify-start py-4 px-1 sm:px-4 md:px-8'>
            <HeadOfTitle title="تمامی آهنگ ها" />
        </article>
    )
}

export default Article