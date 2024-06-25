"use client"

import React from 'react'

interface PropsType {
    id: number,
    name: string,
    singer: string,
    image: string,
    path: string
}

const MusicItem = (props: PropsType) => {
    return (
        <div
            data-key={props.name}
            className='flex flex-col items-center justify-center'
        >
            {props.name}
        </div>
    )
}

export default MusicItem