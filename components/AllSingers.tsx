import React from 'react'
import Singer from './Singer'

interface PropsType {
    isFav?: boolean,
    data?: {
        id: number,
        name: number,
        image: number,
    }[]
}

const AllSingers = (props: PropsType) => {
    return (
        <div className='w-full h-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-8 overflow-hidden'>
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