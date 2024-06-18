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
import { FiDownloadCloud } from "react-icons/fi";

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
                name: "آمد بهار جان ها",
                path: "https://dls.music-fa.com/tagdl/downloads/Mohsen%20Chavoshi%20-%20Beraghsa%20(128).mp3",
                img: "https://music-fa.com/wp-content/uploads/2018/12/M-chavoshi4956439822146524268375268572682365.jpg",
                singer: "محسن چاوشی"
            },
            {
                name: "شیک",
                path: "https://dls.music-fa.com/tagdl/downloads/Yousef%20Zamani%20-%20Shik%20(128).mp3",
                img: "https://music-fa.com/wp-content/uploads/2019/03/Y-zamani9856293865884752493.jpg",
                singer: "یوسف زمانی"
            },
            {
                name: "بهت قول میدم",
                path: "https://dls.music-fa.com/tagdl/downloads/Mohsen%20Yeganeh%20-%20Behet%20Ghol%20Midam%20(128).mp3",
                img: "https://music-fa.com/wp-content/uploads/2018/12/M-yegane83658723567456837456986745867509673452355.jpg",
                singer: "محسن یگانه"
            },
            {
                name: "نشکن دلمو",
                path: "https://dls.music-fa.com/tagdl/downloads/Yegane%20Chavoshi%20Hakan%20-%20Nashkan%20Delamo%20(128).mp3",
                img: "https://music-fa.com/wp-content/uploads/2019/01/hakan-chavoshi-yegane9385239857243987524527.jpg",
                singer: "محسن یگانه"
            },
            {
                name: "آخرش قشنگه",
                path: "https://dls.music-fa.com/tagdl/downloads/Alireza%20Talischi%20-%20Akharesh%20Ghashange%20(128).mp3",
                img: "https://music-fa.com/wp-content/uploads/2018/10/A-talischi243264y235634.jpg",
                singer: "علیرضا طلیسچی"
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
        setIndexNo(Math.floor(Math.random() * musics.length))
        setTimeout(() => {
            playMusic()
        }, 100);
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

    const handleDownload = () => {
        const url = musics[indexNo].path
        const name = musics[indexNo].singer + '___' + musics[indexNo].name + '.mp3'
        const link = document.createElement('a')
        link.href = url
        link.download = name
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }

    return (
        <div className='fixed bottom-0 left-0 right-0 z-30 w-full flex flex-col gap-4 items-center justify-center py-4 px-1 sm:px-4 md:px-8 bg-slate-700 rounded-t-xl'>
            <div className='flex xl:hidden w-full gap-4 items-center justify-center'>
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
            <footer className='w-full bg-slate-700 flex flex-col sm:flex-row items-center justify-center gap-x-8 gap-y-4'>
                <div className='flex w-full xl:w-auto items-center justify-center gap-4'>
                    <FiDownloadCloud
                        onClick={handleDownload}
                        className='cursor-pointer text-2xl'
                    />

                    <div onClick={handleFav} className='cursor-pointer'>
                        {
                            isFav ? (
                                <MdFavoriteBorder className='text-2xl' />
                            ) : (
                                <MdFavorite className='text-2xl' />
                            )
                        }
                    </div>

                    <div className='max-w-24 flex flex-col items-center justify-center gap-1 text-center'>
                        <h4 className='text-base font-medium'>{musics && musics[indexNo] && musics[indexNo].singer}</h4>
                        <h5 className='text-sm font-light'>{musics && musics[indexNo] && musics[indexNo].name}</h5>
                    </div>

                    <Avatar
                        src={musics && musics[indexNo] && musics[indexNo].img}
                        name='arash'
                        className='size-14 sm:size-16 md:size-18 bg-slate-700 p-px border-2 border-rose-500'
                    />
                </div>

                <Divider className='hidden xl:block' isVerticaly />

                <div className='hidden xl:flex flex-1 gap-4 items-center justify-center'>
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

                <Divider className='hidden sm:block' isVerticaly />

                <div className='flex w-full xl:w-auto gap-3 items-center justify-center'>
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
        </div>
    )
}

export default Footer