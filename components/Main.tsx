import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Article from './Article'

const Main = () => {
    return (
        <div className="flex-1 pb-64 w-full flex flex-col items-center justify-start bg-slate-800">
            <Header />
            <Article />
            <Footer />
        </div>
    )
}

export default Main