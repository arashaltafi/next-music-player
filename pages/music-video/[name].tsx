import VideoPlayer from '@/components/VideoPlayer';
import { isHaveIdInStorage, LocalStorageRoutes } from '@/utils/LocalStorage';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import React from 'react'
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const MusicVideo = ({ data, name }: { data: any, name: string }) => {
    const handleChangeMusicVideo = (isNext: boolean) => {
        if (isNext) {
            console.log('change music next')
        } else {
            console.log('change music back')
        }
    } 

    return (
        <>
            <Head>
                <title>{name} | موزیک آنلاین</title>
                <meta name="description" content={`${name} موزیک آنلاین`} />
            </Head>
            <div className='mt-10 w-full flex flex-col gap-4 sm:gap-6 md:gap-8 items-center justify-start px-2 sm:px-4 md:px-6 lg:px-8'>
                <h2 className='self-start font-normal text-lg sm:text-xl md:text-2xl lg:text-3xl'>موزیک ویدیو <span className='font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl'>{data.name}</span></h2>
                <h6 className='self-end font-normal text-xs sm:text-sm md:text-base lg:text-lg'>{new Date().toLocaleDateString('fa-IR')}</h6>
                <div className='my-4 w-full flex flex-col gap-8 items-center justify-center p-2 sm:p-4 md:p-6 lg:p-8 rounded-xl bg-slate-600 shadow-boxShadow'>
                    <h5 className='text-xs sm:text-sm md:text-base lg:text-lg self-start'>خواننده: <span className='text-sm sm:text-base md:text-lg lg:text-xl'>{data.singer}</span></h5>
                    <h5 className='text-xs sm:text-sm md:text-base lg:text-lg self-start -mt-4'>موزیک: <span className='text-sm sm:text-base md:text-lg lg:text-xl'>{data.name}</span></h5>

                    <VideoPlayer
                        id={data.id}
                        src={data.path}
                        image={data.image}
                        isFav={isHaveIdInStorage(LocalStorageRoutes.MUSIC_VIDEO, data.id)}
                        name={data.name}
                        singer={data.singer}
                    />
                </div>

                <div className='mt-8 w-full flex items-center justify-center gap-8'>
                    <button
                        onClick={() => handleChangeMusicVideo(true)}
                        className='flex gap-2 items-center justify-center btn btn-yellow'
                    >
                        <IoIosArrowForward className='hidden sm:block' />
                        موزیک ویدیو بعدی
                    </button>
                    <button
                        onClick={() => handleChangeMusicVideo(false)}
                        className='flex gap-2 items-center justify-center btn btn-rose'
                    >
                        موزیک ویدیو قبلی
                        <IoIosArrowBack className='hidden sm:block' />
                    </button>
                </div>
            </div>
        </>
    )
}

export default MusicVideo

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { params } = context

    if (!params || !params.name) {
        return {
            notFound: true
        }
    }

    const name = typeof (params?.name) === 'string' ? decodeURIComponent(params.name).replaceAll('-', ' ') : ''

    const list = {
        id: 1,
        name: "آمد بهار جان ها",
        singer: "محسن چاوشی",
        path: "https://dl.rozmusic.com/Music/1403/03/13/Novan%20-%20Heyfe%20Man%20Bood%20Video.mp4",
        image: "https://music-fa.com/wp-content/uploads/2019/01/hakan-chavoshi-yegane9385239857243987524527.jpg"
    }

    return {
        props: {
            data: list,
            name: name
        }
    }

    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/news/${params?.name}`);
        const products = await response.json()

        if (response.status !== 200) {
            return {
                notFound: true
            }
        }

        if (!products.data) {
            return {
                redirect: {
                    destination: '/',
                    permanent: false
                }
            }
        }

        return {
            props: {
                data: products.data
            }
        }
    } catch (error) {
        console.log("error: ", error)

        return {
            props: {}
        }
    }
}