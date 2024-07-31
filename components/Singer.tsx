import { showConfetti } from '@/utils/Animation'
import { SingerType } from '@/utils/Type'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'

const Singer = (props: SingerType) => {

    useEffect(() => {
        if (props.isFav) {
            showConfetti()
        }
    }, [props.isFav])

    return (
        <div className={`select-none w-full flex flex-col gap-7 items-center justify-center px-2 ${props.isFav && 'bg-pattern-1 rounded-boxRadius py-4'}`}>
            <Link
                href={'/singer/' + props.name.replaceAll(' ', '-')}
                className='w-full flex items-center justify-center'
            >
                <Image
                    data-key={props.id}
                    className={`cursor-pointer w-[calc(100%-64px)] h-64 ${props.isFav ? 'rounded-singerFav' : 'rounded-full'} border border-rose-500 shadow-musicShadow border-dotted hover:scale-105 active:scale-95 hover:brightness-125 transition-all duration-300`}
                    src={props.image || ''}
                    alt={props.name}
                    width={500}
                    height={500}
                    loading='lazy'
                />
            </Link>

            <h3 className={`text-sm sm:text-base ${props.isFav ? 'bg-white text-black border-black' : 'bg-rose-500 text-white border-white'} px-4 md:px-6 py-1 md:py-2 rounded-lg border border-dashed line-clamp-1`}>
                {props.name}
            </h3>
        </div>
    )
}

export default Singer