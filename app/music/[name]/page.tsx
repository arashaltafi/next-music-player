"use client"

import Footer from '@/components/Footer';
import Image from 'next/image'
import React from 'react'
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const Music = ({ params }: { params: { name: string } }) => {
    const data = {
        id: 1,
        name: "آمد بهار جان ها",
        path: "https://dls.music-fa.com/tagdl/downloads/Mohsen%20Chavoshi%20-%20Beraghsa%20(128).mp3",
        image: "https://music-fa.com/wp-content/uploads/2018/12/M-chavoshi4956439822146524268375268572682365.jpg",
        singer: "محسن چاوشی",
        text: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.'
    }

    const handleChangeMusic = (isNext: boolean) => {
        if (isNext) {
            console.log('change music next')
        } else {
            console.log('change music back')
        }
    }

    return (
        <div className='mt-10 w-full flex flex-col gap-8 items-center justify-start px-8'>
            <h2 className='self-start font-normal text-3xl'>موزیک <span className='font-bold text-4xl'>{data.name}</span></h2>
            <h6 className='self-end font-normal text-lg'>{new Date().toLocaleDateString('fa-IR')}</h6>
            <div className='my-4 w-full flex items-center justify-between p-8 rounded-xl bg-slate-600 shadow-boxShadow'>
                <div className='h-full flex flex-col gap-4 items-stretch justify-between'>
                    <h5 className='text-lg'>خواننده: <span className='text-xl'>{data.singer}</span></h5>
                    <h5 className='text-lg'>موزیک: <span className='text-xl'>{data.name}</span></h5>

                    <button
                        className='btn btn-green'
                    >
                        دانلود موزیک
                    </button>
                    <button
                        className='btn btn-sky'
                    >
                        پخش موزیک
                    </button>
                </div>
                <Image
                    className='w-1/3 h-auto rounded-boxRadius border border-dashed border-rose-500 shadow-musicShadow'
                    src={data.image}
                    alt={data.name}
                    width={500}
                    height={500}
                />
            </div>

            <h5 className='self-start font-medium text-2xl'>متن موزیک:</h5>
            <p className='self-end text-base text-justify'>{data.text}</p>

            <div className='mt-8 w-full flex items-center justify-center gap-8'>
                <button className='flex gap-2 items-center justify-center btn btn-yellow'>
                    <IoIosArrowForward />
                    موزیک بعدی
                </button>
                <button className='flex gap-2 items-center justify-center btn btn-rose'>
                    موزیک قبلی
                    <IoIosArrowBack />
                </button>
            </div>

            <Footer
                img='https://music-fa.com/wp-content/uploads/2018/12/M-chavoshi4956439822146524268375268572682365.jpg'
                src='https://dls.music-fa.com/tagdl/downloads/Mohsen%20Chavoshi%20-%20Beraghsa%20(128).mp3'
                name='آمد بهار جان ها'
                singer='محسن چاوشی'
                onNextClick={() => handleChangeMusic(true)}
                onBackClick={() => handleChangeMusic(false)}
            />
        </div>
    )
}

const fetchData = async (name: string) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const data = await response.json()

    const list = {
        id: 1,
        name: "آمد بهار جان ها",
        path: "https://dls.music-fa.com/tagdl/downloads/Mohsen%20Chavoshi%20-%20Beraghsa%20(128).mp3",
        image: "https://music-fa.com/wp-content/uploads/2018/12/M-chavoshi4956439822146524268375268572682365.jpg",
        singer: "محسن چاوشی",
        text: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.'
    }

    return list
    return data
}

export default Music