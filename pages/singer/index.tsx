import AllSingers from '@/components/AllSingers'
import Head from 'next/head'
import React from 'react'

const Singers = () => {
    return (
        <>
            <Head>
                <title>تمامی خوانندگان | موزیک آنلاین</title>
                <meta name="description" content="صفحه تمامی خوانندگان موزیک آنلاین" />
            </Head>
            <h2 className='mt-10 px-8 self-start font-bold text-4xl'>تمامی خوانندگان:</h2>
            <AllSingers />
        </>
    )
}

export default Singers