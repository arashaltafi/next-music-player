"use client";

import React, { useEffect, useRef, useState } from 'react'
import { IoPlaySkipForward } from "react-icons/io5";
import { IoPlaySkipBack } from "react-icons/io5";
import { TbRepeatOff } from "react-icons/tb";
import { TbRepeat } from "react-icons/tb";
import { FaShuffle } from "react-icons/fa6";
import { Avatar } from '@nextui-org/react';
import { MdFavorite } from "react-icons/md";
import { MdFavoriteBorder } from "react-icons/md";
import Divider from './Divider';
import { FaPlayCircle } from "react-icons/fa";
import { FaPauseCircle } from "react-icons/fa";
import { MusicType } from '@/types/Music';
import { convertSecondToTime } from '@/utils/Global';
import { GoUnmute } from "react-icons/go";
import { IoVolumeMuteOutline } from "react-icons/io5";

const Footer = () => {
    const [isFav, setIsFav] = useState<boolean>(false)
    const [isPlaying, setIsPlaying] = useState<boolean>(false)
    const [isMute, setIsMute] = useState<boolean>(false)
    const [isRepeat, setIsRepeat] = useState<boolean>(false)
    const [currentTime, setCurrentTime] = useState<number>(0)
    const [musics, setMusics] = useState<MusicType[]>([])
    const [duration, setDuration] = useState<number>(0)
    const audioRef = useRef<HTMLAudioElement>(null)
    const timerRef = useRef<NodeJS.Timeout | null>(null)
    const [indexNo, setIndexNo] = useState<number>(0)

    // get musics
    useEffect(() => {
        setMusics([
            {
                name: "first song",
                path: "https://dls.music-fa.com/tagdl/1402/Yousef%20Zamani%20-%20Az%20To%20Behtar%20(320).mp3",
                img: "https://arashaltafi.ir/Social_Media/story-02.jpg",
                singer: "محسن یگانه"
            },
            {
                name: "second song",
                path: "https://dls.music-fa.com/song/alibz/1403/Yousef%20Zamani%20-%20Jange%20Jahani%20(320).mp3",
                img: "https://arashaltafi.ir/Social_Media/story-03.jpg",
                singer: "محسن یگانه"
            },
            {
                name: "third song",
                path: "https://dls.music-fa.com/tagdl/1402/Yousef%20Zamani%20-%20Malakeye%20Ehsas%20(320).mp3",
                img: "https://arashaltafi.ir/Social_Media/story-04.jpg",
                singer: "محسن یگانه"
            },
            {
                name: "fourth song",
                path: "https://dls.music-fa.com/tagdl/1402/Yousef%20Zamani%20-%20In%20Nafas%20(320).mp3",
                img: "https://arashaltafi.ir/Social_Media/story-05.jpg",
                singer: "محسن یگانه"
            },
            {
                name: "fifth song",
                path: "https://dls.music-fa.com/tagdl/1402/Farshad%20Azadi%20-%20Divanam%20Nako%20(320).mp3",
                img: "https://arashaltafi.ir/Social_Media/story-01.jpg",
                singer: "محسن یگانه"
            },
        ])
    }, [])

    // update time video
    useEffect(() => {
        const handleTimeUpdate = () => {
            if (audioRef.current) {
                console.log('duration handleTimeUpdate:', audioRef.current.duration)
                setCurrentTime(audioRef.current.currentTime)
            }
        }

        const handleLoadedMetadata = () => {
            if (audioRef.current) {
                console.log('duration handleLoadedMetadata:', audioRef.current.duration)
                setDuration(audioRef.current.duration)
            }
        }

        if (audioRef.current) {
            audioRef.current.addEventListener('timeupdate', handleTimeUpdate)
            audioRef.current.addEventListener('loadedmetadata', handleLoadedMetadata)
            return () => {
                if (audioRef.current) {
                    audioRef.current.removeEventListener('timeupdate', handleTimeUpdate)
                    audioRef.current.removeEventListener('loadedmetadata', handleLoadedMetadata)
                }
            }
        }
    }, [])

    // load track
    useEffect(() => {
        if (musics && musics.length > 0) {
            loadTrack(indexNo)
        }
        return () => {
            if (timerRef.current) {
                clearInterval(timerRef.current)
            }
        }
    }, [indexNo, musics])

    const loadTrack = (index: number) => {
        if (audioRef.current) {
            audioRef.current.src = musics[index].path
            console.log('musics[index].path:', musics[index].path)
            audioRef.current.load()
            setCurrentTime(0)
        }
        if (timerRef.current) {
            clearInterval(timerRef.current)
        }
        timerRef.current = setInterval(rangeSlider, 1000)
    }

    const rangeSlider = () => {
        if (audioRef.current) {
            const position = audioRef.current.currentTime
            setCurrentTime(position)
        }

        if (audioRef.current && audioRef.current.ended) {
            setIsPlaying(false)
            if (isRepeat) {
                playMusic()
            } else {
                nextMusic()
            }
        }
    }

    const handleFav = () => {
        setIsFav(!isFav)
        console.log('isFav', isFav)
    }

    const handleRepeat = () => {
        setIsRepeat(!isRepeat)
    }

    const handleNavigateMusic = (isSkipNext: boolean) => {
        const stateMusic = isSkipNext ? 'next' : 'prev'
        if (audioRef.current) {
            if (stateMusic === 'next') {
                nextMusic()
            } else {
                previousMusic()
            }
        }
    }

    const handleShuffleMusic = () => {
        console.log('handleShuffleMusic')
    }

    const handleTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newTime = parseFloat(event.target.value)
        setCurrentTime(newTime)
        if (audioRef.current) {
            audioRef.current.currentTime = newTime
        }
    }

    const playMusic = () => {
        if (audioRef.current) {
            audioRef.current.play()
        }
        setIsPlaying(true)
    }

    const pauseMusic = () => {
        if (audioRef.current) {
            audioRef.current.pause()
        }
        setIsPlaying(false)
    }

    const nextMusic = () => {
        if (indexNo < musics.length - 1) {
            setIndexNo(indexNo + 1)
        } else {
            setIndexNo(0)
        }
        setTimeout(() => {
            playMusic()
        }, 100);
    }

    const previousMusic = () => {
        if (indexNo > 0) {
            setIndexNo(indexNo - 1)
        } else {
            setIndexNo(musics.length - 1)
        }
        setTimeout(() => {
            playMusic()
        }, 100);
    }

    const handleMuteSound = () => {
        if (isMute) {
            if (audioRef.current) {
                audioRef.current.volume = 1
            }
            setIsMute(false)
        } else {
            if (audioRef.current) {
                audioRef.current.volume = 0
            }
            setIsMute(true)
        }
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

            <div className='flex-1 flex gap-4 items-center justify-center'>
                <h4 className='text-base w-14 text-center text-nowrap line-clamp-1'>{convertSecondToTime(duration)}</h4>
                <input
                    dir='ltr'
                    type="range"
                    min="0"
                    max={duration}
                    step={1}
                    value={currentTime}
                    style={{ background: `linear-gradient(to right, #FB7185 ${(currentTime / duration) * 100}%, #E2E8F0 ${(currentTime / duration) * 100}%)` }}
                    className={`w-full disabled:opacity-30`}
                    onChange={handleTimeChange}
                />
                <h4 className='text-base w-14 text-center text-nowrap line-clamp-1'>{convertSecondToTime(currentTime)}</h4>
                <audio ref={audioRef} />
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

                <>
                    {
                        isPlaying ? (
                            <FaPauseCircle onClick={pauseMusic} className='icon-music text-5xl hover:scale-110 active:scale-90' />
                        ) : (
                            <FaPlayCircle onClick={playMusic} className='icon-music text-5xl hover:scale-110 active:scale-90' />
                        )
                    }
                </>

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

                <div onClick={handleMuteSound}>
                    {
                        isMute ? (
                            <IoVolumeMuteOutline className='icon-music' />
                        ) : (
                            <GoUnmute className='icon-music' />
                        )
                    }
                </div>
            </div>
        </footer>
    )
}

export default Footer