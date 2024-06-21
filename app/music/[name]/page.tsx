import React from 'react'

const Music = async ({ params }: { params: { name: string } }) => {
    const data = await fetchData(decodeURIComponent(params.name).replaceAll('-', ' '))

    return (
        <div className='mt-10 w-full flex flex-col gap-8 items-center justify-start px-8'>
            <h2 className='self-start font-bold text-4xl'>{data.name}:</h2>
            <div className='w-full bg-red-500'>{data.singer}</div>
        </div>
    )
}

export const generateMetadata = ({ params }: { params: { name: string } }) => {
    const music = decodeURIComponent(params.name).replaceAll('-', ' ')

    return {
        title: music,
        description: `صفحه موزیک: ${music}`,
    }
}

const fetchData = async (name: string) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const data = await response.json()

    const list = {
        id: 1,
        name: "آمد بهار جان ها",
        path: "https://dls.music-fa.com/tagdl/downloads/Mohsen%20Chavoshi%20-%20Beraghsa%20(128).mp3",
        image: "https://music-fa.com/wp-content/uploads/2018/12/M-chavoshi4956439822146524268375268572682365.jpg",
        singer: "محسن چاوشی"
    }

    return list
    return data
}

export default Music