"use client";

import React, { useState } from 'react'
import { IoPlaySkipForward } from "react-icons/io5";
import { IoPlaySkipBack } from "react-icons/io5";
import { TbRepeatOff } from "react-icons/tb";
import { TbRepeat } from "react-icons/tb";
import { FaShuffle } from "react-icons/fa6";
import { Avatar, Slider } from '@nextui-org/react';
import { MdFavorite } from "react-icons/md";
import { MdFavoriteBorder } from "react-icons/md";
import Divider from './Divider';
import { FaPlayCircle } from "react-icons/fa";
import { FaPauseCircle } from "react-icons/fa";

const Footer = () => {
    const [isFav, setIsFav] = useState<boolean>(false)
    const [isPlaying, setIsPlaying] = useState<boolean>(false)
    const [isRepeat, setIsRepeat] = useState<boolean>(false)

    const handleFav = () => {
        setIsFav(!isFav)
        console.log('isFav', isFav)
    }

    const handleRepeat = () => {
        setIsRepeat(!isRepeat)
        console.log('isRepeat', isRepeat)
    }

    const handlePlay = () => {
        setIsPlaying(!isPlaying)
        console.log('isPlaying', isPlaying)
    }

    const handleNavigateMusic = (isSkipNext: boolean) => {
        const stateMusic = isSkipNext ? 'next' : 'prev'
        console.log('handleNavigateMusic', stateMusic)
    }

    const handleShuffleMusic = () => {
        console.log('handleShuffleMusic')
    }

    return (
        <footer className='w-full bg-slate-800 flex items-center justify-center gap-8 py-4 px-8'>
            <div className='flex items-center justify-center gap-4'>
                <div onClick={handleFav} className='cursor-pointer'>
                    {
                        isFav ? (
                            <MdFavoriteBorder className='text-2xl' />
                        ) : (
                            <MdFavorite className='text-2xl' />
                        )
                    }
                </div>

                <div className='max-w-24 flex flex-col items-center justify-center gap-1'>
                    <h4 className='text-base font-medium'>محسن یگانه</h4>
                    <h5 className='text-sm font-light'>سرگرمی تو</h5>
                </div>
                <Avatar
                    src="https://arashaltafi.ir/arash.jpg"
                    name='arash'
                    className='size-14 sm:size-16 md:size-18 bg-slate-700 p-px border-2 border-rose-500'
                />
            </div>

            <Divider isVerticaly />

            <div className='flex-1 flex items-center justify-center bg-green-500'>
                <h4>04:23</h4>
                <Slider
                    label='Temperature'
                    color={'primary'}
                    step={0.01}
                    radius={'full'}
                    maxValue={1}
                    minValue={0}
                    defaultValue={0.7}
                    aria-label="Temperature"
                    className="max-w-md"
                />
                <h4>00:00</h4>
            </div>

            <Divider isVerticaly />

            <div className='flex gap-3 items-center justify-center'>
                <FaShuffle
                    onClick={handleShuffleMusic}
                    className='icon-music'
                />

                <IoPlaySkipForward
                    onClick={() => handleNavigateMusic(true)}
                    className='icon-music'
                />

                <div onClick={handlePlay}>
                    {
                        isPlaying ? (
                            <FaPauseCircle className='icon-music text-5xl hover:scale-110 active:scale-90' />
                        ) : (
                            <FaPlayCircle className='icon-music text-5xl hover:scale-110 active:scale-90' />
                        )
                    }
                </div>

                <IoPlaySkipBack
                    onClick={() => handleNavigateMusic(false)}
                    className='icon-music'
                />

                <div onClick={handleRepeat}>
                    {
                        isRepeat ? (
                            <TbRepeat className='icon-music' />
                        ) : (
                            <TbRepeatOff className='icon-music' />
                        )
                    }
                </div>
            </div>
        </footer>
    )
}

export default Footer