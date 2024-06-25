import React from 'react'

const Error = ({ statusCode }: any) => {
    return (
        <div className='flex items-center justify-center w-full h-screen'>
            <h1 className='text-5xl text-red-500'>صفحه خطا</h1>
            <p>
                {statusCode
                    ? `An error ${statusCode} occurred on server`
                    : 'An error occurred on client'}
            </p>
        </div>
    )
}

export default Error

Error.getInitialProps = ({ res, err }: any) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404
    return { statusCode }
}