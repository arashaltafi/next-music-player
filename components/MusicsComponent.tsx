import React from 'react'
import MusicComponent from './MusicComponent'

const MusicsComponent = () => {
    return (
        <div className='w-full h-full grid grid-cols-4 items-center justify-center gap-x-4 gap-y-4 overflow-hidden'>
            <MusicComponent />
            <MusicComponent />
            <MusicComponent />
            <MusicComponent />
            <MusicComponent />
        </div>
    )
}

export default MusicsComponent