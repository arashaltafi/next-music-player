import AllSingers from '@/components/AllSingers'
import DividerImage from '@/components/DividerImage'
import MusicsComponent from '@/components/MusicsComponent'
import MusicVideosComponent from '@/components/MusicVideosComponent'
import SingerImage from '@/components/SingerImage'
import { MusicCategory, MusicVideoCategory } from '@/utils/Type'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import ResponsivePagination from 'react-responsive-pagination';
import 'react-responsive-pagination/themes/classic.css';
import RoutesAddress from '@/utils/Routes';

const Singer = ({ data, name }: { data: any, name: string }) => {
    const [page, setPage] = useState(1)
    const router = useRouter()

    useEffect(() => {
        router.push(RoutesAddress.SINGER_BEST + "?page=" + page)
    }, [page])

    if (name === 'برترین خواننده ها') {
        return (
            <>
                <Head>
                    <title>خوانندگان برتر | موزیک آنلاین</title>
                    <meta name="description" content="صفحه تمامی خوانندگان موزیک آنلاین" />
                </Head>
                <div className='-mb-52 pt-10 w-full flex flex-col gap-16'>
                    <h2 className='px-8 self-start font-bold text-4xl'>خوانندگان برتر:</h2>
                    <AllSingers isFav />

                    <div className='w-full flex items-center justify-center gap-8'>
                        <ResponsivePagination
                            current={page}
                            total={20}
                            onPageChange={(page) => {
                                setPage(page)
                            }}
                        />
                    </div>
                </div>
            </>
        )
    } else {
        return (
            <>
                <Head>
                    <title>خواننده: {name} | موزیک آنلاین</title>
                    <meta name="description" content={`صفحه خواننده ${name} موزیک آنلاین`} />
                </Head>
                <div className='mt-8 w-full flex flex-col gap-8 items-center justify-start px-8'>
                    <SingerImage name='arash' src='https://arashaltafi.ir/arash.jpg' />
                    <h3 className='self-start font-bold text-4xl'>نام:</h3>
                    <h2 className='self-start font-medium text-xl'>{name}</h2>

                    <h3 className='mt-12 self-start font-bold text-4xl'>بیوگرافی:</h3>
                    <p className='self-start font-medium text-xl text-justify'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>

                    <h3 className='mt-16 self-start font-bold text-4xl'>موزیک ها:</h3>
                    <MusicsComponent category={MusicCategory.ALL} />

                    <DividerImage src='/images/music-divider-1.png' className='my-20' />

                    <h3 className='self-start font-bold text-4xl'>موزیک ویدیوها:</h3>
                    <MusicVideosComponent category={MusicVideoCategory.ALL} />
                </div>
            </>
        )
    }
}

export default Singer

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
        name: "محسن چاوشی",
        path: "https://dls.music-fa.com/tagdl/downloads/Mohsen%20Chavoshi%20-%20Beraghsa%20(128).mp3",
        image: "https://music-fa.com/wp-content/uploads/2018/12/M-chavoshi4956439822146524268375268572682365.jpg",
        singer: "محسن چاوشی"
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