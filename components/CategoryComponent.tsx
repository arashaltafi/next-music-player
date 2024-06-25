import React from 'react'
import MusicComponent from './MusicComponent'
import RoutesAddress from '@/utils/Routes'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

const CategoryComponent = () => {
    const router = useRouter()

    const data = [
        {
            id: 1,
            type: "شاد"
        },
        {
            id: 2,
            type: "غمگین"
        },
        {
            id: 3,
            type: "پاپ"
        },
        {
            id: 4,
            type: "رپ"
        },
        {
            id: 5,
            type: "قدیمی"
        }
    ]

    const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const target = e.target as HTMLDivElement
        const targetDiv = target.closest('div')
        if (!targetDiv) return

        const key = targetDiv.getAttribute('data-key')
        if (!key) return

        router.push(RoutesAddress.MUSIC + "/" + key.replaceAll(' ', '-'))
    }

    return (
        <div
            className='mb-16 w-full flex flex-wrap items-center justify-center gap-x-8 gap-y-6'
            onClick={(e) => handleClick(e)}
        >
            {
                data.map((item) => (
                    <div
                        key={item.id}
                        className='flex items-center justify-center size-36 rounded-full p-1 border-2 border-rose-500 hover:border-white border-solid hover:bg-rose-500 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer'
                    >
                        <h3 className='text-2xl'>{item.type}</h3>
                    </div>
                ))
            }
        </div>
    )
}

export default CategoryComponent