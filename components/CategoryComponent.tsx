import React from 'react'
import RoutesAddress from '@/utils/Routes'
import Image from 'next/image'
import { useRouter } from 'next/router';

const CategoryComponent = () => {
    const router = useRouter()

    const data = [
        {
            id: 1,
            image: 'https://arashaltafi.ir//melodyo/media/app/cat_pop.jpg',
            type: "پاپ"
        },
        {
            id: 2,
            image: 'https://arashaltafi.ir//melodyo/media/app/cat_rap.jpg',
            type: "رپ"
        },
        {
            id: 3,
            image: 'https://arashaltafi.ir//melodyo/media/app/cat_traditional.jpg',
            type: "سنتی"
        },
        {
            id: 4,
            image: 'https://arashaltafi.ir//melodyo/media/app/cat_old.jpg',
            type: "قدیمی"
        }
    ]

    const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const target = e.target as HTMLDivElement
        const targetDiv = target.closest('div')
        if (!targetDiv) return

        const key = targetDiv.getAttribute('data-key')
        if (!key) return

        key.replaceAll(' ', '-')
        router.push({
            pathname: RoutesAddress.CATEGORY,
            query: {
                category: key.replaceAll(' ', '-')
            }
        })
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
                        data-key={item.type}
                        className='flex flex-col gap-2 items-center justify-center cursor-pointer group *:transition-all *:duration-200'
                    >
                        <Image
                            className='size-20 sm:size-24 md:size-32 lg:size-36 rounded-full p-1 border-2 border-rose-500 group-hover:border-white group-hover:scale-105 group-active:scale-95 border-solid'
                            src={item.image}
                            width={500}
                            height={500}
                            alt={item.type}
                        />
                        <h3 className='text-base sm:text-lg md:text-xl lg:text-2xl group-hover:text-rose-500'>{item.type}</h3>
                    </div>
                ))
            }
        </div>
    )
}

export default CategoryComponent