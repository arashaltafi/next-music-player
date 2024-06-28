import Image from 'next/image'
import React from 'react'

interface PropsType {
    isReverce: boolean
    src1: string
    src2: string
    src3: string
}

const BannerHomePage = (props: PropsType) => {
    return (
        <div className={`w-full flex items-center justify-between gap-4 ${props.isReverce ? 'flex-row-reverse' : 'flex-row'}`}>
            <div className='size-full'>
                <Image
                    className='w-full h-98 rounded-xl cursor-pointer hover:brightness-125 active:brightness-90 transition-all duration-300'
                    src={props.src1}
                    width={500}
                    height={500}
                    alt='banner 1'
                />
            </div>
            <div className='size-full flex flex-col gap-2 items-center justify-center cursor-pointer hover:brightness-125 active:brightness-90 transition-all duration-300'>
                <Image
                    className='w-full h-48 rounded-xl'
                    src={props.src2}
                    width={500}
                    height={500}
                    alt='banner 2'
                />
                <Image
                    className='w-full h-48 rounded-xl cursor-pointer hover:brightness-125 active:brightness-90 transition-all duration-300'
                    src={props.src3}
                    width={500}
                    height={500}
                    alt='banner 3'
                />
            </div>
        </div>
    )
}

export default BannerHomePage