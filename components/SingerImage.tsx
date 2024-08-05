import { showConfetti } from '@/utils/Animation'
import Image from 'next/image'
import React from 'react'
import { MdFavorite } from "react-icons/md";
import { MdFavoriteBorder } from "react-icons/md";

interface PropsType {
    name: string,
    src: string,
    isFav?: boolean,
    handleFav?: (isFav: boolean) => void
}

const SingerImage = (props: PropsType) => {
    const handleFav = () => {
        if (props.isFav != undefined && props.handleFav) {
            props.handleFav(props.isFav)
        }
    }

    return (
        <div className='relative w-1/3 cursor-pointer'>
            <Image
                onClick={showConfetti}
                className='w-full rounded-full border border-slate-500 shadow-musicShadow border-solid hover:scale-105 active:scale-95 hover:brightness-110 transition-all duration-300'
                src={props.src}
                alt={props.name}
                width={500}
                height={500}
                loading='lazy'
            />
            {
                props.isFav != undefined && props.handleFav && (
                    <div onClick={handleFav}>
                        {
                            props.isFav ? (
                                <MdFavorite className='text-2xl' />
                            ) : (
                                <MdFavoriteBorder className='text-2xl' />
                            )
                        }
                    </div>
                )
            }
        </div>
    )
}

export default SingerImage