import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
function Navbar() {
  const navigate = useNavigate()
  let activeStyle = ({ isActive }) => {
    return isActive ? 'text-slate-800 bg-emerald-100 rounded-lg py-1 px-3 font-semibold shadow-lg' : ''
  }
  return (
    <nav className='text-2xl text-emerald-200 bg-[#1A2238] shadow w-full flex justify-self-end px-3 pt-4 pb-0'>
      <ul className='flex items-center mb-4'>
        <li className='mr-5'>
          <NavLink to="/" className={activeStyle}>Home</NavLink>
        </li>
        <li className='mr-5'>
          <NavLink to="/about" className={activeStyle}>About</NavLink>
        </li>
        <li className='mr-5'>
          <NavLink to="/contact" className={activeStyle}>Contact</NavLink>
        </li>
        <li className='mr-5'>
          <NavLink to="/service" className={activeStyle}>Services</NavLink>
        </li>
        <li className='mr-5'>
          <NavLink to="/product" className={activeStyle}>Products</NavLink>
        </li>
      </ul>
      <button className='ml-[65%] mb-5 text-slate-800 bg-emerald-100 rounded-lg py-1 px-3 font-semibold shadow-lg' onClick={() => navigate(-1)}> Back</button>
    </nav>
  )
}

export default Navbar
