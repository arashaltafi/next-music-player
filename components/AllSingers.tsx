import React from 'react'
import Singer from './Singer'
import { SingersType } from '@/utils/Type'

interface PropsType {
    isFav?: boolean,
    data?: SingersType
}

const AllSingers = (props: PropsType) => {
    return (
        <div className='pt-4 sm:pt-8 md:pt-12 lg:pt-16 w-full h-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-8 overflow-hidden px-2 sm:px-4'>
            {
                props?.data?.map((item: any) => (
                    <Singer
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        image={item.image}
                        isFav={props.isFav}
                    />
                ))
            }
        </div>
    )
}

export default AllSingers