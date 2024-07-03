import MusicVideoItem from '@/components/MusicVideoItem'
import RoutesAddress from '@/utils/Routes'
import { MusicVideoType } from '@/utils/Type'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import ResponsivePagination from 'react-responsive-pagination';
import 'react-responsive-pagination/themes/classic.css';

const MusicVideos = ({ data, category }: { data: MusicVideoType[], category: string }) => {
    const [page, setPage] = useState(1)
    const router = useRouter()

    useEffect(() => {
        router.push(RoutesAddress.MUSIC_VIDEOS + "/" + category + "?page=" + page)
    }, [page])

    const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const target = e.target as HTMLDivElement
        const targetBtn = target.closest('button')
        if (!targetBtn) return

        const click = targetBtn.getAttribute('data-click')
        const download = targetBtn.getAttribute('data-download')
        const play = targetBtn.getAttribute('data-play')

        if (click) {
            router.push(RoutesAddress.MUSIC_VIDEO + "/" + click.replaceAll(' ', '-'))
        } else if (download) {

        } else if (play) {
            router.push(RoutesAddress.MUSIC_VIDEO + "/" + play.replaceAll(' ', '-'))
        } else {
            return
        }
    }

    return (
        <>
            <Head>
                <title>{category} | موزیک آنلاین</title>
                <meta name="description" content={`${category} موزیک آنلاین`} />
            </Head>
            <div onClick={(e) => handleClick(e)} className='-mb-52 mt-10 w-full flex flex-col gap-12 items-center justify-start px-8'>
                <h2 className='self-start font-bold text-4xl'>{category}:</h2>

                {
                    data.map((item: any) => (
                        <MusicVideoItem
                            key={item.id}
                            id={item.id}
                            name={item.name}
                            singer={item.singer}
                            image={item.image}
                            path={item.path}
                            isFav={category === 'موزیک ویدیوهای مورد علاقه'}
                        />
                    ))
                }

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
}

export default MusicVideos


export const getServerSideProps: GetServerSideProps = async (context) => {
    const { params } = context

    if (!params || !params.category) {
        return {
            notFound: true
        }
    }

    const category = typeof (params?.category) === 'string' ? decodeURIComponent(params.category).replaceAll('-', ' ') : ''

    const list: MusicVideoType[] = [
        {
            id: 1,
            name: "آمد بهار جان ها",
            path: "https://dls.music-fa.com/tagdl/downloads/Mohsen%20Chavoshi%20-%20Beraghsa%20(128).mp3",
            image: "https://music-fa.com/wp-content/uploads/2018/12/M-chavoshi4956439822146524268375268572682365.jpg",
            singer: "محسن چاوشی"
        },
        {
            id: 2,
            name: "شیک",
            path: "https://dls.music-fa.com/tagdl/downloads/Yousef%20Zamani%20-%20Shik%20(128).mp3",
            image: "https://music-fa.com/wp-content/uploads/2019/03/Y-zamani9856293865884752493.jpg",
            singer: "یوسف زمانی"
        },
        {
            id: 3,
            name: "بهت قول میدم",
            path: "https://dls.music-fa.com/tagdl/downloads/Mohsen%20Yeganeh%20-%20Behet%20Ghol%20Midam%20(128).mp3",
            image: "https://music-fa.com/wp-content/uploads/2018/12/M-yegane83658723567456837456986745867509673452355.jpg",
            singer: "محسن یگانه"
        },
        {
            id: 4,
            name: "نشکن دلمو",
            path: "https://dls.music-fa.com/tagdl/downloads/Yegane%20Chavoshi%20Hakan%20-%20Nashkan%20Delamo%20(128).mp3",
            image: "https://music-fa.com/wp-content/uploads/2019/01/hakan-chavoshi-yegane9385239857243987524527.jpg",
            singer: "محسن یگانه"
        },
        {
            id: 5,
            name: "آخرش قشنگه",
            path: "https://dls.music-fa.com/tagdl/downloads/Alireza%20Talischi%20-%20Akharesh%20Ghashange%20(128).mp3",
            image: "https://music-fa.com/wp-content/uploads/2018/10/A-talischi243264y235634.jpg",
            singer: "علیرضا طلیسچی"
        }
    ]

    return {
        props: {
            data: list,
            category: category
        }
    }

    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/news/${params?.category}`);
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