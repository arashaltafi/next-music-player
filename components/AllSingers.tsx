import React from 'react'
import Singer from './Singer'
import { SingerType } from '@/utils/Type'

interface PropsType {
    isFav?: boolean
}

const AllSingers = (props: PropsType) => {
    const data: SingerType[] = [
        {
            id: 1,
            name: 'محسن یگانه',
            image: "https://music-fa.com/wp-content/uploads/2019/01/hakan-chavoshi-yegane9385239857243987524527.jpg"
        }, {
            id: 2,
            name: 'محسن چاوشی',
            image: "https://music-fa.com/wp-content/uploads/2018/12/M-chavoshi4956439822146524268375268572682365.jpg"
        }, {
            id: 3,
            name: 'علیرضا طلیسچی',
            image: "https://music-fa.com/wp-content/uploads/2018/10/A-talischi243264y235634.jpg"
        }, {
            id: 4,
            name: "یوسف زمانی",
            image: "https://music-fa.com/wp-content/uploads/2019/03/Y-zamani9856293865884752493.jpg"
        }, {
            id: 5,
            name: 'محسن چاوشی',
            image: "https://music-fa.com/wp-content/uploads/2018/12/M-chavoshi4956439822146524268375268572682365.jpg"
        }, {
            id: 6,
            name: 'علیرضا طلیسچی',
            image: "https://music-fa.com/wp-content/uploads/2018/10/A-talischi243264y235634.jpg"
        }, {
            id: 7,
            name: "یوسف زمانی",
            image: "https://music-fa.com/wp-content/uploads/2019/03/Y-zamani9856293865884752493.jpg"
        }
    ]

    return (
        <div className='w-full h-full grid grid-cols-3 items-center justify-center gap-8 overflow-hidden'>
            {
                data.map((item) => (
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