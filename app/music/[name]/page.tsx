import React from 'react'

const Music = async ({ params }: { params: { name: string } }) => {
    return (
        <div>
            <h2 className='self-start font-medium text-xl'>{decodeURIComponent(params.name).replaceAll('-', ' ')}</h2>
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

export default Music