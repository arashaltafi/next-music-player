import React from 'react'

const Singer = async ({ params }: { params: { name: string } }) => {
    const data = await fetchData(params.name)

    return (
        <>
            <h2>Singer</h2>
            <h4>{decodeURIComponent(params.name).replaceAll('-', ' ')}</h4>
        </>
    )
}

export const generateMetadata = ({ params }: { params: { name: string } }) => {
    const singer = decodeURIComponent(params.name).replaceAll('-', ' ')

    return {
        title: singer,
        description: `صفحه خواننده: ${singer}`,
    }
}

const fetchData = async (singer: string) => {
    // const res = await fetch(`https://api.1loc.dev/singer/${singer}`)
    // const data = await res.json()
    // return data
}

export default Singer