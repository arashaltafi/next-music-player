import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Article from './Article'

const Main = () => {
    return (
        <div className="py-8 flex-1 flex flex-col gap-28 items-center justify-start bg-slate-800">
            <Header />
            <Article />
            <Footer />
        </div>
    )
}

export default Main