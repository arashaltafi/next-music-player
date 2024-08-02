import LottieComponent from '@/components/LottieComponent'
import MusicItem from '@/components/MusicItem'
import PaginationComponent from '@/components/PaginationComponent'
import { getFromLocalStorage, LocalStorageRoutes } from '@/utils/LocalStorage'
import RoutesAddress from '@/utils/Routes'
import { MusicType } from '@/utils/Type'
import Head from 'next/head'
import { useParams, useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import 'react-responsive-pagination/themes/classic.css';

const Musics = () => {
    const [page, setPage] = useState(1)
    const router = useRouter()
    const params = useParams()
    const category = typeof (params?.category) === 'string' ? decodeURIComponent(params.category).replaceAll('-', ' ') : ''

    const favMusic = getFromLocalStorage(LocalStorageRoutes.MUSIC)

    const data: MusicType[] = [
        {
            id: 1,
            name: "آمد بهار جان ها",
            path: "https://dls.music-fa.com/tagdl/downloads/Mohsen%20Chavoshi%20-%20Beraghsa%20(128).mp3",
            image: "https://music-fa.com/wp-content/uploads/2018/12/M-chavoshi4956439822146524268375268572682365.jpg",
            singer: "محسن چاوشی",
            text: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.'
        },
        {
            id: 2,
            name: "شیک",
            path: "https://dls.music-fa.com/tagdl/downloads/Yousef%20Zamani%20-%20Shik%20(128).mp3",
            image: "https://music-fa.com/wp-content/uploads/2019/03/Y-zamani9856293865884752493.jpg",
            singer: "یوسف زمانی",
            text: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.'
        },
        {
            id: 3,
            name: "بهت قول میدم",
            path: "https://dls.music-fa.com/tagdl/downloads/Mohsen%20Yeganeh%20-%20Behet%20Ghol%20Midam%20(128).mp3",
            image: "https://music-fa.com/wp-content/uploads/2018/12/M-yegane83658723567456837456986745867509673452355.jpg",
            singer: "محسن یگانه",
            text: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.'
        },
        {
            id: 4,
            name: "نشکن دلمو",
            path: "https://dls.music-fa.com/tagdl/downloads/Yegane%20Chavoshi%20Hakan%20-%20Nashkan%20Delamo%20(128).mp3",
            image: "https://music-fa.com/wp-content/uploads/2019/01/hakan-chavoshi-yegane9385239857243987524527.jpg",
            singer: "محسن یگانه",
            text: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.'
        },
        {
            id: 5,
            name: "آخرش قشنگه",
            path: "https://dls.music-fa.com/tagdl/downloads/Alireza%20Talischi%20-%20Akharesh%20Ghashange%20(128).mp3",
            image: "https://music-fa.com/wp-content/uploads/2018/10/A-talischi243264y235634.jpg",
            singer: "علیرضا طلیسچی",
            text: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.'
        }
    ]

    const [favMusicData, setFavMusicData] = useState<MusicType[]>(favMusic?.splice((page - 1) * 5, 5) || [])

    useEffect(() => {
        if (category === 'موزیک های مورد علاقه') {
            setFavMusicData(favMusic?.splice((page - 1) * 5, 5) || [])
            router.push(RoutesAddress.MUSIC_FAV + "/" + "?page=" + page)
        } else {
            router.push(RoutesAddress.MUSICS + "/" + category + "?page=" + page)
        }
    }, [page])

    const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const target = e.target as HTMLDivElement
        const targetBtn = target.closest('button')
        if (!targetBtn) return

        const click = targetBtn.getAttribute('data-click')
        const download = targetBtn.getAttribute('data-download')
        const play = targetBtn.getAttribute('data-play')

        if (click) {
            router.push(RoutesAddress.MUSIC + "/" + click.replaceAll(' ', '-'))
        } else if (download) {

        } else if (play) {

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
            <div onClick={(e) => handleClick(e)} className='-mb-52 mt-10 w-full flex flex-col gap-4 sm:gap-6 md:gap-8 lg:gap-12 items-center justify-start px-2 sm:px-4 md:px-6 lg:px-8'>
                <h2 className='self-start font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl my-4'>{category}:</h2>

                {
                    category === 'موزیک های مورد علاقه' ? (
                        favMusicData?.map((item: any) => (
                            <MusicItem
                                key={item.id}
                                id={item.id}
                                name={item.name}
                                singer={item.singer}
                                image={item.img}
                                text={item.text}
                                path={item.src}
                                isFav={true}
                            />
                        ))
                    ) : (
                        data.map((item: any) => (
                            <MusicItem
                                key={item.id}
                                id={item.id}
                                name={item.name}
                                singer={item.singer}
                                image={item.image}
                                text={item.text}
                                path={item.path}
                                isFav={false}
                            />
                        ))
                    )
                }

                {
                    favMusicData === undefined || (favMusicData?.length === 0 && category === 'موزیک های مورد علاقه') || (data?.length === 0) ? (
                        <div className='w-full h-[70vh] flex flex-col items-center justify-center'>
                            <LottieComponent src='anim5' />
                            <p className='text-sm sm:text-base md:text-lg'>هیچ موردی برای نمایش وجود ندارد</p>
                        </div>
                    ) : (
                        <></>
                    )
                }

                {
                    category === 'موزیک های مورد علاقه' ? (
                        favMusic && favMusic?.length > 5 && category === 'موزیک های مورد علاقه' && (
                            <div className='w-full flex items-center justify-center gap-8'>
                                <PaginationComponent
                                    currentPage={page}
                                    totalPage={Math.max(1, Math.ceil((favMusic?.length || 0) / 5))}
                                    setPageNumber={(pageNumber) => setPage(pageNumber)}
                                />
                            </div>
                        )
                    ) : (
                        <div className='w-full flex items-center justify-center gap-8'>
                            <PaginationComponent
                                currentPage={page}
                                totalPage={20}
                                setPageNumber={(pageNumber) => setPage(pageNumber)}
                            />
                        </div>
                    )
                }
            </div>
        </>
    )
}

export default Musics