import Image from 'next/image'
import React from 'react'

interface PropsType {
    src: string,
    className?: string
}

const ImageHomePageComponent = (props: PropsType) => {
    return (
        <Image
            className={`
                h-auto hover:scale-105 hover:brightness-110 active:brightness-90 active:scale-95 cursor-pointer transition-all duration-300
                ${props.className ? props.className : 'w-1/2 mb-4'}
            `}
            src={props.src}
            width={1000}
            height={1000}
            loading='lazy'
            quality={100}
            alt='background wave'
        />
    )
}

export default ImageHomePageComponent