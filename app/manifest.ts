import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Music Player',
        short_name: 'Music Player',
        description: 'Music Player Online',
        start_url: '/',
        display: 'standalone',
        background_color: '#f8f8f8',
        theme_color: '#f8f8f8',
        icons: [
            {
                src: '/images/logo.png',
                sizes: 'any',
                type: 'image/x-icon',
            },
        ],
    }
}