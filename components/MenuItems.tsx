import React from 'react'
import Image from 'next/image';
import Divider from './Divider';
import { FaMusic } from "react-icons/fa";
import { GiMusicalNotes } from "react-icons/gi";
import { TbMusicHeart } from "react-icons/tb";
import { BsMusicNoteList } from "react-icons/bs";
import { FaVideo } from "react-icons/fa";
import { AiFillVideoCamera } from "react-icons/ai";
import { ImVideoCamera } from "react-icons/im";
import { BiSolidVideoRecording } from "react-icons/bi";
import { MdFavorite } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { FaUserCheck } from "react-icons/fa";
import Link from 'next/link';
import RoutesAddress from '@/utils/Routes';

const MenuItems = () => {
    return (
        <>
            <div className='w-full flex items-center justify-between cursor-pointer rounded-xl hover:scale-[101%] hover:bg-gradient1 active:scale-[99%] transition-all duration-200'>
                <h1 className='text-lg sm:text-xl md:text-2xl'>موزیک پلیر آنلاین</h1>
                <Image
                    className='size-12 sm:size-14 md:size-16'
                    src={'/images/logo.png'}
                    alt='logo'
                    width={500}
                    height={500}
                    quality={100}
                    priority
                    loading='eager'
                />
            </div>

            <div className='w-full flex flex-col items-start justify-start gap-4 sm:gap-6 *:px-2 *:py-2'>
                <Link
                    href={RoutesAddress.MUSIC_ALL}
                    className='group sideBar__item'
                    prefetch={false}
                >
                    <FaMusic className='sideBar__item__items' />
                    <h3 className='sideBar__item__items flex-1'>تمامی موزیک ها</h3>
                </Link>
                <Link
                    href={RoutesAddress.MUSIC_BEST}
                    className='group sideBar__item'
                    prefetch={false}
                >
                    <GiMusicalNotes className='sideBar__item__items' />
                    <h3 className='sideBar__item__items flex-1'>برترین موزیک ها</h3>
                </Link>
                <Link
                    href={RoutesAddress.MUSIC_NEW}
                    className='group sideBar__item'
                    prefetch={false}
                >
                    <BsMusicNoteList className='sideBar__item__items' />
                    <h3 className='sideBar__item__items flex-1'>آخرین موزیک ها</h3>
                </Link>
                <Link
                    href={RoutesAddress.MUSIC_SUGGESTED}
                    className='group sideBar__item'
                    prefetch={false}
                >
                    <TbMusicHeart className='sideBar__item__items' />
                    <h3 className='sideBar__item__items flex-1'>موزیک های پیشنهادی</h3>
                </Link>

                <Divider />

                <Link
                    href={RoutesAddress.MUSIC_VIDEO_ALL}
                    className='group sideBar__item'
                    prefetch={false}
                >
                    <FaVideo className='sideBar__item__items' />
                    <h3 className='sideBar__item__items flex-1'>تمامی موزیک ویدیوها</h3>
                </Link>
                <Link
                    href={RoutesAddress.MUSIC_VIDEO_BEST}
                    className='group sideBar__item'
                    prefetch={false}
                >
                    <AiFillVideoCamera className='sideBar__item__items' />
                    <h3 className='sideBar__item__items flex-1'>برترین موزیک ویدیوها</h3>
                </Link>
                <Link
                    href={RoutesAddress.MUSIC_VIDEO_NEW}
                    className='group sideBar__item'
                    prefetch={false}
                >
                    <BiSolidVideoRecording className='sideBar__item__items' />
                    <h3 className='sideBar__item__items flex-1'>آخرین موزیک ویدیوها</h3>
                </Link>
                <Link
                    href={RoutesAddress.MUSIC_VIDEO_SUGGESTED}
                    className='group sideBar__item'
                    prefetch={false}
                >
                    <ImVideoCamera className='sideBar__item__items' />
                    <h3 className='sideBar__item__items flex-1'>موزیک ویدیوهای پیشنهادی</h3>
                </Link>

                <Divider />

                <Link
                    href={RoutesAddress.MUSIC_FAV}
                    className='group sideBar__item'
                    prefetch={false}
                >
                    <MdFavorite className='sideBar__item__items' />
                    <h3 className='sideBar__item__items flex-1'>موزیک های مورد علاقه</h3>
                </Link>
                <Link
                    href={RoutesAddress.MUSIC_VIDEO_FAV}
                    className='group sideBar__item'
                    prefetch={false}
                >
                    <MdFavorite className='sideBar__item__items' />
                    <h3 className='sideBar__item__items flex-1'>موزیک ویدیوهای مورد علاقه</h3>
                </Link>

                <Divider />

                <Link
                    href={RoutesAddress.SINGER_ALL}
                    className='group sideBar__item'
                    prefetch={false}
                >
                    <FaUser className='sideBar__item__items' />
                    <h3 className='sideBar__item__items flex-1'>تمامی خوانندگان</h3>
                </Link>
                <Link
                    href={RoutesAddress.SINGER_BEST}
                    className='group sideBar__item'
                    prefetch={false}
                >
                    <FaUserCheck className='sideBar__item__items' />
                    <h3 className='sideBar__item__items flex-1'>خوانندگان برتر</h3>
                </Link>
            </div>
        </>
    )
}

export default MenuItems