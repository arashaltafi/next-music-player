import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'
import TitleComponent from './TitleComponent'

interface PropsType {
    isReverce: boolean
    src1: string
    src2: string
    src3: string
    link1: string
    link2: string
    link3: string
}

const BannerHomePage = (props: PropsType) => {
    const router = useRouter()

    return (
        <div className={`w-full flex items-center justify-between gap-4 ${props.isReverce ? 'flex-row-reverse' : 'flex-row'}`}>
            <div className='size-full'>
                <TitleComponent>
                    <Image
                        className='w-full h-48 sm:h-98 rounded-xl cursor-pointer hover:brightness-125 active:brightness-90 transition-all duration-300'
                        src={props.src1}
                        width={500}
                        height={500}
                        alt='banner 1'
                        onClick={() => router.push(props.link1.replaceAll(' ', '-'))}
                    />
                </TitleComponent>
            </div>
            <div className='size-full flex flex-col gap-2 items-center justify-center cursor-pointer hover:brightness-125 active:brightness-90 transition-all duration-300'>
                <TitleComponent className='w-full'>
                    <Image
                        className='w-full h-23 sm:h-48 rounded-xl'
                        src={props.src2}
                        width={500}
                        height={500}
                        alt='banner 2'
                        onClick={() => router.push(props.link2.replaceAll(' ', '-'))}
                    />
                </TitleComponent>
                <TitleComponent className='w-full'>
                    <Image
                        className='w-full h-23 sm:h-48 rounded-xl cursor-pointer hover:brightness-125 active:brightness-90 transition-all duration-300'
                        src={props.src3}
                        width={500}
                        height={500}
                        alt='banner 3'
                        onClick={() => router.push(props.link3.replaceAll(' ', '-'))}
                    />
                </TitleComponent>
            </div>
        </div>
    )
}

export default BannerHomePage