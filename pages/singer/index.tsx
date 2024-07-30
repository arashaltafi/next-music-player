import AllSingers from '@/components/AllSingers'
import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import ResponsivePagination from 'react-responsive-pagination';
import 'react-responsive-pagination/themes/classic.css';
import RoutesAddress from '@/utils/Routes';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';

const Singers = ({ pageServer }: { pageServer: number }) => {
    const [page, setPage] = useState(pageServer)
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
            <div className='-mb-52 pt-10 w-full flex flex-col gap-6 sm:gap-8 md:gap-12 lg:gap-16'>
                <h2 className='px-8 self-start font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl my-4'>تمامی خوانندگان:</h2>
                <AllSingers />
                <div className='w-full flex items-center justify-center gap-8 mt-16'>
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

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { query } = context;

    return {
        props: {
            pageServer: query.page || 1
        }
    }
};

export default Singers