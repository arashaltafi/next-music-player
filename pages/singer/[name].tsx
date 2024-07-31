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
import HeadOfTitle from '@/components/HeadOfTitle'
import { GET_SINGER } from '@/graphql/graphql-queries'
import { useQuery } from '@apollo/client'
import MusicComponent from '@/components/MusicComponent'
import MusicVideoComponent from '@/components/MusicVideoComponent'
import PaginationComponent from '@/components/PaginationComponent'

const Singer = ({ name }: { name: string }) => {
    const [page, setPage] = useState(1)
    const router = useRouter()

    const { data } = useQuery(GET_SINGER, {
        variables: {
            name
        }
    });
    
    const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, isVideo: boolean) => {
        const target = e.target as HTMLDivElement
        const targetDiv = target.closest('div')
        if (!targetDiv) return

        const key = targetDiv.getAttribute('data-key')
        if (!key) return

        if (isVideo) {
            router.push(RoutesAddress.MUSIC_VIDEO + "/" + key.replaceAll(' ', '-'))
        } else {
            router.push(RoutesAddress.MUSIC + "/" + key.replaceAll(' ', '-'))
        }
    }


    useEffect(() => {
        if (name !== 'برترین خواننده ها') return
        router.push(RoutesAddress.SINGER_BEST + "?page=" + page)
    }, [page])

    if (name === 'برترین خواننده ها') {
        const favData = [
            {
                id: 1,
                name: 'name1',
                image: 'https://arashaltafi.ir/Social_Media/story-02.jpg',
            }, {
                id: 2,
                name: 'name2',
                image: 'https://arashaltafi.ir/Social_Media/story-01.jpg',
            }
        ]

        return (
            <>
                <Head>
                    <title>خوانندگان برتر | موزیک آنلاین</title>
                    <meta name="description" content="صفحه تمامی خوانندگان موزیک آنلاین" />
                </Head>
                <div className='-mb-52 pt-10 w-full flex flex-col'>
                    <h2 className='px-8 self-start font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl my-4'>خوانندگان برتر:</h2>
                    <AllSingers isFav data={favData} />

                    <div className='w-full flex items-center justify-center gap-8'>
                        <PaginationComponent
                            currentPage={page}
                            totalPage={Math.max(1, Math.ceil(favData?.length / 5))}
                            setPageNumber={(pageNumber) => setPage(pageNumber)}
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
                <div className='mt-8 w-full flex flex-col gap-4 sm:gap-6 md:gap-8 items-center justify-start px-2 sm:px-4 md:px-6 lg:px-8'>
                    <SingerImage name='arash' src={data?.singer?.image} />
                    <h3 className='self-start font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl'>نام:</h3>
                    <h2 className='self-start font-medium text-sm sm:text-base md:text-lg lg:text-xl'>{data?.singer?.name}</h2>

                    <h3 className='mt-4 sm:mt-8 md:mt-10 lg:mt-12 self-start font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl'>بیوگرافی:</h3>
                    <p className='mb-8 self-start font-medium text-sm sm:text-base md:text-lg lg:text-xl text-justify'>{data?.singer?.bio}</p>

                    <HeadOfTitle fileType='music' route={RoutesAddress.MUSIC_BEST} title="موزیک ها:" />
                    <div
                        className={`w-full h-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-x-8 gap-y-6 overflow-hidden mt-0`}
                        onClick={(e) => handleClick(e, false)}
                    >
                        {
                            data?.singer?.music?.map((item: any) => (
                                <MusicComponent
                                    key={item.id}
                                    id={item.id}
                                    name={item.name}
                                    singer={item.singer}
                                    path={item.path}
                                    image={item.image}
                                />
                            ))
                        }
                    </div>

                    <DividerImage src='/images/music-divider-1.png' className='my-12 sm:my-16 md:my-20' />

                    <HeadOfTitle fileType='video' route={RoutesAddress.MUSIC_BEST} title="موزیک ویدیوها:" />
                    <div
                        className={`w-full h-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-x-8 gap-y-6 overflow-hidden mt-0`}
                        onClick={(e) => handleClick(e, true)}
                    >
                        {
                            data?.singer?.musicVideo?.map((item: any) => (
                                <MusicVideoComponent
                                    key={item.id}
                                    id={item.id}
                                    name={item.name}
                                    singer={item.singer}
                                    path={item.path}
                                    image={item.image}
                                />
                            ))
                        }
                    </div>
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

    return {
        props: {
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