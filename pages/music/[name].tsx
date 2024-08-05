import Footer from '@/components/Footer';
import { isHaveIdInStorage, LocalStorageRoutes } from '@/utils/LocalStorage';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Image from 'next/image'
import React, { useState } from 'react'
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { FaPlayCircle } from "react-icons/fa";

const Music = ({ data, name }: { data: any, name: string }) => {
    const [isPlaying, setIsPlaying] = useState(false)

    const handlePlay = () => {
        setIsPlaying(!isPlaying)
    }

    const handleDownload = () => {
        const url = data.path
        const name = data.singer + '___' + data.name + '.mp3'
        const link = document.createElement('a')
        link.href = url
        link.download = name
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }

    const handleChangeMusic = (isNext: boolean) => {
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
                <h2 className='self-start font-normal text-lg sm:text-xl md:text-2xl lg:text-3xl'>موزیک <span className='font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl'>{data.name}</span></h2>
                <h6 className='self-end font-normal text-xs sm:text-sm md:text-base lg:text-lg'>{data.date}</h6>
                <div className='relative overflow-hidden my-4 w-full flex flex-col-reverse sm:flex-row gap-y-8 items-center justify-between p-2 sm:p-4 md:p-6 lg:p-8 rounded-xl bg-slate-600 shadow-boxShadow'>
                    <div className='h-full flex flex-col gap-4 items-stretch justify-between z-10'>
                        <h5 className='text-xs sm:text-sm md:text-base lg:text-lg'>خواننده: <span className='text-sm sm:text-base md:text-lg lg:text-xl'>{data.singer}</span></h5>
                        <h5 className='text-xs sm:text-sm md:text-base lg:text-lg'>موزیک: <span className='text-sm sm:text-base md:text-lg lg:text-xl'>{data.name}</span></h5>

                        <div className='w-full flex items-center justify-between gap-4'>
                            <div
                                className='btn btn-green flex-1 flex items-center justify-center gap-4'
                                onClick={handleDownload}
                            >
                                <button>دانلود</button>
                                <FaCloudDownloadAlt className='text-2xl' />
                            </div>
                            <div
                                className={`btn ${isPlaying ? 'btn-red' : 'btn-sky'} flex-1 flex items-center justify-center gap-4`}
                                onClick={handlePlay}
                            >
                                <button>{isPlaying ? 'قطع' : 'پخش'}</button>
                                <FaPlayCircle className='text-2xl' />
                            </div>
                        </div>
                    </div>
                    <Image
                        className='w-1/3 h-auto rounded-boxRadius border border-dashed border-rose-500 shadow-musicShadow z-10'
                        src={data.image}
                        alt={data.name}
                        width={500}
                        height={500}
                    />
                    <Image
                        className='absolute top-0 left-0 right-0 w-full opacity-60 z-0'
                        src={'/icons/svg-wave-2.svg'}
                        width={100}
                        height={100}
                        alt='background wave'
                    />
                </div>

                <h5 className='self-start font-medium text-base sm:text-lg md:text-xl lg:text-2xl'>متن موزیک:</h5>
                <p className='self-end text-xs sm:text-sm md:text-base text-justify'>{data.text}</p>

                <div className='mt-8 w-full flex items-center justify-center gap-8'>
                    <button
                        onClick={() => handleChangeMusic(true)}
                        className='flex gap-2 items-center justify-center btn btn-yellow'
                    >
                        <IoIosArrowForward className='hidden sm:block' />
                        موزیک بعدی
                    </button>
                    <button
                        onClick={() => handleChangeMusic(false)}
                        className='flex gap-2 items-center justify-center btn btn-rose'
                    >
                        موزیک قبلی
                        <IoIosArrowBack className='hidden sm:block' />
                    </button>
                </div>

                {
                    isPlaying && (
                        <Footer
                            id={data.id}
                            img={data.image}
                            src={data.path}
                            name={data.name}
                            singer={data.singer}
                            text={data.text}
                            isFav={isHaveIdInStorage(LocalStorageRoutes.MUSIC, data.id)}
                            onNextClick={() => handleChangeMusic(true)}
                            onBackClick={() => handleChangeMusic(false)}
                        />
                    )
                }
            </div>
        </>
    )
}

export default Music

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
                    music(id: ${id}) {
                      id,
                      image,
                      path,
                      singer,
                      name,
                      text,
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

        const resMusic = {
            id: data?.music?.id,
            name: data?.music?.name,
            path: data?.music?.path,
            image: data?.music?.image,
            singer: data?.music?.singer,
            text: data?.music?.text,
            date: data?.music?.date
        }

        return {
            props: {
                data: resMusic,
                name: data?.music?.name
            }
        }
    } catch (error) {
        console.log("error: ", error)

        return {
            props: {}
        }
    }
}