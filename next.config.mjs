import withPWAInit from "@ducanh2912/next-pwa";

const pwa = withPWAInit({
    dest: "public",
    disable: process.env.NODE_ENV === 'development',
    register: true,
    skipWaiting: true,
    //   scope: '/app',
    //   sw: 'service-worker.js',
    //   fallbacks: {
    //       document: '/offline',
    //   },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    // compiler: {
    //     removeConsole: true
    // },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'arashaltafi.ir',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'music-fa.com',
                port: '',
                pathname: '/**',
            },
        ],
    }
};

export default nextConfig;
