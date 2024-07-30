import React from 'react'
import Singer from './Singer'
import { useQuery } from '@apollo/client'
import { GET_SINGERS } from '@/graphql/graphql-queries'

interface PropsType {
    isFav?: boolean
}

const AllSingers = (props: PropsType) => {
    const { data } = useQuery(GET_SINGERS);

    return (
        <div className='w-full h-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-8 overflow-hidden'>
            {
                data?.singers?.map((item: any) => (
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