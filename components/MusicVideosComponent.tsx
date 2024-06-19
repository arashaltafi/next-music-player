import React from 'react'
import MusicVideoComponent from './MusicVideoComponent'

const MusicVideosComponent = () => {
    return (
        <div className='w-full h-full grid grid-cols-4 items-center justify-center gap-x-8 gap-y-6 overflow-hidden'>
            <MusicVideoComponent />
            <MusicVideoComponent />
            <MusicVideoComponent />
            <MusicVideoComponent />
            <MusicVideoComponent />
            <MusicVideoComponent />
            <MusicVideoComponent />
            <MusicVideoComponent />
        </div>
    )
}

export default MusicVideosComponent