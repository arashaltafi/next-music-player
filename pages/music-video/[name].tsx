import VideoPlayer from '@/components/VideoPlayer';
import { isHaveIdInStorage, LocalStorageRoutes } from '@/utils/LocalStorage';
import RoutesAddress from '@/utils/Routes';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/navigation';
import React from 'react'
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const MusicVideo = ({ data, name }: { data: any, name: string }) => {
    const router = useRouter()

    const handleChangeMusicVideo = (isNext: boolean) => {
        if (isNext) {
            router.push(RoutesAddress.MUSIC_VIDEO + "/" + (data.id + 1))
        } else {
            if (data.id <= 1) return
            router.push(RoutesAddress.MUSIC_VIDEO + "/" + (data.id - 1))
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
                <h6 className='self-end font-normal text-xs sm:text-sm md:text-base lg:text-lg'>{data.date}</h6>
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

    const id = typeof (params?.name) === 'string' ? decodeURIComponent(params.name).replaceAll('-', ' ') : ''

    try {
        const res = await fetch(
            "http://localhost:3000/api/graphql",
            {
                method: "POST",
                body: JSON.stringify({
                    query: `{
                    musicVideo(id: ${id}) {
                        id,
                        name,
                        singer,
                        path,
                        image,
                        date
                    }
                }`,
                }),
                headers: {
                    "Content-Type": "application/json",
                },
            }
        )

        const data1 = await res.json()

        const { data } = data1;

        const resMusicVideo = {
            id: data?.musicVideo?.id,
            name: data?.musicVideo?.name,
            path: data?.musicVideo?.path,
            image: data?.musicVideo?.image,
            singer: data?.musicVideo?.singer,
            date: data?.musicVideo?.date
        }

        return {
            props: {
                data: resMusicVideo,
                name: data?.musicVideo?.name
            }
        }
    } catch (error) {
        console.log("error: ", error)

        return {
            props: {}
        }
    }
}