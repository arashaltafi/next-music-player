import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Article from './Article'

const Main = () => {
    return (
        <div className="flex-1 w-full max-h-screen flex flex-col items-center justify-start bg-slate-800 overflow-y-auto">
            <div className='w-full flex flex-1 flex-col items-center justify-start overflow-y-auto'>
                <Header />
                <Article />
            </div>
            <Footer />
        </div>
    )
}

export default Main