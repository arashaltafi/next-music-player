import AllSingers from '@/components/AllSingers'
import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import ResponsivePagination from 'react-responsive-pagination';
import 'react-responsive-pagination/themes/classic.css';
import RoutesAddress from '@/utils/Routes';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client'
import { GET_SINGERS } from '@/graphql/graphql-queries'
import PaginationComponent from '@/components/PaginationComponent';

const Singers = ({ pageServer }: { pageServer: number }) => {
    const [page, setPage] = useState(pageServer)
    const router = useRouter()
    const [singersResponse, setSingerResponse] = useState<{
        id: number,
        name: string,
        image: string,
    }[]>()

    const { data } = useQuery(GET_SINGERS, {
        variables: {
            page,
            page_size: 5
        }
    });

    useEffect(() => {
        if (data?.singers?.data) {
            setSingerResponse(data.singers.data);
        }
    }, [data]);

    useEffect(() => {
        router.push(RoutesAddress.SINGER_ALL + "/?page=" + page)
    }, [page])

    return (
        <>
            <Head>
                <title>تمامی خوانندگان | موزیک آنلاین</title>
                <meta name="description" content="صفحه تمامی خوانندگان موزیک آنلاین" />
            </Head>
            <div className='-mb-52 pt-10 w-full flex flex-col'>
                <h2 className='px-8 self-start font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl my-4'>تمامی خوانندگان:</h2>
                <AllSingers data={singersResponse} />

                <div className='w-full flex items-center justify-center mt-16'>
                    <PaginationComponent
                        currentPage={page}
                        totalPage={Math.max(1, Math.ceil(data?.singers?.total / 5))}
                        setPageNumber={(pageNumber) => setPage(pageNumber)}
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