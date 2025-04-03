import React from 'react'
import { NavLink, Outlet} from 'react-router-dom'

function Product() {
    let activeStyle = ({ isActive }) => {
        return isActive ? 'text-slate-800 bg-emerald-200 rounded-lg font-semibold shadow-lg px-3 py-2' : 'px-3 py-2'
    }
    return (
        <>
            <div className='flex'>
                <nav className='text-2xl text-gray-800 bg-slate-200 h-auto shadow p-4'>
                    <ul className='items-center'>
                        <li className='mx-2 mb-8 '>
                            <NavLink to="shirt" className={activeStyle}>Shirts</NavLink>
                        </li>
                        <li className='mx-2 mb-8'>
                            <NavLink to="/jeans" className={activeStyle}>Jeans</NavLink>
                        </li>
                    </ul>
                </nav>
                <div className='flex-col w-screen'>
                    <h1 className="heading">All Products are Available</h1>
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default Product
