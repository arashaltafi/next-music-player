import React from 'react'
import MusicVideoComponent from './MusicVideoComponent'
import { MusicVideoCategory } from '@/utils/Type'

interface PropsType {
    category: MusicVideoCategory
}

const MusicVideosComponent = async (props: PropsType) => {
    const data = await fetchData(props.category)

    return (
        <div className='w-full h-full grid grid-cols-4 items-center justify-center gap-x-8 gap-y-6 overflow-hidden'>
            {
                data.map((item) => (
                    <MusicVideoComponent
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        singer={item.singer}
                        path={item.path}
                        image={item.image}
                    />
                ))
            }
        </div>
    )
}

export default MusicVideosComponent

const fetchData = async (type: MusicVideoCategory) => {
    console.log('PropsType', type)
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const data = await response.json()

    const list = [
        {
            id: 1,
            name: "آمد بهار جان ها",
            path: "https://dls.music-fa.com/tagdl/downloads/Mohsen%20Chavoshi%20-%20Beraghsa%20(128).mp3",
            image: "https://music-fa.com/wp-content/uploads/2018/12/M-chavoshi4956439822146524268375268572682365.jpg",
            singer: "محسن چاوشی"
        },
        {
            id: 2,
            name: "شیک",
            path: "https://dls.music-fa.com/tagdl/downloads/Yousef%20Zamani%20-%20Shik%20(128).mp3",
            image: "https://music-fa.com/wp-content/uploads/2019/03/Y-zamani9856293865884752493.jpg",
            singer: "یوسف زمانی"
        },
        {
            id: 3,
            name: "بهت قول میدم",
            path: "https://dls.music-fa.com/tagdl/downloads/Mohsen%20Yeganeh%20-%20Behet%20Ghol%20Midam%20(128).mp3",
            image: "https://music-fa.com/wp-content/uploads/2018/12/M-yegane83658723567456837456986745867509673452355.jpg",
            singer: "محسن یگانه"
        },
        {
            id: 4,
            name: "نشکن دلمو",
            path: "https://dls.music-fa.com/tagdl/downloads/Yegane%20Chavoshi%20Hakan%20-%20Nashkan%20Delamo%20(128).mp3",
            image: "https://music-fa.com/wp-content/uploads/2019/01/hakan-chavoshi-yegane9385239857243987524527.jpg",
            singer: "محسن یگانه"
        },
        {
            id: 5,
            name: "آخرش قشنگه",
            path: "https://dls.music-fa.com/tagdl/downloads/Alireza%20Talischi%20-%20Akharesh%20Ghashange%20(128).mp3",
            image: "https://music-fa.com/wp-content/uploads/2018/10/A-talischi243264y235634.jpg",
            singer: "علیرضا طلیسچی"
        }
    ]

    return list
}