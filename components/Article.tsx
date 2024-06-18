import React from 'react'
import HeadOfTitle from './HeadOfTitle'
import MusicsComponent from './MusicsComponent';
import Divider from './Divider';

const Article = () => {
    return (
        <article className='mt-8 select-none w-full h-full flex flex-col gap-6 items-center justify-start py-4 px-1 sm:px-4 md:px-8'>
            <HeadOfTitle title="تمامی موزیک ها" />
            <MusicsComponent />
            <Divider className='my-8' />

            <HeadOfTitle title="برترین موزیک ها" />
            <MusicsComponent />
            <Divider className='my-8' />

            <HeadOfTitle title="آخرین موزیک ها" />
            <MusicsComponent />
            <Divider className='my-8' />

            <HeadOfTitle title="موزیک های پیشنهادی" />
            <MusicsComponent />
            <Divider className='my-8' />

        </article>
    )
}

export default Article