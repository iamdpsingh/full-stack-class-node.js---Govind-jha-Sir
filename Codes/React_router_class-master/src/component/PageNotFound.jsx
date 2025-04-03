import React from 'react'
import { NavLink } from 'react-router-dom'

function PageNotFound() {
    return (
        <>
            <main className="h-[92.2vh] w-full flex flex-col justify-center items-center bg-[#1A2238]">
                <h1 className="text-9xl font-extrabold text-white tracking-widest">404</h1>
                <div className="bg-emerald-300 px-2 text-sm rounded rotate-12 absolute">
                    Page Not Found
                </div>
                <button class="mt-5">
                    <span
                        className="relative inline-block text-sm font-medium text-emerald-300 group active:text-emerald-500 focus:outline-none focus:ring"
                    >
                        <span
                            className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-emerald-400 group-hover:translate-y-0 group-hover:translate-x-0"
                        ></span>
                        <span className="relative block px-8 py-3 bg-[#1A2238] border border-current">
                            <NavLink to="/">Go Home</NavLink>
                        </span>
                    </span>
                </button>
            </main>
        </>
    )
}

export default PageNotFound
