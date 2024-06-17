"use client";

import React, { useEffect } from 'react'
import { HiMenu } from "react-icons/hi";
import MenuItems from './MenuItems';

const SideBar = () => {
    // close menu on back click 
    useEffect(() => {
        window.addEventListener('popstate', () => {
            handleBlur()
        })
    }, [])

    const handleMenu = () => {
        const menu = document.getElementById("menu")
        const blur = document.getElementById("blur")
        if (menu && blur) {
            // add history state for handling back click
            window.history.pushState(null, document.title, window.location.href)
            menu.classList.remove("translate-x-[1000px]")
            blur.classList.remove("hidden")
        }
    }

    const handleBlur = () => {
        const menu = document.getElementById("menu")
        const blur = document.getElementById("blur")
        if (menu && blur) {
            menu.classList.add("translate-x-[1000px]")
            blur.classList.add("hidden")
        }
    }

    return (
        <>
            <aside className="overflow-y-auto hidden lg:flex select-none py-4 px-4 *:px-4 *:py-4 w-80 flex-col gap-10 items-center justify-start bg-slate-900">
                <MenuItems />
            </aside>

            <div className='absolute top-4 right-4 lg:hidden z-20 cursor-pointer hover:scale-105 active:scale-95 transition-all duration-150'>
                <HiMenu
                    onClick={handleMenu}
                />
            </div>

            <div
                id='menu'
                className='overflow-y-auto py-3 px-1 *:px-2 *:py-3 z-50 fixed top-0 right-0 bottom-0 w-3/4 flex flex-col gap-4 items-center justify-start bg-slate-900/80 lg:hidden transition-all duration-300 translate-x-[1000px]'>
                <MenuItems />
            </div>

            <div
                id='blur'
                onClick={handleBlur}
                className='z-40 fixed hidden lg:hidden inset-0 backdrop-blur-sm bg-brown-900/50 dark:bg-slate-800/50'
            />
        </>
    )
}

export default SideBar