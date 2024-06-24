"use client"

import React, { useEffect, useRef, useState } from 'react'
import { TbRewindForward10 } from "react-icons/tb";
import { TbRewindBackward10 } from "react-icons/tb";
import { FaPlayCircle } from "react-icons/fa";
import { FaPauseCircle } from "react-icons/fa";
import { TbRepeatOff } from "react-icons/tb";
import { TbRepeat } from "react-icons/tb";
import { GoUnmute } from "react-icons/go";
import { IoVolumeMuteOutline } from "react-icons/io5";
import { FiDownloadCloud } from "react-icons/fi";
import { MdFavoriteBorder } from "react-icons/md";
import { MdFavorite } from "react-icons/md";
import { FaCamera } from "react-icons/fa";
import { MdFullscreen } from "react-icons/md";
import html2canvas from 'html2canvas';

interface PropsType {
    src: string
}

const VideoPlayer = (props: PropsType) => {
    const videoRef = useRef<HTMLVideoElement>(null)
    const [isFav, setIsFav] = useState<boolean>(false)
    const [isPlaying, setIsPlaying] = useState<boolean>(false)
    const [isRepeat, setIsRepeat] = useState<boolean>(false)
    const [volume, setVolume] = useState<number>(1)
    const [duration, setDuration] = useState<number>(0)
    const [currentTime, setCurrentTime] = useState<number>(0)
    const [isMuted, setIsMuted] = useState<boolean>(false)

    // update time video
    useEffect(() => {
        const handleTimeUpdate = () => {
            if (videoRef.current) {
                setCurrentTime(videoRef.current.currentTime)
            }
        }

        const handleLoadedMetadata = () => {
            if (videoRef.current) {
                setDuration(videoRef.current.duration)
            }
        }

        if (videoRef.current) {
            videoRef.current.addEventListener('timeupdate', handleTimeUpdate)
            videoRef.current.addEventListener('loadedmetadata', handleLoadedMetadata)
            return () => {
                if (videoRef.current) {
                    videoRef.current.removeEventListener('timeupdate', handleTimeUpdate)
                    videoRef.current.removeEventListener('loadedmetadata', handleLoadedMetadata)
                }
            }
        }
    }, [props.src])

    const handlePlayPause = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause()
            } else {
                videoRef.current.play()
            }
            setIsPlaying(!isPlaying)
        }
    }

    const handleRepeat = () => {
        setIsRepeat(!isRepeat)
    }

    const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newVolume = parseFloat(event.target.value)
        setVolume(newVolume)
        if (videoRef.current) {
            videoRef.current.volume = newVolume
        }
    }

    const handleMuteUnmute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !isMuted
            setIsMuted(!isMuted)
        }
    }

    const handleFullScreen = () => {
        if (videoRef.current && videoRef.current.requestFullscreen) {
            videoRef.current.requestFullscreen()
        }
    }

    const handleDownload = () => {
        if (videoRef.current) {
            const link = document.createElement('a')
            link.href = videoRef.current.currentSrc
            link.download = `video${Date.now()}.mp4`
            link.click()
        }
    }

    const handleCapture = () => {
        if (videoRef.current) {
            html2canvas(videoRef.current, {
                allowTaint: true,
                useCORS: true,
                backgroundColor: 'transparent',
            }).then(canvas => {
                const base64 = canvas.toDataURL('image/png')
                const link = document.createElement('a')
                link.href = base64
                link.download = `capture${Date.now()}.png`
                document.body.appendChild(link)
                link.click()
                document.body.removeChild(link)
            });
        }
    }

    const handleSkipForward = (sec: number) => {
        if (videoRef.current) {
            videoRef.current.currentTime += sec
        }
    }

    const handleSkipBackward = (sec: number) => {
        if (videoRef.current) {
            videoRef.current.currentTime -= sec
        }
    }

    const handleTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newTime = parseFloat(event.target.value)
        setCurrentTime(newTime)
        if (videoRef.current) {
            videoRef.current.currentTime = newTime
        }
    }

    const handleFav = () => {
        setIsFav(!isFav)
        console.log('isFav', isFav)
    }

    return (
        <div className='w-full gap-8 flex flex-col items-center justify-center'>
            <video
                className={`h-full md:h-[70vh] rounded-xl`}
                onClick={handlePlayPause}
                onDoubleClick={handleMuteUnmute}
                ref={videoRef}
                src={props.src}
                onEnded={() => {
                    if (isRepeat) {
                        videoRef.current?.play()
                    } else {
                        setIsPlaying(false)
                    }
                }}
            />

            <div className='w-full flex justify-between items-center gap-8'>
                <TbRewindForward10
                    onClick={() => handleSkipForward(10)}
                    className='icon-music'
                />
                <input
                    dir='ltr'
                    type="range"
                    min="0"
                    max={duration}
                    step="0.01"
                    value={currentTime}
                    style={{ background: `linear-gradient(to right, #FB7185 ${(currentTime / duration) * 100}%, #E2E8F0 ${(currentTime / duration) * 100}%)` }}
                    className={`w-full disabled:opacity-30`}
                    onChange={handleTimeChange}
                />
                <TbRewindBackward10
                    onClick={() => handleSkipBackward(10)}
                    className='icon-music'
                />
            </div>

            <div className='w-full flex items-center justify-center gap-8'>
                <MdFullscreen
                    onClick={handleFullScreen}
                    className='icon-music'
                />

                <FaCamera
                    onClick={handleCapture}
                    className='icon-music'
                />

                <div onClick={handleMuteUnmute}>
                    {
                        isMuted ? (
                            <IoVolumeMuteOutline className='icon-music' />
                        ) : (
                            <GoUnmute className='icon-music' />
                        )
                    }
                </div>

                <>
                    {
                        isPlaying ? (
                            <FaPauseCircle
                                onClick={handlePlayPause}
                                className='icon-music text-5xl hover:scale-110 active:scale-90'
                            />
                        ) : (
                            <FaPlayCircle
                                onClick={handlePlayPause}
                                className='icon-music text-5xl hover:scale-110 active:scale-90'
                            />
                        )
                    }
                </>

                <div onClick={handleRepeat}>
                    {
                        isRepeat ? (
                            <TbRepeat className='icon-music' />
                        ) : (
                            <TbRepeatOff className='icon-music' />
                        )
                    }
                </div>

                <FiDownloadCloud
                    onClick={handleDownload}
                    className='icon-music'
                />

                <div onClick={handleFav}>
                    {
                        isFav ? (
                            <MdFavoriteBorder className='icon-music' />
                        ) : (
                            <MdFavorite className='icon-music' />
                        )
                    }
                </div>

                <input
                    dir='ltr'
                    disabled={isMuted}
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    value={volume}
                    style={{ background: `linear-gradient(to right, #FB7185 ${volume * 100}%, #E2E8F0 ${volume * 100}%)` }}
                    className={`disabled:opacity-30`}
                    onChange={handleVolumeChange}
                />
            </div>
        </div>
    )
}

export default VideoPlayer