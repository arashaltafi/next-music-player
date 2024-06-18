import React from 'react'
import MusicComponent from './MusicComponent'

const MusicsComponent = () => {
    return (
        <div className='w-full h-full grid grid-cols-4 items-center justify-center gap-x-8 gap-y-6 overflow-hidden'>
            <MusicComponent />
            <MusicComponent />
            <MusicComponent />
            <MusicComponent />
            <MusicComponent />
        </div>
    )
}

export default MusicsComponent