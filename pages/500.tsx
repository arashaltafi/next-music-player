import Image from 'next/image';
import React, { useEffect } from 'react';
import Head from 'next/head';

const NotFound = () => {
    useEffect(() => {
        const favicon = document.querySelector('link[rel="icon"]') as HTMLLinkElement;
        if (favicon) {
            favicon.href = '/images/logo-grayscale.png';
        }
    }, []);

    return (
        <>
            <Head>
                <title>یافت نشد | موزیک آنلاین</title>
                <meta name="description" content="صفحه مورد نظر یافت نشد موزیک آنلاین" />
            </Head>
            <div className='select-none w-full min-h-screen flex flex-col gap-28 items-center justify-center'>
                <div className='w-full flex flex-col gap-16 items-center justify-center px-10 sm:px-12 md:px-14 lg:px-16 py-4 sm:py-6 md:py-8'>
                    <div className='flex flex-row gap-4 items-center justify-center shake2'>
                        <h2 className='text-7xl sm:text-8xl md:text-9xl text-brown-200'>4</h2>
                        <Image
                            className='size-28 sm:size-40 md:size-48 brightness-150 rounded-full grayscale'
                            src='/images/logo.png'
                            alt='404-notFound'
                            width={500}
                            height={500}
                            priority
                            loading='eager'
                            quality={100}
                        />
                        <h2 className='text-7xl sm:text-8xl md:text-9xl text-brown-200'>4</h2>
                    </div>

                    <h1 dir='rtl' className='text-md sm:text-lg md:text-xl lg:text-2xl'>
                        صفحه مورد نظر یافت نشد !!!
                    </h1>
                </div>
            </div>
        </>
    )
}

export default NotFound