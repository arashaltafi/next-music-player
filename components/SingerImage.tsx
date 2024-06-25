import { showConfetti } from '@/utils/Animation'
import Image from 'next/image'
import React from 'react'

interface PropsType {
    name: string,
    src: string
}

const SingerImage = (props: PropsType) => {
    return (
        <Image
            onClick={showConfetti}
            className='w-1/3 cursor-pointer rounded-full border border-slate-500 shadow-musicShadow border-solid hover:scale-105 active:scale-95 hover:brightness-110 transition-all duration-300'
            src={props.src}
            alt={props.name}
            width={500}
            height={500}
            loading='lazy'
        />
    )
}

export default SingerImage