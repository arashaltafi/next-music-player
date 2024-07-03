import AllSingers from '@/components/AllSingers'
import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import ResponsivePagination from 'react-responsive-pagination';
import 'react-responsive-pagination/themes/classic.css';
import RoutesAddress from '@/utils/Routes';

const Singers = () => {
    const [page, setPage] = useState(1)
    const router = useRouter()

    useEffect(() => {
        router.push(RoutesAddress.SINGER_ALL + "/?page=" + page)
    }, [page])

    return (
        <>
            <Head>
                <title>تمامی خوانندگان | موزیک آنلاین</title>
                <meta name="description" content="صفحه تمامی خوانندگان موزیک آنلاین" />
            </Head>
            <div className='-mb-52 pt-10 w-full flex flex-col gap-16'>
                <h2 className='px-8 self-start font-bold text-4xl'>تمامی خوانندگان:</h2>
                <AllSingers />
                <div className='w-full flex items-center justify-center gap-8'>
                    <ResponsivePagination
                        current={page}
                        total={20}
                        onPageChange={(page) => {
                            setPage(page)
                        }}
                    />
                </div>
            </div>
        </>
    )
}

export default Singers