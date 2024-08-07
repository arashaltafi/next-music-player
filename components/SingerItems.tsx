import React from 'react'
import Link from 'next/link';
import { SingerType } from '@/utils/Type';
import { LuMic2 } from "react-icons/lu";
import Image from 'next/image';
import RoutesAddress from '@/utils/Routes';

interface PropsType {
    activeSinger: string,
    onClick?: () => void
}

const SingerItems = (props: PropsType) => {
    const data: SingerType[] = fetchData()

    return (
        <>
            <Link href={RoutesAddress.SINGER_ALL} className='w-full flex items-center justify-between cursor-pointer rounded-xl hover:scale-[101%] hover:bg-gradient2 active:scale-[99%] transition-all duration-200'>
                <h2 className='text-base sm:text-lg md:text-xl'>خواننده ها</h2>
                <Image
                    className='size-6 sm:size-8 md:size-12'
                    src={'/images/logo-singer.png'}
                    alt='logo'
                    width={500}
                    height={500}
                    quality={100}
                    priority
                    loading='eager'
                />
            </Link>

            <div
                className='w-full flex flex-col items-start justify-start gap-2 sm:gap-4 *:px-2 *:py-2'
                onClick={() => props.onClick && props.onClick()}
            >
                {
                    data.map((item) => (
                        <Link
                            key={item.id}
                            href={'/singer/' + item.name.replaceAll(' ', '-')}
                            className={`group sideBar__singer__item ${props.activeSinger.replaceAll('-', ' ') === item.name && 'text-rose-400'}`}
                            prefetch={false}
                        >
                            <LuMic2 className='sideBar__item__items' />
                            <h3 className='sideBar__item__items flex-1'>{item.name}</h3>
                        </Link>
                    ))
                }
            </div>
        </>
    )
}

export default SingerItems

const fetchData = () => {
    const list: SingerType[] = [
        {
            id: 1,
            name: 'محسن یگانه'
        }, {
            id: 2,
            name: 'محسن چاوشی چاوشی چاوشی چاوشی'
        }, {
            id: 3,
            name: 'علیرضا طلیسچی'
        }
    ]

    return list
}