import Image from 'next/image'
import React from 'react'

interface PropsType {
    src: string,
    className?: string,
}

const DividerImage = (props: PropsType) => {
    return (
        <Image
            className={`invert w-full sm:w-2/3 h-14 ${props.className}`}
            src={props.src}
            alt='music-divider'
            width={1000}
            height={5}
        />
    )
}

export default DividerImage