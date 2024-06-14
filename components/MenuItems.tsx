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
                <div className='group sideBar__item'>
                    <FaMusic className='sideBar__item__items' />
                    <h3 className='sideBar__item__items'>تمامی موزیک ها</h3>
                </div>
                <div className='group sideBar__item'>
                    <GiMusicalNotes className='sideBar__item__items' />
                    <h3 className='sideBar__item__items'>برترین موزیک ها</h3>
                </div>
                <div className='group sideBar__item'>
                    <BsMusicNoteList className='sideBar__item__items' />
                    <h3 className='sideBar__item__items'>آخرین موزیک ها</h3>
                </div>
                <div className='group sideBar__item'>
                    <TbMusicHeart className='sideBar__item__items' />
                    <h3 className='sideBar__item__items'>موزیک های پیشنهادی</h3>
                </div>

                <Divider />

                <div className='group sideBar__item'>
                    <FaVideo className='sideBar__item__items' />
                    <h3 className='sideBar__item__items'>تمامی موزیک ویدیوها</h3>
                </div>
                <div className='group sideBar__item'>
                    <AiFillVideoCamera className='sideBar__item__items' />
                    <h3 className='sideBar__item__items'>برترین موزیک ویدیوها</h3>
                </div>
                <div className='group sideBar__item'>
                    <BiSolidVideoRecording className='sideBar__item__items' />
                    <h3 className='sideBar__item__items'>آخرین موزیک ویدیوها</h3>
                </div>
                <div className='group sideBar__item'>
                    <ImVideoCamera className='sideBar__item__items' />
                    <h3 className='sideBar__item__items'>موزیک ویدیوهای پیشنهادی</h3>
                </div>

                <Divider />

                <div className='group sideBar__item'>
                    <MdFavorite className='sideBar__item__items' />
                    <h3 className='sideBar__item__items'>موزیک های مورد علاقه</h3>
                </div>
                <div className='group sideBar__item'>
                    <MdFavorite className='sideBar__item__items' />
                    <h3 className='sideBar__item__items'>موزیک ویدیوهای مورد علاقه</h3>
                </div>

                <Divider />

                <div className='group sideBar__item'>
                    <FaUser className='sideBar__item__items' />
                    <h3 className='sideBar__item__items'>تمامی خوانندگان</h3>
                </div>
                <div className='group sideBar__item'>
                    <FaUserCheck className='sideBar__item__items' />
                    <h3 className='sideBar__item__items'>خوانندگان برتر</h3>
                </div>
            </div>
        </>
    )
}

export default MenuItems