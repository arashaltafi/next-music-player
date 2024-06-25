import VideoPlayer from '@/components/VideoPlayer';
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
            <div className='mt-10 w-full flex flex-col gap-8 items-center justify-start px-8'>
                <h2 className='self-start font-normal text-3xl'>موزیک ویدیو <span className='font-bold text-4xl'>{data.name}</span></h2>
                <h6 className='self-end font-normal text-lg'>{new Date().toLocaleDateString('fa-IR')}</h6>
                <div className='my-4 w-full flex items-center justify-center p-8 rounded-xl bg-slate-600 shadow-boxShadow'>
                    <VideoPlayer src='https://dl.rozmusic.com/Music/1403/03/13/Novan%20-%20Heyfe%20Man%20Bood%20Video.mp4' />
                </div>

                <div className='mt-8 w-full flex items-center justify-center gap-8'>
                    <button className='flex gap-2 items-center justify-center btn btn-yellow'>
                        <IoIosArrowForward />
                        موزیک ویدیو بعدی
                    </button>
                    <button className='flex gap-2 items-center justify-center btn btn-rose'>
                        موزیک ویدیو قبلی
                        <IoIosArrowBack />
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
        path: "https://dls.music-fa.com/tagdl/downloads/Mohsen%20Chavoshi%20-%20Beraghsa%20(128).mp3",
        image: "https://music-fa.com/wp-content/uploads/2018/12/M-chavoshi4956439822146524268375268572682365.jpg",
        singer: "محسن چاوشی",
        text: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.'
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